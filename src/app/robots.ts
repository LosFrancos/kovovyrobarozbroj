import type { MetadataRoute } from "next";

const BASE = "https://kovovyrobarozbroj.cz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/zasady-ochrany-osobnich-udaju"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
