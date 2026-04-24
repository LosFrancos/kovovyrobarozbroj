"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { kontakty, navigace } from "@/data/kontakty";
import Button from "./Button";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  const solid = !isHome || scrolled;
  const headerBg = solid
    ? "bg-dark/95 backdrop-blur border-b border-white/[0.07]"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-colors duration-300 ${headerBg}`}
      >
        <div className="container-x h-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label={`${kontakty.firma.nazev} — domů`}
          >
            <Image
              src="/images/logo.jpg"
              alt={`${kontakty.firma.nazev} — logo`}
              width={256}
              height={256}
              priority
              quality={90}
              sizes="48px"
              className="h-12 w-auto [mix-blend-mode:screen]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Hlavní navigace">
            {navigace.map((item) => {
              const active = isActive(item.url);
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`text-sm font-medium uppercase tracking-[0.04em] transition-colors ${
                    active
                      ? "text-peach border-b-2 border-peach pb-1"
                      : "text-white/80 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.nazev}
                </Link>
              );
            })}
            <Button href="/kontakt" variant="primary" className="!px-5 !py-2.5 !min-h-0 !text-[13px]">
              Nezávazná poptávka
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Otevřít menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 -mr-2 text-white min-w-11 min-h-11 flex items-center justify-center"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] bg-dark text-white flex flex-col md:hidden transition-opacity duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-x h-[72px] flex items-center justify-between">
          <Image
            src="/images/logo.jpg"
            alt={`${kontakty.firma.nazev} — logo`}
            width={256}
            height={256}
            quality={90}
            sizes="48px"
            className="h-12 w-auto rounded-[4px]"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Zavřít menu"
            className="p-2 -mr-2 min-w-11 min-h-11 flex items-center justify-center text-white"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav
          className="flex-1 flex flex-col justify-center items-center gap-8 px-6"
          aria-label="Mobilní navigace"
        >
          {navigace.map((item) => {
            const active = isActive(item.url);
            return (
              <Link
                key={item.url}
                href={item.url}
                className={`font-display font-bold uppercase tracking-tight text-3xl transition-colors ${
                  active ? "text-peach" : "text-white hover:text-peach"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.nazev}
              </Link>
            );
          })}
          <Button href="/kontakt" variant="primary" className="mt-6">
            Nezávazná poptávka
          </Button>
        </nav>

        <div className="pb-10 text-center text-white/60 text-sm">
          <a href={`tel:${kontakty.osoby[0].telefonLink.replace("tel:", "")}`} className="hover:text-peach">
            {kontakty.osoby[0].telefon}
          </a>
          <span className="mx-2">·</span>
          <a href={`mailto:${kontakty.email}`} className="hover:text-peach">
            {kontakty.email}
          </a>
        </div>
      </div>
    </>
  );
}
