"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Lang = "EN" | "ES";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "EN", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const [lang, setLang] = useState<Lang>(isSpanish ? "ES" : "EN");

  useEffect(() => {
    setLang(pathname.startsWith("/es") ? "ES" : "EN");
  }, [pathname]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
