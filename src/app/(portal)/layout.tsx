"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { Settings, LogOut } from "lucide-react";
import PortalChat from "@/components/portal/PortalChat";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = pathname === "/portal/login" || pathname === "/portal/signup" || pathname.startsWith("/portal/auth");

  return (
    <div className="min-h-screen" style={{ background: "#050504" }}>
      {!hideNav && (
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
              { label: "Integrations", href: "/portal/integrations" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[9px] tracking-[0.2em] uppercase transition-colors hover:text-[#D4AF37]"
                style={{
                  color: pathname === href ? "#D4AF37" : "#666",
                  fontFamily: "var(--font-cinzel), serif",
                }}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-2 pl-4 border-l" style={{ borderColor: "#2A2A1A" }}>
              <Link
                href="/portal/settings"
                className="transition-colors hover:text-[#D4AF37]"
                style={{ color: "#555" }}
                title="Settings"
              >
                <Settings size={15} />
              </Link>
              <Link
                href="/api/auth/logout"
                className="transition-colors hover:text-red-400"
                style={{ color: "#555" }}
                title="Sign Out"
              >
                <LogOut size={15} />
              </Link>
            </div>
          </nav>
        </header>
      )}
      <main className={hideNav ? "" : "pt-16"}>{children}</main>
      {!hideNav && <PortalChat />}
    </div>
  );
}
