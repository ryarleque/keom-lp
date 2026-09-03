"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 76; // fixed header height + a little air
const MIN_MS = 480;
const MAX_MS = 900;

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Smooth in-page navigation. Intercepts clicks on same-page anchors
 * (`a[href^="#"]`) and tweens window scroll with an eased curve,
 * accounting for the fixed header. Cancels if the user scrolls.
 * Reduced-motion → instant jump.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;

    function cancel() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }

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
              target.getBoundingClientRect().top +
                window.scrollY -
                HEADER_OFFSET,
            );

      history.pushState(null, "", `#${id}`);

      if (reduce) {
        window.scrollTo(0, dest);
        return;
      }

      cancel();
      const start = window.scrollY;
      const dist = dest - start;
      if (Math.abs(dist) < 2) return;
      const dur = Math.min(
        MAX_MS,
        Math.max(MIN_MS, Math.abs(dist) * 0.42),
      );
      const t0 = performance.now();

      const stopOnUserScroll = () => cancel();
      window.addEventListener("wheel", stopOnUserScroll, { passive: true });
      window.addEventListener("touchstart", stopOnUserScroll, { passive: true });

      function step(now: number) {
        const p = Math.min(1, (now - t0) / dur);
        window.scrollTo(0, start + dist * easeInOut(p));
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          raf = 0;
          window.removeEventListener("wheel", stopOnUserScroll);
          window.removeEventListener("touchstart", stopOnUserScroll);
        }
      }
      raf = requestAnimationFrame(step);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancel();
    };
  }, []);

  return null;
}
