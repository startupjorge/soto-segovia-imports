import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, PackageSearch, UserRound, NotebookPen, CreditCard } from "lucide-react";

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative h-[440px] md:h-[520px] flex items-center justify-center overflow-hidden" style={{ position: "relative" }}>
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Príncipe Azahar gourmet products from Altea, Spain"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Spanish Gourmet Food Gifting for<br /><span style={{ color: "#C9A227" }}>Executives and Corporate Clients</span>
        </h1>
        <p className="text-sm md:text-base mb-8" style={{ color: "#ddd" }}>
          We specialize in providing premium olive oils, salts, and vinegars<br className="hidden md:block" />
          cultivated in organic farms in Spain.
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <Link
            href="/products"
            className="px-8 py-3 font-bold text-sm bg-white text-[#1A1A1A] hover:bg-[#C9A227] hover:text-white transition-all"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Get Started
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-semibold underline underline-offset-2 hover:text-[#C9A227] transition-colors"
            style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            or Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Products ─────────────────────────────────────────────────────────────────
const featuredProducts = [
  {
    name: "Gourmet Olive Oils From Spain",
    price: "$99.00 – $279.00 per box",
    description: "These artisanal oils are produced in the Altea region of Spain and come in various flavors including truffle, garlic, lemon, rosemary, and spicy peppers.",
    image: "/products/olive-oil-garlic.jpg",
    href: "/products?category=olive-oils",
  },
  {
    name: "Gourmet Salts From Spain",
    price: "$59.00 – $179.00 per box",
    description: "These artisanal salts are produced in the Altea region of Spain and come in various flavors including garlic, vanilla, rosemary, and natural sea flakes.",
    image: "/products/salt-garlic.jpg",
    href: "/products?category=salts",
  },
  {
    name: "Gourmet Vinegars From Spain",
    price: "$99.00 – $279.00 per box",
    description: "These artisanal vinegars are produced in the Altea region of Spain and aged 11+ years in oak barrels, available in orange, apple, and traditional varieties.",
    image: "/products/vinegar-orange.jpg",
    href: "/products?category=vinegars",
  },
];

function BrowseProducts() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <SlidersHorizontal size={18} style={{ color: "#1A1A1A" }} />
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Browse Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="flex flex-col border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                  {product.name}
                </h3>
                <p className="text-[13px] mb-3" style={{ color: "#555" }}>{product.price}</p>
                <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: "#777" }}>
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="text-[12px] font-semibold hover:text-[#C9A227] transition-colors text-center underline underline-offset-2"
                  style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
                >
                  add to cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
const steps = [
  { num: 1, label: "Browse and select boxes", Icon: PackageSearch },
  { num: 2, label: "Add recipient contact Info", Icon: UserRound },
  { num: 3, label: "Customize gift notes", Icon: NotebookPen },
  { num: 4, label: "Checkout and place order", Icon: CreditCard },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16" style={{ background: "#C9A227" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-14 text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          How It Works
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative"
                style={{ background: "#1A1A1A" }}
              >
                <step.Icon size={24} color="white" />
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "#C9A227", color: "#fff", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {step.num}
                </span>
              </div>
              <p className="font-bold text-sm text-white leading-snug" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <Link
            href="/products"
            className="px-10 py-3 bg-white font-bold text-sm hover:bg-gray-100 transition-all rounded-sm"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
          >
            Get Started
          </Link>
          <span className="text-white font-semibold text-sm">or</span>
          <Link
            href="/contact"
            className="text-sm font-bold underline underline-offset-2 text-white hover:text-gray-200 transition-colors"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            We'll Do It For You
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Help Banner ───────────────────────────────────────────────────────────────
function HelpBanner() {
  return (
    <section className="py-10 text-center" style={{ background: "#F0F0EA" }}>
      <p className="text-base font-bold mb-1" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
        New to Soto &amp; Segovia Imports or Need help?
      </p>
      <p className="text-sm" style={{ color: "#555" }}>
        Contact us at{" "}
        <a href="mailto:sales@sotosegoviaimports.com" className="font-bold hover:text-[#C9A227] transition-colors" style={{ color: "#1A1A1A" }}>
          sales@sotosegoviaimports.com
        </a>
      </p>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrowseProducts />
      <HowItWorks />
      <HelpBanner />
    </>
  );
}
