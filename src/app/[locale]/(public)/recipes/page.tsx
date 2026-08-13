import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import { recipes } from "@/lib/data";

export const metadata = { title: "Recipes | Soto & Segovia Imports" };

export default function RecipesPage() {
  const categories = ["All", "Starters", "Mains", "Sides", "Salads", "Desserts"];

  return (
    <div className="pt-24 min-h-screen" style={{ background: "#0A0A08" }}>
      <section
        className="py-20 text-center border-b"
        style={{
          background: "radial-gradient(ellipse at center, #1a1810 0%, #080806 100%)",
          borderColor: "#1E1E14",
        }}
      >
        <p
          className="text-[9px] tracking-[0.3em] uppercase mb-4"
          style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
        >
          Culinary Inspiration
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
        >
          Bring Spain to Your Table
        </h1>
        <p className="max-w-lg mx-auto text-sm px-6" style={{ color: "#666" }}>
          Chef-crafted recipes designed to showcase the extraordinary flavors of our imported
          products. Simple preparations, exceptional results.
        </p>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 text-[9px] tracking-[0.15em] uppercase border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{
                borderColor: cat === "All" ? "#D4AF37" : "#2A2A1A",
                color: cat === "All" ? "#D4AF37" : "#666",
                fontFamily: "var(--font-cinzel), serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.slug}`}
              className="group border overflow-hidden transition-all hover:border-[#D4AF37]/60"
              style={{ background: "#0F0F0C", borderColor: "#1E1E18" }}
            >
              {/* Image */}
              <div
                className="aspect-video flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #141410, #1E1E18)" }}
              >
                {["🫒", "🥗", "🦐", "🍅", "🥬"][recipe.id - 1]}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(212,175,55,0.15) 100%)",
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[8px] tracking-[0.2em] uppercase px-2 py-1"
                    style={{
                      background: "#1E1C10",
                      color: "#D4AF37",
                      fontFamily: "var(--font-cinzel), serif",
                    }}
                  >
                    {recipe.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px]" style={{ color: "#555" }}>
                    <Clock size={10} /> {recipe.time}
                  </span>
                  <span className="flex items-center gap-1 text-[10px]" style={{ color: "#555" }}>
                    <ChefHat size={10} /> {recipe.difficulty}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-cormorant), serif" }}
                >
                  {recipe.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: "#666" }}>
                  {recipe.description}
                </p>
                <p
                  className="text-[9px] tracking-[0.1em] uppercase"
                  style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel), serif" }}
                >
                  Featured: {recipe.product}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
