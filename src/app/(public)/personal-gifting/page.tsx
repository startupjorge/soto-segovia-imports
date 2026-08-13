import Link from "next/link";
import Image from "next/image";

export default function PersonalGiftingPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>For Loved Ones</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Personal Gifting</h1>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>Give the gift of Spain's finest gourmet foods — perfect for birthdays, holidays, anniversaries, and special occasions.</p>
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80" alt="Personal gift box" fill style={{ objectFit: "cover" }} sizes="50vw" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Thoughtful Gifts They'll Remember</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>Our personal gift boxes feature hand-selected artisan products from Spain's most celebrated producers. Each box arrives beautifully packaged with a personalized note.</p>
          <ul className="flex flex-col gap-3 mb-8">
            {["Custom gift notes & messages", "Beautifully packaged presentation box", "Choose from oils, salts, vinegars & more", "Ships directly to recipient", "Same-day processing available"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[13px]" style={{ color: "#555" }}>
                <span style={{ color: "#C9A227" }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <Link href="/products" className="inline-block px-10 py-3 font-bold text-[12px] text-white hover:opacity-90 transition-all" style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
            Browse Gift Options
          </Link>
        </div>
      </section>
      <section className="py-10 text-center" style={{ background: "#F0F0EA" }}>
        <p className="text-base font-bold mb-1" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>Need help choosing a gift?</p>
        <p className="text-sm" style={{ color: "#555" }}>Contact us at <a href="mailto:sales@sotosegoviaimports.com" className="font-bold hover:text-[#C9A227] transition-colors" style={{ color: "#1A1A1A" }}>sales@sotosegoviaimports.com</a></p>
      </section>
    </div>
  );
}
