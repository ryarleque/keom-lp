"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { KeomMark } from "./KeomMark";
import { KEEP_TAGLINE } from "@/lib/keom";

type Phase = "in" | "leaving" | "gone";

/* -- Splash timing (ajusta aquí) -----------------------------------------
   HOLD_MS      = ms que el logo se queda visible (primera visita).
   SEEN_HOLD_MS = ms que se queda si ya se vio antes en esta sesión.
   FADE_MS      = ms del fundido final.
--------------------------------------------------------------------- */
const HOLD_MS = 2900;
const SEEN_HOLD_MS = 1300;
const FADE_MS = 680;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Splash() {
  const reduce = useReducedMotion();
  // Todo lo que depende de sessionStorage / reduced-motion se decide después
  // de montar, para no chocar con el HTML del servidor (hydration mismatch).
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("in");
  const [seen, setSeen] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    let wasSeen = false;
    try {
      wasSeen = sessionStorage.getItem("keom-splash") === "seen";
    } catch {
      /* private mode */
    }
    setSeen(wasSeen);
    setMounted(true);

    const bag = timers.current;
    const push = (fn: () => void, at: number) =>
      bag.push(window.setTimeout(fn, at));

    const hold = wasSeen || reduce ? SEEN_HOLD_MS : HOLD_MS;
    push(() => setPhase("leaving"), hold);
    push(() => setPhase("gone"), hold + FADE_MS);
    push(() => {
      try {
        sessionStorage.setItem("keom-splash", "seen");
      } catch {
        /* ignore */
      }
    }, hold);

    return () => bag.forEach(window.clearTimeout);
  }, [reduce]);

  useEffect(() => {
    if (phase === "gone") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  // Servidor y primer render de cliente: solo el fondo oscuro (determinista).
  if (!mounted) {
    return <div className="fixed inset-0 z-[60] bg-bg" aria-hidden />;
  }

  if (phase === "gone") return null;

  const animateIn = !seen && !reduce;
  const rise = animateIn ? { opacity: 0, y: 12 } : false;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-bg px-6 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.7,0,0.84,0)]"
      style={{
        opacity: phase === "leaving" ? 0 : 1,
        transform: phase === "leaving" && !reduce ? "translateY(-2%)" : "none",
      }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <motion.div
          initial={rise}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <KeomMark size={132} drawn={animateIn} title="KEOM" />
        </motion.div>

        <motion.span
          className="font-display text-5xl font-extrabold uppercase tracking-[0.04em] text-ink sm:text-6xl"
          initial={rise}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: animateIn ? 0.55 : 0 }}
        >
          Keom
        </motion.span>

        <motion.span
          className="font-display text-xl font-medium tracking-[0.01em] text-ink-soft sm:text-2xl"
          initial={rise}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: animateIn ? 0.95 : 0 }}
        >
          {KEEP_TAGLINE}
        </motion.span>
      </div>

      {!reduce && (
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-mint"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: (seen ? SEEN_HOLD_MS : HOLD_MS) / 1000,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}
