"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Compass, History, Sparkles, ArrowRight } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function IdentiteClient() {
  const { t } = useLocale();
  const { identity } = useSiteContent();

  const sections = [
    {
      title: t("identite.sec1.title"),
      subtitle: t("identite.sec1.sub"),
      path: "/identite/fondateur",
      icon: Sparkles,
      image: identity.founder.imageUrl,
      description: t("identite.sec1.desc"),
    },
    {
      title: t("identite.sec2.title"),
      subtitle: t("identite.sec2.sub"),
      path: "/identite/charisme",
      icon: Heart,
      image: "/images/sanctuaries/kabuga.jpg",
      description: t("identite.sec2.desc"),
    },
    {
      title: t("identite.sec3.title"),
      subtitle: t("identite.sec3.sub"),
      path: "/identite/histoire",
      icon: History,
      image: "/images/slides/keshero.jpg",
      description: t("identite.sec3.desc"),
    },
    {
      title: t("identite.sec4.title"),
      subtitle: t("identite.sec4.sub"),
      path: "/identite/pastorale-vocationnelle",
      icon: Compass,
      image: "/images/sanctuaries/ruhango.jpg",
      description: t("identite.sec4.desc"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("identite.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("identite.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("identite.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Link
                  key={idx}
                  href={section.path}
                  className="group rounded-3xl bg-white border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-amber-950">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/90 backdrop-blur-md text-[#996600]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                        {section.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-white leading-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <div className="pt-4 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-[#996600] group-hover:text-[#663300]">
                      <span>{t("common.discover-section")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#7a5200] to-[#4a2e00] text-amber-50 p-8 sm:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-full inline-block">
                {t("identite.quote.badge")}
              </span>
              <p className="font-serif italic text-2xl sm:text-3xl text-amber-100 leading-snug">
                {t("identite.quote.text")}
              </p>
              <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider pt-2">
                {t("identite.quote.author")}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
