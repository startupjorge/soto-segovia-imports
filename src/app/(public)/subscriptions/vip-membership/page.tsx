import Link from "next/link";
import type { Metadata } from "next";
import { Check, Crown, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "VIP Membership | Soto & Segovia Imports",
  description: "An ultra-exclusive, by-invitation membership reserved for those who demand an extraordinary private relationship with their food. By private invitation only.",
};

const benefits = [
  "All 4 curated boxes delivered monthly",
  "Products handpicked personally by Jorge & Roberto",
  "Exclusive items never available to the public",
  "Dedicated white-glove concierge — 2-hour response",
  "Free express shipping on every order, always",
  "Quarterly private tasting with the founders",
  "Custom branded gifting with your name or logo",
  "Early access to every new product launch",
  "Priority allocation during limited releases",
  "Bespoke sourcing upon request",
];

export default function VIPMembershipPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "#C9A227" }}>
                <Check size={9} style={{ color: "#000" }} />
              </div>
              <p className="text-[13px]" style={{ color: "#999" }}>{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center border-t pt-12" style={{ borderColor: "#1A1A10" }}>
          <p className="text-[13px] leading-relaxed mb-8 max-w-md mx-auto" style={{ color: "#555" }}>
            Each membership is personally reviewed by Jorge &amp; Roberto. We only accept members we can truly serve at the highest level.
          </p>
          <Link
            href="/contact?type=vip"
            className="inline-block px-14 py-5 font-bold text-[12px] tracking-wider transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
          >
            Request an Invitation
          </Link>
          <p className="text-[10px] mt-5" style={{ color: "#333" }}>
            Response within 24 hours · Strictly confidential · Invitation subject to review
          </p>
        </div>
      </div>
    </div>
  );
}
