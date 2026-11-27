"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Award, Users, BookOpen, Layers, Briefcase, ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function DirectionProvincialeClient() {
  const { t } = useLocale();

  const sections = [
    {
      title: t("dir.s1.title"),
      subtitle: t("dir.s1.sub"),
      path: "/direction-provinciale/conseil-provincial",
      icon: Shield,
      description: t("dir.s1.desc"),
    },
    {
      title: t("dir.s2.title"),
      subtitle: t("dir.s2.sub"),
      path: "/direction-provinciale/administration-provinciale",
      icon: Award,
      description: t("dir.s2.desc"),
    },
    {
      title: t("dir.s3.title"),
      subtitle: t("dir.s3.sub"),
      path: "/direction-provinciale/secretariat-provincial",
      icon: Users,
      description: t("dir.s3.desc"),
    },
    {
      title: t("dir.s4.title"),
      subtitle: t("dir.s4.sub"),
      path: "/direction-provinciale/assemblees",
      icon: BookOpen,
      description: t("dir.s4.desc"),
    },
    {
      title: t("dir.s5.title"),
      subtitle: t("dir.s5.sub"),
      path: "/direction-provinciale/secretariats",
      icon: Layers,
      description: t("dir.s5.desc"),
    },
    {
      title: t("dir.s6.title"),
      subtitle: t("dir.s6.sub"),
      path: "/direction-provinciale/commissions",
      icon: Briefcase,
      description: t("dir.s6.desc"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("dir.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("dir.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("dir.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Link
                  key={idx}
                  href={section.path}
                  className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-[#996600] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      {section.subtitle}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-[#996600] transition-colors mb-3">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-[#996600]">
                    <span>{t("common.consult")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
