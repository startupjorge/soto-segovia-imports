"use client";

import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const occasions = [
  { title: "Cumpleaños", body: "Un regalo que sorprende de verdad, de España directamente a su mesa." },
  { title: "Aniversarios", body: "Celebra el tiempo compartido con algo tan especial como el momento." },
  { title: "Bodas y regalos de boda", body: "Un toque de lujo español para parejas que lo aprecian todo." },
  { title: "Navidad y fiestas", body: "Regala algo que se recuerde mucho después de que acabe la temporada." },
  { title: "Agradecimientos", body: "Para los anfitriones, los mentores y las personas que siempre están ahí." },
  { title: "Cualquier momento", body: "El mejor regalo no necesita una ocasión especial. Solo necesita ser extraordinario." },
];

export default function PersonalGiftingPageES() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      {/* Hero */}
      <div className="border-b border-gray-100 py-14 px-6 text-center" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[680px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Para Personas Especiales</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            El Regalo Personal<br />que Siempre se Recuerda
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#666" }}>
            Hay regalos que se abren y se olvidan. Y hay regalos que se abren y generan una conversación, una llamada, un momento compartido que dura mucho más que el objeto en sí. Nosotros hacemos estos últimos.
          </p>
        </div>
      </div>

      {/* About */}
      <section className="max-w-[800px] mx-auto px-6 py-14">
        <p className="text-[15px] leading-relaxed mb-6 text-center" style={{ color: "#555" }}>
          En Soto &amp; Segovia Imports, seleccionamos los mejores productos artesanos del Mediterráneo español para que puedas regalar algo genuinamente extraordinario: aceites infusionados, sales únicas, vinagres artesanos envejecidos y vinos de naranja de Altea.
        </p>
        <p className="text-[15px] leading-relaxed text-center" style={{ color: "#555" }}>
          No son los productos que se encuentran en cualquier tienda. Son los que alguien ve en tu regalo y pregunta de inmediato: ¿dónde lo conseguiste?
        </p>
      </section>

      {/* Occasions */}
      <section className="py-14 px-6" style={{ background: "#F8F8F4" }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Para Cada Ocasión Importante</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occ) => (
              <div key={occ.title} className="bg-white p-6 border border-gray-100">
                <div className="w-6 h-0.5 mb-4" style={{ background: "#C9A227" }} />
                <h3 className="font-bold text-[13px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{occ.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "#666" }}>{occ.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>¿Listo para Regalar Algo Extraordinario?</h2>
          <p className="text-sm mb-8" style={{ color: "#666" }}>
            Únete a nuestra lista de espera y te ayudaremos a encontrar la selección perfecta para la persona y la ocasión que tienes en mente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setWaitlistOpen(true)}
              className="px-10 py-4 font-bold text-sm text-white hover:bg-[#C9A227] transition-all"
              style={{ background: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
            >
              Únete a la Lista de Espera
            </button>
            <Link
              href="/es/products"
              className="px-10 py-4 font-bold text-sm border hover:bg-gray-50 transition-all text-center"
              style={{ borderColor: "#1A1A1A", color: "#1A1A1A", fontFamily: "var(--font-cinzel), serif" }}
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
