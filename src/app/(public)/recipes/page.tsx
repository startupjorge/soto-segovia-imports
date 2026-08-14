import Image from "next/image";
import Link from "next/link";

const recipes = [
  { title: "Patatas Bravas", category: "Tapas", time: "30 min", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80", slug: "patatas-bravas" },
  { title: "Gambas al Ajillo", category: "Tapas", time: "15 min", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", slug: "gambas-al-ajillo" },
  { title: "Truffle Olive Oil Pasta", category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1551183053-bf91798d702b?w=600&q=80", slug: "truffle-pasta" },
  { title: "Sherry Vinegar Glazed Chicken", category: "Main Course", time: "40 min", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80", slug: "sherry-chicken" },
  { title: "Fleur de Sel Chocolate Bark", category: "Dessert", time: "30 min", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80", slug: "chocolate-bark" },
  { title: "Lemon Olive Oil Cake", category: "Dessert", time: "55 min", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", slug: "lemon-cake" },
  { title: "Spanish Pan Con Tomate", category: "Tapas", time: "10 min", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80", slug: "pan-con-tomate" },
];

export default function RecipesPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Culinary Inspiration</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Recipes</h1>
          <p className="text-sm" style={{ color: "#666" }}>Bring the flavors of Spain to your table with our curated recipe collection.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="group block border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-50">
                <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-wider uppercase font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{recipe.category}</span>
                  <span className="text-[11px]" style={{ color: "#999" }}>{recipe.time}</span>
                </div>
                <h3 className="font-bold text-[14px] leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{recipe.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
