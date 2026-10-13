import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em]",
            align === "center" && "justify-center",
            light ? "text-gold-400" : "text-gold-600"
          )}
        >
          <span
            className={cn(
              "h-[2px] w-10",
              light ? "bg-gold-400" : "bg-gold-500"
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-xl leading-tight text-balance sm:text-2xl md:text-3xl lg:text-4xl",
          light ? "text-ivory" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/75" : "text-charcoal"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
