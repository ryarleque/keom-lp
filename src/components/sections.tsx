import { AI_TASKS, HUMAN_TASKS, type PhotoName } from "@/lib/keom";
import { Band } from "./Band";
import { SectionTitle } from "./SectionTitle";
import { Photo } from "./Photo";
import { Check, Plus, Users } from "./icons";
import { KeomMark } from "./KeomMark";

const SALES_ROWS = [
  "Consultas que necesitan respuesta",
  "Leads de alta intención",
  "Seguimientos pendientes",
  "Conversaciones para una persona",
  "Próximas citas",
];
const BUSINESS_ROWS: [string, string][] = [
  ["Nuevas consultas", "128"],
  ["Consultas en riesgo", "34"],
  ["Consultas recuperadas", "19"],
  ["Citas reservadas", "22"],
  ["Ingresos recuperados", "S/ 21 400"],
];

export function Dashboards() {
  return (
    <Band tone="white">
      <SectionTitle sub="Una para atender, otra para dirigir el centro.">
        Dos vistas, una sola verdad.
      </SectionTitle>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Panel title="¿Qué hago ahora?" label="Vista de atención">
          <ul className="flex flex-col divide-y divide-line">
            {SALES_ROWS.map((r) => (
              <li key={r} className="py-2.5 text-[0.9rem] text-ink-soft">
                {r}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="¿KEOM genera más valor?" label="Vista del negocio">
          <ul className="flex flex-col divide-y divide-line">
            {BUSINESS_ROWS.map(([k, v]) => (
              <li
                key={k}
                className="flex items-center justify-between py-2.5 text-[0.9rem]"
              >
                <span className="text-ink-soft">{k}</span>
                <span className="tnum text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-mute">
        Cifras de ejemplo.
      </p>
    </Band>
  );
}

function Panel({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-6 shadow-[var(--shadow-soft)]">
      <p className="font-display text-xl font-semibold text-ink">{title}</p>
      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-mute">
        {label}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function AiHuman() {
  return (
    <Band tone="blue">
      <SectionTitle
        tone="onBlue"
        sub="El reparto que hace que un centro chico atienda como uno grande."
      >
        La IA hace lo rutinario. Las personas, lo que importa.
      </SectionTitle>

      <div className="relative mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-20">
        <BigCard
          eyebrow="Automático"
          title="KEOM"
          mark={<KeomMark size={22} title="" />}
          photo="dashboard"
          tasks={AI_TASKS}
          accent="var(--cyan-bright)"
        />
        <BigCard
          eyebrow="Criterio humano"
          title="Tu equipo"
          mark={<Users size={20} />}
          photo="consult"
          tasks={HUMAN_TASKS}
          accent="var(--amber)"
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue/15 bg-white text-blue shadow-[var(--shadow-card)] sm:grid"
        >
          <Plus size={18} />
        </span>
      </div>
    </Band>
  );
}

function BigCard({
  eyebrow,
  title,
  mark,
  photo,
  tasks,
  accent,
}: {
  eyebrow: string;
  title: string;
  mark: React.ReactNode;
  photo: PhotoName;
  tasks: string[];
  accent: string;
}) {
  return (
    <div className="press flex flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-[var(--shadow-card)]">
      <div className="relative">
        <Photo
          name={photo}
          bordered={false}
          rounded="rounded-none"
          className="aspect-[16/10] w-full"
        />
        <span
          className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ink shadow-[var(--shadow-soft)]"
          style={{ borderBottom: `2px solid ${accent}` }}
        >
          {eyebrow}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg"
            style={{ background: `color-mix(in oklab, ${accent} 14%, white)`, color: accent }}
          >
            {mark}
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
            {title}
          </span>
        </div>
        <ul className="mt-4 flex flex-col divide-y divide-line">
          {tasks.map((t) => (
            <li key={t} className="flex items-center gap-2.5 py-2.5 text-[0.92rem] text-ink-soft">
              <Check size={15} className="shrink-0 text-blue" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-sm font-bold uppercase tracking-[0.08em] text-ink">
          Keom
        </span>
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-mute">
          Keep Every Opportunity Moving · Lima, Perú
        </span>
      </div>
    </footer>
  );
}
