import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Our Services": [
    { label: "Corporate Gifting", href: "/corporate-gifting" },
    { label: "Personal Gifting", href: "/personal-gifting" },
    { label: "Self Service Gifting", href: "/products" },
    { label: "Luxury Hospitality Gifting", href: "/distributors" },
    { label: "Gifts for CEOs", href: "/corporate-gifting" },
    { label: "Gifts for Executives", href: "/corporate-gifting" },
  ],
  "Our Products": [
    { label: "Gourmet Olive Oils", href: "/products?category=olive-oils" },
    { label: "Gourmet Salts", href: "/products?category=salts" },
    { label: "Gourmet Vinegars", href: "/products?category=vinegars" },
    { label: "Garlic Olive Oil", href: "/products?category=olive-oils" },
    { label: "Truffle Olive Oil", href: "/products?category=olive-oils" },
    { label: "Organic Salts", href: "/products?category=salts" },
    { label: "Gourmet Foods", href: "/products" },
  ],
  "Recipes": [
    { label: "Olive Oil Recipes", href: "/recipes" },
    { label: "Spanish Tapas", href: "/recipes" },
    { label: "Vinegar Recipes", href: "/recipes" },
    { label: "Spanish Foods", href: "/recipes" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#141414", color: "#ccc" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <Image src="/logo.png" alt="Soto & Segovia Imports" width={130} height={50} style={{ objectFit: "contain", height: "auto" }} />
          <p className="mt-4 text-xs leading-relaxed" style={{ color: "#666" }}>
            Soto &amp; Segovia Imports LLC {new Date().getFullYear()}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        {Object.entries(footerLinks).map(([col, links]) => (
          <div key={col}>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>{col}</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[12px] transition-colors hover:text-[#C9A227]" style={{ color: "#888" }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 px-6 py-4 text-center">
        <p className="text-[11px]" style={{ color: "#444" }}>© {new Date().getFullYear()} Soto &amp; Segovia Imports. All rights reserved.</p>
      </div>
    </footer>
  );
}
