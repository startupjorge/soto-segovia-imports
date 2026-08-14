"use client";

import Image from "next/image";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

const allProducts = [
  // ── Olive Oils ──────────────────────────────────────────────
  {
    name: "Garlic Olive Oil",
    nameEs: "Aceite de Ajo",
    category: "olive-oils",
    image: "/products/ACEITE DE AJO.jpg",
    description: "Extra virgin olive oil delicately infused with fresh Spanish garlic. Rich, savory, and versatile — ideal for finishing, dipping, and cooking.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Chili Olive Oil",
    nameEs: "Aceite de Guindillas",
    category: "olive-oils",
    image: "/products/ACEITE DE GUINDILLAS.jpg",
    description: "Extra virgin olive oil infused with Spanish guindilla peppers. A warm, gentle heat that elevates any dish with bold character.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Lemon Olive Oil",
    nameEs: "Aceite de Limón",
    category: "olive-oils",
    image: "/products/ACEITE DE LIMÓN.jpg",
    description: "Bright, citrusy extra virgin olive oil cold-pressed with fresh Spanish lemons. Perfect for salads, fish, and Mediterranean cuisine.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Rosemary Olive Oil",
    nameEs: "Aceite de Romero",
    category: "olive-oils",
    image: "/products/ACEITE DE ROMERO.jpg",
    description: "Extra virgin olive oil infused with fresh rosemary from the hills of Altea. Fragrant, herbaceous, and deeply Spanish.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Truffle Olive Oil",
    nameEs: "Aceite de Trufa",
    category: "olive-oils",
    image: "/products/ACEITE DE TRUFA.jpg",
    description: "Luxurious extra virgin olive oil infused with black truffle. An extraordinary ingredient for those who appreciate the finest flavors.",
    producer: "Príncipe Azahar · Altea, Spain",
  },

  // ── Salts ────────────────────────────────────────────────────
  {
    name: "Garlic Salt",
    nameEs: "Sal Ajo",
    category: "salts",
    image: "/products/SAL AJO.jpg",
    description: "Natural flake sea salt from Altea blended with aromatic Spanish garlic. A finishing salt that adds depth to any dish.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "BBQ Salt",
    nameEs: "Sal Barbacoa",
    category: "salts",
    image: "/products/SAL BARBACOA.jpg",
    description: "Smoky, bold artisan salt crafted for grilling. A must-have for meats, vegetables, and outdoor cooking.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "White Salt",
    nameEs: "Sal Blanca",
    category: "salts",
    image: "/products/SAL BLANCA.jpg",
    description: "Pure, hand-harvested natural flake sea salt from the Spanish coastline. Clean, bright, and exceptionally versatile.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Onion Salt",
    nameEs: "Sal Cebolla",
    category: "salts",
    image: "/products/SAL CEBOLLA.jpg",
    description: "Artisan flake salt infused with sweet Spanish onion. Delicate yet full-flavored — wonderful on meats, soups, and vegetables.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Curry Salt",
    nameEs: "Sal Curry",
    category: "salts",
    image: "/products/SAL CURRY.jpg",
    description: "Natural sea salt blended with warm curry spices. A distinctive, aromatic finishing salt with golden color and exotic character.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Lemon Salt",
    nameEs: "Sal Limón",
    category: "salts",
    image: "/products/SAL LIMÓN.jpg",
    description: "Bright, citrus-infused artisan flake salt. Exceptional on seafood, salads, and fresh vegetables.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Mint Salt",
    nameEs: "Sal Menta",
    category: "salts",
    image: "/products/SAL MENTA.jpg",
    description: "Refreshing natural flake salt delicately blended with fresh mint. Unique and elegant — ideal for lamb, desserts, and cocktails.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Orange Salt",
    nameEs: "Sal Naranja",
    category: "salts",
    image: "/products/SAL NARANJA.jpg",
    description: "Artisan sea salt infused with Spanish orange zest. Sweet, citrusy, and surprising — a favorite for duck, fish, and chocolate.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Black Salt",
    nameEs: "Sal Negra",
    category: "salts",
    image: "/products/SAL NEGRA.jpg",
    description: "Striking jet-black artisan salt with a mineral richness. A dramatic finishing salt for elegant presentations.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Oregano Salt",
    nameEs: "Sal Orégano",
    category: "salts",
    image: "/products/SAL ORÉGANO.jpg",
    description: "Mediterranean flake salt blended with wild Spanish oregano. Classic, aromatic, and essential for any Spanish kitchen.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Paprika Salt",
    nameEs: "Sal Pimentón",
    category: "salts",
    image: "/products/SAL PIMENTÓN.jpg",
    description: "Rich artisan salt infused with Spanish smoked paprika (pimentón). Deeply smoky, vibrant, and unmistakably Iberian.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Rose Salt",
    nameEs: "Sal Rosas",
    category: "salts",
    image: "/products/SAL ROSAS.jpg",
    description: "Delicate pink flake salt with subtle floral notes. Beautiful in presentation and gentle in flavor — a truly refined finishing salt.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Rosemary Salt",
    nameEs: "Sal Romero",
    category: "salts",
    image: "/products/SAL ROMERO.jpg",
    description: "Natural sea salt blended with fragrant rosemary from Altea. Perfect for roasted meats, potatoes, and rustic breads.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Wild Salt",
    nameEs: "Sal Salvaje",
    category: "salts",
    image: "/products/SAL SALVAJE.jpg",
    description: "Unrefined wild-harvested flake sea salt from the Spanish coast. Pure, mineral-rich, and extraordinary.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Liquid Wild Salt",
    nameEs: "Sal Salvaje Líquida",
    category: "salts",
    image: "/products/SAL SALVAJE LÍQUIDA.jpg",
    description: "Wild sea salt in liquid form — an innovative way to season with precision and elegance. Perfect for finishing and marinades.",
    producer: "Princesa Azahar · Altea, Spain",
  },
  {
    name: "Tomato Salt",
    nameEs: "Sal Tomate",
    category: "salts",
    image: "/products/SAL TOMATE.jpg",
    description: "Vibrant artisan salt infused with sun-ripened Spanish tomato. Exceptional on eggs, salads, grilled meats, and fresh mozzarella.",
    producer: "Princesa Azahar · Altea, Spain",
  },

  // ── Vinegars ─────────────────────────────────────────────────
  {
    name: "Pomegranate Vinegar",
    nameEs: "Vinagre Granada",
    category: "vinegars",
    image: "/products/VINAGRE GRANADA.jpg",
    description: "Aged Spanish vinegar with the rich, jewel-like flavor of pomegranate. A striking ingredient for dressings, reductions, and gourmet cooking.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Fig Vinegar",
    nameEs: "Vinagre Higos",
    category: "vinegars",
    image: "/products/VINAGRE HIGOS.jpg",
    description: "Slow-aged vinegar with the lush sweetness of Spanish figs. Beautiful in salads, cheese pairings, and charcuterie.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Lemon Vinegar",
    nameEs: "Vinagre Limón",
    category: "vinegars",
    image: "/products/VINAGRE LIMÓN.jpg",
    description: "Bright, tangy vinegar with vibrant Spanish lemon. A refreshing complement to seafood, greens, and light Mediterranean dishes.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Orange Vinegar",
    nameEs: "Vinagre Naranja",
    category: "vinegars",
    image: "/products/VINAGRE NARANJA.jpg",
    description: "Aged 11 years. A Reserva-grade artisan vinegar with the warm, citrus complexity of Spanish orange. 200ml · 4.9° AC.",
    producer: "Príncipe Azahar · Altea, Spain",
  },
  {
    name: "Vanilla Vinegar",
    nameEs: "Vinagre Vainilla",
    category: "vinegars",
    image: "/products/VINAGRE VAINILLA.jpg",
    description: "An exquisite aged vinegar with delicate vanilla warmth. Extraordinary on desserts, strawberries, and fine cheese.",
    producer: "Príncipe Azahar · Altea, Spain",
  },

  // ── Orange Wine ───────────────────────────────────────────────
  {
    name: "Orange Wine",
    nameEs: "Vino de Naranja",
    category: "wine",
    image: "/products/VINO DE NARANJA.jpg",
    description: "BSG Príncipe Azahar Orange Wine. A signature expression from Altea — elegant, golden, and uniquely Spanish. 500ml · 12.5% vol.",
    producer: "Bodegas Sendra González · Altea, Spain",
  },
  {
    name: "Orange Wine (Mini)",
    nameEs: "Vino Naranja 100 ML",
    category: "wine",
    image: "/products/VINO NARANJA 100 ML.jpg",
    description: "The iconic Príncipe Azahar Orange Wine in a 100ml miniature — perfect for gifting, tasting, and curated collections.",
    producer: "Bodegas Sendra González · Altea, Spain",
  },

  // ── Spirits ───────────────────────────────────────────────────
  {
    name: "Matticello",
    nameEs: "Matticello",
    category: "spirits",
    image: "/products/MATTICELLO.jpg",
    description: "A distinctive Spanish cream liqueur from Altea. Served chilled or on the rocks. 500ml · 18% vol. Product of Spain.",
    producer: "Bodegas Sendra González · Altea, Spain",
  },
];

