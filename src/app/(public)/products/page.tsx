import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

const allProducts = [
  { name: "Garlic Olive Oil", category: "olive-oils", price: "$99.00 – $179.00 per box", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80", description: "Infused with fresh Spanish garlic for a rich, savory flavor." },
  { name: "Truffle Olive Oil", category: "olive-oils", price: "$149.00 – $279.00 per box", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80", description: "Luxurious black truffle infused extra virgin olive oil." },
  { name: "Lemon Olive Oil", category: "olive-oils", price: "$99.00 – $179.00 per box", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80", description: "Bright citrus notes from cold-pressed Spanish lemons." },
  { name: "Rosemary Olive Oil", category: "infused-oils", price: "$99.00 – $179.00 per box", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80", description: "Fresh rosemary from the hills of Altea, Spain." },
  { name: "Fleur de Sel", category: "salts", price: "$59.00 – $119.00 per box", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=600&q=80", description: "Hand-harvested sea salt from the Spanish coastline." },
  { name: "Smoked Salt", category: "salts", price: "$59.00 – $119.00 per box", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=600&q=80", description: "Cold-smoked over Spanish oak for a deep, smoky finish." },
  { name: "Sherry Vinegar", category: "vinegars", price: "$99.00 – $199.00 per box", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80", description: "Aged 10+ years in oak barrels in Jerez, Spain." },
  { name: "Fig Balsamic", category: "vinegars", price: "$99.00 – $179.00 per box", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80", description: "Sweet fig reduction with aged Spanish balsamic." },
  { name: "Gourmet Gift Box — Olive Oil", category: "gifts", price: "$149.00 – $299.00", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80", description: "A curated selection of our finest olive oils, beautifully boxed." },
  { name: "Executive Gift Basket", category: "baskets", price: "$199.00 – $399.00", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80", description: "Premium assortment of oils, salts, and vinegars for the discerning palate." },
];

const categories = [
  { slug: "all", label: "All Products" },
  { slug: "olive-oils", label: "Olive Oils" },
  { slug: "infused-oils", label: "Infused Oils" },
  { slug: "salts", label: "Salts" },
  { slug: "vinegars", label: "Vinegars" },
  { slug: "gifts", label: "Gift Boxes" },
  { slug: "baskets", label: "Baskets" },
];

export default function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="border-b border-gray-100 py-8 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Products</h1>
          <p className="text-sm" style={{ color: "#666" }}>Premium gourmet foods imported directly from Spain</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Category filters */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <SlidersHorizontal size={16} className="text-gray-500 mr-1" />
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === "all" ? "/products" : `/products?category=${cat.slug}`}
              className="px-4 py-1.5 text-[11px] tracking-wider border transition-all hover:border-[#C9A227] hover:text-[#C9A227]"
              style={{ fontFamily: "var(--font-cinzel), serif", borderColor: "#ddd", color: "#555" }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div key={product.name} className="flex flex-col border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[14px] mb-1.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{product.name}</h3>
                <p className="text-[12px] font-semibold mb-2" style={{ color: "#C9A227" }}>{product.price}</p>
                <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: "#777" }}>{product.description}</p>
                <button className="w-full py-2 text-[11px] font-bold tracking-wider border border-[#1A1A1A] hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-white transition-all" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
