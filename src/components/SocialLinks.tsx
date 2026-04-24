import { kontakty } from "@/data/kontakty";

type Variant = "footer" | "cards";

type Props = {
  variant?: Variant;
  className?: string;
};

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3.2H13.5V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C16.5 4.1 15.5 4 14.4 4c-2.3 0-3.9 1.4-3.9 4v2.8H8v3.2h2.5V22h3z" />
    </svg>
  );
}

export default function SocialLinks({ variant = "footer", className = "" }: Props) {
  const { instagram, facebook } = kontakty.socialni;

  if (variant === "cards") {
    return (
      <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${instagram.handle}`}
          className="group flex items-center gap-4 border border-warm-gray bg-[#f8f7f4] px-5 py-4 hover:bg-dark transition-colors"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-peach text-dark transition-colors group-hover:bg-peach-2">
            <InstagramIcon className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-display font-bold uppercase tracking-tight text-sm text-dark group-hover:text-white">
              Instagram
            </span>
            <span className="block text-[13px] text-ink-muted group-hover:text-white/70">
              {instagram.handle}
            </span>
          </span>
        </a>

        <a
          href={facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Facebook ${facebook.nazev}`}
          className="group flex items-center gap-4 border border-warm-gray bg-[#f8f7f4] px-5 py-4 hover:bg-dark transition-colors"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-peach text-dark transition-colors group-hover:bg-peach-2">
            <FacebookIcon className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-display font-bold uppercase tracking-tight text-sm text-dark group-hover:text-white">
              Facebook
            </span>
            <span className="block text-[13px] text-ink-muted group-hover:text-white/70">
              {facebook.nazev}
            </span>
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      <a
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram — ${instagram.handle}`}
        className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/80 hover:bg-peach hover:text-dark hover:border-peach transition-colors"
      >
        <InstagramIcon className="h-[22px] w-[22px]" />
      </a>
      <a
        href={facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Facebook — ${facebook.nazev}`}
        className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/80 hover:bg-peach hover:text-dark hover:border-peach transition-colors"
      >
        <FacebookIcon className="h-[22px] w-[22px]" />
      </a>
    </div>
  );
}
