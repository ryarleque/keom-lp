import type { CSSProperties, ReactNode } from "react";
import type { ShotSrc } from "@/lib/v2-content";

const PAD = {
  lg: "py-24 md:py-36",
  md: "py-[72px] md:py-24",
  sm: "py-10 md:py-14",
} as const;

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${wide ? "max-w-[1280px]" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  labelledBy,
  size = "lg",
  tone = "base",
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  size?: keyof typeof PAD;
  tone?: "base" | "raised";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === "raised" ? "bg-k-raised" : ""} ${PAD[size]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Etiqueta mono en mayúsculas. Máximo una por sección. */
export function Label({
  children,
  tone = "mute",
  className = "",
}: {
  children: ReactNode;
  tone?: "brand" | "mute";
  className?: string;
}) {
  return (
    <p
      className={`k-label ${tone === "brand" ? "text-k-brand" : "text-k-mute"} ${className}`}
    >
      {children}
    </p>
  );
}

const BTN = {
  primary: "bg-k-brand-soft text-k-brand-ink hover:bg-k-brand",
  secondary:
    "border border-k-line-strong text-k-ink hover:border-k-ink/45",
} as const;

const BTN_SIZE = {
  md: "h-12 px-6",
  sm: "h-10 px-4",
} as const;

export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof BTN;
  size?: keyof typeof BTN_SIZE;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`k-press inline-flex items-center justify-center gap-2 rounded-[10px] text-[0.9375rem] font-medium ${BTN_SIZE[size]} ${BTN[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Captura real de producto. `m` es una variante para móvil (recorte distinto).
 * La relación de aspecto se reserva por breakpoint para que no haya salto de layout.
 */
export function Shot({
  d,
  m,
  alt,
  priority = false,
  bare = false,
  ratio,
  className = "",
}: {
  d: ShotSrc;
  m?: ShotSrc;
  alt: string;
  priority?: boolean;
  bare?: boolean;
  /** Fuerza la misma proporción [escritorio, móvil] y recorta desde arriba. */
  ratio?: [number, number];
  className?: string;
}) {
  const mm = m ?? d;
  const style = {
    "--ar-d": ratio ? ratio[0] : d.w / d.h,
    "--ar-m": ratio ? ratio[1] : mm.w / mm.h,
  } as CSSProperties;
  return (
    <div
      style={style}
      className={`${bare ? "overflow-hidden rounded-[10px]" : "k-shot"} aspect-(--ar-m) md:aspect-(--ar-d) ${className}`}
    >
      <picture>
        {m ? <source media="(max-width: 767px)" srcSet={m.src} /> : null}
        <img
          src={d.src}
          width={d.w}
          height={d.h}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="block h-full w-full object-cover object-top"
        />
      </picture>
    </div>
  );
}

export function DemoNote({ className = "" }: { className?: string }) {
  return (
    <p className={`k-small text-k-mute ${className}`}>Datos demostrativos</p>
  );
}
