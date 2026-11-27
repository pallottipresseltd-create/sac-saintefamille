"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommunitiesExplorer from "@/components/home/CommunitiesExplorer";
import SanctuariesSection from "@/components/home/SanctuariesSection";
import { useLocale } from "@/contexts/LocaleContext";

export default function CommunautesClient() {
  const { t } = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-[#7a5200] text-white py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("comm.main.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {t("comm.main.title")}
            </h1>
            <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl mx-auto">
              {t("comm.main.desc")}
            </p>
          </div>
        </div>

        <CommunitiesExplorer />
        <SanctuariesSection />
      </main>
      <Footer />
    </div>
  );
}
