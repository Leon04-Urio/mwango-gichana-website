import type { Metadata } from "next";
import { Cormorant_Garamond, Alex_Brush, EB_Garamond } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${firm.name} | ${firm.tagline}`,
    template: `%s | ${firm.name}`,
  },
  description: firm.descriptionShort,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${alexBrush.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
