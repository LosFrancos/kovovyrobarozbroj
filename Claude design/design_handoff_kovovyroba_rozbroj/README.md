# Handoff: Kovovýroba Rozbroj — Redesign webu

## Overview
Kompletní redesign webu pro rodinnou kovovýrobu **Kovovýroba Rozbroj** (Karviná). Web prezentuje služby (brány, ploty, schodiště, zábradlí, nerez, kovový nábytek), představuje rodinný tým (otec a syn), galerii realizací a kontaktní formulář pro nezávaznou poptávku.

Klient již má běžící Next.js projekt nasazený na Vercelu: `https://kovovyrobarozbroj.vercel.app/`. Úkolem je **přepracovat existující kód podle tohoto nového designu**, zachovat funkční routing (`/`, `/o-nas`, `/sluzby`, `/nase-prace`, `/kontakt`) a obsah.

## About the Design Files
Soubory v `prototype/` (zejména `Kovovyroba Rozbroj.html`) jsou **designový referenční prototyp vytvořený v HTML/React + inline stylech**. Je to ukázka **zamýšleného vzhledu a chování**, nikoliv produkční kód určený ke zkopírování jedna ku jedné.

Úkolem je **tento design znovu implementovat v cílovém prostředí** (stávající Next.js projekt klienta — pravděpodobně `/app` router s React komponentami, CSS Modules nebo Tailwind). Použij vlastní konvence projektu, knihovny, strukturu komponent a patterns, které už tam jsou.

Nekopíruj inline styly z prototypu — extrahni je do CSS proměnných / Tailwind tokenů / styled-components podle toho, co projekt používá.

## Fidelity
**High-fidelity (hifi)** — všechny barvy, typografie, rozložení a interakce jsou finální. Implementuj pixel-perfect podle prototypu.

---

## Design Tokens

### Barvy (odvozené z loga klienta)
```
--dark:      #1a1e1c   /* téměř černá, lehce teplý odstín — pozadí loga, tmavé sekce */
--dark-2:    #262b29   /* světlejší varianta pro karty na tmavém */
--peach:     #f2c9a0   /* broskvová — hlavní akcent, CTA tlačítka, "ROZBROJ" v logu */
--peach-2:   #dfb280   /* hover stav peach */
--mint:      #c5e5d8   /* mint zelená — doplňkový akcent, "KOVOVÝROBA" v logu */
--mint-2:    #a8d4c1   /* hover/tmavší varianta */
--cream:     #f5f2ed   /* krémové pozadí hlavního body */
--warm-gray: #e8e5df   /* světlé oddělovače, subtilní výplně */
--text:      #1a1a1a   /* hlavní text */
--text-muted:#6b6b6b   /* popisky, meta */
--white:     #ffffff
```

**Klíčové kombinace:**
- Tmavé sekce: `--dark` pozadí + bílý text + `--peach` akcenty
- Světlé sekce: `--cream` pozadí + `--text` + `--peach` akcenty
- CTA tlačítka: `--peach` pozadí + `--dark` text (broskvová je světlá, takže na ní *musí* být tmavý text, ne bílý)

### Typografie
Google Fonts:
```
Barlow Condensed — weights 400, 600, 700, 800 — pro nadpisy, eyebrow texty, tlačítka
Barlow           — weights 300, 400, 500, 600 — pro body text, popisky
```

Scale:
| Použití | Font | Weight | Size | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero H1 | Barlow Condensed | 800 | `clamp(52px, 8vw, 110px)` | -0.01em | 0.92 |
| Page H1 | Barlow Condensed | 800 | `clamp(48px, 7vw, 88px)` | -0.01em | 0.95 |
| Section H2 | Barlow Condensed | 800 | `clamp(36px, 5vw, 56px)` | -0.01em | 1 |
| Sub-H2 (v sekci) | Barlow Condensed | 800 | 38–44px | -0.01em | 1 |
| Card H3 | Barlow Condensed | 700 | 18–22px | 0.02em | 1.2 |
| Eyebrow label | Barlow Condensed | 600 | 12px | 0.2em | 1 (uppercase) |
| Body text | Barlow | 300–400 | 15–17px | normal | 1.7–1.85 |
| Button | Barlow | 600–700 | 13–15px | 0.04–0.05em | 1 |
| Meta/caption | Barlow | 400–500 | 11–13px | 0.08–0.15em | 1 |

