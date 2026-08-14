import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <Instagram size={14} />
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <Linkedin size={14} />
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
