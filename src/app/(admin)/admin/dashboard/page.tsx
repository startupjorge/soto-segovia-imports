import { TrendingUp, ShoppingBag, Users, Package, AlertCircle } from "lucide-react";

const kpis = [
  { icon: <TrendingUp size={18} />, label: "Revenue (MTD)", value: "$124,800", delta: "+18%", positive: true },
  { icon: <ShoppingBag size={18} />, label: "Orders (MTD)", value: "342", delta: "+12%", positive: true },
  { icon: <Users size={18} />, label: "Active Accounts", value: "521", delta: "+5 new", positive: true },
  { icon: <Package size={18} />, label: "Low Stock SKUs", value: "7", delta: "Action needed", positive: false },
];

const recentActivity = [
  { time: "2h ago", event: "New order ORD-2024-0092 placed by Bella Vista Market ($2,100)" },
  { time: "4h ago", event: "Invoice INV-2024-0045 paid by The Grove Hotel Group ($5,400)" },
  { time: "6h ago", event: "New distributor application: Meridian Fine Foods, Chicago IL" },
  { time: "1d ago", event: "Arbequina EVOO restocked — 240 units received from supplier" },
  { time: "1d ago", event: "Order ORD-2024-0091 shipped to Coastal Luxury Grocers" },
  { time: "2d ago", event: "New account created: La Perla Restaurant Group, Miami FL" },
];

export default function AdminDashboard() {
  return (
    <div className="px-8 py-8" style={{ color: "#ccc" }}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
          Admin Dashboard
        </h1>
        <p className="text-xs mt-1" style={{ color: "#555" }}>Friday, December 13, 2024</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map(({ icon, label, value, delta, positive }) => (
          <div key={label} className="p-5 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[8px] tracking-[0.15em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{label}</p>
              <span style={{ color: positive ? "#D4AF37" : "#C0392B" }}>{icon}</span>
            </div>
            <p className="text-2xl font-bold mb-1" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>{value}</p>
            <p className="text-xs" style={{ color: positive ? "#4A7C59" : "#C0392B" }}>{delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity feed */}
        <div className="lg:col-span-2 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
          <div className="px-5 py-4 border-b" style={{ borderColor: "#1E1E14" }}>
            <h2 className="text-sm font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Recent Activity</h2>
          </div>
          <div className="flex flex-col divide-y" style={{ borderColor: "#1E1E14" }}>
            {recentActivity.map(({ time, event }) => (
              <div key={event} className="px-5 py-3.5 flex items-start gap-4">
                <span className="text-[9px] mt-0.5 flex-shrink-0 w-12" style={{ color: "#555" }}>{time}</span>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
          <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "#1E1E14" }}>
            <AlertCircle size={14} style={{ color: "#C0392B" }} />
            <h2 className="text-sm font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Alerts</h2>
          </div>
          <div className="p-5 flex flex-col gap-3">
            {[
              { text: "Arbequina EVOO 500ml: 8 units left", severity: "high" },
              { text: "Hierbas Ibicencas Liqueur: 12 units left", severity: "medium" },
              { text: "3 invoices overdue (>30 days)", severity: "high" },
              { text: "1 new distributor application pending review", severity: "low" },
              { text: "Pedro Ximénez Vinegar: 15 units left", severity: "medium" },
            ].map(({ text, severity }) => (
              <div
                key={text}
                className="px-3 py-2.5 text-xs leading-relaxed border-l-2"
                style={{
                  background: severity === "high" ? "#C0392B10" : severity === "medium" ? "#D4AF3710" : "#4A7C5910",
                  borderColor: severity === "high" ? "#C0392B" : severity === "medium" ? "#D4AF37" : "#4A7C59",
                  color: "#999",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
