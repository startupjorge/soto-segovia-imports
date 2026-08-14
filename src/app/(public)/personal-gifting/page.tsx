"use client";

import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const giftTypes = [
  { title: "Individual Gourmet Gifts", body: "An exceptional Spanish product beautifully presented for someone special." },
  { title: "Curated Gourmet Collections", body: "Complementary Spanish delicacies brought together in an elegant gift experience." },
  { title: "Custom Gift Arrangements", body: "Personalized collections created around the recipient, occasion, or experience you want to create." },
  { title: "Luxury & VIP Gifts", body: "Exceptional selections for discerning recipients who appreciate quality, provenance, and craftsmanship." },
];

const occasions = [
  "Birthdays", "Anniversaries", "Weddings and engagements", "Housewarmings",
  "Holidays", "Host and hostess gifts", "Thank-you gifts", "Family celebrations",
  "Special milestones", "VIP gifting", "Or simply because someone deserves something extraordinary",
];

export default function PersonalGiftingPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Hero */}
      <div className="border-b border-gray-100 py-14 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For Loved Ones</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Luxury Personal Gifting,<br />Inspired by the Finest of Spain
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#666" }}>
            For the people who mean more, give something exceptional.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
            Some occasions call for more than an ordinary gift. At Soto &amp; Segovia Imports, our personal gifting collection brings together exceptional gourmet foods from Spain for those who appreciate craftsmanship, authenticity, beautiful presentation, and the finer things in life.
          </p>
        </div>
      </div>

      {/* A Gift That Says More */}
      <section className="max-w-[800px] mx-auto px-6 py-14 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Right Gift</p>
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>A Gift That Says More</h2>
        <p className="text-base italic mb-6 leading-relaxed" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
          I appreciate you. I thought about you. You deserve something exceptional.
        </p>
        <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
          <p>Our luxury gourmet gifts are ideal for family, friends, loved ones, hosts, colleagues, and anyone you want to recognize with something truly special.</p>
          <p>Whether celebrating an important milestone or simply showing someone how much they mean to you, Soto &amp; Segovia offers an elevated alternative to traditional gifting.</p>
          <p>These are gifts chosen to be experienced, enjoyed, shared, and remembered.</p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Collections</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Culinary Masterpieces From Spain</h2>
          <p className="text-sm text-center mb-10 max-w-[620px] mx-auto" style={{ color: "#777" }}>
            Our collections feature carefully selected Spanish gourmet specialties, including premium extra virgin olive oils, infused olive oils, artisan salts, vinegars, and other exceptional foods rooted in Spain's rich culinary traditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {giftTypes.map((item) => (
              <div key={item.title} className="bg-white p-7 border border-gray-100">
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[14px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Perfect For</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>For Life's Most Meaningful Moments</h2>
          <p className="text-sm text-center mb-10" style={{ color: "#777" }}>Birthdays, holidays, special occasions, luxury weddings, and more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {occasions.map((occasion) => (
              <div key={occasion} className="flex items-center gap-3 px-4 py-3 border border-gray-100" style={{ background: "#F8F8F4" }}>
                <div className="w-1.5 h-1.5 flex-shrink-0 rounded-full" style={{ background: "#C9A227" }} />
                <p className="text-[12px]" style={{ color: "#555" }}>{occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finer Things */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Experience</p>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>For Those Who Appreciate the Finer Things</h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>Luxury isn't simply about price. It's about quality, provenance, craftsmanship, and the experience something creates.</p>
            <p>Our products are selected for people who recognize those differences.</p>
            <p>From an extraordinary bottle of Spanish extra virgin olive oil to an elegant collection of gourmet specialties, each Soto &amp; Segovia gift is designed to communicate taste, thoughtfulness, and appreciation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#1A1A1A" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Give Them a Taste of Spain</p>
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-cinzel), serif" }}>For Those Who Mean the Most.</h2>
          <p className="text-base font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Give something extraordinary. Give Spain.</p>
          <p className="text-sm mb-8" style={{ color: "#aaa" }}>
            Soto &amp; Segovia Imports is preparing to introduce our personal gifting collections. Join our waitlist for early access, or contact us to learn more about our luxury Spanish gourmet gifts and custom gifting experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setWaitlistOpen(true)}
              className="px-10 py-3 font-bold text-[12px] tracking-wider text-white hover:opacity-90 transition-all"
              style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
            >
              Join The Waitlist
            </button>
            <Link
              href="/contact"
              className="px-10 py-3 font-bold text-[12px] tracking-wider border border-white text-white hover:bg-white hover:text-[#1A1A1A] transition-all"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
