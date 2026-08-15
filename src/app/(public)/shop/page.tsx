"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, User, FileText, CreditCard, Check, Plus, Minus, Trash2, ChevronRight, X } from "lucide-react";
import { allProducts, giftBoxes, categories, Product } from "@/lib/products";
import { useCart, Recipient, NoteType } from "@/components/CartContext";

const STEPS = [
  { number: 1, label: "Select Products", icon: ShoppingBag },
  { number: 2, label: "Recipient Info", icon: User },
  { number: 3, label: "Gift Note", icon: FileText },
  { number: 4, label: "Review & Pay", icon: CreditCard },
];

// ── Step 1: Product Selection ─────────────────────────────────────────────────
function StepProducts({ onNext }: { onNext: () => void }) {
  const { items, addItem, removeItem, updateQty, total, itemCount } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? allProducts
    : activeCategory === "gift-boxes"
    ? giftBoxes
    : allProducts.filter((p) => p.category === activeCategory);

  const getQty = (slug: string) => items.find((i) => i.product.slug === slug)?.quantity ?? 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Product grid */}
      <div className="flex-1 min-w-0">
        {/* Gift Box spotlight */}
        <div className="mb-8 p-5 border border-[#C9A227]/40 cursor-pointer hover:border-[#C9A227] transition-all" style={{ background: "linear-gradient(135deg, #fffdf5, #fff8e1)" }} onClick={() => setActiveCategory("gift-boxes")}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Featured · Most Popular</p>
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Spanish Gourmet Gift Boxes</h3>
              <p className="text-[12px]" style={{ color: "#666" }}>Curated collections from $79 — perfect for VIP clients, executives & corporate gifting.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {giftBoxes.map((box) => (
                <div key={box.slug} onClick={(e) => { e.stopPropagation(); addItem(box); }} className="flex flex-col items-center gap-1 px-4 py-3 border border-[#C9A227]/30 hover:border-[#C9A227] transition-all cursor-pointer" style={{ background: "#fff", minWidth: "80px" }}>
                  <p className="text-[10px] font-bold text-center leading-tight" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{box.name.replace(" Gift Box", "")}</p>
                  <p className="text-[13px] font-bold" style={{ color: "#C9A227" }}>${box.price}</p>
                  {getQty(box.slug) > 0 && <span className="text-[9px] font-bold px-2 py-0.5 text-white" style={{ background: "#C9A227" }}>×{getQty(box.slug)}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className="px-4 py-1.5 text-[11px] tracking-wider border transition-all"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                borderColor: activeCategory === cat.slug ? "#C9A227" : "#ddd",
                color: activeCategory === cat.slug ? "#C9A227" : "#666",
                background: activeCategory === cat.slug ? "#fffdf5" : "transparent",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => {
            const qty = getQty(product.slug);
            return (
              <div
                key={product.slug}
                className="flex flex-col border transition-all"
                style={{
                  borderColor: qty > 0 ? "#C9A227" : "#e8e8e8",
                  background: qty > 0 ? "#fffdf5" : "#fff",
                }}
              >
                <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", padding: "12px" }}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {qty > 0 && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>
                      {qty}
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <p className="text-[10px] tracking-wider uppercase mb-0.5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{product.nameEs}</p>
                  <h3 className="font-bold text-[12px] leading-snug mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{product.name}</h3>
                  <p className="text-[11px] leading-relaxed mb-3 flex-1" style={{ color: "#888" }}>{product.description.slice(0, 60)}…</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-[14px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>${product.price}</span>
                    {qty === 0 ? (
                      <button
                        onClick={() => addItem(product)}
                        className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold tracking-wider transition-all text-white"
                        style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
                      >
                        <Plus size={11} /> Add
                      </button>
                    ) : (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQty(product.slug, qty - 1)}
                          className="w-6 h-6 flex items-center justify-center border transition-all hover:border-[#C9A227]"
                          style={{ borderColor: "#ddd" }}
                        >
                          <Minus size={10} />
                        </button>
                        <span className="w-6 text-center text-[12px] font-bold">{qty}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="w-6 h-6 flex items-center justify-center border transition-all hover:border-[#C9A227]"
                          style={{ borderColor: "#ddd" }}
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart sidebar */}
      <div className="lg:w-[300px] flex-shrink-0">
        <div className="sticky top-24">
          <div className="border border-gray-200 p-5" style={{ background: "#FAFAFA" }}>
            <h3 className="font-bold text-[13px] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              <ShoppingBag size={15} style={{ color: "#C9A227" }} />
              Your Selection
              {itemCount > 0 && (
                <span className="ml-auto text-[11px] font-normal" style={{ color: "#888" }}>{itemCount} item{itemCount !== 1 ? "s" : ""}</span>
              )}
            </h3>

            {items.length === 0 ? (
              <p className="text-[12px] text-center py-6" style={{ color: "#aaa" }}>No products selected yet.</p>
            ) : (
              <div className="flex flex-col gap-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.slug} className="flex gap-3 items-center">
                    <div className="relative w-10 h-10 flex-shrink-0 bg-gray-100">
                      <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: "contain", padding: "4px" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold truncate" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.product.name}</p>
                      <p className="text-[11px]" style={{ color: "#888" }}>${item.product.price} × {item.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(item.product.slug)} className="text-gray-300 hover:text-red-400 transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px]" style={{ color: "#666" }}>Subtotal</span>
                    <span className="font-bold text-[15px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>${total.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] mt-1" style={{ color: "#aaa" }}>Shipping calculated at checkout</p>
                </div>
                <button
                  onClick={onNext}
                  className="w-full py-3 font-bold text-[12px] tracking-wider text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Continue <ChevronRight size={14} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 2: Recipient Info ────────────────────────────────────────────────────
function StepRecipient({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { recipient, setRecipient } = useCart();
  const [form, setForm] = useState<Recipient>(recipient);
  const [errors, setErrors] = useState<Partial<Record<keyof Recipient, string>>>({});

  const set = (field: keyof Recipient) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  function validate() {
    const errs: Partial<Record<keyof Recipient, string>> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.address.trim()) errs.address = "Required";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.state.trim()) errs.state = "Required";
    if (!form.zip.trim()) errs.zip = "Required";
    return errs;
  }

  function handleNext() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setRecipient(form);
    onNext();
  }

  const inputClass = "w-full px-4 py-2.5 text-[13px] border outline-none focus:border-[#C9A227] transition-colors bg-white";
  const labelClass = "block text-[11px] font-semibold tracking-wider uppercase mb-1.5";

  return (
    <div className="max-w-[600px] mx-auto">
      <p className="text-[14px] mb-8" style={{ color: "#666" }}>
        Who is receiving this gift? We&rsquo;ll ship directly to them with your personal gift note enclosed.
      </p>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Recipient Name
            </label>
            <input
              value={form.name}
              onChange={set("name")}
              placeholder="Full name"
              className={inputClass}
              style={{ borderColor: errors.name ? "#e53e3e" : "#ddd" }}
            />
            {errors.name && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.name}</p>}
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="recipient@email.com"
              className={inputClass}
              style={{ borderColor: errors.email ? "#e53e3e" : "#ddd" }}
            />
            {errors.email && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Street Address
          </label>
          <input
            value={form.address}
            onChange={set("address")}
            placeholder="123 Main Street, Apt 4B"
            className={inputClass}
            style={{ borderColor: errors.address ? "#e53e3e" : "#ddd" }}
          />
          {errors.address && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.address}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>City</label>
            <input
              value={form.city}
              onChange={set("city")}
              placeholder="City"
              className={inputClass}
              style={{ borderColor: errors.city ? "#e53e3e" : "#ddd" }}
            />
            {errors.city && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.city}</p>}
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>State</label>
            <input
              value={form.state}
              onChange={set("state")}
              placeholder="FL"
              maxLength={2}
              className={inputClass}
              style={{ borderColor: errors.state ? "#e53e3e" : "#ddd" }}
            />
            {errors.state && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.state}</p>}
          </div>
          <div>
            <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>ZIP</label>
            <input
              value={form.zip}
              onChange={set("zip")}
              placeholder="33101"
              className={inputClass}
              style={{ borderColor: errors.zip ? "#e53e3e" : "#ddd" }}
            />
            {errors.zip && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.zip}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Country</label>
          <select
            value={form.country}
            onChange={set("country")}
            className={inputClass}
            style={{ borderColor: "#ddd" }}
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={onBack} className="px-6 py-3 text-[12px] font-bold tracking-wider border transition-colors hover:border-gray-400" style={{ fontFamily: "var(--font-cinzel), serif", borderColor: "#ddd", color: "#666" }}>
          Back
        </button>
        <button onClick={handleNext} className="flex-1 py-3 font-bold text-[12px] tracking-wider text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Continue <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ── Step 3: Gift Note ─────────────────────────────────────────────────────────
function StepGiftNote({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { giftNote, setGiftNote, noteType, setNoteType, recipient } = useCart();
  const [note, setNote] = useState(giftNote);
  const [localNoteType, setLocalNoteType] = useState<NoteType>(noteType);
  const maxChars = 300;
  const firstName = recipient.name.split(" ")[0] || "friend";

  function handleNext() {
    setGiftNote(note);
    setNoteType(localNoteType);
    onNext();
  }

  const suggestions = [
    `${firstName}, thank you for being an incredible partner. Your trust means everything to us — looking forward to many more years of building something great together.`,
    `${firstName}, it's been a pleasure working with you this year. Enjoy a taste of Spain's finest — a small token of our appreciation for everything you do.`,
    `${firstName}, thank you for being such an amazing client. Wishing you continued success and growth — we're grateful to be part of your journey.`,
    `${firstName}, thank you for your partnership and loyalty. These artisan gifts from Altea, Spain are a reflection of the quality and care we bring to every relationship.`,
    `Congratulations, ${firstName}! Wishing you every success in this exciting next chapter. It's been an honor working alongside you.`,
    `${firstName}, thank you for choosing us. We look forward to delivering exceptional results for you — enjoy this small taste of Spain as our way of saying thank you.`,
  ];

  return (
    <div className="max-w-[600px] mx-auto">
      <p className="text-[14px] mb-8" style={{ color: "#666" }}>
        Add a personal message to accompany your gift. Choose how you'd like it delivered.
      </p>

      {/* Note type toggle */}
      <div className="mb-7">
        <p className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          How would you like your note delivered?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {([
            {
              type: "typed" as NoteType,
              label: "Typed Note",
              desc: "Your message printed in elegant typography on a premium matte gift card.",
              icon: "🖨️",
            },
            {
              type: "handwritten" as NoteType,
              label: "Handwritten Note",
              desc: "Our team handwrites your message in calligraphy on a premium card. A personal touch that stands out.",
              icon: "✍️",
            },
          ] as const).map((opt) => (
            <button
              key={opt.type}
              onClick={() => setLocalNoteType(opt.type)}
              className="text-left p-4 border-2 transition-all"
              style={{
                borderColor: localNoteType === opt.type ? "#C9A227" : "#e8e8e8",
                background: localNoteType === opt.type ? "#fffdf5" : "#fff",
              }}
            >
              <div className="text-2xl mb-2">{opt.icon}</div>
              <p className="font-bold text-[12px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{opt.label}</p>
              <p className="text-[11px] leading-relaxed" style={{ color: "#888" }}>{opt.desc}</p>
              {localNoteType === opt.type && (
                <p className="text-[10px] font-bold tracking-wider mt-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>✓ Selected</p>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[11px] font-semibold tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Your Gift Message
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, maxChars))}
          rows={6}
          placeholder="Write a personal message for your recipient..."
          className="w-full px-4 py-3 text-[14px] border outline-none focus:border-[#C9A227] transition-colors resize-none bg-white leading-relaxed"
          style={{
            borderColor: "#ddd",
            fontFamily: localNoteType === "handwritten" ? "cursive" : "var(--font-cormorant), serif",
          }}
        />
        <div className="flex justify-between items-center mt-1.5">
          <p className="text-[11px]" style={{ color: "#aaa" }}>
            {localNoteType === "handwritten"
              ? "Handwritten in calligraphy on a premium card."
              : "Printed on a premium gift card and enclosed in the package."}
          </p>
          <p className="text-[11px]" style={{ color: note.length > maxChars * 0.9 ? "#C9A227" : "#aaa" }}>{note.length}/{maxChars}</p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#888" }}>
          Need inspiration? Try one of these:
        </p>
        <div className="flex flex-col gap-2">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => setNote(s.slice(0, maxChars))}
              className="text-left text-[12px] leading-relaxed px-4 py-3 border border-gray-100 hover:border-[#C9A227] transition-all"
              style={{ color: "#666", background: "#FAFAFA" }}
            >
              &ldquo;{s.slice(0, 100)}&hellip;&rdquo;
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="px-6 py-3 text-[12px] font-bold tracking-wider border transition-colors hover:border-gray-400" style={{ fontFamily: "var(--font-cinzel), serif", borderColor: "#ddd", color: "#666" }}>
          Back
        </button>
        <button onClick={handleNext} className="flex-1 py-3 font-bold text-[12px] tracking-wider text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          {note.trim() ? "Continue" : "Skip & Continue"} <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ── Step 4: Review & Pre-Order ───────────────────────────────────────────────
function StepReview({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const { items, recipient, giftNote, noteType, total, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);

  async function submitPreOrder() {
    const SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";
    if (SCRIPT_URL) {
      const orderSummary = items.map((i) => `${i.product.name} x${i.quantity} ($${(i.product.price * i.quantity).toFixed(2)})`).join(", ");
      const params = new URLSearchParams({
        firstName: recipient.name.split(" ")[0],
        lastName: recipient.name.split(" ").slice(1).join(" "),
        email: recipient.email,
        message: `PRE-ORDER REQUEST\n\nRecipient: ${recipient.name} <${recipient.email}>\nAddress: ${recipient.address}, ${recipient.city}, ${recipient.state} ${recipient.zip} ${recipient.country}\n\nItems: ${orderSummary}\nTotal: $${total.toFixed(2)}\n\nGift Note (${noteType}): ${giftNote || "None"}`,
        lang: "EN",
        source: "pre_order",
      });
      await fetch(`${SCRIPT_URL}?${params}`, { method: "GET", mode: "no-cors" });
    }
    clearCart();
    onSuccess();
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ name: i.product.name, price: i.product.price, quantity: i.quantity })),
          recipientName: recipient.name,
          recipientEmail: recipient.email,
          giftNote,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Stripe not configured yet — fall back to pre-order submission
        await submitPreOrder();
      }
    } catch {
      await submitPreOrder();
    }
  }

  const shipping = total >= 150 ? 0 : 12.99;
  const grandTotal = total + shipping;

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Order summary */}
        <div>
          <h3 className="font-bold text-[13px] mb-4 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Order Summary
          </h3>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div key={item.product.slug} className="flex gap-3 items-center">
                <div className="relative w-12 h-12 flex-shrink-0 bg-gray-50 border border-gray-100">
                  <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: "contain", padding: "4px" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.product.name}</p>
                  <p className="text-[11px]" style={{ color: "#888" }}>Qty {item.quantity} · ${item.product.price} ea</p>
                </div>
                <p className="text-[13px] font-bold flex-shrink-0" style={{ color: "#1A1A1A" }}>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col gap-2">
            <div className="flex justify-between text-[12px]" style={{ color: "#666" }}>
              <span>Subtotal</span><span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[12px]" style={{ color: "#666" }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? <span style={{ color: "#C9A227" }}>Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-[10px]" style={{ color: "#aaa" }}>Free shipping on orders over $150</p>
            )}
            <div className="flex justify-between font-bold text-[16px] pt-2 border-t border-gray-100 mt-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              <span>Total</span><span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Recipient + note */}
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold text-[13px] mb-3 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Ship To
            </h3>
            <div className="text-[13px] leading-relaxed" style={{ color: "#555" }}>
              <p className="font-bold" style={{ color: "#1A1A1A" }}>{recipient.name}</p>
              <p>{recipient.email}</p>
              <p>{recipient.address}</p>
              <p>{recipient.city}, {recipient.state} {recipient.zip}</p>
              <p>{recipient.country === "US" ? "United States" : recipient.country}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[13px] mb-3 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Gift Note
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 border" style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                {noteType === "handwritten" ? "✍️ Handwritten" : "🖨️ Typed"}
              </span>
            </div>
            {giftNote ? (
              <div className="p-4 bg-[#F8F8F4] border-l-2" style={{ borderColor: "#C9A227" }}>
                <p className="text-[13px] leading-relaxed italic" style={{ color: "#555", fontFamily: noteType === "handwritten" ? "cursive" : "var(--font-cormorant), serif" }}>
                  &ldquo;{giftNote}&rdquo;
                </p>
              </div>
            ) : (
              <p className="text-[12px]" style={{ color: "#aaa" }}>No message — gift will be sent without a note.</p>
            )}
          </div>
        </div>
      </div>

      {/* Payment notice */}
      <div className="p-4 mb-6 text-[12px] leading-relaxed border border-[#C9A227]/30" style={{ background: "#fffdf5", color: "#666" }}>
        Secure checkout via Stripe. You&rsquo;ll be redirected to Stripe to complete payment. You will be notified when Pre-Orders ship. <strong style={{ color: "#1A1A1A" }}>100% refundable</strong> before shipment — no questions asked.
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="px-6 py-3 text-[12px] font-bold tracking-wider border transition-colors hover:border-gray-400" style={{ fontFamily: "var(--font-cinzel), serif", borderColor: "#ddd", color: "#666" }}>
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 py-3 font-bold text-[13px] tracking-wider text-white flex items-center justify-center gap-2 transition-opacity"
          style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif", opacity: submitting ? 0.7 : 1 }}
        >
          {submitting ? "Redirecting to Checkout…" : "Pay Now · Secure Checkout"}
          {!submitting && <ChevronRight size={14} />}
        </button>
      </div>
    </div>
  );
}

// ── Success ───────────────────────────────────────────────────────────────────
function StepSuccess() {
  return (
    <div className="max-w-[560px] mx-auto text-center py-10">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#C9A227" }}>
        <Check size={28} className="text-white" />
      </div>
      <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
        Pre-Order Confirmed
      </p>
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
        Thanks for Your Order
      </h2>
      <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#666" }}>
        Our team will respond as soon as possible to process your pre-order.
      </p>
      <div className="p-5 border border-[#C9A227]/30 mb-8 text-left" style={{ background: "#fffdf5" }}>
        <p className="text-[11px] font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>What happens next</p>
        <ol className="flex flex-col gap-2">
          {[
            "We confirm product availability and prepare your order.",
            "You receive a secure payment link by email within a few hours.",
            "Once payment is made, we will add you to the pre-order VIP list and notify you when shipments are ready.",
            "Your gift arrives with a personal note from you.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-[12px]" style={{ color: "#555" }}>
              <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 text-white" style={{ background: "#C9A227" }}>{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/"
          className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
          style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
        >
          Back to Home
        </Link>
        <Link
          href="/products"
          className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
          style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
        >
          Browse More Products
        </Link>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ShopPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const { itemCount } = useCart();

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#1A1A1A" }} className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Príncipe Azahar · Altea, Spain
          </p>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            {done ? "Pre-Order Confirmed" : "Gift Pre-Order"}
          </h1>
        </div>
      </div>

      {/* Step indicator */}
      {!done && (
        <div style={{ background: "#F8F8F4", borderBottom: "1px solid #e8e8e8" }} className="px-6 py-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-0">
              {STEPS.map((s, idx) => {
                const completed = step > s.number;
                const active = step === s.number;
                const Icon = s.icon;
                return (
                  <div key={s.number} className="flex items-center flex-1 last:flex-none">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                        style={{
                          background: completed ? "#C9A227" : active ? "#1A1A1A" : "#e8e8e8",
                        }}
                      >
                        {completed ? (
                          <Check size={13} className="text-white" />
                        ) : (
                          <Icon size={13} style={{ color: active ? "#C9A227" : "#aaa" }} />
                        )}
                      </div>
                      <span
                        className="text-[11px] font-semibold tracking-wide hidden sm:block"
                        style={{
                          fontFamily: "var(--font-cinzel), serif",
                          color: active ? "#1A1A1A" : completed ? "#C9A227" : "#aaa",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                    {idx < STEPS.length - 1 && (
                      <div className="flex-1 mx-3 h-px" style={{ background: step > s.number ? "#C9A227" : "#e8e8e8" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Step content */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {done ? (
          <StepSuccess />
        ) : step === 1 ? (
          <StepProducts onNext={next} />
        ) : step === 2 ? (
          <StepRecipient onNext={next} onBack={back} />
        ) : step === 3 ? (
          <StepGiftNote onNext={next} onBack={back} />
        ) : (
          <StepReview onBack={back} onSuccess={() => setDone(true)} />
        )}
      </div>
    </div>
  );
}
