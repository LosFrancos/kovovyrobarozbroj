import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-button text-[13px] md:text-sm px-6 py-3 min-h-[44px] transition-all duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-peach text-dark hover:bg-peach-2 hover:-translate-y-0.5",
  outline:
    "border border-white/35 text-white hover:bg-white/10 hover:-translate-y-0.5",
  "outline-dark":
    "border border-dark/25 text-dark hover:bg-dark hover:text-white hover:-translate-y-0.5",
};

type LinkBtnProps = BaseProps & ComponentProps<typeof Link>;
type NativeBtnProps = BaseProps & ComponentProps<"button"> & { href?: undefined };

export default function Button(props: LinkBtnProps | NativeBtnProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <Link {...(rest as ComponentProps<typeof Link>)} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(rest as ComponentProps<"button">)} className={classes}>
      {children}
    </button>
  );
}
