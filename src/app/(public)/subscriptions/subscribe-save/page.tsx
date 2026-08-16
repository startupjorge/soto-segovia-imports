import Link from "next/link";
import type { Metadata } from "next";
import { Check, Tag, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscribe & Save 10% | Soto & Segovia Imports",
  description: "Subscribe to any product and save 10% on every order. Monthly delivery of Spain's finest gourmet products.",
};

const boxes = [
  { name: "Olive Oils", oneTime: 159, monthly: 143 },
  { name: "Salts", oneTime: 79, monthly: 71 },
  { name: "Vinegars", oneTime: 159, monthly: 143 },
  { name: "Wines", oneTime: 279, monthly: 251 },
];

export default function SubscribeSavePage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ background: "#1A1A1A" }} className="px-6 py-16 text-center">
        <Link href="/subscriptions" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase mb-8 transition-colors hover:text-[#C9A227]" style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}>
          <ArrowLeft size={12} /> Subscription Plans
        </Link>
        <div className="flex items-center justify-center gap-3 mb-3">
          <Tag size={22} style={{ color: "#C9A227" }} />
        </div>
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Save Every Month
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Subscribe &amp; Save 10%
        </h1>
        <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#888" }}>
          Set it and forget it. Subscribe to your favorite Spanish gourmet products and save 10% on every monthly delivery.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-20">
        <div className="border-2 p-8 mb-12 text-center" style={{ borderColor: "#C9A227", background: "#FFFDF5" }}>
          <p className="text-[42px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>10% Off</p>
          <p className="text-[14px] mt-1" style={{ color: "#666" }}>Every month, automatically. No codes needed. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {boxes.map((box) => (
            <div key={box.name} className="border p-5 text-center" style={{ borderColor: "#e8e8e0" }}>
              <p className="text-[12px] font-bold mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{box.name}</p>
              <p className="text-[22px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>
                ${box.monthly}<span className="text-[11px] font-normal" style={{ color: "#888" }}>/mo</span>
              </p>
              <p className="text-[10px] line-through mt-1" style={{ color: "#bbb" }}>${box.oneTime}</p>
              <p className="text-[10px] font-bold mt-1" style={{ color: "#22c55e" }}>Save ${box.oneTime - box.monthly}/mo</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            "10% off every monthly delivery",
            "No commitment, cancel anytime",
            "Flexible monthly delivery",
            "Email notification before each shipment",
            "Pause or modify anytime",
            "Priority customer support",
          ].map((f) => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center" style={{ background: "#C9A227" }}>
                <Check size={11} style={{ color: "#000" }} />
              </div>
              <p className="text-[13px]" style={{ color: "#444" }}>{f}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact?type=subscribe-save" className="inline-block px-12 py-4 font-bold text-[12px] tracking-wider transition-all hover:opacity-90" style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>
            Start Saving Today
          </Link>
          <p className="text-[11px] mt-4" style={{ color: "#aaa" }}>No commitment · Cancel anytime · Free to join</p>
        </div>
      </div>
    </div>
  );
}
