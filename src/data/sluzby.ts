import type { ServiceIconName } from "@/components/ServiceIcon";

export interface Sluzba {
  icon: ServiceIconName;
  title: string;
  desc: string;
  items: string[];
  photo: string;
  photoAlt: string;
}

export const sluzby: Sluzba[] = [
  {
    icon: "gate",
    title: "Brány a garážová vrata",
    desc:
      "Vjezdové brány jednokřídlé i dvoukřídlé, posuvné brány, garážová vrata sekční, výklopná nebo rolovací. Vše s možností automatizace a dálkového ovládání.",
    items: [
      "Jednokřídlé a dvoukřídlé brány",
      "Posuvné brány",
      "Garážová vrata (sekční, výklopná)",
      "Automatizace a pohony",
    ],
    photo: "/images/prace/prace-22.webp",
    photoAlt: "Realizace kovové brány — Kovovýroba Rozbroj Karviná",
  },
  {
    icon: "fence",
    title: "Ploty a branky",
    desc:
      "Oplocení pozemků v různých stylech — od klasických svařovaných plotů po moderní kovové plotové systémy. Vstupní branky na míru.",
    items: [
      "Svařované plotové dílce",
      "Kované ozdobné ploty",
      "Vstupní branky",
      "Kombinace s hliníkovými prvky",
    ],
    photo: "/images/prace/prace-19.webp",
    photoAlt: "Realizace kovového plotu a branky — Kovovýroba Rozbroj Karviná",
  },
  {
    icon: "stairs",
    title: "Schodiště",
    desc:
      "Interiérová i exteriérová schodiště z oceli, nerezové oceli nebo v kombinaci s dřevem. Přímá, lomená, točitá — vždy na míru prostoru.",
    items: [
      "Přímá a lomená schodiště",
      "Točitá schodiště",
      "Kombinace ocel + dřevo",
      "Nerezová schodiště",
    ],
    photo: "/images/prace/prace-14.webp",
    photoAlt: "Realizace interiérového schodiště — Kovovýroba Rozbroj Karviná",
  },
  {
    icon: "rail",
    title: "Zábradlí",
    desc:
      "Bezpečnostní i dekorativní zábradlí pro schodiště, balkony, terasy a francouzská okna. Klasické i moderní tvary, ocel i nerez.",
    items: [
      "Zábradlí na schodiště",
      "Balkónové a terasové zábradlí",
      "Francouzská okna",
      "Nerezové provedení",
    ],
    photo: "/images/prace/prace-06.webp",
    photoAlt: "Realizace nerezového zábradlí — Kovovýroba Rozbroj Karviná",
  },
  {
    icon: "nerez",
    title: "Nerezová ocel",
    desc:
      "Speciální výrobky z nerezové oceli — odolné vůči korozi, hygienické a elegantní. Ideální pro náročné prostředí.",
    items: [
      "Nerezové zábradlí",
      "Nerezové brány",
      "Hygienické prostory",
      "Povrchová úprava brushed/lesk",
    ],
    photo: "/images/prace/prace-08.webp",
    photoAlt: "Výrobek z nerezové oceli — Kovovýroba Rozbroj Karviná",
  },
  {
    icon: "furniture",
    title: "Kovový nábytek",
    desc:
      "Jídelní stoly s masivní nebo mramorovou deskou, noční stolky, TV stolky a konzoly. Každý kus navrhujeme a vyrábíme individuálně.",
    items: [
      "Jídelní stoly",
      "Noční stolky",
      "TV konzoly",
      "Poličkové systémy",
    ],
    photo: "/images/prace/prace-16.webp",
    photoAlt: "Kovový stůl na míru — Kovovýroba Rozbroj Karviná",
  },
];
