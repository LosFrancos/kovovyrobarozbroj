import { kontakty } from "@/data/kontakty";

const { lat, lon } = kontakty.adresa.gps;
const MAPA_SRC = `https://frame.mapy.cz/?x=${lon}&y=${lat}&z=17&source=coor&id=${lon}%2C${lat}`;

type MapaProps = {
  className?: string;
  title?: string;
};

export default function Mapa({ className = "", title }: MapaProps) {
  const adresa = `${kontakty.adresa.ulice}, ${kontakty.adresa.psc} ${kontakty.adresa.mesto}`;
  return (
    <iframe
      src={MAPA_SRC}
      title={title ?? `Mapa — ${adresa}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full h-full border-0 ${className}`}
      allowFullScreen
    />
  );
}
