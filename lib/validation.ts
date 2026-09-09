import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  practiceArea: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a few details about your matter.")
    .max(4000),
  preferredContact: z.enum(["email", "phone", "whatsapp"]).default("email"),
  consent: z.literal(true, {
    error: "Please confirm you agree to be contacted about your enquiry.",
  }),
  // Honeypot — must stay empty. Bots that fill every field trip this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
