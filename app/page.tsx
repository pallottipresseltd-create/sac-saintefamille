import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import RectorMessage from "@/components/home/RectorMessage";
import SanctuariesSection from "@/components/home/SanctuariesSection";
import CommunitiesExplorer from "@/components/home/CommunitiesExplorer";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <RectorMessage />
        <SanctuariesSection />
        <CommunitiesExplorer />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
