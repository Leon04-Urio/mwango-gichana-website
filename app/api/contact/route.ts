import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { firm } from "@/lib/content/firm";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  // Honeypot tripped — silently pretend success so bots don't learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, practiceArea, message, preferredContact } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || firm.contact.email;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — contact form submission was not sent. See README.md setup instructions."
    );
    return NextResponse.json(
      { error: "The enquiry form is not fully configured yet. Please call or email us directly." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Website Enquiries <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Practice Area: ${practiceArea || "Not specified"}`,
        `Preferred Contact Method: ${preferredContact}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
