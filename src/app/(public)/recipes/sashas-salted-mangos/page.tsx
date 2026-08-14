import Link from "next/link";
import Image from "next/image";

export default function SashasSaltedMangosPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Dessert · 5 min</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Sasha's Salted Mangos</h1>
          <p className="text-sm" style={{ color: "#666" }}>Fresh ripe mango finished with Mint Salt, a refreshing, elegant treat with a surprising Spanish touch.</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-14">
        <div className="relative aspect-[16/9] overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=1200&q=80"
            alt="Sasha's Salted Mangos"
            fill
            style={{ objectFit: "cover" }}
            sizes="800px"
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 p-6 border border-gray-100" style={{ background: "#F8F8F4" }}>
          {[
            { label: "Prep Time", value: "5 min" },
            { label: "Cook Time", value: "None" },
            { label: "Servings", value: "2" },
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
              <li>2 ripe mangos, peeled and sliced</li>
              <li>1 tsp Soto &amp; Segovia Mint Salt</li>
              <li>A squeeze of fresh lime juice</li>
              <li>Fresh mint leaves, to garnish (optional)</li>
              <li>Chili flakes, for a little heat (optional)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-bold tracking-wider uppercase mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Instructions</h2>
            <ol className="flex flex-col gap-4 text-sm" style={{ color: "#555" }}>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>1</span>
                <p>Peel the mangos and slice into generous wedges or chunks. Arrange on a chilled plate.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>2</span>
                <p>Squeeze a little fresh lime juice over the mango slices.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>3</span>
                <p>Finish with a light, even pinch of Soto &amp; Segovia Mint Salt over each slice. The mint and salt together bring out the mango's natural sweetness in the most unexpected way.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: "#C9A227" }}>4</span>
                <p>Garnish with fresh mint leaves and a pinch of chili flakes if desired. Serve immediately.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 p-6 border-l-2" style={{ borderColor: "#C9A227", background: "#F8F8F4" }}>
          <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Sasha's Tip</p>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>The Mint Salt is the star here, use just enough to taste it on every bite without overpowering the mango. This recipe is as beautiful as it is simple, and it never fails to surprise guests who try it for the first time.</p>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/recipes" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>← All Recipes</Link>
        </div>
      </div>
    </div>
  );
}
