import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { firm } from "@/lib/content/firm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Get in touch with ${firm.name} — request a consultation, call, email, or visit our office in ${firm.location.town}, ${firm.location.subCounty}.`,
  path: "/contact",
  keywords: ["contact law firm Kajiado", "advocate Kimana contact", "law firm Kajiado South"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Request a Consultation"
        description="Every matter starts with a conversation. Reach out using the form below, or contact us directly — we'll respond promptly and in confidence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-navy-950">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-charcoal-soft">
              Fields marked * are required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-8 border border-border-hairline p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                    Office
                  </p>
                  <p className="mt-1 text-navy-950">
                    {firm.location.addressLine}
                    <br />
                    {firm.location.town}, {firm.location.subCounty}
                    <br />
                    {firm.location.county}, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                    Phone
                  </p>
                  <a href={firm.contact.phoneHref} className="focus-ring mt-1 block text-navy-950 hover:text-gold-600">
                    {firm.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${firm.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-1 block text-navy-950 hover:text-gold-600"
                  >
                    {firm.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                    Email
                  </p>
                  <a
                    href={`mailto:${firm.contact.email}`}
                    className="focus-ring mt-1 block break-all text-navy-950 hover:text-gold-600"
                  >
                    {firm.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                    Office Hours
                  </p>
                  <ul className="mt-1 space-y-0.5 text-navy-950">
                    {firm.location.officeHours.map((oh) => (
                      <li key={oh.day} className="flex justify-between gap-4 text-sm">
                        <span>{oh.day}</span>
                        <span className="text-charcoal-soft">{oh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-border-hairline">
              <iframe
                src={firm.location.mapEmbedUrl}
                title={`Map showing the location of ${firm.name}`}
                loading="lazy"
                className="h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
