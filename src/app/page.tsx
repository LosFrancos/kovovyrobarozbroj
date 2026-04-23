export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <div className="container-x text-center space-y-6">
        <p className="eyebrow text-peach-2">Kovovýroba Rozbroj · Karviná</p>
        <h1 className="h-display text-5xl md:text-7xl text-ink">
          Design tokens &amp; fonty <span className="text-peach-2">ready.</span>
        </h1>
        <p className="text-ink-muted max-w-xl mx-auto">
          Placeholder home. Fáze B hotová — Barlow + Barlow Condensed načteny, barvy (dark,
          peach, mint, cream) v Tailwindu, base styly v globals.css.
        </p>
        <div className="flex gap-3 justify-center pt-4">
          <span className="w-12 h-12 bg-dark" />
          <span className="w-12 h-12 bg-peach" />
          <span className="w-12 h-12 bg-mint" />
          <span className="w-12 h-12 bg-cream border border-warm-gray" />
        </div>
      </div>
    </main>
  );
}
