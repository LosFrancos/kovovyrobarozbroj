import { kontakty } from "@/data/kontakty";

// Souřadnice: Rudé armády 1820/31, 733 01 Karviná-Hranice (přes OSM Nominatim).
// Chceš-li jiný výřez/styl, otevři mapy.cz → Sdílet → Vložit na web a nahraď URL.
const MAPA_SRC =
  "https://frame.mapy.cz/?x=18.5478925&y=49.8713488&z=17&source=coor&id=18.5478925%2C49.8713488";

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
