import Link from "next/link";
import Image from "next/image";

export default function GambasAlAjilloPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Tapas · 15 min</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Gambas al Ajillo</h1>
          <p className="text-sm" style={{ color: "#666" }}>Sizzling garlic shrimp in olive oil with a touch of chili — a classic Spanish tapa from Madrid.</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-14">
        <div className="relative aspect-[16/9] overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80"
            alt="Gambas al Ajillo"
            fill
            style={{ objectFit: "cover" }}
            sizes="800px"
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 p-6 border border-gray-100" style={{ background: "#F8F8F4" }}>
          {[
            { label: "Prep Time", value: "5 min" },
            { label: "Cook Time", value: "10 min" },
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
              <li>500g (1 lb) large raw shrimp, peeled and deveined</li>
              <li>100ml (⅓ cup) Soto &amp; Segovia extra virgin olive oil</li>
              <li>6 garlic cloves, thinly sliced</li>
              <li>1–2 dried chili peppers (guindillas), crumbled</li>
              <li>½ tsp smoked paprika (pimentón)</li>
              <li>A splash of dry sherry or white wine (optional)</li>
              <li>Fresh flat-leaf parsley, chopped</li>
              <li>Flaky sea salt to taste</li>
              <li>Crusty bread, to serve</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wider uppercase mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Instructions</h2>
            <ol className="flex flex-col gap-4 text-sm" style={{ color: "#555" }}>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>1</span>
                <p>Pat shrimp dry with paper towels and season lightly with salt.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>2</span>
                <p>Pour olive oil into a small heavy skillet or cazuela (earthenware dish) over medium heat. Add garlic and chili. Cook gently until garlic turns golden, about 2–3 minutes — do not let it burn.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>3</span>
                <p>Raise heat to high. Add shrimp in a single layer. Cook 1–2 minutes per side until pink and just cooked through.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>4</span>
                <p>Add a splash of sherry if using, and a pinch of smoked paprika. Toss to coat.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>5</span>
                <p>Remove from heat immediately. Scatter fresh parsley over the top and serve sizzling in the pan with crusty bread to soak up the oil.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 p-6 border-l-2" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
          <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Chef's Tip</p>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>Serve directly in the skillet or cazuela while it's still bubbling — that theatrical sizzle is part of the experience. The quality of the olive oil is everything in this dish; a premium Spanish extra virgin olive oil transforms the sauce into something extraordinary.</p>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/recipes/patatas-bravas" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>← Patatas Bravas</Link>
          <Link href="/recipes" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>All Recipes →</Link>
        </div>
      </div>
    </div>
  );
}
