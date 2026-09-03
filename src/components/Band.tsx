import { type ReactNode } from "react";

type Tone = "white" | "blue" | "dark";

const BG: Record<Tone, string> = {
  white: "bg-bg text-ink",
  blue: "bg-blue text-on-blue",
  dark: "bg-dark text-on-dark",
};

/**
 * A full-width color band. `white` sections are the calm connective tissue;
 * `blue` sections carry the emotional beats; `dark` is used once, for the board.
 */
export function Band({
  children,
  tone = "white",
  id,
  wide = false,
  pad = "lg",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  wide?: boolean;
  pad?: "lg" | "md" | "none";
  className?: string;
}) {
  const py =
    pad === "none" ? "" : pad === "md" ? "py-16 sm:py-20" : "py-24 sm:py-28";
  return (
    <section id={id} className={`${BG[tone]} ${className}`}>
      <div
        className={`mx-auto px-5 sm:px-8 ${py} ${
          wide ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
