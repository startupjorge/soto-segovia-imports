import Link from "next/link";
import type { Metadata } from "next";
import { Check, Crown, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Plans | Soto & Segovia Imports",
  description: "Monthly curated Spanish gourmet gift boxes and exclusive VIP membership. Subscribe & Save 10% or apply for our ultra-exclusive, by-invitation VIP program.",
};

const monthlyBoxes = [
  { name: "Olive Oils", oneTime: 159, monthly: 143 },
  { name: "Salts", oneTime: 79, monthly: 71 },
  { name: "Vinegars", oneTime: 159, monthly: 143 },
  { name: "Wines", oneTime: 279, monthly: 251 },
];

const vipIncludes = [
  "All 4 curated boxes delivered monthly",
  "Products handpicked personally by Jorge, Roberto & Maite",
  "Exclusive items never available to the public",
  "White-glove concierge — dedicated contact, 2-hour response",
  "Free express shipping on every order",
  "Quarterly virtual tasting with the founders",
  "Custom branded gifting with your logo on gift notes",
  "Early access to new product launches",
  "Priority allocation during limited releases",
];

export default function SubscriptionsPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#1A1A1A" }} className="px-6 py-16 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Monthly Delivery · Subscribe &amp; Save · VIP Membership
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Subscription Plans
        </h1>
        <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#888" }}>
          Receive the finest Spanish gourmet products on your schedule. Choose monthly delivery or join our ultra-exclusive VIP program.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-20">

        {/* Monthly Box */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <Package size={20} style={{ color: "#C9A227" }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Monthly Box
            </h2>
          </div>
          <p className="text-[14px] mb-8" style={{ color: "#666" }}>
            Subscribe to any box and save 10% every month. Cancel anytime — no commitment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyBoxes.map((box) => (
              <div key={box.name} className="border flex flex-col" style={{ borderColor: "#e8e8e0" }}>
                <div className="p-5 border-b" style={{ borderColor: "#e8e8e0", background: "#FAFAFA" }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                    Monthly Box
                  </p>
                  <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                    {box.name}
                  </h3>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-[28px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>
                      ${box.monthly}
                      <span className="text-[13px] font-normal" style={{ color: "#888" }}>/mo</span>
                    </p>
                    <p className="text-[11px] line-through" style={{ color: "#bbb" }}>${box.oneTime} one-time</p>
                    <p className="text-[10px] font-bold mt-1" style={{ color: "#22c55e" }}>You save ${box.oneTime - box.monthly}/mo</p>
                  </div>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {[
                      "Curated monthly selection",
                      "Flexible monthly delivery",
                      "Cancel anytime",
                      "Email reminder before shipment",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "#555" }}>
                        <Check size={12} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A227" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/subscriptions/monthly-box"
                    className="block text-center py-3 text-[11px] font-bold tracking-wider transition-all hover:opacity-90"
                    style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 border-t" style={{ borderColor: "#e8e8e0" }} />
          <Crown size={18} style={{ color: "#C9A227" }} />
          <div className="flex-1 border-t" style={{ borderColor: "#e8e8e0" }} />
        </div>

        {/* VIP Membership */}
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Ultra-Exclusive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            VIP Membership
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#666" }}>
            Reserved for discerning individuals and organizations who demand the finest. A fully bespoke, white-glove experience curated personally by Jorge, Roberto & Maite.
          </p>
        </div>

        <div id="vip" className="border-2 max-w-[800px] mx-auto" style={{ borderColor: "#C9A227", background: "#0D0D0A" }}>
          {/* VIP header */}
          <div className="px-8 py-8 border-b text-center" style={{ borderColor: "#2A2A1A" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown size={24} style={{ color: "#C9A227" }} />
              <p className="text-[13px] tracking-[0.2em] uppercase font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                VIP Annual Membership
              </p>
            </div>
            <p className="text-[22px] font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227", letterSpacing: "0.2em" }}>
              By Private Invitation
            </p>
            <p className="text-[13px] mt-3" style={{ color: "#666" }}>
              Pricing is bespoke and presented upon acceptance. No stated minimums — this is not for everyone.
            </p>
          </div>

          {/* VIP benefits */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {vipIncludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#C9A227" }}>
                    <Check size={10} style={{ color: "#000" }} />
                  </div>
                  <p className="text-[13px]" style={{ color: "#ccc" }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 text-center" style={{ borderColor: "#2A2A1A" }}>
              <p className="text-[12px] mb-6" style={{ color: "#555" }}>
                Each VIP membership is personally reviewed by Jorge, Roberto & Maite. We only accept clients we can truly serve at the highest level.
              </p>
              <Link
                href="/subscriptions/vip-membership"
                className="inline-block px-12 py-4 font-bold text-[12px] tracking-wider transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
              >
                Request an Invitation
              </Link>
              <p className="text-[10px] mt-4" style={{ color: "#444" }}>
                Response within 24 hours · Strictly confidential
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
