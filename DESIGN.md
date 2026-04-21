# DESIGN.md — Design system

**Reference:** https://metalprowelding.webnode.cz/ — projdi si, jak to vypadá, a drž se toho.

---

## Celková atmosféra

**Klíčová slova:** tmavé, industriální, kovové, profesionální, čisté, důvěryhodné.

**Cílová skupina:** majitelé rodinných domů 30–60 let, stavebníci, investoři. Preferují jednoduchost a jistotu před módností.

---

## Barvy

### Paleta

Použij tyto hex kódy (přesně odečteno z referenčního webu):

| Barva | Hex | Použití |
|---|---|---|
| Pozadí tmavé | `#1a1a1a` nebo `#1c1c1c` | Hlavní pozadí stránky |
| Pozadí sekcí | `#141414` | Střídavé sekce (lehce tmavší) |
| Text bílý | `#FFFFFF` | Body text, popisky |
| Text světle šedý | `#E5E5E5` | Sekundární text |
| Nadpisy modré | `#5BA8E8` | H2 a H3 nadpisy (světle modrá, "svářečská") |
| Akcent modrá tlačítka | `#4A90E2` | Tlačítka, linky |
| Akcent modrá hover | `#3A7FC9` | Hover stavy tlačítek |
| Dekorativní čára | `#5BA8E8` | Krátká modrá linka pod nadpisy |
| Logo zelená | `#A8D5C2` | Část loga "KOVOVÝROBA" (mentolová) |
| Logo oranžová | `#D9A06B` | Část loga "ROZBROJ" (měděná) |

### Tailwind config

Přidej do `tailwind.config.mjs`:

```js
export default {
  // ...
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1a1a1a',
        'bg-darker': '#141414',
        'accent': {
          DEFAULT: '#4A90E2',
          hover: '#3A7FC9',
          light: '#5BA8E8',
        },
        'logo-mint': '#A8D5C2',
        'logo-copper': '#D9A06B',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Použití barev (pravidla)

- **Pozadí celé stránky:** `bg-dark` (#1a1a1a)
- **Nadpisy H1, H2:** `text-accent-light` (#5BA8E8)
- **Nadpisy H3 (podsekce):** může být bílá nebo `text-accent-light`, zvol podle kontextu
- **Body text:** bílá nebo `text-gray-200`
- **Tlačítka:** `bg-accent` s bílým textem, hover `bg-accent-hover`
- **Odkazy v textu:** `text-accent-light`, na hover podtržené

---

## Typografie

### Fonty

**Nadpisy (H1, H2):** **Playfair Display** — serifové písmo, elegantní, dává firmě váhu
**Podnadpisy, body text, UI:** **Inter** — moderní bezpatkové, čitelné, univerzální

**Import v `BaseLayout.astro` head:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

### Velikosti (mobile-first)

Použij Tailwind třídy, ale tady máš referenci:

| Element | Mobil | Tablet | Desktop |
|---|---|---|---|
| H1 | `text-4xl` (2.25rem) | `text-5xl` | `text-6xl` |
| H2 | `text-3xl` | `text-4xl` | `text-5xl` |
| H3 | `text-2xl` | `text-2xl` | `text-3xl` |
| Body | `text-base` (1rem) | `text-base` | `text-lg` |
| Button | `text-sm` uppercase | `text-base` | `text-base` |

### Pravidla

- **H1 jen jeden na stránku** (hlavní nadpis)
- Nadpisy **NE tučně** (Playfair Display má hezký regular weight)
- Body text `font-weight: 400`
- **NE používat tučný text** pro zvýraznění v body textu. Na Webnode to přehnali, my zachováme umírněnost.
- Ideální délka řádku: 60–80 znaků. Na desktopu tedy `max-w-prose` nebo `max-w-2xl`
- Řádkování body textu: `leading-relaxed` (1.625)

### Dekorativní čára pod nadpisy

Referenční web má pod některými nadpisy krátkou modrou čáru. Implementuj jako:

```html
<h2 class="text-4xl text-accent-light">Nadpis</h2>
<div class="w-16 h-0.5 bg-accent-light mt-3 mb-6"></div>
```

---

## Layout a mezery

### Max šířka obsahu

- **Hlavní kontejner:** `max-w-7xl mx-auto px-4 md:px-8`
- **Textové bloky:** `max-w-3xl` (ne širší, je to nečitelné)
- **Hero sekce:** full-width

### Mezery mezi sekcemi

- Desktop: `py-24`
- Mobil: `py-16`
- Mezi odstavci textu: `mb-6`

### Horizontální oddělovače

Na Webnode jsou mezi sekcemi tenké bílé linky. Implementace:

```html
<hr class="border-0 h-px bg-white/20 my-16" />
```

---

## Komponenty

### Hlavička (Header)

- **Pozadí:** `bg-dark` s texturou "broušený kov" (pokud máš obrázek) nebo jen tmavé
- **Výška:** ~80px na desktop, ~70px na mobil
- **Logo vlevo:** klikatelné, odkaz na `/`
- **Menu vpravo:**
  - Desktop (`≥md`): vodorovné odkazy s hover efektem
  - Mobil: hamburger ikona, po kliknutí se otevře fullscreen overlay

**Hamburger menu (mobile):**
- Tmavé pozadí (bg-dark nebo černé s 95% opacity)
- Velké odkazy centrované
- Křížek vpravo nahoře pro zavření
- Ikony sociálních sítí dole (IG, FB)

### Patička (Footer)

- Tmavší pozadí (`bg-darker`)
- 3 sloupce na desktopu, 1 sloupec na mobilu:
  - Sloupec 1: Logo + krátký popis firmy
  - Sloupec 2: Odkazy (Úvod, O nás, Služby, Naše práce, Kontakt)
  - Sloupec 3: Kontakt (email, telefon, sociální sítě)
- Copyright úplně dole, centrovaný

### Tlačítka (Buttons)

**Primární:**
```html
<a href="/kontakt" class="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white uppercase tracking-wider text-sm font-medium transition-colors">
  Kontaktujte nás
