import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/products";
import { allRecipes } from "@/lib/recipes";
import { allPosts } from "@/lib/blog";

const BASE = "https://www.sotosegoviaimports.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/products`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/recipes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/corporate-gifting`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/personal-gifting`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const productPages = allProducts.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const recipePages = allRecipes.map((r) => ({
    url: `${BASE}/recipes/${r.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = allPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...productPages, ...recipePages, ...blogPages];
}
