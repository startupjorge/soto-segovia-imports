"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Crown, ArrowLeft } from "lucide-react";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

const benefits = [
  "All 4 curated boxes delivered monthly",
  "Products handpicked personally by Jorge, Roberto & Maite",
  "Exclusive items never available to the public",
  "Dedicated white-glove concierge — 2-hour response",
  "Dedicated logistics coordination on every order",
  "Quarterly private tasting with the founders",
  "Custom branded gifting with your name or logo",
  "Early access to every new product launch",
  "Priority allocation during limited releases",
  "Bespoke sourcing upon request",
];

export default function VIPMembershipPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams({
        ...form,
        type: "VIP Membership Request",
        lang: "EN",
        message: `[VIP MEMBERSHIP REQUEST]\n\n${form.message}`,
      });
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ background: "#0A0A07", minHeight: "100vh" }}>
      <div className="px-6 py-16 text-center" style={{ background: "#0A0A07" }}>
        <Link href="/subscriptions" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase mb-10 transition-colors hover:text-[#C9A227]" style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}>
          <ArrowLeft size={12} /> Subscription Plans
        </Link>

        <div className="flex items-center justify-center mb-6">
          <Crown size={36} style={{ color: "#C9A227" }} />
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Ultra-Exclusive · By Invitation Only
        </p>
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-cinzel), serif", lineHeight: 1.15 }}>
          VIP Membership
        </h1>
        <p className="text-[15px] max-w-2xl mx-auto leading-relaxed" style={{ color: "#666" }}>
          Reserved for a select few who demand an extraordinary, entirely private relationship with the world's finest Spanish gourmet products. This is not a subscription. It is a standing.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 pb-24">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 border-t" style={{ borderColor: "#1A1A10" }} />
          <Crown size={14} style={{ color: "#C9A227" }} />
          <div className="flex-1 border-t" style={{ borderColor: "#1A1A10" }} />
        </div>

        {/* Pricing */}
        <div className="border-2 p-10 mb-12 text-center" style={{ borderColor: "#C9A227", background: "#0D0D0A" }}>
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Membership Investment
          </p>
          <p className="text-[26px] font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#fff", letterSpacing: "0.15em" }}>
            By Private Invitation
          </p>
          <p className="text-[13px] leading-relaxed" style={{ color: "#555" }}>
            Pricing is bespoke, structured around your needs, and presented upon acceptance.<br />
            No stated minimums. No public tiers. This is not for everyone — and that is intentional.
          </p>
        </div>

        {/* Benefits */}
        <h2 className="text-[13px] tracking-[0.25em] uppercase font-bold mb-8 text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          What Membership Includes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#C9A227" }}>
                <Check size={9} style={{ color: "#000" }} />
              </div>
              <p className="text-[13px]" style={{ color: "#999" }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <div className="border-t pt-14" style={{ borderColor: "#1A1A10" }}>
          <div className="text-center mb-10">
            <Crown size={18} className="mx-auto mb-4" style={{ color: "#C9A227" }} />
            <h2 className="text-[20px] font-bold text-white mb-3" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Request an Invitation
            </h2>
            <p className="text-[13px] max-w-md mx-auto" style={{ color: "#555" }}>
              Each membership is personally reviewed by Jorge, Roberto & Maite. We only accept members we can truly serve at the highest level.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-12 border" style={{ borderColor: "#C9A227", background: "#0D0D0A" }}>
              <Crown size={28} className="mx-auto mb-4" style={{ color: "#C9A227" }} />
              <p className="text-white font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif" }}>Request Received</p>
              <p className="text-[13px]" style={{ color: "#666" }}>We will be in touch within 24 hours. This is strictly confidential.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase mb-1.5 font-semibold" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>First Name</label>
                  <input required value={form.firstName} onChange={set("firstName")} className="w-full px-4 py-3 text-[13px] outline-none focus:border-[#C9A227] transition-colors" style={{ background: "#111", border: "1px solid #222", color: "#fff" }} placeholder="First name" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase mb-1.5 font-semibold" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Last Name</label>
                  <input required value={form.lastName} onChange={set("lastName")} className="w-full px-4 py-3 text-[13px] outline-none focus:border-[#C9A227] transition-colors" style={{ background: "#111", border: "1px solid #222", color: "#fff" }} placeholder="Last name" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase mb-1.5 font-semibold" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Email</label>
                <input required type="email" value={form.email} onChange={set("email")} className="w-full px-4 py-3 text-[13px] outline-none focus:border-[#C9A227] transition-colors" style={{ background: "#111", border: "1px solid #222", color: "#fff" }} placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase mb-1.5 font-semibold" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Company / Organization</label>
                <input value={form.company} onChange={set("company")} className="w-full px-4 py-3 text-[13px] outline-none focus:border-[#C9A227] transition-colors" style={{ background: "#111", border: "1px solid #222", color: "#fff" }} placeholder="Optional" />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase mb-1.5 font-semibold" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Tell Us About Yourself</label>
                <textarea value={form.message} onChange={set("message")} rows={4} className="w-full px-4 py-3 text-[13px] outline-none focus:border-[#C9A227] transition-colors resize-none" style={{ background: "#111", border: "1px solid #222", color: "#fff" }} placeholder="What draws you to VIP membership? What products or experiences matter most to you?" />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-14 py-5 font-bold text-[12px] tracking-wider transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {status === "loading" ? "Submitting..." : "Submit Invitation Request"}
                </button>
                {status === "error" && <p className="text-[12px] mt-3" style={{ color: "#e55" }}>Something went wrong. Please try again.</p>}
                <p className="text-[10px] mt-4" style={{ color: "#333" }}>
                  Response within 24 hours · Strictly confidential · Invitation subject to review
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
