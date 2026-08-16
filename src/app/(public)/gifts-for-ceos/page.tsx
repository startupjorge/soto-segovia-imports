import Link from "next/link";

export const metadata = {
  title: "Gifts for CEOs | Premium Spanish Gourmet Foods | Soto & Segovia Imports",
  description: "Curated premium Spanish gourmet gift sets for C-suite executives and CEOs. Artisan olive oils, aged vinegars, and orange wine from Altea, Spain. Delivered anywhere in the US.",
};

const whyPoints = [
  {
    title: "A Gift That Matches Their Level",
    body: "CEOs receive hundreds of gifts per year, most of which end up in a corner or regifted to an assistant. A carefully curated collection of premium Spanish gourmet foods from Altea, Spain is different. It communicates taste, discernment, and a level of consideration that tells the recipient: this was chosen for you specifically.",
  },
  {
    title: "No Logo Required",
    body: "The most powerful gifts don't have your company's name on them. They have your taste. A selection of Príncipe Azahar's finest, truffle-infused olive oil, reserve orange wine, aged vanilla vinegar, sends a message that your brand values quality, authenticity, and the extraordinary.",
  },
  {
    title: "Compliance-Friendly for Regulated Industries",
    body: "Premium gourmet food gifts are ideal for gifting in industries where entertainment and cash-equivalent gifts are restricted. High perceived value, genuinely memorable, and easy to keep within gift policy thresholds, at any dollar amount.",
  },
];

const giftIdeas = [
  {
    title: "The Signature Collection",
    body: "Our most popular CEO gift. Truffle Olive Oil, Pomegranate Vinegar, and Orange Wine presented in premium packaging. An immediate statement of quality and intention.",
    products: ["Truffle Olive Oil", "Pomegranate Vinegar", "Orange Wine"],
  },
  {
    title: "The Artisan Selection",
    body: "Five to seven products spanning our full range, oils, vinegars, salts, and wine. For the CEO who appreciates the depth of the Príncipe Azahar portfolio.",
    products: ["Garlic Olive Oil", "Vanilla Vinegar", "Black Salt", "Orange Wine", "Rose Salt"],
  },
  {
    title: "The Single Statement",
    body: "One exceptional product, gifted with intention. Our Truffle Olive Oil or Reserve Orange Wine delivered alone, with a handwritten note, makes a precise and memorable impact.",
    products: ["Truffle Olive Oil", "Orange Wine"],
  },
];

const occasions = [
  { title: "Closing a Major Deal", body: "When a significant contract is signed, a premium gift to the counterpart CEO acknowledges the relationship, and opens the door to what comes next." },
  { title: "Year-End Executive Appreciation", body: "Thank your most important CEOs and executive partners with something that arrives beautifully packaged and gets opened immediately. Not another wine bottle. Not another gift card." },
  { title: "Welcoming a New Board Member or Investor", body: "A premium gift within the first week of a new relationship signals that the partnership is valued at a personal level, not just a transactional one." },
  { title: "Celebrating a Company Milestone", body: "When a partner company goes public, closes a major round, or hits a growth milestone, a thoughtful gift says: we noticed, and we're proud to be associated with you." },
  { title: "Conference and Summit Networking", body: "Follow up a meaningful conversation with a curated gift that lands days later. It's a physical reminder of the connection, and a reason to respond." },
];

export default function GiftsForCEOs() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · Executive Gifting
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[750px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Gifts for CEOs That<br />Actually Get Remembered
        </h1>
        <p className="text-[16px] max-w-[550px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Premium artisan Spanish gourmet foods for the executives who have everything, except this.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Request a Custom Package
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
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>
          Gifting to a CEO is one of the most high-stakes moments in business relationship building. The wrong gift, a branded polo, a generic fruit basket, a restaurant gift card, signals that you didn&rsquo;t think about it. The right gift signals everything about who you are and how you operate. Soto & Segovia Imports sources premium artisan gourmet foods from Altea, Spain, the kind of gifts that get opened immediately, talked about genuinely, and remembered for years.
        </p>
      </section>

      {/* Why section */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Difference</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Why Spanish Gourmet Gifts Work for CEOs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPoints.map((item) => (
              <div key={item.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift ideas */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Gift Options</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Curated for the C-Suite
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {giftIdeas.map((gift) => (
            <div key={gift.title} className="border border-gray-100 p-8" style={{ background: "#FAFAFA" }}>
              <h3 className="font-bold text-[17px] mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{gift.title}</h3>
              <p className="text-[14px] leading-relaxed mb-5" style={{ color: "#666" }}>{gift.body}</p>
              <div className="flex flex-wrap gap-2">
                {gift.products.map((p) => (
                  <span key={p} className="px-4 py-1.5 text-[11px] tracking-wider border" style={{ borderColor: "#C9A227", color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>When to Send</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Perfect Occasions for CEO Gifts
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {occasions.map((occ, i) => (
              <div key={occ.title} className="flex gap-8 items-start py-8" style={{ borderBottom: i < occasions.length - 1 ? "1px solid #e8e8e8" : "none" }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: "#C9A227" }}>
                  <span className="text-[12px] font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{occ.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{occ.body}</p>
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
            &ldquo;The best gifts don&rsquo;t have your logo on them. They have your taste. A premium food gift to a CEO says more about your company than any branded merchandise ever could.&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
           , Jorge Soto, Co-Founder · Soto & Segovia Imports
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Get Started</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[500px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Gift the Extraordinary to Your Most Important CEOs
        </h2>
        <p className="text-[15px] mb-10 max-w-[450px] mx-auto" style={{ color: "#666" }}>
          Tell us who you&rsquo;re gifting to and we&rsquo;ll build a custom recommendation and quote within 24 hours.
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

    </div>
  );
}
