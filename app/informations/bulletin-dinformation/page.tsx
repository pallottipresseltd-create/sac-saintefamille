import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryNewsList from "@/components/news/CategoryNewsList";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Bulletins d'Information | Info-PSF | SAC-PSF",
  description: "Téléchargez et consultez les éditions régulières d'Info-PSF, le bulletin d'information officiel de la Province Sainte Famille.",
};

export default function BulletinInformationPage() {
  const articles = siteContent.articles.filter((a) => a.category === "bulletin-dinformation");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20">
        <CategoryNewsList
          title="Bulletins d'Information (Info-PSF)"
          subtitle="Publications trimestrielles et mensuelles informant sur la vie apostolique, pastorale et caritative de notre Province."
          articles={articles}
          categorySlug="bulletin-dinformation"
        />
      </main>
      <Footer />
    </div>
  );
}
