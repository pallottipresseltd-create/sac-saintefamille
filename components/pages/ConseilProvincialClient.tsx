"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Shield, Award, CheckCircle } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function ConseilProvincialClient() {
  const { t } = useLocale();
  const { governance } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("conseil.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("conseil.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("conseil.desc")}
            </p>
          </div>

          <div className="mb-20">
            <div className="border-b border-amber-200 pb-3 mb-8 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#996600]" />
              <h2 className="font-serif text-2xl font-bold text-zinc-900">
                {t("conseil.members.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governance.provincialCouncil.map((member) => (
                <div
                  key={member.id}
                  className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-amber-950 mb-5">
                      <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#996600] text-white">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-zinc-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">
                      {member.department}
                    </p>
                    {member.bio && (
                      <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-amber-50 flex items-center gap-2 text-xs text-amber-900 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-[#996600]" />
                    <span>{t("common.sac")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#663300] mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#996600]" />
                <span>{t("conseil.admin.title")}</span>
              </h3>
              <div className="space-y-4">
                {governance.administration.map((member) => (
                  <div key={member.id} className="p-4 rounded-xl bg-amber-50/50 border border-amber-100/60">
                    <div className="font-serif font-bold text-zinc-900 text-sm">
                      {member.name}
                    </div>
                    <div className="text-xs font-semibold text-[#996600]">
                      {member.role}
                    </div>
                    {member.bio && (
                      <p className="text-xs text-zinc-600 mt-1">
                        {member.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#663300] mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#996600]" />
                <span>{t("conseil.sec.title")}</span>
              </h3>
              <div className="space-y-4">
                {governance.secretariat.map((member) => (
                  <div key={member.id} className="p-4 rounded-xl bg-amber-50/50 border border-amber-100/60">
                    <div className="font-serif font-bold text-zinc-900 text-sm">
                      {member.name}
                    </div>
                    <div className="text-xs font-semibold text-[#996600]">
                      {member.role}
                    </div>
                    {member.bio && (
                      <p className="text-xs text-zinc-600 mt-1">
                        {member.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
