import Link from "next/link";
import { kontakty, navigace } from "@/data/kontakty";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-x">
        <div className="grid gap-10 md:gap-8 md:grid-cols-[2fr_1fr_1fr]">
          {/* O firmě */}
          <div>
            <p className="font-display font-extrabold uppercase text-xl md:text-2xl tracking-tight text-white">
              {kontakty.firma.nazev}
            </p>
            <p className="eyebrow text-peach mt-2">Karviná · Kovovýroba na míru</p>
            <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-md">
              {kontakty.firma.slogan}
            </p>
          </div>

          {/* Navigace */}
          <div>
            <p className="eyebrow text-peach mb-4">Navigace</p>
            <ul className="space-y-2 text-sm">
              {navigace.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-white/70 hover:text-peach transition-colors"
                  >
                    {item.nazev}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="eyebrow text-peach mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm">
              {kontakty.osoby.map((osoba) => (
                <li key={osoba.ic} className="text-white/70">
                  <span className="text-white/50">{osoba.jmeno.split(" ")[0]}: </span>
                  <a href={osoba.telefonLink} className="hover:text-peach transition-colors">
                    {osoba.telefon}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${kontakty.email}`}
                  className="text-white/70 hover:text-peach transition-colors break-all"
                >
                  {kontakty.email}
                </a>
              </li>
              <li className="text-white/50 pt-2">
                {kontakty.adresa.ulice}, {kontakty.adresa.psc} {kontakty.adresa.mesto}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35">
          <p>
            © {new Date().getFullYear()} {kontakty.firma.nazev}. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4">
            <a
              href={kontakty.socialni.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-peach transition-colors"
            >
              Instagram
            </a>
            <a
              href={kontakty.socialni.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-peach transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
