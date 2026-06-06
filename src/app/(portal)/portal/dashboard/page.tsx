import Link from "next/link";
import { Package, FileText, ShoppingCart, TrendingUp, ArrowRight, Clock } from "lucide-react";

const stats = [
  { icon: <Package size={20} />, label: "Active Orders", value: "12", delta: "+3 this month", color: "#D4AF37" },
  { icon: <FileText size={20} />, label: "Open Invoices", value: "4", delta: "$8,450 outstanding", color: "#C9A227" },
  { icon: <ShoppingCart size={20} />, label: "Total Orders (YTD)", value: "87", delta: "+18% vs last year", color: "#A67C00" },
  { icon: <TrendingUp size={20} />, label: "Total Spend (YTD)", value: "$42,800", delta: "+22% vs last year", color: "#D4AF37" },
];

const recentOrders = [
  { id: "ORD-2024-0087", date: "Dec 10, 2024", items: 8, total: "$1,240.00", status: "Shipped" },
  { id: "ORD-2024-0086", date: "Dec 3, 2024", items: 12, total: "$2,180.00", status: "Delivered" },
  { id: "ORD-2024-0085", date: "Nov 28, 2024", items: 5, total: "$890.00", status: "Delivered" },
  { id: "ORD-2024-0084", date: "Nov 20, 2024", items: 20, total: "$3,600.00", status: "Delivered" },
  { id: "ORD-2024-0083", date: "Nov 14, 2024", items: 7, total: "$1,050.00", status: "Delivered" },
];

const statusColors: Record<string, string> = {
  Shipped: "#D4AF37",
  Processing: "#C9A227",
  Delivered: "#4A7C59",
  Pending: "#888",
};

export default function PortalDashboard() {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
      {/* Greeting */}
      <div className="mb-10">
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-1"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          Distributor Portal
        </p>
        <h1
          className="text-3xl font-bold"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Welcome back, Acme Fine Foods
        </h1>
        <p className="text-sm mt-1 flex items-center gap-2" style={{ color: "#555" }}>
          <Clock size={12} />
          Last login: December 11, 2024 at 9:42 AM EST
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(({ icon, label, value, delta, color }) => (
          <div
            key={label}
            className="p-6 border"
            style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-[9px] tracking-[0.15em] uppercase"
                style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}
              >
                {label}
              </p>
              <span style={{ color }}>{icon}</span>
            </div>
            <p
              className="text-3xl font-bold mb-1"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              {value}
            </p>
            <p className="text-xs" style={{ color: "#555" }}>{delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#1E1E14" }}>
            <h2
              className="text-base font-bold"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Recent Orders
            </h2>
            <Link
              href="/portal/orders"
              className="text-[9px] tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors hover:text-[#FFE566]"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              View All <ArrowRight size={10} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                  {["Order ID", "Date", "Items", "Total", "Status"].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-[8px] tracking-[0.2em] uppercase"
                      style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b transition-colors hover:bg-white/[0.02] cursor-pointer"
                    style={{ borderColor: "#1A1A12" }}
                  >
                    <td className="px-6 py-4 text-sm font-mono" style={{ color: "#D4AF37" }}>
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{order.date}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{order.items}</td>
                    <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#ccc" }}>
                      {order.total}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2.5 py-1 text-[8px] tracking-[0.1em] uppercase"
                        style={{
                          background: `${statusColors[order.status]}18`,
                          color: statusColors[order.status],
                          fontFamily: "var(--font-cinzel), serif",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex flex-col gap-4">
          <div className="border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <h2
              className="text-base font-bold mb-5"
              style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
            >
              Quick Actions
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "Place New Order", href: "/products", primary: true },
                { label: "View Invoices", href: "/portal/invoices", primary: false },
                { label: "Download Catalog", href: "#", primary: false },
                { label: "Contact Account Manager", href: "/contact", primary: false },
              ].map(({ label, href, primary }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-center py-2.5 text-[9px] tracking-[0.15em] uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    background: primary
                      ? "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)"
                      : "transparent",
                    color: primary ? "#000" : "#888",
                    borderColor: primary ? "transparent" : "#2A2A1A",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Account manager */}
          <div className="border p-6" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <p
              className="text-[9px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
            >
              Your Account Manager
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "#1E1C10", border: "1px solid #D4AF37" }}
              >
                👤
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#ccc" }}>Maria González</p>
                <p className="text-xs" style={{ color: "#555" }}>Senior Partner Relations</p>
              </div>
            </div>
            <p className="text-xs mb-1" style={{ color: "#666" }}>📧 maria@sotosegovia.com</p>
            <p className="text-xs" style={{ color: "#666" }}>📞 +1 (305) 555-0120</p>
          </div>
        </div>
      </div>
    </div>
  );
}
