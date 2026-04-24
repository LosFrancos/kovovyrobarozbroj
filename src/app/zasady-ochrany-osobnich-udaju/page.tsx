import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { kontakty } from "@/data/kontakty";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Informace o zpracování osobních údajů při využívání webu a kontaktního formuláře Kovovýroba Rozbroj.",
  robots: { index: true, follow: false },
};

export default function ZasadyPage() {
  const [tomas, martin] = kontakty.osoby;
  const dnes = new Date().toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHeader
        eyebrow="Zásady"
        title="Ochrana osobních údajů"
        bgUrl="/images/headers/kontakt.webp"
        bgAlt="Kovovýroba Rozbroj — atmosféra dílny"
      />

      <article className="container-x py-16 md:py-20 max-w-[800px]">
        <p className="text-ink-muted text-sm mb-10">
          Platné ke dni {dnes}.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          1. Správci osobních údajů
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-4">
          Správci osobních údajů zpracovávaných prostřednictvím tohoto webu
          jsou společně:
        </p>
        <ul className="list-disc pl-6 text-ink-muted leading-[1.8] space-y-1 mb-6">
          <li>
            <strong className="text-dark">{tomas.jmeno}</strong>, IČ {tomas.ic},
            {" "}tel. {tomas.telefon}
          </li>
          <li>
            <strong className="text-dark">{martin.jmeno}</strong>, IČ {martin.ic},
            {" "}tel. {martin.telefon}
          </li>
        </ul>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Adresa dílny: {kontakty.adresa.ulice}, {kontakty.adresa.psc}{" "}
          {kontakty.adresa.mesto}. Kontaktní e-mail:{" "}
          <a
            href={`mailto:${kontakty.email}`}
            className="text-peach-2 underline hover:text-dark"
          >
            {kontakty.email}
          </a>
          .
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          2. Jaké údaje zpracováváme
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-4">
          Prostřednictvím kontaktního formuláře na webu shromažďujeme pouze
          údaje, které nám sami dobrovolně poskytnete:
        </p>
        <ul className="list-disc pl-6 text-ink-muted leading-[1.8] space-y-1 mb-6">
          <li>jméno a příjmení</li>
          <li>e-mailová adresa</li>
          <li>telefonní číslo (volitelné)</li>
          <li>obsah zprávy / popis poptávky</li>
        </ul>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          3. Účel a právní základ zpracování
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-4">
          Vaše údaje zpracováváme výhradně za účelem:
        </p>
        <ul className="list-disc pl-6 text-ink-muted leading-[1.8] space-y-1 mb-6">
          <li>vyřízení vaší poptávky a navazující komunikace,</li>
          <li>případného uzavření a plnění smlouvy.</li>
        </ul>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Právním základem je čl. 6 odst. 1 písm. b) GDPR — plnění smlouvy,
          resp. provedení opatření před uzavřením smlouvy na žádost subjektu
          údajů, a Váš výslovný souhlas udělený při odeslání formuláře.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          4. Doba uchovávání
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Poptávky, které nevedou k uzavření zakázky, uchováváme nejdéle
          6 měsíců od posledního kontaktu. Údaje spojené s uzavřenou zakázkou
          uchováváme po dobu nezbytnou k plnění smluvních a zákonných
          povinností (zejména účetních a daňových), obvykle 10 let.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          5. Zpracovatelé a předávání údajů
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-4">
          Pro doručení zpráv z kontaktního formuláře využíváme službu
          <strong className="text-dark"> Web3Forms</strong>, která přebírá data
          z formuláře a zasílá je na náš e-mail. Web3Forms může údaje
          zpracovávat na serverech mimo EU (USA) v souladu s vlastními
          zásadami:{" "}
          <a
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-peach-2 underline hover:text-dark"
          >
            web3forms.com/privacy
          </a>
          .
        </p>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Web je hostován na platformě <strong className="text-dark">Vercel</strong>,
          která může mít přístup k technickým logům (IP adresa, user-agent)
          nezbytným pro provoz služby. Vaše osobní údaje z formuláře
          nepředáváme žádným dalším třetím stranám.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          6. Vaše práva
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-4">
          V souvislosti se zpracováním osobních údajů máte právo:
        </p>
        <ul className="list-disc pl-6 text-ink-muted leading-[1.8] space-y-1 mb-6">
          <li>na přístup ke svým údajům,</li>
          <li>na jejich opravu či doplnění,</li>
          <li>na výmaz (tzv. právo být zapomenut),</li>
          <li>na omezení zpracování,</li>
          <li>vznést námitku proti zpracování,</li>
          <li>odvolat udělený souhlas,</li>
          <li>
            podat stížnost u dozorového úřadu —{" "}
            <a
              href="https://www.uoou.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-peach-2 underline hover:text-dark"
            >
              Úřad pro ochranu osobních údajů
            </a>
            .
          </li>
        </ul>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Svá práva můžete uplatnit písemně na adrese dílny nebo e-mailem na{" "}
          <a
            href={`mailto:${kontakty.email}`}
            className="text-peach-2 underline hover:text-dark"
          >
            {kontakty.email}
          </a>
          . Vyřídíme je nejpozději do jednoho měsíce.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          7. Cookies
        </h2>
        <p className="text-ink-muted leading-[1.8] mb-6">
          Web nepoužívá sledovací cookies ani analytické nástroje třetích
          stran. Mapové podklady ve stránce Kontakt jsou vloženy jako iframe
          ze služby mapy.cz (Seznam.cz a.s.) — její využití se řídí zásadami
          tohoto poskytovatele.
        </p>

        <h2 className="h-display text-dark text-[clamp(22px,2.6vw,28px)] mt-10 mb-4">
          8. Změny zásad
        </h2>
        <p className="text-ink-muted leading-[1.8]">
          Tyto zásady můžeme průběžně aktualizovat. Aktuální znění je vždy
          k dispozici na této stránce spolu s datem platnosti.
        </p>
      </article>
    </>
  );
}
