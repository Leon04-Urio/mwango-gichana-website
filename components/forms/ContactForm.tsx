"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CircleCheck, CircleAlert } from "lucide-react";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { trackContactFormSubmit } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "focus-ring w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-charcoal/50 transition-colors focus:border-navy-900";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      preferredContact: formData.get("preferredContact") || "email",
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
      <div className="flex flex-col items-start gap-3 border border-gold-500/40 bg-gold-500/5 p-8">
        <CircleCheck className="size-8 text-gold-600" aria-hidden="true" />
        <h3 className="font-display text-xl text-navy-950">
          Thank you, your enquiry has been received.
        </h3>
        <p className="text-sm text-charcoal">
          A member of our team will be in touch shortly. For urgent matters,
          please call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field — hidden from real users, visible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
            Full Name *
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="practiceArea" className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
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

      <fieldset>
        <legend className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-6">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone Call" },
            { value: "whatsapp", label: "WhatsApp" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-navy-950">
              <input
                type="radio"
                name="preferredContact"
                value={option.value}
                defaultChecked={option.value === "email"}
                className="size-4 accent-navy-900"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-charcoal">
          Message *
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

      <label className="flex items-start gap-3 text-sm text-charcoal">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 accent-navy-900"
        />
        <span>
          I consent to {"Mwango Gichana & Co. Advocates"} contacting me about
          this enquiry, in line with the{" "}
          <a href="/privacy-policy" className="underline hover:text-navy-900">
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
        className="focus-ring inline-flex w-full items-center justify-center gap-2 border border-navy-900 bg-navy-900 px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
