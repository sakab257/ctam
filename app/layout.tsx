import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { CookieBanner } from "@/components/cookies/cookie-banner";

export const metadata: Metadata = {
  title: "CTAM - Contrôle Technique Auto Moto",
  description: "Prenez rendez-vous en ligne 24h/24, d'un simple clic dans le centre de contrôle technique automobile, moto, voiture sans permis CTAM Le Blanc-Mesnil.",
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
      </body>
    </html>
  );
}
