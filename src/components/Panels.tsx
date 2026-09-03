import { OWNER_METRICS, VENDOR_ROWS } from "@/lib/keom";
import { Section } from "./Section";
import { SectionHeading } from "./ui";
import { Sparkline } from "./Sparkline";
import { ArrowUp, ChevronDown, Clock } from "./icons";

const VALUE_COLOR = {
  mint: "text-mint",
  danger: "text-danger",
  info: "text-info",
} as const;

function VendorPanel() {
  return (
    <div>
      <h3 className="font-body text-title font-bold text-ink">
        Panel del vendedor
      </h3>
      <div className="mt-4 rounded-2xl border border-line bg-surface/70 p-2">
        <div className="grid grid-cols-[1fr_auto] gap-4 px-3 py-2.5 font-mono text-2xs uppercase tracking-[0.12em] text-ink-mute">
          <span>Cliente / oportunidad</span>
          <span>Seguimiento</span>
        </div>
        <ul className="flex flex-col">
          {VENDOR_ROWS.map((r) => (
            <li
              key={r.name}
              className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-line px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-2xs font-semibold text-ink-soft">
                  {r.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-ink">
                    {r.name}
                  </p>
                  <p className="truncate text-xs text-ink-mute">{r.opp}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${
                  r.tone === "danger"
                    ? "bg-[color-mix(in_oklab,var(--danger)_14%,transparent)] text-danger"
                    : "bg-[color-mix(in_oklab,var(--warn)_16%,transparent)] text-warn"
                }`}
              >
                <Clock size={12} />
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OwnerPanel() {
  return (
    <div>
      <h3 className="font-body text-title font-bold text-ink">
        Dashboard para dueños
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {OWNER_METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-line bg-surface/70 p-5"
          >
            <p className="text-sm text-ink-soft">{m.label}</p>
            <div className="mt-3 flex items-end justify-between gap-2">
              <div className="min-w-0">
                <p
                  className={`whitespace-nowrap font-display text-stat font-extrabold ${VALUE_COLOR[m.tone]}`}
                >
                  {m.value}
                </p>
                <p className="mt-2.5 flex items-center gap-1 whitespace-nowrap text-xs text-ink-mute">
                  <ArrowUp size={11} className={VALUE_COLOR[m.tone]} />
                  {m.delta}
                </p>
              </div>
              <Sparkline data={m.trend} tone={m.tone} width={104} height={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Panels() {
  return (
    <Section tone="dark" id="paneles" pad="none" innerClassName="pt-6 pb-20 sm:pt-10">
      <div className="relative">
        <SectionHeading width="lg">
          Paneles que te dan control total
        </SectionHeading>
        <span
          aria-hidden
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink-soft sm:absolute sm:right-0 sm:top-0 sm:mt-0"
        >
          Este mes
          <ChevronDown size={14} className="text-ink-mute" />
        </span>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <VendorPanel />
        <OwnerPanel />
      </div>

      <p className="mt-12 text-center font-mono text-2xs uppercase tracking-[0.2em] text-ink-mute">
        Datos de ejemplo · KEOM está en pre-lanzamiento
      </p>
    </Section>
  );
}
