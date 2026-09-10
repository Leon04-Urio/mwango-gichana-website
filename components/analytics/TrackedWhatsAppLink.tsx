"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

export function TrackedWhatsAppLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackWhatsAppClick}
    >
      {children}
    </a>
  );
}
