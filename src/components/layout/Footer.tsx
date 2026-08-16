"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageContext";

const footerData = {
  EN: {
    services: {
      heading: "Our Services",
      links: [
        { label: "Corporate Gifting", href: "/corporate-gifting" },
        { label: "Personal Gifting", href: "/personal-gifting" },
        { label: "Self Service Gifting", href: "/self-service-gifting" },
        { label: "Luxury Hospitality Gifting", href: "/luxury-hospitality-gifting" },
        { label: "Gifts for CEOs", href: "/gifts-for-ceos" },
        { label: "Gifts for Executives", href: "/gifts-for-executives" },
        { label: "Gifts for ABM Campaigns", href: "/abm-gifting" },
      ],
    },
    products: {
      heading: "Our Products",
      links: [
        { label: "Gourmet Olive Oils", href: "/products?category=olive-oils" },
        { label: "Gourmet Salts", href: "/products?category=salts" },
        { label: "Gourmet Vinegars", href: "/products?category=vinegars" },
        { label: "Garlic Olive Oil", href: "/products?category=olive-oils" },
        { label: "Truffle Olive Oil", href: "/products?category=olive-oils" },
        { label: "Organic Salts", href: "/products?category=salts" },
        { label: "Gourmet Foods", href: "/products" },
      ],
    },
    blog: {
      heading: "Blog",
      links: [
        { label: "Corporate Gifting Strategy", href: "/blog/why-premium-food-gifts-outperform-branded-swag" },
        { label: "Fix Your Gifting Strategy", href: "/blog/corporate-gifting-strategy-b2b-client-retention" },
        { label: "Personal Gifting for Sales", href: "/blog/personal-gifting-occasions-build-real-relationships" },
        { label: "Corporate Gifting Calendar", href: "/blog/spanish-gourmet-food-corporate-gifting-seasons" },
        { label: "Choosing an Import Partner", href: "/blog/what-to-look-for-in-a-luxury-food-import-partner" },
      ],
    },
    recipes: {
      heading: "Recipes",
      links: [
        { label: "Patatas Bravas", href: "/recipes/patatas-bravas" },
        { label: "Gambas al Ajillo", href: "/recipes/gambas-al-ajillo" },
        { label: "Pan Con Tomate", href: "/recipes/pan-con-tomate" },
        { label: "Truffle Olive Oil Pasta", href: "/recipes/truffle-pasta" },
        { label: "Lemon Olive Oil Cake", href: "/recipes/lemon-cake" },
      ],
    },
    industries: {
      heading: "Industries",
      links: [
        { label: "Startups", href: "/industries/startups" },
        { label: "Fortune 500 Companies", href: "/industries/fortune-500" },
        { label: "Hospitality", href: "/industries/hospitality" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Software", href: "/industries/software" },
        { label: "Financial Services", href: "/industries/financial-services" },
        { label: "Venture Capital", href: "/industries/venture-capital" },
      ],
    },
    subscriptions: {
      heading: "Subscription Plans",
      links: [
        { label: "All Plans", href: "/subscriptions" },
        { label: "Monthly Box", href: "/subscriptions/monthly-box" },
        { label: "Subscribe & Save 10%", href: "/subscriptions/subscribe-save" },
        { label: "Gift Subscriptions", href: "/subscriptions/gift-subscriptions" },
        { label: "VIP Membership · Invite Only", href: "/subscriptions/vip-membership", vip: true },
      ],
    },
    company: {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Altea Facility", href: "/facility" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Refund Policy", href: "/refund-policy" },
      ],
    },
    tagline1: "Headquarters in Miami, FL",
    tagline2: "Products Made in Spain",
    copyright: "All rights reserved.",
  },
  ES: {
    services: {
      heading: "Nuestros Servicios",
      links: [
        { label: "Regalos Corporativos", href: "/es/corporate-gifting" },
        { label: "Regalos Personales", href: "/es/personal-gifting" },
        { label: "Regalos Autoservicio", href: "/self-service-gifting" },
        { label: "Regalos de Lujo para Hostelería", href: "/luxury-hospitality-gifting" },
        { label: "Regalos para CEOs", href: "/gifts-for-ceos" },
        { label: "Regalos para Ejecutivos", href: "/gifts-for-executives" },
        { label: "Regalos para Campañas ABM", href: "/abm-gifting" },
      ],
    },
    products: {
      heading: "Nuestros Productos",
      links: [
        { label: "Aceites de Oliva Gourmet", href: "/es/products?category=olive-oils" },
        { label: "Sales Gourmet", href: "/es/products?category=salts" },
        { label: "Vinagres Gourmet", href: "/es/products?category=vinegars" },
        { label: "Aceite de Ajo", href: "/es/products?category=olive-oils" },
        { label: "Aceite de Trufa", href: "/es/products?category=olive-oils" },
        { label: "Sales Artesanas", href: "/es/products?category=salts" },
        { label: "Productos Gourmet", href: "/es/products" },
      ],
    },
    blog: {
      heading: "Blog",
      links: [
        { label: "Estrategia de Regalos Corporativos", href: "/es/blog/why-premium-food-gifts-outperform-branded-swag" },
        { label: "Mejora tu Estrategia de Regalos", href: "/es/blog/corporate-gifting-strategy-b2b-client-retention" },
        { label: "Regalos Personales para Ventas", href: "/es/blog/personal-gifting-occasions-build-real-relationships" },
        { label: "Calendario de Regalos Corporativos", href: "/es/blog/spanish-gourmet-food-corporate-gifting-seasons" },
        { label: "Elegir un Socio Importador", href: "/es/blog/what-to-look-for-in-a-luxury-food-import-partner" },
      ],
    },
    recipes: {
      heading: "Recetas",
      links: [
        { label: "Patatas Bravas", href: "/recipes/patatas-bravas" },
        { label: "Gambas al Ajillo", href: "/recipes/gambas-al-ajillo" },
        { label: "Pan Con Tomate", href: "/recipes/pan-con-tomate" },
        { label: "Pasta con Aceite de Trufa", href: "/recipes/truffle-pasta" },
        { label: "Bizcocho de Aceite de Limón", href: "/recipes/lemon-cake" },
      ],
    },
    industries: {
      heading: "Industrias",
      links: [
        { label: "Startups", href: "/industries/startups" },
        { label: "Empresas Fortune 500", href: "/industries/fortune-500" },
        { label: "Hostelería", href: "/industries/hospitality" },
        { label: "Manufactura", href: "/industries/manufacturing" },
        { label: "Software", href: "/industries/software" },
        { label: "Servicios Financieros", href: "/industries/financial-services" },
        { label: "Capital Riesgo", href: "/industries/venture-capital" },
      ],
    },
    subscriptions: {
      heading: "Suscripciones",
      links: [
        { label: "Todos los Planes", href: "/subscriptions" },
        { label: "Caja Mensual", href: "/subscriptions/monthly-box" },
        { label: "Suscríbete y Ahorra 10%", href: "/subscriptions/subscribe-save" },
        { label: "Suscripciones de Regalo", href: "/subscriptions/gift-subscriptions" },
        { label: "Membresía VIP · Solo por Invitación", href: "/subscriptions/vip-membership", vip: true },
      ],
    },
    company: {
      heading: "Empresa",
      links: [
        { label: "Quiénes Somos", href: "/es/about" },
        { label: "Nuestra Planta en Altea", href: "/es/facility" },
        { label: "Contacto", href: "/es/contact" },
        { label: "Política de Privacidad", href: "#" },
        { label: "Términos de Servicio", href: "#" },
        { label: "Política de Devoluciones", href: "/refund-policy" },
      ],
    },
    tagline1: "Sede en Miami, FL",
    tagline2: "Productos Elaborados en España",
    copyright: "Todos los derechos reservados.",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const d = footerData[lang];

  const columns = [d.services, d.products, d.blog, d.recipes, d.industries, d.subscriptions, d.company];

  return (
    <footer style={{ background: "#141414", color: "#ccc" }}>
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-8 gap-8">
        {/* Logo column */}
        <div className="md:col-span-1" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-footer.png"
            alt="Soto & Segovia Imports"
            style={{ width: "160px", height: "auto", display: "block", marginLeft: 0 }}
          />
          <p className="mt-4 text-xs leading-relaxed" style={{ color: "#666" }}>
            Soto &amp; Segovia Imports LLC {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-xs" style={{ color: "#666" }}>{d.tagline1}</p>
          <p className="text-xs" style={{ color: "#666" }}>{d.tagline2}</p>
          <div className="mt-3 flex items-center gap-2">
            <a href="https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512" fill="currentColor">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sotosegoviaimports/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@SotoSegoviaImports" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 576 512" fill="currentColor">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "#fff", fontFamily: "var(--font-cinzel), serif" }}>{col.heading}</h4>
            <ul className="flex flex-col gap-1.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] transition-colors hover:text-[#C9A227]"
                    style={{ color: (link as { vip?: boolean }).vip ? "#C9A227" : "#888", fontWeight: (link as { vip?: boolean }).vip ? 700 : 400 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 px-6 py-4 text-center">
        <p className="text-[11px]" style={{ color: "#444" }}>© {new Date().getFullYear()} Soto &amp; Segovia Imports. {d.copyright}</p>
      </div>
    </footer>
  );
}
