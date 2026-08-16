import Link from "next/link";

export const metadata = {
  title: "Spanish Gourmet Food Gifts for Account-Based Marketing | Soto & Segovia Imports",
  description: "Use premium Spanish gourmet food gifts as your highest-leverage ABM tactic. Break through digital noise with artisan olive oils, salts, and orange wine from Altea, Spain. Built for B2B revenue teams targeting high-value accounts.",
};

const stats = [
  { value: "7×", label: "Higher Response Rate vs. Cold Email" },
  { value: "3 Wks", label: "Avg. Time to First Conversation" },
  { value: "$150", label: "Avg. Gift Cost That Opens C-Suite Doors" },
  { value: "100%", label: "Artisan. Made in Altea, Spain." },
];

const howItWorks = [
  {
    number: "01",
    title: "Identify Your Tier-1 Accounts",
    body: "ABM gifting works because it is selective. Choose the 20, 50, or 100 accounts where a single closed deal justifies real investment. These are the companies where a premium physical gift is not an expense, it is leverage.",
  },
  {
    number: "02",
    title: "Find the Specific Decision-Maker",
    body: "Not the company. The person. The VP of Partnerships who championed the initiative. The CFO who signs the checks. The executive assistant who controls the calendar. One name. One address. One gift that was clearly chosen for them.",
  },
  {
    number: "03",
    title: "Add One Line of Real Research",
    body: "Before you write the note, find one true thing about them: a recent podcast appearance, a company announcement, a LinkedIn post. Connect the gift to it in a single sentence. This is what turns a premium package into a conversation-starter.",
  },
  {
    number: "04",
    title: "Send the Gift. Follow Up in 3–5 Days.",
    body: "Give them time to open it and actually try something. Then send a short, light follow-up that references the gift without making it the point of the email. The gift opened the door. This email walks through it.",
  },
];

const whyGourmet = [
  {
    title: "Pattern Interruption",
    body: "Your target's inbox is predictable. A beautifully packaged box of Spanish artisan foods is not. It lands differently, tactilely, aromatically, memorably, in a way that resets the relationship before you've sent a single word.",
  },
  {
    title: "Reciprocity at Work",
    body: "The rule of reciprocity is one of the most well-documented forces in social psychology. When someone receives a genuine gift, they feel a real impulse to respond. No cold email can manufacture that.",
  },
  {
    title: "You Signal Who You Are",
    body: "A branded pen says: we do what everyone else does. A curated collection of artisan foods from a small producer in Altea, Spain, with a personal note that proves you did your research, says something completely different.",
  },
  {
    title: "It Gets Talked About",
    body: "Premium Spanish gourmet foods are the kind of gift people mention at dinner. Your prospect becomes the person who introduces their team to something extraordinary, and you are the reason that happened.",
  },
];

const giftSets = [
  {
    title: "First-Touch ABM Set",
    description: "For a high-priority prospect you have never spoken with. Designed to open doors that digital outreach has kept closed.",
    products: ["Truffle Olive Oil", "Garlic Olive Oil", "Paprika Salt", "Orange Wine Mini (100ml)"],
    note: "The Truffle Olive Oil is our most conversation-generating product. The miniature Orange Wine is something most Americans have never tasted, it demands a follow-up.",
    range: "$85 – $120 per recipient",
  },
  {
    title: "Executive Engagement Set",
    description: "For C-suite and VP-level targets where the potential contract size justifies a larger investment.",
    products: ["Truffle Olive Oil", "Garlic Olive Oil", "Lemon Olive Oil", "Rose Salt", "Black Salt", "Orange Wine (500ml)"],
    note: "The full olive oil range plus two visually dramatic finishing salts. Arrives as a luxury gift set that communicates your company operates at a specific level.",
    range: "$150 – $200 per recipient",
  },
  {
    title: "Top Client Retention Set",
    description: "For existing accounts you cannot afford to lose. Sent twice a year to the 2–3 individuals who matter most at each account.",
    products: ["Vanilla Vinegar", "Pomegranate Vinegar", "Lemon Olive Oil", "Mint Salt"],
    note: "Rotate products from your previous gift. The Vanilla Vinegar is our most surprising product, the one that generates the most calls from existing clients.",
    range: "$75 – $110 per recipient",
  },
];

const useCases = [
  { role: "Revenue Teams & AEs", body: "Break into a target account that has ignored your emails for six months. A premium gift to the right VP resets the relationship from cold outreach to genuine conversation." },
  { role: "VP of Sales", body: "Build a scalable gifting motion into your ABM playbook. Assign ownership, set triggers, remove friction. A curated gift tier for each account segment." },
  { role: "Customer Success", body: "Protect your most valuable accounts from competitive displacement. Twice-annual gifting to key contacts builds the kind of personal loyalty that vendor comparisons do not erode." },
  { role: "Demand Generation", body: "Add a physical gifting layer to your ABM campaigns. Use gift delivery as a trigger for follow-up sequences. Measure response rate lift against digital-only cohorts." },
  { role: "Founders & CEOs", body: "When you need to get in front of a specific person and nothing else has worked. A premium gift with a personal note from a founder lands differently than anything a BDR sends." },
  { role: "Investor Relations", body: "Maintain relationships with LPs, advisors, and strategic partners between formal touchpoints. A curated seasonal gift keeps you front of mind without requiring a meeting." },
];

