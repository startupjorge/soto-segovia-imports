import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Soto & Segovia Imports | Fine Wines, Spirits & Gourmet Foods",
  description:
    "Premium importer of fine wines, spirits, and gourmet foods. Discover our curated selection of world-class products.",
  keywords: ["wine imports", "spirits", "gourmet food", "luxury imports", "Soto Segovia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-black text-white" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
        {children}
      </body>
    </html>
  );
}
