import Link from "next/link";
import Image from "next/image";

export default function PatatasBravasPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Tapas · 30 min</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Patatas Bravas</h1>
          <p className="text-sm" style={{ color: "#666" }}>Crispy fried potatoes with a bold, smoky bravas sauce, Spain's most beloved tapa.</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-14">
        <div className="relative aspect-[16/9] overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=1200&q=80"
            alt="Patatas Bravas"
            fill
            style={{ objectFit: "cover" }}
            sizes="800px"
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 p-6 border border-gray-100" style={{ background: "#F8F8F4" }}>
          {[
            { label: "Prep Time", value: "10 min" },
            { label: "Cook Time", value: "20 min" },
            { label: "Servings", value: "4" },
            { label: "Difficulty", value: "Easy" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{s.label}</p>
              <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[13px] font-bold tracking-wider uppercase mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Ingredients</h2>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "#555" }}>
              <li className="text-[11px] font-bold tracking-wider uppercase pt-2 pb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For the Potatoes</li>
              <li>1 kg (2 lbs) starchy potatoes, peeled and cut into 2cm cubes</li>
              <li>Soto &amp; Segovia Garlic Olive Oil, for frying</li>
              <li>Soto &amp; Segovia Paprika Salt, to finish</li>
              <li className="text-[11px] font-bold tracking-wider uppercase pt-4 pb-1" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For the Bravas Sauce</li>
              <li>4 tbsp Soto &amp; Segovia extra virgin olive oil</li>
              <li>1 tsp smoked paprika (pimentón)</li>
              <li>½ tsp hot paprika or cayenne</li>
              <li>2 garlic cloves, minced</li>
              <li>1 tbsp sherry vinegar</li>
              <li>200g (7 oz) crushed tomatoes</li>
              <li>Salt to taste</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wider uppercase mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Instructions</h2>
            <ol className="flex flex-col gap-4 text-sm" style={{ color: "#555" }}>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>1</span>
                <p>Peel and cut potatoes into 2cm cubes. Pat completely dry with paper towels, this is the key to crispiness.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>2</span>
                <p>Heat a generous pour of Soto &amp; Segovia Garlic Olive Oil in a heavy skillet over high heat. Fry the potato cubes in batches until deeply golden and crispy on all sides, about 10–12 minutes. Drain on paper towels.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>3</span>
                <p>In a small saucepan, warm olive oil over medium heat. Add garlic and cook 1 minute. Add both paprikas and stir for 30 seconds.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>4</span>
                <p>Add crushed tomatoes and sherry vinegar. Simmer 10 minutes until thickened. Season with salt.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>5</span>
                <p>Arrange crispy potato cubes on a platter. Spoon bravas sauce generously over the top. Finish with Soto &amp; Segovia Paprika Salt and serve immediately.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 p-6 border-l-2" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
          <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Chef's Tip</p>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>The secret to truly crispy patatas bravas is cutting the potatoes into cubes and drying them completely before frying, no boiling needed. Frying in Soto &amp; Segovia Garlic Olive Oil adds a subtle savory depth, and finishing with Paprika Salt delivers that unmistakable Spanish pimentón character.</p>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/recipes" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>← All Recipes</Link>
          <Link href="/recipes/gambas-al-ajillo" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>Gambas al Ajillo →</Link>
        </div>
      </div>
    </div>
  );
}
