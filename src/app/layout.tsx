import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kovovyrobarozbroj.cz"),
  title: {
    default: "Kovovýroba Rozbroj — Karviná | Brány, ploty, zábradlí na míru",
    template: "%s | Kovovýroba Rozbroj",
  },
  description:
    "Rodinná kovovýroba z Karviné. Vyrábíme brány, ploty, schodiště, zábradlí, nerez i kovový nábytek na míru. Svařování TIG a MIG.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Kovovýroba Rozbroj",
    title: "Kovovýroba Rozbroj — Karviná | Brány, ploty, zábradlí na míru",
    description:
      "Rodinná kovovýroba z Karviné. Brány, ploty, schodiště, zábradlí, nerez a kovový nábytek na míru.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
