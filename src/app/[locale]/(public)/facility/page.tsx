import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nuestra Planta en Altea | Soto & Segovia Imports",
  description: "Conoce la planta de producción de Príncipe Azahar en Altea, España, donde cada aceite de oliva, sal artesana, vinagre y vino de naranja se elabora a mano en la costa mediterránea.",
};

const stats = [
  { value: "[AÑO]", label: "Fundación" },
  { value: "[#]", label: "Referencias Artesanas" },
  { value: "[#]", label: "Hectáreas de Olivares" },
  { value: "[CERT]", label: "Certificaciones" },
];

const processSteps = [
  {
    number: "01",
    title: "Cosecha",
    body: "[Placeholder, describe cuándo y cómo se cosechan las aceitunas, hierbas u otras materias primas. Incluye la estacionalidad, la recolección a mano frente a la mecánica, y los olivares o zonas específicas dentro de Altea.]",
  },
  {
    number: "02",
    title: "Prensado en Frío y Producción",
    body: "[Placeholder, describe el proceso de prensado o producción. Tiempo desde la cosecha hasta el prensado, controles de temperatura, equipos utilizados y lo que hace que su método sea único.]",
  },
  {
    number: "03",
    title: "Acabado Artesanal",
    body: "[Placeholder, describe cómo se mezclan las sales, se envejecen los vinagres y se terminan los vinos. La naturaleza artesanal del proceso, los pequeños lotes y los puntos de control de calidad.]",
  },
  {
    number: "04",
    title: "Control de Calidad",
    body: "[Placeholder, certificaciones, análisis de laboratorio, evaluación organoléptica, quién aprueba cada lote y cualquier premio o reconocimiento obtenido.]",
  },
  {
    number: "05",
    title: "Envasado y Exportación",
    body: "[Placeholder, cómo se embotellan, etiquetan y preparan los productos para la exportación internacional. Requisitos de cadena de frío o transporte especial.]",
  },
];

const trustPoints = [
  {
    icon: "🏛",
    title: "[Nombre de Certificación]",
    body: "[Placeholder, p. ej., Denominación de Origen, Certificación Ecológica, Licencia de Exportación. Describe qué significa y por qué importa a los compradores.]",
  },
  {
    icon: "🌿",
    title: "Prácticas Sostenibles",
    body: "[Placeholder, describe las prácticas de sostenibilidad: uso del agua, envases, sin pesticidas, energía solar, etc.]",
  },
  {
    icon: "👨‍🍳",
    title: "Maestros Artesanos",
    body: "[Placeholder, presenta a las personas clave detrás de la producción. Años de experiencia, tradiciones familiares, filosofía de elaboración.]",
  },
  {
    icon: "🔬",
    title: "Analizado en Laboratorio",
    body: "[Placeholder, análisis de terceros, niveles de acidez para aceites de oliva, estándares de pureza y cualquier certificación de laboratorio internacional.]",
  },
];

export default function FacilityPageES() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="relative w-full h-[70vh] bg-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "#1A1A1A" }}>
            <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              [PLACEHOLDER, Reemplazar con foto aérea o panorámica de la planta de Altea]
            </p>
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%)" }} />
          <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto" style={{ position: "absolute", bottom: "60px", left: 0, right: 0 }}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              Príncipe Azahar · Altea, España
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Donde Nace<br />Cada Gota
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              En la costa mediterránea de España, en el histórico pueblo de Altea, nuestro socio Príncipe Azahar lleva generaciones perfeccionando el arte de la producción artesanal de alimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#C9A227" }}>
        <div className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-cinzel), serif" }}>{s.value}</p>
              <p className="text-[11px] tracking-widest uppercase text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About the facility */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>La Planta</p>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
            Altea, España —<br />El Corazón de Nuestra Producción
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed" style={{ color: "#555" }}>
            <p>[Placeholder, 2–3 frases describiendo la ubicación de la planta: el pueblo de Altea, su geografía, proximidad a los olivares y al mar. Qué hace que esta ubicación sea excepcional para la producción.]</p>
            <p>[Placeholder, Describe la planta en sí: tamaño, antigüedad, qué se produce allí, características destacadas como prensas de piedra, bodegas de envejecimiento, salinas, etc.]</p>
            <p>[Placeholder, Describe la relación entre Soto & Segovia y Príncipe Azahar / Bodegas Sendra González, cómo surgió esta alianza y por qué confiamos exclusivamente en ellos.]</p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden" style={{ background: "#F0EDE6" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[11px] tracking-widest uppercase text-center px-8" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
              [PLACEHOLDER, Foto interior o aérea de la planta]
            </p>
          </div>
        </div>
      </section>

      {/* Production process */}
      <section style={{ background: "#F8F8F4" }}>
        <div className="max-w-[900px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Del Olivar a la Botella</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Nuestro Proceso de Producción</h2>
          </div>
          <div className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border" style={{ borderColor: "#C9A227" }}>
                  <span className="text-[13px] font-bold" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>{step.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>{step.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#666" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Dentro de la Planta</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>Véalo por Usted Mismo</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square flex items-center justify-center" style={{ background: "#F0EDE6" }}>
              <p className="text-[10px] tracking-widest uppercase text-center px-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>
                [Foto {i}, Planta / Proceso / Personas]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust points */}
      <section style={{ background: "#141414" }}>
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Por Qué Importa</p>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>Nuestro Compromiso con la Calidad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="border border-gray-800 p-8">
                <div className="text-3xl mb-4">{tp.icon}</div>
                <h3 className="font-bold text-[15px] mb-3 text-white" style={{ fontFamily: "var(--font-cinzel), serif" }}>{tp.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#888" }}>{tp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}>Listo para Colaborar</p>
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel), serif", color: "#1A1A1A" }}>
          Regala Alimentos Gourmet Españoles a Tus Clientes
        </h2>
        <p className="text-[15px] mb-8 max-w-[500px] mx-auto" style={{ color: "#666" }}>
          Cada producto que enviamos lleva la historia de esta planta, estas personas y este lugar. Déjanos contar esa historia a tus clientes.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/es/corporate-gifting"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider text-white"
            style={{ background: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Explorar Regalos Corporativos
          </Link>
          <Link
            href="/es/contact"
            className="inline-block px-8 py-3 font-bold text-[12px] tracking-wider border"
            style={{ borderColor: "#C9A227", color: "#C9A227", fontFamily: "var(--font-cinzel), serif" }}
          >
            Contacto
          </Link>
        </div>
      </section>

    </div>
  );
}
