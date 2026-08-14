"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

const leftLinks = {
  EN: [
    { label: "Corporate Gifting", href: "/corporate-gifting" },
    { label: "Personal Gifting", href: "/personal-gifting" },
  ],
  ES: [
    { label: "Regalos Corporativos", href: "/corporate-gifting" },
    { label: "Regalos Personales", href: "/personal-gifting" },
  ],
};

const rightLinks = {
  EN: [
    { label: "Our Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ES: [
    { label: "Nuestros Productos", href: "/products" },
    { label: "Quiénes Somos", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  const linkStyle = (href: string) => ({
    color: isActive(href) ? "#C9A227" : "#cccccc",
    fontFamily: "var(--font-cinzel), serif",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 shadow-sm" style={{ background: "#111111" }}>
      {/* Desktop */}
      <nav className="max-w-[1200px] mx-auto px-6 h-[86px] hidden lg:flex items-center justify-between">
        {/* Left links */}
        <div className="flex items-center gap-8 flex-1">
          {leftLinks[lang].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-wide font-medium hover:text-[#C9A227] transition-colors"
              style={linkStyle(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <Link href="/" className="flex-shrink-0 mx-6">
          <Image
            src="/logo.png"
            alt="Soto & Segovia Imports"
            width={200}
            height={67}
            style={{ objectFit: "contain", height: "auto", background: "transparent" }}
            priority
          />
        </Link>

        {/* Right links */}
        <div className="flex items-center gap-8 flex-1 justify-end">
          {rightLinks[lang].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-wide font-medium hover:text-[#C9A227] transition-colors"
              style={linkStyle(l.href)}
            >
              {l.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1 text-[11px] tracking-wider font-medium text-gray-400 hover:text-[#C9A227] transition-colors"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              <Globe size={13} />
              {lang}
              <ChevronDown size={11} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 border border-gray-700 shadow-lg py-1 min-w-[100px] z-50" style={{ background: "#1a1a1a" }}>
                {[{ code: "EN", label: "English" }, { code: "ES", label: "Español" }].map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code as "EN" | "ES"); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2 text-[11px] hover:bg-white/10 hover:text-[#C9A227] transition-colors"
                    style={{ color: lang === code ? "#C9A227" : "#aaa", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {label} {lang === code && "✓"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Client Login */}
          <Link
            href="/portal/login"
            className="text-[11px] tracking-wider px-4 py-2 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-all"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            {lang === "ES" ? "Acceso Clientes" : "Client Login"}
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="lg:hidden px-5 h-[60px] flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Soto & Segovia Imports" width={120} height={45} style={{ objectFit: "contain", height: "auto" }} priority />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#C9A227]">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-800 divide-y divide-gray-800" style={{ background: "#111111" }}>
          {[...leftLinks[lang], ...rightLinks[lang]].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-[13px] font-medium hover:text-[#C9A227] transition-colors"
              style={{ color: isActive(l.href) ? "#C9A227" : "#cccccc", fontFamily: "var(--font-cinzel), serif" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/portal/login" onClick={() => setMobileOpen(false)} className="block px-6 py-3.5 text-[13px] font-medium text-[#C9A227]" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            {lang === "ES" ? "Acceso Clientes" : "Client Login"}
          </Link>
          <div className="flex gap-3 px-6 py-3.5">
            {["EN", "ES"].map((code) => (
              <button key={code} onClick={() => setLang(code as "EN" | "ES")}
                className="text-[11px] px-3 py-1 border transition-all"
                style={{ borderColor: lang === code ? "#C9A227" : "#ddd", color: lang === code ? "#C9A227" : "#888", fontFamily: "var(--font-cinzel), serif" }}>
                {code}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
