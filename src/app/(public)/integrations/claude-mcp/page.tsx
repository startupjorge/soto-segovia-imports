"use client";

import { useState } from "react";

const CLAUDE_ORANGE = "#D97757";
const CLAUDE_BG = "#FAF7F2";

const TOOLS = [
  {
    name: "browse_catalog",
    icon: "🔍",
    description: "Search and filter the full Soto & Segovia product catalog by category, price range, origin, or dietary profile.",
    example: '"Find olive oils from Spain under $80 suitable for a corporate gift."',
  },
  {
    name: "get_gift_recommendation",
    icon: "🎁",
    description: "Pass recipient context and Claude returns a curated gift recommendation with reasoning, product links, and pricing.",
    example: '"Recommend a gift for a CFO who enjoys cooking and is based in New York."',
  },
  {
    name: "create_gift_order",
    icon: "📦",
    description: "Place a gift order directly from a Claude conversation. Supports single sends and bulk orders with custom messages.",
    example: '"Send the Iberian Olive Oil Collection to Sarah at Acme Corp with a congratulations note."',
  },
  {
    name: "check_order_status",
    icon: "📍",
    description: "Query the status of any order by ID or recipient email. Returns shipping status, tracking number, and estimated delivery.",
    example: '"What is the delivery status for the order sent to michael@company.com last week?"',
  },
  {
    name: "list_orders",
    icon: "📋",
    description: "Pull a summary of recent orders from your portal, filtered by date range, status, or recipient.",
    example: '"Show me all pending orders from this month."',
  },
  {
    name: "get_spend_summary",
    icon: "📊",
    description: "Return a gifting spend summary by time period, team, or account for budget reporting.",
    example: '"How much did we spend on client gifts in Q2?"',
  },
];

const USE_CASES = [
  {
    title: "AI Sales Assistant",
    body: "Your sales team can ask Claude to recommend and send a gift to a prospect mid-conversation — without leaving their workflow or opening another tab.",
  },
  {
    title: "Automated ABM Gifting",
    body: "Build agentic workflows where Claude reads a target account list, selects the right gift per recipient, and triggers the order automatically.",
  },
  {
    title: "EA & Chief of Staff Workflows",
    body: "Assistants managing executive gifting can instruct Claude in plain English — no portal navigation required.",
  },
  {
    title: "RevOps Reporting",
    body: "Ask Claude to pull gifting spend by quarter, by team, or by account directly from your portal data.",
  },
];

const STEPS = [
  { step: "01", title: "Request your portal API key", body: "Once your Soto & Segovia client account is active, request an API key from your account settings or contact us below." },
  { step: "02", title: "Install the MCP server", body: "Add the Soto & Segovia MCP server to your Claude Desktop config file. We provide the exact JSON snippet during setup." },
  { step: "03", title: "Authenticate", body: "The MCP server uses your portal API key to authenticate. One-time setup, no OAuth flow required." },
  { step: "04", title: "Start gifting with Claude", body: "Open Claude Desktop and start sending gifts, checking orders, or asking for recommendations in natural language." },
];

const CLIENTS = [
  { name: "Claude Desktop", note: "Mac & Windows" },
  { name: "Claude.ai Projects", note: "Web — with MCP support" },
  { name: "Custom AI Agents", note: "Any MCP-compatible runtime" },
  { name: "Claude API", note: "Tool-use via Anthropic API" },
];

function SetupForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", useCase: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
        type: "Claude MCP Integration Setup",
        lang: "EN",
        message: `[CLAUDE MCP INTEGRATION SETUP]\n\nCompany: ${form.company}\nPrimary Use Case: ${form.useCase}\n\n${form.message}`,
      });
      await fetch(`${scriptUrl}?${params.toString()}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 text-[14px] border outline-none focus:border-[#D97757] transition-colors";
  const inputStyle = { borderColor: "#E5E5E5", background: "#FAFAFA", color: "#1A1A1A" };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Request Received</p>
        <p className="text-[18px] font-bold mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>We will be in touch shortly.</p>
        <p className="text-[14px]" style={{ color: "#666" }}>Our team will reach out within 24 business hours with your API key and setup instructions.</p>
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
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Primary Use Case</label>
        <select value={form.useCase} onChange={set("useCase")} className={inputClass} style={inputStyle}>
          <option value="">Select one...</option>
          <option value="Sales team gifting via Claude Desktop">Sales team gifting via Claude Desktop</option>
          <option value="Agentic / automated gifting workflows">Agentic / automated gifting workflows</option>
          <option value="EA / executive assistant gifting">EA / executive assistant gifting</option>
          <option value="RevOps reporting and spend tracking">RevOps reporting and spend tracking</option>
          <option value="Custom AI agent build">Custom AI agent build</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: "#888" }}>Tell us more <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span></label>
        <textarea value={form.message} onChange={set("message")} rows={3} className={inputClass} style={inputStyle} placeholder="Volume, team size, existing tools, anything else..." />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 font-bold text-[12px] tracking-wider text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ background: CLAUDE_ORANGE, fontFamily: "var(--font-cinzel), serif" }}
      >
        {status === "loading" ? "Sending..." : "Request MCP Access"}
      </button>
    </form>
  );
}

export default function ClaudeMCPPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: CLAUDE_BG, borderBottom: "1px solid #E8E2D9" }} className="px-6 pt-20 pb-0 text-center overflow-hidden">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-10" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Integrations · AI
        </p>

        <div className="flex flex-col items-center gap-5 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/claude-ai.webp" alt="Claude" style={{ height: 44, width: "auto" }} />
          <div className="flex items-center gap-3">
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#999" }}>MCP Integration</span>
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-5 max-w-[740px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Send Gifts and Manage Orders Directly Inside Claude
        </h1>
        <p className="text-[16px] max-w-[580px] mx-auto mb-10" style={{ color: "#666" }}>
          The Soto & Segovia MCP server connects Claude to your gifting portal. Browse the catalog, place orders, and track shipments in plain English, without leaving your Claude workflow.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <a href="#setup" className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white" style={{ background: CLAUDE_ORANGE, fontFamily: "var(--font-cinzel), serif" }}>
            Request MCP Access
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 py-5 border-t" style={{ borderColor: "#E8E2D9" }}>
          <span className="text-[11px] tracking-widest uppercase" style={{ color: "#bbb" }}>Powered by</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#888", fontFamily: "system-ui, sans-serif" }}>Claude MCP</span>
          <span style={{ color: "#ddd" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#888", fontFamily: "system-ui, sans-serif" }}>Soto & Segovia Portal API</span>
          <span style={{ color: "#ddd" }}>·</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#888", fontFamily: "system-ui, sans-serif" }}>Direct Fulfillment</span>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>MCP Tools</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Six Tools Claude Can Use</h2>
          <p className="mt-4 text-[15px] max-w-[540px] mx-auto" style={{ color: "#666" }}>
            Each tool is callable by Claude in natural conversation. No commands to memorize, no UI to navigate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="p-6 border-t-2" style={{ borderColor: CLAUDE_ORANGE, background: CLAUDE_BG }}>
              <div className="text-2xl mb-3">{tool.icon}</div>
              <code className="text-[12px] font-mono font-bold mb-3 block" style={{ color: CLAUDE_ORANGE }}>{tool.name}</code>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#555" }}>{tool.description}</p>
              <p className="text-[12px] italic" style={{ color: "#999" }}>{tool.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section style={{ background: "#F7F5F0" }} className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Use Cases</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Who It Is Built For</h2>
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

      {/* Compatible clients */}
      <section className="max-w-[860px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Compatible Clients</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Works With Any MCP-Compatible Runtime</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CLIENTS.map((c) => (
            <div key={c.name} className="p-5 text-center border" style={{ borderColor: "#E8E4DC" }}>
              <p className="font-bold text-[13px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{c.name}</p>
              <p className="text-[11px]" style={{ color: "#999" }}>{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup steps */}
      <section style={{ background: "#F7F5F0" }} className="py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Setup</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Up and Running in Minutes</h2>
          </div>
          <div className="flex flex-col gap-8">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: CLAUDE_ORANGE, fontFamily: "var(--font-cinzel), serif" }}>
                  {s.step}
                </div>
                <div className={i < STEPS.length - 1 ? "pb-8 border-b" : ""} style={{ borderColor: "#E8E4DC", flex: 1 }}>
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup form */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get Access</p>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Request Claude MCP Access</h2>
            <p className="text-[14px]" style={{ color: "#666" }}>
              Fill out the form and our team will send you your portal API key and the MCP server config within 24 business hours.
            </p>
          </div>
          <SetupForm />
        </div>
      </section>

    </div>
  );
}
