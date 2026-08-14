"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: Props) {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const t = {
    title: lang === "ES" ? "Únete a la Lista de Espera" : "Join The Waitlist",
    subtitle: lang === "ES"
      ? "Sé el primero en acceder a nuestros regalos gourmet españoles."
      : "Be the first to access our Spanish gourmet food gifts.",
    name: lang === "ES" ? "Nombre completo" : "Full Name",
    email: "Email",
    company: lang === "ES" ? "Empresa (opcional)" : "Company (optional)",
    message: lang === "ES" ? "¿Algún comentario?" : "Anything to share?",
    submit: lang === "ES" ? "Enviar solicitud" : "Submit Request",
    thanks: lang === "ES" ? "¡Gracias! Nos pondremos en contacto pronto." : "Thank you! We'll be in touch soon.",
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-md bg-white shadow-2xl" style={{ borderTop: "3px solid #C9A227" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#C9A227] transition-colors"
        >
          <X size={18} />
        </button>

        <div className="px-8 pt-8 pb-2">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            {t.title}
          </h2>
          <p className="text-[13px] mb-6" style={{ color: "#777" }}>{t.subtitle}</p>
        </div>

        {submitted ? (
          <div className="px-8 pb-10 text-center">
            <p className="text-[15px] font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              {t.thanks}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.name} *</label>
              <input
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#C9A227]"
                style={{ color: "#1A1A1A" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#C9A227]"
                style={{ color: "#1A1A1A" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.company}</label>
              <input
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#C9A227]"
                style={{ color: "#1A1A1A" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.message}</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#C9A227] resize-none"
                style={{ color: "#1A1A1A" }}
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-8 py-3 font-bold text-sm bg-[#1A1A1A] text-white hover:bg-[#C9A227] transition-all"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
