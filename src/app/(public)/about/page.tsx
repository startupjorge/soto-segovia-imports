"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const values = [
  { title: "Authenticity", body: "Every product is sourced directly from artisan producers in Spain who have perfected their craft over generations." },
  { title: "Quality", body: "We personally vet each farm and producer to ensure the highest standards before any product bears our name." },
  { title: "Excellence", body: "From sourcing to delivery, we are committed to an exceptional experience for every client and partner." },
  { title: "Heritage", body: "We preserve the traditions of Spanish gastronomy and share them with the world through every bottle and jar." },
];

export default function AboutPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Header */}
      <div className="border-b border-gray-100 py-12 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Story</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            A Shared Heritage.<br />A Passion for Exceptional Spanish Food.
          </h1>
        </div>
      </div>

      {/* Origin Story */}
      <section className="max-w-[800px] mx-auto px-6 py-16">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>How It Started</p>
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>A Chance Encounter in Marseille</h2>
        <div className="flex flex-col gap-5 text-[15px] leading-relaxed" style={{ color: "#555" }}>
          <p>Soto &amp; Segovia Imports began with a chance encounter thousands of miles from home.</p>
          <p>Jorge Soto and Roberto Segovia Pérez met while traveling through Europe. Jorge was on his honeymoon, and Roberto was traveling with his significant other when the two couples found themselves sitting next to each other in Marseille, France.</p>
          <p style={{ fontStyle: "italic", color: "#888" }}>A conversation quickly became a friendship.</p>
          <p>Jorge and Roberto connected over entrepreneurship, their shared Spanish heritage, and a deep appreciation for the foods and traditions of Spain. They talked about exceptional olive oils, artisan salts, vinegars, wines, and the simple ingredients that make Spanish cuisine so extraordinary.</p>
          <p style={{ fontStyle: "italic", color: "#888" }}>The idea stayed with them.</p>
          <p>A year later, when Roberto and his significant other visited Jorge in Miami, that conversation became something more. They decided to create Soto &amp; Segovia Imports, bringing carefully selected gourmet foods from Spain to the United States and sharing the flavors, craftsmanship, and traditions they both love.</p>
        </div>
      </section>

      {/* From Spain with Purpose */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Focus</p>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>From Spain, With Purpose</h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>Soto &amp; Segovia Imports specializes in premium Spanish gourmet foods and thoughtfully curated gifting experiences.</p>
            <p>Beginning with corporate gifting — executive gifts, client appreciation, and luxury gifting — the company serves businesses and individuals looking for something more memorable than the traditional gift basket: authentic products from Spain selected for their quality, provenance, and craftsmanship.</p>
            <p>From extra virgin olive oils and infused oils to artisan salts, vinegars, and other Spanish specialties, every product is chosen to offer a genuine taste of Spain.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 border border-gray-100">
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[13px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{v.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-16 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-xl font-bold mb-14 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Meet the Founders</h2>

          {/* Jorge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                <Image src="/jorge-soto.jpg" alt="Jorge Soto" width={224} height={224} style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Jorge Soto</h3>
              <p className="text-[11px] tracking-wider mb-5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Co-Founder &amp; CEO</p>
              <div className="flex flex-col gap-4 text-[14px] leading-relaxed" style={{ color: "#555" }}>
                <p>A lifelong entrepreneur, Jorge Soto has spent more than 25 years in technology, media, startups, and entrepreneurship. His career has taken him from Silicon Valley to New York and ultimately back to his hometown of Miami, working with and helping build companies ranging from early-stage startups to global technology brands, including Twitter (now X).</p>
                <p>Having traveled extensively around the world, Jorge developed an even greater appreciation for the food, culture, and traditions connected to his Spanish ancestry. Soto &amp; Segovia Imports brings together his entrepreneurial experience with something deeply personal: celebrating his heritage and introducing exceptional Spanish foods to a new generation of customers.</p>
              </div>
            </div>
          </div>

          {/* Roberto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center md:order-last">
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                <Image src="/roberto-segovia.jpg" alt="Roberto Segovia Pérez" width={224} height={224} style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Roberto Segovia Pérez</h3>
              <p className="text-[11px] tracking-wider mb-5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Co-Founder &amp; President</p>
              <div className="flex flex-col gap-4 text-[14px] leading-relaxed" style={{ color: "#555" }}>
                <p>Based in Madrid, Spain, Roberto Segovia Pérez is a Spanish entrepreneur with a passion for gourmet food, exceptional products, and extraordinary client service.</p>
                <p>Living at the source gives Roberto a unique connection to the producers, traditions, and culinary culture behind the products Soto &amp; Segovia Imports brings to America. His commitment is simple: find exceptional Spanish products and deliver an experience worthy of them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-[700px] mx-auto px-6 py-16 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Looking Ahead</p>
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Journey Is Just Beginning</h2>
        <div className="flex flex-col gap-4 text-[15px] leading-relaxed mb-8" style={{ color: "#555" }}>
          <p>What started as two strangers sitting next to each other while traveling through Europe has become a friendship, a business, and a shared mission:</p>
          <p className="text-[16px] font-semibold" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
            To bring the exceptional foods, craftsmanship, and flavors of Spain to our clients, one unforgettable experience at a time.
          </p>
          <p>Join our waitlist and follow Soto &amp; Segovia Imports on social media as we begin our journey.</p>
        </div>
        <button
          onClick={() => setWaitlistOpen(true)}
          className="inline-block px-10 py-4 font-bold text-[12px] tracking-wider text-white hover:bg-[#b8911f] transition-all"
          style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
        >
          Join The Waitlist
        </button>
      </section>
    </div>
  );
}
