import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
  regular = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  className?: string;
  regular?: boolean;
}) {
  return (
    <div className={cn("border-b border-border-hairline bg-ivory-dim text-navy-950", className)}>
      <div className="mx-auto max-w-8xl px-6 pb-10 pt-24 sm:pt-28 lg:px-10 lg:pb-12 lg:pt-28">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-600">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "font-display text-2xl leading-tight text-balance text-navy-950 sm:text-4xl lg:text-5xl",
              regular && "display-regular text-2xl sm:text-3xl lg:text-4xl",
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
