import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut } from "lucide-react";

const adminNav = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/admin/dashboard" },
  { icon: <ShoppingBag size={16} />, label: "Orders", href: "/admin/orders" },
  { icon: <Package size={16} />, label: "Inventory", href: "/admin/inventory" },
  { icon: <Users size={16} />, label: "Clients", href: "/admin/clients" },
  { icon: <Settings size={16} />, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex" style={{ background: "#050504" }}>
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col border-r"
        style={{ background: "#080806", borderColor: "#1E1E14" }}
      >
        <div className="p-5 border-b" style={{ borderColor: "#1E1E14" }}>
          <Logo size="sm" />
          <p
            className="mt-2 text-[8px] tracking-[0.2em] uppercase"
            style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
          >
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-1 px-3">
          {adminNav.map(({ icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 text-[10px] tracking-[0.1em] uppercase rounded-sm transition-all hover:bg-white/5 hover:text-[#D4AF37]"
              style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t" style={{ borderColor: "#1E1E14" }}>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-[9px] tracking-[0.1em] uppercase transition-colors hover:text-[#D4AF37]"
            style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
          >
            <LogOut size={14} />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header
          className="h-14 px-8 flex items-center justify-between border-b"
          style={{ background: "#080806", borderColor: "#1E1E14" }}
        >
          <h2
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
          >
            Soto &amp; Segovia Imports — Administration
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: "#555" }}>Admin User</span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
              style={{ background: "#1E1C10", border: "1px solid #D4AF37", color: "#D4AF37" }}
            >
              A
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
