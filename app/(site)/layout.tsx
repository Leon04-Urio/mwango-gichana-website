import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      <OrganizationJsonLd />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileActionBar />
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
