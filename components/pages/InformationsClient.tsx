"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LatestNews from "@/components/home/LatestNews";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function InformationsClient() {
  const { t } = useLocale();
  const { popularArticles } = useSiteContent();

  const categories = [
    { key: "nav.province-sainte-famille", path: "/informations/province-sainte-famille" },
    { key: "nav.bulletin-dinformation", path: "/informations/bulletin-dinformation" },
    { key: "nav.generalat", path: "/informations/generalat" },
    { key: "nav.union-de-lapostolat-catholique", path: "/informations/union-de-lapostolat-catholique" },
    { key: "nav.communiques", path: "/informations/communiques" },
    { key: "nav.ouvrages-des-confreres", path: "/informations/ouvrages-des-confreres" },
    { key: "nav.autres", path: "/informations/autres" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-[#7a5200] text-white py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("info.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {t("info.title")}
            </h1>
            <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl mx-auto">
              {t("info.desc")}
            </p>
          </div>
        </div>

        {/* Barre des Rubriques */}
        <section className="bg-amber-100/40 border-b border-amber-200/60 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.path}
                  className="px-4 py-2 bg-white hover:bg-[#996600] text-zinc-700 hover:text-white rounded-full text-xs font-bold border border-amber-200/80 shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span>{t(cat.key)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LatestNews />

        {/* Section Archives & Articles Populaires */}
        <section className="py-16 bg-amber-50/40 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h3 className="font-serif text-2xl font-bold text-[#663300] mb-8">
              {t("info.popular.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-amber-100 p-5 shadow-sm hover:shadow-md transition-all flex gap-4 items-center group"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-amber-950 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block">
                      {item.date}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#996600] line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
