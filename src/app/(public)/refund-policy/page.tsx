import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Soto & Segovia Imports",
  description: "Soto & Segovia Imports refund and return policy. Pre-orders are 100% refundable before shipment. After shipment, refunds are available minus shipping and handling.",
};

const SECTIONS = [
  {
    title: "Pre-Orders — 100% Refundable, No Questions Asked",
    body: `All products on sotosegoviaimports.com are currently available on a pre-order basis. Because we collect payment only after confirming your order and before shipment, you may cancel and receive a full 100% refund at any time prior to your order being shipped — no questions asked, no restocking fees, no hassle.

To cancel a pre-order, simply reply to your order confirmation email or contact us at sales@sotosegoviaimports.com with your name and order details. We will process your cancellation and issue a full refund within 3–5 business days.`,
  },
  {
    title: "After Shipment — Refunds Minus Shipping & Handling",
    body: `Once your order has shipped, we will refund 100% of the product cost minus the actual shipping and handling charges incurred. Shipping and handling fees are non-refundable after the order has left our fulfillment partner's facility.

If your order arrives damaged, incorrect, or incomplete, we will cover the full cost including shipping. Please contact us within 7 days of delivery with photos of the issue and we will make it right immediately.`,
  },
  {
    title: "How to Request a Refund",
    body: `Email us at sales@sotosegoviaimports.com with:
• Your full name
• Your order confirmation number or the email address used at checkout
• The reason for your refund request (for post-shipment returns only)

We will respond within 1 business day and process approved refunds within 3–5 business days to the original payment method.`,
  },
  {
    title: "Damaged or Incorrect Orders",
    body: `If your order arrives damaged in transit or contains the wrong items, we will send a replacement or issue a full refund including shipping — your choice. We ask only that you send us a photo of the damage or incorrect item so we can report it to our carrier and prevent it from happening again. We do not require you to return damaged goods.`,
  },
  {
    title: "Gift Orders",
    body: `If you placed a gift order and the recipient is not satisfied, the refund request must be submitted by the original purchaser. Refund eligibility follows the same pre-shipment and post-shipment rules above. We are not able to issue refunds directly to gift recipients.`,
  },
  {
    title: "Non-Refundable Items",
    body: `Shipping and handling fees are non-refundable once your order has shipped. Custom corporate gifting programs with printed branding or personalization (e.g., custom labels or branded packaging) are non-refundable once production has begun. We will always communicate clearly before any production starts.`,
  },
  {
    title: "Contact Us",
    body: `Questions about our refund policy? We are a small, family-operated importing company and we stand behind every order. Reach us at:\n\nsales@sotosegoviaimports.com\n\nWe will always do right by our customers.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#F8F8F4", borderBottom: "1px solid #e8e8e8" }} className="px-6 py-12">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Soto & Segovia Imports
          </p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Refund Policy
          </h1>
          <p className="text-[14px]" style={{ color: "#888" }}>
            Last updated: August 2026
          </p>
        </div>
      </div>

      {/* Summary bar */}
      <div style={{ background: "#1A1A1A" }} className="px-6 py-6">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Before Shipment", value: "100% Refund", sub: "No questions asked" },
            { label: "After Shipment", value: "100% Minus Shipping", sub: "Product cost fully refunded" },
            { label: "Damaged Orders", value: "Full Refund", sub: "Including shipping" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[10px] tracking-wider uppercase font-semibold mb-1" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>{item.label}</p>
              <p className="text-[15px] font-bold mb-0.5" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{item.value}</p>
              <p className="text-[11px]" style={{ color: "#666" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[800px] mx-auto px-6 py-14">
        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-[15px] font-bold mb-4 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                {section.title}
              </h2>
              <div className="text-[14px] leading-relaxed whitespace-pre-line" style={{ color: "#555" }}>
                {section.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
          <Link href="/" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
            ← Back to Home
          </Link>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white hover:opacity-90 transition-opacity"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Place a Pre-Order
          </Link>
        </div>
      </div>
    </div>
  );
}
