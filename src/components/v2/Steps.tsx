"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO_LABEL, SHOTS, STEPS } from "@/lib/v2-content";
import { Section, Shot } from "./primitives";

const VISUALS = [
  { d: SHOTS.detect, m: SHOTS.detectMobile },
  { d: SHOTS.prioritize, m: SHOTS.sellerMobile },
  { d: SHOTS.act, m: SHOTS.actMobile },
];

/**
 * Detecta / Prioriza / Actúa.
 * Escritorio (lg+): el texto avanza y la captura, fija, cambia de estado con un crossfade.
 * Móvil: flujo vertical normal, una captura por paso. Nunca se bloquea el scroll.
 */
export function Steps() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section labelledBy="steps-title" size="md" tone="raised">
      <h2 id="steps-title" className="k-h2 max-w-[20ch]">
        {STEPS.title}
      </h2>

      <div className="mt-10 grid gap-x-16 lg:mt-4 lg:grid-cols-12">
        <ol className="lg:col-span-5">
          {STEPS.items.map((s, i) => (
            <li
              key={s.key}
              data-i={i}
              ref={(el) => {
                items.current[i] = el;
              }}
              className={`flex flex-col py-10 transition-opacity duration-200 lg:min-h-[56vh] ${i === 0 ? "lg:justify-start lg:pt-2" : "lg:justify-center"} ${
                active === i ? "opacity-100" : "lg:opacity-35"
              }`}
            >
              <p className="k-label text-k-brand">{s.n}</p>
              <h3 className="k-h3 mt-4 text-[2rem] md:text-[2.5rem]">{s.name}</h3>
              <p className="k-lead mt-4 max-w-[38ch] text-k-soft">{s.body}</p>
              <div className="mt-8 lg:hidden">
                <Shot d={VISUALS[i].d} m={VISUALS[i].m} alt={s.alt} className="shadow-k-screen" />
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-28">
            <div className="grid">
              {STEPS.items.map((s, i) => (
                <div
                  key={s.key}
                  aria-hidden={active !== i}
                  className={`self-center transition-opacity duration-200 [grid-area:1/1] ${
                    active === i ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Shot d={VISUALS[i].d} alt={s.alt} bare className="shadow-k-screen" />
                  <p className="k-small mt-3 text-k-mute">{DEMO_LABEL}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
