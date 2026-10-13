"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

export function TrackedWhatsAppLink({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={trackWhatsAppClick}
    >
      {children}
    </a>
  );
}
