import type { Metadata } from "next";
import HeroSection from "@/components/hero/hero-section";
import { Header } from "@/components/navigation/header";
import { FooterMobile, Footer } from "@/components/navigation/footer";
import { Services } from "@/components/section/services/services";
import Tarifs from "@/components/section/tarifs/tarifs";
import Avis from "@/components/section/avis/avis";
import { CenterProvider } from "@/contexts/center-context";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, centerJsonLd, jsonLdGraph } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contrôle technique au Blanc-Mesnil et à Ivry-sur-Seine | CTAM",
  absoluteTitle: true,
  description:
    "Centres de contrôle technique agréés AUTOSUR au Blanc-Mesnil (93) et à Ivry-sur-Seine (94). Auto, moto, utilitaire : RDV en ligne 24h/24 ou sans rendez-vous.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLdGraph(centerJsonLd("lbm"), centerJsonLd("ivry"))} />
      <Header />
      <main className="flex-1 w-full flex-col">
        <HeroSection />
        <Services />
        <CenterProvider>
          <Tarifs />
          <Avis />
        </CenterProvider>
      </main>
      <Footer />
      <FooterMobile />
    </div>
  );
}
