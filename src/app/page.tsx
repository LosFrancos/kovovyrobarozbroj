import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import HeroSlideshow from "@/components/HeroSlideshow";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import { kontakty } from "@/data/kontakty";

const services: {
  icon: ServiceIconName;
  slug: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: "gate",
    slug: "brany",
    title: "Brány & Vrata",
    desc: "Vjezdové brány, garážová vrata a automatické systémy na míru.",
  },
  {
    icon: "fence",
    slug: "ploty",
    title: "Ploty & Branky",
    desc: "Oplocení pozemků, vstupní branky, plotové pole dle přání.",
  },
  {
    icon: "stairs",
    slug: "schodiste",
    title: "Schodiště",
    desc: "Interiérová i exteriérová schodiště z oceli, nerezové i kombinované.",
  },
  {
    icon: "rail",
    slug: "zabradli",
    title: "Zábradlí",
    desc: "Bezpečnostní i dekorativní zábradlí do interiéru i exteriéru.",
  },
  {
    icon: "nerez",
    slug: "nerez",
    title: "Nerezová ocel",
    desc: "Výrobky z nerezové oceli — odolné, hygienické, elegantní.",
  },
  {
    icon: "furniture",
    slug: "nabytek",
    title: "Kovový nábytek",
    desc: "Stoly, noční stolky, konzolové stolky, TV stojany na zakázku.",
  },
];

const stats = [
  { num: "15+", label: "Let zkušeností" },
  { num: "100%", label: "Zakázky na míru" },
  { num: "A–Z", label: "Návrh · výroba · montáž" },
];

const teaserPhotos = [
  { src: "/images/prace/prace-22.webp", alt: "Realizace brány na míru — Kovovýroba Rozbroj", offset: "md:mt-0" },
  { src: "/images/prace/prace-14.webp", alt: "Realizace schodiště na míru — Kovovýroba Rozbroj", offset: "md:mt-8" },
  { src: "/images/prace/prace-06.webp", alt: "Realizace zábradlí na míru — Kovovýroba Rozbroj", offset: "md:-mt-8" },
  { src: "/images/prace/prace-16.webp", alt: "Realizace kovového nábytku — Kovovýroba Rozbroj", offset: "md:mt-0" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative md:min-h-[75vh] bg-dark text-white flex items-center overflow-hidden">
        <HeroSlideshow />

        {/* Left peach accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-peach z-[1]"
          aria-hidden="true"
        />

        <div className="relative z-[1] container-x w-full pt-[100px] pb-12 md:pt-[140px] md:pb-24">
          <span className="inline-block bg-peach text-dark font-display font-semibold text-xs uppercase tracking-eyebrow px-3 py-1 md:px-3.5 md:py-1.5 mb-5 md:mb-7 whitespace-nowrap">
            Karviná · Rodinná kovovýroba
          </span>

          <h1 className="font-display font-extrabold text-[clamp(40px,9vw,110px)] leading-[0.92] tracking-tight max-w-[800px] mb-5 md:mb-8 text-balance">
            KOVOVÝROBA
            <br />
            <span className="text-peach">NA MÍRU.</span>
          </h1>

          <p className="font-sans font-light text-base md:text-lg text-white/75 max-w-[480px] leading-[1.6] md:leading-[1.7] mb-8 md:mb-12">
            Brány, ploty, schodiště, zábradlí a kovový nábytek.
            <br />
            Rodinná dílna z Karviné s precizním přístupem ke každé zakázce.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            <Button href="/kontakt" variant="primary">
              Nezávazná poptávka →
            </Button>
            <Button href="/nase-prace" variant="outline">
              Naše práce
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-10 md:mt-20 pt-6 md:pt-12 border-t border-white/[0.12] flex flex-wrap gap-6 md:gap-12">
            {stats.map((s) => (
              <div key={s.num}>
                <div className="font-display font-extrabold text-[32px] md:text-[42px] leading-none text-peach">
                  {s.num}
                </div>
                <div className="font-sans text-[12px] md:text-[13px] text-white/50 uppercase tracking-[0.08em] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-[11px] tracking-[0.12em] font-sans z-[1]"
          aria-hidden="true"
        >
          SCROLL
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────── */}
      <section className="container-x py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p className="eyebrow text-peach-2 mb-3">Naše služby</p>
            <h2 className="h-display text-dark text-[clamp(36px,5vw,56px)]">
              CO DĚLÁME
            </h2>
          </div>
          <Button href="/sluzby" variant="outline-dark" className="!px-6 !py-3">
            Všechny služby →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={`/sluzby#${s.slug}`}
              className={`group relative block p-10 transition-all duration-200 ${
                i % 2 === 0 ? "bg-[#f8f7f4]" : "bg-[#f0ede7]"
              } hover:bg-dark hover:-translate-y-1`}
            >
              {/* Peach top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-peach scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="text-dark group-hover:text-peach transition-colors">
                <ServiceIcon name={s.icon} />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight mt-6 text-dark group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-ink-muted text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.1em] text-peach-2 group-hover:text-peach transition-colors">
                Detail služby →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── O NÁS TEASER ────────────────────────────────── */}
      <section className="bg-dark text-white py-20 md:py-24">
        <div className="container-x grid gap-12 md:gap-20 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-peach mb-4">O nás</p>
            <h2 className="h-display text-white text-[clamp(36px,4vw,52px)] mb-7">
              RODINNÁ DÍLNA
              <br />
              S TRADICÍ
            </h2>
            <p className="text-white/65 leading-[1.8] mb-4">
              Jsme Tomáš a Martin Rozbrojovi — otec a syn, kteří spojili řemeslné
              zkušenosti s moderním přístupem k výrobě. Každou zakázku bereme
              jako vlastní projekt a pracujeme tak, aby byl zákazník spokojený.
            </p>
            <p className="text-white/65 leading-[1.8] mb-10">
              Poradíme s výběrem materiálu, navrhneme řešení a vše zrealizujeme
              od A do Z. Záleží nám na detailu a spokojenosti zákazníka.
            </p>
            <Link
              href="/o-nas"
              className="inline-flex items-center gap-2 border border-peach text-peach font-sans font-medium text-sm uppercase tracking-button px-7 py-3.5 min-h-[44px] hover:bg-peach hover:text-dark transition-colors"
            >
              Více o nás →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {teaserPhotos.map((p) => (
              <div
                key={p.src}
                className={`relative aspect-square overflow-hidden ${p.offset}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────── */}
      <section className="bg-dark text-white text-center py-16 md:py-20 border-t-[3px] border-peach">
        <div className="container-x">
          <h2 className="h-display text-white text-[clamp(32px,4vw,48px)] mb-4">
            MÁTE PROJEKT? OZVĚTE SE.
          </h2>
          <p className="text-white/85 text-[17px] mb-9">
            Poptávka je nezávazná. Odpovíme do 24 hodin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={kontakty.osoby[0].telefonLink}
              className="inline-flex items-center justify-center bg-peach text-dark font-sans font-bold text-[15px] uppercase tracking-[0.03em] px-8 py-3.5 min-h-[44px] hover:bg-peach-2 hover:-translate-y-0.5 transition-all"
            >
              {kontakty.osoby[0].telefon}
            </a>
            <Button href="/kontakt" variant="outline">
              Napište nám →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
