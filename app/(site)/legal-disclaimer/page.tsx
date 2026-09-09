import { PageHeader } from "@/components/sections/PageHeader";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Legal Disclaimer",
  description: `Legal disclaimer for content published on the ${firm.name} website.`,
  path: "/legal-disclaimer",
  noIndex: true,
});

export default function LegalDisclaimerPage() {
  return (
    <>
      <PageHeader
        title="Legal Disclaimer"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal Disclaimer", href: "/legal-disclaimer" }]}
      />
      <LegalPageBody>
        <h2>General Information Only</h2>
        <p>
          This article provides general information and does not constitute
          legal advice. For advice regarding your specific circumstances,
          consult a qualified advocate.
        </p>
        <p>
          The content published on this website, including all Practice
          Area pages and Insights articles, is intended to provide general
          information about Kenyan law and about {firm.name}. It is not a
          substitute for individualised legal advice from a qualified
          advocate and should not be relied upon as such.
        </p>

        <h2>No Advocate-Client Relationship</h2>
        <p>
          Reading this website, including any article, does not create an
          advocate-client relationship between you and {firm.name} or any
          of its advocates. Such a relationship is formed only through an
          express written engagement.
        </p>

        <h2>Accuracy and Currency of Information</h2>
        <p>
          Kenyan law changes over time. While we aim to keep published
          content accurate as of its stated publication or update date, we
          do not guarantee that it reflects the most current legal
          position. Always confirm the current state of the law with an
          advocate before acting.
        </p>

        <h2>Editorial Review</h2>
        <p>
          Legal content on this website is intended to be reviewed and
          approved by a qualified advocate at the firm prior to
          publication. Content marked &quot;Demo Content&quot; is
          illustrative only and has not yet undergone this review.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about a specific legal matter, please{" "}
          <a href="/contact" className="underline">
            contact us
          </a>{" "}
          to arrange a consultation.
        </p>
      </LegalPageBody>
    </>
  );
}
