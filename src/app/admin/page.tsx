import type { Metadata } from "next";
import { logoutAction } from "./login/actions";

export const metadata: Metadata = {
  title: "Správa webu",
  robots: { index: false, follow: false },
};

const sekce = [
  {
    href: "/admin/galerie",
    nazev: "Galerie prací",
    popis: "Přidat, smazat a upravit fotky na stránce Naše práce",
  },
  {
    href: "/admin/hero",
    nazev: "Úvodní fotky",
    popis: "Spravovat fotky v úvodním slideshow na hlavní stránce",
  },
  {
    href: "/admin/o-nas",
    nazev: "O nás — fotka",
    popis: "Vyměnit hlavní fotku na stránce O nás",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">
              Kovovýroba Rozbroj
            </p>
            <h1 className="text-2xl font-bold">Správa webu</h1>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Odhlásit se
            </button>
          </form>
        </div>

        <div className="grid gap-3">
          {sekce.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="block p-6 bg-white/[0.04] border border-white/[0.08] hover:border-peach/60 hover:bg-white/[0.07] transition-all"
            >
              <h2 className="text-lg font-semibold mb-1">{s.nazev}</h2>
              <p className="text-white/40 text-sm">{s.popis}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
