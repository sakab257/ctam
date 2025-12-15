import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CCTAM - Contrôle Technique Auto Moto",
  description: "Prenez rendez-vous en ligne 24h/24, d'un simple clic dans le centre de contrôle technique automobile, moto, voiture sans permis CCTAM Le Blanc-Mesnil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${poppins.className} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
