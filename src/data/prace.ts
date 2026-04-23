export type PraceKategorie =
  | "Vše"
  | "Brány"
  | "Schodiště"
  | "Zábradlí"
  | "Nábytek";

export interface PraceItem {
  src: string;
  alt: string;
  label: string;
  kategorie: Exclude<PraceKategorie, "Vše"> | "Vše";
}

export const praceKategorie: PraceKategorie[] = [
  "Vše",
  "Brány",
  "Schodiště",
  "Zábradlí",
  "Nábytek",
];

const rawData: { n: number; cat: PraceItem["kategorie"]; label: string }[] = [
  { n: 1, cat: "Zábradlí", label: "Zábradlí" },
  { n: 2, cat: "Brány", label: "Brána" },
  { n: 3, cat: "Brány", label: "Brána" },
  { n: 4, cat: "Vše", label: "Realizace" },
  { n: 5, cat: "Schodiště", label: "Schodiště" },
  { n: 6, cat: "Zábradlí", label: "Zábradlí" },
  { n: 7, cat: "Vše", label: "Realizace" },
  { n: 8, cat: "Zábradlí", label: "Zábradlí" },
  { n: 9, cat: "Vše", label: "Realizace" },
  { n: 10, cat: "Nábytek", label: "Kovový nábytek" },
  { n: 11, cat: "Vše", label: "Realizace" },
  { n: 12, cat: "Brány", label: "Brána" },
  { n: 13, cat: "Vše", label: "Realizace" },
  { n: 14, cat: "Schodiště", label: "Schodiště" },
  { n: 15, cat: "Zábradlí", label: "Zábradlí" },
  { n: 16, cat: "Nábytek", label: "Kovový nábytek" },
  { n: 17, cat: "Vše", label: "Realizace" },
  { n: 18, cat: "Nábytek", label: "Kovový nábytek" },
  { n: 19, cat: "Brány", label: "Brána" },
  { n: 20, cat: "Vše", label: "Realizace" },
  { n: 21, cat: "Schodiště", label: "Schodiště" },
  { n: 22, cat: "Brány", label: "Brána" },
];

export const prace: PraceItem[] = rawData.map(({ n, cat, label }) => {
  const num = String(n).padStart(2, "0");
  const altLabel = cat === "Vše" ? "realizace" : cat.toLowerCase();
  return {
    src: `/images/prace/prace-${num}.webp`,
    alt: `${label} — Kovovýroba Rozbroj Karviná (${altLabel})`,
    label,
    kategorie: cat,
  };
});
