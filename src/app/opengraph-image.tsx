import { ImageResponse } from "next/og";

// Next.js 15 + static export support: this generates a static OG image
// at /opengraph-image (or via the explicit `src` below).
export const alt = "Salary to Hourly Calculator — 18 Countries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #0f172a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            💰
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>
            Salary to Hourly
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Convert any salary
            <br />
            into an hourly rate.
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.85,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Free calculator for 18 countries — with cost-of-living adjustments
            and freelance multipliers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.7,
          }}
        >
          <div>salarytohourly.com</div>
          <div style={{ display: "flex", gap: 8 }}>
            🇺🇸 🇬🇧 🇨🇦 🇦🇺 🇩🇪 🇫🇷 🇯🇵 🇰🇷 🇨🇳 + 10 more
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}