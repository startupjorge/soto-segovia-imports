"use client";

import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const giftTypes = [
  { title: "Regalos Gourmet Individuales", body: "Productos españoles premium presentados con elegancia y listos para entregar." },
  { title: "Colecciones Gourmet a Medida", body: "Varios productos complementarios reunidos en una colección bellamente presentada." },
  { title: "Regalos Corporativos Personalizados", body: "Selecciones exclusivas creadas en torno a tu empresa, destinatario, evento, campaña u ocasión." },
  { title: "Regalos para Ejecutivos y VIP", body: "Experiencias de regalo elevadas para directivos, clientes importantes, socios estratégicos, inversores y otros destinatarios distinguidos." },
];

const audiences = [
  { title: "Equipos Comerciales", body: "Consolida relaciones con cuentas clave, celebra nuevos clientes, reconoce cuentas importantes y mantén una presencia memorable durante todo el proceso de venta." },
  { title: "Equipos de Marketing", body: "Crea experiencias premium para campañas ABM, programas de clientes, eventos, conferencias, lanzamientos de producto y experiencias VIP." },
  { title: "Dirección Ejecutiva", body: "Reconoce a clientes, socios, inversores, consejeros y otros directivos con un regalo a la altura de la ocasión." },
  { title: "Fidelización de Clientes y Empleados", body: "Celebra hitos, logros y las personas que contribuyen al éxito de tu empresa." },
];

const industries = [
  "Multinacionales", "Empresas de tecnología y software", "Servicios financieros",
  "Capital privado y venture capital", "Marcas de lujo", "Hoteles y hostelería",
  "Inmobiliarias y promotoras", "Despachos de abogados", "Consultoría y servicios profesionales",
  "Organizaciones sanitarias", "Agencias de marketing y publicidad", "Family offices",
  "Organización de eventos y congresos",
];

export default function CorporateGiftingPageES() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Hero */}
      <div className="border-b border-gray-100 py-14 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Para Empresas</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Regalos Corporativos de Lujo,<br />Elevados por la Tradición Española
          </h1>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#666" }}>
            Construye relaciones más sólidas con regalos gourmet excepcionales de España.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
            Ya seas un director comercial o de marketing que quiere impactar en cuentas clave, un ejecutivo que desea reconocer a un cliente o socio valioso, o una empresa que celebra a las personas que más importan, el regalo corporativo bien pensado crea conexiones duraderas.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-[800px] mx-auto px-6 py-14 text-center">
        <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
          En Soto &amp; Segovia Imports, llevamos los sabores y tradiciones de España a los regalos corporativos a través de una colección curada de productos gourmet premium seleccionados por su calidad, artesanía, autenticidad y elegancia.
        </p>
      </section>

      {/* Collections */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold text-center" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Nuestras Colecciones</p>
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Un Sabor de España, Bellamente Presentado</h2>
          <p className="text-sm text-center mb-10 max-w-[600px] mx-auto" style={{ color: "#777" }}>
            Desde aceites de oliva virgen extra e infusionados hasta sales artesanas, vinagres y otras especialidades españolas, nuestras colecciones convierten alimentos excepcionales en regalos memorables.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {giftTypes.map((item) => (
              <div key={item.title} className="bg-white p-7 border border-gray-100">
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[14px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Diseñado Para Tu Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="p-7 border border-gray-100">
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[14px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{a.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 px-6" style={{ background: "#1A1A1A" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>Sectores que Atendemos</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-4 py-2 text-[11px] border" style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Empieza Tu Programa de Regalos</h2>
          <p className="text-sm mb-8" style={{ color: "#666" }}>
            Únete a nuestra lista de espera y un especialista en regalos corporativos te contactará para crear la selección perfecta para tu empresa.
          </p>
          <button
            onClick={() => setWaitlistOpen(true)}
            className="px-10 py-4 font-bold text-sm text-white hover:bg-[#C9A227] transition-all"
            style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
          >
            Únete a la Lista de Espera
          </button>
        </div>
      </section>
    </div>
  );
}
