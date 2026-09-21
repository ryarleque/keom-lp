"use client";

import { useEffect, useRef, useState } from "react";
import { VIDEO } from "@/lib/v2-content";
import { Reveal } from "./Reveal";

/**
 * Video de "Cómo funciona".
 * - 16:9 reservado (sin salto de layout), `preload="none"` + póster: no baja nada hasta que hace falta.
 * - Se reproduce solo, en silencio, mientras está a la vista (salvo movimiento reducido).
 * - Se pausa al salir de pantalla. Si la persona lo pausa, no lo reiniciamos.
 * - Controles nativos: el sonido queda a un clic.
 */
export function VideoPlayer() {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const autoPaused = useRef(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = video.current;
        if (!v) return;
        if (entry.isIntersecting) {
          if (!reduce && !userPaused.current && v.paused && !v.ended) {
            v.play().catch(() => {});
          }
        } else if (!v.paused) {
          autoPaused.current = true;
          v.pause();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Reveal variant="scale" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 bg-[radial-gradient(55%_55%_at_50%_50%,rgb(61_220_132/0.09),transparent_72%)]"
      />
      <div
        ref={wrap}
        className="k-shot relative aspect-video shadow-k-screen"
      >
        <video
          ref={video}
          src={VIDEO.src}
          poster={VIDEO.poster}
          width={VIDEO.w}
          height={VIDEO.h}
          preload="none"
          muted
          playsInline
          controls
          aria-label={VIDEO.title}
          className="h-full w-full object-cover"
          onPlay={() => {
            userPaused.current = false;
            setStarted(true);
          }}
          onPause={(e) => {
            if (autoPaused.current) {
              autoPaused.current = false;
            } else if (!e.currentTarget.ended) {
              userPaused.current = true;
            }
          }}
        />
        {!started ? (
          <button
            type="button"
            aria-label={VIDEO.playLabel}
            onClick={() => video.current?.play().catch(() => {})}
            className="k-press absolute left-1/2 top-1/2 grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-k-line-strong bg-k-bg/70 text-k-ink backdrop-blur-sm hover:border-k-brand"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <path d="M7 4.5v13l11-6.5-11-6.5z" fill="currentColor" />
            </svg>
          </button>
        ) : null}
      </div>
    </Reveal>
  );
}
