"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Briefcase, CheckCircle } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function CommissionsClient() {
  const { t } = useLocale();
  const { commissionsList } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("commissions.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("commissions.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("commissions.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {commissionsList.map((com) => (
              <div
                key={com.id}
                className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#996600] flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <h2 className="font-serif text-xl font-bold text-[#663300] mb-2">
                    {com.name}
                  </h2>

                  <div className="text-xs font-medium text-amber-900 bg-amber-50 px-3 py-1 rounded-lg w-fit mb-4">
                    {t("commissions.president")} <strong>{com.president}</strong>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {com.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      {t("commissions.members")}
                    </h3>
                    <ul className="space-y-1 text-xs text-zinc-600">
                      {com.members.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#996600]">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                    {t("commissions.responsibilities")}
                  </h3>
                  <div className="space-y-1.5">
                    {com.responsibilities.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#996600] flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
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
