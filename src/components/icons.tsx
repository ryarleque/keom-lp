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
