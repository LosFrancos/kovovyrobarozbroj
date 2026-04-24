import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kovovýroba Rozbroj — Karviná";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await fetch(
    new URL("./_fonts/barlow-condensed-700.ttf", import.meta.url)
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "#1a1e1c",
          color: "#ffffff",
          fontFamily: "Barlow Condensed",
        }}
      >
        <div
          style={{
            width: 6,
            height: 80,
            background: "#dfb280",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 36,
            color: "#dfb280",
            textTransform: "uppercase",
            letterSpacing: 8,
            marginBottom: 16,
          }}
        >
          Kovovýroba
        </div>
        <div
          style={{
            fontSize: 160,
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          Rozbroj
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
            marginTop: 36,
            maxWidth: 960,
            lineHeight: 1.3,
          }}
        >
          Brány, ploty, schodiště a zábradlí na míru — Karviná
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Barlow Condensed",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
