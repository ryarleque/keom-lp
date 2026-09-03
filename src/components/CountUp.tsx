"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

/**
 * Eases a number from `from` to `to` when it scrolls into view. Writes to the
 * DOM node directly via a motion value, so it never re-renders per frame.
 */
export function CountUp({
  from = 0,
  to,
  duration = 1,
  prefix = "",
  suffix = "",
  group = false,
  className = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  group?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(from);

  const fmt = (n: number) => {
    const r = Math.round(n);
    const s = group ? r.toLocaleString("es-PE").replace(/,/g, " ") : String(r);
    return `${prefix}${s}${suffix}`;
  };

  useEffect(() => {
    if (ref.current) ref.current.textContent = fmt(reduce ? to : from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = fmt(to);
      return;
    }
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = fmt(v);
    });
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => {
      controls.stop();
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to]);

  return (
    <span
      ref={ref}
      className={`tnum ${className}`}
      aria-label={fmt(to)}
    >
      {fmt(reduce ? to : from)}
    </span>
  );
}
