import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kovovýroba Rozbroj — Karviná";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fontData, bgData] = await Promise.all([
    fetch(new URL("./_fonts/barlow-condensed-700.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
    fetch(new URL("./_og/og-bg.jpg", import.meta.url)).then((r) =>
      r.arrayBuffer(),
    ),
  ]);

  const bgDataUrl = `data:image/jpeg;base64,${Buffer.from(bgData).toString(
    "base64",
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Barlow Condensed",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgDataUrl}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* tmavý gradient zdola pro čitelnost textu */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(26,30,28,0.35) 0%, rgba(26,30,28,0.55) 45%, rgba(26,30,28,0.95) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "70px 90px",
            color: "#ffffff",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: 6,
              height: 60,
              background: "#dfb280",
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: "#dfb280",
              textTransform: "uppercase",
              letterSpacing: 8,
              marginBottom: 8,
            }}
          >
            Kovovýroba
          </div>
          <div
            style={{
              fontSize: 140,
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
              fontSize: 28,
              color: "rgba(255,255,255,0.92)",
              marginTop: 24,
              maxWidth: 960,
              lineHeight: 1.3,
            }}
          >
            Brány, ploty, schodiště a zábradlí na míru — Karviná
          </div>
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
    },
  );
}
