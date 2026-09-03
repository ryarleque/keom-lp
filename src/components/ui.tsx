import { type ReactNode } from "react";

/* ---------- Button ---------------------------------------------------- */

type ButtonVariant = "solid" | "ghost" | "paper";
type ButtonSize = "md" | "lg";

const V: Record<ButtonVariant, string> = {
  solid: "bg-mint-fill text-on-mint hover:bg-mint",
  ghost: "border border-line-2 text-ink hover:border-mint hover:text-mint",
  paper: "bg-mint-strong text-white hover:brightness-105",
};

const S: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

export function Button({
  href,
  variant = "solid",
  size = "lg",
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `press inline-flex items-center justify-center gap-2 rounded-[10px] font-display font-bold uppercase tracking-[0.06em] ${V[variant]} ${S[size]} ${className}`;
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}

/* ---------- Eyebrow -------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
  tone = "mint",
}: {
  children: ReactNode;
  className?: string;
  tone?: "mint" | "mute";
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.16em] ${
        tone === "mint" ? "text-mint" : "text-ink-mute"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* ---------- SectionHeading ----------------------------------------- */

export function SectionHeading({
  children,
  sub,
  eyebrow,
  align = "center",
  caps = true,
  width = "md",
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  sub?: ReactNode;
  eyebrow?: ReactNode;
  align?: "center" | "left";
  caps?: boolean;
  width?: "md" | "lg";
  tone?: "dark" | "paper";
  className?: string;
}) {
  const subColor = tone === "paper" ? "text-on-paper-soft" : "text-ink-soft";
  const maxW =
    align === "left"
      ? "max-w-xl"
      : width === "lg"
        ? "mx-auto max-w-4xl text-center"
        : "mx-auto max-w-2xl text-center";
  return (
    <header className={`${maxW} ${className}`}>
      {eyebrow ? <div className="mb-3">{eyebrow}</div> : null}
      <h2
        className={`text-h2 [text-wrap:normal] ${
          caps ? "uppercase tracking-[0.005em]" : "tracking-[-0.015em]"
        }`}
      >
        {children}
      </h2>
      {sub ? (
        <p
          className={`mt-4 max-w-md text-md ${
            align === "center" ? "mx-auto" : ""
          } ${subColor}`}
        >
          {sub}
        </p>
      ) : null}
    </header>
  );
}

/* ---------- Tag ----------------------------------------------------- */

export function Tag({
  children,
  tone = "mint",
  className = "",
}: {
  children: ReactNode;
  tone?: "mint" | "danger" | "warn" | "neutral";
  className?: string;
}) {
  const T = {
    mint: "bg-mint-dim text-mint",
    danger: "bg-[color-mix(in_oklab,var(--danger)_16%,transparent)] text-danger",
    warn: "bg-[color-mix(in_oklab,var(--warn)_16%,transparent)] text-warn",
    neutral: "bg-white/8 text-ink-soft",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] ${T[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
