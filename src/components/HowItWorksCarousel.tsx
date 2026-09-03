"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/keom";
import { SectionTitle } from "./SectionTitle";
import { Photo } from "./Photo";

export function HowItWorksCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [idx, setIdx] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cc - center);
      if (dist < best) {
        best = dist;
        nearest = i;
      }
    });
    setIdx(nearest);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(onScroll);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => {
      el.removeEventListener("scroll", handler);
      cancelAnimationFrame(raf);
    };
  }, [onScroll]);

  const jump = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(STEPS.length - 1, i));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) el.scrollLeft = card.offsetLeft - 20;
  };

  const go = (dir: 1 | -1) => jump(idx + dir);

  return (
    <section id="como-funciona" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle sub="De un mensaje en WhatsApp a una sesión agendada.">
          Seis pasos entre una consulta y una cita.
        </SectionTitle>
      </div>

      <ul
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth scroll-pl-5 px-5 pb-2 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-bg shadow-[var(--shadow-soft)] sm:w-[52vw] lg:w-[38%]"
          >
            <Photo
              name={step.photo}
              bordered={false}
              rounded="rounded-none"
              className="aspect-[16/9] w-full"
            />
            <div className="p-5">
              <span className="font-mono text-[0.72rem] tracking-[0.18em] text-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 flex max-w-5xl items-center justify-between px-5 sm:px-8">
        <div className="flex gap-1.5">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Ir al paso ${i + 1}`}
              aria-current={i === idx}
              onClick={() => jump(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-blue" : "w-1.5 bg-line hover:bg-ink-mute"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="press grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft hover:border-blue hover:text-ink"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="press grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft hover:border-blue hover:text-ink"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
