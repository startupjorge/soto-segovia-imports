import { products, categories } from "@/lib/data";
import { Plus, Edit, AlertTriangle } from "lucide-react";

const inventory = products.map((p, i) => ({
  ...p,
  sku: `SSI-${String(p.id).padStart(4, "0")}`,
  stock: [240, 180, 95, 60, 120, 40, 200, 75, 88, 30, 55, 20, 45, 25][i] ?? 50,
  reorderAt: 30,
}));

export default function InventoryPage() {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}>
            Inventory Management
          </h1>
          <p className="text-xs mt-1" style={{ color: "#555" }}>{inventory.length} SKUs across {categories.length} categories</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 text-[9px] tracking-[0.15em] uppercase font-semibold"
          style={{ background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)", color: "#000", fontFamily: "var(--font-cinzel), serif" }}
        >
          <Plus size={12} /> Add Product
        </button>
      </div>

      <div className="border overflow-hidden" style={{ background: "#0D0D0A", borderColor: "#2A2A1A" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E1E14" }}>
                {["SKU", "Product", "Category", "Price", "Stock", "Status", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-[8px] tracking-[0.2em] uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const isLow = item.stock <= item.reorderAt;
                const cat = categories.find((c) => c.slug === item.category);
                return (
                  <tr key={item.id} className="border-b hover:bg-white/[0.02]" style={{ borderColor: "#1A1A12" }}>
                    <td className="px-5 py-3.5 text-xs font-mono" style={{ color: "#666" }}>{item.sku}</td>
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="text-sm" style={{ color: "#ccc" }}>{item.name}</p>
                        <p className="text-xs" style={{ color: "#555" }}>{item.origin}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: "#888" }}>{cat?.label}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#ccc" }}>${item.price.toFixed(2)}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold" style={{ color: isLow ? "#C0392B" : "#ccc" }}>{item.stock}</span>
                        {isLow && <AlertTriangle size={12} style={{ color: "#C0392B" }} />}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className="px-2 py-1 text-[8px] tracking-[0.1em] uppercase"
                        style={{
                          background: item.stock === 0 ? "#C0392B18" : isLow ? "#D4AF3718" : "#4A7C5918",
                          color: item.stock === 0 ? "#C0392B" : isLow ? "#D4AF37" : "#4A7C59",
                          fontFamily: "var(--font-cinzel), serif",
                        }}
                      >
                        {item.stock === 0 ? "Out of Stock" : isLow ? "Low Stock" : "In Stock"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="p-1.5 border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]" style={{ borderColor: "#2A2A1A", color: "#555" }}>
                        <Edit size={12} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
