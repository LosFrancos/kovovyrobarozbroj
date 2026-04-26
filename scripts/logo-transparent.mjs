import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../Fotky/logo.jpg");
const OUT = path.resolve(__dirname, "../public/images/logo.png");

// Hraniční hodnoty jasu (luma):
// pixely tmavší než LOW = plně transparentní (alpha 0)
// pixely jasnější než HIGH = plně neprůhledné (alpha 255)
// mezi tím lineární gradient → vyhladí okraje písmen (anti-aliasing)
const LOW = 35;
const HIGH = 75;

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

for (let i = 0; i < out.length; i += channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  // Rec. 709 luma
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  let alpha;
  if (luma <= LOW) alpha = 0;
  else if (luma >= HIGH) alpha = 255;
  else alpha = Math.round(((luma - LOW) / (HIGH - LOW)) * 255);

  out[i + 3] = alpha;
}

await sharp(out, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`OK → ${OUT} (${width}×${height})`);
