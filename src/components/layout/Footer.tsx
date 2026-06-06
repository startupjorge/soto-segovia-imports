import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Shop: [
    { label: "Olive Oils", href: "/products?category=olive-oils" },
    { label: "Vinegars", href: "/products?category=vinegars" },
    { label: "Salts", href: "/products?category=salts" },
    { label: "Wines & Liqueurs", href: "/products?category=wines" },
    { label: "Gift Boxes", href: "/products?category=gifts" },
    { label: "All Products", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about#story" },
    { label: "Quality Promise", href: "/about#values" },
    { label: "Careers", href: "/about#careers" },
  ],
  Help: [
    { label: "FAQ", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Contact: [
    { label: "info@sotosegoviaImports.com", href: "mailto:info@sotosegovia.com" },
    { label: "(305) 555-0198", href: "tel:+13055550198" },
    { label: "Miami, Florida, USA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#060604", borderTop: "1px solid #1A1A12" }}>
      {/* Trust badges */}
      <div
        className="py-5 border-b flex flex-wrap items-center justify-center gap-4 md:gap-8 px-6"
        style={{ borderColor: "#1A1A12" }}
      >
        {[
          "🚢 Imported from Spain",
          "✨ Artisan Quality",
          "🌿 Small Batch",
          "🍃 Authentic & Natural",
          "⭐ Exceptional Service",
        ].map((badge) => (
          <span
            key={badge}
            className="text-[8px] tracking-[0.25em] uppercase"
            style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo size="sm" />
          <p className="mt-4 text-xs leading-relaxed max-w-[220px]" style={{ color: "#444" }}>
            Bringing Spain&apos;s finest gourmet products to chefs, connoisseurs, and homes
            that appreciate true quality.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {["ig", "fb", "in"].map((soc) => (
              <a
                key={soc}
                href="#"
                className="w-8 h-8 border flex items-center justify-center text-[8px] transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                style={{ borderColor: "#222", color: "#444", fontFamily: "var(--font-cinzel), serif" }}
              >
                {soc}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4
              className="text-[9px] tracking-[0.2em] uppercase mb-4 font-semibold"
              style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
            >
              {category}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-[#D4AF37] break-all"
                    style={{ color: "#555" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="border-t px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderColor: "#141410" }}
      >
        <p className="text-[9px]" style={{ color: "#333" }}>
          © {new Date().getFullYear()} Soto &amp; Segovia Imports. All rights reserved.
        </p>
        <div className="flex items-center">
          <p className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "#2A2A1A", fontFamily: "var(--font-cinzel), serif" }}>
            A Legacy of Flavor · A Commitment to Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
