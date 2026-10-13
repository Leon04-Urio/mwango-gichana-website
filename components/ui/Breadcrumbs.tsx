import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className={cn("flex flex-wrap items-center gap-1.5", dark ? "text-ivory/60" : "text-charcoal")}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="size-3.5 text-charcoal/50"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span className={dark ? "text-ivory" : "text-navy-900"} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="focus-ring rounded transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
