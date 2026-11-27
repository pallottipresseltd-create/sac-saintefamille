"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, CheckCircle } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function AssembleesClient() {
  const { t } = useLocale();
  const { assemblies } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("assemblees.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("assemblees.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("assemblees.desc")}
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {assemblies.map((assembly) => (
              <div
                key={assembly.id}
                className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#996600] text-white text-xs font-bold uppercase tracking-wider">
                      {assembly.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{assembly.location}</span>
                    </span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#663300] mb-2">
                  {assembly.title}
                </h2>

                <div className="p-4 rounded-xl bg-amber-50/70 border-l-4 border-[#996600] mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                    {t("assemblees.theme")}
                  </span>
                  <p className="font-serif italic text-base text-zinc-900 font-medium">
                    {assembly.theme}
                  </p>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {assembly.summary}
                </p>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3">
                    {t("assemblees.resolutions")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assembly.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
