import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

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
  description:
    "Premium importer of artisan olive oils, vinegars, salts, and specialty foods from Spain.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${cinzel.variable} h-full`}>
      <body
        className="min-h-full flex flex-col bg-white text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
