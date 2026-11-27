"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Users, BookOpen, ShieldCheck, ArrowLeft } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

const countryKeyMap: Record<string, string> = {
  "Rwanda": "communities.country.rwanda",
  "R.D. Congo": "communities.country.rdc",
  "Belgique": "communities.country.belgique",
  "Mission en Europe et Monde": "communities.country.mission",
};

export default function CommunityDetailClient({ slug }: { slug: string }) {
  const { t } = useLocale();
  const { communities } = useSiteContent();
  const community = communities.find((c) => c.slug === slug);

  if (!community) return null;

  const countryLabel = countryKeyMap[community.country]
    ? t(countryKeyMap[community.country])
    : community.country;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-8">
            <Link
              href="/communautes-et-oeuvres"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#996600] hover:text-[#663300] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("comm.detail.back")}</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-12 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {countryLabel}
                  </span>
                  <span className="text-xs font-semibold text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">
                    {community.diocese}
                  </span>
                  {community.isProvincialMotherHouse && (
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#996600] px-3 py-1 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t("common.siege")}
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#663300] tracking-tight">
                  {community.name}
                </h1>

                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{community.address || community.locality}</span>
                  {community.poBox && <span>({community.poBox})</span>}
                </div>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed pt-2">
                  {community.description}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-amber-950 shadow-lg">
                  <Image
                    src={community.imageUrl}
                    alt={community.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#663300] mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#996600]" />
                  <span>{t("comm.detail.works")}</span>
                </h2>
                <ul className="space-y-3">
                  {community.keyWorks.map((work, idx) => (
                    <li key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-100/60 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#996600] mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-800">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#663300] mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#996600]" />
                  <span>{t("comm.detail.members")}</span>
                </h2>
                <div className="space-y-3">
                  {community.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-amber-200 hover:bg-amber-50/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-serif font-bold text-sm sm:text-base text-zinc-900">
                          {member.name}
                        </div>
                        <div className="text-xs text-[#996600] font-medium mt-0.5">
                          {member.role}
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 bg-white px-2.5 py-1 rounded-full border border-zinc-200 self-start sm:self-center">
                        {t("common.sac-pallottin")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {community.gallery && community.gallery.length > 0 && (
            <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm mb-16">
              <h3 className="font-serif text-xl font-bold text-[#663300] mb-6">
                {t("comm.detail.gallery")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {community.gallery.map((imgUrl, i) => (
                  <div key={i} className="relative h-56 rounded-2xl overflow-hidden bg-amber-950 shadow-sm">
                    <Image
                      src={imgUrl}
                      alt={`${community.name} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