const categories = [
  { slug: "all",       label: "All Products" },
  { slug: "olive-oils", label: "Olive Oils" },
  { slug: "salts",     label: "Salts" },
  { slug: "vinegars",  label: "Vinegars" },
  { slug: "wine",      label: "Orange Wine" },
  { slug: "spirits",   label: "Spirits" },
];

export default function ProductsPage() {
  const [active, setActive] = useState("all");
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const filtered = active === "all" ? allProducts : allProducts.filter(p => p.category === active);

  return (
    <div className="bg-white min-h-screen">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Príncipe Azahar · Altea, Spain</p>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Our Products</h1>
          <p className="text-sm" style={{ color: "#666" }}>Premium gourmet foods imported directly from Spain</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Category filters */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <SlidersHorizontal size={16} className="text-gray-400 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className="px-4 py-1.5 text-[11px] tracking-wider border transition-all"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                borderColor: active === cat.slug ? "#C9A227" : "#ddd",
                color: active === cat.slug ? "#C9A227" : "#555",
                background: active === cat.slug ? "#fffdf5" : "transparent",
              }}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-[11px]" style={{ color: "#aaa" }}>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.name} className="flex flex-col border border-gray-100 hover:border-[#C9A227] hover:shadow-md transition-all group">
              <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain", padding: "16px" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[10px] tracking-wider uppercase mb-0.5 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{product.nameEs}</p>
                <h3 className="font-bold text-[13px] mb-1.5 leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{product.name}</h3>
                <p className="text-[11px] leading-relaxed mb-3 flex-1" style={{ color: "#777" }}>{product.description}</p>
                <p className="text-[10px] mb-4" style={{ color: "#bbb" }}>{product.producer}</p>
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="w-full py-2.5 text-[11px] font-bold tracking-wider border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-all"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm mb-4" style={{ color: "#777" }}>Pricing and availability will be announced at launch. Join our waitlist for early access.</p>
          <button
            onClick={() => setWaitlistOpen(true)}
            className="px-10 py-3 font-bold text-[12px] tracking-wider text-white hover:opacity-90 transition-all"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
