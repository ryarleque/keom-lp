"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { KeomMark } from "../KeomMark";
import { FINAL } from "@/lib/v2-content";

type Phase = "in" | "leaving" | "gone";

/* -- Tiempos (ajusta aquí) ------------------------------------------------
   HOLD_MS      = ms que se ve el logo en la primera visita de la sesión.
   SEEN_HOLD_MS = ms si ya se vio antes en esta sesión, o con movimiento reducido.
   FADE_MS      = ms del fundido de salida.
--------------------------------------------------------------------- */
const HOLD_MS = 2900;
const SEEN_HOLD_MS = 1300;
const FADE_MS = 680;

const noopSubscribe = () => () => {};

/**
 * Pantalla de entrada de marca: el símbolo se dibuja, aparece KEOM y luego el lema.
 * Solo transform y opacity (CSS). Servidor y primer render de cliente pintan solo el fondo,
 * así lo que depende de sessionStorage / movimiento reducido no choca con el HTML del servidor.
 */
export function Splash() {
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [seen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("keom-splash") === "seen";
    } catch {
      return false;
    }
  });
  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [phase, setPhase] = useState<Phase>("in");
  const timers = useRef<number[]>([]);

  const hold = seen || reduce ? SEEN_HOLD_MS : HOLD_MS;

  useEffect(() => {
    const bag = timers.current;
    bag.push(window.setTimeout(() => setPhase("leaving"), hold));
    bag.push(window.setTimeout(() => setPhase("gone"), hold + FADE_MS));
    bag.push(
      window.setTimeout(() => {
        try {
          sessionStorage.setItem("keom-splash", "seen");
        } catch {
          /* modo privado */
        }
      }, hold),
    );
    return () => bag.forEach(window.clearTimeout);
  }, [hold]);

  // Mientras se ve, la página de abajo no se desplaza.
  useEffect(() => {
    if (phase === "gone") return;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [phase]);

  // Sin JavaScript no hay forma de cerrarlo: se oculta.
  const noscript = (
    <noscript>
      <style>{".k-splash{display:none!important}"}</style>
    </noscript>
  );

  if (!mounted) {
    return (
      <>
        {noscript}
        <div className="k-splash fixed inset-0 z-[70] bg-k-bg" aria-hidden />
      </>
    );
  }

  if (phase === "gone") return null;

  const animateIn = !seen && !reduce;
  // Aparición escalonada solo en la primera visita y sin movimiento reducido.
  const step = (delay: number) => ({
    className: animateIn ? "k-splash-in" : "",
    style: animateIn ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined,
  });
  const mark = step(0);
  const name = step(550);
  const tagline = step(950);

  return (
    <>
      {noscript}
      <div
        aria-hidden
        className="k-splash fixed inset-0 z-[70] grid place-items-center bg-k-bg px-6 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.7,0,0.84,0)]"
        style={{
          opacity: phase === "leaving" ? 0 : 1,
          transform: phase === "leaving" && !reduce ? "translateY(-2%)" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <div className={mark.className} style={mark.style}>
            <KeomMark size={132} drawn={animateIn} title="KEOM" />
          </div>
          <span
            className={`${name.className} text-[clamp(2.75rem,1.6rem+5vw,3.75rem)] font-semibold leading-none tracking-[0.08em] text-k-ink`}
            style={name.style}
          >
            KEOM
          </span>
          <span
            className={`${tagline.className} text-[1.125rem] text-k-soft sm:text-[1.25rem]`}
            style={tagline.style}
          >
            {FINAL.tagline}
          </span>
        </div>

        {!reduce ? (
          <div
            className="k-splash-bar absolute bottom-0 left-0 h-[3px] w-full bg-k-brand"
            style={{ animationDuration: `${hold}ms` }}
          />
        ) : null}
      </div>
    </>
  );
}
