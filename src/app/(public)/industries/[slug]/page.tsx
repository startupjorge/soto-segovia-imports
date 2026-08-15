import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((i) => i.slug !== slug);

  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · {industry.name}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[750px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          {industry.headline}
        </h1>
        <p className="text-[16px] max-w-[550px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          {industry.subheadline}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Get a Custom Quote
          </Link>
          <Link
            href="/products"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[780px] mx-auto px-6 py-20 text-center">
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>{industry.intro}</p>
      </section>

      {/* Why section */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Why It Works</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Why Premium Spanish Gifts Work for {industry.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.why.map((item) => (
              <div key={item.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting occasions */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>When to Gift</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Key Gifting Occasions for {industry.name}
          </h2>
        </div>
        <div className="flex flex-col gap-0">
          {industry.occasions.map((occ, i) => (
            <div key={occ.title} className="flex gap-8 items-start py-8" style={{ borderBottom: i < industry.occasions.length - 1 ? "1px solid #e8e8e8" : "none" }}>
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: "#C9A227" }}>
                <span className="text-[12px] font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{occ.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{occ.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-20">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>What Our Clients Say</p>
          <blockquote className="text-[20px] leading-relaxed font-light italic mb-6" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-cormorant), serif" }}>
            &ldquo;{industry.quote}&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            — {industry.quoteAttribution}
          </p>
        </div>
      </section>

      {/* Featured products */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Recommended For {industry.name}</p>
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Popular Gift Products
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {industry.products.map((product) => (
              <span key={product} className="px-5 py-2 text-[12px] tracking-wider border" style={{ borderColor: "#C9A227", color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
                {product}
              </span>
            ))}
          </div>
          <Link
            href="/products"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Ready to Start</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[550px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Build a Gifting Strategy That Opens Doors
        </h2>
        <p className="text-[15px] mb-10 max-w-[480px] mx-auto" style={{ color: "#666" }}>
          Tell us about your gifting goals. We&rsquo;ll build a custom recommendation and quote within 24 hours.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Contact Us
          </Link>
          <Link
            href="/corporate-gifting"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Corporate Gifting
          </Link>
        </div>
      </section>

      {/* Other industries */}
      <section style={{ background: "#141414" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-16">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-8 text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Also Serving</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="px-5 py-2 text-[11px] tracking-wider border border-gray-700 text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
