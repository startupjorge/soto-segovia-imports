import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { categories, products } from "@/lib/data";
import { productImages } from "@/lib/images";

export const metadata = {
  title: "Products | Soto & Segovia Imports",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>;
}) {
  const { category, sort } = await searchParams;

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  const sorted =
    sort === "price-asc"
      ? [...filtered].sort((a, b) => a.price - b.price)
      : sort === "price-desc"
      ? [...filtered].sort((a, b) => b.price - a.price)
      : filtered;

  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <div className="pt-28 min-h-screen" style={{ background: "#0A0A08" }}>
      {/* Page header */}
      <div
        className="py-16 text-center border-b"
        style={{ borderColor: "#1E1E14", background: "#0D0D0A" }}
      >
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-3"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          Artisan Imports from Spain
        </p>
        <h1
          className="text-5xl font-bold"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          {activeCategory ? activeCategory.label : "All Products"}
        </h1>
        {sorted.length > 0 && (
          <p className="mt-2 text-sm" style={{ color: "#555" }}>
            {sorted.length} product{sorted.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          <Link
            href="/products"
            className="px-4 py-2 text-[9px] tracking-[0.15em] uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{
              borderColor: !category ? "#D4AF37" : "#2A2A1A",
              color: !category ? "#D4AF37" : "#666",
              fontFamily: "var(--font-cinzel), serif",
            }}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="px-4 py-2 text-[9px] tracking-[0.15em] uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{
                borderColor: category === cat.slug ? "#D4AF37" : "#2A2A1A",
                color: category === cat.slug ? "#D4AF37" : "#666",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group flex flex-col border transition-all duration-300 hover:border-[#D4AF37]/50 overflow-hidden"
              style={{ background: "#0F0F0C", borderColor: "#1E1E18" }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={productImages[product.category]}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark tint */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2 py-1 text-[7px] tracking-[0.15em] uppercase"
                    style={{
                      background: "rgba(0,0,0,0.75)",
                      color: "#D4AF37",
                      fontFamily: "var(--font-cinzel), serif",
                      border: "1px solid rgba(212,175,55,0.3)",
                    }}
                  >
                    {categories.find((c) => c.slug === product.category)?.label}
                  </span>
                </div>
                {/* Quick add overlay on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 text-[9px] tracking-[0.15em] uppercase font-bold"
                    style={{
                      background: "linear-gradient(135deg, #8B6914, #C9A227, #D4AF37)",
                      color: "#000",
                      fontFamily: "var(--font-cinzel), serif",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingCart size={12} />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p
                  className="text-[8px] tracking-[0.15em] uppercase mb-1.5"
                  style={{ color: "#666", fontFamily: "var(--font-cinzel), serif" }}
                >
                  {product.origin}
                </p>
                <h3
                  className="text-lg font-semibold leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "#555" }}>
                  {product.description.slice(0, 90)}…
                </p>
                <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "#1E1E18" }}>
                  <span
                    className="text-2xl font-bold gold-text"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <span
                    className="text-[8px] tracking-[0.1em] uppercase"
                    style={{ color: "#444", fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {product.details[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
