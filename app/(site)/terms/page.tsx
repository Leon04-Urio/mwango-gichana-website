import { PageHeader } from "@/components/sections/PageHeader";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use governing access to the ${firm.name} website.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Use"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use", href: "/terms" }]}
      />
      <LegalPageBody>
        <p>Last updated: [Date to be confirmed on publication]</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website, you agree to be bound by these Terms
          of Use. If you do not agree, please do not use this website. [To
          be finalised by the firm&apos;s legal team.]
        </p>

        <h2>2. No Advocate-Client Relationship</h2>
        <p>
          Use of this website, including submission of the contact form,
          does not create an advocate-client relationship between you and{" "}
          {firm.name}. Such a relationship is formed only through an
          express written engagement with the firm.
        </p>

        <h2>3. Not Legal Advice</h2>
        <p>
          Content on this website, including Insights articles, is
          provided for general informational purposes only and does not
          constitute legal advice. See our{" "}
          <a href="/legal-disclaimer" className="underline">
            Legal Disclaimer
          </a>{" "}
          for further detail.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and logos,
          is the property of {firm.name} unless otherwise stated, and may
          not be reproduced without permission.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          [Firm&apos;s legal team to confirm the firm&apos;s preferred
          limitation-of-liability wording for website use.]
        </p>

        <h2>6. Governing Law</h2>
        <p>These Terms of Use are governed by the laws of Kenya.</p>
      </LegalPageBody>
    </>
  );
}
