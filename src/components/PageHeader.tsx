import Image from "next/image";

interface Props {
  eyebrow: string;
  title: string;
  bgUrl: string;
  bgAlt: string;
}

export default function PageHeader({ eyebrow, title, bgUrl, bgAlt }: Props) {
  return (
    <section className="relative bg-dark text-white overflow-hidden pt-[100px] md:pt-[150px] pb-[70px] md:pb-[90px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={bgUrl}
          alt={bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,30,28,0.92) 0%, rgba(26,30,28,0.75) 55%, rgba(26,30,28,0.5) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Left peach accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-peach" aria-hidden="true" />

      <div className="container-x relative">
        <p className="eyebrow text-peach mb-4">{eyebrow}</p>
        <h1 className="h-display text-white text-[clamp(40px,7vw,88px)]">{title}</h1>
      </div>
    </section>
  );
}
