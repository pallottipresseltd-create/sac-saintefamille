"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";
import type { CommunityWork } from "@/data/site-content";

interface CountryCommunitiesClientProps {
  country: CommunityWork["country"];
  badgeKey: string;
  titleKey: string;
  descKey: string;
  worksLabelKey: string;
  membersCountKey: string;
  columns?: 2 | 3;
}

export default function CountryCommunitiesClient({
  country,
  badgeKey,
  titleKey,
  descKey,
  worksLabelKey,
  membersCountKey,
  columns = 2,
}: CountryCommunitiesClientProps) {
  const { t } = useLocale();
  const { communities } = useSiteContent();
  const filtered = communities.filter((c) => c.country === country);

  const gridClass =
    columns === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      : "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t(badgeKey)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t(titleKey)}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t(descKey)}
            </p>
          </div>

          <div className={gridClass}>
            {filtered.map((c) => (
              <div
                key={c.id}
                className={`rounded-3xl bg-white border border-amber-100 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  c.isProvincialMotherHouse ? "ring-2 ring-[#996600]/40" : ""
                }`}
              >
                <div>
                  <div className={`relative ${columns === 3 ? "h-48" : "h-56"} w-full rounded-2xl overflow-hidden bg-amber-950 mb-5`}>
                    <Image
                      src={c.imageUrl}
                      alt={c.name}
                      fill
                      className="object-cover"
                      sizes={columns === 3 ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-amber-200 bg-amber-950/80 px-2.5 py-0.5 rounded-full">
                      {c.diocese}
                    </span>
                    {c.isProvincialMotherHouse && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#996600] px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {t("common.siege")}
                      </span>
                    )}
                  </div>

                  <h2 className={`font-serif ${columns === 3 ? "text-lg" : "text-xl"} font-bold text-zinc-900 mb-2`}>
                    {c.name}
                  </h2>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{c.address || c.locality}</span>
                    {c.poBox && <span>• {c.poBox}</span>}
                  </div>

                  <p className={`text-xs ${columns === 3 ? "line-clamp-3" : "sm:text-sm"} text-zinc-600 leading-relaxed mb-4`}>
                    {c.description}
                  </p>

                  <div className="mb-4">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                      {t(worksLabelKey)}
                    </span>
                    <ul className="space-y-1">
                      {(columns === 3 ? c.keyWorks.slice(0, 3) : c.keyWorks).map((w, idx) => (
                        <li key={idx} className="text-xs text-zinc-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#996600] flex-shrink-0" />
                          <span className={columns === 3 ? "line-clamp-1" : ""}>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-50 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {c.members.length} {t(membersCountKey)}
                  </span>
                  <Link
                    href={`/communautes-et-oeuvres/${c.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#996600] hover:text-[#7a5200]"
                  >
                    <span>{t("common.full-sheet")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
