"use client";

import { useState } from "react";

const GOLD = "#C9A227";
const CODE_BG = "#0D1117";
const CODE_BORDER = "#21262D";

const ENDPOINTS = [
  {
    group: "Orders",
    color: "#3B82F6",
    items: [
      { method: "POST",   path: "/v1/orders",         summary: "Create a gift order" },
      { method: "GET",    path: "/v1/orders",         summary: "List all orders" },
      { method: "GET",    path: "/v1/orders/{id}",    summary: "Get order details" },
      { method: "PATCH",  path: "/v1/orders/{id}",    summary: "Update an order" },
      { method: "DELETE", path: "/v1/orders/{id}",    summary: "Cancel an order" },
    ],
  },
  {
    group: "Products",
    color: "#10B981",
    items: [
      { method: "GET", path: "/v1/products",          summary: "List all products" },
      { method: "GET", path: "/v1/products/{slug}",   summary: "Get product details" },
    ],
  },
  {
    group: "Recipients",
    color: "#8B5CF6",
    items: [
      { method: "POST",   path: "/v1/recipients",     summary: "Create a recipient" },
      { method: "GET",    path: "/v1/recipients",     summary: "List recipients" },
      { method: "GET",    path: "/v1/recipients/{id}", summary: "Get recipient" },
      { method: "PATCH",  path: "/v1/recipients/{id}", summary: "Update recipient" },
      { method: "DELETE", path: "/v1/recipients/{id}", summary: "Remove recipient" },
    ],
  },
  {
    group: "Gift Sends",
    color: "#F59E0B",
    items: [
      { method: "POST", path: "/v1/gifts/send",       summary: "Send a gift" },
      { method: "POST", path: "/v1/gifts/bulk",       summary: "Bulk send gifts" },
      { method: "POST", path: "/v1/gifts/recommend",  summary: "Get AI gift recommendations" },
    ],
  },
  {
    group: "Tracking",
    color: "#EC4899",
    items: [
      { method: "GET", path: "/v1/tracking/{order_id}", summary: "Get shipment tracking" },
    ],
  },
  {
    group: "Webhooks",
    color: "#06B6D4",
    items: [
      { method: "POST",   path: "/v1/webhooks",       summary: "Register a webhook endpoint" },
      { method: "GET",    path: "/v1/webhooks",       summary: "List webhooks" },
      { method: "DELETE", path: "/v1/webhooks/{id}",  summary: "Remove a webhook" },
    ],
  },
];

const METHOD_COLORS: Record<string, string> = {
  GET:    "#10B981",
  POST:   "#3B82F6",
  PATCH:  "#F59E0B",
  DELETE: "#EF4444",
};

const WEBHOOK_EVENTS = [
  { event: "order.created",   description: "A new order was successfully placed." },
  { event: "order.shipped",   description: "An order has been picked up by the carrier." },
  { event: "order.delivered", description: "Carrier confirmed delivery to the recipient." },
  { event: "order.cancelled", description: "An order was cancelled before fulfillment." },
  { event: "gift.opened",     description: "Recipient scanned the gift QR code (if enabled)." },
];

const ERRORS = [
  { code: "400", name: "bad_request",        description: "Missing or invalid request parameters." },
  { code: "401", name: "unauthorized",       description: "Invalid or missing API key." },
  { code: "403", name: "forbidden",          description: "Valid key but insufficient permissions." },
  { code: "404", name: "not_found",          description: "The requested resource does not exist." },
  { code: "409", name: "conflict",           description: "Duplicate order or recipient detected." },
  { code: "422", name: "unprocessable",      description: "Request body is valid JSON but fails validation." },
  { code: "429", name: "rate_limit_exceeded", description: "Too many requests. Back off and retry." },
  { code: "500", name: "server_error",       description: "Internal error on our side. Retry with exponential backoff." },
];

