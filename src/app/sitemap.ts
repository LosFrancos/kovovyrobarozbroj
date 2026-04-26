import type { MetadataRoute } from "next";

const BASE = "https://www.kovovyrobarozbroj.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/o-nas`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/sluzby`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/nase-prace`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
