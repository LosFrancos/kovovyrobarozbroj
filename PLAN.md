# PLAN.md — Plán postupu prací

**Cíl:** Postavit a nasadit web Kovovýroba Rozbroj do neděle 27. 4. 2026.

Postupuj po krocích. Každý krok má odhad času a checklist, co má být hotové. Na konci každého kroku udělej `git commit`.

---

## FÁZE 0 — Příprava (PŘED Claude Code)

Tyto kroky dělá uživatel ručně, nepatří Claude Code:

- [ ] Koupit doménu `kovovyrobarozbroj.cz` na Wedosu nebo Forpsi
- [ ] Stáhnout fotky z Instagramu @kovovyroba_rozbroj a Facebooku
- [ ] Stáhnout 3 varianty loga z Webnode (pravým klikem → uložit obrázek)
- [ ] Založit účet na Vercelu (github přihlášení)
- [ ] Založit GitHub repozitář `kovovyrobarozbroj`

---

## FÁZE 1 — Setup projektu (cca 1–2 h)

**Cíl:** Mít funkční Astro projekt s Tailwind CSS, který jede lokálně.

### Kroky:

1. Vytvoř Astro projekt:
   ```bash
   npm create astro@latest kovovyrobarozbroj
   ```
   - Template: "Empty"
   - TypeScript: No (pro jednoduchost)
   - Install dependencies: Yes

2. Přidej Tailwind CSS:
   ```bash
   cd kovovyrobarozbroj
   npx astro add tailwind
   ```

3. Nastav `astro.config.mjs` — přidej `site: 'https://kovovyrobarozbroj.cz'`

4. Vytvoř strukturu složek podle `CLAUDE.md`

5. Nakonfiguruj `tailwind.config.mjs` s barvami a fonty z `DESIGN.md`

6. Přidej Google Fonts do `<head>` (Playfair Display + Inter, viz DESIGN.md)

7. Spusť dev server `npm run dev` a ověř, že to jede na `localhost:4321`

8. Inicializuj Git a udělej první commit

### Checklist:
- [ ] `npm run dev` spouští prázdnou stránku bez chyb
- [ ] Tailwind funguje (otestuj třeba `<div class="bg-red-500">test</div>`)
- [ ] Fonty jsou načteny
- [ ] Git inicializován, první commit hotový

---

## FÁZE 2 — Společné komponenty (cca 2–3 h)

**Cíl:** Mít funkční hlavičku, patičku a layout, který se použije na všech stránkách.

### Kroky:

1. **Vytvoř `BaseLayout.astro`** — společný layout:
   - `<html lang="cs">`
   - `<head>` s meta tagy (title, description, OG tags, favicon)
   - Importuj Header a Footer
   - Slot pro obsah stránky
   - Přijímá props: `title`, `description`, `ogImage`

2. **Vytvoř `Header.astro`:**
   - Logo vlevo (odkaz na homepage)
   - Desktop: vodorovné menu vpravo (Úvod, O nás, Služby, Naše práce, Kontakt)
   - Mobil: hamburger ikona vpravo, po kliknutí se rozbalí menu přes celou šířku
   - Menu má tmavé pozadí
   - Active stránka zvýrazněná
   - **Důležité:** logo má "paprskový" ornament kolem sebe — použij ho tak, jak je na referenci

3. **Vytvoř `Footer.astro`:**
   - Tmavé pozadí
   - Odkazy na sociální sítě (Instagram, Facebook) s ikonami
   - Copyright: "© 2025 Kovovýroba Rozbroj"
   - Odkaz na všechny stránky (sitemap v patičce)

4. **Hamburger menu** — použij jednoduchý JavaScript, netřeba framework:
   - Klikneš na hamburger → menu se rozbalí
   - Klikneš znovu → zavře se
   - Na desktop (≥768px) hamburger skrytý, menu vodorovné

### Checklist:
- [ ] Header funguje na mobilu i desktopu
- [ ] Hamburger menu se otevírá a zavírá
- [ ] Logo je viditelné a klikatelné
- [ ] Footer má správné odkazy a vypadá dobře
- [ ] BaseLayout se dá použít a předávají se do něj meta tagy

---

## FÁZE 3 — Stránky s obsahem (cca 4–6 h)

**Cíl:** Všech 5 stránek postavených s obsahem z `CONTENT.md`.

**Pracovní postup:** Vždy otevři `CONTENT.md`, najdi sekci pro danou stránku a **zkopíruj texty doslovně**. Nic nevymýšlej.

### Stránka 1: Úvod (`index.astro`)

