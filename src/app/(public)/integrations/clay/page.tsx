"use client";

import { useState } from "react";

const CLAY_BRAND = "#6C47FF";

const WHAT_IT_DOES = [
  {
    icon: "🔍",
    title: "Enrich Your Prospect List",
    body: "Pull in a Clay table of target accounts or contacts. Clay enriches them with company size, industry, seniority, and intent signals so you can qualify who deserves a gift before you spend a dollar.",
    points: ["Company and contact enrichment", "Account scoring and prioritization", "Intent signals and firmographics"],
  },
  {
    icon: "🎁",
    title: "Trigger a Curated Gift Send",
    body: "Map a Clay action to the Soto & Segovia portal. When a contact hits your criteria, a curated Spanish gourmet gift is queued for send, with optional approval before it ships.",
    points: ["Per-row gift actions from Clay tables", "AI-recommended gift selection", "Manual override or auto-send"],
  },
  {
    icon: "✅",
    title: "Approve and Ship",
    body: "Review the send queue in your Soto & Segovia client portal. Approve individually, approve in bulk, or let auto-send handle it. Every shipment is tracked from our warehouse to the recipient's door.",
    points: ["Approval workflow (optional)", "Batch sends of 1 to 1,000", "Full shipment tracking"],
  },
];

const USE_CASES = [
  {
    title: "ABM Outreach",
    body: "Identify high-value accounts in Clay and trigger a premium olive oil or curated gift box as a door-opener before your sales team reaches out.",
  },
  {
    title: "Pipeline Acceleration",
    body: "Flag deals that have gone cold in your CRM, pull them into Clay, and trigger a personalized gift to re-engage decision makers.",
  },
  {
    title: "Champion Gifting",
    body: "Enrich contacts by seniority and send meaningful gifts to economic buyers and champions at the moment they move roles or close a deal.",
  },
  {
    title: "Customer Journey Milestones",
    body: "Automate gifts at renewal, upsell, or loyalty milestones. Clay reads the trigger, Soto & Segovia ships the gift.",
  },
];

const STEPS = [
  { step: "01", title: "Build your table in Clay", body: "Load the accounts or contacts you want to gift. Enrich them with firmographic and intent data to qualify recipients." },
  { step: "02", title: "Add the Soto & Segovia action", body: "Configure the Clay action with your portal API key. Select gift type or let AI recommend based on enrichment data." },
  { step: "03", title: "Set your approval preference", body: "Choose manual approval, bulk approve, or fully automated sends. You stay in control of spend at every stage." },
  { step: "04", title: "Clay triggers the send", body: "When a row meets your criteria, the gift is queued in your client portal and shipped from our warehouse." },
  { step: "05", title: "Track delivery and engagement", body: "Monitor shipment status in your portal. Every send is logged so your team can follow up at the right moment." },
];

const REQUIREMENTS = [
  { title: "Clay Pro account", body: "Clay Pro or higher is required to use custom actions and webhooks." },
  { title: "Soto & Segovia client portal access", body: "An active client account at portal.sotoandsegovia.com with gifting enabled." },
  { title: "Portal API key", body: "Generated from your portal settings. We walk you through it during setup." },
  { title: "Gift budget configured", body: "Set a per-send or monthly spend cap in your portal to control costs." },
];

function SetupForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", clayWorkspace: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const scriptUrl = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
    if (!scriptUrl) { setStatus("error"); return; }
    try {
      const params = new URLSearchParams({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        type: "Clay Integration Setup",
        lang: "EN",
        message: `[CLAY INTEGRATION SETUP]\n\nCompany: ${form.company}\nClay Workspace: ${form.clayWorkspace}\n\n${form.message}`,
      });
      await fetch(`${scriptUrl}?${params.toString()}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 text-[14px] border outline-none focus:border-[#6C47FF] transition-colors";
  const inputStyle = { borderColor: "#E5E5E5", background: "#FAFAFA", color: "#1A1A1A" };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Request Received</p>
        <p className="text-[18px] font-bold mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>We will be in touch shortly.</p>
        <p className="text-[14px]" style={{ color: "#666" }}>Our team will reach out within 24 business hours to complete your Clay setup.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>First Name</label>
          <input type="text" required value={form.firstName} onChange={set("firstName")} className={inputClass} style={inputStyle} placeholder="Jorge" />
        </div>
        <div>
          <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Last Name</label>
          <input type="text" required value={form.lastName} onChange={set("lastName")} className={inputClass} style={inputStyle} placeholder="Soto" />
        </div>
      </div>
      <div>
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Work Email</label>
        <input type="email" required value={form.email} onChange={set("email")} className={inputClass} style={inputStyle} placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Company</label>
        <input type="text" required value={form.company} onChange={set("company")} className={inputClass} style={inputStyle} placeholder="Acme Corp" />
      </div>
      <div>
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>
          Clay Workspace <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span>
        </label>
        <input type="text" value={form.clayWorkspace} onChange={set("clayWorkspace")} className={inputClass} style={inputStyle} placeholder="e.g. acme.clay.com" />
        <p className="text-[11px] mt-1.5" style={{ color: "#999" }}>Speeds up the connection during setup.</p>
      </div>
      <div>
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>What are you trying to accomplish?</label>
        <textarea value={form.message} onChange={set("message")} rows={3} className={inputClass} style={inputStyle} placeholder="ABM outreach, pipeline acceleration, customer gifting..." />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 font-bold text-[12px] tracking-wider text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ background: CLAY_BRAND, fontFamily: "var(--font-cinzel), serif" }}
      >
        {status === "loading" ? "Sending..." : "Request Clay Setup"}
      </button>
    </form>
  );
}

export default function ClayIntegrationPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid #E8E4DC" }} className="px-6 pt-20 pb-0 text-center overflow-hidden">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-10" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Integrations · Outbound
        </p>

        {/* Logo */}
        <div className="flex flex-col items-center gap-5 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/clay.png" alt="Clay" style={{ height: 48, width: "auto" }} />
          <div className="flex items-center gap-3">
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#999" }}>Outbound Integration</span>
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-5 max-w-[700px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Trigger Curated Gifts Directly From Your Clay Tables
        </h1>
        <p className="text-[16px] max-w-[560px] mx-auto mb-10" style={{ color: "#666" }}>
          Enrich contacts, qualify accounts, and send hyper-personalized Spanish gourmet gifts as a native Clay action. No manual handoffs, no spreadsheets.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <a href="#setup" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white" style={{ background: CLAY_BRAND, fontFamily: "var(--font-cinzel), serif" }}>
            Request Setup
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 py-5 border-t" style={{ borderColor: "#E8E4DC" }}>
          <span className="text-[11px] tracking-widest uppercase" style={{ color: "#bbb" }}>Powered by</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#888", fontFamily: "system-ui, sans-serif" }}>Clay</span>
          <span style={{ color: "#ddd" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#888", fontFamily: "system-ui, sans-serif" }}>Soto & Segovia Portal</span>
          <span style={{ color: "#ddd" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#888", fontFamily: "system-ui, sans-serif" }}>Direct Fulfillment</span>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>How It Works</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Enrich, Qualify, Gift</h2>
          <p className="mt-4 text-[15px] max-w-[540px] mx-auto" style={{ color: "#666" }}>
            Clay handles the data. We handle the gift. Your team handles the follow-up.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHAT_IT_DOES.map((item) => (
            <div key={item.title} className="border-t-2 pt-8" style={{ borderColor: "#C9A227" }}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[15px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#666" }}>{item.body}</p>
              <ul className="flex flex-col gap-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[12px]" style={{ color: "#555" }}>
                    <span style={{ color: "#C9A227" }}>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section style={{ background: "#F7F5F0" }} className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Use Cases</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Gift at Every Stage of the Funnel</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="p-8" style={{ background: "#fff", border: "1px solid #E8E4DC" }}>
                <h3 className="font-bold text-[15px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{uc.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="max-w-[860px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Setup Flow</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>From Clay Table to Doorstep</h2>
        </div>
        <div className="flex flex-col gap-8">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: CLAY_BRAND, fontFamily: "var(--font-cinzel), serif" }}>
                {s.step}
              </div>
              <div className={i < STEPS.length - 1 ? "pb-8 border-b" : ""} style={{ borderColor: "#E8E4DC", flex: 1 }}>
                <h3 className="font-bold text-[15px] mb-1.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section style={{ background: "#F7F5F0" }} className="py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Requirements</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>What You Need to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REQUIREMENTS.map((r) => (
              <div key={r.title} className="p-6" style={{ background: "#fff", border: "1px solid #E8E4DC" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ color: CLAY_BRAND, fontSize: 16 }}>✓</span>
                  <h4 className="font-bold text-[13px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{r.title}</h4>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup form */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get Connected</p>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Set Up Your Clay Integration</h2>
            <p className="text-[14px]" style={{ color: "#666" }}>
              Fill out the form and our team will contact you within 24 business hours. We handle the configuration, you just need your Clay workspace and portal API key ready.
            </p>
          </div>
          <SetupForm />
        </div>
      </section>

    </div>
  );
}
