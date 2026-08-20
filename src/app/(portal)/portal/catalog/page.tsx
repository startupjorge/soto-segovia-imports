"use client";

import { useEffect } from "react";
import { allProducts } from "@/lib/products";

const categoryLabels: Record<string, string> = {
  "olive-oils": "Olive Oils",
  "salts": "Artisan Salts",
  "vinegars": "Vinegars",
  "honeys": "Honeys",
  "spices": "Spices & Herbs",
  "gift-sets": "Gift Sets",
};

const grouped = allProducts.reduce<Record<string, typeof allProducts>>((acc, p) => {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});

export default function CatalogPrintPage() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 18mm 15mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
        }
        body { background: #fff; color: #111; font-family: Georgia, serif; }
      `}</style>

      {/* Print button — hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-5 py-2 text-sm font-semibold"
          style={{ background: "#C9A227", color: "#000" }}
        >
          Save as PDF
        </button>
        <button
          onClick={() => window.close()}
          className="px-5 py-2 text-sm"
          style={{ background: "#eee", color: "#333" }}
        >
          Close
        </button>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "Georgia, serif", color: "#111" }}>
        {/* Cover */}
        <div style={{ textAlign: "center", paddingBottom: 60, borderBottom: "2px solid #C9A227", marginBottom: 60 }}>
          <img src="/logo.png" alt="Soto & Segovia Imports" style={{ height: 80, margin: "0 auto 24px" }} />
          <h1 style={{ fontSize: 32, fontWeight: "bold", letterSpacing: 2, marginBottom: 8 }}>
            SOTO &amp; SEGOVIA IMPORTS
          </h1>
          <p style={{ fontSize: 13, letterSpacing: 4, color: "#888", textTransform: "uppercase", marginBottom: 24 }}>
            Wholesale Product Catalog
          </p>
          <p style={{ fontSize: 12, color: "#aaa" }}>Altea, Spain &nbsp;·&nbsp; Distributor Pricing &nbsp;·&nbsp; {new Date().getFullYear()}</p>
        </div>

        {/* Introduction */}
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "#444" }}>
            Soto &amp; Segovia Imports sources the finest gourmet products from Spain, curated from artisan producers in
            Altea and across the Mediterranean coast. This catalog presents our full wholesale assortment with
            suggested retail pricing. All prices shown are per unit in USD. Minimum order quantities and case pricing
            available upon request — contact your account manager.
          </p>
        </div>

        {/* Categories */}
        {Object.entries(grouped).map(([cat, products], catIdx) => (
          <div key={cat} className={catIdx > 0 ? "page-break" : ""} style={{ marginBottom: 60 }}>
            <div style={{ borderBottom: "1px solid #C9A227", paddingBottom: 12, marginBottom: 32 }}>
              <p style={{ fontSize: 10, letterSpacing: 4, color: "#C9A227", textTransform: "uppercase", marginBottom: 4 }}>
                Collection
              </p>
              <h2 style={{ fontSize: 26, fontWeight: "bold", margin: 0 }}>
                {categoryLabels[cat] ?? cat}
              </h2>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#888", fontWeight: "normal", letterSpacing: 2, textTransform: "uppercase", fontSize: 10 }}>Product</th>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#888", fontWeight: "normal", letterSpacing: 2, textTransform: "uppercase", fontSize: 10 }}>Origin</th>
                  <th style={{ textAlign: "left", padding: "8px 0", color: "#888", fontWeight: "normal", letterSpacing: 2, textTransform: "uppercase", fontSize: 10 }}>Description</th>
                  <th style={{ textAlign: "right", padding: "8px 0", color: "#888", fontWeight: "normal", letterSpacing: 2, textTransform: "uppercase", fontSize: 10 }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.slug} style={{ borderBottom: "1px solid #f5f5f5", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
                    <td style={{ padding: "12px 8px 12px 0", fontWeight: "bold", minWidth: 140, verticalAlign: "top" }}>{p.name}</td>
                    <td style={{ padding: "12px 8px", color: "#666", minWidth: 100, verticalAlign: "top" }}>{p.origin}</td>
                    <td style={{ padding: "12px 8px", color: "#555", lineHeight: 1.6, verticalAlign: "top" }}>{p.description}</td>
                    <td style={{ padding: "12px 0 12px 8px", textAlign: "right", fontWeight: "bold", color: "#C9A227", whiteSpace: "nowrap", verticalAlign: "top" }}>${p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Footer */}
        <div style={{ borderTop: "2px solid #C9A227", paddingTop: 32, marginTop: 60, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>
            For orders, pricing, and account inquiries contact your dedicated account manager.
          </p>
          <p style={{ fontSize: 11, color: "#aaa" }}>
            sotosegoviaimports.com &nbsp;·&nbsp; Altea, Alicante, Spain
          </p>
        </div>
      </div>
    </>
  );
}
