"use client";

import { useState } from "react";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

const WHAT_SYNCS = [
  {
    object: "Account Record",
    icon: "🏢",
    fields: ["Account name (company or email domain)", "Billing country, state, city", "Auto-matched to existing accounts by name"],
    description: "Every order is tied to an Account. If the buyer provided a company name we use that. Otherwise we derive it from their email domain. Existing accounts are matched before creating new ones.",
  },
  {
    object: "Contact Record",
    icon: "👤",
    fields: ["Full name (first and last)", "Email address", "Phone number", "Mailing address", "Linked to Account"],
    description: "Buyers are created or updated as Contacts and linked to their Account. We search by email first so no duplicates are created for returning customers.",
  },
  {
    object: "Opportunity Record",
    icon: "📈",
    fields: ["Opportunity name (Order ID + customer name)", "Amount", "Stage (Closed Won on payment)", "Close date", "Lead source (Web)", "Line item summary", "Currency"],
    description: "Each completed order becomes a Closed Won Opportunity linked to both the Account and Contact, so your revenue reporting reflects real transactions from the moment they happen.",
  },
  {
    object: "Contact Role",
    icon: "🔗",
    fields: ["Primary contact flagged as Decision Maker", "Linked to Opportunity"],
    description: "The buyer is set as the primary Contact Role on the Opportunity so your team can see exactly who placed the order without manual association.",
  },
  {
    object: "Task / Activity",
    icon: "📋",
    fields: ["Subject: order reference", "Status: Completed", "Full line item breakdown", "Stripe session ID", "Linked to Contact and Opportunity"],
    description: "A completed Task is logged against the Contact and Opportunity with the full order detail so your activity timeline stays accurate.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Client places an order", body: "A customer completes checkout through Stripe on your storefront." },
  { step: "02", title: "Stripe fires a webhook", body: "Stripe sends a signed checkout.session.completed event to your Soto & Segovia portal endpoint." },
  { step: "03", title: "Account is matched or created", body: "We search Salesforce for an existing Account by company name. If found, we use it. If not, we create one." },
  { step: "04", title: "Contact is matched or created", body: "We search for a Contact by email. Existing contacts are updated. New buyers get a fresh Contact linked to the Account." },
  { step: "05", title: "Opportunity is created", body: "A Closed Won Opportunity is created with the order amount, date, and line items, linked to both the Account and Contact." },
  { step: "06", title: "Task is logged", body: "A completed Task with the full order breakdown is attached to the Contact and Opportunity for a clean activity timeline." },
];

function SetupForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", sfOrgId: "", sfEdition: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        type: "Salesforce Integration Setup",
        lang: "EN",
        message: `[SALESFORCE INTEGRATION SETUP]\n\nCompany: ${form.company}\nSalesforce Org ID: ${form.sfOrgId}\nSalesforce Edition: ${form.sfEdition}\n\n${form.message}`,
      });
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors";
  const labelClass = "block text-[11px] font-bold tracking-wider uppercase mb-2";

  if (status === "success") {
    return (
      <div className="border-l-4 p-8" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
        <p className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Request Received</p>
        <p className="text-sm" style={{ color: "#666" }}>Our team will reach out within 24 business hours to complete your Salesforce setup.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>First Name</label>
          <input required type="text" value={form.firstName} onChange={set("firstName")} className={inputClass} placeholder="First name" style={{ color: "#1A1A1A" }} />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Last Name</label>
          <input required type="text" value={form.lastName} onChange={set("lastName")} className={inputClass} placeholder="Last name" style={{ color: "#1A1A1A" }} />
        </div>
      </div>
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Work Email</label>
        <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@company.com" style={{ color: "#1A1A1A" }} />
      </div>
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Company</label>
        <input required type="text" value={form.company} onChange={set("company")} className={inputClass} placeholder="Your company name" style={{ color: "#1A1A1A" }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Salesforce Org ID <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span>
          </label>
          <input type="text" value={form.sfOrgId} onChange={set("sfOrgId")} className={inputClass} placeholder="00Dxx0000000000" style={{ color: "#1A1A1A" }} />
          <p className="text-[11px] mt-1.5" style={{ color: "#999" }}>Setup &rsaquo; Company Information &rsaquo; Salesforce.com Organization ID</p>
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Salesforce Edition</label>
          <select value={form.sfEdition} onChange={set("sfEdition")} className={inputClass + " bg-white"} style={{ color: form.sfEdition ? "#1A1A1A" : "#999" }}>
            <option value="">Select edition</option>
            <option value="Essentials">Essentials</option>
            <option value="Professional">Professional</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Unlimited">Unlimited</option>
            <option value="Developer">Developer</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Anything else <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span>
        </label>
        <textarea rows={4} value={form.message} onChange={set("message")} className={inputClass + " resize-none"} placeholder="Custom opportunity stages, field mappings, sandbox vs. production, any specific requirements..." style={{ color: "#1A1A1A" }} />
      </div>
      <div>
        <button type="submit" disabled={status === "loading"} className="px-10 py-3 font-bold text-[12px] text-white transition-all hover:opacity-90 disabled:opacity-50" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          {status === "loading" ? "Sending..." : "Request Salesforce Setup"}
        </button>
        {status === "error" && <p className="text-sm mt-3" style={{ color: "#e55" }}>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}

export default function SalesforceIntegrationPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#0B0E1A" }} className="px-6 pt-20 pb-0 text-center overflow-hidden">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-10" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Integrations · CRM
        </p>

        {/* Logo lockup */}
        <div className="flex flex-col items-center gap-5 mb-10">
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/salesforce.webp" alt="Salesforce" style={{ height: 90, width: "auto" }} />
          </div>

          {/* Integration badge */}
          <div className="flex items-center gap-3">
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>CRM Integration</span>
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-[740px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Orders Sync to Accounts, Contacts, and Opportunities Automatically
        </h1>
        <p className="text-[16px] max-w-[580px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
          Every completed purchase writes a full set of linked Salesforce records. No manual entry, no partial data, no lost deals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <a href="#setup" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white" style={{ background: "#00A1E0", fontFamily: "var(--font-cinzel), serif" }}>
            Request Setup
          </a>
        </div>

        {/* Bottom brand strip */}
        <div className="flex items-center justify-center gap-8 py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <span className="text-[11px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Powered by</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", fontFamily: "system-ui, sans-serif" }}>
            <span style={{ color: "rgba(0,161,224,0.7)" }}>sales</span>force
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "system-ui, sans-serif" }}>Stripe Webhooks</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "system-ui, sans-serif" }}>Soto & Segovia Portal</span>
        </div>
      </section>

      {/* What syncs */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>What Gets Synced</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Five Salesforce Objects, Fully Linked</h2>
          <p className="mt-4 text-[15px] max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Account, Contact, Opportunity, Contact Role, and Task — all created and linked in a single sync.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_SYNCS.map((obj) => (
            <div key={obj.object} className="border-t-2 pt-8" style={{ borderColor: "#C9A227" }}>
              <div className="text-3xl mb-3">{obj.icon}</div>
              <h3 className="font-bold text-[15px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{obj.object}</h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#666" }}>{obj.description}</p>
              <ul className="flex flex-col gap-1.5">
                {obj.fields.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px]" style={{ color: "#555" }}>
                    <span style={{ color: "#C9A227" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>How It Works</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>From Checkout to Salesforce in Seconds</h2>
          </div>
          <div className="flex flex-col gap-0">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="flex gap-8 items-start py-7" style={{ borderBottom: i < HOW_IT_WORKS.length - 1 ? "1px solid #e8e8e8" : "none" }}>
                <div className="flex-shrink-0 text-[11px] font-bold tracking-widest pt-0.5" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif", minWidth: "2rem" }}>{step.step}</div>
                <div>
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{step.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-[860px] mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Requirements</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>What You Need</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Salesforce Professional or higher", body: "The integration uses standard Salesforce objects. Professional, Enterprise, Unlimited, and Developer editions are all supported." },
            { title: "Connected App credentials", body: "A Salesforce Connected App with OAuth2 client credentials. We provide step-by-step setup instructions and can assist if needed." },
            { title: "Active Soto & Segovia portal account", body: "You need an active distributor or client portal account with Stripe connected." },
            { title: "That's it", body: "No custom Apex code, no third-party middleware. Our team handles the configuration against your org's standard objects." },
          ].map((req) => (
            <div key={req.title} className="flex gap-4 p-6" style={{ background: "#F8F8F4" }}>
              <span className="flex-shrink-0 mt-0.5" style={{ color: "#C9A227" }}>✓</span>
              <div>
                <p className="font-bold text-[13px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{req.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{req.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setup form */}
      <section id="setup" style={{ background: "#F8F8F4" }} className="px-6 py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get Connected</p>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Set Up Your Salesforce Integration</h2>
            <p className="text-[14px] leading-relaxed mb-6" style={{ color: "#555" }}>
              Fill out the form and our team will contact you within 24 business hours to complete the connection. We guide you through the Connected App setup and handle all field mapping on our end.
            </p>
            <div className="flex flex-col gap-3 text-[13px]" style={{ color: "#555" }}>
              <p><span style={{ color: "#C9A227" }}>✓</span> Setup completed within 1 business day</p>
              <p><span style={{ color: "#C9A227" }}>✓</span> Sandbox testing available before production</p>
              <p><span style={{ color: "#C9A227" }}>✓</span> Custom opportunity stages and field mapping</p>
              <p><span style={{ color: "#C9A227" }}>✓</span> Included with all portal plans</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <SetupForm />
          </div>
        </div>
      </section>

    </div>
  );
}
