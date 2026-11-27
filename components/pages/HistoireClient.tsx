"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Milestone, ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function HistoireClient() {
  const { t } = useLocale();

  const milestonesDetailed = [
    { year: t("histoire.m1.year"), title: t("histoire.m1.title"), description: t("histoire.m1.desc") },
    { year: t("histoire.m2.year"), title: t("histoire.m2.title"), description: t("histoire.m2.desc") },
    { year: t("histoire.m3.year"), title: t("histoire.m3.title"), description: t("histoire.m3.desc") },
    { year: t("histoire.m4.year"), title: t("histoire.m4.title"), description: t("histoire.m4.desc") },
    { year: t("histoire.m5.year"), title: t("histoire.m5.title"), description: t("histoire.m5.desc") },
    { year: t("histoire.m6.year"), title: t("histoire.m6.title"), description: t("histoire.m6.desc") },
    { year: t("histoire.m7.year"), title: t("histoire.m7.title"), description: t("histoire.m7.desc") },
    { year: t("histoire.m8.year"), title: t("histoire.m8.title"), description: t("histoire.m8.desc") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("histoire.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("histoire.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("histoire.desc")}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-12 shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-sm text-zinc-700 leading-relaxed">
                <h2 className="font-serif text-2xl font-bold text-[#663300]">
                  {t("histoire.synth.title")}
                </h2>
                <p>{t("histoire.synth.p1")}</p>
                <p>{t("histoire.synth.p2")}</p>
                <p>{t("histoire.synth.p3")}</p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-amber-950 shadow">
                  <Image
                    src="/images/sanctuaries/ruhango.jpg"
                    alt={t("histoire.img.title")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      {t("histoire.img.sub")}
                    </span>
                    <span className="font-serif text-base font-bold">
                      {t("histoire.img.title")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="border-b border-amber-200 pb-3 mb-10 flex items-center gap-2">
              <Milestone className="w-5 h-5 text-[#996600]" />
              <h2 className="font-serif text-2xl font-bold text-zinc-900">
                {t("histoire.timeline.title")}
              </h2>
            </div>

            <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
              {milestonesDetailed.map((m, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#996600] group-hover:scale-125 transition-transform" />

                  <div className="rounded-2xl bg-white border border-amber-100 p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#996600] text-white text-xs font-bold tracking-wider">
                        {m.year}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-zinc-900">
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-amber-100/60 p-6 sm:p-8 rounded-3xl border border-amber-200">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#663300]">
                {t("histoire.cta.title")}
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                {t("histoire.cta.desc")}
              </p>
            </div>
            <Link
              href="/communautes-et-oeuvres"
              className="px-6 py-3 bg-[#996600] hover:bg-[#7a5200] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-colors flex items-center gap-2 flex-shrink-0"
            >
              <span>{t("histoire.cta.btn")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
