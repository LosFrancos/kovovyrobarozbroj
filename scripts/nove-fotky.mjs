import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../Fotky/Nove fotky");
const PRACE_DIR = path.resolve(__dirname, "../public/images/prace");
const HERO_DIR = path.resolve(__dirname, "../public/images/hero");

// Galerie i hero používají 1920×1440 (4:3) webp
const W = 1920;
const H = 1440;

const jobs = [
  { src: "ploty a branky.jpg", out: path.join(PRACE_DIR, "prace-23.webp") },
  { src: "ploty a branky 3.jpg", out: path.join(PRACE_DIR, "prace-24.webp") },
  { src: "ploty a branky 2.jpg", out: path.join(PRACE_DIR, "prace-25.webp") },
  { src: "zabradli.jpg", out: path.join(PRACE_DIR, "prace-26.webp") },
  { src: "nabytek houpacka.jpg", out: path.join(PRACE_DIR, "prace-27.webp") },
  // Houpačka jde navíc do úvodního slideshow
  { src: "nabytek houpacka.jpg", out: path.join(HERO_DIR, "hero-6.webp") },
];

for (const { src, out } of jobs) {
  await sharp(path.join(SRC_DIR, src))
    .rotate()
    .resize({ width: W, height: H, fit: "cover", position: "centre" })
    .webp({ quality: 82 })
    .toFile(out);
  const { size } = await fs.stat(out);
  console.log(`OK → ${path.basename(out)}  ${(size / 1024).toFixed(0)} kB`);
}
