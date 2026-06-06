import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#050504" }}>
      {/* Minimal portal header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 h-16 flex items-center justify-between border-b"
        style={{ background: "rgba(5,5,4,0.97)", borderColor: "#1E1E14" }}
      >
        <Logo size="sm" />
        <nav className="flex items-center gap-6">
          {[
            { label: "Dashboard", href: "/portal/dashboard" },
            { label: "Orders", href: "/portal/orders" },
            { label: "Invoices", href: "/portal/invoices" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[9px] tracking-[0.2em] uppercase transition-colors hover:text-[#D4AF37]"
              style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/"
            className="text-[9px] tracking-[0.2em] uppercase transition-colors hover:text-white"
            style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
          >
            ← Public Site
          </Link>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}
