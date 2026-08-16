import Link from "next/link";
import type { Metadata } from "next";
import { Package, Tag, Gift, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Plans | Soto & Segovia Imports",
  description: "Monthly curated Spanish gourmet gift boxes, Subscribe & Save, Gift Subscriptions, and our exclusive VIP Membership. Choose your plan.",
};

const plans = [
  {
    icon: Package,
    label: "Monthly Box",
    tagline: "Spain delivered to your door, every month.",
    desc: "Choose a curated box, Olive Oils, Salts, Vinegars, or Wines, and receive a new selection each month. Subscribe and save 10% vs. one-time orders.",
    cta: "Explore Monthly Box",
    href: "/subscriptions/monthly-box",
    vip: false,
  },
  {
    icon: Tag,
    label: "Subscribe & Save",
    tagline: "10% off every order, automatically.",
    desc: "Subscribe to your favorite products and save 10% on every monthly delivery. No codes, no hassle. Cancel anytime.",
    cta: "Start Saving",
    href: "/subscriptions/subscribe-save",
    vip: false,
  },
  {
    icon: Gift,
    label: "Gift Subscriptions",
    tagline: "The gift that keeps arriving.",
    desc: "Give 3, 6, or 12 months of curated Spanish gourmet deliveries to someone you love or a valued client. Our team handles everything.",
    cta: "Send a Gift",
    href: "/subscriptions/gift-subscriptions",
    vip: false,
  },
  {
    icon: Crown,
    label: "VIP Membership",
    tagline: "By invitation only.",
    desc: "An ultra-exclusive membership for a select few. Fully bespoke, white-glove, and curated personally by Jorge and Roberto. Existing members may refer new members.",
    cta: "Request an Invitation",
    href: "/subscriptions/vip-membership",
    vip: true,
  },
];

export default function SubscriptionsPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#1A1A1A" }} className="px-6 py-16 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Subscription Plans
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Receive Spain Every Month
        </h1>
        <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#888" }}>
          Four ways to bring the finest Spanish gourmet products into your life, or someone else's.
        </p>
      </div>

      {/* Plan cards */}
      <div className="max-w-[900px] mx-auto px-6 py-20 flex flex-col gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <Link
              key={plan.label}
              href={plan.href}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 border p-8 transition-all hover:border-[#C9A227]"
              style={{ borderColor: plan.vip ? "#C9A227" : "#e8e8e0", background: plan.vip ? "#0D0D0A" : "#fff" }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center border" style={{ borderColor: plan.vip ? "#C9A227" : "#e8e8e0", background: plan.vip ? "#0A0A07" : "#FAFAFA" }}>
                  <Icon size={20} style={{ color: "#C9A227" }} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <p className="font-bold text-[16px]" style={{ fontFamily: "var(--font-cinzel), serif", color: plan.vip ? "#fff" : "#1A1A1A" }}>{plan.label}</p>
                  {plan.vip && (
                    <span className="text-[9px] tracking-widest uppercase font-bold px-2 py-0.5 border" style={{ borderColor: "#C9A227", color: "#C9A227" }}>Invite Only</span>
                  )}
                </div>
                <p className="text-[12px] font-semibold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{plan.tagline}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: plan.vip ? "#666" : "#555" }}>{plan.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[11px] font-bold tracking-wider whitespace-nowrap group-hover:text-[#C9A227] transition-colors" style={{ fontFamily: "var(--font-cinzel), serif", color: plan.vip ? "#C9A227" : "#1A1A1A" }}>
                  {plan.cta} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
