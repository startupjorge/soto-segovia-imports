"use client";

import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const giftTypes = [
  { title: "Individual Gourmet Gifts", body: "Premium Spanish products elegantly packaged and ready to give." },
  { title: "Curated Gourmet Gift Collections", body: "Multiple complementary products brought together in a beautifully presented collection." },
  { title: "Custom Corporate Gifts", body: "Bespoke arrangements created around your company, recipient, event, campaign, or occasion." },
  { title: "Executive & VIP Gifting", body: "Elevated gifting experiences for executives, important clients, strategic partners, investors, and other distinguished recipients." },
];

const audiences = [
  { title: "Sales Teams", body: "Strengthen relationships with key prospects, celebrate new customers, recognize important accounts, and stay memorable throughout the sales journey." },
  { title: "Marketing Teams", body: "Create premium experiences for account-based marketing campaigns, customer programs, events, conferences, product launches, and VIP experiences." },
  { title: "Executives", body: "Recognize clients, partners, investors, board members, fellow executives, and other important relationships with a gift worthy of the occasion." },
  { title: "Client & Employee Appreciation", body: "Celebrate milestones, holidays, achievements, and the people who contribute to your company's success." },
];

const industries = [
  "Multinational corporations", "Technology and software companies", "Financial services firms",
  "Private equity and venture capital firms", "Luxury brands", "Hotels and hospitality companies",
  "Real estate and development firms", "Law firms", "Consulting and professional services firms",
  "Healthcare organizations", "Marketing and advertising agencies", "Family offices",
  "Event and conference organizations",
];

export default function CorporateGiftingPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Hero */}
      <div className="border-b border-gray-100 py-14 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For Business</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Luxury Corporate Gifting,<br />Elevated by Spanish Tradition
          </h1>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#666" }}>
            Build stronger relationships with exceptional gourmet gifts from Spain.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
            Whether you're a sales or marketing leader looking to engage important accounts, an executive recognizing a valued client or partner, or a company celebrating the people who matter most to your business, thoughtful corporate gifting creates connections that last.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-[800px] mx-auto px-6 py-14 text-center">
        <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
          At Soto &amp; Segovia Imports, we bring the flavors and traditions of Spain to corporate gifting through a curated collection of premium gourmet foods chosen for their quality, craftsmanship, authenticity, and elegance.
        </p>
      </section>

      {/* A Taste of Spain */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Collections</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>A Taste of Spain, Beautifully Presented</h2>
          <p className="text-sm text-center mb-10 max-w-[600px] mx-auto" style={{ color: "#777" }}>
            From premium extra virgin olive oils and infused oils to artisan salts, vinegars, and other Spanish specialties, our collections transform exceptional gourmet foods into memorable gifts.
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

      {/* Audiences */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Who It's For</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Designed for Sales, Marketing &amp; Executive Relationships</h2>
          <p className="text-sm text-center mb-10 max-w-[600px] mx-auto" style={{ color: "#777" }}>
            The best corporate gifts do more than say thank you. They create moments people remember.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((item) => (
              <div key={item.title} className="p-7 border border-gray-100">
                <h3 className="font-bold text-[14px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Industries We Serve</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Corporate Gifting for Companies Across Industries</h2>
          <p className="text-sm text-center mb-10 max-w-[600px] mx-auto" style={{ color: "#777" }}>
            Our luxury Spanish gourmet gifting experiences are ideal for organizations of virtually any size or industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-100">
                <div className="w-1.5 h-1.5 flex-shrink-0 rounded-full" style={{ background: "#C9A227" }} />
                <p className="text-[12px]" style={{ color: "#555" }}>{industry}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-8" style={{ color: "#777" }}>
            Whether you're sending a single executive gift or developing a gifting program for hundreds of clients, our team can work with you to create an experience appropriate for your brand and recipients.
          </p>
        </div>
      </section>

      {/* More than a gift */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Experience</p>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>More Than a Gift. An Experience From Spain.</h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>A memorable corporate gift should feel thoughtful, distinctive, and personal.</p>
            <p>Our products are sourced from Spain with an emphasis on exceptional ingredients, authentic producers, beautiful presentation, and the culinary traditions that make Spanish gourmet foods celebrated around the world.</p>
            <p>From an elegantly presented bottle of Spanish extra virgin olive oil to a bespoke collection of gourmet specialties, Soto &amp; Segovia Imports helps you turn a business gesture into a memorable experience.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#1A1A1A" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Be Among the First</p>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>Give Something Exceptional.</h2>
          <p className="text-base font-semibold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Give the taste and tradition of Spain.</p>
          <p className="text-sm mb-8" style={{ color: "#aaa" }}>
            Soto &amp; Segovia Imports is preparing to introduce our corporate gifting collections and custom gifting programs. Join the waitlist for early access, or contact us to discuss creating a custom gifting experience for your company.
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
