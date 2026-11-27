"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function SanctuariesSection() {
  const { t } = useLocale();

  const sanctuaries = [
    {
      id: "kibeho",
      title: t("sanctuary.kibeho.title"),
      subtitle: t("sanctuary.kibeho.subtitle"),
      location: t("sanctuary.kibeho.location"),
      description: t("sanctuary.kibeho.desc"),
      imageUrl: "/images/sanctuaries/kibeho.jpg",
      rector: "Père François HARELIMANA, SAC",
      link: "/communautes-et-oeuvres/kibeho",
      badge: t("sanctuary.kibeho.badge"),
    },
    {
      id: "kabuga",
      title: t("sanctuary.kabuga.title"),
      subtitle: t("sanctuary.kabuga.subtitle"),
      location: t("sanctuary.kabuga.location"),
      description: t("sanctuary.kabuga.desc"),
      imageUrl: "/images/sanctuaries/kabuga.jpg",
      rector: "Père Alphonse NDAGIJIMANA, SAC",
      link: "/communautes-et-oeuvres/kabuga",
      badge: t("sanctuary.kabuga.badge"),
    },
    {
      id: "ruhango",
      title: t("sanctuary.ruhango.title"),
      subtitle: t("sanctuary.ruhango.subtitle"),
      location: t("sanctuary.ruhango.location"),
      description: t("sanctuary.ruhango.desc"),
      imageUrl: "/images/sanctuaries/ruhango.jpg",
      rector: "Père Janvier GASORE, SAC",
      link: "/communautes-et-oeuvres/ruhango",
      badge: t("sanctuary.ruhango.badge"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#7a5200] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#996600]" />
            <span>{t("sanctuaries.badge")}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#663300] tracking-tight mb-4">
            {t("sanctuaries.title")}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {t("sanctuaries.desc")}
          </p>
        </div>

        {/* Grille des 3 Sanctuaires */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sanctuaries.map((sanctuary) => (
            <div
              key={sanctuary.id}
              className="group rounded-3xl bg-white border border-amber-100/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo du Sanctuaire */}
              <div className="relative h-56 w-full overflow-hidden bg-amber-950">
                <Image
                  src={sanctuary.imageUrl}
                  alt={sanctuary.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500/90 text-zinc-950 backdrop-blur-sm">
                  {sanctuary.badge}
                </span>
              </div>

              {/* Contenu */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
                    <span className="line-clamp-1">{sanctuary.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-[#996600] transition-colors mb-1">
                    {sanctuary.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mb-3">
                    {sanctuary.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {sanctuary.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-50 flex items-center justify-between">
                  <div className="text-[11px] text-zinc-500">
                    <span className="font-medium text-zinc-700 block">{t("sanctuaries.rector")}</span>
                    <span className="line-clamp-1">{sanctuary.rector}</span>
                  </div>
                  <Link
                    href={sanctuary.link}
                    className="p-2 rounded-full bg-amber-50 group-hover:bg-[#996600] text-[#996600] group-hover:text-white transition-colors flex-shrink-0"
                    aria-label={`${t("sanctuaries.learnmore")} ${sanctuary.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