Struktura (od shora dolů):
1. **Hero sekce** — fotka na pozadí, nadpis "Kovovýroba a svářečské práce na míru", podnadpis, tlačítko "Kontaktujte nás"
2. **Sekce "Profesionální a individuální přístup"** — fotka nahoře (branka), nadpis, text, tlačítko "O nás"
3. **Sekce "Vyrábíme také z nerezové oceli"** — fotka (zábradlí), nadpis, text (žádné tlačítko)
4. **Sekce "Kovový nábytek"** — fotka (stůl), nadpis, text (žádné tlačítko)
5. **CTA sekce "Chcete nás kontaktovat?"** — velký nadpis, tlačítko "Ozvěte se nám"

Použij `ContentSection.astro` komponentu, ať se to neopakuje.

### Stránka 2: O nás (`o-nas.astro`)

1. Fotka nahoře (hero image)
2. Nadpis "O nás"
3. Podnadpis "Otec a syn – poctivé řemeslo předávané z generace na generaci"
4. 4 odstavce textu (v CONTENT.md)

### Stránka 3: Služby (`sluzby.astro`)

1. Nadpis "Nabízíme"
2. Úvodní text
3. Fotka
4. 3 podsekce:
   - "Metody svařování"
   - "Práškové lakování (KOMAXIT)"
   - "Rychlý servis"

### Stránka 4: Naše práce (`nase-prace.astro`)

1. Nadpis "Naše práce"
2. Krátký úvodní text
3. **Galerie fotek** — mřížka (grid), responzivní (1 sloupec na mobilu, 2-3 na tabletu, 3-4 na desktopu)
4. Kliknutí na fotku → lightbox (velké zobrazení s možností procházet šipkami)
5. Pokud fotky ještě nejsou, nech placeholder "Galerie se připravuje" — doplníme potom

### Stránka 5: Kontakt (`kontakt.astro`)

1. Nadpis "Kontakt"
2. 4 bloky (s ikonami):
   - E-mail: metalartkovovyroba@gmail.com
   - Telefon: +420 603 438 228, +420 737 421 618
   - Adresa: Karviná, Rudé Armády 1820/31
   - Instagram: @kovovyroba_rozbroj
3. **Otevírací doba:** Po–Pá 7:00–16:00, So–Ne zavřeno
4. **Google Maps embed** — iframe s adresou
5. Sekce "Těšíme se na spolupráci!" — jména a IČO obou majitelů

### Checklist pro každou stránku:
- [ ] Texty přesně podle CONTENT.md
- [ ] Fotky mají alt texty
- [ ] Meta tagy (title, description) jsou správně
- [ ] Responsivita funguje (zkus v dev tools mobil/tablet/desktop)

---

## FÁZE 4 — Design ladění (cca 4–6 h)

**Cíl:** Web vypadá přesně podle referenčního Webnode, ale o něco líp.

### Co ladit:

1. **Přesné barvy** — ověř podle DESIGN.md (hex kódy)
2. **Typografie** — nadpisy Playfair Display, body Inter, správné velikosti
3. **Mezery mezi sekcemi** — dostatečně velké, vzdušné
4. **Horizontální oddělovače** mezi sekcemi (na Webnode jsou tenké bílé čáry)
5. **Tlačítka** — sjednotit modrou barvu s nadpisy (na Webnode jsou různé odstíny)
6. **Fotky** — full-width, správný poměr stran, object-fit: cover
7. **Responsivita** — zejména nadpis na úvodu se nesmí rozbíjet, ať vypadá hezky na mobilu
8. **Hover efekty** na tlačítkách a odkazech
9. **Plynulé přechody** (transitions) u interaktivních prvků

### Testování:
- Otevři web na skutečném mobilu (ne jen dev tools) — pošli si URL přes lokální síť
- Porovnej vedle sebe Webnode a nový web
- Zkontroluj v různých prohlížečích (Chrome, Safari, Firefox)

### Checklist:
- [ ] Vypadá jako Webnode reference, jen lépe
- [ ] Na mobilu vše funguje a vypadá dobře
- [ ] Žádné texty nepřetékají / nejsou uříznuté
- [ ] Fotky se správně načítají a mají správnou velikost

---

## FÁZE 5 — Detaily a SEO (cca 1–2 h)

### Co udělat:

