import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Ouvrages des Confrères | Thèses & Livres | SAC-PSF",
  description: "Découvrez les publications, thèses de doctorat, livres de théologie et articles scientifiques écrits par les Pères Pallottins de la Province Sainte Famille.",
};

export default function OuvragesConfreresPage() {
  const articles = siteContent.articles.filter((a) => a.category === "ouvrages-des-confreres");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Ouvrages & Écrits des Confrères"
          subtitle="Valorisation de la recherche théologique, pastorale, philosophique et historique des membres de notre Province."
          articles={articles}
          categorySlug="ouvrages-des-confreres"
        />
      </main>
      <Footer />
    </div>
  );
}
