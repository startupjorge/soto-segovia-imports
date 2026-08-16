import Link from "next/link";

export const metadata = {
  title: "Gifts for Executives | Premium Spanish Gourmet Foods | Soto & Segovia Imports",
  description: "Premium Spanish gourmet gift sets for VPs, directors, and senior executives. Artisan olive oils, salts, and vinegars from Altea, Spain. Custom packages available.",
};

const roles = [
  { title: "VPs and Senior Vice Presidents", body: "The decision-makers below the C-suite who often determine whether your relationship grows or stalls. A premium gift at the right moment builds the kind of personal loyalty that no product feature or pricing strategy can replicate." },
  { title: "Directors and Department Heads", body: "The champions inside your client organizations who advocate for your products and services internally. They influence procurement decisions, renewals, and expansions. They deserve to feel valued as individuals, not just as job titles." },
  { title: "Managing Directors and Partners", body: "At professional services firms, private equity funds, and consulting practices, Managing Directors and Partners are the relationships that matter most. A premium curated gift signals that you understand their world." },
  { title: "General Managers and Regional Leaders", body: "The operators who run P&Ls and make real purchasing decisions across distributed organizations. Building personal relationships with GMs is often the fastest path to expanding a corporate account." },
];

const occasions = [
  { title: "Onboarding a New Executive Champion", body: "When a new VP or Director joins an existing client account, a premium welcome gift introduces your company in the most favorable possible light, before your competitor does." },
  { title: "Quarterly Business Reviews", body: "Don&rsquo;t just show up with a slide deck. A small, thoughtful gift ahead of a QBR or EBR tells your executive contacts that the relationship matters beyond the numbers." },
  { title: "Year-End Executive Gifts", body: "The holiday season is the most competitive moment in corporate gifting. Stand out with premium Spanish gourmet foods that arrive beautifully packaged and feel genuinely special, not generic." },
  { title: "Promotion Celebrations", body: "When a key contact gets promoted, a congratulatory gift is a powerful relationship touchpoint. It says: we pay attention, we celebrate with you, and we&rsquo;re here for what comes next." },
  { title: "Speaking Engagement Thank-Yous", body: "When an executive speaks at your event or contributes to a panel or podcast, a premium gift is the ideal thank-you. It&rsquo;s personal, it&rsquo;s memorable, and it creates a conversation hook." },
];

export default function GiftsForExecutives() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · Executive Gifting
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[750px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Gifts for Executives That<br />Strengthen Every Relationship
        </h1>
        <p className="text-[16px] max-w-[550px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Premium Spanish gourmet foods for the VPs, directors, and leaders who drive your most important accounts.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Build a Custom Program
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
          Executive gifting is not about the gift. It&rsquo;s about the relationship signal the gift sends. A thoughtfully chosen collection of premium Spanish gourmet foods from Altea, Spain tells your VPs, directors, and senior leaders: you are valued as a person, not just as a title. Soto & Segovia Imports helps companies build executive gifting programs that compound relationship equity over time, one extraordinary gift at a time.
        </p>
      </section>

      {/* Who we gift to */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Who We Gift To</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Executive Roles That Matter Most
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role) => (
              <div key={role.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{role.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products spotlight */}
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Our Products</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          From Altea, Spain, to Your Executive&rsquo;s Door
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-[600px] mx-auto" style={{ color: "#666" }}>
          Every product in the Príncipe Azahar line is hand-crafted in small batches on the Mediterranean coast of Spain. Our olive oils, aged vinegars, artisan salts, and reserve orange wine are the kind of gifts that get discovered, and then sought out by name.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["Truffle Olive Oil", "Garlic Olive Oil", "Lemon Olive Oil", "Vanilla Vinegar", "Pomegranate Vinegar", "Orange Wine", "Black Salt", "Rose Salt"].map((p) => (
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

      {/* Occasions */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>When to Gift</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Key Moments for Executive Gifts
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
            &ldquo;Executive gifting isn&rsquo;t a cost. It&rsquo;s the highest-leverage relationship investment your revenue team can make. One premium gift to the right VP at the right moment is worth ten cold emails.&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
           , Jorge Soto, Co-Founder · Soto & Segovia Imports
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Build Your Program</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[500px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Build an Executive Gifting Program That Scales
        </h2>
        <p className="text-[15px] mb-10 max-w-[450px] mx-auto" style={{ color: "#666" }}>
          Whether you&rsquo;re gifting 5 executives or 500, we&rsquo;ll build a custom program that fits your budget and your goals.
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
