"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, ChevronDown, User, Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  {
    label: "PRODUCTS",
    href: "/products",
    children: [
      { label: "Olive Oils", href: "/products?category=olive-oils" },
      { label: "Infused Olive Oils", href: "/products?category=infused-oils" },
      { label: "Fruit Vinegars", href: "/products?category=vinegars" },
      { label: "Artisan Salts", href: "/products?category=salts" },
      { label: "Fruit Wines", href: "/products?category=wines" },
      { label: "Liqueurs", href: "/products?category=liqueurs" },
      { label: "Gourmet Baskets", href: "/products?category=baskets" },
      { label: "Gift Boxes", href: "/products?category=gifts" },
      { label: "All Products", href: "/products" },
    ],
  },
  { label: "RECIPES", href: "/recipes" },
  { label: "DISTRIBUTORS", href: "/distributors" },
  { label: "CONTACT", href: "/contact" },
];

const navLinksEs = [
  { label: "INICIO", href: "/" },
  { label: "NOSOTROS", href: "/about" },
  {
    label: "PRODUCTOS",
    href: "/products",
    children: [
      { label: "Aceites de Oliva", href: "/products?category=olive-oils" },
      { label: "Aceites Infusionados", href: "/products?category=infused-oils" },
      { label: "Vinagres de Fruta", href: "/products?category=vinegars" },
      { label: "Sales Artesanales", href: "/products?category=salts" },
      { label: "Vinos de Fruta", href: "/products?category=wines" },
      { label: "Licores", href: "/products?category=liqueurs" },
      { label: "Cestas Gourmet", href: "/products?category=baskets" },
      { label: "Cajas de Regalo", href: "/products?category=gifts" },
      { label: "Todos los Productos", href: "/products" },
    ],
  },
  { label: "RECETAS", href: "/recipes" },
  { label: "DISTRIBUIDORES", href: "/distributors" },
  { label: "CONTACTO", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "es">("en");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const links = locale === "en" ? navLinks : navLinksEs;
  const loginLabel = locale === "en" ? "Distributor Login" : "Portal Distribuidor";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);

  function openDropdown(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(label);
  }
  function closeDropdown() {
    timeoutRef.current = setTimeout(() => setDropdown(null), 150);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/"
      : pathname.includes(href.replace("/", "").split("?")[0]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(10,10,8,0.97)" : "rgba(10,10,8,0.80)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[64px] flex items-center justify-between gap-4 overflow-visible">

        {/* Desktop nav links — centered */}
        <ul className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {links.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <button
                  className="flex items-center gap-0.5 text-[10px] font-semibold tracking-[0.12em] transition-colors duration-200"
                  style={{
                    color: isActive(link.href) ? "#D4AF37" : "#bbb",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  {link.label}
                  <ChevronDown size={10} className="ml-0.5 mt-px" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[10px] font-semibold tracking-[0.12em] transition-colors duration-200 hover:text-[#D4AF37]"
                  style={{
                    color: isActive(link.href) ? "#D4AF37" : "#bbb",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  {link.label}
                </Link>
              )}

              {isActive(link.href) && (
                <span
                  className="absolute -bottom-[25px] left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, #8B6914, #D4AF37, #FFE566, #D4AF37, #8B6914)" }}
                />
              )}

              {link.children && dropdown === link.label && (
                <div
                  className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 py-2 min-w-[200px] shadow-2xl z-50"
                  style={{ background: "#0C0C0A", border: "1px solid #2A2A22" }}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  <div
                    className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                    style={{ background: "#0C0C0A", border: "1px solid #2A2A22", borderBottom: "none", borderRight: "none" }}
                  />
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-[10px] tracking-[0.1em] transition-colors duration-150 hover:text-[#D4AF37] hover:bg-white/5"
                      style={{ color: "#999", fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0">

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{ borderColor: "#2A2A1A", color: "#777", fontFamily: "var(--font-cinzel), serif" }}
            >
              <Globe size={11} />
              {locale === "en" ? "EN" : "ES"}
              <ChevronDown size={9} />
            </button>

            {langOpen && (
              <div
                className="absolute top-full right-0 mt-1.5 py-1 min-w-[110px] shadow-xl z-50"
                style={{ background: "#0C0C0A", border: "1px solid #2A2A22" }}
              >
                {[{ code: "en" as const, label: "English" }, { code: "es" as const, label: "Español" }].map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLocale(code); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-[10px] tracking-[0.1em] transition-colors hover:text-[#D4AF37] hover:bg-white/5"
                    style={{ color: locale === code ? "#D4AF37" : "#999", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {label} {locale === code && "✓"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Distributor Login */}
          <Link
            href="/portal/login"
            className="hidden lg:flex items-center gap-1.5 text-[9px] tracking-[0.12em] uppercase px-3 py-1.5 border transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{ borderColor: "#2A2A1A", color: "#999", fontFamily: "var(--font-cinzel), serif" }}
          >
            <User size={11} />
            {loginLabel}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-1.5 px-2.5 py-1.5 transition-colors hover:text-[#D4AF37]"
            style={{ color: "#999" }}
          >
            <div className="relative">
              <ShoppingCart size={15} />
              <span
                className="absolute -top-1.5 -right-1.5 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold"
                style={{ background: "#D4AF37", color: "#000" }}
              >
                0
              </span>
            </div>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: "#D4AF37" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ background: "#080806", borderColor: "#222" }}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-6 py-4 text-[11px] tracking-[0.15em] border-b transition-colors hover:text-[#D4AF37]"
              style={{ color: isActive(link.href) ? "#D4AF37" : "#999", borderColor: "#1A1A14", fontFamily: "var(--font-cinzel), serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal/login"
            className="block px-6 py-4 text-[11px] tracking-[0.15em] border-b"
            style={{ color: "#D4AF37", borderColor: "#1A1A14", fontFamily: "var(--font-cinzel), serif" }}
          >
            {loginLabel}
          </Link>
          <div className="flex gap-3 px-6 py-4">
            {[{ code: "en" as const, label: "English" }, { code: "es" as const, label: "Español" }].map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLocale(code)}
                className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-all"
                style={{
                  borderColor: locale === code ? "#D4AF37" : "#2A2A1A",
                  color: locale === code ? "#D4AF37" : "#555",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
