import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons/LinkedInIcon";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { firm } from "@/lib/content/firm";
import { isPlaceholder } from "@/lib/utils";
import { practiceAreas } from "@/lib/content/practiceAreas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-hairline-dark bg-navy-950 pb-14 text-ivory/80 lg:pb-0">
      <div className="mx-auto max-w-8xl px-6 pb-5 pt-10 lg:px-10 lg:pb-5 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="focus-ring inline-flex flex-col leading-none">
              <span className="font-display text-lg text-ivory">
                Mwango Gichana
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold-400">
                &amp; Co. Advocates
              </span>
            </Link>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={firm.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mwango Gichana & Co. Advocates on LinkedIn"
                className="focus-ring flex size-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href={firm.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mwango Gichana & Co. Advocates on Instagram"
                className="focus-ring flex size-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <InstagramIcon className="size-4" />
              </a>
              {firm.contact.whatsappNumber && (
                <TrackedWhatsAppLink
                  href={`https://wa.me/${firm.contact.whatsappNumber}`}
                  ariaLabel="Chat with Mwango Gichana & Co. Advocates on WhatsApp"
                  className="focus-ring flex size-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <WhatsAppIcon className="size-4" />
                </TrackedWhatsAppLink>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Practice Areas
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas#${area.slug}`}
                    className="focus-ring rounded transition-colors hover:text-ivory"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Firm
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/about" className="focus-ring rounded transition-colors hover:text-ivory">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="focus-ring rounded transition-colors hover:text-ivory">
                  Blog & Insights
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
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>
                  {!isPlaceholder(firm.location.addressLine) && (
                    <>
                      {firm.location.addressLine}
                      <br />
                    </>
                  )}
                  {firm.location.town}, {firm.location.subCounty}, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <TrackedPhoneLink
                  href={firm.contact.phoneHref}
                  location="footer"
                  className="focus-ring rounded transition-colors hover:text-ivory"
                >
                  {firm.contact.phoneDisplay}
                </TrackedPhoneLink>
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

        <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
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
