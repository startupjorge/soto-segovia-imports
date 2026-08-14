"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_SCRIPT_URL || "";

export default function WaitlistModal({ open, onClose }: Props) {
  const { lang } = useLang();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    location: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!open) return null;

  const t = {
    title:     lang === "ES" ? "Únete a la Lista de Espera" : "Join The Waitlist",
    subtitle:  lang === "ES" ? "Sé el primero en acceder a nuestros regalos gourmet españoles." : "Be the first to access our Spanish gourmet food gifts.",
    firstName: lang === "ES" ? "Nombre" : "First Name",
    lastName:  lang === "ES" ? "Apellido" : "Last Name",
    email:     "Email",
    company:   lang === "ES" ? "Nombre de la Empresa" : "Company Name",
    location:  lang === "ES" ? "Ubicación (Ciudad, País)" : "Location (City, Country)",
    phone:     lang === "ES" ? "Teléfono Móvil (para SMS)" : "Mobile Phone (for Texting)",
    message:   lang === "ES" ? "Mensaje" : "Message",
    submit:    lang === "ES" ? "Enviar Solicitud" : "Submit Request",
    thanks:    lang === "ES"
      ? "¡Gracias! Nos pondremos en contacto contigo en cuanto estemos listos."
      : "Thank you! We will contact you as soon as we are ready.",
    error:     lang === "ES" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again.",
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams({ ...form, lang });
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#C9A227] transition-colors";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg bg-white shadow-2xl overflow-y-auto max-h-[90vh]" style={{ borderTop: "3px solid #C9A227" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#C9A227] transition-colors z-10"
        >
          <X size={18} />
        </button>

        <div className="px-8 pt-8 pb-4">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            {t.title}
          </h2>
          <p className="text-[13px]" style={{ color: "#777" }}>{t.subtitle}</p>
        </div>

        {status === "success" ? (
          <div className="px-8 pb-10 pt-4 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#C9A227" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p className="text-[15px] font-semibold leading-relaxed" style={{ color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}>
              {t.thanks}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.firstName} *</label>
                <input required value={form.firstName} onChange={set("firstName")} className={inputClass} style={{ color: "#1A1A1A" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.lastName} *</label>
                <input required value={form.lastName} onChange={set("lastName")} className={inputClass} style={{ color: "#1A1A1A" }} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.email} *</label>
              <input required type="email" value={form.email} onChange={set("email")} className={inputClass} style={{ color: "#1A1A1A" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.company} *</label>
              <input required value={form.company} onChange={set("company")} className={inputClass} style={{ color: "#1A1A1A" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.location} *</label>
              <input required value={form.location} onChange={set("location")} placeholder={lang === "ES" ? "Ej: Miami, FL" : "e.g. Miami, FL"} className={inputClass} style={{ color: "#1A1A1A" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.phone} *</label>
              <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 (305) 000-0000" className={inputClass} style={{ color: "#1A1A1A" }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#555", fontFamily: "var(--font-cinzel), serif" }}>{t.message} *</label>
              <textarea required rows={3} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} style={{ color: "#1A1A1A" }} />
            </div>

            {status === "error" && (
              <p className="text-[12px] text-red-500">{t.error}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 px-8 py-3 font-bold text-sm bg-[#1A1A1A] text-white hover:bg-[#C9A227] transition-all disabled:opacity-60"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              {status === "loading" ? "..." : t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