export default function ABMGiftingPage() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-24 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
          Soto & Segovia Imports · ABM Gifting
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[800px] mx-auto leading-tight" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          The ABM Tactic Your Competitors<br />Are Not Running
        </h1>
        <p className="text-[17px] max-w-[580px] mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Premium Spanish gourmet food gifts for account-based marketing teams that need to break through digital noise and get in front of the accounts that matter most.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Build Your ABM Gift Program
          </Link>
          <Link
            href="/blog/abm-account-based-marketing-premium-gifts"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-cinzel), serif" }}
          >
            Read the Strategy Guide
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#C9A227" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-cinzel), serif" }}>{s.value}</p>
              <p className="text-[11px] tracking-widest uppercase text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Problem</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Your Target Accounts Have Seen Every Digital Tactic You Are Running</h2>
        <p className="text-[17px] leading-relaxed" style={{ color: "#444" }}>
          Personalized email sequences. LinkedIn engagement cadences. Targeted display ads. Retargeting. Intent data. Your ABM prospects are sophisticated executives who have learned to tune out all of it. The companies breaking through in 2025 are the ones adding a physical dimension to their account-based strategy, a premium, tangible, genuinely memorable touchpoint that digital marketing cannot replicate. That is where we come in.
        </p>
      </section>

      {/* Why gourmet gifts */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Why It Works</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              Why Premium Food Gifts Are the Highest-Leverage ABM Move
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGourmet.map((item) => (
              <div key={item.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#C9A227" }}>
                <h3 className="font-bold text-[15px] mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Playbook</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            How to Run an ABM Gift Campaign That Actually Converts
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {howItWorks.map((step) => (
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
      </section>

      {/* Gift sets */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Curated ABM Gift Sets</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
              The Right Gift for Every Stage of the Funnel
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {giftSets.map((set) => (
              <div key={set.title} className="bg-white p-8 border-l-4" style={{ borderColor: "#C9A227" }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="font-bold text-[18px]" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{set.title}</h3>
                  <span className="text-[12px] font-bold tracking-wider px-4 py-1.5 flex-shrink-0" style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>{set.range}</span>
                </div>
                <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#555" }}>{set.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {set.products.map((p) => (
                    <span key={p} className="px-4 py-1.5 text-[11px] tracking-wider border" style={{ borderColor: "#C9A227", color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
                      {p}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] italic leading-relaxed" style={{ color: "#888" }}>{set.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
              style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Who This Is For</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Built for B2B Revenue Teams
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc) => (
            <div key={uc.role} className="border border-gray-100 p-8">
              <h3 className="font-bold text-[14px] mb-3 pb-3 border-b" style={{ fontFamily: "var(--font-cinzel), serif", color: "#C9A227", borderColor: "#e8e8e8" }}>{uc.role}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "#1A1A1A" }} className="px-6 py-20">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>From the Founder</p>
          <blockquote className="text-[20px] leading-relaxed font-light italic mb-6" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-cormorant), serif" }}>
            &ldquo;I tested premium gifting against cold outreach on the same list of target accounts. The accounts that received a gift had a first-conversation rate more than seven times higher. The gift is not a trick. It is the most human version of your marketing that exists.&rdquo;
          </blockquote>
          <p className="text-[12px] tracking-wider" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
           , Jorge Soto, Co-Founder · Soto & Segovia Imports
          </p>
          <div className="mt-8">
            <Link
              href="/blog/abm-account-based-marketing-premium-gifts"
              className="inline-block text-[11px] tracking-wider underline underline-offset-4"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-cinzel), serif" }}
            >
              Read the full ABM strategy post →
            </Link>
          </div>
        </div>
      </section>

      {/* From Spain section */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>The Products</p>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Artisan Foods From Altea, Spain, the Story Your Gift Tells
          </h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-[620px] mx-auto" style={{ color: "#666" }}>
            Every Príncipe Azahar product comes from Bodegas Sendra González in Altea, a village on Spain&rsquo;s Mediterranean coast. Cold-pressed olive oils, hand-harvested finishing salts, fruit-infused aged vinegars, and traditional orange wine, crafted in small batches by the same family for generations. When you send one of these products to a target account, you are not sending merchandise. You are sending a story. And stories are what people remember.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Truffle Olive Oil", "Garlic Olive Oil", "Lemon Olive Oil", "Vanilla Vinegar", "Pomegranate Vinegar", "Orange Wine", "Paprika Salt", "Rose Salt", "Black Salt"].map((p) => (
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
            View Full Collection
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Start Now</p>
        <h2 className="text-3xl font-bold mb-6 max-w-[560px] mx-auto" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Tell Us Your Target Accounts. We&rsquo;ll Build the Gift Program.
        </h2>
        <p className="text-[15px] mb-10 max-w-[480px] mx-auto" style={{ color: "#666" }}>
          Whether you&rsquo;re starting with 10 accounts or 200, we&rsquo;ll build a curated ABM gifting program that fits your budget, your funnel stage, and your brand.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Get in Touch
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
