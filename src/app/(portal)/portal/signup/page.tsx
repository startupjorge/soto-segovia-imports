"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Building2, User, Mail, Phone, Briefcase } from "lucide-react";

const BUSINESS_TYPES = [
  "Hotel / Resort",
  "Restaurant / Fine Dining",
  "Casino / Gaming",
  "Corporate Gifting",
  "Retail / Specialty Food",
  "Event Planning",
  "Other",
];

export default function SignUpPage() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [devLink, setDevLink] = useState<string | null>(null);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Submit to Apps Script (CRM / notification)
      const scriptUrl = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "Portal Sign-Up Request", ...form }),
        });
      }

      // 2. Request magic link (auto-registers the email server-side)
      const res = await fetch("/api/auth/register-and-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      if (data.devLink) setDevLink(data.devLink);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)" }}
      >
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <Logo size="lg" linkTo="" />
          </div>
          <div className="p-8 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #D4AF37" }}>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "#D4AF3720", border: "2px solid #D4AF37" }}
            >
              <CheckCircle size={28} style={{ color: "#D4AF37" }} />
            </div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Account Created
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
              Welcome to Soto &amp; Segovia Imports. Your portal access has been set up for{" "}
              <strong style={{ color: "#ccc" }}>{form.email}</strong>.
            </p>

            {devLink ? (
              <div
                className="border p-4 mb-6 text-left"
                style={{ background: "#111108", borderColor: "#D4AF3730" }}
              >
                <p
                  className="text-[9px] tracking-wider uppercase mb-2 font-bold"
                  style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Your Sign-In Link:
                </p>
                <a
                  href={devLink}
                  className="text-[11px] break-all underline"
                  style={{ color: "#D4AF37" }}
                >
                  Click here to access your portal
                </a>
                <p className="text-[9px] mt-2" style={{ color: "#444" }}>
                  No email provider configured — link shown directly.
                </p>
              </div>
            ) : (
              <p className="text-sm mb-6" style={{ color: "#555" }}>
                Check your email for a sign-in link to access your portal.
              </p>
            )}

            <Link
              href="/portal/login"
              className="block w-full py-3 text-[10px] tracking-[0.25em] uppercase text-center"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                color: "#000",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              Go to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)" }}
    >
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <Logo size="lg" linkTo="" />
          <p
            className="mt-4 text-[9px] tracking-[0.25em] uppercase"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            Client Portal
          </p>
        </div>

        <div
          className="p-8 border"
          style={{ background: "#0D0D0A", borderColor: "#2A2A1A", borderTop: "2px solid #D4AF37" }}
        >
          <h1
            className="text-2xl font-bold text-center mb-1"
            style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
          >
            Create Your Account
          </h1>
          <p className="text-xs text-center mb-8" style={{ color: "#555" }}>
            Access wholesale pricing, order management, and integrations.
          </p>

          {status === "error" && (
            <div
              className="flex items-center gap-3 px-4 py-3 mb-6 border"
              style={{ background: "#1a0808", borderColor: "#4D1A1A" }}
            >
              <AlertCircle size={14} style={{ color: "#ef4444" }} />
              <p className="text-xs" style={{ color: "#ef4444" }}>
                Something went wrong. Please try again or contact us.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Company */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Company Name *
              </label>
              <div className="relative">
                <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) => set("companyName", e.target.value)}
                  placeholder="Acme Fine Foods"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
              </div>
            </div>

            {/* Contact name */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Your Name *
              </label>
              <div className="relative">
                <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                <input
                  type="text"
                  required
                  value={form.contactName}
                  onChange={(e) => set("contactName", e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Work Email *
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 (305) 555-0100"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
                  style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                />
              </div>
            </div>

            {/* Business type */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Business Type *
              </label>
              <div className="relative">
                <Briefcase size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#555" }} />
                <select
                  required
                  value={form.businessType}
                  onChange={(e) => set("businessType", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                  style={{ borderColor: "#2A2A1A", color: form.businessType ? "#ccc" : "#333", background: "#0D0D0A" }}
                >
                  <option value="" disabled style={{ background: "#0D0D0A" }}>Select your business type</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t} style={{ background: "#0D0D0A", color: "#ccc" }}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional message */}
            <div>
              <label
                className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
              >
                Anything else? (Optional)
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us about your volume needs or products of interest…"
                rows={3}
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333] resize-none"
                style={{ borderColor: "#2A2A1A", color: "#ccc" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-[10px] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                color: "#000",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {loading ? "Creating Account…" : <><ArrowRight size={13} /> Create Account</>}
            </button>
          </form>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-xs" style={{ color: "#555" }}>
            Already have an account?{" "}
            <Link href="/portal/login" className="underline transition-colors hover:text-[#D4AF37]" style={{ color: "#888" }}>
              Sign in
            </Link>
          </p>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{ borderColor: "#2A2A1A", color: "#888", fontFamily: "var(--font-cinzel), serif", fontSize: "10px", letterSpacing: "0.15em" }}
          >
            ← Back to Soto &amp; Segovia
          </Link>
        </div>
      </div>
    </div>
  );
}
