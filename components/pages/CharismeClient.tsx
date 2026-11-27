"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function CharismeClient() {
  const { t } = useLocale();

  const charismPillars = [
    { title: t("charisme.p1.title"), description: t("charisme.p1.desc") },
    { title: t("charisme.p2.title"), description: t("charisme.p2.desc") },
    { title: t("charisme.p3.title"), description: t("charisme.p3.desc") },
    { title: t("charisme.p4.title"), description: t("charisme.p4.desc") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("charisme.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("charisme.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("charisme.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-amber-950 mb-6">
                  <Image
                    src="/images/sanctuaries/kabuga.jpg"
                    alt={t("sanctuary.kabuga.title")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                      {t("charisme.img.sub")}
                    </span>
                    <h3 className="font-serif text-lg font-bold">
                      {t("charisme.img.title")}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                    <Heart className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-zinc-700">
                      <strong className="text-zinc-900 block font-serif">{t("charisme.k1.title")}</strong>
                      {t("charisme.k1.desc")}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-zinc-700">
                      <strong className="text-zinc-900 block font-serif">{t("charisme.k2.title")}</strong>
                      {t("charisme.k2.desc")}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                    <Globe className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-zinc-700">
                      <strong className="text-zinc-900 block font-serif">{t("charisme.k3.title")}</strong>
                      {t("charisme.k3.desc")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#7a5200] text-amber-100 p-8 shadow-md">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
                  {t("charisme.motto.badge")}
                </span>
                <p className="font-serif italic text-xl text-white mb-2">
                  « Caritas Christi Urget Nos »
                </p>
                <p className="text-xs text-amber-100/80 leading-relaxed">
                  {t("charisme.motto.desc")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm space-y-6 text-sm text-zinc-700 leading-relaxed">
                <h2 className="font-serif text-2xl font-bold text-[#663300]">
                  {t("charisme.foundations.title")}
                </h2>

                <p>{t("charisme.foundations.p1")}</p>

                <div className="space-y-4 pt-2">
                  {charismPillars.map((pillar, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100/80">
                      <h3 className="font-serif text-base font-bold text-[#663300] flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#996600] flex-shrink-0" />
                        <span>{pillar.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-amber-100 pt-6">
                  <h3 className="font-serif text-lg font-bold text-zinc-900 mb-3">
                    {t("charisme.greatlakes.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {t("charisme.greatlakes.desc")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/identite/fondateur"
                  className="p-5 rounded-2xl bg-white border border-amber-100 hover:border-[#996600] shadow-sm hover:shadow transition-all group flex items-center justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase block">{t("common.see-also")}</span>
                    <span className="font-serif font-bold text-sm text-zinc-900 group-hover:text-[#996600]">{t("charisme.link.founder")}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#996600] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/identite/histoire"
                  className="p-5 rounded-2xl bg-white border border-amber-100 hover:border-[#996600] shadow-sm hover:shadow transition-all group flex items-center justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase block">{t("common.see-also")}</span>
                    <span className="font-serif font-bold text-sm text-zinc-900 group-hover:text-[#996600]">{t("charisme.link.history")}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#996600] group-hover:translate-x-1 transition-transform" />
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
