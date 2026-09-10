"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { firm } from "@/lib/content/firm";
import { practiceAreas } from "@/lib/content/practiceAreas";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          ? "bg-ivory/95 backdrop-blur-sm border-b border-border-hairline"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="focus-ring flex flex-col leading-none rounded"
          aria-label={`${firm.name} — Home`}
        >
          <span
            className={cn(
              "font-display text-lg tracking-wide transition-colors sm:text-xl",
              solid ? "text-navy-950" : "text-ivory"
            )}
          >
            Mwango Gichana
          </span>
          <span
            className={cn(
              "text-[0.65rem] font-medium uppercase tracking-[0.3em] transition-colors",
              solid ? "text-gold-600" : "text-gold-400"
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
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring relative text-sm font-medium tracking-wide transition-colors",
                  solid
                    ? active
                      ? "text-navy-950"
                      : "text-charcoal-soft hover:text-navy-950"
                    : active
                      ? "text-ivory"
                      : "text-ivory/75 hover:text-ivory"
                )}
              >
                {link.label}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full",
                      solid ? "bg-gold-500" : "bg-gold-400"
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={cn(
              "focus-ring inline-flex items-center border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300",
              solid
                ? "border-navy-900 bg-navy-900 text-ivory hover:bg-navy-800"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-navy-900"
            )}
          >
            Request a Consultation
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring -mr-2 p-2 lg:hidden",
            solid ? "text-navy-950" : "text-ivory"
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
            className="overflow-hidden border-t border-border-hairline bg-ivory lg:hidden"
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
                    className="focus-ring block border-b border-border-hairline py-3.5 font-display text-xl text-navy-950"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="focus-ring mt-6 inline-flex items-center justify-center border border-navy-900 bg-navy-900 px-5 py-3.5 text-sm font-medium tracking-wide text-ivory"
              >
                Request a Consultation
              </Link>
              <p className="mt-4 text-xs text-charcoal-soft">
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
