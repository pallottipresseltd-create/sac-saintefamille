"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function FondateurClient() {
  const { t } = useLocale();
  const { identity } = useSiteContent();
  const { founder } = identity;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("fondateur.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {founder.name}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("fondateur.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-amber-950 mb-6">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-amber-200 bg-amber-950/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {t("fondateur.feast")} {founder.feastDay}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-zinc-700">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50">
                    <span className="font-semibold text-zinc-500">{t("fondateur.birth")}</span>
                    <span className="font-bold text-zinc-900">{founder.birth}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50">
                    <span className="font-semibold text-zinc-500">{t("fondateur.death")}</span>
                    <span className="font-bold text-zinc-900">{founder.death}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50">
                    <span className="font-semibold text-zinc-500">{t("fondateur.canonization")}</span>
                    <span className="font-bold text-zinc-900 text-right">{founder.canonization}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#7a5200] to-[#4a2e00] text-amber-100 p-8 shadow-md">
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {t("fondateur.motto.title")}
                </h3>
                <p className="font-serif italic text-xl text-amber-300 mb-2">
                  « Caritas Christi Urget Nos »
                </p>
                <p className="text-xs text-amber-200/80">
                  {t("fondateur.motto.desc")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed">
                <h2 className="font-serif text-2xl font-bold text-[#663300] mb-4">
                  {t("fondateur.bio.title")}
                </h2>
                <p>{t("fondateur.bio.p1")}</p>
                <p>{t("fondateur.bio.p2")}</p>

                <div className="my-6 p-6 rounded-2xl bg-amber-50/70 border-l-4 border-[#996600]">
                  <h3 className="font-serif font-bold text-base text-[#663300] mb-3">
                    {t("fondateur.pillars.title")}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800">
                    {founder.keyPrinciples.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="italic">{t("fondateur.bio.p3")}</p>
              </div>

              <div className="flex justify-between items-center bg-amber-100/50 p-6 rounded-2xl border border-amber-200">
                <div>
                  <h4 className="font-serif font-bold text-zinc-900 text-sm">
                    {t("fondateur.cta.title")}
                  </h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    {t("fondateur.cta.desc")}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-[#996600] hover:bg-[#7a5200] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <span>{t("fondateur.cta.btn")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
