"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { cn } from "@/lib/utils";
import { firm } from "@/lib/content/firm";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPracticeMenu = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setPracticeOpen(true);
  };

  const closePracticeMenu = () => {
    closeTimeout.current = setTimeout(() => setPracticeOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "bg-navy-950/95 backdrop-blur-sm border-b border-border-hairline-dark"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-2.5 lg:px-10">
        <Link
          href="/"
          className="focus-ring flex flex-col leading-none rounded"
          aria-label={`${firm.name}, Home`}
        >
          <span
            className={cn(
              "font-signature text-2xl leading-none transition-colors sm:text-3xl",
              "text-ivory"
            )}
          >
            Mwango Gichana
          </span>
          <span
            className={cn(
              "text-[0.55rem] font-medium uppercase tracking-[0.3em] transition-colors",
              "text-gold-400"
            )}
          >
            &amp; Co. Advocates
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.href === "/practice-areas") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openPracticeMenu}
                  onMouseLeave={closePracticeMenu}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "focus-ring group relative flex items-center gap-1 text-xs font-medium uppercase tracking-[0.04em] transition-[color,transform] duration-300 hover:-translate-y-0.5",
                      active
                        ? "text-ivory"
                        : "text-ivory/70 hover:text-ivory"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        practiceOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                    {active && (
                      <span
                        className={cn(
                          "absolute -bottom-1.5 left-0 h-[2px] w-full",
                          "bg-gold-400"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {practiceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 border border-border-hairline-dark bg-navy-950 py-2 shadow-lg"
                      >
                        {practiceAreas.map((area) => (
                          <Link
                            key={area.slug}
                            href={`/practice-areas#${area.slug}`}
                            className="focus-ring block px-5 py-2.5 text-sm text-ivory/75 transition-[padding,background-color,color] duration-200 hover:bg-navy-900 hover:pl-7 hover:text-ivory"
                          >
                            {area.shortTitle}
                          </Link>
                        ))}
                        <div className="mx-5 mt-1 border-t border-border-hairline-dark pt-2">
                          <Link
                            href="/practice-areas"
                            className="focus-ring block px-0 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-gold-400 transition-colors hover:text-ivory"
                          >
                            View All Practice Areas
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring group relative text-xs font-medium uppercase tracking-[0.04em] transition-[color,transform] duration-300 hover:-translate-y-0.5",
                  active
                    ? "text-ivory"
                    : "text-ivory/70 hover:text-ivory"
                )}
              >
                {link.label}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-[2px] w-full",
                      "bg-gold-400"
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle solid={false} />
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring -mr-2 p-2 lg:hidden",
            "text-ivory"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border-hairline-dark bg-navy-950 lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-6 py-6"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="focus-ring block border-b border-border-hairline-dark py-3.5 font-display text-xl uppercase tracking-wide text-ivory"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <TrackedPhoneLink
                  href={firm.contact.phoneHref}
                  location="mobile_menu"
                  className="focus-ring inline-flex items-center justify-center gap-2.5 border border-ivory/30 px-4 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
                >
                  <Phone className="size-4 text-gold-400" aria-hidden="true" />
                  Call us
                </TrackedPhoneLink>
                {firm.contact.whatsappNumber && (
                  <TrackedWhatsAppLink
                    href={`https://wa.me/${firm.contact.whatsappNumber}`}
                    className="focus-ring inline-flex items-center justify-center gap-2.5 border border-ivory/30 px-4 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
                  >
                    <WhatsAppIcon className="size-4 text-gold-400" />
                    WhatsApp
                  </TrackedWhatsAppLink>
                )}
              </div>
              <div className="mt-6">
                <LanguageToggle solid={false} />
              </div>
              <p className="mt-4 text-xs text-ivory/60">
                {practiceAreas.length} practice areas · {firm.location.town},{" "}
                {firm.location.subCounty}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
