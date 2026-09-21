"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ALT, DEMO_LABEL, ROLES, SHOTS } from "@/lib/v2-content";
import { Section, Shot } from "./primitives";

const TABS = [
  {
    key: "seller" as const,
    data: ROLES.seller,
    d: SHOTS.seller,
    m: SHOTS.sellerMobile,
    alt: ALT.seller,
  },
  {
    key: "admin" as const,
    data: ROLES.admin,
    d: SHOTS.admin,
    m: SHOTS.adminMobile,
    alt: ALT.admin,
  },
];

export function Roles() {
  const [tab, setTab] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (tab + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length;
    setTab(next);
    btns.current[next]?.focus();
  };

  return (
    <Section id="paneles" labelledBy="roles-title" size="md" tone="raised">
      <h2 id="roles-title" className="k-h2 max-w-[22ch]">
        {ROLES.title}
      </h2>

      <div
        role="tablist"
        aria-label="Vista por rol"
        onKeyDown={onKey}
        className="mt-10 inline-flex rounded-[10px] border border-k-line-strong p-1"
      >
        {TABS.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              btns.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.key}`}
            type="button"
            aria-selected={tab === i}
            aria-controls={`panel-${t.key}`}
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
            className={`k-press min-h-11 rounded-[7px] px-5 text-[0.9375rem] font-medium ${
              tab === i ? "bg-k-high text-k-ink" : "text-k-soft hover:text-k-ink"
            }`}
          >
            {t.data.tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid lg:mt-12 lg:grid-cols-12 lg:gap-x-14">
        <div className="lg:col-span-4">
          {TABS.map((t, i) => (
            <div
              key={t.key}
              role="tabpanel"
              id={`panel-${t.key}`}
              aria-labelledby={`tab-${t.key}`}
              hidden={tab !== i}
            >
              <p className="k-lead text-k-ink">{t.data.lead}</p>
              <ul className="mt-6 divide-y divide-k-line border-y border-k-line">
                {t.data.items.map((it) => (
                  <li key={it} className="k-body py-4 text-k-soft">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:col-span-8 lg:mt-0">
          <div className="grid">
            {TABS.map((t, i) => (
              <div
                key={t.key}
                aria-hidden={tab !== i}
                className={`self-start transition-opacity duration-200 [grid-area:1/1] ${
                  tab === i ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <Shot d={t.d} m={t.m} alt={t.alt} ratio={[1.2, 0.85]} className="shadow-k-screen" />
              </div>
            ))}
          </div>
          <p className="k-small mt-3 text-k-mute">{DEMO_LABEL}</p>
        </div>
      </div>
    </Section>
  );
}
