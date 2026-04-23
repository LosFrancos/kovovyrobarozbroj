"use client";

import Image from "next/image";
import { useState } from "react";
import {
  prace,
  praceKategorie,
  type PraceKategorie,
} from "@/data/prace";

export default function PraceGallery() {
  const [active, setActive] = useState<PraceKategorie>("Vše");

  const filtered =
    active === "Vše" ? prace : prace.filter((p) => p.kategorie === active);

  return (
    <>
      <div
        className="flex flex-wrap gap-2 mb-10 md:mb-12"
        role="tablist"
        aria-label="Filtr kategorií realizací"
      >
        {praceKategorie.map((kat) => {
          const isActive = active === kat;
          return (
            <button
              key={kat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(kat)}
              className={`px-5 py-2 min-h-[40px] font-sans font-medium text-[13px] tracking-[0.04em] border transition-colors ${
                isActive
                  ? "bg-dark border-dark text-white"
                  : "bg-transparent border-[#ccc] text-ink-muted hover:border-dark hover:text-dark"
              }`}
            >
              {kat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-muted py-10 text-center">
          V této kategorii zatím nemáme fotky.
        </p>
      ) : (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {filtered.map((item) => (
            <div
              key={item.src}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,30,28,0.88) 0%, transparent 55%)",
                }}
              >
                <div>
                  <p className="font-display font-bold text-white text-base">
                    {item.label}
                  </p>
                  <p className="text-peach text-xs tracking-[0.1em] mt-1 uppercase">
                    {item.kategorie === "Vše"
                      ? "Kovovýroba Rozbroj"
                      : item.kategorie}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
