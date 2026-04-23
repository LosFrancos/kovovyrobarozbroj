import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { kontakty } from "@/data/kontakty";

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

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Ozvěte se nám"
        bgUrl="/images/headers/kontakt.webp"
        bgAlt="Kovovýroba Rozbroj — atmosféra dílny"
      />

      <div className="container-x py-16 md:py-20 grid gap-12 md:gap-20 md:grid-cols-2">
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
                  className="inline-block mt-2.5 text-[13px] text-peach-2 font-semibold tracking-button hover:text-dark transition-colors"
                >
                  {c.actionLabel} →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-warm-gray">
            <p className="eyebrow text-peach-2 mb-3">Adresa dílny</p>
            <p className="text-dark leading-relaxed">
              {kontakty.adresa.ulice}
              <br />
              {kontakty.adresa.psc} {kontakty.adresa.mesto}
            </p>

            <p className="eyebrow text-peach-2 mb-3 mt-6">Otevírací doba</p>
            <ul className="text-ink-muted text-sm space-y-1">
              {kontakty.oteviraciDoba.map((o) => (
                <li key={o.dny}>
                  <span className="text-dark">{o.dny}</span> · {o.hodiny}
                </li>
              ))}
            </ul>
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
