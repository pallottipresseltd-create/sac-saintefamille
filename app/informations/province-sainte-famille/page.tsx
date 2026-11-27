import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Province Sainte Famille | Actualités & Événements | SAC-PSF",
  description: "Actualités, vie fraternelle, retraites et assemblées de la Province Sainte Famille.",
};

export default function ProvinceSainteFamilleNewsPage() {
  const articles = siteContent.articles.filter((a) => a.category === "province-sainte-famille");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Province Sainte Famille"
          subtitle="Suivez la vie communautaire, les visites pastorales et les grands rassemblements des Pères et Frères Pallottins."
          articles={articles}
          categorySlug="province-sainte-famille"
        />
      </main>
      <Footer />
    </div>
  );
}
