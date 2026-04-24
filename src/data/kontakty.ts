export interface Osoba {
  jmeno: string;
  telefon: string;
  telefonLink: string;
  ic: string;
}

export const kontakty = {
  firma: {
    nazev: "Kovovýroba Rozbroj",
    slogan:
      "Specializujeme se na výrobu pojezdových bran, garážových vrat, plotových dílců, branek, konstrukcí, schodišť, zábradlí, stolů a mnoho dalšího.",
  },
  email: "info@kovorozbroj.cz",
  osoby: [
    {
      jmeno: "Tomáš Rozbroj",
      telefon: "+420 737 421 618",
      telefonLink: "tel:+420737421618",
      ic: "09499431",
    },
    {
      jmeno: "Martin Rozbroj",
      telefon: "+420 603 438 228",
      telefonLink: "tel:+420603438228",
      ic: "23728523",
    },
  ] as Osoba[],
  adresa: {
    ulice: "Rudé Armády 1820/31",
    psc: "733 01",
    mesto: "Karviná",
    gps: { lat: 49.8713488, lon: 18.5478925 },
  },
  oteviraciDoba: [
    { dny: "Pondělí – Pátek", hodiny: "7:00 – 16:00" },
    { dny: "Sobota – Neděle", hodiny: "zavřeno" },
  ],
  socialni: {
    instagram: {
      handle: "@kovovyroba_rozbroj",
      url: "https://www.instagram.com/kovovyroba_rozbroj",
    },
    facebook: {
      nazev: "Kovovýroba Rozbroj",
      url: "https://www.facebook.com/61572458805025/",
    },
  },
} as const;

export const navigace = [
  { nazev: "Úvod", url: "/" },
  { nazev: "O nás", url: "/o-nas" },
  { nazev: "Služby", url: "/sluzby" },
  { nazev: "Naše práce", url: "/nase-prace" },
  { nazev: "Kontakt", url: "/kontakt" },
] as const;
