import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../Fotky/majitelé/Tomáš a Martin 2.jpg");
const OUT_DIR = path.resolve(__dirname, "../src/app/_og");
const OUT = path.resolve(OUT_DIR, "og-bg.jpg");

await fs.mkdir(OUT_DIR, { recursive: true });

// Source 1920×1277 (3:2) → OG 1200×630 (~1.9:1) potřeba horizontální crop
// Resize na šířku 1200 → 1200×798, pak extract střed (top=84, height=630)
await sharp(SRC)
  .resize({ width: 1200 })
  .extract({ left: 0, top: 84, width: 1200, height: 630 })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(OUT);

console.log("OK →", OUT);
