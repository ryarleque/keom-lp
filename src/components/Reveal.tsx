"use client";

import { type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.23, 1, 0.32, 1] as const;

type Variant = "up" | "band" | "fade";

/** Gentle in-view reveal. Variant keeps sections from all entering identically. */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  style,
  as = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  if (reduce) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const init =
    variant === "up"
      ? { opacity: 0, y: 22 }
      : variant === "band"
        ? { opacity: 0, clipPath: "inset(0 0 18% 0)", y: 12 }
        : { opacity: 0 };

  const shown =
    variant === "band"
      ? { opacity: 1, clipPath: "inset(0 0 0% 0)", y: 0 }
      : { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      style={style}
      initial={init}
      whileInView={shown}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: variant === "band" ? 0.7 : 0.55, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}
