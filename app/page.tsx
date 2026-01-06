import HeroSection from "@/components/hero/hero-section";
import { Header } from "@/components/navigation/header";
import { FooterMobile, Footer } from "@/components/navigation/footer";
import { Services } from "@/components/section/services/services";
import Tarifs from "@/components/section/tarifs/tarifs";
import Avis from "@/components/section/avis/avis";
import { CenterProvider } from "@/contexts/center-context";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
