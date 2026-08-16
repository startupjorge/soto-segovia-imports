import Link from "next/link";
import type { Metadata } from "next";
import { Check, Package, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Monthly Box | Soto & Segovia Imports",
  description: "Receive a curated monthly box of the finest Spanish gourmet products delivered to your door. Subscribe & Save 10%.",
};

const boxes = [
  { name: "Olive Oils", oneTime: 159, monthly: 143, description: "Cold-pressed, single-origin Spanish olive oils selected by Jorge, Roberto & Maite." },
  { name: "Salts", oneTime: 79, monthly: 71, description: "Artisanal Mediterranean salts harvested from ancient Spanish salt flats." },
  { name: "Vinegars", oneTime: 159, monthly: 143, description: "Aged sherry and wine vinegars from Spain's finest bodegas." },
  { name: "Wines", oneTime: 279, monthly: 251, description: "Curated Spanish wines sourced directly from boutique estates in Altea." },
];

export default function MonthlyBoxPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ background: "#1A1A1A" }} className="px-6 py-16 text-center">
        <Link href="/subscriptions" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase mb-8 transition-colors hover:text-[#C9A227]" style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}>
          <ArrowLeft size={12} /> Subscription Plans
        </Link>
        <div className="flex items-center justify-center gap-3 mb-3">
          <Package size={22} style={{ color: "#C9A227" }} />
        </div>
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Monthly Delivery
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Monthly Box
        </h1>
        <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#888" }}>
          A curated selection of Spain's finest gourmet products, delivered to your door every month. Cancel anytime.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {boxes.map((box) => (
            <div key={box.name} className="border flex flex-col" style={{ borderColor: "#e8e8e0" }}>
              <div className="p-5 border-b" style={{ borderColor: "#e8e8e0", background: "#FAFAFA" }}>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Monthly Box</p>
                <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{box.name}</h3>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[13px] mb-4 leading-relaxed" style={{ color: "#666" }}>{box.description}</p>
                <div className="mb-4">
                  <p className="text-[28px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>
                    ${box.monthly}<span className="text-[13px] font-normal" style={{ color: "#888" }}>/mo</span>
                  </p>
                  <p className="text-[11px] line-through" style={{ color: "#bbb" }}>${box.oneTime} one-time</p>
                  <p className="text-[10px] font-bold mt-1" style={{ color: "#22c55e" }}>You save ${box.oneTime - box.monthly}/mo</p>
                </div>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {["Curated monthly selection", "Cancel anytime", "Email reminder before shipment"].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "#555" }}>
                      <Check size={12} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A227" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?type=subscribe" className="block text-center py-3 text-[11px] font-bold tracking-wider transition-all hover:opacity-90" style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>
                  Subscribe Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="border p-8 text-center max-w-[600px] mx-auto" style={{ borderColor: "#e8e8e0", background: "#FAFAFA" }}>
          <h3 className="text-[18px] font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>How It Works</h3>
          <div className="flex flex-col md:flex-row gap-6 text-left mt-6">
            {[
              { n: "01", t: "Choose Your Box", d: "Select the product category you love most." },
              { n: "02", t: "We Curate", d: "Jorge and Roberto select the finest products each month." },
              { n: "03", t: "Delivered to You", d: "Your box arrives at your door, every month." },
            ].map((s) => (
              <div key={s.n} className="flex-1">
                <p className="text-[11px] font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{s.n}</p>
                <p className="text-[13px] font-bold mb-1" style={{ color: "#1A1A1A" }}>{s.t}</p>
                <p className="text-[12px]" style={{ color: "#666" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
