import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Réflexions & Vie Chrétienne | Méditations | SAC-PSF",
  description: "Méditations spirituelles, homélies, témoignages et réflexions pour nourrir la vie de foi au quotidien.",
};

export default function AutresReflexionsPage() {
  const articles = siteContent.articles.filter((a) => a.category === "reflexions-et-vie");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Réflexions & Vie Chrétienne"
          subtitle="Textes spirituels, méditations bibliques et éclairages pallottins pour approfondir notre amour pour Dieu et pour le prochain."
          articles={articles}
          categorySlug="autres"
        />
      </main>
      <Footer />
    </div>
  );
}
