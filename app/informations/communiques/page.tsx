import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Communiqués Officiels & Nominations | SAC-PSF",
  description: "Décrets de nomination canonique, communiqués du Recteur Provincial et du Conseil de la Province Sainte Famille.",
};

export default function CommuniquesPage() {
  const articles = siteContent.articles.filter((a) => a.category === "communiques");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Communiqués Officiels"
          subtitle="Déclarations officielles, nominations annuelles des confrères et actes de gouvernement provincial."
          articles={articles}
          categorySlug="communiques"
        />
      </main>
      <Footer />
    </div>
  );
}
