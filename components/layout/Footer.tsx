import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons/LinkedInIcon";
import { firm } from "@/lib/content/firm";
import { practiceAreas } from "@/lib/content/practiceAreas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-hairline-dark bg-navy-950 text-ivory/80">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="focus-ring inline-flex flex-col leading-none">
              <span className="font-display text-xl text-ivory">
                Mwango Gichana
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold-400">
                &amp; Co. Advocates
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              {firm.descriptionShort}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={firm.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mwango Gichana & Co. Advocates on LinkedIn"
                className="focus-ring flex size-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Practice Areas
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="focus-ring rounded transition-colors hover:text-ivory"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Firm
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/about" className="focus-ring rounded transition-colors hover:text-ivory">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="focus-ring rounded transition-colors hover:text-ivory">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/insights" className="focus-ring rounded transition-colors hover:text-ivory">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-ring rounded transition-colors hover:text-ivory">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>
                  {firm.location.addressLine}
                  <br />
                  {firm.location.town}, {firm.location.subCounty}, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a href={firm.contact.phoneHref} className="focus-ring rounded transition-colors hover:text-ivory">
                  {firm.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a
                  href={`mailto:${firm.contact.email}`}
                  className="focus-ring rounded transition-colors hover:text-ivory break-all"
                >
                  {firm.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Mwango Gichana &amp; Co. Advocates. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="focus-ring rounded hover:text-ivory/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring rounded hover:text-ivory/70">
              Terms of Use
            </Link>
            <Link href="/legal-disclaimer" className="focus-ring rounded hover:text-ivory/70">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
