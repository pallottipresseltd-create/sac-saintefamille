import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Nouvelles du Généralat | Rome | SAC-PSF",
  description: "Actualités, circulaires et communications de la Curie Générale de la Société de l'Apostolat Catholique à Rome.",
};

export default function GeneralatPage() {
  const articles = siteContent.articles.filter((a) => a.category === "generalat");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Généralat (Rome)"
          subtitle="Les échos de la Curie Générale de la Société de l'Apostolat Catholique (Piazza San Vincenzo Pallotti, Rome) et de la famille pallottine mondiale."
          articles={articles}
          categorySlug="generalat"
        />
      </main>
      <Footer />
    </div>
  );
}
