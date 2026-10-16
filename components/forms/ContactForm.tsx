"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CircleCheck, CircleAlert, Phone } from "lucide-react";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { firm } from "@/lib/content/firm";
import { trackContactFormSubmit } from "@/lib/analytics";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";

type Status = "idle" | "submitting" | "success" | "error";
type Method = "email" | "phone" | "whatsapp";

const THEMES = {
  light: {
    input:
      "focus-ring w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-charcoal/50 transition-colors focus:border-navy-900",
    label: "mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal",
    action:
      "focus-ring inline-flex w-full items-center justify-center gap-3 border border-navy-900 bg-navy-900 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-navy-800 sm:w-auto",
    text: "text-charcoal",
    strong: "text-navy-950",
    box: "border-border-hairline",
    accent: "accent-navy-900",
    link: "hover:text-navy-900",
    gold: "text-gold-600",
    done: "border-gold-500/40 bg-gold-500/5",
  },
  dark: {
    input:
      "focus-ring w-full border border-ivory/15 bg-navy-800 px-4 py-3.5 text-base text-ivory placeholder:text-ivory/50 transition-colors focus:border-gold-400",
    label: "mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ivory/80",
    action:
      "focus-ring inline-flex w-full items-center justify-center gap-3 border border-gold-400 bg-gold-400 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-navy-950 transition-colors hover:bg-transparent hover:text-gold-400 sm:w-auto",
    text: "text-ivory/80",
    strong: "text-ivory",
    box: "border-ivory/20",
    accent: "accent-gold-400",
    link: "hover:text-gold-400",
    gold: "text-gold-400",
    done: "border-gold-400/50 bg-navy-800",
  },
} as const;

const METHODS: { value: Method; label: string; hint: string }[] = [
  { value: "email", label: "Email", hint: "Send us the details below and we will reply by email." },
  { value: "phone", label: "Phone Call", hint: "Call us now, or leave your number and we will call you back." },
  { value: "whatsapp", label: "WhatsApp", hint: "Start a chat with an advocate on WhatsApp." },
];

export function ContactForm({ dark = false }: { dark?: boolean }) {
  const t = THEMES[dark ? "dark" : "light"];
  const inputClasses = t.input;
  const labelClasses = t.label;
  const actionClasses = t.action;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [method, setMethod] = useState<Method>("email");
  const [waArea, setWaArea] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      practiceArea: formData.get("practiceArea"),
      message: formData.get("message"),
      preferredContact: method,
      consent: formData.get("consent") === "on",
      company: formData.get("company") || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      trackContactFormSubmit(String(payload.practiceArea || ""));
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex flex-col items-start gap-3 border p-8 ${t.done}`}>
        <CircleCheck className={`size-8 ${t.gold}`} aria-hidden="true" />
        <h3 className={`font-display text-xl ${t.strong}`}>
          Thank you, your enquiry has been received.
        </h3>
        <p className={`text-sm ${t.text}`}>
          {method === "phone"
            ? "A member of our team will call you back shortly."
            : method === "whatsapp"
              ? "A member of our team will message you on WhatsApp shortly."
              : "A member of our team will reply by email shortly."}{" "}
          For urgent matters, please call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  const waMatter = waArea && waArea !== "other" ? `a legal matter in ${waArea}` : "a legal matter";
  const waText = `Good day. I would like to make an enquiry regarding ${waMatter} and would like to speak to an advocate.`;
  const waHref = `https://wa.me/${firm.contact.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  const current = METHODS.find((m) => m.value === method)!;

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className={labelClasses}>Preferred Contact Method</legend>
        <div className="flex flex-wrap gap-6">
          {METHODS.map((option) => (
            <label key={option.value} className={`flex items-center gap-2 text-sm ${t.strong}`}>
              <input
                type="radio"
                name="preferredContact"
                value={option.value}
                checked={method === option.value}
                onChange={() => setMethod(option.value)}
                className={`size-4 ${t.accent}`}
              />
              {option.label}
            </label>
          ))}
        </div>
        <p className={`mt-3 text-sm ${t.text}`} aria-live="polite">
          {current.hint}
        </p>
      </fieldset>

      {method === "whatsapp" && (
        <div className={`space-y-5 border p-6 ${t.box}`}>
          <div>
            <label htmlFor="waArea" className={labelClasses}>
              What can we help you with?
            </label>
            <select
              id="waArea"
              className={inputClasses}
              value={waArea}
              onChange={(e) => setWaArea(e.target.value)}
            >
              <option value="">Select an area (optional)</option>
              {practiceAreas.map((area) => (
                <option key={area.slug} value={area.title}>
                  {area.shortTitle}
                </option>
              ))}
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
          <TrackedWhatsAppLink href={waHref} className={actionClasses}>
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </TrackedWhatsAppLink>
        </div>
      )}

      {method === "phone" && (
        <div className={`space-y-3 border p-6 ${t.box}`}>
          <TrackedPhoneLink href={firm.contact.phoneHref} location="contact_form" className={actionClasses}>
            <Phone className="size-5" aria-hidden="true" />
            Call {firm.contact.phoneDisplay}
          </TrackedPhoneLink>
          <p className={`text-sm ${t.text}`}>
            On a phone, this starts the call. Prefer a call back? Leave your details below.
          </p>
        </div>
      )}

      {method !== "whatsapp" && (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field, hidden from real users and visible to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name *
              </label>
              <input id="name" name="name" type="text" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email {method === "email" ? "*" : ""}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required={method === "email"}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number {method === "phone" ? "*" : ""}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required={method === "phone"}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="practiceArea" className={labelClasses}>
                Legal Service / Practice Area
              </label>
              <select id="practiceArea" name="practiceArea" className={inputClasses} defaultValue="">
                <option value="">Select an area</option>
                {practiceAreas.map((area) => (
                  <option key={area.slug} value={area.title}>
                    {area.shortTitle}
                  </option>
                ))}
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Nature of the Enquiry *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Briefly describe your legal matter."
              className={inputClasses}
            />
          </div>

          <label className={`flex items-start gap-3 text-sm ${t.text}`}>
            <input type="checkbox" name="consent" required className={`mt-0.5 size-4 ${t.accent}`} />
            <span>
              I consent to {"Mwango Gichana & Co. Advocates"} contacting me about this enquiry, in
              line with the{" "}
              <a href="/privacy-policy" className={`underline ${t.link}`}>
                Privacy Policy
              </a>
              . *
            </span>
          </label>

          {status === "error" && errorMessage && (
            <div className="flex items-start gap-2.5 border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`${actionClasses} disabled:cursor-not-allowed disabled:opacity-60`}
          >
            {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {status === "submitting"
              ? "Sending..."
              : method === "phone"
                ? "Request a Call Back"
                : "Send Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
