import Link from "next/link";

export const metadata = {
  title: "Luxury Hospitality Gifting | Soto & Segovia Imports",
  description: "Premium Spanish gourmet gift programs for luxury hotels, resorts, and hospitality groups. Artisan olive oils, salts, vinegars, and orange wine from Altea, Spain.",
};

const programs = [
  {
    title: "VIP Welcome Amenity Programs",
    body: "Replace the standard fruit basket or generic minibar with a curated selection of premium Spanish gourmet foods. A beautifully presented collection of Príncipe Azahar olive oils, artisan salts, and orange wine creates a first impression that guests photograph, share, and return for.",
    icon: "🏨",
  },
  {
    title: "Restaurant & Bar Integration",
    body: "Feature Príncipe Azahar products on your menu with full provenance storytelling. Our truffle olive oils, aged vinegars, and reserve orange wine become menu items that guests ask about by name — and seek out long after checkout.",
    icon: "🍷",
  },
  {
    title: "Corporate Event & Buyout Gifts",
    body: "When your property hosts a corporate conference, incentive trip, or full-property buyout, premium take-home gift sets elevate the event experience and extend your brand long after guests depart.",
    icon: "🤝",
  },
  {
    title: "Loyalty & Membership Rewards",
    body: "Build a quarterly gifting calendar for your top-tier loyalty members. A rotating selection of artisan Spanish foods creates ongoing discovery, keeps your brand front of mind, and drives repeat stays.",
    icon: "⭐",
  },
  {
    title: "Spa & Wellness Gift Programs",
    body: "Premium gourmet foods pair naturally with spa experiences. Our artisan salts and estate olive oils integrate beautifully into treatment packages, wellness retreats, and departure gift sets.",
    icon: "🌿",
  },
  {
    title: "Wholesale & Distributor Programs",
    body: "For hospitality groups that want to incorporate Príncipe Azahar products into multiple properties or retail outlets, we offer wholesale distribution partnerships with custom terms and fulfillment support.",
    icon: "📦",
  },
];

const properties = [
  { type: "Luxury Hotels", body: "Boutique and full-service luxury hotels looking to differentiate their amenity programs and create genuinely memorable guest experiences." },
  { type: "Resorts & Destination Properties", body: "Destination resorts, wellness retreats, and beach properties where the guest experience extends far beyond the room — and every touchpoint is an opportunity for discovery." },
  { type: "Private Members Clubs", body: "Private clubs where the standard of food, service, and gifting directly reflects the membership experience and the caliber of the community." },
  { type: "Michelin-Starred Restaurants", body: "Fine dining establishments seeking premium artisan ingredients with full provenance documentation — and the story to tell behind every bottle and box." },
  { type: "Corporate Event Venues", body: "Event venues hosting C-suite conferences, product launches, investor summits, and incentive programs where every attendee touch-point matters." },
];

export default function LuxuryHospitalityGifting() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · Hospitality
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[750px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Elevate Every Guest Experience<br />With the Flavors of Spain
        </h1>
        <p className="text-[16px] max-w-[560px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Premium artisan Spanish gourmet programs for luxury hotels, resorts, and hospitality groups that define the extraordinary guest experience.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Speak to Our Team
          </Link>
          <Link
            href="/distributors"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}
          >
            Distributor Info
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[780px] mx-auto px-6 py-20 text-center">
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>
          In luxury hospitality, every detail of the guest experience is a statement about your brand. The welcome amenity, the restaurant menu, the departure gift — each of these moments is an opportunity to create genuine discovery and lasting memory. Soto & Segovia Imports partners with leading hospitality groups to integrate premium Príncipe Azahar artisan Spanish foods into every guest touchpoint — creating experiences that guests photograph, share, and return for.
        </p>
      </section>

      {/* Programs */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Programs</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Hospitality Gifting Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{program.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{program.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The products */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Príncipe Azahar</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Artisan Products From Altea, Spain
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-[620px] mx-auto" style={{ color: "#666" }}>
          Príncipe Azahar products come from the historic Mediterranean village of Altea — a place guests can discover and visit. That provenance story is one of the most powerful tools in your guest experience arsenal. When your concierge or F&B team can tell the story of where a product comes from, a gift becomes a journey.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["Garlic Olive Oil", "Truffle Olive Oil", "Lemon Olive Oil", "White Salt", "Rose Salt", "Black Salt", "Orange Vinegar", "Pomegranate Vinegar", "Orange Wine"].map((p) => (
            <span key={p} className="px-5 py-2 text-[12px] tracking-wider border" style={{ borderColor: "#C9A227", color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
              {p}
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
      </section>

      {/* Who we work with */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Who We Work With</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Property Types We Serve
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {properties.map((prop, i) => (
              <div key={prop.type} className="flex gap-8 items-start py-8" style={{ borderBottom: i < properties.length - 1 ? "1px solid #e8e8e8" : "none" }}>
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full" style={{ background: "#C9A227" }} />
                <div>
                  <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{prop.type}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{prop.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-20">
        <div className="max-w-[700px] mx-auto text-center">
          <blockquote className="text-[20px] leading-relaxed font-light italic mb-6" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-cormorant), serif" }}>
            &ldquo;Our VIP guests consistently mention the Spanish gourmet amenity as a highlight of their stay. It tells a story that a standard amenity simply cannot. Guests ask where they can buy more before they even check out.&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            — Director of Guest Experience · Luxury Resort Group
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Partner With Us</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[550px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Create Guest Experiences That Last Beyond Checkout
        </h2>
        <p className="text-[15px] mb-10 max-w-[480px] mx-auto" style={{ color: "#666" }}>
          Tell us about your property and your guest experience goals. We&rsquo;ll design a custom program within 48 hours.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Contact Our Team
          </Link>
          <Link
            href="/distributors"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Distributor Information
          </Link>
        </div>
      </section>

    </div>
  );
}
