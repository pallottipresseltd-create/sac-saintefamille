import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Union de l'Apostolat Catholique (UAC) | SAC-PSF",
  description: "Activités, formations et rassemblements de l'Union de l'Apostolat Catholique au Rwanda, en RDC et en Belgique.",
};

export default function UACPage() {
  const articles = siteContent.articles.filter((a) => a.category === "union-de-lapostolat-catholique");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Union de l'Apostolat Catholique"
          subtitle="Mobiliser tous les fidèles laïcs, religieux et clercs dans l'esprit de saint Vincent Pallotti pour raviver la foi et rallumer la charité."
          articles={articles}
          categorySlug="union-de-lapostolat-catholique"
        />
      </main>
      <Footer />
    </div>
  );
}
