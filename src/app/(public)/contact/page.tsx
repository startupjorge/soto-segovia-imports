"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

const INQUIRY_TYPES = [
  { value: "General Inquiry",              label: "General Inquiry" },
  { value: "Monthly Box Subscription",     label: "Monthly Box Subscription" },
  { value: "Subscribe & Save (10% Off)",   label: "Subscribe & Save (10% Off)" },
  { value: "Gift Subscription",            label: "Gift Subscription" },
  { value: "Corporate Gifting",            label: "Corporate Gifting" },
  { value: "Personal Gifting",             label: "Personal Gifting" },
  { value: "Distributor Inquiry",          label: "Distributor Inquiry" },
  { value: "Order Support",                label: "Order Support" },
];

const TYPE_MAP: Record<string, string> = {
  "monthly-box":       "Monthly Box Subscription",
  "subscribe-save":    "Subscribe & Save (10% Off)",
  "gift-subscription": "Gift Subscription",
  "corporate":         "Corporate Gifting",
  "personal":          "Personal Gifting",
  "vip":               "VIP Membership Request",
  "subscribe":         "Monthly Box Subscription",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") || "";
  const mappedType = TYPE_MAP[typeParam] || "General Inquiry";

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", inquiryType: mappedType, message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    setForm(f => ({ ...f, inquiryType: mappedType }));
  }, [mappedType]);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams({
        ...form,
        type: form.inquiryType,
        lang: "EN",
        message: `[${form.inquiryType.toUpperCase()}]\n\n${form.message}`,
      });
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227] transition-colors";
  const labelClass = "block text-[11px] font-bold tracking-wider uppercase mb-2";

  return (
    <div className="lg:col-span-2">
      {status === "success" ? (
        <div className="border-l-4 p-8" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
          <p className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Message Sent</p>
          <p className="text-sm" style={{ color: "#666" }}>Thank you, our team will respond within 24 business hours.</p>
        </div>
      ) : (
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
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Email</label>
            <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@company.com" style={{ color: "#1A1A1A" }} />
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Company <span className="font-normal normal-case" style={{ color: "#aaa" }}>(optional)</span></label>
            <input type="text" value={form.company} onChange={set("company")} className={inputClass} placeholder="Your company" style={{ color: "#1A1A1A" }} />
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Inquiry Type</label>
            <select value={form.inquiryType} onChange={set("inquiryType")} className={inputClass + " bg-white"} style={{ color: "#555" }}>
              {INQUIRY_TYPES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Message</label>
            <textarea required rows={5} value={form.message} onChange={set("message")} className={inputClass + " resize-none"} placeholder="Tell us how we can help..." style={{ color: "#1A1A1A" }} />
          </div>
          <div>
            <button type="submit" disabled={status === "loading"} className="px-10 py-3 font-bold text-[12px] text-white transition-all hover:opacity-90 disabled:opacity-50" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && <p className="text-sm mt-3" style={{ color: "#e55" }}>Something went wrong. Please try again.</p>}
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get in Touch</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Contact Us</h1>
          <p className="text-sm" style={{ color: "#666" }}>We'd love to hear from you. Fill out the form below and our team will respond within 24 business hours.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-1">
          <h2 className="text-[13px] font-bold mb-6 tracking-wider uppercase" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Contact Information</h2>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Email</p>
              <a href="mailto:sales@sotosegoviaimports.com" className="text-sm hover:text-[#C9A227] transition-colors" style={{ color: "#444" }}>sales@sotosegoviaimports.com</a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Headquarters</p>
              <p className="text-sm" style={{ color: "#444" }}>Miami, Florida, USA</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Regional Office</p>
              <p className="text-sm" style={{ color: "#444" }}>Madrid, Spain</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Regional Office</p>
              <p className="text-sm" style={{ color: "#444" }}>Tampa, FL, USA</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[10px] tracking-widest uppercase font-bold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Follow Us</p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A227] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A227] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A227] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="mt-8 p-5 border-l-2" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
            <p className="text-[12px] font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Distributor Inquiries</p>
            <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>Interested in carrying our products? Select "Distributor Inquiry" in the form and we'll connect you with our sales team.</p>
          </div>
        </div>

        {/* Form */}
        <Suspense fallback={<div className="lg:col-span-2" />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
