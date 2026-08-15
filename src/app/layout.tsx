import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const BASE = "https://www.sotosegoviaimports.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Soto & Segovia Imports | Premium Spanish Gourmet Foods, Olive Oils, Salts & Vinegars",
    template: "%s | Soto & Segovia Imports",
  },
  description:
    "Spanish Gourmet Food Gifts for Executives & Corporate Clients. We specialize in premium olive oils, salts, and vinegars from organic farms in Spain. Perfect for account-based marketing, corporate gifting, and executive relationship programs.",
  keywords: [
    "Spanish gourmet food", "extra virgin olive oil Spain", "artisan Spanish salt",
    "Príncipe Azahar", "Spanish olive oil importer", "gourmet food gifts",
    "Spanish food importer USA", "Altea Spain olive oil", "garlic olive oil",
    "truffle olive oil", "flavored salts Spain", "orange wine Spain",
    "corporate food gifts", "premium Spanish foods",
  ],
  authors: [{ name: "Soto & Segovia Imports", url: BASE }],
  creator: "Soto & Segovia Imports LLC",
  publisher: "Soto & Segovia Imports LLC",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Soto & Segovia Imports",
    title: "Soto & Segovia Imports | Premium Spanish Gourmet Food Gifts",
    description:
      "Spanish Gourmet Food Gifts for Executives & Corporate Clients. Artisan olive oils, salts, aged vinegars, and orange wine from Altea, Spain. Corporate gifting, ABM programs, and wholesale available.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Soto & Segovia Imports — Premium Spanish Gourmet Food Gifts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soto & Segovia Imports | Premium Spanish Gourmet Food Gifts",
    description:
      "Spanish Gourmet Food Gifts for Executives & Corporate Clients. Artisan olive oils, salts, vinegars, and orange wine from Altea, Spain.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: BASE },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soto & Segovia Imports",
  legalName: "Soto & Segovia Imports LLC",
  url: BASE,
  logo: `${BASE}/logo.png`,
  description:
    "Soto & Segovia Imports is a US-based importer of premium Spanish artisan gourmet foods, specializing in extra virgin olive oils, artisan salts, aged vinegars, and orange wine from Príncipe Azahar / Bodegas Sendra González in Altea, Spain.",
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Jorge Soto" },
    { "@type": "Person", name: "Roberto Segovia" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@sotosegoviaimports.com",
    contactType: "sales",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://www.facebook.com/people/Soto-Segovia-Imports/61593123997294/",
    "https://www.instagram.com/sotosegoviaimports/",
    "https://www.linkedin.com/feed/update/urn:li:share:7493808628458557440/?actorCompanyId=130364778",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Soto & Segovia Imports",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/products?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
