import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "@/lib/blog";
import { allProducts } from "@/lib/products";

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Soto & Segovia Imports`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const featuredProducts = allProducts.filter((p) =>
    (post.relatedProducts ?? []).includes(p.slug)
  ).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Soto & Segovia Imports",
      url: "https://www.sotosegoviaimports.com",
    },
    mainEntityOfPage: `https://www.sotosegoviaimports.com/blog/${post.slug}`,
  };

  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-100" style={{ background: "#F8F8F4" }}>
          <div className="max-w-[800px] mx-auto px-6 py-3 flex items-center gap-2 text-[11px]" style={{ color: "#aaa", fontFamily: "var(--font-cinzel), serif" }}>
            <Link href="/blog" className="hover:text-[#C9A227] transition-colors">Journal</Link>
            <span>/</span>
            <span style={{ color: "#C9A227" }}>{post.category}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-[800px] mx-auto px-6 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1" style={{ background: "#C9A227", color: "white", fontFamily: "var(--font-cinzel), serif" }}>{post.category}</span>
            <span className="text-[11px]" style={{ color: "#aaa" }}>{post.readTime}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 leading-snug" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{post.title}</h1>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: "#666" }}>{post.subtitle}</p>
          <div className="flex items-center gap-3 text-[12px]" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
            <span className="font-bold" style={{ color: "#1A1A1A" }}>{post.author}</span>
            <span style={{ color: "#ddd" }}>·</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-[1000px] mx-auto px-6 mb-12">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="1000px" priority />
          </div>
        </div>

        {/* Body */}
        <article className="max-w-[680px] mx-auto px-6 pb-16">
          {post.body.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-[18px] font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                  {section.heading}
                </h2>
              )}
              {section.content.split("\n\n").map((para, j) => (
                <p key={j} className="text-[15px] leading-[1.85] mb-4" style={{ color: "#444" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12 border-t border-gray-100 pt-10">
              <h2 className="text-[18px] font-bold mb-8" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-6">
                {post.faq.map((item, i) => (
                  <div key={i} className="border-l-2 pl-5" style={{ borderColor: "#C9A227" }}>
                    <p className="text-[13px] font-bold mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.q}</p>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#555" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="border-t border-gray-100" style={{ background: "#F8F8F4" }}>
            <div className="max-w-[1200px] mx-auto px-6 py-12">
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold mb-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                Products Featured in This Article
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="group block bg-white border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "3/4" }}>
                      <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", padding: "16px" }} sizes="(max-width: 640px) 100vw, 33vw" className="group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] tracking-wider uppercase font-bold mb-0.5" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{product.nameEs}</p>
                      <p className="font-bold text-[13px] mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{product.name}</p>
                      <p className="text-[11px] line-clamp-2" style={{ color: "#777" }}>{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related posts */}
        {related.length > 0 && (
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold mb-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              More from the Journal
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-5 items-start">
                  <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} sizes="112px" className="group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{p.category}</span>
                    <h3 className="font-bold text-[13px] leading-snug mt-1 group-hover:text-[#C9A227] transition-colors" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{p.title}</h3>
                    <span className="text-[11px]" style={{ color: "#aaa" }}>{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="max-w-[1200px] mx-auto px-6 pb-10">
          <Link href="/blog" className="text-[12px] font-bold tracking-wider hover:text-[#C9A227] transition-colors" style={{ color: "#888", fontFamily: "var(--font-cinzel), serif" }}>
            ← Back to Journal
          </Link>
        </div>
      </div>
    </>
  );
}
