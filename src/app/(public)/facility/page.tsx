import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Altea Facility | Soto & Segovia Imports",
  description: "Visit the Príncipe Azahar production facility in Altea, Spain, where every olive oil, artisan salt, vinegar, and fruit wine is crafted by hand on the Mediterranean coast.",
};

const stats = [
  { value: "Altea", label: "Alicante, Spain" },
  { value: "100%", label: "Natural Ingredients" },
  { value: "0", label: "Artificial Additives" },
  { value: "TVE", label: "Featured By" },
];

const processSteps = [
  {
    number: "01",
    title: "Premium Olive Oil Base",
    body: "Every product begins with high-quality extra virgin olive oil cold-pressed at the facility. Quality olive oil never turns cloudy: it is one of the clearest indicators of purity, and every batch from Príncipe Azahar meets that standard.",
  },
  {
    number: "02",
    title: "Single-Ingredient Maceration",
    body: "Each flavored oil is macerating in its own dedicated vat: truffle, rosemary, chili pepper, lemon, garlic. There is no cross-contamination, no blending of ingredients in production. Each vat is devoted exclusively to one ingredient.",
  },
  {
    number: "03",
    title: "No Artificial Anything",
    body: "No drops, no concentrates, no artificial flavorings, no chemicals. What goes into the vat is the real ingredient: whole truffles, fresh rosemary, dried chilis. The oil does the rest.",
  },
  {
    number: "04",
    title: "Artisan Vinegar Production",
    body: "The same philosophy that guides the oils applies to the vinegars. Natural fermentation, single-ingredient infusions, no shortcuts. The facility is currently developing a mango vinegar, continuing its tradition of pioneering fruit-forward production.",
  },
  {
    number: "05",
    title: "Fruit Wines, A World First",
    body: "Príncipe Azahar is the only winery in the world producing fruit wines. Their orange wine attracted the attention of Televisión Española, one of Spain's most recognized broadcast networks, which produced a documentary feature on the winery and its owner. The recognition speaks to a level of innovation rarely seen in artisan food production.",
  },
];

const trustPoints = [
  {
    icon: "🫒",
    title: "Oil Clarity as Quality Standard",
    body: "High-quality extra virgin olive oil is transparent and clear. Príncipe Azahar uses this as a baseline quality indicator: if it clouds, it doesn't ship. Quality certificate provided by the producer upon request.",
  },
  {
    icon: "🧪",
    title: "Zero Artificial Additives",
    body: "No artificial drops, flavorings, concentrates, or chemical enhancers of any kind are used in production. Every infusion is achieved through time and the real ingredient: nothing else.",
  },
  {
    icon: "🍊",
    title: "World's Only Fruit Winery",
    body: "Bodegas Sendra González, producing under the Príncipe Azahar label, is a pioneer in fruit wines and the only producer in the world making fruit wines commercially. Their orange wine is what put Altea on the map.",
  },
  {
    icon: "📺",
    title: "Featured by Televisión Española",
    body: "Televisión Española, one of Spain's most prominent national broadcast networks, produced a documentary segment on the winery owner and the orange wine. A rare honor that reflects both the product's uniqueness and its cultural significance.",
  },
];

const galleryImages = [
  { src: "/facility/_qas0017-QUF3SAc05Z6G4bot.avif", alt: "Príncipe Azahar facility exterior" },
  { src: "/facility/whatsapp-image-2025-12-24-at-12.37.06-vkrgh1tvSxKOJaOV.avif", alt: "Facility production area" },
  { src: "/facility/_qas0113-x7sQ8RmzO8X2Vuse.avif", alt: "Artisan production process" },
  { src: "/facility/_qas0042-xbOjmNwxeiCYpvfe.avif", alt: "Olive oil production" },
  { src: "/facility/_qas0196-1jPx1RvFDr15go2e.avif", alt: "Facility grounds in Altea" },
];

export default function FacilityPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="relative w-full h-[70vh]">
          <Image
            src="/facility/_qas0196-1jPx1RvFDr15go2e.avif"
            alt="Príncipe Azahar facility exterior in Altea, Spain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.55) 100%)" }} />
          <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto" style={{ position: "absolute", bottom: "60px", left: 0, right: 0 }}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
              Príncipe Azahar · Altea, Spain
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Where Every Drop<br />Begins
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              On the Mediterranean coast of Alicante, in the historic village of Altea, our partner Bodegas Sendra González has spent decades crafting Spain's most distinctive artisan oils, vinegars, salts, and fruit wines.
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
            Partida la Olla, Altea<br />Alicante, Spain
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>Nestled in the hills above the Mediterranean at Partida la Olla, 75 in Altea, the Príncipe Azahar facility benefits from one of the most favorable microclimates in Spain for artisan food production. The region's dry Mediterranean air, mineral-rich soil, and proximity to the sea create conditions that intensify the flavor of every ingredient that passes through.</p>
            <p>Bodegas Sendra González operates here under the Príncipe Azahar label, producing a range of extraordinary products: cold-pressed olive oils, single-ingredient infused oils, artisan vinegars, gourmet salts, and fruit wines. Their philosophy is simple: start with the best raw material available, and never compromise the process.</p>
            <p>Soto & Segovia Imports brings these products directly to North American markets: no intermediaries, no rebottling, no compromises. What leaves Altea is exactly what arrives at your door.</p>
          </div>
          <p className="mt-6 text-[13px]" style={{ color: "#999" }}>
            Partida la Olla, 75 · 03590 Altea, Alicante, Spain
          </p>
        </div>
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/facility/_qas0113-x7sQ8RmzO8X2Vuse.avif"
            alt="Príncipe Azahar production facility interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* TVE Video Feature */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>As Seen on National Television</p>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Featured by Televisión Española</h2>
            <p className="text-[15px] leading-relaxed max-w-[620px] mx-auto" style={{ color: "#666" }}>
              Over a decade ago, Televisión Española, one of Spain's most respected national broadcast networks, produced a documentary segment on the Príncipe Azahar winery and its owner. Their pioneering orange wine and their position as the only winery in the world making fruit wines commercially. The feature remains a testament to how far ahead of the curve this Altea producer has always been.
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/XIc7_7Q-2jE"
              title="Televisión Española feature on Príncipe Azahar winery and orange wine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Production process */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Grove to Bottle</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>How It's Made</h2>
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

      {/* Photo gallery */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Inside the Facility</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>See It for Yourself</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
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
          Bring Altea to Your Clients
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
