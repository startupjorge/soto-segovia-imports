import type { CRMOrder } from "./types";

const BASE = "https://api.hubapi.com";

function headers() {
  return {
    Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };
}

async function upsertContact(order: CRMOrder): Promise<string | null> {
  const [firstName, ...rest] = order.customerName.trim().split(" ");
  const lastName = rest.join(" ") || "-";

  const searchRes = await fetch(`${BASE}/crm/v3/objects/contacts/search`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: order.customerEmail }] }],
    }),
  });
  const searchData = await searchRes.json();

  if (searchData.results?.length > 0) {
    const contactId = searchData.results[0].id;
    await fetch(`${BASE}/crm/v3/objects/contacts/${contactId}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({
        properties: { firstname: firstName, lastname: lastName, phone: order.customerPhone ?? "" },
      }),
    });
    return contactId;
  }

  const createRes = await fetch(`${BASE}/crm/v3/objects/contacts`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      properties: {
        email: order.customerEmail,
        firstname: firstName,
        lastname: lastName,
        phone: order.customerPhone ?? "",
        company: order.companyName ?? "",
      },
    }),
  });
  const created = await createRes.json();
  return created.id ?? null;
}

async function createDeal(contactId: string, order: CRMOrder): Promise<string | null> {
  const linesSummary = order.lineItems
    .map((l) => `${l.quantity}x ${l.name} ($${(l.unitAmount / 100).toFixed(2)})`)
    .join(", ");

  const createRes = await fetch(`${BASE}/crm/v3/objects/deals`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      properties: {
        dealname: `Order ${order.stripeSessionId.slice(-8).toUpperCase()} — ${order.customerName}`,
        amount: (order.amountTotal / 100).toFixed(2),
        dealstage: order.status === "paid" ? "closedwon" : "appointmentscheduled",
        pipeline: "default",
        closedate: order.createdAt,
        description: linesSummary,
        hs_analytics_source: "DIRECT_TRAFFIC",
      },
    }),
  });
  const deal = await createRes.json();
  const dealId = deal.id ?? null;

  if (dealId) {
    await fetch(`${BASE}/crm/v4/objects/deals/${dealId}/associations/contacts/${contactId}/deal_to_contact`, {
      method: "PUT",
      headers: headers(),
    });
  }

  return dealId;
}

async function addEngagement(contactId: string, order: CRMOrder) {
  const body = order.lineItems
    .map((l) => `• ${l.quantity}x ${l.name} — $${(l.unitAmount / 100).toFixed(2)} each`)
    .join("\n");

  await fetch(`${BASE}/crm/v3/objects/notes`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      properties: {
        hs_note_body: `Stripe Order ${order.stripeSessionId}\nStatus: ${order.status}\nTotal: $${(order.amountTotal / 100).toFixed(2)}\n\nItems:\n${body}`,
        hs_timestamp: new Date(order.createdAt).getTime().toString(),
      },
      associations: [
        { to: { id: contactId }, types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }] },
      ],
    }),
  });
}

export async function syncToHubSpot(order: CRMOrder) {
  if (!process.env.HUBSPOT_ACCESS_TOKEN) return;

  try {
    const contactId = await upsertContact(order);
    if (!contactId) throw new Error("Could not upsert HubSpot contact");

    const dealId = await createDeal(contactId, order);
    await addEngagement(contactId, order);

    console.log(`[HubSpot] synced contact=${contactId} deal=${dealId}`);
  } catch (err) {
    console.error("[HubSpot] sync error:", err);
  }
}
