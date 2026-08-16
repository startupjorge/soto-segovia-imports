import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "@/lib/blog";

const authorAvatars: Record<string, string> = {
  "Jorge Soto": "/jorge-soto.jpg",
  "Roberto Segovia": "/roberto-segovia.jpg",
  "Maite Aranaz": "/maite-aranaz.jpg",
};

function AuthorAvatar({ author, size = 28 }: { author: string; size?: number }) {
  const src = authorAvatars[author];
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={author}
      width={size}
      height={size}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover" }}
    />
  );
}

export const metadata: Metadata = {
  title: "Blog | Soto & Segovia Imports, Corporate Gifting, B2B Sales & Marketing Strategy",
  description: "Sales strategy, corporate gifting guides, B2B and B2C marketing insights, and tips for sales leaders, from the team at Soto & Segovia Imports.",
  openGraph: {
    title: "Blog | Soto & Segovia Imports",
    description: "Corporate gifting strategy, B2B sales insights, and marketing tips for sales leaders and gifting professionals.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Soto & Segovia Imports Journal",
  description: "Expert guides on Spanish extra virgin olive oil, artisan salts, orange wine, artisan vinegars, and Spanish culinary culture.",
  url: "https://www.sotosegoviaimports.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Soto & Segovia Imports",
    url: "https://www.sotosegoviaimports.com",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = allPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white">
        {/* Header */}
        <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
          <div className="max-w-[600px] mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>From Spain to Your Table</p>
            <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>The Blog</h1>
            <p className="text-sm" style={{ color: "#666" }}>Corporate gifting strategy, B2B and B2C sales insights, marketing tips for sales leaders, and the art of building business relationships that last.</p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-12">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 100vw, 50vw" className="group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1" style={{ background: "#C9A227", color: "white", fontFamily: "var(--font-cinzel), serif" }}>{featured.category}</span>
                  <span className="text-[11px]" style={{ color: "#aaa" }}>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[#C9A227] transition-colors leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{featured.title}</h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{featured.excerpt}</p>
                <div className="flex items-center gap-3">
                  <AuthorAvatar author={featured.author} size={28} />
                  <span className="text-[12px] font-bold" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>{featured.author}</span>
                  <span style={{ color: "#ddd" }}>·</span>
                  <span className="text-[12px]" style={{ color: "#aaa" }}>{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="border-t border-gray-100 mb-12" />

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden mb-4">
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] tracking-widest uppercase font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{post.category}</span>
                  <span style={{ color: "#ddd", fontSize: "10px" }}>·</span>
                  <span className="text-[10px]" style={{ color: "#aaa" }}>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-[14px] leading-snug mb-2 group-hover:text-[#C9A227] transition-colors" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{post.title}</h2>
                <p className="text-[12px] leading-relaxed mb-3 line-clamp-3" style={{ color: "#777" }}>{post.excerpt}</p>
                <span className="text-[11px]" style={{ color: "#aaa" }}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
