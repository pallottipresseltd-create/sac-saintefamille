"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, UserCheck } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function SecretariatsClient() {
  const { t } = useLocale();
  const { secretariatsList } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("secretariats.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("secretariats.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("secretariats.desc")}
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {secretariatsList.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-[#7a5200] text-xs font-bold uppercase tracking-wider">
                    {sec.code}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#663300] mb-2">
                  {sec.name}
                </h2>

                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 mb-4 p-3 rounded-xl bg-amber-50/60 w-fit">
                  <UserCheck className="w-4 h-4 text-[#996600]" />
                  <span>{t("secretariats.leader")} <strong>{sec.leader}</strong> ({sec.leaderRole})</span>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {sec.description}
                </p>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3">
                    {t("secretariats.missions")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sec.missions.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#996600] flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
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
