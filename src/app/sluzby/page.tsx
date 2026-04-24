import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { sluzby } from "@/data/sluzby";

export default function SluzbyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Služby"
        title="Co vyrábíme"
        bgUrl="/images/headers/sluzby.webp"
        bgAlt="Kovovýroba Rozbroj — proces svařování"
      />

      <div className="container-x py-16 md:py-20">
        {sluzby.map((s, i) => {
          const reversed = i % 2 !== 0;
          const textBlock = (
            <div>
              <p className="eyebrow text-peach-2 mb-3">
                0{i + 1}
              </p>
              <h2 className="h-display text-dark text-[clamp(30px,3.5vw,40px)] mb-5">
                {s.title.toUpperCase()}
              </h2>
              <p className="text-ink-muted leading-[1.8] text-[15px] mb-6">
                {s.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#444]"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-peach shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
          const photoBlock = (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={s.photo}
                alt={s.photoAlt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          );
          return (
            <div
              key={s.title}
              id={s.slug}
              className="scroll-mt-24 grid gap-8 md:gap-14 md:grid-cols-2 items-center py-12 md:py-14 border-b border-warm-gray last:border-b-0"
            >
              {reversed ? (
                <>
                  <div className="order-2 md:order-1">{photoBlock}</div>
                  <div className="order-1 md:order-2">{textBlock}</div>
                </>
              ) : (
                <>
                  {textBlock}
                  {photoBlock}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Peach CTA band */}
      <section className="bg-peach py-16 md:py-[60px] text-center px-6">
        <h2 className="h-display text-white text-[clamp(28px,4vw,40px)] mb-3">
          NENAŠLI JSTE CO HLEDÁTE?
        </h2>
        <p className="text-white/85 mb-8 text-base">
          Vyrobíme prakticky cokoliv z kovu. Stačí nám napsat nebo zavolat.
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center bg-white text-peach-2 font-sans font-bold text-[15px] uppercase tracking-button px-9 py-3.5 min-h-[44px] hover:-translate-y-0.5 transition-all"
        >
          Kontaktujte nás →
        </Link>
      </section>
    </>
  );
}
