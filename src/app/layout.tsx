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
  title: "Soto & Segovia Imports | Fine Gourmet Foods from Spain",
  description: "Premium importer of artisan olive oils, vinegars, salts, and specialty foods from Spain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
