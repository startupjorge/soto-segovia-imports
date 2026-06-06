"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [type, setType] = useState("general");
  const [sent, setSent] = useState(false);

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "wholesale", label: "Wholesale / Wholesale Pricing" },
    { value: "custom", label: "Custom Orders" },
    { value: "consulting", label: "Menu Consulting" },
    { value: "events", label: "Events & Catering" },
    { value: "press", label: "Press & Media" },
  ];

  return (
    <div className="pt-24 min-h-screen" style={{ background: "#0A0A08" }}>
      {/* Header */}
      <section
        className="py-20 text-center border-b"
        style={{
          background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)",
          borderColor: "#1E1E14",
        }}
      >
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-4"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          We&apos;d Love to Hear from You
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Get in Touch
        </h1>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
              >
                Contact Information
              </h2>
              {[
                { icon: <Phone size={16} />, label: "Phone", value: "+1 (305) 555-0198" },
                { icon: <Mail size={16} />, label: "Email", value: "info@sotosegovia.com" },
                {
                  icon: <MapPin size={16} />,
                  label: "Address",
                  value: "1250 Brickell Ave, Suite 800\nMiami, FL 33131",
                },
                {
                  icon: <Clock size={16} />,
                  label: "Office Hours",
                  value: "Mon – Fri: 9am – 6pm EST\nSat: 10am – 2pm EST",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 mb-6">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1E1C10", border: "1px solid #D4AF37", color: "#D4AF37" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-[9px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#888" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Distributor portal card */}
            <div className="p-6 border" style={{ background: "#0F0F0C", borderColor: "#2A2A1A" }}>
              <p
                className="text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                Existing Partners
              </p>
              <p className="text-sm mb-4" style={{ color: "#666" }}>
                Are you an existing distributor? Access your account, orders, and invoices through
                our secure portal.
              </p>
              <a
                href="/portal/login"
                className="inline-block text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors hover:text-[#FFE566]"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                → Login to Portal
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div
                className="p-12 text-center border"
                style={{ background: "#0F0F0C", borderColor: "#2A2A1A" }}
              >
                <div className="text-5xl mb-4">✉️</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
                >
                  Message Received
                </h3>
                <p className="text-sm" style={{ color: "#888" }}>
                  Thank you for reaching out. A member of our team will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                {/* Inquiry type */}
                <div>
                  <label
                    className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                    style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    Type of Inquiry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setType(value)}
                        className="px-3 py-1.5 text-[9px] tracking-[0.1em] uppercase border transition-all"
                        style={{
                          borderColor: type === value ? "#D4AF37" : "#2A2A1A",
                          color: type === value ? "#D4AF37" : "#666",
                          background: type === value ? "#1E1C10" : "transparent",
                          fontFamily: "var(--font-cinzel), serif",
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "first", label: "First Name", type: "text", required: true },
                    { id: "last", label: "Last Name", type: "text", required: true },
                    { id: "email", label: "Email Address", type: "email", required: true },
                    { id: "phone", label: "Phone Number", type: "tel", required: false },
                  ].map(({ id, label, type: inputType, required }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                        style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
                      >
                        {label} {required && <span style={{ color: "#D4AF37" }}>*</span>}
                      </label>
                      <input
                        id={id}
                        type={inputType}
                        required={required}
                        className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors"
                        style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                    style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    Company / Business Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[9px] tracking-[0.2em] uppercase mb-2"
                    style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    Message <span style={{ color: "#D4AF37" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    style={{ borderColor: "#2A2A1A", color: "#ccc" }}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                    color: "#000",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  Send Message
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