</a>
```

**Sekundární (outline):**
```html
<a href="/o-nas" class="inline-block px-8 py-3 border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-bg-dark uppercase tracking-wider text-sm font-medium transition-colors">
  O nás
</a>
```

### ContentSection komponenta

Opakovaná sekce typu "fotka + nadpis + text + (tlačítko)":

```astro
---
const { image, imageAlt, title, text, buttonText, buttonLink } = Astro.props;
---
<section class="py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    <div class="mb-8">
      <img src={image} alt={imageAlt} class="w-full h-auto rounded-sm" />
    </div>
    <div class="max-w-3xl">
      <h2 class="text-3xl md:text-5xl font-serif text-accent-light mb-3">{title}</h2>
      <div class="w-16 h-0.5 bg-accent-light mb-6"></div>
      <div class="text-white text-base md:text-lg leading-relaxed mb-6">
        <Fragment set:html={text} />
      </div>
      {buttonText && (
        <a href={buttonLink} class="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white uppercase tracking-wider text-sm font-medium transition-colors">
          {buttonText}
        </a>
      )}
    </div>
  </div>
</section>
```

### Galerie (Naše práce)

- **Grid:** 1 sloupec mobil, 2 tablet, 3 desktop
- Mezery mezi fotkami: `gap-4`
- Fotky mají `aspect-square` (čtvercové) nebo `aspect-[4/3]` — zvol to, co vypadá lépe
- Hover efekt: lehké zesvětlení nebo mírný zoom
- Klik → lightbox (pro Astro je dobrá knihovna `@lorenzoangelini/astro-photoswipe` nebo použij lightbox2)

### Kontaktní karty

Každý kontakt (email, telefon, adresa, IG) v samostatné kartě s ikonou:

```html
<div class="flex items-start gap-4 mb-8">
  <div class="flex-shrink-0 w-12 h-12 border-2 border-accent-light rounded-full flex items-center justify-center">
    <!-- ikona -->
  </div>
  <div>
    <h3 class="text-xl text-accent-light mb-1">E-mail</h3>
    <a href="mailto:..." class="text-white hover:text-accent-light">metalartkovovyroba@gmail.com</a>
  </div>
