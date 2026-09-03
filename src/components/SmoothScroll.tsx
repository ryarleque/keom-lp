"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 60; // just under the 64px header — new section tucks up, no previous-section sliver
const MIN_MS = 480;
const MAX_MS = 900;

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Smooth in-page navigation. Intercepts clicks on same-page anchors
 * (`a[href^="#"]`) and tweens window scroll with an eased curve to the
 * target minus the fixed-header height. Aborts if the user scrolls
 * during the tween (detected by scrollY diverging from what we set).
 * Reduced-motion → instant jump.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = decodeURIComponent(anchor.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const dest =
        id === "top"
          ? 0
          : Math.max(
              0,
              Math.round(
                target.getBoundingClientRect().top +
                  window.scrollY -
                  HEADER_OFFSET,
              ),
            );

      history.pushState(null, "", `#${id}`);

      if (raf) cancelAnimationFrame(raf);

      if (reduce || Math.abs(dest - window.scrollY) < 2) {
        window.scrollTo(0, dest);
        return;
      }

      const start = window.scrollY;
      const dist = dest - start;
      const dur = Math.min(MAX_MS, Math.max(MIN_MS, Math.abs(dist) * 0.42));
      const t0 = performance.now();
      let lastSet = start;

      function step(now: number) {
        // user took over (scrollY drifted from what we set) → stop
        if (Math.abs(window.scrollY - lastSet) > 3) {
          raf = 0;
          return;
        }
        const p = Math.min(1, (now - t0) / dur);
        lastSet = Math.round(start + dist * easeInOut(p));
        window.scrollTo(0, lastSet);
        raf = p < 1 ? requestAnimationFrame(step) : 0;
      }
      raf = requestAnimationFrame(step);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
