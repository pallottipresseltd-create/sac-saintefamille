"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { PublicationItem } from "@/data/site-content";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

interface CategoryNewsListProps {
  title: string;
  subtitle: string;
  articles: PublicationItem[];
  categorySlug?: string;
}

export default function CategoryNewsList({
  title,
  subtitle,
  articles,
  categorySlug,
}: CategoryNewsListProps) {
  const { t } = useLocale();
  const localizedContent = useSiteContent();

  const displayTitle = categorySlug ? t(`cat.${categorySlug}.title`) : title;
  const displaySubtitle = categorySlug ? t(`cat.${categorySlug}.subtitle`) : subtitle;

  const localizedArticles = articles.map(
    (art) => localizedContent.articles.find((la) => la.id === art.id) ?? art
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      {/* Retour navigation */}
      <div className="mb-8">
        <Link
          href="/informations"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#996600] hover:text-[#663300] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("newslist.back")}</span>
        </Link>
      </div>

      {/* En-tête de la catégorie */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
          {t("newslist.badge")}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
          {displayTitle}
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          {displaySubtitle}
        </p>
      </div>

      {/* Liste des articles */}
      {localizedArticles.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-amber-100 p-8">
          <p className="text-zinc-500 text-sm">
            {t("newslist.empty")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {localizedArticles.map((art) => (
            <Link
              key={art.id}
              href={`/informations/${art.slug}`}
              className="rounded-3xl bg-white border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-amber-950">
                  <Image
                    src={art.imageUrl}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-[#996600] px-2.5 py-0.5 rounded-full">
                    {art.categoryLabel}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{art.date}</span>
                  </div>

                  <h2 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-[#996600] transition-colors leading-snug mb-3 line-clamp-2">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-[#996600]">
                <span>{t("newslist.read-full")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
