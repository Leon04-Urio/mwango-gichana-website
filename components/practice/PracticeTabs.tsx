"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AreaDetail, type RelatedPost } from "@/components/practice/AreaDetail";
import { Briefcase, Gavel, LandPlot, Scale, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PracticeArea } from "@/lib/content/types";

const ICONS = {
  landPlot: LandPlot,
  scale: Scale,
  briefcase: Briefcase,
  gavel: Gavel,
  search: Search,
} as const;

const num = (i: number) => String(i + 1).padStart(2, "0");

// Vertical tabs: the areas down the left, the full content on the right.
export function PracticeTabs({
  areas,
  related,
}: {
  areas: PracticeArea[];
  related: Record<string, RelatedPost[]>;
}) {
  const [selected, setSelected] = useState(areas[0].slug);
  const panelRef = useRef<HTMLDivElement>(null);

  const select = useCallback((slug: string) => {
    setSelected(slug);
    window.setTimeout(
      () => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      60,
    );
  }, []);

  // Links like /practice-areas#family-law-succession open that area.
  useEffect(() => {
    const read = () => {
      const slug = decodeURIComponent(window.location.hash.replace("#", ""));
      if (areas.some((a) => a.slug === slug)) select(slug);
    };
    read();
    // In-app links change the hash with pushState, which fires no event.
    const push = window.history.pushState;
    window.history.pushState = function (...args) {
      const result = push.apply(this, args);
      window.dispatchEvent(new Event("practice-hash"));
      return result;
    };
    window.addEventListener("hashchange", read);
    window.addEventListener("practice-hash", read);
    return () => {
      window.history.pushState = push;
      window.removeEventListener("hashchange", read);
      window.removeEventListener("practice-hash", read);
    };
  }, [areas, select]);

  const index = Math.max(0, areas.findIndex((a) => a.slug === selected));
  const area = areas[index];

  return (
    <section className="bg-ivory py-10 sm:py-14">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12 lg:px-10">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Practice areas"
          className="-mx-6 flex gap-2 overflow-x-auto px-6 lg:sticky lg:top-28 lg:mx-0 lg:h-fit lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-border-hairline lg:px-0"
        >
          {areas.map((a, i) => {
            const active = a.slug === area.slug;
            return (
              <button
                key={a.slug}
                id={`tab-${a.slug}`}
                role="tab"
                aria-selected={active}
                aria-controls="practice-panel"
                onClick={() => select(a.slug)}
                className={cn(
                  "focus-ring flex shrink-0 items-baseline gap-4 whitespace-nowrap px-5 py-4 text-left transition-colors duration-300 lg:border-b lg:border-border-hairline lg:py-5",
                  active
                    ? "bg-navy-950 text-ivory"
                    : "bg-paper text-navy-950 hover:bg-ivory-dim lg:bg-transparent",
                )}
              >
                <span className={cn("font-display display-regular text-base", active ? "text-gold-400" : "text-gold-600")}>
                  {num(i)}
                </span>
                <span className="font-display display-regular text-lg">{a.shortTitle}</span>
                {(() => {
                  const TabIcon = ICONS[a.icon];
                  return (
                    <TabIcon
                      className={cn(
                        "-ml-2 size-5 shrink-0 self-center text-gold-400 transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-0",
                      )}
                      aria-hidden="true"
                    />
                  );
                })()}
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          id="practice-panel"
          role="tabpanel"
          aria-labelledby={`tab-${area.slug}`}
          key={area.slug}
          className="scroll-mt-28"
        >
          <h2 className="font-display display-regular text-3xl leading-tight text-navy-950 sm:text-4xl">{area.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-charcoal">{area.summary}</p>
          <div className="mt-7 border-t border-border-hairline pt-7">
            <AreaDetail area={area} posts={related[area.slug]} />
          </div>
        </div>
      </div>
    </section>
  );
}
