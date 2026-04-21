# CLAUDE.md — Kontext projektu Kovovýroba Rozbroj

## DŮLEŽITÉ — PŘEČTI NEJDŘÍV

**Než začneš cokoliv dělat, otevři si v prohlížeči referenční web:**
**https://metalprowelding.webnode.cz/**

Toto je stávající web klienta, který chceme zachovat **strukturou i designem 1:1** s drobnými vylepšeními popsanými v `DESIGN.md`. Projdi si všech 5 stránek (Úvod, O nás, Služby, Naše práce, Kontakt) v mobilní i desktopové verzi a pochop:

- Jak vypadá hlavička s logem a menu
- Jak jsou sekce navzájem oddělené (horizontální čáry)
- Jak se chovají fotky (full-width)
- Jak funguje hamburger menu na mobilu
- Jaká je celková atmosféra (industriální, tmavá, "kovová")

**Tento web je návrh, který si klient sám vytvořil a je spokojený. Naším cílem je to samé postavit lépe, rychleji a nezávisle na Webnode.**

---

## O projektu

**Klient:** Kovovýroba Rozbroj — rodinná firma, otec a syn z Karviné
**Obor:** Kovovýroba na zakázku (brány, ploty, schodiště, zábradlí, kovový nábytek)
**Cíl:** Nahradit placený Webnode vlastním webem hostovaným na Vercelu
**Doména:** kovovyrobarozbroj.cz
**Jazyk:** pouze čeština
**Typ webu:** Statický prezentační web, 5 stránek, bez CMS, bez backendu

## Technický stack

- **Framework:** Astro (nejlepší volba pro statické prezentační weby, rychlé, SEO-friendly)
- **Styling:** Tailwind CSS
- **Fonty:** Google Fonts (viz DESIGN.md)
- **Deploy:** Vercel (napojeno na GitHub, auto-deploy při pushi)
- **Hosting obrázků:** přímo v repozitáři (složka `/public/images/`)

## Struktura projektu

```
kovovyrobarozbroj/
├── public/
│   ├── images/
│   │   ├── logo.png             # Hlavní logo
│   │   ├── logo-white.png       # Případně varianty
│   │   ├── hero.jpg             # Úvodní fotka
│   │   ├── gallery/             # Galerie Naše práce
│   │   │   ├── brana-01.jpg
│   │   │   ├── plot-01.jpg
│   │   │   └── ...
│   │   └── services/            # Fotky na stránce Služby
│   ├── favicon.ico
│   └── og-image.jpg             # Obrázek pro sdílení na FB/WA
├── src/
│   ├── components/
│   │   ├── Header.astro         # Hlavička s logem + hamburger menu
│   │   ├── Footer.astro         # Patička
│   │   ├── Hero.astro           # Hero sekce na úvodu
│   │   ├── ContentSection.astro # Opakovaná sekce (fotka + text)
│   │   └── Gallery.astro        # Galerie s lightboxem
│   ├── layouts/
│   │   └── BaseLayout.astro     # Společný layout všech stránek
│   ├── pages/
│   │   ├── index.astro          # Úvod (/)
│   │   ├── o-nas.astro          # /o-nas
│   │   ├── sluzby.astro         # /sluzby
│   │   ├── nase-prace.astro     # /nase-prace
│   │   └── kontakt.astro        # /kontakt
│   └── styles/
│       └── global.css           # Tailwind + případné custom styly
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── CLAUDE.md                    # Tento soubor
├── PLAN.md                      # Detailní plán
├── CONTENT.md                   # Veškeré texty a obsah
├── DESIGN.md                    # Barvy, fonty, design
└── README.md                    # Stručný přehled
```

## Klíčové konvence

- **Mobile-first responsivita.** Klient prohlíží web hlavně na mobilu, designový reference je screenshot mobilu
- **Sémantické HTML** — správné `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>` jen jeden na stránku
- **Alt texty** u všech obrázků (pro SEO a přístupnost) — např. `alt="Kovová pojezdová brána s perforovaným plechem"`
- **Meta tagy** na každé stránce — title, description, OG tagy pro sdílení
- **Optimalizované obrázky** — použij Astro `<Image>` komponentu nebo převeď fotky na WebP
- **Žádné JavaScript frameworks** (React, Vue) — Astro zvládne vše nativně. JS používáme jen pro galerii/lightbox a hamburger menu, ideálně v čistém JS (nebo Alpine.js)
- **Čeština v URL je OK** ale bez diakritiky: `/o-nas`, `/sluzby`, `/nase-prace`, `/kontakt`
- **Žádné cookies / tracking / analytika** v první verzi (dá se přidat Google Analytics později)

## Co NEDĚLAT

- **Nepřidávat** sekce, které na Webnode referenci nejsou (žádné FAQ, reference, "jak probíhá zakázka"). Zachováváme 1:1
- **Nepoužívat** stock fotky (na Webnode je jedna z Pexels — tu **nahradíme vlastní fotkou** klienta)
- **Nepoužívat** emoji ani v kódu, ani v textech na webu
- **Neřešit** kontaktní formulář — klient to nechce, lidé si zkopírují email z kontaktní stránky a napíšou sami
- **Neinstalovat** zbytečné balíčky. Čím méně závislostí, tím líp
- **Nevymýšlet** texty — všechny texty jsou v `CONTENT.md` doslova. Používej je beze změn

## Postup práce

Postupuj podle `PLAN.md`. Nepřeskakuj kroky. Po každém větším kroku udělej commit do Gitu, ať máš historii.

## Co dělat, když si nejsi jistý

1. Otevři referenční web `https://metalprowelding.webnode.cz/` a podívej se, jak to vypadá tam
2. Podívej se do `DESIGN.md` na design tokeny
3. Podívej se do `CONTENT.md` na texty
4. Raději se zeptej uživatele, než bys něco vymýšlel

## Kontakt na vývojáře

Toto je projekt, který dělá kamarád klienta v Claude Code. Není to profesionální vývojář, takže:
- Používej jednoduché a přímočaré řešení
- Vysvětluj, co děláš a proč
- Pokud dojde k chybě, popiš ji srozumitelně a navrhni, co zkusit
