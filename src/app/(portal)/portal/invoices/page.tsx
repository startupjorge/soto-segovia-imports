import { Download, Eye } from "lucide-react";

const invoices = [
  { id: "INV-2024-0042", order: "ORD-2024-0087", date: "Dec 10, 2024", due: "Jan 9, 2025", amount: "$1,240.00", status: "Outstanding" },
  { id: "INV-2024-0041", order: "ORD-2024-0086", date: "Dec 3, 2024", due: "Jan 2, 2025", amount: "$2,180.00", status: "Outstanding" },
  { id: "INV-2024-0040", order: "ORD-2024-0085", date: "Nov 28, 2024", due: "Dec 28, 2024", amount: "$890.00", status: "Overdue" },
  { id: "INV-2024-0039", order: "ORD-2024-0084", date: "Nov 20, 2024", due: "Dec 20, 2024", amount: "$3,600.00", status: "Paid" },
  { id: "INV-2024-0038", order: "ORD-2024-0083", date: "Nov 14, 2024", due: "Dec 14, 2024", amount: "$1,050.00", status: "Paid" },
  { id: "INV-2024-0037", order: "ORD-2024-0082", date: "Nov 1, 2024", due: "Dec 1, 2024", amount: "$2,800.00", status: "Paid" },
];

const statusColors: Record<string, string> = {
  Outstanding: "#D4AF37",
  Overdue: "#C0392B",
  Paid: "#4A7C59",
};

export default function InvoicesPage() {
  const outstanding = invoices.filter((i) => i.status !== "Paid");
  const total = outstanding.reduce((sum, i) => sum + parseFloat(i.amount.replace(/[$,]/g, "")), 0);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-10" style={{ background: "#080806" }}>
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
          Invoices
        </h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Outstanding Balance", value: `$${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}`, color: "#D4AF37" },
          { label: "Invoices Due", value: outstanding.length.toString(), color: "#C9A227" },
          { label: "Invoices Paid (YTD)", value: invoices.filter((i) => i.status === "Paid").length.toString(), color: "#4A7C59" },
        ].map(({ label, value, color }) => (
          <div key={label} className="p-6 border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
            <p className="text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{label}</p>
            <p className="text-3xl font-bold" style={{ color, fontFamily: "var(--font-cormorant), serif" }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="border" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "#1E1E14" }}>
          <h2 className="text-base font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>All Invoices</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["Invoice #", "Order #", "Issue Date", "Due Date", "Amount", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b hover:bg-white/[0.02]" style={{ borderColor: "#1A1A12" }}>
                  <td className="px-6 py-4 text-sm font-mono" style={{ color: "#D4AF37" }}>{inv.id}</td>
                  <td className="px-6 py-4 text-sm font-mono" style={{ color: "#888" }}>{inv.order}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{inv.date}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: "#888" }}>{inv.due}</td>
                  <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#ccc" }}>{inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[8px] tracking-[0.1em] uppercase" style={{ background: `${statusColors[inv.status]}18`, color: statusColors[inv.status], fontFamily: "var(--font-cinzel), serif" }}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}><Eye size={12} /></button>
                      <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}><Download size={12} /></button>
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
