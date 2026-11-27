"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Compass, Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function PastoraleVocationnelleClient() {
  const { t } = useLocale();

  const steps = [
    { step: "01", title: t("voc.s1.title"), place: t("voc.s1.place"), description: t("voc.s1.desc") },
    { step: "02", title: t("voc.s2.title"), place: t("voc.s2.place"), description: t("voc.s2.desc") },
    { step: "03", title: t("voc.s3.title"), place: t("voc.s3.place"), description: t("voc.s3.desc") },
    { step: "04", title: t("voc.s4.title"), place: t("voc.s4.place"), description: t("voc.s4.desc") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("voc.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("voc.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("voc.desc")}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-12 shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-sm text-zinc-700 leading-relaxed">
                <h2 className="font-serif text-2xl font-bold text-[#663300]">
                  {t("voc.intro.title")}
                </h2>
                <p>{t("voc.intro.p1")}</p>
                <div className="p-5 rounded-2xl bg-amber-50 border-l-4 border-[#996600] space-y-2">
                  <h3 className="font-serif font-bold text-sm text-zinc-900">
                    {t("voc.criteria.title")}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-zinc-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#996600] flex-shrink-0" />
                      <span>{t("voc.criteria.1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#996600] flex-shrink-0" />
                      <span>{t("voc.criteria.2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#996600] flex-shrink-0" />
                      <span>{t("voc.criteria.3")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#996600] flex-shrink-0" />
                      <span>{t("voc.criteria.4")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-to-br from-[#7a5200] to-[#4a2e00] text-amber-100 p-8 shadow-md space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">
                    {t("voc.contact.badge")}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {t("voc.contact.title")}
                  </h3>
                  <p className="text-xs text-amber-100/90 leading-relaxed">
                    {t("voc.contact.desc")}
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs text-amber-100">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-amber-300" />
                      <span>vocations@sac-psf.info</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>+250 788 307 271 / +250 788 381 737</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-300" />
                      <span>{t("voc.contact.address")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="border-b border-amber-200 pb-3 mb-10 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#996600]" />
              <h2 className="font-serif text-2xl font-bold text-zinc-900">
                {t("voc.steps.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => (
                <div
                  key={st.step}
                  className="rounded-2xl bg-white border border-amber-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl font-extrabold text-[#996600]/30 block mb-2">
                      {st.step}
                    </span>
                    <h3 className="font-serif text-base font-bold text-zinc-900 mb-1">
                      {st.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full inline-block mb-3">
                      {st.place}
                    </span>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#663300]">
                {t("voc.form.title")}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                {t("voc.form.sub")}
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    {t("voc.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("voc.form.name.ph")}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    {t("voc.form.age")}
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Ex: 21"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    {t("voc.form.phone")}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+250 ..."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    {t("voc.form.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.form.email.ph")}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                  {t("voc.form.parish")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("voc.form.parish.ph")}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                  {t("voc.form.msg")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("voc.form.msg.ph")}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#996600] hover:bg-[#7a5200] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t("voc.form.submit")}</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
