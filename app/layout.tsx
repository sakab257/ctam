import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { CookieBanner } from "@/components/cookies/cookie-banner";

export const metadata: Metadata = {
  title: {
    default: "CTAM - Contrôle Technique Auto Moto | Le Blanc-Mesnil & Ivry",
    template: "%s | CTAM"
  },
  description: "Prenez rendez-vous en ligne 24h/24 pour votre contrôle technique automobile, moto, voiture sans permis. Centres agréés au Blanc-Mesnil et Ivry-sur-Seine.",
  keywords: ["contrôle technique", "CT", "automobile", "moto", "Le Blanc-Mesnil", "Ivry-sur-Seine", "CTAM", "Autosur"],
  authors: [{ name: "CTAM" }],
  creator: "SAS CT LBM",
  publisher: "CTAM",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ctamcontrole.fr",
    siteName: "CTAM - Contrôle Technique",
    title: "CTAM - Contrôle Technique Auto Moto",
    description: "Prenez rendez-vous en ligne 24h/24 pour votre contrôle technique. Centres agréés au Blanc-Mesnil et Ivry-sur-Seine.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTAM - Contrôle Technique Auto Moto",
    description: "Prenez rendez-vous en ligne 24h/24 pour votre contrôle technique automobile et moto.",
  },
  metadataBase: new URL("https://www.ctamcontrole.fr"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "I1jVgDC3x6teta_GkR7I4-dZ47YlIOw7nueaPxdSsGg",
  }
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
        {children}
        <CookieBanner />
        {/* Chargement du script principal Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Q6XBC9NRF"
          strategy="afterInteractive"
        />

        {/* Initialisation de la configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Q6XBC9NRF');
          `}
        </Script>
      </body>
    </html>
  );
}