### Spacing & Layout
- Max content width: **1280px** (`max-width: 1280px; margin: 0 auto`)
- Horizontální padding: **32px** (mobile: 20px)
- Vertical spacing mezi sekcemi: **80–100px** (mobile: 60–80px)
- Nav height: **72px** (fixed)
- Grid gaps: **60–80px** (dva sloupce), **16–24px** (grid karet), **2px** (ServicesGrid — intentionally ostrý zero-gap look)

### Border, shadow, radius
- **Žádné** rounded corners na hlavních prvcích (ostrý, průmyslový look)
- Logo v navigaci: `borderRadius: 4px` (jediná výjimka)
- Tlačítka: square (0 radius)
- Karty: square
- Žádné vržené stíny u hlavního layoutu (čistý flat design)
- Tweaks panel (dev only): `boxShadow: 0 8px 40px rgba(0,0,0,0.15)`

### Animace
- Page transition: `fadeUp` keyframe, 0.45s ease-out (při změně stránky)
- Hover states: `transition: 0.15–0.25s`
- Button hover: `translateY(-2px)` + background change
- Service card hover: `translateY(-4px)` + background `--dark` + border-top `--peach`
- Scroll-reveal (volitelné): `fadeUp` 0.7s ease-out

---

## Screens / Views

### Shared: Navigation (fixed top)
- Pozice: `fixed`, full-width, z-index 100
- Height: 72px
- Pozadí:
  - Na Úvodu a nahoře: `transparent`
  - Po scrollu (>40px): `rgba(26,30,28,0.97)` + `backdrop-filter: blur(12px)` + `border-bottom: 1px solid rgba(255,255,255,0.07)`
  - Na ostatních stránkách: `rgba(26,30,28,1)` od začátku
- Obsah zleva doprava: logo | menu (Úvod / O nás / Služby / Naše práce) | Kontakt CTA button
- Logo: `images/logo.jpg`, výška 48px, auto šířka, `borderRadius: 4px`
- Menu linky: Barlow 14px, weight 500, letter-spacing 0.04em, barva `rgba(255,255,255,0.8)` → na aktivní stránce `--peach` + spodní 2px border
- Kontakt CTA: `--peach` bg + `#fff` text, 10px/22px padding, weight 600, fontSize 13
- **Mobile (<768px)**: skryj desktop nav, zobraz hamburger. Mobile menu rozvine pod nav s odkazy na všechny stránky včetně Kontaktu

### Shared: Footer
- Pozadí: `--dark`, padding: `60px 32px 32px`
- Grid: `2fr 1fr 1fr` — (O firmě | Navigace | Kontakt), na mobilu 1fr
- Sloupec 1: logo text ("KOVOVÝROBA ROZBROJ" Barlow Condensed 800 22px) + eyebrow "KARVINÁ · KOVOVÝROBA NA MÍRU" v `--peach` + popis v `rgba(255,255,255,0.5)`
- Sloupec 2: eyebrow "NAVIGACE" v `--peach` + všechny nav linky
- Sloupec 3: eyebrow "KONTAKT" v `--peach` + telefony (Tomáš, Martin) + email
- Copyright lišta: `border-top: 1px solid rgba(255,255,255,0.1)`, fontSize 12, text `rgba(255,255,255,0.35)`

