import Link from "next/link";
import type { Metadata } from "next";
import { Check, Gift, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gift Subscriptions | Soto & Segovia Imports",
  description: "Give the gift that keeps arriving. Send a monthly Spanish gourmet box to someone you love. Choose 3, 6, or 12 months.",
};

const options = [
  { duration: "3 Months", label: "A Taste of Spain", multiplier: 3 },
  { duration: "6 Months", label: "Half a Year of Excellence", multiplier: 6 },
  { duration: "12 Months", label: "A Full Year of Spain", multiplier: 12 },
];

const boxes = [
  { name: "Olive Oils", monthly: 143 },
  { name: "Salts", monthly: 71 },
  { name: "Vinegars", monthly: 143 },
  { name: "Wines", monthly: 251 },
];

export default function GiftSubscriptionsPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ background: "#1A1A1A" }} className="px-6 py-16 text-center">
        <Link href="/subscriptions" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase mb-8 transition-colors hover:text-[#C9A227]" style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}>
          <ArrowLeft size={12} /> Subscription Plans
        </Link>
        <div className="flex items-center justify-center mb-3">
          <Gift size={22} style={{ color: "#C9A227" }} />
        </div>
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          The Gift That Keeps Arriving
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Gift Subscriptions
        </h1>
        <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#888" }}>
          Give someone you love a monthly delivery of Spain's finest gourmet products. Choose the box, choose the duration, and we handle the rest.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-20">
        {/* Duration options */}
        <h2 className="text-[11px] tracking-[0.25em] uppercase font-bold mb-6 text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Choose a Duration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {options.map((opt) => (
            <div key={opt.duration} className="border p-6 text-center" style={{ borderColor: "#e8e8e0" }}>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{opt.duration}</p>
              <p className="text-[15px] font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{opt.label}</p>
              <div className="flex flex-col gap-1.5">
                {boxes.map((box) => (
                  <p key={box.name} className="text-[12px]" style={{ color: "#666" }}>
                    {box.name} — <span style={{ color: "#1A1A1A", fontWeight: 600 }}>${(box.monthly * opt.multiplier).toLocaleString()}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Includes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 max-w-[700px] mx-auto">
          {[
            "Beautifully packaged gift box each month",
            "Handwritten or personalized gift note",
            "Recipient notified with your message",
            "Shipping coordinated by our team",
            "You control the start date",
            "Renewal reminder sent to you, not the recipient",
          ].map((f) => (
            <div key={f} className="flex items-start gap-3">
              <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#C9A227" }}>
                <Check size={9} style={{ color: "#000" }} />
              </div>
              <p className="text-[13px]" style={{ color: "#555" }}>{f}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact?type=gift-subscription" className="inline-block px-12 py-4 font-bold text-[12px] tracking-wider transition-all hover:opacity-90" style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>
            Send a Gift Subscription
          </Link>
          <p className="text-[11px] mt-4" style={{ color: "#aaa" }}>Our team will reach out to confirm details and process your order.</p>
        </div>
      </div>
    </div>
  );
}
