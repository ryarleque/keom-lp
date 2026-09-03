/**
 * KEOM — símbolo recreado en SVG (referencia: public/koam-logo.jpeg).
 * Lemniscata (keep moving) atravesada por una flecha ascendente (momentum).
 */

type Props = {
  size?: number;
  className?: string;
  title?: string;
  drawn?: boolean;
};

export function KeomMark({ size = 40, className, title, drawn = false }: Props) {
  const uid = "keom-mark";
  return (
    <svg
      width={size}
      height={(size * 80) / 128}
      viewBox="0 0 128 80"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="8" y1="60" x2="118" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#20b46a" />
          <stop offset="0.55" stopColor="#3ddc84" />
          <stop offset="1" stopColor="#79f0b4" />
        </linearGradient>
      </defs>

      <path
        d="M64 40 C 50 16, 14 20, 14 40 C 14 60, 50 64, 64 40 C 78 16, 114 20, 114 40 C 114 60, 78 64, 64 40 Z"
        stroke={`url(#${uid}-g)`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={
          drawn
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "keom-draw 900ms cubic-bezier(0.16,1,0.3,1) forwards",
              }
            : undefined
        }
      />
      <path
        d="M36 52 Q 58 40, 74 30 T 104 12"
        stroke={`url(#${uid}-g)`}
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        style={
          drawn
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "keom-draw 700ms cubic-bezier(0.16,1,0.3,1) 500ms forwards",
              }
            : undefined
        }
      />
      <path
        d="M104 12 L 90 12 M104 12 L 104 26"
        stroke={`url(#${uid}-g)`}
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        style={
          drawn
            ? { opacity: 0, animation: "keom-fade 260ms ease-out 1080ms forwards" }
            : undefined
        }
      />
    </svg>
  );
}

export function KeomLogo({
  className,
  markSize = 30,
  tone = "ink",
}: {
  className?: string;
  markSize?: number;
  tone?: "ink" | "paper";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <KeomMark size={markSize} title="KEOM" />
      <span
        className={`font-display font-extrabold uppercase leading-none ${
          tone === "paper" ? "text-on-paper" : "text-ink"
        }`}
        style={{ fontSize: markSize * 0.78, letterSpacing: "0.04em" }}
      >
        Keom
      </span>
    </span>
  );
}