### Shared: PageHeader component
Všechny 4 vnitřní stránky (O nás / Služby / Naše práce / Kontakt) mají **konzistentní page header** s fotkou na pozadí:
- Pozadí: `--dark` + background-image (opacity 0.55) + gradient overlay `rgba(26,30,28,0.92) → 0.65 → 0.4`
- Levý 4px peach accent bar (vertikální, full-height)
- Padding: `100px 32px 90px`
- Obsah: eyebrow label (12px, letter-spacing 0.2em, peach) + H1 (Barlow Condensed 800, `clamp(48px, 7vw, 88px)`, white, lineHeight 0.95)
- Hotový komponent `PageHeader({eyebrow, title, bgUrl, darkColor, peachColor})` v prototypu
- **Fotky pro každou stránku** (může klient později vyměnit za své):
  - O nás: detail řemesla / dílna
  - Služby: svařování / proces
  - Naše práce: hotové schodiště / široký záběr
  - Kontakt: kovová dílna / atmosféra

### 1. Úvod (Home) — `/`
Sekce v pořadí:

**1.1 Hero (`min-height: 100vh`) — SLIDESHOW**
- Pozadí: **rotující slideshow fotografií** (cross-fade + Ken Burns zoom efekt)
  - Array `HERO_SLIDES` (v prototypu) obsahuje 4 fotky (URL + label)
  - Střídání každých 5 sekund, fade 1.4s
  - Každá fotka má opacity 0.85 při aktivním stavu a `transform: scale(1.06)` s 6s transition (Ken Burns)
  - Linear gradient overlay zleva doprava: `rgba(26,30,28,0.85) → 0.55 → 0.35` — tma zleva kde je text, světlo vpravo kde je fotka
  - Progress indikátor vpravo dole: klikatelné tečky (32×2 aktivní peach / 16×2 neaktivní bilá 0.3)
- Levý bočník: 5px vertikální pruh `--peach`
- **Později klient dodá vlastní fotky** — stačí vyměnit URL v `HERO_SLIDES` (nezmenit strukturu, jen URL + label)
- Obsah (max 1280px, padding 120px/32px/80px):
  - Badge "KARVINÁ · RODINNÁ KOVOVÝROBA" — `--peach` bg, `--dark` text, 12px uppercase, padding 6px/14px, `whiteSpace: nowrap`
  - H1: "KOVOVÝROBA" bílá + "NA MÍRU." v `--peach` (dva řádky), font-size `clamp(52px, 8vw, 110px)`
  - Podnadpis: 18px, `rgba(255,255,255,0.75)`, max-width 480, lineHeight 1.7
  - Dvě tlačítka: "Nezávazná poptávka →" (peach fill) + "Naše práce" (outline, `rgba(255,255,255,0.35)` border)
  - Stats row (margin-top 80px, border-top): 3 statistiky `15+ let zkušeností` / `100% zakázky na míru` / `A–Z návrh · výroba · montáž`
    - Číslo: Barlow Condensed 800, 42px, `--peach`
    - Label: Barlow 13px, `rgba(255,255,255,0.5)`, letter-spacing 0.08em, uppercase
- Scroll indicator dole uprostřed: "SCROLL" + 1px vertikální gradient line

**1.2 Služby grid** (`padding: 100px 32px`)
- Header row: eyebrow "NAŠE SLUŽBY" + H2 "CO DĚLÁME" + tlačítko "Všechny služby →" (outline)
- Grid: `repeat(auto-fit, minmax(280px, 1fr))`, **gap: 2px** (ostrý look)
- Karta: padding 40px 36px, alternující bg `#f8f7f4` / `#f0ede7`
  - Obsahuje: SVG ikona (32×32) + H3 + popis
  - **Hover**: bg přechází na `--dark`, text white, top-border 3px `--peach`, `translateY(-4px)`
