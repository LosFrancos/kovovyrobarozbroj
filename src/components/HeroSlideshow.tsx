"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { url: "/images/hero/hero-1.webp", alt: "Kovové zábradlí na míru — Kovovýroba Rozbroj Karviná" },
  { url: "/images/hero/hero-2.webp", alt: "Nerezové zábradlí — Kovovýroba Rozbroj Karviná" },
  { url: "/images/hero/hero-3.webp", alt: "Vjezdová brána na míru — Kovovýroba Rozbroj Karviná" },
  { url: "/images/hero/hero-4.webp", alt: "Realizace kovovýroby — Kovovýroba Rozbroj Karviná" },
  { url: "/images/hero/hero-5.jpg", alt: "Tomáš a Martin Rozbroj — rodinná kovovýroba z Karviné" },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 0.85 : 0,
            transform: i === active ? "scale(1.06)" : "scale(1)",
            transition:
              "opacity 1.4s ease-in-out, transform 6s ease-out",
          }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay pro čitelnost textu */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,30,28,0.88) 0%, rgba(26,30,28,0.6) 50%, rgba(26,30,28,0.4) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Progress indikátor — klikatelné tečky */}
      <div className="absolute bottom-7 right-6 md:right-8 z-[2] flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Zobrazit fotku ${i + 1}`}
            className="h-[2px] p-0 cursor-pointer border-0 transition-all duration-[400ms]"
            style={{
              width: i === active ? 32 : 16,
              background: i === active ? "#f2c9a0" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </>
  );
}
