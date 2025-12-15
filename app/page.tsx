import HeroSection from "@/components/hero/hero-section";
import { Header } from "@/components/navigation/header";
import { FooterMobile } from "@/components/navigation/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full flex lg:pb-0">
        <HeroSection />
      </main>
      <FooterMobile />
    </div>
  );
}
