import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  className?: string;
}) {
  return (
    <div className={cn("border-b border-border-hairline bg-ivory-dim", className)}>
      <div className="mx-auto max-w-8xl px-6 pb-14 pt-32 sm:pt-36 lg:px-10 lg:pb-16 lg:pt-40">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-tight text-balance text-navy-950 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
