import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen" style={{ background: "#0A0A08" }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-12">
          <div className="mb-10 flex items-center gap-3">
            <Lock size={16} style={{ color: "#D4AF37" }} />
            <p className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>Secure Checkout</p>
          </div>
          <h1 className="text-4xl font-bold mb-10" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
            Complete Your Order
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Shipping */}
              <div>
                <h2 className="text-xl font-bold mb-5" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Shipping Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["First Name", "Last Name"].map((label) => (
                      <div key={label}>
                        <label className="block text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>{label}</label>
                        <input type="text" className="w-full px-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#2A2A1A", color: "#ccc" }} />
                      </div>
                    ))}
                  </div>
                  {["Street Address", "City", "State / ZIP"].map((label) => (
                    <div key={label}>
                      <label className="block text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>{label}</label>
                      <input type="text" className="w-full px-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#2A2A1A", color: "#ccc" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-xl font-bold mb-5" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Payment</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>Card Number</label>
                    <input type="text" placeholder="•••• •••• •••• ••••" className="w-full px-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]" style={{ borderColor: "#2A2A1A", color: "#ccc" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["Expiry (MM/YY)", "CVV"].map((label) => (
                      <div key={label}>
                        <label className="block text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>{label}</label>
                        <input type="text" className="w-full px-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#2A2A1A", color: "#ccc" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-2">
              <div className="p-6 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
                <h2 className="text-xl font-bold mb-5" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Order Summary</h2>
                <div className="flex flex-col gap-3 mb-5 pb-5 border-b" style={{ borderColor: "#1E1E14" }}>
                  {[
                    { name: "Arbequina EVOO × 2", price: "$69.98" },
                    { name: "Sherry Vinegar × 1", price: "$24.99" },
                    { name: "Fleur de Sel × 3", price: "$50.97" },
                  ].map(({ name, price }) => (
                    <div key={name} className="flex justify-between text-sm" style={{ color: "#888" }}>
                      <span>{name}</span>
                      <span>{price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex justify-between text-sm" style={{ color: "#888" }}><span>Subtotal</span><span>$145.94</span></div>
                  <div className="flex justify-between text-sm" style={{ color: "#888" }}><span>Shipping</span><span>$18.99</span></div>
                  <div className="flex justify-between text-sm" style={{ color: "#888" }}><span>Tax</span><span>$12.08</span></div>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-b mb-6" style={{ borderColor: "#1E1E14" }}>
                  <span className="text-sm font-semibold" style={{ color: "#ccc" }}>Total</span>
                  <span className="text-2xl font-bold gold-text" style={{ fontFamily: "var(--font-cormorant), serif" }}>$177.01</span>
                </div>
                <button
                  className="w-full py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Place Order
                </button>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Lock size={10} style={{ color: "#444" }} />
                  <p className="text-[9px]" style={{ color: "#444" }}>256-bit SSL encrypted · Secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
