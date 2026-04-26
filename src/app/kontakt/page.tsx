import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Mapa from "@/components/Mapa";
import PageHeader from "@/components/PageHeader";
import SocialLinks from "@/components/SocialLinks";
import { kontakty } from "@/data/kontakty";

export const metadata: Metadata = {
  title: "Kontakt — Kovovýroba Rozbroj, Karviná",
  description:
    "Rudé Armády 1820/31, 733 01 Karviná. Tomáš: +420 737 421 618, Martin: +420 603 438 228. E-mail info@kovorozbroj.cz. Po–Pá 7:00–16:00.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Kovovýroba Rozbroj, Karviná",
    description:
      "Rudé Armády 1820/31, Karviná. Po–Pá 7:00–16:00. Ozvěte se — odpovíme do 24 hodin.",
    url: "/kontakt",
  },
};

const kontaktniKarty = [
  {
    label: kontakty.osoby[0].jmeno,
    lines: [kontakty.osoby[0].telefon, `IČ ${kontakty.osoby[0].ic}`],
    action: kontakty.osoby[0].telefonLink,
    actionLabel: "Zavolat Tomášovi",
  },
  {
    label: kontakty.osoby[1].jmeno,
    lines: [kontakty.osoby[1].telefon, `IČ ${kontakty.osoby[1].ic}`],
    action: kontakty.osoby[1].telefonLink,
    actionLabel: "Zavolat Martinovi",
  },
  {
    label: "E-mail",
    lines: [kontakty.email],
    action: `mailto:${kontakty.email}`,
    actionLabel: "Napsat e-mail",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.kovovyrobarozbroj.cz/#business",
  name: kontakty.firma.nazev,
  description: kontakty.firma.slogan,
  url: "https://www.kovovyrobarozbroj.cz",
  telephone: kontakty.osoby[0].telefon,
  email: kontakty.email,
  image: "https://www.kovovyrobarozbroj.cz/opengraph-image",
  address: {
    "@type": "PostalAddress",
    streetAddress: kontakty.adresa.ulice,
    postalCode: kontakty.adresa.psc,
    addressLocality: kontakty.adresa.mesto,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: kontakty.adresa.gps.lat,
    longitude: kontakty.adresa.gps.lon,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  sameAs: [kontakty.socialni.instagram.url, kontakty.socialni.facebook.url],
  founder: kontakty.osoby.map((o) => ({
    "@type": "Person",
    name: o.jmeno,
    telephone: o.telefon,
  })),
  areaServed: { "@type": "Country", name: "Česká republika" },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Kontakt"
        title="Ozvěte se nám"
        bgUrl="/images/headers/kontakt.webp"
        bgAlt="Kovovýroba Rozbroj — atmosféra dílny"
      />

      <div className="container-x py-16 md:py-20 grid gap-10 md:gap-12 md:grid-cols-2">
        {/* Kontaktní údaje */}
        <div>
          <h2 className="h-display text-dark text-[clamp(26px,3vw,32px)] mb-10">
            KONTAKTNÍ ÚDAJE
          </h2>

          <div className="flex flex-col gap-6">
            {kontaktniKarty.map((c) => (
              <div
                key={c.label}
                className="px-7 py-6 bg-[#f8f7f4] border-l-4 border-peach"
              >
                <p className="font-display font-bold text-lg text-dark mb-1.5">
                  {c.label}
                </p>
                {c.lines.map((l) => (
                  <p key={l} className="text-[15px] text-ink-muted leading-snug">
                    {l}
                  </p>
                ))}
                <a
                  href={c.action}
                  className="inline-block mt-2.5 text-[13px] text-dark font-semibold tracking-button hover:text-peach-2 transition-colors"
                >
                  {c.actionLabel} →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-warm-gray">
            <p className="eyebrow text-peach-2 mb-3">Adresa dílny</p>
            <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr] items-start">
              <p className="text-dark leading-relaxed">
                {kontakty.adresa.ulice}
                <br />
                {kontakty.adresa.psc} {kontakty.adresa.mesto}
              </p>
              <div className="relative aspect-[4/3] w-full">
                <Mapa title="Mapa dílny — Kovovýroba Rozbroj, Karviná" />
              </div>
            </div>

            <p className="eyebrow text-peach-2 mb-3 mt-8">Otevírací doba</p>
            <ul className="text-ink-muted text-sm space-y-1">
              {kontakty.oteviraciDoba.map((o) => (
                <li key={o.dny}>
                  <span className="text-dark">{o.dny}</span> · {o.hodiny}
                </li>
              ))}
            </ul>

            <p className="eyebrow text-peach-2 mb-3 mt-8">Sledujte nás</p>
            <SocialLinks variant="cards" />
          </div>
        </div>

        {/* Formulář — placeholder do Fáze F */}
        <div>
          <h2 className="h-display text-dark text-[clamp(26px,3vw,32px)] mb-2">
            NEZÁVAZNÁ POPTÁVKA
          </h2>
          <p className="text-ink-muted text-sm mb-9">Odpovíme do 24 hodin.</p>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
