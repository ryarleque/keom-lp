"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { BOARD, STATUS_LABEL, STATUS_COLOR, type Opportunity } from "@/lib/keom";
import { CountUp } from "./CountUp";
import { SectionTitle } from "./SectionTitle";

export function BoardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        setActive(true);
        return true;
      }
      return false;
    };
    if (check()) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e.some((x) => x.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    const t = window.setTimeout(check, 400);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section id="tablero" className="bg-dark text-on-dark">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionTitle
          tone="onDark"
          sub="Cada consulta con su estado y su probabilidad de cierre. KEOM la mueve tomando la siguiente acción."
        >
          Tu bandeja, leída como un tablero.
        </SectionTitle>

        <div ref={ref} className="mt-12 flex flex-col gap-3">
          {BOARD.map((row, i) => (
            <BoardRow
              key={row.cliente}
              row={row}
              index={i}
              active={active}
              reduce={!!reduce}
            />
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-on-dark-soft">
          Datos de ejemplo. KEOM está en pre-lanzamiento.
        </p>
      </div>
    </section>
  );
}

function BoardRow({
  row,
  index,
  active,
  reduce,
}: {
  row: Opportunity;
  index: number;
  active: boolean;
  reduce: boolean;
}) {
  const moves = row.to !== row.from;
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!active || settled) return;
    const t = window.setTimeout(
      () => setSettled(true),
      reduce ? 20 : 350 + index * 220,
    );
    return () => window.clearTimeout(t);
  }, [active, settled, index, reduce]);

  const label = settled ? STATUS_LABEL[row.status] : "Leyendo";
  const color = settled ? STATUS_COLOR[row.status] : "var(--on-dark-soft)";
  const done = settled && moves;

  return (
    <div
      className="grid gap-3 rounded-2xl border border-on-dark-line bg-dark-2 px-5 py-4 md:grid-cols-[1.1fr_2fr_150px_90px] md:items-center md:gap-5 md:px-6 md:py-5"
    >
      <div>
        <p className="text-sm font-medium text-on-dark">{row.cliente}</p>
        <p className="mt-0.5 text-[0.78rem] text-on-dark-soft">{row.servicio}</p>
      </div>

      <div className="text-[0.82rem] leading-snug text-on-dark-soft">
        {row.intent}
        {done ? (
          <span className="mt-1.5 flex items-start gap-1.5 text-[0.72rem] leading-snug text-cyan-bright">
            <span aria-hidden className="mt-[0.5em] h-px w-3 shrink-0 bg-on-dark-line" />
            {row.signal}
          </span>
        ) : null}
      </div>

      <div>
        <span
          key={label}
          className="inline-flex rounded-full px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.1em]"
          style={{
            color,
            background: `color-mix(in oklab, ${color} 16%, transparent)`,
          }}
        >
          {label}
        </span>
      </div>

      <div className="flex items-baseline gap-1 md:justify-end">
        <CountUp
          from={row.from}
          to={settled ? row.to : row.from}
          duration={0.6}
          suffix="%"
          className={`text-lg font-semibold ${done ? "text-recovered" : "text-on-dark"}`}
        />
        {done ? (
          <span className="font-mono text-[0.68rem] text-recovered">↑</span>
        ) : null}
      </div>
    </div>
  );
}
