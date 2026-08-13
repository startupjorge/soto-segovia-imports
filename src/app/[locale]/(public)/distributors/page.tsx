import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { distributorStats } from "@/lib/data";

export const metadata = { title: "Distributor Partners | Soto & Segovia Imports" };

const benefits = [
  "Competitive wholesale pricing with tiered volume discounts",
  "Exclusive access to new arrivals and limited editions before public release",
  "Dedicated account manager available Mon–Fri, 9am–6pm EST",
  "Co-branded marketing materials and point-of-sale displays",
  "Private label program available for qualifying accounts",
  "Streamlined digital portal for ordering, invoicing & reporting",
  "30-day net terms available for established accounts",
  "Free shipping on orders over $500",
];

const channels = [
  {
    emoji: "🛒",
    title: "Luxury Grocery Stores",
    body: "We supply premium independent grocers and specialty food retailers who demand the finest quality to satisfy their discerning clientele.",
  },
  {
    emoji: "🏨",
    title: "Five-Star Hotels",
    body: "Our products are found in hotel restaurants, in-room dining, and welcome amenity programs at leading luxury properties.",
  },
  {
    emoji: "🍽️",
    title: "Fine Dining Restaurants",
    body: "Award-winning chefs across the country rely on our imports to craft menus that celebrate authentic Spanish flavors.",
  },
  {
    emoji: "🍷",
    title: "Wine Bars & Tapas",
    body: "Our vinegars, oils, and specialty products pair perfectly with curated wine lists and Spanish tapas concepts.",
  },
  {
    emoji: "🎁",
    title: "Corporate Gifting",
    body: "Premium gift boxes and baskets for corporate clients who want to make a lasting impression with luxury Spanish goods.",
  },
  {
    emoji: "🛳️",
    title: "Cruise Lines",
    body: "We partner with select luxury cruise lines to bring the tastes of Spain to guests sailing the world's most beautiful waters.",
  },
];

const process = [
  { step: "01", title: "Apply Online", body: "Submit your distributor application in minutes. Tell us about your business and what you're looking for." },
  { step: "02", title: "Discovery Call", body: "A dedicated account manager will schedule a call to understand your needs and introduce our product range." },
  { step: "03", title: "Sample Box", body: "We ship a complimentary sample box so your team can taste and evaluate our products firsthand." },
  { step: "04", title: "Custom Proposal", body: "We create a tailored product assortment and pricing proposal matched to your volume and category needs." },
  { step: "05", title: "First Order", body: "Place your first order through our digital portal and your products ship within 5–7 business days." },
  { step: "06", title: "Grow Together", body: "Ongoing support, regular check-ins, and first access to new products as we continue growing together." },
];

export default function DistributorsPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: "#0A0A08" }}>
      {/* Hero */}
      <section
        className="py-24 text-center border-b"
        style={{
          background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)",
          borderColor: "#1E1E14",
        }}
      >
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-4"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          Partnership Program
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight px-6"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Partner with a Brand Your Customers Will Love
        </h1>
        <p className="max-w-xl mx-auto text-base px-6 mb-8" style={{ color: "#666" }}>
          Join 500+ distributors, grocers, hotels, and restaurateurs who trust Soto &amp;
          Segovia to deliver Spain&apos;s finest to their clients.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact?type=wholesale"
            className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
              color: "#000",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            Become a Distributor <ArrowRight size={12} />
          </Link>
          <Link
            href="/portal/login"
            className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{ borderColor: "#333", color: "#999", fontFamily: "var(--font-cinzel), serif" }}
          >
            Partner Login
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section
        className="grid grid-cols-2 md:grid-cols-4 border-b"
        style={{ background: "#0D0D0A", borderColor: "#1E1E14" }}
      >
        {distributorStats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center py-12 border-r last:border-r-0"
            style={{ borderColor: "#1E1E14" }}
          >
            <span
              className="text-5xl font-bold gold-text mb-2"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {value}
            </span>
            <span
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
            >
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* Who we serve */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-3"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            Our Channels
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
          >
            Who We Serve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map(({ emoji, title, body }) => (
            <div
              key={title}
              className="p-8 border"
              style={{ background: "#0F0F0C", borderColor: "#2A2A1A" }}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-t" style={{ background: "#0D0D0A", borderColor: "#1E1E14" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-[9px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                Partner Benefits
              </p>
              <h2
                className="text-4xl font-bold mb-8"
                style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
              >
                Everything You Need to Succeed
              </h2>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <p
                className="text-[9px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                How It Works
              </p>
              <h2
                className="text-4xl font-bold mb-8"
                style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
              >
                Getting Started Is Simple
              </h2>
              <div className="flex flex-col gap-5">
                {process.map(({ step, title, body }) => (
                  <div key={step} className="flex gap-5">
                    <div
                      className="text-2xl font-bold flex-shrink-0 w-10 text-right"
                      style={{ color: "#2A2A1A", fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {step}
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold mb-1"
                        style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center border-t"
        style={{ borderColor: "#1E1E14", background: "#080806" }}
      >
        <h3
          className="text-3xl font-bold mb-4"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Ready to Elevate Your Offering?
        </h3>
        <p className="mb-8 text-sm max-w-md mx-auto" style={{ color: "#666" }}>
          Apply today and a member of our partnerships team will be in touch within one business day.
        </p>
        <Link
          href="/contact?type=wholesale"
          className="inline-flex items-center gap-3 px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
            color: "#000",
            fontFamily: "var(--font-cinzel), serif",
          }}
        >
          Apply Now <ArrowRight size={12} />
        </Link>
      </section>
    </div>
  );
}
