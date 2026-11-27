"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, FileText } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function LatestNews() {
  const { articles } = useSiteContent();
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#7a5200] text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-[#996600]" />
              <span>{t("news.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#663300] tracking-tight">
              {t("news.title")}
            </h2>
          </div>

          <Link
            href="/informations"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#996600] hover:text-[#663300] transition-colors"
          >
            <span>{t("news.all")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grille Articles Principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article À La Une (Grand) */}
          <div className="lg:col-span-7">
            {articles.slice(0, 1).map((article) => (
              <Link
                key={article.id}
                href={`/informations/${article.slug}`}
                className="group rounded-3xl bg-amber-50/40 border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-amber-950">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#996600] text-white">
                    {article.categoryLabel}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="text-amber-800 font-medium">{t("news.featured")}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-zinc-900 group-hover:text-[#996600] transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags?.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#996600] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t("news.read")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Liste des autres articles récents */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {articles.slice(1, 4).map((article) => (
              <Link
                key={article.id}
                href={`/informations/${article.slug}`}
                className="group rounded-2xl bg-white border border-amber-100 p-4 shadow-sm hover:shadow-md transition-all flex gap-4 items-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-amber-950">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="112px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-amber-800 font-medium mb-1">
                    <span>{article.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-zinc-400">{article.date}</span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-zinc-900 group-hover:text-[#996600] transition-colors line-clamp-2 leading-snug mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}

            {/* Encadré Nominations Officielles 2026-2027 */}
            <div className="rounded-2xl bg-gradient-to-r from-[#996600] to-[#7a5200] p-5 text-white shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-950/60 text-amber-200 px-2 py-0.5 rounded">
                  {t("news.nominations.badge")}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base mt-1 text-white">
                  {t("news.nominations.title")}
                </h4>
                <p className="text-xs text-amber-100/80 mt-0.5">
                  {t("news.nominations.desc")}
                </p>
              </div>
              <Link
                href="/informations/communiques"
                className="px-3 py-2 rounded-xl bg-white text-[#7a5200] text-xs font-bold flex-shrink-0 hover:bg-amber-50 transition-colors shadow"
              >
                {t("news.nominations.cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
