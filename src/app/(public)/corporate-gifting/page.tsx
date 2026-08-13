import Link from "next/link";
import Image from "next/image";

const packages = [
  { name: "Executive Bronze", price: "$99.00 per box", items: "3 premium products", min: "10 boxes minimum", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80" },
  { name: "Executive Silver", price: "$179.00 per box", items: "5 premium products", min: "5 boxes minimum", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80" },
  { name: "Executive Gold", price: "$279.00 per box", items: "8 premium products", min: "3 boxes minimum", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80" },
];

export default function CorporateGiftingPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For Business</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Corporate Gifting</h1>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>Impress executives, clients, and employees with premium Spanish gourmet gift boxes — personalized for your brand.</p>
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Gift Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border border-gray-100 hover:border-[#C9A227] transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image src={pkg.image} alt={pkg.name} fill style={{ objectFit: "cover" }} sizes="33vw" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[14px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{pkg.name}</h3>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "#C9A227" }}>{pkg.price}</p>
                <p className="text-[12px] mb-1" style={{ color: "#666" }}>{pkg.items}</p>
                <p className="text-[11px] mb-5" style={{ color: "#999" }}>{pkg.min}</p>
                <Link href="/contact" className="block text-center py-2.5 text-[11px] font-bold tracking-wider bg-[#C9A227] text-white hover:opacity-90 transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 px-6" style={{ background: "#C9A227" }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold text-white text-center mb-10" style={{ fontFamily: "var(--font-cinzel), serif" }}>How Corporate Gifting Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Choose your package", "Add recipient list", "Customize branding & notes", "We ship to each recipient"].map((step, i) => (
              <div key={step} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white" style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>{i + 1}</div>
                <p className="font-bold text-sm text-white leading-snug" style={{ fontFamily: "var(--font-cinzel), serif" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 text-center" style={{ background: "#F0F0EA" }}>
        <p className="text-base font-bold mb-1" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>Need a custom quote?</p>
        <p className="text-sm" style={{ color: "#555" }}>Contact us at <a href="mailto:sales@sotosegoviaimports.com" className="font-bold hover:text-[#C9A227] transition-colors" style={{ color: "#1A1A1A" }}>sales@sotosegoviaimports.com</a></p>
      </section>
    </div>
  );
}
