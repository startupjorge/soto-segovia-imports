"use client";

import { useState } from "react";
import Link from "next/link";
import { allProducts } from "@/lib/products";
import { ShoppingCart, Plus, Minus, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

type CartItem = { slug: string; qty: number };

const productCategories = [
  { slug: "olive-oils", label: "Olive Oils" },
  { slug: "salts", label: "Artisan Salts" },
  { slug: "vinegars", label: "Vinegars" },
  { slug: "wine", label: "Orange Wine" },
  { slug: "spirits", label: "Spirits" },
];

export default function PlaceOrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("olive-oils");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState<"browse" | "review" | "done">("browse");
  const [submitting, setSubmitting] = useState(false);

  const filtered = allProducts.filter((p) => p.category === activeCategory);
  const cartMap = Object.fromEntries(cart.map((i) => [i.slug, i.qty]));

  function setQty(slug: string, delta: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (!existing) return delta > 0 ? [...prev, { slug, qty: delta }] : prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) return prev.filter((i) => i.slug !== slug);
      return prev.map((i) => (i.slug === slug ? { ...i, qty: newQty } : i));
    });
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => {
    const p = allProducts.find((p) => p.slug === i.slug);
    return s + (p?.price ?? 0) * i.qty;
  }, 0);

  async function submitOrder() {
    setSubmitting(true);
    const scriptUrl = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL;
    if (scriptUrl) {
      const lineItems = cart.map((i) => {
        const p = allProducts.find((p) => p.slug === i.slug);
        return `${p?.name} x${i.qty} ($${((p?.price ?? 0) * i.qty).toFixed(2)})`;
      });
      await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Portal Order Request",
          items: lineItems.join(", "),
          total: `$${totalPrice.toFixed(2)}`,
          notes,
        }),
      }).catch(() => {});
    }
    setSubmitting(false);
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#080806" }}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#D4AF3720", border: "2px solid #D4AF37" }}>
            <CheckCircle size={28} style={{ color: "#D4AF37" }} />
          </div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Order Submitted</h2>
          <p className="text-sm mb-8" style={{ color: "#666" }}>
            Your order request has been received. Your account manager will confirm within 24 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/portal/orders" className="px-6 py-3 text-[10px] tracking-widest uppercase border transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
              View Orders
            </Link>
            <Link href="/portal/dashboard" className="px-6 py-3 text-[10px] tracking-widest uppercase" style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}>
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === "review") {
    return (
      <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
        <div className="max-w-2xl mx-auto">
          <button onClick={() => setStep("browse")} className="flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#D4AF37]" style={{ color: "#666" }}>
            <ArrowLeft size={14} /> Back to Products
          </button>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Review</p>
          <h1 className="text-3xl font-bold mb-8" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Order Summary</h1>

          <div className="border mb-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            {cart.map((item) => {
              const p = allProducts.find((p) => p.slug === item.slug)!;
              return (
                <div key={item.slug} className="flex items-center justify-between px-6 py-4 border-b last:border-0" style={{ borderColor: "#1A1A12" }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#ccc" }}>{p.name}</p>
                    <p className="text-xs" style={{ color: "#555" }}>{p.origin}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setQty(p.slug, -1)} className="w-7 h-7 flex items-center justify-center border transition-colors hover:border-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#888" }}><Minus size={11} /></button>
                      <span className="text-sm w-6 text-center" style={{ color: "#ccc" }}>{item.qty}</span>
                      <button onClick={() => setQty(p.slug, 1)} className="w-7 h-7 flex items-center justify-center border transition-colors hover:border-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#888" }}><Plus size={11} /></button>
                    </div>
                    <span className="text-sm font-semibold w-20 text-right" style={{ color: "#D4AF37" }}>${(p.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border p-6 mb-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <label className="block text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>Order Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Delivery instructions, special requests, preferred ship date…"
              rows={3}
              className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333] resize-none"
              style={{ borderColor: "#2A2A1A", color: "#ccc" }}
            />
          </div>

          <div className="flex items-center justify-between border-t pt-6" style={{ borderColor: "#2A2A1A" }}>
            <div>
              <p className="text-xs" style={{ color: "#666" }}>{totalItems} items</p>
              <p className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>${totalPrice.toFixed(2)}</p>
              <p className="text-[10px]" style={{ color: "#555" }}>Final pricing confirmed by account manager</p>
            </div>
            <button
              onClick={submitOrder}
              disabled={submitting}
              className="px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase font-semibold flex items-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
            >
              {submitting ? "Submitting…" : <><ArrowRight size={13} /> Submit Order</>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Distributor Portal</p>
          <h1 className="text-3xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Place New Order</h1>
        </div>
        <button
          onClick={() => totalItems > 0 && setStep("review")}
          disabled={totalItems === 0}
          className="flex items-center gap-3 px-5 py-3 border transition-all disabled:opacity-40"
          style={{ borderColor: totalItems > 0 ? "#D4AF37" : "#2A2A1A", color: totalItems > 0 ? "#D4AF37" : "#555", background: "#0D0D0A" }}
        >
          <ShoppingCart size={16} />
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            {totalItems > 0 ? `Review Order (${totalItems})` : "Cart Empty"}
          </span>
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-1 mb-8 overflow-x-auto pb-1">
        {productCategories.map(({ slug, label }) => (
          <button
            key={slug}
            onClick={() => setActiveCategory(slug)}
            className="px-4 py-2 text-[9px] tracking-[0.15em] uppercase whitespace-nowrap transition-all"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              background: activeCategory === slug ? "#D4AF37" : "#0D0D0A",
              color: activeCategory === slug ? "#000" : "#666",
              border: `1px solid ${activeCategory === slug ? "#D4AF37" : "#2A2A1A"}`,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p) => {
          const qty = cartMap[p.slug] ?? 0;
          return (
            <div key={p.slug} className="border flex flex-col" style={{ background: "#0D0D0A", borderColor: qty > 0 ? "#D4AF37" : "#2A2A1A" }}>
              <div className="aspect-square overflow-hidden bg-[#111]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>{p.name}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "#555" }}>{p.origin}</p>
                </div>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "#666" }}>{p.description}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: "#1A1A12" }}>
                  <span className="text-sm font-bold" style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}>${p.price}</span>
                  {qty === 0 ? (
                    <button
                      onClick={() => setQty(p.slug, 1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] tracking-widest uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      style={{ borderColor: "#2A2A1A", color: "#888", fontFamily: "var(--font-cinzel), serif" }}
                    >
                      <Plus size={10} /> Add
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(p.slug, -1)} className="w-7 h-7 flex items-center justify-center border" style={{ borderColor: "#D4AF37", color: "#D4AF37" }}><Minus size={11} /></button>
                      <span className="text-sm w-5 text-center font-bold" style={{ color: "#D4AF37" }}>{qty}</span>
                      <button onClick={() => setQty(p.slug, 1)} className="w-7 h-7 flex items-center justify-center border" style={{ borderColor: "#D4AF37", color: "#D4AF37" }}><Plus size={11} /></button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
