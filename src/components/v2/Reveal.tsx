"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type Tag = "div" | "li" | "p" | "span" | "figure" | "h2" | "h3";

/**
 * Muestra el bloque una vez, al entrar en pantalla (opacity + translate, ver v2.css).
 * Sin JS o con movimiento reducido, el contenido ya está visible.
 */
export function Reveal({
  as = "div",
  delay = 0,
  variant = "up",
  className,
  children,
}: {
  as?: Tag;
  delay?: number;
  variant?: "up" | "scale";
  className?: string;
  children: ReactNode;
}) {
  const Comp = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      className={className}
      data-reveal={variant}
      data-in={inView ? "true" : "false"}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Comp>
  );
}
