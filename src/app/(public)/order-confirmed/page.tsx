import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed | Soto & Segovia Imports",
};

export default function OrderConfirmedPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ background: "#1A1A1A" }} className="px-6 py-8">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Príncipe Azahar · Altea, Spain
          </p>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            Payment Received
          </h1>
        </div>
      </div>

      <div className="max-w-[560px] mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#C9A227" }}>
          <Check size={28} className="text-white" />
        </div>

        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Thank You
        </p>
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Your Gift Is Confirmed
        </h2>
        <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#666" }}>
          Payment received. Your order is now being prepared. Our team will send a shipping confirmation with tracking information within 1–2 business days. Estimated delivery: 3–5 business days.
        </p>

        <div className="p-5 border border-[#C9A227]/30 mb-10 text-left" style={{ background: "#fffdf5" }}>
          <p className="text-[11px] font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>
            What happens next
          </p>
          <ol className="flex flex-col gap-2">
            {[
              "We receive your payment confirmation and begin preparing your order.",
              "Our team handpicks and packs your products with your personal gift note.",
              "You receive a shipping confirmation email with a tracking number.",
              "Your gift arrives beautifully packaged at your recipient's door.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-[12px]" style={{ color: "#555" }}>
                <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 text-white" style={{ background: "#C9A227" }}>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white hover:opacity-90 transition-opacity"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
            style={{ borderColor: "#ddd", color: "#888", fontFamily: "var(--font-cinzel), serif" }}
          >
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
}
