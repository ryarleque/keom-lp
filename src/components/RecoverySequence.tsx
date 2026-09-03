"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { CountUp } from "./CountUp";
import { SectionTitle } from "./SectionTitle";
import { ArrowDown, ArrowUp } from "./icons";
import { RECOVERY_CHAT } from "@/lib/keom";

type Tone = "neutral" | "danger" | "warn" | "good";
type Dir = "up" | "down" | "flat";

type Beat = {
  head: string;
  status: string;
  caption: string;
  prob: number;
  tone: Tone;
  dir: Dir;
};

const BEATS: Beat[] = [
  {
    head: "Preguntó. Respondiste. Silencio.",
    status: "Activa",
    caption: "Camila pidió precio y disponibilidad. Nadie volvió a escribir.",
    prob: 58,
    tone: "neutral",
    dir: "flat",
  },
  {
    head: "Tres días sin respuesta.",
    status: "En riesgo",
    caption: "La conversación se enfría y la cita no se agenda.",
    prob: 41,
    tone: "danger",
    dir: "down",
  },
  {
    head: "KEOM lo detecta.",
    status: "Detectada",
    caption: "Alta intención de compra más tres días en silencio.",
    prob: 41,
    tone: "danger",
    dir: "flat",
  },
  {
    head: "Decide la siguiente acción.",
    status: "Seguimiento",
    caption: "Reactivar con una disponibilidad concreta.",
    prob: 46,
    tone: "warn",
    dir: "up",
  },
  {
    head: "Escribe por Camila.",
    status: "Respondió",
    caption: "«Tenemos el jueves 4 pm o el viernes 11 am.» Camila responde.",
    prob: 74,
    tone: "good",
    dir: "up",
  },
  {
    head: "Cita reservada.",
    status: "Recuperada",
    caption: "Una sesión que se hubiera perdido, de vuelta en la agenda.",
    prob: 88,
    tone: "good",
    dir: "up",
  },
];

const TONE_COLOR: Record<Tone, string> = {
  neutral: "#ffffff",
  danger: "var(--at-risk)",
  warn: "var(--amber)",
  good: "var(--cyan-bright)",
};

const CHIP: Record<string, { bg: string; fg: string }> = {
  Activa: { bg: "rgba(255,255,255,0.14)", fg: "#ffffff" },
  "En riesgo": { bg: "var(--at-risk)", fg: "#ffffff" },
  Detectada: { bg: "var(--amber)", fg: "#22190a" },
  Seguimiento: { bg: "var(--amber)", fg: "#22190a" },
  "Respondió": { bg: "var(--cyan-bright)", fg: "#05232c" },
  Recuperada: { bg: "var(--recovered)", fg: "#04241b" },
};

const EXTRA = [
  { who: "negocio" as const, text: "Tenemos el jueves 4 pm o el viernes 11 am. ¿Cuál te acomoda?", badge: "escrito por KEOM" },
  { who: "cliente" as const, text: "El jueves 4 pm, gracias." },
];

export function RecoverySequence() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const [i, setI] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(BEATS.length - 1, Math.max(0, Math.floor(p * BEATS.length)));
    setI((cur) => (cur === next ? cur : next));
  });

  const body = (beat: number) => (
    <>
      <SectionTitle
        tone="onBlue"
        sub="Preguntó por el servicio, pidió precio, recibió información y dejó de responder. KEOM reconoce la intención, ve que se detuvo y ejecuta el seguimiento."
      >
        Una conversación que se hubiera perdido.
      </SectionTitle>

      <div className="mt-8 grid min-h-[560px] grid-cols-[3px_1fr] gap-6 lg:h-[420px] lg:min-h-0 lg:grid-cols-[3px_1fr_1.05fr] lg:gap-10">
        <Rail count={BEATS.length} active={beat} />
        <div className="grid min-h-0 gap-6 lg:contents">
          <Stage beat={BEATS[beat]} />
          <RightCol beat={beat} />
        </div>
      </div>
    </>
  );

  if (reduce) {
    return (
      <section id="problema" className="bg-blue text-on-blue">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-28">
          {body(BEATS.length - 1)}
        </div>
      </section>
    );
  }

  return (
    <section id="problema" className="bg-blue text-on-blue">
      <div ref={wrapRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex min-h-[100dvh] items-center px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-5xl">{body(i)}</div>
        </div>
      </div>
    </section>
  );
}