- 6 služeb:
  1. `gate` — Brány & Vrata — "Vjezdové brány, garážová vrata a automatické systémy na míru."
  2. `fence` — Ploty & Branky — "Oplocení pozemků, vstupní branky, plotové pole dle přání."
  3. `stairs` — Schodiště — "Interiérová i exteriérová schodiště z oceli, nerezové i kombinované."
  4. `rail` — Zábradlí — "Bezpečnostní i dekorativní zábradlí do interiéru i exteriéru."
  5. `nerez` — Nerezová ocel — "Výrobky z nerezové oceli — odolné, hygienické, elegantní."
  6. `furniture` — Kovový nábytek — "Stoly, noční stolky, konzolové stolky, TV stojany na zakázku."

**1.3 O nás teaser** (`--dark` background, padding 100px 32px)
- Grid `1fr 1fr` (na mobilu 1fr):
  - Levý sloupec: eyebrow "O NÁS" (peach) + H2 "RODINNÁ DÍLNA S TRADICÍ" (white) + 2 odstavce + tlačítko "Více o nás →" (outline peach)
  - Pravý sloupec: 2×2 grid fotografických tiles (aspect 1/1) s offsetem (druhá nahoře +32px, třetí -32px) — staggered layout

**1.4 CTA Band** (`--dark` bg, `border-top: 3px solid --peach`, padding 72px 32px, text-align center)
- H2 "MÁTE PROJEKT? OZVĚTE SE." (white) + podtitul (0.85 white) + 2 tlačítka: telefon peach button (prvá zavolá přímo) + "Napište nám →" outline

### 2. O nás — `/o-nas`
- **Page header**: `--dark` pozadí, padding 80px, eyebrow "O NÁS" + H1 "RODINNÁ KOVOVÝROBA"
- **Tým sekce** (`padding 100px 32px`, grid 1fr 1fr):
  - Levý: eyebrow "PŘÍBĚH" + H2 "TOMÁŠ A MARTIN ROZBROJ" + 3 odstavce textu o firmě + 2 karty (Tomáš / Martin) s IČ a telefonem
  - Pravý: velký placeholder 4/3 (společné foto) + 2 menší 3/4 placeholdery (individuální)
- **Hodnoty** (`--dark` bg, padding 80px): eyebrow "PROČ MY" + H2 "NAŠE HODNOTY" + grid 4 hodnoty (Individuální přístup / Pečlivé zpracování / Férové jednání / Komplexní servis), každá s horním 32×3 peach indikátorem

### 3. Služby — `/sluzby`
- Page header stejně jako O nás, H1 "CO VYRÁBÍME"
- 6 sekcí služeb alternujících layout (sudý: text-foto, lichý: foto-text):
  - Číslo "01–06" v peach eyebrow
  - H2 uppercase
  - Popis + bullet list (peach čtverec 6×6 + text)
- Každá sekce má `border-bottom: 1px solid #e8e5df`
- CTA na konci: **peach band** "NENAŠLI JSTE CO HLEDÁTE?" + bílé tlačítko "Kontaktujte nás →"

Obsah služeb (viz prototyp řádek cca 580–620 — `sluzby` array obsahuje title/desc/items/photo labels).

### 4. Naše práce — `/nase-prace`
- Page header: H1 "NAŠE PRÁCE", eyebrow "REFERENCE"
- Filter row: tlačítka "Vše / Brány / Schodiště / Zábradlí / Nábytek / Nerez" — aktivní = `--dark` bg + white text; neaktivní = outline `#ccc`
- Grid: `repeat(auto-fill, minmax(280px, 1fr))`, gap 16px
- Gallery item: 4/3 placeholder, na hover překryv gradientem `--dark dd → transparent` s labelem a kategorií
- Pod gridem: info banner že fotografie jsou na cestě

