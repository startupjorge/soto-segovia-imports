import { Eye, Package } from "lucide-react";

const orders = [
  { id: "ORD-2024-0092", client: "Bella Vista Market", date: "Dec 13, 2024", items: 10, total: "$2,100.00", status: "Processing" },
  { id: "ORD-2024-0091", client: "Coastal Luxury Grocers", date: "Dec 12, 2024", items: 15, total: "$3,200.00", status: "Shipped" },
  { id: "ORD-2024-0090", client: "Azure Hospitality Group", date: "Dec 11, 2024", items: 22, total: "$5,800.00", status: "Shipped" },
  { id: "ORD-2024-0089", client: "The Grove Hotel Group", date: "Dec 10, 2024", items: 8, total: "$1,840.00", status: "Delivered" },
  { id: "ORD-2024-0088", client: "La Perla Restaurant Group", date: "Dec 9, 2024", items: 6, total: "$980.00", status: "Delivered" },
  { id: "ORD-2024-0087", client: "The Spanish Table", date: "Dec 8, 2024", items: 4, total: "$620.00", status: "Delivered" },
];

const statusColors: Record<string, string> = {
  Processing: "#C9A227",
  Shipped: "#D4AF37",
  Delivered: "#4A7C59",
  Cancelled: "#C0392B",
};

export default function AdminOrdersPage() {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>All Orders</h1>
          <p className="text-xs mt-1" style={{ color: "#555" }}>{orders.length} orders shown · December 2024</p>
        </div>
      </div>

      <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["Order ID", "Client", "Date", "Items", "Total", "Status", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-white/[0.02]" style={{ borderColor: "#1A1A12" }}>
                  <td className="px-5 py-3.5 text-sm font-mono" style={{ color: "#D4AF37" }}>{order.id}</td>
                  <td className="px-5 py-3.5 text-sm" style={{ color: "#ccc" }}>{order.client}</td>
                  <td className="px-5 py-3.5 text-sm" style={{ color: "#888" }}>{order.date}</td>
                  <td className="px-5 py-3.5 text-sm" style={{ color: "#888" }}>{order.items} SKUs</td>
                  <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#ccc" }}>{order.total}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className="px-2.5 py-1 text-[8px] tracking-[0.1em] uppercase"
                      style={{ background: `${statusColors[order.status]}18`, color: statusColors[order.status], fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}><Eye size={12} /></button>
                      <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}><Package size={12} /></button>
                    </div>
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