1. **Favicon** — vytvoř z loga (nejjednodušší: přes https://favicon.io/)
2. **OG image** — obrázek 1200×630 px pro sdílení na FB/WA (klidně hero fotka)
3. **Meta tagy** na každé stránce:
   - `<title>` — např. "O nás | Kovovýroba Rozbroj — Karviná"
   - `<meta name="description">` — krátký popis stránky (150 znaků)
   - `<meta property="og:title">`, `og:description`, `og:image`, `og:url`
4. **`sitemap.xml`** — Astro má integraci `@astrojs/sitemap`, nainstaluj a nakonfiguruj
5. **`robots.txt`** — jednoduchý, povolí všem botům
6. **Schema.org markup** (JSON-LD) na kontaktní stránce — typ `LocalBusiness`:
   - jméno firmy
   - adresa s PSČ 73301
   - telefon
   - otevírací doba
   - geo souřadnice Karviné
7. **Google Maps embed** na kontaktní stránce — iframe s adresou "Rudé Armády 1820/31, Karviná"
8. **Optimalizace obrázků** — převeď na WebP, zkomprimuj (TinyPNG nebo Astro Image)

### Checklist:
- [ ] Favicon vidět v záložce prohlížeče
- [ ] Když někdo sdílí URL na FB/WA, zobrazí se hezký náhled
- [ ] Google Maps se zobrazují na kontaktu
- [ ] Všechny stránky mají unikátní title a description

---

## FÁZE 6 — Deploy na Vercel (cca 1–2 h)

### Kroky:

1. **Push projektu na GitHub:**
   ```bash
   git remote add origin https://github.com/USERNAME/kovovyrobarozbroj.git
   git push -u origin main
   ```

2. **Na Vercelu:**
   - Přihlaš se, klikni "Add New Project"
   - Import from GitHub — vyber `kovovyrobarozbroj`
   - Framework preset: Astro (automaticky detekuje)
   - Deploy

3. **Ověř deploy** — Vercel ti dá URL typu `kovovyrobarozbroj.vercel.app`. Otevři, zkontroluj, že web jede.

4. **Nasměruj doménu:**
   - Ve Vercelu: Project → Settings → Domains → Add → `kovovyrobarozbroj.cz`
   - Vercel ti ukáže DNS záznamy, které máš nastavit u registrátora
   - Typicky:
     - `A` záznam: `@` → `76.76.21.21`
     - `CNAME`: `www` → `cname.vercel-dns.com`
   - Nastav to v administraci u Wedosu/Forpsi
   - **DNS propagace může trvat i 24 hodin!** Buď trpělivý.

5. **SSL certifikát** — Vercel ho vygeneruje automaticky, stačí počkat (obvykle do 10 minut od nastavení DNS)

### Checklist:
- [ ] Web jede na vercel.app URL
- [ ] Doména kovovyrobarozbroj.cz směřuje na Vercel
- [ ] HTTPS funguje (zámeček v prohlížeči)
- [ ] Jak www, tak bez www vede na stejnou stránku

---

## FÁZE 7 — Finální testy (cca 2 h)

Projdi celý web na:

- [ ] Mobil (iPhone Safari, Android Chrome)
- [ ] Tablet
- [ ] Desktop (Chrome, Firefox)
- [ ] Všechny odkazy fungují
- [ ] Všechny obrázky se načítají
- [ ] Kontaktní údaje jsou všude správné
- [ ] Menu funguje na všech stránkách
- [ ] Formulář (pokud byl) funguje (ale my nemáme)
- [ ] Rychlost načítání (Google PageSpeed Insights — cíl ≥90)
- [ ] SEO test (https://www.seoptimer.com nebo podobný)

---

## Časový rozpočet

| Fáze | Čas | Den |
|---|---|---|
| 0. Příprava | ručně | průběžně |
| 1. Setup | 1–2 h | středa |
| 2. Komponenty | 2–3 h | středa–čtvrtek |
| 3. Stránky | 4–6 h | čtvrtek |
| 4. Design | 4–6 h | pátek |
| 5. Detaily/SEO | 1–2 h | pátek |
| 6. Deploy | 1–2 h | sobota |
| 7. Testy | 2 h | neděle |
| **Celkem** | **15–23 h** | do pondělí ráno |

Pokud investuješ **4 hodiny denně**, stihneš to s rezervou.

---

## Pokud něco nestíháš

**Priority od nejdůležitějšího:**

1. Úvod + Kontakt musí být kvalitní — to návštěvník vidí jako první
2. Mobilní responsivita — 70 % návštěvníků má mobil
3. Galerie může být menší (6 fotek místo 20)
4. Design ladění se dá doladit i po spuštění

Když něco nestihneš, radši **spusť jednodušší verzi v pondělí** než neděli v noci nervózně dopilovávat něco, co by mohlo mít chyby.
