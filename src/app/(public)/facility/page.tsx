import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Altea Facility | Soto & Segovia Imports",
  description: "Visit the Príncipe Azahar production facility in Altea, Spain, where every olive oil, artisan salt, vinegar, and orange wine is crafted by hand on the Mediterranean coast.",
};

const stats = [
  { value: "[YEAR]", label: "Founded" },
  { value: "[#]", label: "Artisan SKUs" },
  { value: "[#]", label: "Hectares of Groves" },
  { value: "[CERT]", label: "Certifications" },
];

const processSteps = [
  {
    number: "01",
    title: "Harvest",
    body: "[Placeholder, describe when and how olives, herbs, or raw materials are harvested. Include seasonality, hand-picking vs machine, specific groves or regions within Altea.]",
  },
  {
    number: "02",
    title: "Cold Press & Production",
    body: "[Placeholder, describe the pressing or production process. Hours from harvest to press, temperature controls, equipment used, what makes their method distinct.]",
  },
  {
    number: "03",
    title: "Artisan Finishing",
    body: "[Placeholder, describe how salts are blended, vinegars aged, wines finished. The handcrafted nature of the process, small batches, quality checkpoints.]",
  },
  {
    number: "04",
    title: "Quality Control",
    body: "[Placeholder, certifications, lab testing, organoleptic evaluation, who approves each batch, any awards or recognitions.]",
  },
  {
    number: "05",
    title: "Packaging & Export",
    body: "[Placeholder, how products are bottled, labeled, and prepared for international export. Any cold-chain or shipping requirements.]",
  },
];

const trustPoints = [
  {
    icon: "🏛",
    title: "[Certification Name]",
    body: "[Placeholder, e.g., D.O. Certification, Organic Certification, Export License. Describe what it means and why it matters to buyers.]",
  },
  {
    icon: "🌿",
    title: "Sustainable Practices",
    body: "[Placeholder, describe any sustainability practices: water usage, packaging, no pesticides, solar energy, etc.]",
  },
  {
    icon: "👨‍🍳",
    title: "Master Artisans",
    body: "[Placeholder, introduce the key people behind production. Years of experience, family traditions, philosophy.]",
  },
  {
    icon: "🔬",
    title: "Lab Tested",
    body: "[Placeholder, third-party testing, acidity levels for olive oils, purity standards, any international lab certifications.]",
  },
];

export default function FacilityPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="relative w-full h-[70vh] bg-gray-200 flex items-center justify-center">
          {/* Replace this placeholder with actual facility photo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "#1A1A1A" }}>
            <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              [PLACEHOLDER, Replace with aerial or wide-angle photo of the Altea facility]
            </p>
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%)" }} />
          <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto" style={{ position: "absolute", bottom: "60px", left: 0, right: 0 }}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              Príncipe Azahar · Altea, España
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Where Every Drop<br />Begins
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              On the Mediterranean coast of Spain, in the historic village of Altea, our partner Príncipe Azahar has spent generations perfecting the art of artisan food production.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#C9A227" }}>
        <div className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-cinzel), serif" }}>{s.value}</p>
              <p className="text-[11px] tracking-widest uppercase text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About the facility */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Facility</p>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Altea, Spain —<br />The Heart of Our Production
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>[Placeholder, 2–3 sentences describing the location of the facility: the town of Altea, its geography, proximity to groves/sea. What makes this location exceptional for production.]</p>
            <p>[Placeholder, Describe the facility itself: size, age, what's produced there, any notable features like stone presses, aging cellars, salt flats, etc.]</p>
            <p>[Placeholder, Describe the relationship between Soto & Segovia and Príncipe Azahar / Bodegas Sendra González, how this partnership came to be, why we trust them exclusively.]</p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden" style={{ background: "#F0EDE6" }}>
          {/* Replace with interior or aerial facility photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[11px] tracking-widest uppercase text-center px-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              [PLACEHOLDER, Facility interior or aerial photo]
            </p>
          </div>
        </div>
      </section>

      {/* Production process */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>From Grove to Bottle</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Production Process</h2>
          </div>
          <div className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border" style={{ borderColor: "#C9A227" }}>
                  <span className="text-[13px] font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{step.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{step.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Inside the Facility</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>See It for Yourself</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square flex items-center justify-center" style={{ background: "#F0EDE6" }}>
              <p className="text-[10px] tracking-widest uppercase text-center px-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                [Photo {i}, Facility / Process / People]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust points */}
      <section style={{ background: "#141414" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Why It Matters</p>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>Our Commitment to Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="border border-gray-800 p-8">
                <div className="text-3xl mb-4">{tp.icon}</div>
                <h3 className="font-bold text-[15px] mb-3 text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>{tp.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#888" }}>{tp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Ready to Partner</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Gift Gourmet Spanish Foods to Your Clients
        </h2>
        <p className="text-[15px] mb-8 max-w-[500px] mx-auto" style={{ color: "#666" }}>
          Every product we ship carries the story of this facility, these people, and this place. Let us tell that story to your clients.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/corporate-gifting"
            className="px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Explore Corporate Gifting
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
