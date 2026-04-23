import PageHeader from "@/components/PageHeader";
import PraceGallery from "@/components/PraceGallery";

export default function NasePracePage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Naše práce"
        bgUrl="/images/headers/nase-prace.webp"
        bgAlt="Kovovýroba Rozbroj — ukázky realizací"
      />

      <div className="container-x py-14 md:py-16">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-ink-muted leading-relaxed">
            Vybrané realizace z dílny v Karviné — brány, ploty, schodiště,
            zábradlí, nerezové výrobky i kovový nábytek. Každý kus vyrábíme
            individuálně podle zakázky.
          </p>
        </div>

        <PraceGallery />

        <p className="mt-12 md:mt-14 p-7 md:p-8 bg-[#f0ede7] text-center text-ink-muted text-sm leading-[1.7]">
          <strong className="text-dark">Realizujeme po celé ČR.</strong>
          <br />
          Galerie se průběžně rozrůstá. Pro konkrétní ukázky k vaší poptávce nám{" "}
          <a
            href="tel:+420737421618"
            className="text-peach-2 font-medium hover:text-dark transition-colors"
          >
            zavolejte
          </a>
          .
        </p>
      </div>
    </>
  );
}
