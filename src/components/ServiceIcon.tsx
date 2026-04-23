export type ServiceIconName =
  | "gate"
  | "fence"
  | "stairs"
  | "rail"
  | "nerez"
  | "furniture";

interface Props {
  name: ServiceIconName;
  className?: string;
}

const common =
  "w-8 h-8 stroke-current fill-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]";

export default function ServiceIcon({ name, className = "" }: Props) {
  const cls = `${common} ${className}`;
  switch (name) {
    case "gate":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 20V7h8v13M13 20V7h8v13M3 20h18" />
          <path d="M5 10h4M5 13h4M5 16h4M15 10h4M15 13h4M15 16h4" />
        </svg>
      );
    case "fence":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16" />
          <path d="M2 9h20M2 15h20" />
        </svg>
      );
    case "stairs":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 20h5v-4h5v-4h5V8h5" />
          <path d="M3 20v-1M8 16v-1M13 12v-1M18 8V7" />
        </svg>
      );
    case "rail":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 7h18M3 12h18M7 7v13M12 7v13M17 7v13" />
          <path d="M3 20h18" />
        </svg>
      );
    case "nerez":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4v16" />
        </svg>
      );
    case "furniture":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10h18" />
          <path d="M5 10v10M19 10v10M3 10l3-4h12l3 4" />
        </svg>
      );
  }
}
