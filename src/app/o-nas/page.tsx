import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { kontakty } from "@/data/kontakty";

const hodnoty = [
  {
    label: "Individuální přístup",
    text:
      "Každá zakázka je jedinečná. Nasloucháme vašim požadavkům a navrhujeme řešení přesně na míru.",
  },
  {
    label: "Pečlivé zpracování",
    text:
      "Dbáme na každý detail. Preciznost a kvalita nejsou pro nás výjimkou, ale standardem.",
  },
  {
    label: "Férové jednání",
    text:
      "Transparentní ceny, jasné termíny a otevřená komunikace po celou dobu realizace.",
  },
  {
    label: "Komplexní servis",
    text:
      "Od návrhu přes výrobu až po montáž. Vše zajistíme sami, bez zbytečných zprostředkovatelů.",
  },
];

export default function ONasPage() {
  return (
    <>
      <PageHeader
        eyebrow="O nás"
        title="Rodinná kovovýroba"
        bgUrl="/images/headers/o-nas.webp"
        bgAlt="Kovovýroba Rozbroj — dílna a řemeslo"
      />

      {/* Tým */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 items-start">
          <div>
            <p className="eyebrow text-peach-2 mb-4">Příběh</p>
            <h2 className="h-display text-dark text-[clamp(32px,4vw,44px)] mb-7">
              TOMÁŠ A MARTIN
              <br />
              ROZBROJ
            </h2>
            <p className="text-ink-muted leading-[1.85] mb-5">
              Jsme otec a syn z Karviné, kteří spojili svou vášeň pro kovářské
              řemeslo a moderní výrobu. Každou zakázku bereme jako výzvu — ať
              jde o jednoduchou branku nebo komplexní schodiště.
            </p>
            <p className="text-ink-muted leading-[1.85] mb-5">
              Díky letům praxe a neustálému vzdělávání jsme schopni nabídnout
              nejen kvalitní výrobky, ale i odborné poradenství při výběru
              materiálů, povrchových úprav a konstrukčních řešení.
            </p>
            <p className="text-ink-muted leading-[1.85] mb-10">
              Ke každému zákazníkovi přistupujeme individuálně a zakázky
              realizujeme od návrhu až po montáž. Rozsah zakázky s vámi vždy
              probereme osobně.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {kontakty.osoby.map((osoba) => (
                <div
                  key={osoba.ic}
                  className="p-5 bg-[#f0ede7] border-t-[3px] border-peach"
                >
                  <p className="font-display font-bold text-lg text-dark mb-1.5">
                    {osoba.jmeno}
                  </p>
                  <p className="text-xs text-ink-muted mb-1">IČ {osoba.ic}</p>
                  <a
                    href={osoba.telefonLink}
                    className="text-sm text-peach-2 font-medium hover:text-dark transition-colors"
                  >
                    {osoba.telefon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/majitele/tomas-martin.jpg"
                alt="Tomáš a Martin Rozbroj — majitelé kovovýroby z Karviné"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/majitele/tomas.jpg"
                  alt="Tomáš Rozbroj — majitel a kovář, Kovovýroba Rozbroj"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/majitele/martin.jpg"
                  alt="Martin Rozbroj — majitel a kovář, Kovovýroba Rozbroj"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="bg-dark text-white py-20 md:py-24">
        <div className="container-x">
          <p className="eyebrow text-peach mb-4 text-center">Proč my</p>
          <h2 className="h-display text-white text-[clamp(32px,4vw,44px)] text-center mb-14 md:mb-16">
            NAŠE HODNOTY
          </h2>
          <div className="grid gap-[2px] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {hodnoty.map((h, i) => (
              <div
                key={h.label}
                className="p-8"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-8 h-[3px] bg-peach mb-5" aria-hidden="true" />
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {h.label}
                </h3>
                <p className="text-white/60 text-sm leading-[1.7]">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
