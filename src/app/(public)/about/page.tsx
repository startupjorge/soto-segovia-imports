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

      {/* Hero Timeline */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
        {/* 4-panel photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 h-[90vh]">
          {[
            { src: "/city-marseille.jpg", city: "Marseille", country: "France", note: "Where it began" },
            { src: "/city-altea.jpg",     city: "Altea",     country: "Spain",  note: "Production" },
            { src: "/city-madrid.jpg",    city: "Madrid",    country: "Spain",  note: "Regional Office" },
            { src: "/city-miami.jpg",     city: "Miami",     country: "USA",    note: "Headquarters" },
          ].map((item, i) => (
            <div key={item.city} className="relative overflow-hidden group">
              <Image
                src={item.src}
                alt={item.city}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="25vw"
                priority={i === 0}
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)" }} />

              {/* connector arrow — hidden on last panel */}
              {i < 3 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}

              {/* City label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{item.note}</p>
                <h3 className="text-xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-cinzel), serif" }}>{item.city}</h3>
                <p className="text-[11px] tracking-widest uppercase text-white/60 mt-0.5" style={{ fontFamily: "var(--font-cinzel), serif" }}>{item.country}</p>
              </div>

              {/* step number */}
              <div className="absolute top-5 left-5 z-10 w-7 h-7 flex items-center justify-center border border-[#C9A227] text-[#C9A227] text-[11px] font-bold" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Centered headline overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center px-6">
            <p className="text-[11px] tracking-[0.4em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Story</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg" style={{ fontFamily: "var(--font-cinzel), serif", textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              A Shared Heritage.<br />A Passion for<br />Exceptional Spanish Food.
            </h1>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
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

          {/* Maite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                <Image src="/maite-aranaz.jpg" alt="Maite Aranaz Soto" width={224} height={224} style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Maite Aranaz Soto</h3>
              <p className="text-[11px] tracking-wider mb-5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Operations Manager</p>
              <div className="flex flex-col gap-4 text-[14px] leading-relaxed" style={{ color: "#555" }}>
                <p>Maite Aranaz Soto brings precision, care, and a personal connection to every aspect of Soto &amp; Segovia Imports' operations. Her commitment to excellence ensures that every order, every relationship, and every detail reflects the quality our clients expect.</p>
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
          className="inline-block px-10 py-4 font-bold text-[12px] tracking-wider text-white hover:bg-[#b8911f] transition-all mb-10"
          style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
        >
          Join The Waitlist
        </button>

        <div className="flex items-center justify-center gap-4">
          <a href="https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
