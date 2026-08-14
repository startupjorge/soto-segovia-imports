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
  "Journal": [
    { label: "Olive Oil Guide", href: "/blog/what-is-extra-virgin-olive-oil-spain" },
    { label: "Artisan Salts Guide", href: "/blog/spanish-artisan-salts-guide" },
    { label: "Spanish Orange Wine", href: "/blog/spanish-orange-wine-guide" },
    { label: "Spanish Charcuterie Board", href: "/blog/how-to-build-spanish-charcuterie-board" },
    { label: "Artisan Vinegars", href: "/blog/artisan-vinegars-spain-guide" },
  ],
  "Recipes": [
    { label: "Patatas Bravas", href: "/recipes/patatas-bravas" },
    { label: "Gambas al Ajillo", href: "/recipes/gambas-al-ajillo" },
    { label: "Pan Con Tomate", href: "/recipes/pan-con-tomate" },
    { label: "Truffle Olive Oil Pasta", href: "/recipes/truffle-pasta" },
    { label: "Lemon Olive Oil Cake", href: "/recipes/lemon-cake" },
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
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-1 flex flex-col items-start">
          <Image src="/logo.png" alt="Soto & Segovia Imports" width={160} height={60} style={{ objectFit: "contain", height: "auto", width: "160px" }} />
          <p className="mt-4 text-xs leading-relaxed" style={{ color: "#666" }}>
            Soto &amp; Segovia Imports LLC {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-xs" style={{ color: "#666" }}>Headquarters in Miami, FL</p>
          <p className="text-xs" style={{ color: "#666" }}>Products Made in Spain</p>
          <div className="mt-5 flex items-center gap-3">
            {/* Facebook official icon */}
            <a href="https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512" fill="currentColor">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z"/>
              </svg>
            </a>
            {/* Instagram official icon */}
            <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            {/* LinkedIn official icon */}
            <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
              </svg>
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
