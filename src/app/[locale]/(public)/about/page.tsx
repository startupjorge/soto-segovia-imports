import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Soto & Segovia Imports",
};

const team = [
  {
    name: "Jorge Soto",
    role: "Co-Founder & CEO",
    bio: "Born in Miami to a Spanish family, Jorge grew up with a deep reverence for the traditions of Spanish cuisine. A seasoned entrepreneur with 20 years of experience in luxury goods distribution.",
  },
  {
    name: "Roberto Segovia Perez",
    role: "Co-Founder & President",
    bio: "A native of Seville, Roberto spent decades forging relationships with the finest artisan producers across Spain. His family has cultivated olive groves in Andalusia for four generations.",
  },
];

const values = [
  {
    icon: "🫒",
    title: "Authenticity",
    body: "Every product we import carries a DOP or IGP certification, guaranteeing its Spanish origin and adherence to centuries-old production methods.",
  },
  {
    icon: "✨",
    title: "Excellence",
    body: "We personally visit every producer, taste every batch, and accept only what meets our uncompromising standards — less than 10% of products we evaluate make the cut.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    body: "We see our producers, distributors, and clients not as transactions but as long-term relationships built on mutual respect, trust, and shared passion.",
  },
  {
    icon: "🌿",
    title: "Sustainability",
    body: "We prioritize producers who use traditional, sustainable farming methods — protecting both the land and the extraordinary flavors it yields.",
  },
];

const milestones = [
  { year: "2005", event: "Jorge and Roberto meet in Marseille, France" },
  { year: "2007", event: "Soto & Segovia Imports officially founded in Miami, FL" },
  { year: "2009", event: "First 50 distributor accounts signed across Florida and New York" },
  { year: "2012", event: "Expanded portfolio to include vinegars, salts, and liqueurs" },
  { year: "2016", event: "Awarded Best Specialty Food Importer — Fine Food America" },
  { year: "2019", event: "Surpassed 300 distributor partners across 20 U.S. states" },
  { year: "2021", event: "Launched private label program for hotel and restaurant clients" },
  { year: "2024", event: "500+ partners, 28 states, and a new digital portal launched" },
];

export default function AboutPage() {
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
          Our Story
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight px-6"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          A Friendship Built on Heritage, Passion &amp; the Finest from Spain
        </h1>
        <p className="max-w-xl mx-auto text-base leading-relaxed px-6" style={{ color: "#666" }}>
          What started as a chance encounter in Marseille became a 20-year mission to bring
          Spain&apos;s greatest artisan foods to tables across North America.
        </p>
      </section>

      {/* Founders story */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-4xl font-bold mb-8 leading-tight"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              How It All Began
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "#888" }}>
              <p>
                It was the summer of 2005. Jorge Soto was on his honeymoon in the South of France
                when he struck up a conversation with a fellow traveler at a small tapas bar in
                Marseille. That man was Roberto Segovia Perez, a Sevillano visiting his French
                cousin.
              </p>
              <p>
                Over a bottle of Manzanilla and a plate of jamón ibérico, the two discovered a
                shared obsession: the extraordinary, often overlooked world of Spanish artisan
                foods. They stayed in touch, and two years later, with Roberto&apos;s family
                connections to some of Andalusia&apos;s greatest olive estates, Soto &amp;
                Segovia Imports was born.
              </p>
              <p>
                Starting with just three products — an Arbequina EVOO, a Sherry vinegar, and a
                fleur de sel — they approached Miami&apos;s finest restaurants. The response was
                immediate. Within 18 months, they had 50 accounts and a waiting list.
              </p>
              <p>
                Today, Soto &amp; Segovia represents over 200 SKUs from more than 40 artisan
                producers across every corner of Spain, from the salt marshes of Cádiz to the
                saffron fields of La Mancha.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Our Journey
            </h3>
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px" style={{ background: "#2A2A1A" }} />
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-5 mb-6 relative">
                  <div
                    className="text-[11px] font-bold w-14 flex-shrink-0 text-right pt-0.5"
                    style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {year}
                  </div>
                  <div className="relative flex-shrink-0 w-8 flex justify-center pt-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#D4AF37", border: "2px solid #0A0A08" }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed pt-0.5" style={{ color: "#888" }}>
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 border-t"
        style={{ background: "#0D0D0A", borderColor: "#1E1E14" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-3"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              What Drives Us
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, body }) => (
              <div
                key={title}
                className="p-8 border"
                style={{ background: "#0F0F0C", borderColor: "#2A2A1A" }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h4
                  className="text-lg font-bold mb-3"
                  style={{ color: "#D4AF37", fontFamily: "var(--font-cormorant), serif" }}
                >
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="story" className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-3"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            The People Behind the Brand
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
          >
            Meet the Founders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map(({ name, role, bio }) => (
            <div
              key={name}
              className="p-8 border text-center"
              style={{ background: "#0F0F0C", borderColor: "#2A2A1A" }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl"
                style={{ background: "#1E1C10", border: "2px solid #D4AF37" }}
              >
                👤
              </div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
              >
                {name}
              </h3>
              <p
                className="text-[9px] tracking-[0.2em] uppercase mb-5"
                style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
              >
                {role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center border-t"
        style={{ borderColor: "#1E1E14", background: "#080806" }}
      >
        <h3
          className="text-3xl font-bold mb-4"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Ready to Bring Spain to Your Table?
        </h3>
        <p className="mb-8 text-sm" style={{ color: "#666" }}>
          Explore our full collection or get in touch to discuss wholesale opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A227, #FFE566, #C9A227, #8B6914)",
              color: "#000",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            Shop Collection <ArrowRight size={12} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{
              borderColor: "#333",
              color: "#999",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
