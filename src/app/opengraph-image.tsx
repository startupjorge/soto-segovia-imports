import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soto & Segovia Imports | Premium Spanish Gourmet Food Gifts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1A1A",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid #C9A227",
            opacity: 0.4,
            display: "flex",
          }}
        />

        {/* Corner accents */}
        <div style={{ position: "absolute", top: 32, left: 32, width: 40, height: 40, borderTop: "2px solid #C9A227", borderLeft: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", top: 32, right: 32, width: 40, height: 40, borderTop: "2px solid #C9A227", borderRight: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 40, height: 40, borderBottom: "2px solid #C9A227", borderLeft: "2px solid #C9A227", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, right: 32, width: 40, height: 40, borderBottom: "2px solid #C9A227", borderRight: "2px solid #C9A227", display: "flex" }} />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 13,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#C9A227",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Príncipe Azahar · Altea, España
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 840,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Premium Spanish</span>
          <span>Gourmet Food Gifts</span>
        </div>

        {/* Divider */}
        <div style={{ width: 60, height: 2, background: "#C9A227", marginBottom: 24, display: "flex" }} />

        {/* Sub */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: 620,
            lineHeight: 1.5,
            marginBottom: 48,
            display: "flex",
          }}
        >
          Artisan olive oils, salts, vinegars & orange wine from Altea, Spain. Corporate gifting & ABM programs for B2B teams.
        </div>

        {/* Brand */}
        <div
          style={{
            fontSize: 15,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A227",
            display: "flex",
          }}
        >
          Soto & Segovia Imports · Miami, FL
        </div>
      </div>
    ),
    { ...size }
  );
}
