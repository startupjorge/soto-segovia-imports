import Image from "next/image";
import Link from "next/link";
import { allProducts, categories } from "@/lib/products";

export const metadata = {
  title: "Nuestros Productos | Soto & Segovia Imports",
  description: "Aceites de oliva, sales artesanas, vinagres y vinos de naranja de España. Colección completa de Príncipe Azahar.",
};

export default async function ProductsPageES({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filtered = category && category !== "all"
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  const catLabels: Record<string, string> = {
    "olive-oils": "Aceites de Oliva",
    salts: "Sales Artesanas",
    vinegars: "Vinagres",
    wine: "Vino de Naranja",
    spirits: "Licores",
  };

  const catLabelsES: Record<string, string> = {
    all: "Todos",
    "olive-oils": "Aceites de Oliva",
    salts: "Sales",
    vinegars: "Vinagres",
    wine: "Vino de Naranja",
    spirits: "Licores",
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Príncipe Azahar · Altea, España</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Nuestros Productos</h1>
          <p className="text-sm" style={{ color: "#666" }}>Aceites de oliva virgen extra, sales artesanas, vinagres envejecidos y vino de naranja de la costa mediterránea española.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[{ slug: "all", label: "Todos" }, ...categories.filter(c => c.slug !== "all").map(c => ({ slug: c.slug, label: catLabelsES[c.slug] ?? c.label }))].map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === "all" ? "/es/products" : `/es/products?category=${cat.slug}`}
              className="px-4 py-2 text-[10px] tracking-widest uppercase border transition-all hover:border-[#C9A227] hover:text-[#C9A227]"
              style={{
                borderColor: (category === cat.slug || (!category && cat.slug === "all")) ? "#C9A227" : "#e5e5e5",
                color: (category === cat.slug || (!category && cat.slug === "all")) ? "#C9A227" : "#888",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/es/products/${product.slug}`}
              className="group flex flex-col border border-gray-100 hover:border-[#C9A227] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.nameEs}
                  fill
                  style={{ objectFit: "contain", padding: "16px" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[9px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                  {catLabels[product.category] ?? product.category}
                </p>
                <h3 className="font-bold text-[13px] mb-1 group-hover:text-[#C9A227] transition-colors" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                  {product.nameEs}
                </h3>
                <p className="text-[11px] italic mb-2" style={{ color: "#aaa" }}>{product.name}</p>
                <p className="text-[11px] leading-relaxed line-clamp-2" style={{ color: "#777" }}>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
