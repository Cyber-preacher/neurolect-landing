import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Route segment config
export const runtime = "edge";

// 1200x630 recommended
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  const title = SITE.name;
  const subtitle = SITE.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1020 0%, #121A35 100%)",
          color: "white",
          padding: 64,
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: -1 }}>
          {title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            opacity: 0.9,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 64,
            fontSize: 18,
            opacity: 0.7,
          }}
        >
          {SITE.url.replace(/^https?:\/\//, "")}
        </div>

        {/* subtle framing */}
        <div
          style={{
            position: "absolute",
            inset: 16,
            borderRadius: 24,
            boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.08)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

