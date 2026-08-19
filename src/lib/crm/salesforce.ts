import type { CRMOrder } from "./types";

let _sfToken: { access_token: string; instance_url: string; expires: number } | null = null;

async function getSFToken() {
  if (_sfToken && Date.now() < _sfToken.expires) return _sfToken;

  const params = new URLSearchParams({
    grant_type: "password",
    client_id: process.env.SALESFORCE_CLIENT_ID ?? "",
    client_secret: process.env.SALESFORCE_CLIENT_SECRET ?? "",
    username: process.env.SALESFORCE_USERNAME ?? "",
    password: `${process.env.SALESFORCE_PASSWORD ?? ""}${process.env.SALESFORCE_SECURITY_TOKEN ?? ""}`,
  });

  const res = await fetch(`${process.env.SALESFORCE_LOGIN_URL ?? "https://login.salesforce.com"}/services/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(`Salesforce auth failed: ${JSON.stringify(data)}`);

  _sfToken = { access_token: data.access_token, instance_url: data.instance_url, expires: Date.now() + 60 * 60 * 1000 };
  return _sfToken;
}

async function sfQuery(soql: string) {
  const { access_token, instance_url } = await getSFToken();
  const res = await fetch(`${instance_url}/services/data/v59.0/query?q=${encodeURIComponent(soql)}`, {
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  return res.json();
}

async function sfCreate(object: string, data: Record<string, unknown>) {
  const { access_token, instance_url } = await getSFToken();
  const res = await fetch(`${instance_url}/services/data/v59.0/sobjects/${object}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function sfUpdate(object: string, id: string, data: Record<string, unknown>) {
  const { access_token, instance_url } = await getSFToken();
  await fetch(`${instance_url}/services/data/v59.0/sobjects/${object}/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function upsertAccount(order: CRMOrder): Promise<string | null> {
  const accountName = order.companyName || order.customerEmail.split("@")[1]?.split(".")[0] || order.customerName;
  const query = await sfQuery(`SELECT Id FROM Account WHERE Name = '${accountName.replace(/'/g, "\\'")}' LIMIT 1`);

  if (query.records?.length > 0) return query.records[0].Id;

  const result = await sfCreate("Account", {
    Name: accountName,
    BillingCountry: order.shippingAddress?.country ?? "",
    BillingState: order.shippingAddress?.state ?? "",
    BillingCity: order.shippingAddress?.city ?? "",
  });
  return result.id ?? null;
}

async function upsertContact(order: CRMOrder, accountId: string): Promise<string | null> {
  const [firstName, ...rest] = order.customerName.trim().split(" ");
  const lastName = rest.join(" ") || "-";

  const query = await sfQuery(`SELECT Id FROM Contact WHERE Email = '${order.customerEmail.replace(/'/g, "\\'")}' LIMIT 1`);

  if (query.records?.length > 0) {
    const contactId = query.records[0].Id;
    await sfUpdate("Contact", contactId, { FirstName: firstName, LastName: lastName, AccountId: accountId, Phone: order.customerPhone ?? "" });
    return contactId;
  }

  const result = await sfCreate("Contact", {
    FirstName: firstName,
    LastName: lastName,
    Email: order.customerEmail,
    Phone: order.customerPhone ?? "",
    AccountId: accountId,
    MailingCountry: order.shippingAddress?.country ?? "",
    MailingState: order.shippingAddress?.state ?? "",
    MailingCity: order.shippingAddress?.city ?? "",
  });
  return result.id ?? null;
}

async function createOpportunity(order: CRMOrder, contactId: string, accountId: string): Promise<string | null> {
  const linesSummary = order.lineItems
    .map((l) => `${l.quantity}x ${l.name} ($${(l.unitAmount / 100).toFixed(2)})`)
    .join(", ");

  const result = await sfCreate("Opportunity", {
    Name: `Order ${order.stripeSessionId.slice(-8).toUpperCase()} — ${order.customerName}`,
    AccountId: accountId,
    Amount: (order.amountTotal / 100).toFixed(2),
    CloseDate: order.createdAt.split("T")[0],
    StageName: order.status === "paid" ? "Closed Won" : "Prospecting",
    Description: linesSummary,
    LeadSource: "Web",
    CurrencyIsoCode: order.currency.toUpperCase(),
  });

  const opportunityId = result.id ?? null;

  if (opportunityId) {
    await sfCreate("OpportunityContactRole", {
      OpportunityId: opportunityId,
      ContactId: contactId,
      IsPrimary: true,
      Role: "Decision Maker",
    });
  }

  return opportunityId;
}

async function addTask(contactId: string, accountId: string, opportunityId: string, order: CRMOrder) {
  const body = order.lineItems
    .map((l) => `• ${l.quantity}x ${l.name} — $${(l.unitAmount / 100).toFixed(2)} each`)
    .join("\n");

  await sfCreate("Task", {
    Subject: `Purchase: Order ${order.stripeSessionId.slice(-8).toUpperCase()}`,
    Status: "Completed",
    Priority: "Normal",
    ActivityDate: order.createdAt.split("T")[0],
    WhoId: contactId,
    WhatId: opportunityId,
    Description: `Stripe Session: ${order.stripeSessionId}\nStatus: ${order.status}\nTotal: $${(order.amountTotal / 100).toFixed(2)}\n\nItems:\n${body}`,
  });
}

export async function syncToSalesforce(order: CRMOrder) {
  const required = ["SALESFORCE_CLIENT_ID", "SALESFORCE_CLIENT_SECRET", "SALESFORCE_USERNAME", "SALESFORCE_PASSWORD"];
  if (required.some((k) => !process.env[k])) return;

  try {
    const accountId = await upsertAccount(order);
    if (!accountId) throw new Error("Could not upsert Salesforce Account");

    const contactId = await upsertContact(order, accountId);
    if (!contactId) throw new Error("Could not upsert Salesforce Contact");

    const opportunityId = await createOpportunity(order, contactId, accountId);
    if (opportunityId) await addTask(contactId, accountId, opportunityId, order);

    console.log(`[Salesforce] synced contact=${contactId} account=${accountId} opportunity=${opportunityId}`);
  } catch (err) {
    console.error("[Salesforce] sync error:", err);
  }
}
