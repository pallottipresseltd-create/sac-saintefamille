"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function ArticleDetailClient({ slug }: { slug: string }) {
  const { t } = useLocale();
  const { articles } = useSiteContent();

  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Fil d'ariane */}
          <div className="mb-8">
            <Link
              href="/informations"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#996600] hover:text-[#663300] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("info.detail.back")}</span>
            </Link>
          </div>

          {/* Article Container */}
          <article className="rounded-3xl bg-white border border-amber-100 overflow-hidden shadow-sm p-6 sm:p-12 mb-16">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#996600] text-white text-xs font-bold uppercase tracking-wider">
                {article.categoryLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{article.date}</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#663300] tracking-tight leading-snug mb-6">
              {article.title}
            </h1>

            {/* Image principale */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-amber-950 mb-8 shadow">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>

            {/* Extrait mis en avant */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border-l-4 border-[#996600] font-serif italic text-base sm:text-lg text-zinc-800 leading-relaxed mb-8">
              « {article.excerpt} »
            </div>

            {/* Contenu complet */}
            <div className="prose prose-amber max-w-none text-zinc-700 text-sm sm:text-base leading-relaxed space-y-4">
              {article.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-8 mt-8 border-t border-amber-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mr-2">
                  {t("info.detail.themes")}
                </span>
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-amber-50 text-amber-900 border border-amber-200/60 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Articles Récents Suggérés */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#663300] mb-6">
              {t("info.detail.related")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/informations/${rel.slug}`}
                  className="rounded-2xl bg-white border border-amber-100 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-36 w-full rounded-xl overflow-hidden bg-amber-950 mb-3">
                      <Image
                        src={rel.imageUrl}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <span className="text-[10px] text-zinc-400 font-medium block mb-1">
                      {rel.date}
                    </span>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#996600] line-clamp-2 leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="pt-3 mt-3 border-t border-amber-50 flex items-center justify-between text-[11px] font-bold text-[#996600]">
                    <span>{t("common.read")}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