</div>
```

Ikony: použij **Lucide Icons** (jednoduchý import jako SVG) nebo **Heroicons**.

---

## Obrázky

### Specifikace

- **Formát:** WebP (s JPEG fallback pro staré prohlížeče)
- **Optimalizace:** Astro Image komponenta automaticky optimalizuje
- **Rozměry:**
  - Hero: 1920×1080 (nebo 16:9)
  - Galerie: 1200×900 (4:3) nebo 1200×1200 (1:1)
  - Sekční obrázky: 1600×900
- **Kvalita:** 80 % (kompromis mezi kvalitou a velikostí)
- **Lazy loading:** `loading="lazy"` na všechny, kromě hero

### Alt texty

Každý obrázek musí mít popisný alt text v češtině:
- ✓ `alt="Kovová pojezdová brána s perforovaným plechem, černá barva"`
- ✗ `alt="brana"` nebo `alt="IMG_2149"`

---

## Responsivita — breakpointy

Používej Tailwind defaulty:

- `sm:` ≥640px (malé tablety)
- `md:` ≥768px (tablety)
- `lg:` ≥1024px (notebooky)
- `xl:` ≥1280px (desktop)

### Mobile-first

**VŠECHNY** styly piš mobile-first. To znamená základní třída je pro mobil, a `md:`, `lg:` přidávají styly pro větší obrazovky.

```html
<!-- správně -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">

<!-- špatně -->
<h1 class="text-6xl sm:text-5xl md:text-4xl">
```

---

## Detaily, které často chybí

- ✓ Favicon (16x16, 32x32, 180x180 pro Apple)
- ✓ OG image pro sdílení (1200x630)
- ✓ `lang="cs"` v `<html>`
- ✓ `meta viewport` pro mobilní responsivitu
- ✓ Theme color pro mobilní prohlížeče: `<meta name="theme-color" content="#1a1a1a">`
- ✓ Hover stavy na všech odkazech a tlačítkách
- ✓ Focus stavy (pro keyboard navigaci) — Tailwind `focus:ring-2 focus:ring-accent-light`
- ✓ Smooth scroll: `html { scroll-behavior: smooth; }`
- ✓ Prevent horizontal scroll: `body { overflow-x: hidden; }`

---

## Vylepšení oproti Webnode referenci

Udržuj **strukturu a obsah 1:1**, ale vylepši:

1. **Konzistentní modrá** — na Webnode má tlačítko jiný odstín než nadpisy. My je sjednotíme.
2. **Méně tučného textu** — na Webnode je hodně textů v `<strong>`. Nechej body text normální, jen skutečně důležité zvýrazni.
3. **Lepší hierarchie nadpisů** — každá stránka má jen jeden H1, pak H2, pak H3. Žádné přeskakování úrovní.
4. **Hero nadpis** — na Webnode se na mobilu láme přes 3 řádky ("Kovovýroba a / svářečské práce / na míru"). Zkus mírně menší velikost, ať to je kompaktnější (max 2 řádky).
5. **Rychlejší načítání** — WebP obrázky, optimalizovaný font loading, žádný zbytečný JS.
6. **Nahradit stock Pexels foto** na stránce Služby vlastní fotkou klienta z dílny.

---

## Logo

Klient má 3 varianty loga na Webnode. Stáhni všechny a použij:

- **Hlavní logo** — v hlavičce, základní verze (Kovovýroba Rozbroj v zeleno-oranžové)
- **Logo pro patičku** — pokud má variantu vhodnou na tmavé pozadí, použij tam
- **Favicon** — vygeneruj z loga přes https://favicon.io/

**Pozadí kolem loga (paprsky):** toto je součást designu loga. Ponech.

**Pokud logo není ve vektorech (SVG):** použij PNG, nejlépe 2x velikost skutečné displejové (retina).

---

## Animace a interakce

**Drž se minimalismu.** Žádné přehnané animace, průlety, paralax.

Co je OK:
- Plynulé hover efekty na tlačítkách (`transition-colors duration-200`)
- Fade-in obrázků při scrollu (optional, použij `IntersectionObserver`)
- Smooth scroll na kotvy
- Plynulé otevírání/zavírání hamburger menu

Co NE:
- Kompletní page transitions
- Paralax efekty
- Animované texty (typewriter, fade-in-letter-by-letter)
- Automaticky přehrávaná videa
- Sticky elementy, které ruší

---

## Finální checklist designu

Před deployem si projdi:

- [ ] Barvy odpovídají referenčnímu webu
- [ ] Nadpisy Playfair Display, text Inter
- [ ] Všechny tlačítka mají stejný styl a hover
- [ ] Mezery mezi sekcemi jsou konzistentní
- [ ] Obrázky mají stejné zaoblení rohů (nebo žádné)
- [ ] Footer je na všech stránkách stejný
- [ ] Header vypadá stejně na všech stránkách
- [ ] Active stránka v menu je nějak zvýrazněná
- [ ] Na mobilu vypadá vše stejně dobře jako na desktopu
- [ ] Žádný text se nedotýká okrajů obrazovky (vždy `px-4` minimum)
