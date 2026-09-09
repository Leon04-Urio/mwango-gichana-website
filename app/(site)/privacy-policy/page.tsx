import { PageHeader } from "@/components/sections/PageHeader";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${firm.name} collects, uses and protects personal information.`,
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <LegalPageBody>
        <p>Last updated: [Date to be confirmed on publication]</p>

        <h2>1. Introduction</h2>
        <p>
          {firm.name} (&quot;the firm&quot;, &quot;we&quot;, &quot;us&quot;)
          respects your privacy. This Privacy Policy explains what personal
          information we collect through this website, how we use it, and
          the choices available to you. [To be finalised by the firm&apos;s
          legal team, with reference to the Kenya Data Protection Act,
          2019.]
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information you provide directly, such as your
          name, email address, phone number, and the contents of any
          enquiry submitted through our contact form. We may also collect
          limited technical information (such as device and browser type)
          through analytics tools like Google Analytics.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to enquiries,
          schedule consultations, and communicate with you about your
          matter. We do not sell your personal information.
        </p>

        <h2>4. Confidentiality</h2>
        <p>
          Submitting an enquiry through this website does not, on its own,
          create an advocate-client relationship. Please avoid sharing
          highly sensitive details until a formal engagement is confirmed.
        </p>

        <h2>5. Data Protection Rights</h2>
        <p>
          Under Kenyan data protection law, you may have rights to access,
          correct, or request deletion of your personal information. [Firm
          to confirm the process and contact point for such requests.]
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${firm.contact.email}`} className="underline">
            {firm.contact.email}
          </a>
          .
        </p>
      </LegalPageBody>
    </>
  );
}
