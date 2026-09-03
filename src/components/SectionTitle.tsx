import { type ReactNode } from "react";

type Tone = "ink" | "onBlue" | "onDark";

const SUB: Record<Tone, string> = {
  ink: "text-ink-soft",
  onBlue: "text-on-blue-soft",
  onDark: "text-on-dark-soft",
};

/** Centered section heading. No eyebrow: the heading carries its own weight. */
export function SectionTitle({
  children,
  sub,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  sub?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <header className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-[2rem] font-semibold leading-[1.06] sm:text-[2.9rem]">
        {children}
      </h2>
      {sub ? (
        <p className={`mx-auto mt-4 max-w-xl text-lg leading-relaxed ${SUB[tone]}`}>
          {sub}
        </p>
      ) : null}
    </header>
  );
}
