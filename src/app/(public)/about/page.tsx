import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Jorge Soto", role: "Co-Founder & CEO", bio: "Born with a passion for Spanish culture and cuisine, Jorge has dedicated his career to bringing authentic gourmet flavors to the world." },
  { name: "Roberto Segovia Perez", role: "Co-Founder & President", bio: "Roberto's deep roots in Spain's Altea region and lifelong expertise in artisan food production guide every product we source." },
];

const values = [
  { title: "Authenticity", body: "Every product is sourced directly from artisan producers in Spain who have perfected their craft over generations." },
  { title: "Quality", body: "We personally visit each farm and producer to ensure the highest standards before any product bears our name." },
  { title: "Excellence", body: "From sourcing to delivery, we are committed to an exceptional experience for every client and partner." },
  { title: "Heritage", body: "We preserve the traditions of Spanish gastronomy and share them with the world through every bottle and jar." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Story</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>A Friendship Built on Heritage &amp; Passion</h1>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>Two friends, one vision — to bring the finest gourmet foods from Spain to the world.</p>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Spanish cuisine" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>How It Started</p>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>A Chance Meeting in Marseille</h2>
          <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "#555" }}>
            <p>Jorge Soto and Roberto Segovia Perez met in Marseille, France while Jorge was on his honeymoon with his wife. What began as a chance meeting quickly became a lifelong friendship built on a shared love for food, culture, and connection.</p>
            <p>Years later, while Roberto was visiting Miami, they dreamed of bringing the authentic flavors of Spain to the world. Inspired by Jorge's Spanish heritage and generations of family tradition, Soto & Segovia Imports was born.</p>
            <p>Today, we continue that legacy — curating the finest artisan products from Spain and sharing them with those who value quality, authenticity, and excellence.</p>
          </div>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 text-[11px] tracking-wider font-bold border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 border border-gray-100">
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[13px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{v.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[800px] mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-2 border-gray-100">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt={member.name} width={112} height={112} style={{ objectFit: "cover" }} />
              </div>
              <h3 className="font-bold text-[14px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{member.name}</h3>
              <p className="text-[11px] tracking-wider mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{member.role}</p>
              <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center" style={{ background: "#C9A227" }}>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>Ready to Partner With Us?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/distributors" className="px-8 py-3 bg-white text-[#1A1A1A] font-bold text-[12px] hover:bg-gray-100 transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>Become a Distributor</Link>
          <Link href="/contact" className="px-8 py-3 border border-white text-white font-bold text-[12px] hover:bg-white hover:text-[#1A1A1A] transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
