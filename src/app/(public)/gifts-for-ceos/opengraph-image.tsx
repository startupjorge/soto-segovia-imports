import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gifts for CEOs | Premium Spanish Gourmet Foods | Soto & Segovia Imports";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#1A1A1A", fontFamily: "serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: "24px", border: "1px solid #C9A227", opacity: 0.4, display: "flex" }} />
        <div style={{ position: "absolute", top: 32, left: 32, width: 40, height: 40, borderTop: "2px solid #C9A227", borderLeft: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", top: 32, right: 32, width: 40, height: 40, borderTop: "2px solid #C9A227", borderRight: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 40, height: 40, borderBottom: "2px solid #C9A227", borderLeft: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, right: 32, width: 40, height: 40, borderBottom: "2px solid #C9A227", borderRight: "2px solid #C9A227", display: "flex" }} />

        <div style={{ fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A227", marginBottom: 28, display: "flex" }}>Executive Gifting · Soto & Segovia Imports</div>
        <div style={{ fontSize: 54, fontWeight: 700, color: "#FFFFFF", textAlign: "center", lineHeight: 1.2, maxWidth: 820, marginBottom: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span>Gifts for CEOs That</span>
          <span>Actually Get Remembered</span>
        </div>
        <div style={{ width: 60, height: 2, background: "#C9A227", marginBottom: 24, display: "flex" }} />
        <div style={{ fontSize: 19, color: "rgba(255,255,255,0.65)", textAlign: "center", maxWidth: 580, lineHeight: 1.5, marginBottom: 48, display: "flex" }}>
          Premium artisan Spanish gourmet foods for executives who have everything — except this.
        </div>
        <div style={{ fontSize: 14, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A227", display: "flex" }}>
          Soto & Segovia Imports · sotosegoviaimports.com
        </div>
      </div>
    ),
    { ...size }
  );
}
