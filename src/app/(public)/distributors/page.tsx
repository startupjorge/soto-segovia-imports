import Link from "next/link";

const benefits = [
  { title: "Wholesale Pricing", body: "Competitive pricing tiers based on order volume with dedicated account support." },
  { title: "Curated Assortments", body: "Custom product selections tailored to your customer base and price points." },
  { title: "Private Label", body: "White-label options available for select products with minimum order quantities." },
  { title: "Marketing Support", body: "Product photography, descriptions, and merchandising materials provided." },
  { title: "Easy Reordering", body: "Streamlined online portal for quick and easy repeat orders anytime." },
  { title: "Dedicated Manager", body: "A personal account manager available to support every aspect of your order." },
];

const stats = [
  { value: "500+", label: "Distributor Partners" },
  { value: "28", label: "U.S. States Served" },
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "SKUs Available" },
];

export default function DistributorsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Partner With Us</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Become a Distributor</h1>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>Supply luxury grocery stores, five-star hotels, and fine dining restaurants with Spain's finest gourmet products.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="py-10 text-center">
              <p className="text-3xl font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{s.value}</p>
              <p className="text-[11px] tracking-wider uppercase" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Partner Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 border border-gray-100 hover:border-[#C9A227] transition-colors">
              <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
              <h3 className="font-bold text-[13px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{b.title}</h3>
              <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6" style={{ background: "#C9A227" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>Ready to Get Started?</h2>
          <p className="text-sm text-white/80 mb-8">Fill out our distributor application and a member of our team will be in touch within 48 hours.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact?type=distributor" className="px-10 py-3 bg-white font-bold text-[12px] text-[#1A1A1A] hover:bg-gray-100 transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>Apply Now</Link>
            <Link href="/portal/login" className="px-10 py-3 border border-white text-white font-bold text-[12px] hover:bg-white hover:text-[#1A1A1A] transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>Distributor Login</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
