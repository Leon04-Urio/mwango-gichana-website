"use client";

import { trackPhoneClick } from "@/lib/analytics";

export function TrackedPhoneLink({
  href,
  location,
  className,
  children,
}: {
  href: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => trackPhoneClick(location)}>
      {children}
    </a>
  );
}
