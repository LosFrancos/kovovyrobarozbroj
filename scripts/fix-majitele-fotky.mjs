import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../Fotky/majitelé");
const OUT = path.resolve(__dirname, "../public/images/majitele");

// Velká fotka nad portréty: dodávka (Tomáš a Martin 3) místo původní (Tomáš a Martin)
await sharp(path.join(SRC, "Tomáš a Martin 3.jpg"))
  .resize({ width: 1600, withoutEnlargement: true })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(OUT, "tomas-martin.jpg"));

// Solo Martin: výřez pravé části skupinové fotky 2 (Martin se založenýma rukama)
// Zdroj 1920×1277, ratio 3:2 → potřeba 3:4 portrét, výška 1277, šířka 957
await sharp(path.join(SRC, "Tomáš a Martin 2.jpg"))
  .extract({ left: 946, top: 0, width: 957, height: 1277 })
  .resize({ width: 800, withoutEnlargement: true })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(OUT, "martin.jpg"));

console.log("OK — tomas-martin.jpg + martin.jpg aktualizované");
