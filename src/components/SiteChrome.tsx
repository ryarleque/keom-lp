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
  const [open, setOpen] = useState(false);

  // close the mobile menu on Escape or when a link is chosen
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="KEOM, inicio" onClick={() => setOpen(false)}>
          <KeomLogo markSize={28} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("header")}
            target="_blank"
            rel="noopener noreferrer"
            className="press rounded-[10px] bg-mint-fill px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-on-mint hover:bg-mint"
          >
            Agendar demo
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="press -mr-1 grid h-9 w-9 place-items-center rounded-lg text-ink lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-bg transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 text-[0.95rem] font-medium text-ink-soft transition-colors last:border-0 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
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
      className={`fixed bottom-5 right-5 z-30 hidden items-center gap-2.5 rounded-full bg-mint-fill px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-on-mint shadow-[0_18px_40px_-16px_rgba(61,220,132,0.5)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:bg-mint active:scale-[0.97] sm:flex ${
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
