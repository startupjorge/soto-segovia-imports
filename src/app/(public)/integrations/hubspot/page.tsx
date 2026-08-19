"use client";

import { useState } from "react";
import Link from "next/link";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

const WHAT_SYNCS = [
  {
    object: "Contact Record",
    icon: "👤",
    fields: ["Full name", "Email address", "Phone number", "Company name", "Shipping address"],
    description: "Every buyer is automatically created or updated as a Contact in HubSpot. If the contact already exists, we update their record rather than create a duplicate.",
  },
  {
    object: "Deal Record",
    icon: "💼",
    fields: ["Deal name (Order ID + customer name)", "Deal amount", "Pipeline stage (Closed Won on payment)", "Close date", "Line item summary"],
    description: "Each completed Stripe order becomes a Deal in your default pipeline, already marked Closed Won so your revenue reporting is accurate from day one.",
  },
  {
    object: "Note / Engagement",
    icon: "📝",
    fields: ["Stripe session ID", "Payment status", "Order total", "Full line item breakdown", "Timestamp"],
    description: "A detailed note is attached to the Contact record so your sales team can see the full purchase history without leaving HubSpot.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Client places an order", body: "A customer completes checkout through Stripe on your storefront." },
  { step: "02", title: "Stripe fires a webhook", body: "Stripe sends a signed checkout.session.completed event to your Soto & Segovia portal endpoint." },
  { step: "03", title: "Contact is created or updated", body: "We search HubSpot for the customer's email. If found, we update the record. If not, we create a new Contact." },
  { step: "04", title: "Deal is created", body: "A new Deal is created in your HubSpot pipeline with the order amount, date, and line item detail, and linked to the Contact." },
  { step: "05", title: "Note is added", body: "A timestamped note with the full order breakdown is attached to the Contact so your team has the complete picture." },
];

function SetupForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", hubspotPortalId: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        type: "HubSpot Integration Setup",
        lang: "EN",
        message: `[HUBSPOT INTEGRATION SETUP]\n\nCompany: ${form.company}\nHubSpot Portal ID: ${form.hubspotPortalId}\n\n${form.message}`,
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
        <p className="text-sm" style={{ color: "#666" }}>Our team will reach out within 24 business hours to complete your HubSpot setup.</p>
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
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          HubSpot Portal ID <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional, speeds up setup)</span>
        </label>
        <input type="text" value={form.hubspotPortalId} onChange={set("hubspotPortalId")} className={inputClass} placeholder="e.g. 12345678" style={{ color: "#1A1A1A" }} />
        <p className="text-[11px] mt-1.5" style={{ color: "#999" }}>Found in HubSpot under Settings &rsaquo; Account &rsaquo; Account Details.</p>
      </div>
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Anything else <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span>
        </label>
        <textarea rows={4} value={form.message} onChange={set("message")} className={inputClass + " resize-none"} placeholder="Custom pipeline names, deal stages, any specific fields you want mapped..." style={{ color: "#1A1A1A" }} />
      </div>
      <div>
        <button type="submit" disabled={status === "loading"} className="px-10 py-3 font-bold text-[12px] text-white transition-all hover:opacity-90 disabled:opacity-50" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          {status === "loading" ? "Sending..." : "Request HubSpot Setup"}
        </button>
        {status === "error" && <p className="text-sm mt-3" style={{ color: "#e55" }}>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}

export default function HubSpotIntegrationPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Integrations · CRM
        </p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512" fill="#FF7A59">
            <path d="M267.4 211.6c-25.1 23.7-40.8 57-40.8 94 0 29.3 9.7 56.3 26 78L203.3 434c-6-2-12.4-3.2-19.1-3.2-34.5 0-62.4 28-62.4 62.6S149.8 556 184.2 556s62.4-28 62.4-62.6c0-9.7-2.2-18.9-6.2-27l49.5-50.2a158 158 0 0 0 78.2 20.5c87.6 0 158.6-71.4 158.6-159.5S455.7 117.7 368.1 117.7c-44.9 0-85.5 18.4-114.7 48zm159.9 158.9c-46.5 0-84.2-37.9-84.2-84.9s37.7-84.9 84.2-84.9S511.5 238 511.5 285s-37.7 85.5-84.2 85.5zM160 399.4c0-17.6 14.4-32 32-32s32 14.4 32 32-14.3 32-32 32-32-14.4-32-32z"/>
          </svg>
          <span className="text-white text-[28px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif" }}>HubSpot</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-[700px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Every Order, Automatically Synced to HubSpot
        </h1>
        <p className="text-[15px] max-w-[560px] mx-auto mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
          When a client places an order through your storefront, their contact record, deal, and full purchase history appear in HubSpot without any manual entry.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#setup" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Request Setup
          </a>
          <Link href="/integrations/salesforce" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border" style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}>
            View Salesforce Integration
          </Link>
        </div>
      </section>

      {/* What syncs */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>What Gets Synced</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Three HubSpot Objects, Fully Populated</h2>
          <p className="mt-4 text-[15px] max-w-[540px] mx-auto" style={{ color: "#666" }}>
            No partial syncs. Every order writes a complete, linked record across all three objects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>From Checkout to HubSpot in Seconds</h2>
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
            { title: "Active HubSpot account", body: "Any paid HubSpot plan with CRM access. Starter, Professional, or Enterprise." },
            { title: "HubSpot Private App Token", body: "A private app token with read/write access to Contacts, Deals, and Notes. We walk you through creating it." },
            { title: "Active Soto & Segovia portal account", body: "You need an active distributor or client portal account with Stripe connected." },
            { title: "That's it", body: "No developer required. Our team handles the webhook configuration and field mapping on our end." },
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
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Set Up Your HubSpot Integration</h2>
            <p className="text-[14px] leading-relaxed mb-6" style={{ color: "#555" }}>
              Fill out the form and our team will contact you within 24 business hours to complete the connection. We handle the configuration, you just need your HubSpot portal ID and a private app token ready.
            </p>
            <div className="flex flex-col gap-3 text-[13px]" style={{ color: "#555" }}>
              <p><span style={{ color: "#C9A227" }}>✓</span> Setup completed within 1 business day</p>
              <p><span style={{ color: "#C9A227" }}>✓</span> No developer required on your end</p>
              <p><span style={{ color: "#C9A227" }}>✓</span> Custom pipeline and field mapping available</p>
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
