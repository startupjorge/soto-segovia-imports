import Link from "next/link";

export const metadata = {
  title: "Self Service Gifting | Shop Premium Spanish Gourmet Foods | Soto & Segovia Imports",
  description: "Shop premium Spanish gourmet food gifts online. Artisan olive oils, salts, vinegars, and orange wine from Altea, Spain. Order directly for personal or business gifting.",
};

const steps = [
  { number: "01", title: "Browse the Collection", body: "Explore the full Príncipe Azahar product range, extra virgin olive oils, artisan salts, aged vinegars, and reserve orange wine. Each product page includes tasting notes, origin story, and suggested pairings." },
  { number: "02", title: "Choose Your Products", body: "Select individual products or a pre-curated collection. All products are shipped directly from our Miami headquarters in premium packaging, ready to gift immediately." },
  { number: "03", title: "Add a Personal Message", body: "Every order can include a custom handwritten-style message card. Your note, your words, we handle the rest." },
  { number: "04", title: "We Handle Fulfillment", body: "Your order ships within 2 business days. We pack every item carefully to protect the glass and preserve presentation. You get a tracking link immediately." },
];

const bestFor = [
  { title: "Individual Business Gifts", body: "Close a deal, thank a referral partner, or welcome a new client with a premium artisan gift ordered in minutes, no account required, no minimum order." },
  { title: "Small Team Gifts", body: "Order 2–10 gifts for a team, client list, or event cohort. Mix and match products to personalize each gift without the complexity of a managed program." },
  { title: "Personal Occasions", body: "A birthday, anniversary, housewarming, or host gift, premium Spanish gourmet foods are the kind of present that gets talked about. Order for any personal occasion, any time." },
  { title: "Last-Minute Corporate Gifts", body: "Need a gift by Thursday? Our 2-business-day shipping and pre-packaged gift sets mean you can send a premium, thoughtful gift even when you're down to the wire." },
];

export default function SelfServiceGifting() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · Self Service
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[700px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Premium Spanish Gourmet Gifts,<br />On Demand
        </h1>
        <p className="text-[16px] max-w-[520px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Shop the full Príncipe Azahar collection. Order directly. Ship in days. No minimum, no account required.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/products"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Shop Products
          </Link>
          <Link
            href="/corporate-gifting"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}
          >
            Need a Managed Program?
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[780px] mx-auto px-6 py-20 text-center">
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>
          Not every gifting moment requires a full program. Sometimes you need one exceptional gift, delivered fast, that makes a real impression. Our self-service shop lets you order premium Príncipe Azahar artisan Spanish gourmet foods directly, with the same quality, same packaging, and same story as our corporate programs. No minimums, no onboarding. Just the best food gifts from Spain, shipped to your door.
        </p>
      </section>

      {/* How it works */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>How It Works</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Order in Minutes, Impress Immediately</h2>
          </div>
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
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

      {/* Best for */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Best For</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Who Self-Service Gifting Is For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bestFor.map((item) => (
            <div key={item.title} className="p-8 border-t-2" style={{ borderColor: "#C9A227", background: "#FAFAFA" }}>
              <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products callout */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Collection</p>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Artisan Foods From Altea, Spain</h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Every product is crafted in small batches by Príncipe Azahar on the Mediterranean coast of Spain. Olive oils cold-pressed from estate groves. Vinegars aged in oak. Salts harvested by hand. Orange wine made from the region&rsquo;s historic citrus orchards.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Extra Virgin Olive Oil", "Garlic Olive Oil", "Truffle Olive Oil", "Lemon Olive Oil", "White Salt", "Rose Salt", "Black Salt", "Orange Vinegar", "Pomegranate Vinegar", "Orange Wine"].map((p) => (
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
            Shop All Products
          </Link>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Gifting at Scale?</p>
        <h2 className="text-3xl font-bold text-white mb-6 max-w-[550px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Sending More Than 10 Gifts? Let Us Build You a Program.
        </h2>
        <p className="text-[15px] mb-10 max-w-[480px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
          Our corporate gifting team handles everything, curation, custom packaging, bulk fulfillment, and a personal account manager. Starting at 10 gifts.
        </p>
        <Link
          href="/corporate-gifting"
          className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
          style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
        >
          Explore Corporate Gifting
        </Link>
      </section>

    </div>
  );
}
