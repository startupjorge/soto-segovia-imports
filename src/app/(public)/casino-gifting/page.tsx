import Link from "next/link";

export const metadata = {
  title: "VIP Guest Gifts for Casinos | Soto & Segovia Imports",
  description: "Premium Spanish gourmet gift programs for casino VIP guests, high rollers, and loyalty members. Artisan olive oils, salts, vinegars, and orange wine from Altea, Spain.",
};

const programs = [
  {
    title: "High Roller Welcome Gifts",
    body: "When a whale checks in, the welcome gift sets the tone for the entire stay. A curated Príncipe Azahar gift box, featuring cold-pressed olive oils, artisan salts, and reserve orange wine, signals a level of discernment that a standard amenity simply cannot match. These are guests who have seen everything. Give them something worth remembering.",
    icon: "♠",
  },
  {
    title: "VIP Lounge & Suite Amenities",
    body: "Furnish your high-limit lounges, penthouse suites, and private gaming rooms with Príncipe Azahar products. Artisan salt samplers, single-ingredient infused oils, and pomegranate vinegars become conversation pieces that distinguish your property from every other casino floor in the country.",
    icon: "🥂",
  },
  {
    title: "Players Club Tier Rewards",
    body: "Elevate your loyalty program with gourmet gifting milestones that feel genuinely exclusive. A tiered gift structure, starter sampler sets for Silver members, curated boxes for Gold, and bespoke collections for Platinum, gives players a reason to chase status and a reason to remember your brand at home.",
    icon: "⭐",
  },
  {
    title: "Special Event & Tournament Gifts",
    body: "Poker tournaments, boxing events, championship weekends, these are moments when a property's reputation is made or reinforced. Branded gift boxes of Spanish artisan foods give every attendee something they will open at home and talk about. No one throws away a bottle of truffle olive oil.",
    icon: "🏆",
  },
  {
    title: "Private Gaming Room Hosting",
    body: "When your host team brings a guest back to a private room, the details of that room speak for the property. Premium Spanish gourmet provisions on the table communicate the same fluency in quality that your guests demonstrate at every other point in their lives. It is not a snack. It is a statement.",
    icon: "🎴",
  },
  {
    title: "VIP Concierge & Departure Packages",
    body: "A curated departure box extends the casino relationship into the guest's home. When they open that bottle of garlic olive oil on a Tuesday night in their kitchen, they are thinking about your property. Branded packaging options available for properties that want to carry the visual identity through to the final touch.",
    icon: "🎁",
  },
];

const guestTypes = [
  {
    type: "High-Limit Players",
    body: "Guests who wager at the highest levels expect an experience calibrated to match their lifestyle. A generic gift undermines the relationship. Premium Spanish artisan foods, carefully selected and beautifully presented, communicate that your property operates at their level.",
  },
  {
    type: "Invited VIP Guests",
    body: "When your host team flies in a valued guest, every detail of the visit is part of the case for loyalty. The welcome gift is among the first impressions. Make it one that reflects the invitation's intent.",
  },
  {
    type: "Tournament & Event Participants",
    body: "Poker room regulars, invitational competitors, and championship event guests carry impressions of your property back to their networks. A distinctive gourmet take-home gift travels with them and keeps the conversation going long after the event ends.",
  },
  {
    type: "Loyalty Tier Members",
    body: "Your top-tier rewards members have chosen your property over competitors, often for years. A quarterly gifting touchpoint, outside of comp dollars and room nights, reminds them that the relationship goes both ways.",
  },
  {
    type: "Corporate & Group Buyers",
    body: "Meeting planners, incentive travel companies, and corporate groups book casino properties for significant events. Premium gourmet gifts in delegate bags or as closing ceremony gifts reflect well on both the host company and the property.",
  },
];

export default function CasinoGiftingPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · Casino VIP Programs
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[780px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          VIP Guest Gifts That Match<br />the Caliber of Your Players
        </h1>
        <p className="text-[16px] max-w-[580px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Premium Spanish gourmet gift programs for high rollers, loyalty members, and tournament guests. When a standard amenity is not an option, Príncipe Azahar is.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Design a VIP Program
          </Link>
          <Link
            href="/products"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>
          Casino VIP guests are among the most discerning gift recipients in the world. They travel internationally, stay at the finest properties, and receive gifts constantly. Generic is invisible to them. Soto & Segovia Imports partners with casino properties to build gifting programs around Príncipe Azahar artisan Spanish foods: cold-pressed olive oils, single-ingredient infused oils, gourmet salts, aged vinegars, and reserve orange wine from Altea, Spain. Products with a genuine story, a distinct origin, and a level of quality that high-value guests recognize immediately.
        </p>
      </section>

      {/* Programs */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Programs</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Casino VIP Gifting Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <div className="text-3xl mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227" }}>{program.icon}</div>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{program.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{program.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Príncipe Azahar</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Products Worth Giving
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-[620px] mx-auto" style={{ color: "#666" }}>
          Every Príncipe Azahar product is made at Bodegas Sendra González in Altea, Alicante, Spain. No artificial additives. No concentrates. Each flavored oil macerates in its own dedicated vat with a single ingredient. The story behind the bottle is part of the gift.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["Garlic Olive Oil", "Truffle Olive Oil", "Lemon Olive Oil", "Rosemary Olive Oil", "White Salt", "Rose Salt", "Black Salt", "Orange Vinegar", "Pomegranate Vinegar", "Reserve Orange Wine"].map((p) => (
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
              Guest Types We Serve
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {guestTypes.map((guest, i) => (
              <div key={guest.type} className="flex gap-8 items-start py-8" style={{ borderBottom: i < guestTypes.length - 1 ? "1px solid #e8e8e8" : "none" }}>
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full" style={{ background: "#C9A227" }} />
                <div>
                  <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{guest.type}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{guest.body}</p>
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
            &ldquo;Our high-limit players have received gifts at properties around the world. When we introduced the Spanish artisan collection, the reaction was different. Guests were asking about the products by name and ordering them online before they checked out.&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            VIP Services Director · Integrated Resort Property
          </p>
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Why It Works</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            The Case for Gourmet Over Generic
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { heading: "It Travels Home", body: "A branded tote bag stays at the hotel. A bottle of truffle olive oil goes into a guest's kitchen and stays there for weeks. Every time they use it, they think about your property." },
            { heading: "It Has a Story", body: "Príncipe Azahar comes from a specific place: Altea, Alicante. Bodegas Sendra González has been featured on TVE and is 100% natural, zero artificial additives. High-value guests appreciate provenance. It is how they evaluate everything else in their lives." },
            { heading: "It Is Genuinely Exclusive", body: "Príncipe Azahar is not available in US retail stores. When guests try to buy more, they come back through your property or your referral. That exclusivity is a retention tool, not just a gift." },
          ].map((item) => (
            <div key={item.heading} className="text-center">
              <h3 className="font-bold text-[15px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.heading}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F8F8F4" }} className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get Started</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[560px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Build a VIP Gift Program for Your Property
        </h2>
        <p className="text-[15px] mb-10 max-w-[480px] mx-auto" style={{ color: "#666" }}>
          Tell us about your players, your events, and your gifting goals. We will design a custom program and have a proposal to you within 48 hours.
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
