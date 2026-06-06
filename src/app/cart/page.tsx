import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

const cartItems = [
  { id: 1, name: "Arbequina Extra Virgin Olive Oil", qty: 2, price: 34.99, category: "Olive Oils" },
  { id: 2, name: "Pedro Ximénez Sherry Vinegar", qty: 1, price: 24.99, category: "Fruit Vinegars" },
  { id: 3, name: "Fleur de Sel de Cadiz", qty: 3, price: 16.99, category: "Artisan Salts" },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 500 ? 0 : 18.99;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen" style={{ background: "#0A0A08" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
          <div className="mb-10">
            <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
              Your Selection
            </p>
            <h1 className="text-4xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
              Shopping Cart
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl mb-4" style={{ color: "#555", fontFamily: "var(--font-cormorant), serif" }}>Your cart is empty</p>
              <Link href="/products" className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
                Browse Products <ArrowRight size={12} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 p-5 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
                    <div className="w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0" style={{ background: "#141410", border: "1px solid #252520" }}>
                      🫒
                    </div>
                    <div className="flex-1">
                      <p className="text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>{item.category}</p>
                      <p className="text-base font-semibold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>{item.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 flex items-center justify-center border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#666" }}><Minus size={12} /></button>
                      <span className="w-8 text-center text-sm" style={{ color: "#ccc" }}>{item.qty}</span>
                      <button className="w-7 h-7 flex items-center justify-center border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#666" }}><Plus size={12} /></button>
                    </div>
                    <p className="text-base font-bold w-20 text-right" style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button className="p-1.5 transition-colors hover:text-[#C0392B]" style={{ color: "#444" }}><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="border p-6 h-fit" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
                <h2 className="text-xl font-bold mb-6" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Order Summary</h2>
                <div className="flex flex-col gap-3 mb-6 pb-6 border-b" style={{ borderColor: "#1E1E14" }}>
                  <div className="flex justify-between text-sm" style={{ color: "#888" }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: "#888" }}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span style={{ color: "#4A7C59" }}>Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs" style={{ color: "#555" }}>
                      Free shipping on orders over $500 (${(500 - subtotal).toFixed(2)} away)
                    </p>
                  )}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-semibold" style={{ color: "#ccc" }}>Total</span>
                  <span className="text-2xl font-bold gold-text" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="block text-center py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Proceed to Checkout
                </Link>
                <Link href="/products" className="block text-center mt-3 text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
