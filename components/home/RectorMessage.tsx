"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { useLocale } from "@/contexts/LocaleContext";

export default function RectorMessage() {
  const { rectorMessage } = siteContent;
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/40 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Colonne Portrait & Identifiant */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#7a5200] to-[#4a2e00] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Filigrane décoratif */}
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <Quote className="w-64 h-64 text-amber-300" />
              </div>

              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-600/40 mb-6">
                  {t("rector.direction")}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  {t("rector.title")}
                </h3>
                <p className="text-amber-200/90 text-sm italic font-serif">
                  {t("rector.subtitle")}
                </p>
              </div>

              {/* Portrait */}
              <div className="my-8 flex flex-col items-center sm:items-start">
                <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30">
                  <Image
                    src={rectorMessage.portraitUrl}
                    alt={rectorMessage.author}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 176px, 208px"
                  />
                </div>
                <div className="mt-4 text-center sm:text-left">
                  <div className="text-lg font-bold text-white tracking-wide">
                    {rectorMessage.author}
                  </div>
                  <div className="text-xs text-amber-300 uppercase tracking-widest font-medium">
                    {t("rector.role")}
                  </div>
                </div>
              </div>

              {/* Signature / Devise */}
              <div className="border-t border-amber-700/50 pt-4 text-xs text-amber-200/80">
                {t("rector.maison")}
              </div>
            </div>

            {/* Colonne Contenu du Message */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-4 text-zinc-700 leading-relaxed text-sm sm:text-base">
                <p className="font-semibold text-[#663300] text-base">
                  {t("rector.msg.0")}
                </p>
                <p>
                  {t("rector.msg.1")}
                </p>
                <p>
                  {t("rector.msg.2")}
                </p>

                {/* Bloc Citation Fondateur */}
                <div className="my-6 p-5 rounded-2xl bg-amber-50/80 border-l-4 border-[#996600] text-zinc-800 italic text-sm">
                  <p className="mb-2 font-serif text-[#663300]">
                    {t("rector.quote")}
                  </p>
                  <span className="block text-xs font-semibold text-amber-800 not-italic">
                    — {t("rector.quote.source")}
                  </span>
                </div>

                <p>
                  {t("rector.msg.3")}
                </p>
                <p className="font-medium text-zinc-800">
                  {t("rector.msg.4")}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                  <span>{t("rector.sac")}</span>
                  <span>•</span>
                  <span>{t("rector.province")}</span>
                </div>
                <Link
                  href="/direction-provinciale/conseil-provincial"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#996600] hover:text-[#663300] uppercase tracking-wider group"
                >
                  <span>{t("rector.government")}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
