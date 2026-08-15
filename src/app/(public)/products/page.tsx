"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";
import { allProducts, categories } from "@/lib/products";
import { useCart } from "@/components/CartContext";

function ProductsInner() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(searchParams.get("category") ?? "all");

  useEffect(() => {
    setActive(searchParams.get("category") ?? "all");
  }, [searchParams]);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const { addItem } = useCart();

  function handlePreOrder(product: Parameters<typeof addItem>[0]) {
    addItem(product);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1500);
  }

  const filtered = active === "all" ? allProducts : allProducts.filter(p => p.category === active);

  return (
    <div className="bg-white min-h-screen">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Príncipe Azahar · Altea, Spain</p>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Products</h1>
          <p className="text-sm" style={{ color: "#666" }}>Premium gourmet foods imported directly from Spain</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Category filters */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <SlidersHorizontal size={16} className="text-gray-400 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className="px-4 py-1.5 text-[11px] tracking-wider border transition-all"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                borderColor: active === cat.slug ? "#C9A227" : "#ddd",
                color: active === cat.slug ? "#C9A227" : "#555",
                background: active === cat.slug ? "#fffdf5" : "transparent",
              }}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-[11px]" style={{ color: "#aaa" }}>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.slug} className="flex flex-col border border-gray-100 hover:border-[#C9A227] hover:shadow-md transition-all group">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 pt-4 pb-2">
                  <p className="text-[10px] tracking-wider uppercase mb-0.5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{product.nameEs}</p>
                  <h3 className="font-bold text-[13px] mb-1.5 leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{product.name}</h3>
                  <p className="text-[11px] leading-relaxed mb-3" style={{ color: "#777" }}>{product.description}</p>
                  <p className="text-[10px] mb-3" style={{ color: "#bbb" }}>{product.producer}</p>
                </div>
              </Link>
              <div className="px-4 pb-4 mt-auto flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>${product.price}</span>
                  <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 border" style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Pre-Order</span>
                </div>
                <Link
                  href="/shop"
                  onClick={() => handlePreOrder(product)}
                  className="block w-full py-2.5 text-center text-[11px] font-bold tracking-wider text-white transition-all hover:opacity-90"
                  style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {addedSlug === product.slug ? "✓ Added — Go to Shop" : "Pre-Order"}
                </Link>
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="w-full py-2 text-[11px] font-bold tracking-wider border border-gray-200 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Currently Accepting Pre-Orders</p>
          <p className="text-sm mb-5" style={{ color: "#777" }}>All products are pre-order. Payment is collected after we confirm your order. 100% refundable before shipment.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/shop" className="inline-block px-10 py-3 font-bold text-[12px] tracking-wider text-white hover:opacity-90 transition-all" style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
              Place a Pre-Order
            </Link>
            <button
              onClick={() => setWaitlistOpen(true)}
              className="px-10 py-3 font-bold text-[12px] tracking-wider border transition-all"
              style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
            >
              Join The Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsInner />
    </Suspense>
  );
}
