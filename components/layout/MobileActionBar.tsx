"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { cn } from "@/lib/utils";
import { firm } from "@/lib/content/firm";

// Phone and WhatsApp are the primary contact paths for visitors on mobile,
// so they stay one tap away once the page's own actions have scrolled off.
export function MobileActionBar() {
  const pathname = usePathname();
  const [pastFold, setPastFold] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastFold(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The contact page already leads with these actions.
  const visible = pastFold && pathname !== "/contact";

  const cell =
    "focus-ring flex flex-1 items-center justify-center gap-3 py-3.5 text-base font-medium tracking-wide text-ivory transition-colors duration-300 active:bg-navy-800";

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex border-t border-border-hairline-dark bg-navy-950 pb-[env(safe-area-inset-bottom)] transition-[transform,visibility] duration-300 ease-out lg:hidden",
        visible ? "translate-y-0" : "invisible translate-y-full"
      )}
    >
      <TrackedPhoneLink
        href={firm.contact.phoneHref}
        location="mobile_bar"
        className={cell}
      >
        <Phone className="size-5 text-gold-400" aria-hidden="true" />
        Call
      </TrackedPhoneLink>
      {firm.contact.whatsappNumber && (
        <TrackedWhatsAppLink
          href={`https://wa.me/${firm.contact.whatsappNumber}`}
          className={cn(cell, "border-l border-border-hairline-dark")}
        >
          <WhatsAppIcon className="size-5 text-gold-400" />
          WhatsApp
        </TrackedWhatsAppLink>
      )}
    </div>
  );
}
