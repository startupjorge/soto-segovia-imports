import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Soto & Segovia Imports — Estrategia Corporativa y Regalos de Empresa",
  description: "Estrategia de ventas, guías de regalos corporativos, marketing B2B y B2C, y consejos para líderes comerciales — del equipo de Soto & Segovia Imports.",
};

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
      style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover" }}
    />
  );
}

export default function BlogPageES() {
  const [featured, ...rest] = allPosts;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 py-10 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>De España a Tu Mesa</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>El Blog</h1>
          <p className="text-sm" style={{ color: "#666" }}>Estrategia de regalos corporativos, ventas B2B y B2C, y tendencias del marketing para líderes de ventas.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Featured post */}
        <Link href={`/es/blog/${featured.slug}`} className="group block mb-14">
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
                <span className="text-[12px]" style={{ color: "#aaa" }}>{new Date(featured.date).toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
            </div>
          </div>
        </Link>

        <div className="border-t border-gray-100 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/es/blog/${post.slug}`} className="group block">
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
              <div className="flex items-center gap-2">
                <AuthorAvatar author={post.author} size={20} />
                <span className="text-[11px]" style={{ color: "#aaa" }}>{post.author} · {new Date(post.date).toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
