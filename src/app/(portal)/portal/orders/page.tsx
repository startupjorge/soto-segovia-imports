import Link from "next/link";
import { Plus, Eye } from "lucide-react";

const orders = [
  { id: "ORD-2024-0087", date: "Dec 10, 2024", items: 8, total: "$1,240.00", status: "Shipped", tracking: "1Z999AA10123456784" },
  { id: "ORD-2024-0086", date: "Dec 3, 2024", items: 12, total: "$2,180.00", status: "Delivered", tracking: "1Z999AA10123456783" },
  { id: "ORD-2024-0085", date: "Nov 28, 2024", items: 5, total: "$890.00", status: "Delivered", tracking: "1Z999AA10123456782" },
  { id: "ORD-2024-0084", date: "Nov 20, 2024", items: 20, total: "$3,600.00", status: "Delivered", tracking: "1Z999AA10123456781" },
  { id: "ORD-2024-0083", date: "Nov 14, 2024", items: 7, total: "$1,050.00", status: "Delivered", tracking: "1Z999AA10123456780" },
  { id: "ORD-2024-0082", date: "Nov 1, 2024", items: 15, total: "$2,800.00", status: "Delivered", tracking: "1Z999AA10123456779" },
];

const statusColors: Record<string, string> = {
  Shipped: "#D4AF37",
  Processing: "#C9A227",
  Delivered: "#4A7C59",
  Pending: "#888",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}>
            Distributor Portal
          </p>
          <h1 className="text-3xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
            Order History
          </h1>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-[9px] tracking-[0.15em] uppercase font-semibold transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
        >
          <Plus size={12} /> New Order
        </Link>
      </div>

      <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["Order ID", "Date", "Items", "Total", "Status", "Tracking", ""].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-white/[0.02] transition-colors" style={{ borderColor: "#1A1A12" }}>
                  <td className="px-6 py-4 text-sm font-mono" style={{ color: "#D4AF37" }}>{order.id}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{order.date}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{order.items} SKUs</td>
                  <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#ccc" }}>{order.total}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[8px] tracking-[0.1em] uppercase" style={{ background: `${statusColors[order.status]}18`, color: statusColors[order.status], fontFamily: "var(--font-cinzel), serif" }}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono" style={{ color: "#555" }}>{order.tracking}</td>
                  <td className="px-6 py-4">
                    <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}>
                      <Eye size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
