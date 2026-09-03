"use client";

import { useEffect, useState } from "react";
import { KeomLogo } from "./KeomMark";
import { NAV, whatsappUrl } from "@/lib/keom";

/** True once the page has scrolled past `offset` px (IntersectionObserver sentinel). */
function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = `position:absolute;top:${offset}px;left:0;width:1px;height:1px;pointer-events:none;`;
    document.body.appendChild(sentinel);
    const io = new IntersectionObserver(([e]) => setPast(!e.isIntersecting), {
      threshold: 0,
    });
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, [offset]);
  return past;
}

export function SiteHeader() {
  const solid = useScrolledPast(24);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="KEOM, inicio">
          <KeomLogo markSize={28} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl("header")}
          target="_blank"
          rel="noopener noreferrer"
          className="press rounded-[10px] bg-mint-fill px-4 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] text-on-mint hover:bg-mint"
        >
          Agendar demo
        </a>
      </div>
    </header>
  );
}

export function StickyDemoButton() {
  const past = useScrolledPast(900);

  return (
    <a
      href={whatsappUrl("sticky")}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!past}
      tabIndex={past ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-mint-fill px-5 py-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] text-on-mint shadow-[0_18px_40px_-16px_rgba(61,220,132,0.5)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:bg-mint active:scale-[0.97] ${
        past
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-mint/50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-on-mint" />
      </span>
      Agendar demo
    </a>
  );
}
