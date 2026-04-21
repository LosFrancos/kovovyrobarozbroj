# NOTES.md — Pracovní poznámky

Průběžný deník rozhodnutí, zjištění a otevřených bodů, které nepatří do formálních `.md` (CLAUDE.md, CONTENT.md, DESIGN.md, PLAN.md). Detailní plán viz `C:\Users\Frano\.claude\plans\ahoj-chci-s-za-t-structured-cocoa.md`.

---

## Rozhodnutí

| Kdy | Co | Proč |
|---|---|---|
| 2026-04-22 | Stack: Astro + Tailwind + **TypeScript** (ne čistý JS, jak původně PLAN.md) | Astro default, chytá chyby při psaní, typované schéma pro pozdější CMS, statický build nic nezpomalí |
| 2026-04-22 | Projekt bude **přímo v `C:\Users\Frano\projekty\Rozbroj\`** (ne v podsložce `kovovyrobarozbroj/` jak navrhoval PLAN.md) | Uživatel preferuje |
| 2026-04-22 | Kontakty v `src/data/kontakty.json`, ne hardcoded | Pozdější napojení na CMS/admin bez přepisování šablon |
| 2026-04-22 | **Self-service** editace (fotky galerie, kontakty) = otevřený bod, řešíme po rozhodnutí klienta. Možnosti: Sanity, Decap/Sveltia, TinaCMS, vlastní admin, IG embed + heslovaná /sprava | Netechnický klient, nutnost volby mezi pohodlím, open-source a závislostí na cloudu |
| 2026-04-22 | Po každém kroku se s uživatelem zastavit a zeptat, jestli jdeme dál nebo pushujeme | Uživatel chce kontrolu nad tempem a commit historií |
| 2026-04-22 | Priorita: **funkční web do neděle 2026-04-26**, polish až pokud zbyde čas | Kamarádská pomoc, ne portfoliový kus |

---

## Opravy v `CONTENT.md` (hotovo)

| Místo | Bylo | Je |
|---|---|---|
| Kontakt → E-mail | metalartkovovyroba@gmail.com | **info@kovorozbroj.cz** |
| Kontakt → Telefon | 2 čísla bez přiřazení | Tomáš: +420 737 421 618 / Martin: +420 603 438 228 |
| Kontakt → Závěrečná sekce | jen jména + IČO | + telefony |
| Patička | stary gmail, 1 telefon | nový mail + oba telefony s přiřazením |
| Meta description (kontakt) | stary gmail | nový mail + oba telefony |

Instagram `@kovovyroba_rozbroj` (s podtržítkem) — ponechán jak byl, ověřen že účet žije.

---

## Kontakty — kanonický stav

- **Email:** info@kovorozbroj.cz
- **Tomáš Rozbroj** (syn): +420 737 421 618, IČ 09499431
- **Martin Rozbroj** (otec): +420 603 438 228, IČ 23728523
- **Adresa:** Rudé Armády 1820/31, 733 01 Karviná
- **Otevírací doba:** Po–Pá 7:00–16:00, So–Ne zavřeno
- **Instagram:** @kovovyroba_rozbroj (https://www.instagram.com/kovovyroba_rozbroj)
- **Facebook:** https://www.facebook.com/61572458805025/

Pozn.: Na Webnode je odkaz na starý `@metalprowelding` — nepoužívat.

---

## Assety k získání z Webnode

Tyto fotky a loga jsou na stávajícím Webnode a lze je stáhnout jako podklad. CDN base: `https://18e597e601.cbaul-cdnwnd.com/ef8f3be4b55ea45a32666f05446664cd/`

**Logo (2 varianty):**
- Vertikální: `200000181-3793c3793e/Kovovýroba Rozbroj (3).png` (678×960)
- Horizontální: `200000185-badbfbadc1/Kovovýroba Rozbroj (6).png` (960×678)

**Fotky použité na úvodu:**
- Hero (svařování s jiskrami): `200000071-a9134a9136/IMG_2149.jpeg` (960×638)
- Branka: `200000075-87a5687a57/Branka .png` (960×714)
- Nerez zábradlí: `200000077-3192431925/Nezer zabradlí.png` (960×681)
- Stůl s mramorovou deskou: `200000085-3086530866/d49de127-3e19-47fe-b1a7-027adc6185d7.jpeg` (960×720)

Další stránky Webnode (O nás, Služby, Naše práce, Kontakt) ještě projít, získat fotky a potvrdit texty s `CONTENT.md`.

---

## Kde pokračovat příště

**Hotovo ke 2026-04-22 večer:**
- Fáze 1 — Astro 6.1.8 + Tailwind 4 přes Vite plugin (`@tailwindcss/vite`), `@theme` v `src/styles/global.css` s barvami a fonty z `DESIGN.md`, `astro.config.mjs` má `site: 'https://kovovyrobarozbroj.cz'`.
- Fáze 2 — datová vrstva (`src/data/kontakty.json`, `navigace.json`) + `src/layouts/BaseLayout.astro` + komponenty `Header.astro`, `Footer.astro`, `Hero.astro`, `ContentSection.astro`, `Gallery.astro` (s placeholderem, když nejsou fotky). Build prochází bez chyb.
- `src/pages/index.astro` je teď dočasný stub na `BaseLayout`, obsah se přepíše ve Fázi 3.

**Příště začít Fází 3** — 5 stránek s obsahem doslovně z `CONTENT.md`:
1. `src/pages/index.astro` — Hero + 4 sekce (Profesionální přístup, Nerez, Kovový nábytek, CTA)
2. `src/pages/o-nas.astro`
3. `src/pages/sluzby.astro`
4. `src/pages/nase-prace.astro` — placeholder přes `Gallery.astro` bez props
5. `src/pages/kontakt.astro` — kontaktní karty, Google Maps embed, závěrečná sekce s osobami

Před Fází 3 bude taky potřeba stáhnout fotky z Webnode do `public/images/` (URL v sekci Assety níž).

---

## Otevřené body

- [ ] Projít zbývající 4 stránky Webnode (O nás, Služby, Naše práce, Kontakt) + sesbírat fotky
- [ ] Prohlédnout Facebook a Instagram pro další fotky/info
- [ ] Stáhnout loga a fotky z Webnode do `public/images/`
- [ ] Rozhodnutí klienta ohledně self-service editace (viz PLAN.md Fáze 7)
- [ ] Fotky do galerie „Naše práce" — dodá klient později
- [ ] **Fotky majitelů (Tomáš + Martin společně)** — klient dodá; bude je chtít na web, umístění (hero / O nás / jinde) upřesní později. Počítat s prostorem v O nás a příp. sekci „Kdo jsme" na úvodu.
- [ ] **Doména `kovovyrobarozbroj.cz` — zatím NEKOUPENÁ**, uživatel ji teprve bude kupovat (aktualizováno 2026-04-22). Před fází Deploy je potřeba koupit (Wedos/Forpsi) a nastavit DNS záznamy na Vercel.
- [ ] Vercel účet — založit (ne-li už založený)