### 5. Kontakt — `/kontakt`
- Page header: H1 "OZVĚTE SE NÁM"
- Grid 1fr 1fr:
  - **Levý**: H2 "KONTAKTNÍ ÚDAJE" + 3 karty (Tomáš / Martin / E-mail) s `border-left: 4px solid --peach`, každá s action linkem (tel: nebo mailto:)
  - **Pravý**: H2 "NEZÁVAZNÁ POPTÁVKA" + formulář
    - Pole: Jméno*, Email*, Telefon, Popis poptávky* (textarea, 5 rows)
    - Submit: peach tlačítko "Odeslat poptávku →"
    - Po odeslání: success card na `--dark` pozadí s checkmarkem

**DŮLEŽITÉ — implementace formuláře:**
V prototypu je `submit` jen `setSent(true)`. V produkci napojit na email backend. **Doporučené řešení: Web3Forms** (zdarma, bez registrace).
1. Zaregistrovat access_key na web3forms.com (klient: info@kovorozbroj.cz)
2. POST na `https://api.web3forms.com/submit` s polem `access_key`, `name`, `email`, `phone`, `message`, `subject: "Nová poptávka z webu"`
3. Přidat honeypot pole proti spamu: `<input type="checkbox" name="botcheck" style={{display:'none'}} />`
4. Po úspěchu zobrazit success state; při chybě zobrazit error hlášku
5. Proměnnou `NEXT_PUBLIC_WEB3FORMS_KEY` uložit do `.env.local` a na Vercelu

Alternativa: Vercel Serverless Function + Resend (více kontroly, 3000 free/month).

---

## Interactions & Behavior

- **Routing**: Next.js App Router — stránky `/`, `/o-nas`, `/sluzby`, `/nase-prace`, `/kontakt`
- **Nav state**: zvýraznění aktivního linku (`usePathname()` v Next.js)
- **Scroll detection**: useEffect + `window.scrollY > 40` → přidat `scrolled` class na nav (přepíná bg z transparent na dark blur)
- **Mobile menu**: useState toggle, zobrazí se pod nav při <768px
- **Hover states**: definované výš v sekcích
- **Form validation**: HTML5 `required` + `type="email"`, + custom success state
- **Smooth scroll**: `html { scroll-behavior: smooth }` + `window.scrollTo({top:0, behavior:'smooth'})` při page change
- **Page transitions**: fadeUp 0.45s při navigaci (implementovat přes Next.js Layout + Framer Motion nebo CSS keyframe s key={pathname})

## Responsive behavior
- **Desktop** (>= 900px): full grid layouts
- **Tablet/Mobile** (< 860px): všechny `grid-template-columns: 1fr 1fr` a `2fr 1fr 1fr` → `1fr` (single column)
- **Mobile** (< 768px): hamburger menu

## SEO & Metadata
- Title: "Kovovýroba Rozbroj — Karviná | Brány, ploty, zábradlí na míru"
- Description by stránce
- Open Graph image: logo nebo foto hero
- Lang: `cs`

## Assets
- **Logo**: `images/logo.jpg` — přiložené v `prototype/images/`. 
  - ⚠️ **Důležité**: tento JPG má omezenou kvalitu a při zmenšení (nav height 48px) se jeví mírně rozmazaně. **Před produkcí vyžádat od klienta originál loga v jednom z těchto formátů:**
    - **SVG** (ideální) — vektor, ostré v jakkoliv velikosti
    - **PNG s transparent background** — minimálně 2× nativní velikost (např. 200×200 pro 100px logo kvůli Retina)
    - **JPG/PNG v plnm rozlišení** — alespoň 500×500px
  - V Next.js použít `next/image` komponentu pro automatické optimalizace a srcSet
