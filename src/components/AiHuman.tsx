import { AI_TASKS, HUMAN_TASKS } from "@/lib/keom";
import { Section } from "./Section";
import { SectionHeading } from "./ui";
import { Bot, Check, Users, UsersTrio } from "./icons";

function Card({
  icon,
  title,
  tasks,
  human = false,
}: {
  icon: React.ReactNode;
  title: string;
  tasks: string[];
  human?: boolean;
}) {
  return (
    <div className="flex gap-6 rounded-2xl border border-line bg-surface/90 p-7 sm:p-9">
      <div
        className={`shrink-0 pt-1 ${human ? "text-ink-soft" : "text-mint"}`}
        aria-hidden
      >
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-body text-title font-bold text-ink">{title}</h3>
        <ul className="mt-5 flex flex-col gap-3.5">
          {tasks.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-base text-ink-soft">
              <span
                className={`mt-0.5 grid h-[1.1rem] w-[1.1rem] shrink-0 place-items-center rounded-full ${
                  human
                    ? "border border-ink-mute text-ink-mute"
                    : "bg-mint-dim text-mint"
                }`}
              >
                <Check size={12} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AiHuman() {
  return (
    <>
      <Section tone="paper" pad="md">
        <SectionHeading
          tone="paper"
          width="lg"
          sub="KEOM se encarga de lo repetitivo para que tu equipo se enfoque en lo que realmente importa."
        >
          IA + Humano, mejores resultados
        </SectionHeading>
      </Section>

      <Section tone="dark" pad="lg">
        <div className="relative mx-auto grid max-w-5xl gap-12 md:-mt-8 md:grid-cols-2 md:gap-32">
          <Card
            icon={<Bot size={52} />}
            title="KEOM se encarga de"
            tasks={AI_TASKS}
          />
          <Card
            icon={<UsersTrio size={50} />}
            title="Tu equipo se encarga de"
            tasks={HUMAN_TASKS}
            human
          />

          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line-2 bg-bg text-ink-soft shadow-[0_0_0_10px_rgba(255,255,255,0.03)] md:grid"
          >
            <Users size={20} />
          </span>
        </div>
      </Section>
    </>
  );
}