function Code({ lang, children }: { lang?: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="relative rounded-none text-[13px]" style={{ background: CODE_BG, border: `1px solid ${CODE_BORDER}` }}>
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: CODE_BORDER }}>
        <span className="text-[10px] uppercase tracking-widest" style={{ color: "#666" }}>{lang ?? "json"}</span>
        <button onClick={copy} className="text-[10px] uppercase tracking-widest transition-colors" style={{ color: copied ? GOLD : "#555" }}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 leading-relaxed" style={{ color: "#E6EDF3" }}>
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
}

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-b" style={{ borderColor: "#F0EDE8" }}>
      <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: GOLD, fontFamily: "var(--font-cinzel), serif" }}>{label}</p>
      <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{title}</h2>
      {children}
    </section>
  );
}

function RequestForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", useCase: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const url = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
    if (!url) { setStatus("error"); return; }
    try {
      const p = new URLSearchParams({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        type: "API Access Request",
        lang: "EN",
        message: `[API ACCESS REQUEST]\n\nCompany: ${form.company}\nUse Case: ${form.useCase}\n\n${form.message}`,
      });
      await fetch(`${url}?${p}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  const iClass = "w-full px-4 py-3 text-[13px] border outline-none focus:border-[#C9A227] transition-colors";
  const iStyle = { borderColor: "#E5E5E5", background: "#FAFAFA", color: "#1A1A1A" };

  if (status === "success") return (
    <div className="text-center py-10">
      <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: GOLD, fontFamily: "var(--font-cinzel), serif" }}>Request Received</p>
      <p className="font-bold text-[17px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>We will be in touch within 24 hours.</p>
      <p className="text-[13px]" style={{ color: "#666" }}>You will receive your API key and sandbox credentials by email.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>First Name</label>
          <input required type="text" value={form.firstName} onChange={set("firstName")} className={iClass} style={iStyle} placeholder="Jorge" /></div>
        <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Last Name</label>
          <input required type="text" value={form.lastName} onChange={set("lastName")} className={iClass} style={iStyle} placeholder="Soto" /></div>
      </div>
      <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Work Email</label>
        <input required type="email" value={form.email} onChange={set("email")} className={iClass} style={iStyle} placeholder="you@company.com" /></div>
      <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Company</label>
        <input required type="text" value={form.company} onChange={set("company")} className={iClass} style={iStyle} placeholder="Acme Corp" /></div>
      <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>What are you building?</label>
        <select value={form.useCase} onChange={set("useCase")} className={iClass} style={iStyle}>
          <option value="">Select one...</option>
          <option>CRM gifting automation</option>
          <option>Sales outreach tooling</option>
          <option>AI agent / MCP integration</option>
          <option>Internal gifting platform</option>
          <option>Customer-facing gifting product</option>
          <option>Data / analytics integration</option>
          <option>Other</option>
        </select>
      </div>
      <div><label className="block text-[10px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Tell us more <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span></label>
        <textarea value={form.message} onChange={set("message")} rows={3} className={iClass} style={iStyle} placeholder="Expected volume, languages, existing stack..." /></div>
      <button type="submit" disabled={status === "loading"}
        className="w-full py-4 font-bold text-[12px] tracking-wider text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
        style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
        {status === "loading" ? "Sending..." : "Request API Access"}
      </button>
    </form>
  );
}

export default function APIReferencePage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: CODE_BG }} className="px-6 pt-20 pb-0 text-center overflow-hidden">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-8" style={{ color: GOLD, fontFamily: "var(--font-cinzel), serif" }}>
          Developer API
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-[740px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Build on the Soto & Segovia Gifting Platform
        </h1>
        <p className="text-[16px] max-w-[580px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
          A RESTful API for ordering, tracking, and managing curated Spanish gourmet gifts at any scale. Integrate gifting into your CRM, sales tools, or AI agents.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="#get-key" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white" style={{ background: GOLD, fontFamily: "var(--font-cinzel), serif" }}>
            Request API Key
          </a>
          <a href="#endpoints" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-cinzel), serif" }}>
            Browse Endpoints
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex items-center justify-center gap-10 py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {[
            { val: "REST", label: "Architecture" },
            { val: "JSON", label: "Format" },
            { val: "TLS 1.3", label: "Transport" },
            { val: "v1", label: "Current Version" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-[15px] font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>{s.val}</p>
              <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Docs body */}
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Authentication */}
        <Section id="auth" label="Authentication" title="API Keys">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: "#555" }}>
                All requests require a Bearer token in the <code className="text-[12px] px-1.5 py-0.5 rounded" style={{ background: "#F5F0E8", color: "#1A1A1A" }}>Authorization</code> header. API keys are scoped to your client portal account and can be generated from <strong>Settings &rsaquo; API Keys</strong>.
              </p>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: "#555" }}>
                Keep your key secret. Rotate it immediately if it is ever exposed. Keys do not expire but can be revoked from your portal at any time.
              </p>
              <div className="p-4 border-l-2" style={{ borderColor: GOLD, background: "#FDFBF6" }}>
                <p className="text-[12px] font-semibold mb-1" style={{ color: "#1A1A1A" }}>Sandbox vs Production</p>
                <p className="text-[12px]" style={{ color: "#666" }}>Keys prefixed with <code style={{ color: GOLD }}>sk_test_</code> hit the sandbox environment. Production keys use <code style={{ color: GOLD }}>sk_live_</code>. No real orders are placed in sandbox.</p>
              </div>
            </div>
            <Code lang="bash">{`# Include in every request
curl https://api.sotosegoviaimports.com/v1/orders \\
  -H "Authorization: Bearer sk_live_••••••••••••••••" \\
  -H "Content-Type: application/json"`}</Code>
          </div>
        </Section>

        {/* Base URL */}
        <Section id="base-url" label="Base URL" title="Endpoint Root">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: "#555" }}>
                All API endpoints are rooted at the base URL below. The current stable version is <strong>v1</strong>. Version is part of the path, not a header.
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: "#555" }}>
                Sandbox requests use the same base URL. The environment is determined by your API key prefix.
              </p>
            </div>
            <Code lang="text">{`Production:
https://api.sotosegoviaimports.com/v1

Sandbox:
https://api.sotosegoviaimports.com/v1
(use sk_test_ key)`}</Code>
          </div>
        </Section>

        {/* Endpoints */}
        <Section id="endpoints" label="Endpoints" title="Full Endpoint Reference">
          <div className="flex flex-col gap-6">
            {ENDPOINTS.map(group => (
              <div key={group.group}>
                <h3 className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: group.color }}>{group.group}</h3>
                <div className="border rounded-none overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
                  {group.items.map((item, i) => (
                    <div key={item.path} className={`flex items-center gap-4 px-5 py-3 ${i < group.items.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#F0EDE8" }}>
                      <span className="text-[10px] font-bold w-14 shrink-0 text-right" style={{ color: METHOD_COLORS[item.method] ?? "#888" }}>{item.method}</span>
                      <code className="text-[12px] flex-1" style={{ color: "#1A1A1A", fontFamily: "monospace" }}>{item.path}</code>
                      <span className="text-[12px] hidden sm:block" style={{ color: "#888" }}>{item.summary}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Orders */}
        <Section id="orders" label="Orders" title="Create & Manage Orders">
          <div className="flex flex-col gap-10">

            <div>
              <h3 className="font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Create an Order</h3>
              <p className="text-[13px] mb-4" style={{ color: "#666" }}>Places a new gift order. Returns the order object with status <code style={{ color: GOLD }}>pending</code> until payment is confirmed.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Code lang="Request">{`POST /v1/orders
Authorization: Bearer sk_live_••••

{
  "product_slug": "iberian-olive-oil-collection",
  "quantity": 1,
  "recipient": {
    "name": "Sarah Johnson",
    "email": "sarah@acme.com",
    "address": {
      "line1": "123 Park Ave",
      "city": "New York",
      "state": "NY",
      "postal_code": "10001",
      "country": "US"
    }
  },
  "gift_message": "Congratulations on the promotion!",
  "notify_recipient": true
}`}</Code>
                <Code lang="Response">{`{
  "id": "ord_1a2b3c4d",
  "status": "pending",
  "product_slug": "iberian-olive-oil-collection",
  "quantity": 1,
  "amount": 8500,
  "currency": "usd",
  "recipient": {
    "name": "Sarah Johnson",
    "email": "sarah@acme.com"
  },
  "tracking_number": null,
  "created_at": "2026-08-19T21:00:00Z",
  "updated_at": "2026-08-19T21:00:00Z"
}`}</Code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>List Orders</h3>
              <p className="text-[13px] mb-4" style={{ color: "#666" }}>Returns a paginated list of orders. Supports filtering by status, date range, and recipient email.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Code lang="Request">{`GET /v1/orders?status=shipped&limit=20&page=1
Authorization: Bearer sk_live_••••`}</Code>
                <Code lang="Response">{`{
  "data": [
    {
      "id": "ord_1a2b3c4d",
      "status": "shipped",
      "recipient": {
        "name": "Sarah Johnson"
      },
      "amount": 8500,
      "created_at": "2026-08-19T21:00:00Z"
    }
  ],
  "meta": {
    "total": 84,
    "page": 1,
    "limit": 20,
    "has_more": true
  }
}`}</Code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Update an Order</h3>
              <p className="text-[13px] mb-4" style={{ color: "#666" }}>Update address, gift message, or recipient details. Only possible while status is <code style={{ color: GOLD }}>pending</code>.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Code lang="Request">{`PATCH /v1/orders/ord_1a2b3c4d
Authorization: Bearer sk_live_••••

{
  "gift_message": "Updated: Congrats on the new role!",
  "recipient": {
    "address": {
      "line1": "456 5th Ave",
      "city": "New York",
      "state": "NY",
      "postal_code": "10018",
      "country": "US"
    }
  }
}`}</Code>
                <Code lang="Response">{`{
  "id": "ord_1a2b3c4d",
  "status": "pending",
  "gift_message": "Updated: Congrats on the new role!",
  "updated_at": "2026-08-19T21:05:00Z"
}`}</Code>
              </div>
            </div>

          </div>
        </Section>

        {/* Bulk Gifts */}
        <Section id="bulk" label="Gift Sends" title="Bulk Gifting">
          <p className="text-[14px] mb-6" style={{ color: "#555" }}>Send the same gift to multiple recipients in a single API call. Each recipient gets an independent order record. Useful for ABM campaigns and event follow-up sends.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Code lang="Request">{`POST /v1/gifts/bulk
Authorization: Bearer sk_live_••••

{
  "product_slug": "spanish-salt-gift-box",
  "gift_message": "Thank you for meeting with us.",
  "recipients": [
    {
      "name": "Marcus Lee",
      "email": "marcus@company.com",
      "address": { "line1": "...", "city": "Austin", "state": "TX", "postal_code": "73301", "country": "US" }
    },
    {
      "name": "Priya Patel",
      "email": "priya@startup.io",
      "address": { "line1": "...", "city": "SF", "state": "CA", "postal_code": "94105", "country": "US" }
    }
  ]
}`}</Code>
            <Code lang="Response">{`{
  "batch_id": "bat_x9y8z7",
  "status": "processing",
  "total": 2,
  "orders": [
    { "id": "ord_aaa111", "recipient_email": "marcus@company.com", "status": "pending" },
    { "id": "ord_bbb222", "recipient_email": "priya@startup.io", "status": "pending" }
  ],
  "created_at": "2026-08-19T21:00:00Z"
}`}</Code>
          </div>
        </Section>

        {/* Recommendations */}
        <Section id="recommend" label="AI Recommendations" title="Gift Recommendations">
          <p className="text-[14px] mb-6" style={{ color: "#555" }}>Pass context about a recipient and receive a ranked list of product recommendations with reasoning. Powers the Claude MCP <code className="text-[12px] px-1 py-0.5" style={{ background: "#F5F0E8" }}>get_gift_recommendation</code> tool.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Code lang="Request">{`POST /v1/gifts/recommend
Authorization: Bearer sk_live_••••

{
  "recipient_context": {
    "role": "CFO",
    "industry": "Technology",
    "location": "New York, NY",
    "occasion": "Deal close",
    "budget_cents": 15000
  }
}`}</Code>
            <Code lang="Response">{`{
  "recommendations": [
    {
      "rank": 1,
      "product_slug": "iberian-olive-oil-collection",
      "name": "Iberian Olive Oil Collection",
      "price_cents": 8500,
      "reasoning": "Premium presentation suited to executive gifting. Ships well to NY."
    },
    {
      "rank": 2,
      "product_slug": "premium-salt-vinegar-set",
      "name": "Premium Salt & Vinegar Set",
      "price_cents": 7200,
      "reasoning": "Culinary focus appeals broadly to executives."
    }
  ]
}`}</Code>
          </div>
        </Section>

        {/* Tracking */}
        <Section id="tracking" label="Tracking" title="Shipment Tracking">
          <p className="text-[14px] mb-6" style={{ color: "#555" }}>Poll the tracking endpoint after an order moves to <code style={{ color: GOLD }}>shipped</code> status, or listen for <code style={{ color: GOLD }}>order.shipped</code> and <code style={{ color: GOLD }}>order.delivered</code> webhook events.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Code lang="Request">{`GET /v1/tracking/ord_1a2b3c4d
Authorization: Bearer sk_live_••••`}</Code>
            <Code lang="Response">{`{
  "order_id": "ord_1a2b3c4d",
  "carrier": "UPS",
  "tracking_number": "1Z999AA10123456784",
  "tracking_url": "https://ups.com/track?num=...",
  "status": "in_transit",
  "estimated_delivery": "2026-08-22",
  "events": [
    {
      "timestamp": "2026-08-20T08:00:00Z",
      "description": "Package picked up",
      "location": "Miami, FL"
    },
    {
      "timestamp": "2026-08-20T18:30:00Z",
      "description": "In transit",
      "location": "Charlotte, NC"
    }
  ]
}`}</Code>
          </div>
        </Section>

        {/* Webhooks */}
        <Section id="webhooks" label="Webhooks" title="Event Webhooks">
          <p className="text-[14px] mb-6" style={{ color: "#555" }}>Register an HTTPS endpoint to receive real-time event notifications. Each delivery includes an <code className="text-[12px] px-1 py-0.5" style={{ background: "#F5F0E8" }}>X-SS-Signature</code> header you should verify using your webhook secret.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[13px] mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Available Events</h3>
              <div className="flex flex-col gap-2">
                {WEBHOOK_EVENTS.map(e => (
                  <div key={e.event} className="flex gap-3 items-start py-2 border-b" style={{ borderColor: "#F0EDE8" }}>
                    <code className="text-[11px] shrink-0 mt-0.5" style={{ color: GOLD }}>{e.event}</code>
                    <p className="text-[12px]" style={{ color: "#666" }}>{e.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <Code lang="Webhook Payload">{`{
  "id": "evt_abc123",
  "type": "order.shipped",
  "created_at": "2026-08-20T08:00:00Z",
  "data": {
    "order_id": "ord_1a2b3c4d",
    "tracking_number": "1Z999AA10123456784",
    "carrier": "UPS",
    "recipient_email": "sarah@acme.com"
  }
}

# Verify signature
X-SS-Signature: sha256=a1b2c3d4...`}</Code>
          </div>
        </Section>

        {/* Rate limits */}
        <Section id="rate-limits" label="Rate Limits" title="Rate Limits & Pagination">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[13px] mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Rate Limits</h3>
              <div className="flex flex-col gap-3">
                {[
                  { tier: "Standard", limit: "120 requests / minute" },
                  { tier: "Bulk endpoints", limit: "20 requests / minute" },
                  { tier: "Recommendations", limit: "30 requests / minute" },
                ].map(r => (
                  <div key={r.tier} className="flex justify-between py-2 border-b text-[13px]" style={{ borderColor: "#F0EDE8" }}>
                    <span style={{ color: "#555" }}>{r.tier}</span>
                    <span className="font-semibold" style={{ color: "#1A1A1A" }}>{r.limit}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] mt-3" style={{ color: "#888" }}>Rate limit status is returned in every response via <code>X-RateLimit-Remaining</code> and <code>X-RateLimit-Reset</code> headers. Use exponential backoff on 429 responses.</p>
            </div>
            <div>
              <h3 className="font-bold text-[13px] mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Pagination</h3>
              <p className="text-[13px] mb-4" style={{ color: "#666" }}>List endpoints use offset pagination via <code>page</code> and <code>limit</code> query parameters. Default limit is 20, max is 100.</p>
              <Code lang="Query Params">{`GET /v1/orders?page=2&limit=50

# Response includes:
{
  "meta": {
    "total": 240,
    "page": 2,
    "limit": 50,
    "has_more": true
  }
}`}</Code>
            </div>
          </div>
        </Section>

        {/* Errors */}
        <Section id="errors" label="Errors" title="Error Codes">
          <p className="text-[14px] mb-6" style={{ color: "#555" }}>All errors return a JSON body with <code style={{ color: GOLD }}>error</code> (machine-readable code) and <code style={{ color: GOLD }}>message</code> (human-readable). HTTP status codes follow standard conventions.</p>
          <div className="border rounded-none overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
            {ERRORS.map((e, i) => (
              <div key={e.code} className={`flex items-start gap-5 px-5 py-3 ${i < ERRORS.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#F0EDE8" }}>
                <span className="text-[12px] font-bold w-10 shrink-0" style={{ color: parseInt(e.code) >= 500 ? "#EF4444" : parseInt(e.code) >= 400 ? "#F59E0B" : "#10B981" }}>{e.code}</span>
                <code className="text-[11px] w-40 shrink-0 mt-0.5" style={{ color: "#888" }}>{e.name}</code>
                <span className="text-[12px]" style={{ color: "#555" }}>{e.description}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Code lang="Error Response">{`{
  "error": "rate_limit_exceeded",
  "message": "You have exceeded the rate limit of 120 requests per minute.",
  "retry_after": 38
}`}</Code>
          </div>
        </Section>

        {/* SDKs */}
        <Section id="sdks" label="SDKs & Tools" title="Libraries & Integrations">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Node.js / TypeScript", status: "Coming Soon", note: "npm install @soto-segovia/api" },
              { name: "Python", status: "Coming Soon", note: "pip install soto-segovia" },
              { name: "Claude MCP Server", status: "Available", note: "JSON config, no code required" },
            ].map(s => (
              <div key={s.name} className="p-5 border" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-[13px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{s.name}</p>
                  <span className="text-[9px] px-2 py-0.5 uppercase tracking-wider" style={{
                    background: s.status === "Available" ? "#D1FAE5" : "#FEF3C7",
                    color: s.status === "Available" ? "#065F46" : "#92400E"
                  }}>{s.status}</span>
                </div>
                <code className="text-[11px]" style={{ color: "#999" }}>{s.note}</code>
              </div>
            ))}
          </div>
          <p className="text-[13px]" style={{ color: "#888" }}>
            Until native SDKs ship, any HTTP client works. The API is fully OpenAPI 3.1 compliant — import the spec into Postman, Insomnia, or any compatible tool.{" "}
            <a href="#get-key" style={{ color: GOLD }}>Request API access</a> to receive the OpenAPI spec.
          </p>
        </Section>

        {/* Get key form */}
        <section id="get-key" className="py-16 mb-10">
          <div className="max-w-[600px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: GOLD, fontFamily: "var(--font-cinzel), serif" }}>Get Access</p>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Request Your API Key</h2>
              <p className="text-[14px]" style={{ color: "#666" }}>
                We issue API keys manually to ensure quality integrations. Tell us what you are building and we will send sandbox credentials within 24 hours.
              </p>
            </div>
            <RequestForm />
          </div>
        </section>

      </div>
    </div>
  );
}
