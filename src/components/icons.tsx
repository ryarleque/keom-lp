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

export function Target({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  );
}

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
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9.4c0 1.6 1.2 3.2 1.3 3.4s2.3 3.6 5.6 5c.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.7.3-1.4.2-1.5s-.2-.2-.4-.3Z" />
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
