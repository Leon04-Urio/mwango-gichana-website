import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline-light" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-colors duration-300 whitespace-nowrap";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-ivory hover:bg-navy-800 border border-navy-900",
  secondary:
    "bg-transparent text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-navy-900/5",
  "outline-light":
    "bg-transparent text-ivory border border-ivory/50 hover:bg-ivory hover:text-navy-900",
  ghost: "text-navy-900 hover:text-gold-600 px-0",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    showArrow,
  } = props;

  const classes = cn(
    base,
    variant !== "ghost" && sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={cn(classes, "group")}
    >
      {content}
    </button>
  );
}
