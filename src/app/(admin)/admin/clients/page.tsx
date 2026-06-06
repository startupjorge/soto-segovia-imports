import { Search, Plus, Eye } from "lucide-react";

const clients = [
  { id: "ACC-001", name: "Bella Vista Market", type: "Grocery", city: "Miami, FL", ytd: "$28,400", orders: 24, status: "Active", tier: "Gold" },
  { id: "ACC-002", name: "The Grove Hotel Group", type: "Hotel", city: "New York, NY", ytd: "$54,800", orders: 36, status: "Active", tier: "Platinum" },
  { id: "ACC-003", name: "La Perla Restaurant Group", type: "Restaurant", city: "Miami, FL", ytd: "$19,200", orders: 18, status: "Active", tier: "Silver" },
  { id: "ACC-004", name: "Coastal Luxury Grocers", type: "Grocery", city: "Palm Beach, FL", ytd: "$32,000", orders: 28, status: "Active", tier: "Gold" },
  { id: "ACC-005", name: "Meridian Fine Foods", type: "Grocery", city: "Chicago, IL", ytd: "$0", orders: 0, status: "Pending", tier: "—" },
  { id: "ACC-006", name: "Azure Hospitality Group", type: "Hotel", city: "Los Angeles, CA", ytd: "$78,100", orders: 52, status: "Active", tier: "Platinum" },
  { id: "ACC-007", name: "The Spanish Table", type: "Specialty", city: "Seattle, WA", ytd: "$12,400", orders: 11, status: "Active", tier: "Silver" },
];

const tierColors: Record<string, string> = {
  Platinum: "#C0C0C0",
  Gold: "#D4AF37",
  Silver: "#A8A9AD",
  "—": "#444",
};

export default function ClientsPage() {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>Client Accounts</h1>
          <p className="text-xs mt-1" style={{ color: "#555" }}>{clients.length} accounts · {clients.filter((c) => c.status === "Active").length} active</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 text-[9px] tracking-[0.15em] uppercase font-semibold"
          style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
        >
          <Plus size={12} /> Add Account
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#555" }} />
        <input
          type="text"
          placeholder="Search accounts..."
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-transparent border outline-none focus:border-[#D4AF37] transition-colors placeholder-[#333]"
          style={{ borderColor: "#2A2A1A", color: "#ccc" }}
        />
      </div>

      <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["Account ID", "Business Name", "Type", "Location", "YTD Spend", "Orders", "Tier", "Status", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-white/[0.02]" style={{ borderColor: "#1A1A12" }}>
                  <td className="px-5 py-3.5 text-xs font-mono" style={{ color: "#666" }}>{client.id}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#ccc" }}>{client.name}</td>
                  <td className="px-5 py-3.5 text-xs" style={{ color: "#888" }}>{client.type}</td>
                  <td className="px-5 py-3.5 text-xs" style={{ color: "#888" }}>{client.city}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#ccc" }}>{client.ytd}</td>
                  <td className="px-5 py-3.5 text-sm" style={{ color: "#888" }}>{client.orders}</td>
                  <td className="px-5 py-3.5 text-xs font-semibold" style={{ color: tierColors[client.tier] }}>{client.tier}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className="px-2 py-1 text-[8px] tracking-[0.1em] uppercase"
                      style={{
                        background: client.status === "Active" ? "#4A7C5918" : "#D4AF3718",
                        color: client.status === "Active" ? "#4A7C59" : "#D4AF37",
                        fontFamily: "var(--font-cinzel), serif",
                      }}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
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
