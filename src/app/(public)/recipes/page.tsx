"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

const recipes = [
  // Tapas
  { title: "Patatas Bravas", category: "Tapas", time: "30 min", image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600&q=80", slug: "patatas-bravas", product: "Garlic Olive Oil + Paprika Salt" },
  { title: "Gambas al Ajillo", category: "Tapas", time: "15 min", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", slug: "gambas-al-ajillo", product: "Garlic Olive Oil" },
  { title: "Sasha's Salted Mangos", category: "Dessert", time: "5 min", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80", slug: "sashas-salted-mangos", product: "Mint Salt" },
  { title: "Spanish Pan Con Tomate", category: "Tapas", time: "10 min", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80", slug: "pan-con-tomate", product: "Tomato Salt + Garlic Olive Oil" },
  { title: "Garlic Olive Oil Bruschetta", category: "Tapas", time: "10 min", image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=600&q=80", slug: "garlic-bruschetta", product: "Garlic Olive Oil + Wild Salt" },
  // Mains
  { title: "Orange Wine Mussels", category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80", slug: "orange-wine-mussels", product: "Orange Wine + Lemon Olive Oil" },
  { title: "Truffle Olive Oil Pasta", category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1551183053-bf91798d702b?w=600&q=80", slug: "truffle-pasta", product: "Truffle Olive Oil + Rose Salt" },
  { title: "Fig Vinegar Glazed Chicken", category: "Main Course", time: "40 min", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80", slug: "fig-chicken", product: "Fig Vinegar + Rosemary Salt" },
  { title: "Lemon Salt Grilled Salmon", category: "Main Course", time: "20 min", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80", slug: "lemon-salmon", product: "Lemon Olive Oil + Lemon Salt" },
  { title: "Orange Vinegar Duck Breast", category: "Main Course", time: "35 min", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80", slug: "orange-duck", product: "Orange Vinegar + Orange Salt" },
  { title: "Rosemary Focaccia", category: "Bread", time: "45 min", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80", slug: "rosemary-focaccia", product: "Rosemary Olive Oil + Rosemary Salt" },
  // Desserts
  { title: "Lemon Olive Oil Cake", category: "Dessert", time: "55 min", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", slug: "lemon-cake", product: "Lemon Olive Oil" },
  { title: "Vanilla Vinegar Strawberries", category: "Dessert", time: "10 min", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80", slug: "vanilla-strawberries", product: "Vanilla Vinegar + Rose Salt" },
  { title: "Fleur de Sel Chocolate Bark", category: "Dessert", time: "30 min", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80", slug: "chocolate-bark", product: "Black Salt" },
];

function SubmitRecipeModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", recipeName: "", description: "" });
  const [sent, setSent] = useState(false);

  const set = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [f]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:sales@sotosegoviaimports.com?subject=Recipe Submission: ${encodeURIComponent(form.recipeName)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nRecipe: ${form.recipeName}\n\n${form.description}`
    )}`;
    setSent(true);
  }

  const inputClass = "border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#C9A227] transition-colors";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8" style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-md bg-white shadow-2xl" style={{ borderTop: "3px solid #C9A227" }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#C9A227] transition-colors"><X size={18} /></button>
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Submit Your Recipe</h2>
          <p className="text-[13px] mb-6" style={{ color: "#777" }}>Share your favorite recipe using Soto &amp; Segovia products.</p>
        </div>
        {sent ? (
          <div className="px-8 pb-10 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#C9A227" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p className="text-[15px] font-semibold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Thank you! Your email client will open to send your recipe.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Your Name *</label>
                <input required value={form.name} onChange={set("name")} className={inputClass} style={{ color: "#1A1A1A" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Email *</label>
                <input required type="email" value={form.email} onChange={set("email")} className={inputClass} style={{ color: "#1A1A1A" }} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Recipe Name *</label>
              <input required value={form.recipeName} onChange={set("recipeName")} className={inputClass} style={{ color: "#1A1A1A" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Your Recipe *</label>
              <textarea required rows={5} value={form.description} onChange={set("description")} placeholder="Ingredients and instructions..." className={`${inputClass} resize-none`} style={{ color: "#1A1A1A" }} />
            </div>
            <button type="submit" className="mt-1 px-8 py-3 font-bold text-sm bg-[#1A1A1A] text-white hover:bg-[#C9A227] transition-all" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Submit Recipe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function RecipesPage() {
  const [submitOpen, setSubmitOpen] = useState(false);

  return (
    <div className="bg-white">
      {submitOpen && <SubmitRecipeModal onClose={() => setSubmitOpen(false)} />}

      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Culinary Inspiration</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Gourmet Recipes</h1>
          <p className="text-sm mb-5" style={{ color: "#666" }}>Bring the flavors of Spain to your table using our premium gourmet products.</p>
          <button
            onClick={() => setSubmitOpen(true)}
            className="inline-block px-8 py-2.5 text-[11px] font-bold tracking-wider border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-all"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Submit Your Gourmet Recipe
          </button>
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
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] tracking-wider uppercase font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{recipe.category}</span>
                  <span className="text-[11px]" style={{ color: "#999" }}>{recipe.time}</span>
                </div>
                <h3 className="font-bold text-[14px] leading-snug mb-1.5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{recipe.title}</h3>
                <p className="text-[10px]" style={{ color: "#bbb" }}>Uses: {recipe.product}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
