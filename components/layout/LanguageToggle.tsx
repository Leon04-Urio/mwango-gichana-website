"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type Locale = "en" | "sw";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
];

export function LanguageToggle({ solid }: { solid: boolean }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("locale");
    if (stored === "en" || stored === "sw") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    window.localStorage.setItem("locale", code);
    document.documentElement.lang = code;
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "focus-ring flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium tracking-wide transition-colors",
          solid
            ? "text-charcoal hover:text-navy-950"
            : "text-ivory/75 hover:text-ivory"
        )}
      >
        <Globe className="size-4" aria-hidden="true" />
        {locale.toUpperCase()}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-36 border border-border-hairline bg-ivory py-1.5 shadow-lg"
        >
          {LOCALES.map(({ code, label }) => {
            const active = locale === code;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => handleSelect(code)}
                  className={cn(
                    "focus-ring block w-full px-4 py-2 text-left text-sm transition-colors",
                    active
                      ? "font-medium text-navy-950"
                      : "text-charcoal hover:text-navy-950"
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
