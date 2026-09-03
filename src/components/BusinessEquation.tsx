import { Band } from "./Band";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { ChatBubble, Clock, TrendDown } from "./icons";

function Term({
  icon,
  label,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <Reveal
      variant="up"
      delay={delay}
      className="flex min-h-[10.5rem] w-full max-w-[14rem] flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface px-5 py-6 text-center shadow-[var(--shadow-soft)]"
    >
      <span className="text-blue">{icon}</span>
      <span className="text-[0.95rem] font-medium leading-snug text-ink">
        {label}
      </span>
    </Reveal>
  );
}

function Op({ children, delay }: { children: string; delay: number }) {
  return (
    <Reveal
      variant="fade"
      delay={delay}
      className="flex items-center justify-center font-display text-4xl font-semibold text-ink-mute"
    >
      <span aria-hidden>{children}</span>
    </Reveal>
  );
}

export function BusinessEquation() {
  return (
    <Band tone="white" pad="md">
      <SectionTitle sub="Dos fugas silenciosas que, sumadas, cuestan más que cualquier campaña de publicidad.">
        La cuenta que casi nadie hace.
      </SectionTitle>

      <div className="mt-12 flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-stretch lg:gap-6">
        <Term
          delay={0}
          icon={<ChatBubble size={26} />}
          label="Consultas sin responder a tiempo"
        />
        <Op delay={0.08}>+</Op>
        <Term
          delay={0.14}
          icon={<Clock size={26} />}
          label="Seguimiento que se corta"
        />
        <Op delay={0.22}>=</Op>

        <Reveal
          variant="up"
          delay={0.3}
          className="flex min-h-[10.5rem] w-full max-w-[15rem] flex-col items-center justify-center gap-2.5 rounded-2xl border border-at-risk/25 px-6 py-6 text-center shadow-[var(--shadow-soft)]"
          style={{ background: "#fdf0f0" }}
        >
          <span className="text-at-risk">
            <TrendDown size={26} />
          </span>
          <span className="font-display text-[1.7rem] font-semibold leading-tight text-at-risk sm:text-[2rem]">
            Menos ventas.
          </span>
          <span className="text-[0.86rem] leading-snug text-ink-soft">
            Dinero que ya pagaste por atraer y se va sin cerrar.
          </span>
        </Reveal>
      </div>
    </Band>
  );
}
