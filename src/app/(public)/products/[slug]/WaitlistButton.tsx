"use client";

import { useState } from "react";
import Link from "next/link";
import WaitlistModal from "@/components/WaitlistModal";
import { useCart } from "@/components/CartContext";
import { allProducts } from "@/lib/products";

export default function WaitlistButton({ productName }: { productName: string }) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const product = allProducts.find((p) => p.name === productName);

  function handlePreOrder() {
    if (product) {
      addItem(product);
      setAdded(true);
    }
  }

  return (
    <>
      <WaitlistModal
        open={open}
        onClose={() => setOpen(false)}
        initialMessage={`Waitlist interest: ${productName}`}
      />
      <div className="flex flex-col gap-3">
        <Link
          href="/shop"
          onClick={handlePreOrder}
          className="w-full py-4 text-center text-[12px] font-bold tracking-wider uppercase transition-all hover:opacity-90 text-white"
          style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
        >
          {added ? "✓ Added, Continue to Pre-Order" : "Pre-Order Now"}
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="w-full py-3.5 text-[12px] font-bold tracking-wider uppercase border transition-all hover:border-[#C9A227] hover:text-[#C9A227]"
          style={{ borderColor: "#ddd", color: "#888", fontFamily: "var(--font-cinzel), serif" }}
        >
          Join Waitlist
        </button>
        <p className="text-center text-[11px]" style={{ color: "#aaa" }}>
          Pre-orders are 100% refundable before shipment. No payment collected today.
        </p>
      </div>
    </>
  );
}
