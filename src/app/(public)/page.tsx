import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star, CheckCircle } from "lucide-react";
import { categories, products, recipes, distributorStats } from "@/lib/data";
import {
  categoryImages,
  storyImage,
  recipeImages,
  distributorImages,
} from "@/lib/images";

// ── Section: Hero ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1800&q=85"
          alt="Spanish olive oils and gourmet foods"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        {/* Dark overlay — heavier on the left so text reads cleanly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.30) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
        />
      </div>

      {/* Decorative side lines */}
      <div
        className="absolute left-6 top-1/4 w-px h-48 hidden xl:block"
        style={{ background: "linear-gradient(180deg, transparent, #D4AF37, transparent)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              Imported from Spain
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] mb-5"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5F0E8" }}
          >
            Spain&apos;s Finest
            <br />
            <span className="gold-text">Gourmet Foods</span>
          </h1>

          <p
            className="text-[11px] tracking-[0.18em] uppercase mb-3 font-medium"
            style={{ color: "#C9A227" }}
          >
            Artisan Olive Oils · Vinegars · Salts &amp; Specialty Foods
          </p>
          <p
            className="text-[10px] tracking-[0.12em] uppercase mb-2"
            style={{ color: "#888" }}
          >
            Imported from Spain with Passion and Heritage.
          </p>

          <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "#999" }}>
            Every bottle tells the story of generations of Spanish artisans dedicated to
            uncompromising quality.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:opacity-90 hover:gap-4"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                color: "#000",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              Shop Collection
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/distributors"
              className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-bold border transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "#ddd",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              Become a Distributor
            </Link>
          </div>

          {/* Tagline */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px w-8" style={{ background: "#333" }} />
            <p
              className="text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
            >
              Rooted in Heritage · Crafted in Spain · Shared with the World
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section: Featured Collection ───────────────────────────────────────────────
function FeaturedCollection() {
  return (
    <section className="py-20" style={{ background: "#0A0A08" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div
            className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, transparent, #C9A227)" }}
          />
          <div className="flex items-center gap-3">
            <span style={{ color: "#C9A227" }}>❧</span>
            <h2
              className="text-[11px] tracking-[0.35em] uppercase"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              Our Featured Collection
            </h2>
            <span style={{ color: "#C9A227" }}>❧</span>
          </div>
          <div
            className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, #C9A227, transparent)" }}
          />
        </div>

        {/* Category grid — 8 columns on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center border transition-all duration-300 hover:border-[#C9A227]/70 overflow-hidden"
              style={{ background: "#0F0F0C", borderColor: "#1E1E18" }}
            >
              {/* Image */}
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={categoryImages[cat.slug]}
                  alt={cat.label}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                  className="transition-transform duration-500 group-hover:scale-108"
                />
                {/* Dark tint */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                />
              </div>

              <div className="py-3 px-2 text-center">
                <p
                  className="text-[8px] tracking-[0.12em] uppercase font-semibold leading-tight mb-1"
                  style={{ color: "#ccc", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {cat.label}
                </p>
                <p
                  className="text-[8px] tracking-[0.12em] uppercase transition-colors group-hover:text-[#D4AF37]"
                  style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-10 py-3 text-[9px] tracking-[0.25em] uppercase font-semibold border transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{
              borderColor: "#3A3A2A",
              color: "#888",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            Shop All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section: Our Story ─────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="overflow-hidden" style={{ background: "#F5F0E8" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image — full bleed in its column */}
          <div className="relative min-h-[520px] lg:min-h-[600px]">
            <Image
              src={storyImage}
              alt="Jorge Soto and Roberto Segovia — founders of Soto & Segovia Imports"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient fade into cream on right edge */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: "linear-gradient(90deg, transparent 60%, #F5F0E8 100%)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-8 left-8 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-3"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227)",
                border: "4px solid #F5F0E8",
              }}
            >
              <p
                className="text-[7px] tracking-[0.08em] uppercase leading-snug font-bold"
                style={{ color: "#000", fontFamily: "var(--font-cinzel), serif" }}
              >
                Heritage
                <br />
                Friendship
                <br />
                Passion
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-10 lg:px-16 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ color: "#C9A227" }}>❧</span>
              <span
                className="text-[9px] tracking-[0.3em] uppercase"
                style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
              >
                Our Story
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold leading-tight mb-8"
              style={{ color: "#1A1408", fontFamily: "var(--font-cormorant), serif" }}
            >
              A Friendship. A Heritage.
              <br />A Passion for Spain&apos;s Finest.
            </h2>

            <div
              className="flex flex-col gap-4 text-[15px] leading-relaxed"
              style={{ color: "#5A4E3A" }}
            >
              <p>
                Jorge Soto and Roberto Segovia Perez met in Marseille, France while Jorge was on his
                honeymoon with his wife. What began as a chance meeting quickly became a lifelong
                friendship built on a shared love for food, culture, and connection.
              </p>
              <p>
                Years later, while Roberto was visiting Miami, they dreamed of bringing the authentic
                flavors of Spain to the world. Inspired by Jorge&apos;s Spanish heritage and generations of
                family tradition, Soto &amp; Segovia Imports was born.
              </p>
              <p>
                Today, we continue that legacy — curating the finest artisan products from Spain and
                sharing them with those who value quality, authenticity, and excellence.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors hover:text-[#A67C00]"
              style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
            >
              Learn More About Our Journey
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section: Distributor Partners ──────────────────────────────────────────────
function DistributorSection() {
  const channels = [
    {
      img: distributorImages.grocer,
      label: "Luxury\nGrocers",
    },
    {
      img: distributorImages.hotel,
      label: "Luxury\nHotels",
    },
    {
      img: distributorImages.restaurant,
      label: "Fine Dining\nRestaurants",
    },
  ];

  const perks = [
    "Wholesale Pricing & Volume Discounts",
    "Curated Assortments & Private Label",
    "Dedicated Account Manager & Support",
    "Easy Reordering & Account Management",
  ];

  return (
    <section className="py-20" style={{ background: "#0D0D0A" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-3"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              For Our Distributor Partners
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Elevate Your Offering.
            </h2>
            <p className="text-lg font-semibold mb-4" style={{ color: "#C9A227" }}>
              Partner with a Brand Your Customers Will Love.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#666" }}>
              We proudly supply luxury grocery stores, five-star hotels, and award-winning
              restaurants with premium products, exceptional service, and dedicated support.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <CheckCircle size={14} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  <p className="text-sm" style={{ color: "#999" }}>{perk}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 items-center">
              <Link
                href="/distributors"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-[10px] tracking-[0.2em] uppercase font-bold transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
                  color: "#000",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                Become a Distributor
              </Link>
              <Link
                href="/portal/login"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors hover:text-[#FFE566]"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                Already a partner? Login Portal
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right: channel photo cards */}
          <div className="grid grid-cols-3 gap-3">
            {channels.map(({ img, label }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-sm"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={img}
                  alt={label.replace("\n", " ")}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 33vw, 16vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)",
                  }}
                />
                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.2)", border: "1px solid #D4AF37" }}
                  >
                    <Star size={14} fill="#D4AF37" strokeWidth={0} />
                  </div>
                  <p
                    className="text-[9px] tracking-[0.12em] uppercase text-center leading-snug font-semibold"
                    style={{
                      color: "#F5F0E8",
                      fontFamily: "var(--font-cinzel), serif",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t"
          style={{ borderColor: "#2A2A1A" }}
        >
          {distributorStats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center py-10 border-b md:border-b-0 md:border-r last:border-r-0"
              style={{ borderColor: "#2A2A1A" }}
            >
              <span
                className="text-4xl font-bold gold-text mb-2"
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
        </div>
      </div>
    </section>
  );
}

// ── Section: Recipes ───────────────────────────────────────────────────────────
function RecipesSection() {
  return (
    <section className="py-20" style={{ background: "#080806" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-2"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              Culinary Inspiration
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Bring Spain to Your Table
            </h2>
          </div>
          <Link
            href="/recipes"
            className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors hover:text-[#FFE566]"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            View All Recipes
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* 5-column recipe cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.slug}`}
              className="group relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Photo */}
              <Image
                src={recipeImages[recipe.id]}
                alt={recipe.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              {/* Gold shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(212,175,55,0.12) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-[8px] tracking-[0.2em] uppercase mb-1.5"
                  style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {recipe.category}
                </p>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
                >
                  {recipe.title}
                </p>
                <p
                  className="text-[9px] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider"
                  style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {recipe.product}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Newsletter ────────────────────────────────────────────────────────
function Newsletter() {
  return (
    <section
      className="py-14"
      style={{ background: "#0D0D0A", borderTop: "1px solid #1E1E14" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-2"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              Stay Inspired
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Sign up for Recipes, New Arrivals &amp; Exclusive Offers
            </h3>
          </div>

          <form className="flex gap-0 w-full max-w-[420px] flex-shrink-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder:text-[#444]"
              style={{ borderColor: "#2A2A1A", color: "#ccc", borderRight: "none" }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase font-bold whitespace-nowrap transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)",
                color: "#000",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Trust badges */}
        <div
          className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-8 border-t"
          style={{ borderColor: "#1A1A12" }}
        >
          {[
            "🚢 Imported from Spain",
            "✨ Artisan Quality",
            "🌿 Small Batch",
            "🍃 Authentic & Natural",
            "⭐ Exceptional Service",
          ].map((badge) => (
            <span
              key={badge}
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <OurStory />
      <DistributorSection />
      <RecipesSection />
      <Newsletter />
    </>
  );
}
