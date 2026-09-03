import { type ReactNode } from "react";

type Tone = "dark" | "paper";

const TONE: Record<Tone, string> = {
  dark: "bg-bg text-ink",
  paper: "bg-paper text-on-paper",
};

const PAD = {
  lg: "py-20 sm:py-28",
  md: "py-14 sm:py-20",
  none: "",
} as const;

/** Full-width band with a centered, padded content column. */
export function Section({
  tone = "dark",
  id,
  pad = "lg",
  wide = false,
  className = "",
  innerClassName = "",
  children,
}: {
  tone?: Tone;
  id?: string;
  pad?: keyof typeof PAD;
  wide?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${TONE[tone]} ${className}`}>
      <div
        className={`mx-auto w-full px-5 sm:px-8 ${
          wide ? "max-w-7xl" : "max-w-6xl"
        } ${PAD[pad]} ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
