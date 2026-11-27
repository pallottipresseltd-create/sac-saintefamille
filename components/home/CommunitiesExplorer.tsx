"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function CommunitiesExplorer() {
  const [selectedCountry, setSelectedCountry] = useState<
    "Rwanda" | "R.D. Congo" | "Belgique" | "Mission en Europe et Monde"
  >("Rwanda");
  const { t } = useLocale();
  const content = useSiteContent();

  const countries: Array<"Rwanda" | "R.D. Congo" | "Belgique" | "Mission en Europe et Monde"> = [
    "Rwanda",
    "R.D. Congo",
    "Belgique",
    "Mission en Europe et Monde",
  ];

  const countryLabelMap: Record<string, string> = {
    "Rwanda": t("communities.country.rwanda"),
    "R.D. Congo": t("communities.country.rdc"),
    "Belgique": t("communities.country.belgique"),
    "Mission en Europe et Monde": t("communities.country.mission"),
  };

  const filteredCommunities = content.communities.filter(
    (c) => c.country === selectedCountry
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/50 to-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#7a5200] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#996600]" />
              <span>{t("communities.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#663300] tracking-tight">
              {t("communities.title")}
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              {t("communities.desc")}
            </p>
          </div>

          {/* Onglets des Pays */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-amber-100/60 rounded-2xl border border-amber-200/50">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCountry === country
                    ? "bg-[#996600] text-white shadow-md shadow-amber-900/10"
                    : "text-zinc-700 hover:text-[#996600] hover:bg-white/60"
                }`}
              >
                {countryLabelMap[country]}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des Communautés du Pays Sélectionné */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCommunities.map((community) => (
            <div
              key={community.id}
              className={`rounded-2xl bg-white border border-amber-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                community.isProvincialMotherHouse ? "ring-2 ring-[#996600]/40" : ""
              }`}
            >
              <div>
                {/* Badge Siège ou Diocèse */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    {community.diocese}
                  </span>
                  {community.isProvincialMotherHouse && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#996600] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {t("communities.siege")}
                    </span>
                  )}
                </div>

                <Link href={`/communautes-et-oeuvres/${community.slug}`} className="block">
                  <h3 className="font-serif text-lg font-bold text-zinc-900 mb-1.5 hover:text-[#996600] transition-colors">
                    {community.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>{community.locality}</span>
                  {community.poBox && <span>• {community.poBox}</span>}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 mb-4">
                  {community.description}
                </p>

                {/* Œuvres Principales */}
                <div className="mb-4">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                    {t("communities.oeuvres")}
                  </span>
                  <ul className="space-y-1">
                    {community.keyWorks.slice(0, 3).map((work, idx) => (
                      <li key={idx} className="text-xs text-zinc-600 flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span className="line-clamp-1">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Responsable & Membres */}
              <div className="pt-4 border-t border-amber-50">
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="text-zinc-500">
                    <span className="text-zinc-700 font-medium block">
                      {community.members[0]?.role.split(",")[0] || t("communities.responsable")} :
                    </span>
                    <span className="font-bold text-[#663300] line-clamp-1">
                      {community.members[0]?.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-800 bg-amber-50 px-2 py-1 rounded-md font-medium">
                    {community.members.length} {t("communities.confreres")}
                  </span>
                </div>
                <Link
                  href={`/communautes-et-oeuvres/${community.slug}`}
                  className="w-full py-2 bg-amber-50 hover:bg-[#996600] text-amber-900 hover:text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t("communities.voir")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
