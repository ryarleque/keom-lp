/* Authored icon set — one consistent stroke, currentColor. */

type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ChatBubble({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M4 6h16v10H9l-5 4V6Z" />
    </svg>
  );
}

export function Clock({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export function TrendDown({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M5 8l6 6 3-3 5 5" />
      <path d="M19 12v4h-4" />
    </svg>
  );
}

export function Check({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function Plus({ size = 18, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ArrowUp({ size = 14, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function ArrowDown({ size = 14, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function Spark({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function TrendUp({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M5 16l6-6 3 3 5-5" />
      <path d="M19 8v4h-4" />
    </svg>
  );
}

export function Shield({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-2.8 7.5-7 9-4.2-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Eye({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function Bell({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ChevronDown({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRight({ size = 18, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Send({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M4 12 20 4l-6 16-3-7-7-1Z" />
    </svg>
  );
}

export function Warning({ size = 18, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <path d="M12 4 3 19h18L12 4Z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  );
}

export function Calendar({ size = 18, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </svg>
  );
}

export function Mail({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Hub({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="1.8" />
      <circle cx="19" cy="16" r="1.8" />
      <circle cx="5" cy="16" r="1.8" />
      <path d="M12 9V6M13.7 13.5l3.6 1.8M10.3 13.5l-3.6 1.8" />
    </svg>
  );
}

export function Target({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  );
}

/** Official WhatsApp glyph (solid, fill=currentColor). */
export function WhatsApp({ size = 16, className }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Users({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3 2.9-4.5 5.5-4.5S13.9 16 14.5 19" />
      <path d="M16 6.5a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14.7c1.9.6 3.3 2.1 3.7 4.3" />
    </svg>
  );
}

export function Bot({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <path d="M3 12v3M21 12v3" />
    </svg>
  );
}

export function UsersTrio({ size = 22, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="12" cy="7.5" r="2.6" />
      <circle cx="5.5" cy="9.5" r="2.1" />
      <circle cx="18.5" cy="9.5" r="2.1" />
      <path d="M7.5 18c.6-2.6 2.3-4 4.5-4s3.9 1.4 4.5 4" />
      <path d="M2.5 16.5c.4-1.8 1.4-3 3-3.2M18.5 13.3c1.6.2 2.6 1.4 3 3.2" />
    </svg>
  );
}
