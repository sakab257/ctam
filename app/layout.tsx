import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { CookieBanner } from "@/components/cookies/cookie-banner";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { jsonLdGraph, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

// Metadata par défaut. Chaque page définit son title, sa description et
// son canonical via buildMetadata() (lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Contrôle technique au Blanc-Mesnil et à Ivry-sur-Seine | CTAM",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.siteName,
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth md:snap-y md:snap-proximity">
      <body
        className={`${poppins.className} antialiased h-full overflow-y-auto`}
      >
        <JsonLd data={jsonLdGraph(organizationJsonLd(), websiteJsonLd())} />
        {children}
        <CookieBanner />
        {/* Google Analytics 4 : chargé uniquement après consentement "analytiques" */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