function Rail({ count, active }: { count: number; active: number }) {
  const reduce = useReducedMotion();
  const pct = ((active + 1) / count) * 100;
  return (
    <div
      className="relative h-full w-[3px] self-stretch overflow-visible rounded-full bg-on-blue-line"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={count}
      aria-valuenow={active + 1}
    >
      <motion.div
        className="absolute inset-x-0 top-0 rounded-full bg-white/80"
        initial={false}
        animate={{ height: `${pct}%` }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.span
        className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-bright shadow-[0_0_0_4px_rgba(61,214,238,0.2)]"
        initial={false}
        animate={{ top: `calc(${pct}% - 5px)` }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      />
    </div>
  );
}

function Stage({ beat }: { beat: Beat }) {
  const chip = CHIP[beat.status] ?? CHIP.Activa;
  const color = TONE_COLOR[beat.tone];
  return (
    <div className="flex flex-col justify-center gap-5">
      <motion.span
        key={beat.status}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        className="inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em]"
        style={{ background: chip.bg, color: chip.fg }}
      >
        {beat.status === "En riesgo" ? (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        ) : null}
        {beat.status}
      </motion.span>

      <h3 className="text-[2rem] font-semibold leading-[1.08] text-on-blue sm:text-[2.6rem]">
        {beat.head}
      </h3>
      <p className="max-w-sm text-[0.98rem] leading-relaxed text-on-blue-soft">
        {beat.caption}
      </p>

      {/* probability stat, below the description */}
      <div className="mt-1 border-t border-on-blue-line pt-4">
        <span className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-on-blue-mute">
          Probabilidad de cierre
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <CountUp
            to={beat.prob}
            suffix="%"
            duration={0.6}
            className="text-[2.4rem] font-semibold leading-none sm:text-[2.9rem]"
          />
          {beat.dir !== "flat" ? (
            <span style={{ color }}>
              {beat.dir === "up" ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
            </span>
          ) : null}
        </div>
        <div className="mt-2.5 h-1.5 w-full max-w-[220px] overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full"
            initial={false}
            animate={{ width: `${beat.prob}%` }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{ background: color }}
          />
        </div>
      </div>
    </div>
  );
}

function RightCol({ beat }: { beat: number }) {
  const cooling = beat === 1 || beat === 2;
  const baseCount = beat === 0 ? 3 : RECOVERY_CHAT.length;
  const extra = beat >= 4 ? EXTRA.length : 0;

  return (
    <div className="flex min-h-0 flex-col">
      <div
        className={`flex min-h-0 flex-1 flex-col rounded-2xl bg-white p-4 text-ink shadow-[var(--shadow-card)] transition-opacity duration-500 sm:p-5 ${
          cooling ? "opacity-85" : ""
        }`}
      >
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-mute">
            WhatsApp · Camila R.
          </span>
          <span
            className={`font-mono text-[0.52rem] uppercase tracking-[0.12em] text-at-risk transition-opacity duration-300 ${
              cooling ? "opacity-100" : "opacity-0"
            }`}
          >
            sin respuesta · 3 días
          </span>
        </div>
        <ul className="mt-3 flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden">
          {RECOVERY_CHAT.slice(0, baseCount).map((m, idx) => (
            <Bubble key={`b${idx}`} who={m.who} text={m.text} />
          ))}
          {EXTRA.slice(0, extra).map((m, idx) => (
            <Bubble key={`x${idx}`} who={m.who} text={m.text} badge={m.badge} />
          ))}
        </ul>
        <div
          style={{ background: "#e9f6f1" }}
          className={`mt-3 rounded-lg px-3 py-2 font-mono text-[0.68rem] text-recovered transition-all duration-500 ${
            beat >= 5 ? "opacity-100" : "pointer-events-none h-0 overflow-hidden py-0 opacity-0"
          }`}
        >
          Cita reservada · jueves 16:00
        </div>
      </div>
    </div>
  );
}

function Bubble({
  who,
  text,
  badge,
}: {
  who: "cliente" | "negocio";
  text: string;
  badge?: string;
}) {
  const reduce = useReducedMotion();
  const mine = who === "negocio";
  return (
    <motion.li
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex shrink-0 flex-col ${mine ? "items-end" : "items-start"}`}
    >
      <span
        className={`max-w-[86%] rounded-2xl px-3.5 py-2 text-[0.85rem] leading-snug ${
          mine
            ? "rounded-br-sm bg-blue text-white"
            : "rounded-bl-sm bg-surface-2 text-ink-soft"
        }`}
      >
        {text}
      </span>
      {badge ? (
        <span className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-blue">
          {badge}
        </span>
      ) : null}
    </motion.li>
  );
}