- **Hero slideshow fotky**: aktuálně 4 Unsplash placeholdery — viz `HERO_SLIDES` array v prototypu. **Klient později dodá vlastní fotky realizací** (svařování / hotové brány / schodiště / dílna). Doporučení: landscape 1920×1080+, dobrý kontrast, 4–6 fotek. Umístit do `/public/hero/` a odkazovat relativně.
- **Page header fotky**: 4 Unsplash placeholdery pro vnitřní stránky — viz `bgUrl` parametr u `<PageHeader>`. Taky dojde k výměně za klientovy fotky.
- **Existující fotky** (z původního webu, uchovat v `/public/images/`): `hero-svarovani.jpeg`, `branka.png`, `nerez-zabradli.png`, `stul.jpeg`, `logo.png`
- **Nové fotky**: klient dodá fotky majitelů (Tomáš a Martin) a fotky realizací pro sekci "Naše práce". Pro zatím použít placeholdery podle designu (diagonaĺní linky + "IMG" marker).

## Ikony služeb (SVG)
Viz prototyp `ServiceIcon` komponenta — 6 monoline ikon, stroke only, viewBox 24×24:
- `gate` — dvě vrátka s příčnými výplněmi
- `fence` — vertikální lišty s horizontálními příčkami
- `stairs` — schody
- `rail` — zábradlí
- `nerez` — kruh s osy (symbol materiálu)
- `furniture` — stůl s nohama

Všechny 1.5 stroke-width, `stroke: currentColor`, mění barvu z `--dark` na `--peach` při hoveru nad kartou.

---

## Content / Copy
Veškerý český text je v prototypu. Přehled:

- **Název firmy**: Kovovýroba Rozbroj
- **Lokalita**: Karviná
- **Majitelé** (pozn.: *otec a syn*, nikoliv bratři):
  - Tomáš Rozbroj — IČ 09499431 — tel. +420 737 421 618
  - Martin Rozbroj — IČ 23728523 — tel. +420 603 438 228
- **Email**: info@kovorozbroj.cz
- **Akční rádius**: ❌ **NEUVÁDĚT konkrétní státy** — klient dojede všude, záleží na zakázce. Původní web zmiňoval ČR/SK/PL — **v redesignu neuvádět**.

## State Management
Minimální state:
- `menuOpen: boolean` (mobile nav toggle)
- `scrolled: boolean` (nav bg)
- `activeCategory: string` (gallery filter)
- `form: {jmeno, email, telefon, zprava}` + `sent: boolean` (contact form)

Žádný global state, žádné data fetching (prototyp má hard-coded obsah). Obsah stránek lze převést na MDX/JSON soubory pokud chce klient later edit bez dev.

---

## Files v tomto balíčku
- `prototype/Kovovyroba Rozbroj.html` — kompletní interaktivní prototyp (React + inline JSX). Otevři v prohlížeči, klikej navigací, vyzkoušej hover stavy, mobilní responsivitu (resize okna).
- `prototype/images/logo.jpg` — logo klienta
- `README.md` — tento soubor

## Existující codebase (co zachovat/upravit)
Repo na `kovovyrobarozbroj.vercel.app` — pravděpodobně Next.js. **Postup**:
1. Zachovat routing, metadata, SEO
2. Přepsat každou stránku podle odpovídající sekce v designu výš
3. Zavést design tokens (barvy + typography) do globálních stylů (`globals.css` / Tailwind config)
4. Importovat Google Fonts (Barlow + Barlow Condensed)
5. Vytvořit sdílené komponenty: `Nav`, `Footer`, `Eyebrow`, `Button` (primary/outline varianty), `ServiceIcon`, `PhotoPlaceholder`
6. Implementovat formulář s Web3Forms
7. Nahradit placeholdery skutečnými fotkami jakmile je klient dodá
8. Deploy na Vercel, otestovat mobilní verzi

## Checklist před spuštěním
- [ ] Všechny stránky renderují bez chyb
- [ ] Responsivita OK na 375px, 768px, 1440px
- [ ] Google Fonts načteny
- [ ] Logo zobrazeno v navu
- [ ] Formulář odesílá emaily na info@kovorozbroj.cz (test)
- [ ] Telefonní linky `tel:` a email `mailto:` fungují
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Žádné konkrétní státy/regiony v textech
- [ ] "Otec a syn" (nikoliv "bratři") v sekci O nás
