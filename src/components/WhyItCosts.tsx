import { PAIN_POINTS } from "@/lib/keom";
import { Section } from "./Section";
import { SectionHeading } from "./ui";
import { ChatBubble, Clock, Eye, Bell } from "./icons";

const ICON = {
  chat: ChatBubble,
  clock: Clock,
  eye: Eye,
  bell: Bell,
} as const;

export function WhyItCosts() {
  return (
    <Section tone="paper" id="producto">
      <SectionHeading tone="paper" width="lg">
        Cada hora sin respuesta cuesta dinero.
      </SectionHeading>

      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
        {PAIN_POINTS.map((p, i) => {
          const Icon = ICON[p.icon];
          return (
            <li
              key={p.title}
              className={`lg:px-7 ${
                i > 0 ? "lg:border-l lg:border-paper-line" : ""
              }`}
            >
              <Icon size={28} className="text-on-paper" />
              <h3 className="mt-5 min-h-[2.6em] font-body text-[0.95rem] font-bold leading-snug tracking-[-0.005em] text-on-paper">
                {p.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-on-paper-soft">
                {p.body}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
