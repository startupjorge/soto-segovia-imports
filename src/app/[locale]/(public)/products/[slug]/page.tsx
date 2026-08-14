import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts } from "@/lib/products";
import { allRecipes } from "@/lib/recipes";
import WaitlistButton from "@/app/(public)/products/[slug]/WaitlistButton";

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.nameEs} · Soto & Segovia Imports`,
    description: product.description,
  };
}

const categoryLabel: Record<string, string> = {
  "olive-oils": "Aceites de Oliva",
  salts: "Sales Artesanas",
  vinegars: "Vinagres",
  wine: "Vino de Naranja",
  spirits: "Licores",
};

export default async function ProductDetailPageES({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = allProducts
    .filter((p) => p.category === product!.category && p.slug !== product!.slug)
    .slice(0, 3);

  const relatedRecipes = allRecipes.filter((r) =>
    r.products.some((rp) => rp.toLowerCase() === product!.name.toLowerCase())
  );

  const p = product!;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-2 text-[11px]" style={{ color: "#aaa", fontFamily: "var(--font-cinzel), serif" }}>
          <Link href="/es/products" className="hover:text-[#C9A227] transition-colors">Nuestros Productos</Link>
          <span>/</span>
          <span style={{ color: "#C9A227" }}>{categoryLabel[p.category] ?? p.category}</span>
          <span>/</span>
          <span style={{ color: "#1A1A1A" }}>{p.nameEs}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="bg-white max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-square overflow-hidden bg-gray-50 border border-gray-100">
            <Image src={p.image} alt={p.nameEs} fill style={{ objectFit: "contain", padding: "24px" }} sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                {categoryLabel[p.category] ?? p.category}
              </p>
              <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                {p.nameEs}
              </h1>
              <p className="text-[16px] italic" style={{ color: "#888" }}>{p.name}</p>
            </div>

            <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>{p.longDescription}</p>

            <div className="border-t border-b border-gray-100 py-5 flex flex-col gap-3">
              <div className="flex gap-3">
                <span className="text-[10px] font-bold tracking-wider uppercase w-24 flex-shrink-0" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Productor</span>
                <span className="text-[13px]" style={{ color: "#444" }}>{p.producer}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[10px] font-bold tracking-wider uppercase w-24 flex-shrink-0" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Origen</span>
                <span className="text-[13px]" style={{ color: "#444" }}>{p.origin}</span>
              </div>
            </div>

            {p.pairings.length > 0 && (
              <div>
                <p className="text-[10px] font-bold tracking-wider uppercase mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Maridaje</p>
                <div className="flex flex-wrap gap-2">
                  {p.pairings.map((pair) => (
                    <span key={pair} className="px-3 py-1 text-[11px] border border-gray-200" style={{ color: "#666" }}>{pair}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-2">
              <WaitlistButton productName={p.nameEs} />
              <p className="text-center text-[11px] mt-3" style={{ color: "#aaa" }}>
                Aceptamos pedidos anticipados para clientes selectos, distribuidores y minoristas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipes */}
      {relatedRecipes.length > 0 && (
        <div className="border-t border-gray-100 max-w-[1200px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold mb-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Recetas con Este Producto
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedRecipes.map((recipe) => (
              <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="group flex gap-4 border border-gray-100 p-4 hover:shadow-md transition-shadow items-center">
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-gray-50">
                  <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: "cover" }} sizes="80px" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-[10px] tracking-wider uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{recipe.category} · {recipe.time}</p>
                  <p className="font-bold text-[13px] leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{recipe.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-gray-100" style={{ background: "#F8F8F4" }}>
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold mb-8 text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              Más de Esta Colección
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/es/products/${rel.slug}`} className="group block bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "3/4" }}>
                    <Image src={rel.image} alt={rel.nameEs} fill style={{ objectFit: "contain", padding: "16px" }} sizes="(max-width: 640px) 100vw, 33vw" className="group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-[13px] mb-0.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{rel.nameEs}</p>
                    <p className="text-[11px] italic" style={{ color: "#aaa" }}>{rel.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white max-w-[1200px] mx-auto px-6 py-8">
        <Link href="/es/products" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
          ← Todos los Productos
        </Link>
      </div>
    </>
  );
}
