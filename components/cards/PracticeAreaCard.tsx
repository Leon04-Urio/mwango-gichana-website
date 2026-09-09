import Link from "next/link";
import { Briefcase, Gavel, LandPlot, Scale, Search, ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/lib/content/types";

const ICONS = {
  landPlot: LandPlot,
  scale: Scale,
  briefcase: Briefcase,
  gavel: Gavel,
  search: Search,
} as const;

export function PracticeAreaCard({
  area,
  index,
}: {
  area: PracticeArea;
  index: number;
}) {
  const Icon = ICONS[area.icon];

  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="focus-ring group relative flex flex-col justify-between border border-border-hairline bg-ivory p-8 transition-colors duration-300 hover:border-navy-900/40"
    >
      <div>
        <div className="flex items-start justify-between">
          <Icon className="size-8 text-gold-600" aria-hidden="true" />
          <span className="font-display text-sm text-charcoal-soft/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl text-navy-950 sm:text-2xl">
          {area.shortTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
          {area.summary}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-navy-900">
        View Practice Area
        <ArrowUpRight
          className="size-4 text-gold-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
