"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { ShoppingCart, ChevronDown, User, Menu, X } from "lucide-react";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(10,10,8,0.97)" : "rgba(10,10,8,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between gap-4 overflow-visible">
        {/* Logo */}
        <Logo size="sm" />

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <button
                  className="flex items-center gap-0.5 text-[11px] font-semibold tracking-[0.12em] transition-colors duration-200"
                  style={{
                    color: isActive(link.href) ? "#D4AF37" : "#ccc",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  {link.label}
                  <ChevronDown size={11} className="ml-0.5 mt-px" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[11px] font-semibold tracking-[0.12em] transition-colors duration-200 hover:text-[#D4AF37]"
                  style={{
                    color: isActive(link.href) ? "#D4AF37" : "#ccc",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  {link.label}
                </Link>
              )}

              {/* Active indicator */}
              {isActive(link.href) && (
                <span
                  className="absolute -bottom-[27px] left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, #8B6914, #D4AF37, #FFE566, #D4AF37, #8B6914)" }}
                />
              )}

              {/* Dropdown */}
              {link.children && dropdown === link.label && (
                <div
                  className="absolute top-[calc(100%+26px)] left-1/2 -translate-x-1/2 py-2 min-w-[200px] shadow-2xl"
                  style={{ background: "#0C0C0A", border: "1px solid #2A2A22" }}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  {/* Triangle */}
                  <div
                    className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                    style={{ background: "#0C0C0A", border: "1px solid #2A2A22", borderBottom: "none", borderRight: "none" }}
                  />
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-[11px] tracking-[0.1em] transition-colors duration-150 hover:text-[#D4AF37] hover:bg-white/5"
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

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Distributor Login */}
          <Link
            href="/portal/login"
            className="hidden lg:flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{
              borderColor: "#333",
              color: "#aaa",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            <User size={12} />
            Distributor Login
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-2 px-3 py-2 text-[10px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]"
            style={{ color: "#aaa", fontFamily: "var(--font-cinzel), serif" }}
          >
            <div className="relative">
              <ShoppingCart size={16} />
              <span
                className="absolute -top-1.5 -right-1.5 text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold"
                style={{ background: "#D4AF37", color: "#000" }}
              >
                0
              </span>
            </div>
            <span className="hidden xl:inline">CART</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: "#D4AF37" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "#080806", borderColor: "#222" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-6 py-4 text-[11px] tracking-[0.15em] border-b transition-colors hover:text-[#D4AF37]"
              style={{
                color: isActive(link.href) ? "#D4AF37" : "#999",
                borderColor: "#1A1A14",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal/login"
            className="block px-6 py-4 text-[11px] tracking-[0.15em]"
            style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
          >
            DISTRIBUTOR LOGIN
          </Link>
        </div>
      )}
    </header>
  );
}
