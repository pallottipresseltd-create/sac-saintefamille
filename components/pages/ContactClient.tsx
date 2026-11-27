"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function ContactClient() {
  const { t } = useLocale();
  const { contact } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* En-tête */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("contact.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("contact.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Colonne Cartes d'Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Carte Siège Principal */}
              <div className="rounded-3xl bg-white border border-amber-100 p-8 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2.5">
                  <span className="p-2 bg-amber-100 rounded-xl text-[#996600]">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>{t("contact.hq.title")}</span>
                </h2>

                <div className="space-y-4 text-sm text-zinc-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-800 block">{t("contact.address.label")}</strong>
                      <span>{t("contact.address.line1")}</span><br />
                      <span>{t("contact.address.line2")}</span><br />
                      <span>{contact.country}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-800 block">{t("contact.pobox.label")}</strong>
                      <span>{contact.poBox}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-800 block">{t("contact.phones.label")}</strong>
                      <span>{contact.phones[0]}</span><br />
                      <span>{contact.phones[1]}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-800 block">{t("contact.hours.label")}</strong>
                      <span>{t("contact.hours.weekdays")}</span><br />
                      <span>{t("contact.hours.saturday")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Services Provinciaux */}
              <div className="rounded-3xl bg-[#7a5200] text-amber-50 p-8 shadow-md">
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {t("contact.services.title")}
                </h3>
                <ul className="space-y-2 text-xs text-amber-100/90">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">•</span>
                    <span>{t("contact.services.1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">•</span>
                    <span>{t("contact.services.2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">•</span>
                    <span>{t("contact.services.3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">•</span>
                    <span>{t("contact.services.4")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Formulaire de Contact */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#663300] mb-2">
                  {t("contact.form.title")}
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm mb-8">
                  {t("contact.form.subtitle")}
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("contact.form.name.ph")}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t("contact.form.email.ph")}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        placeholder="+250 78..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                        {t("contact.form.subject")}
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600] focus:border-transparent bg-white">
                        <option>{t("contact.form.opt1")}</option>
                        <option>{t("contact.form.opt2")}</option>
                        <option>{t("contact.form.opt3")}</option>
                        <option>{t("contact.form.opt4")}</option>
                        <option>{t("contact.form.opt5")}</option>
                        <option>{t("contact.form.opt6")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder={t("contact.form.message.ph")}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#996600] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#996600] hover:bg-[#7a5200] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("contact.form.submit")}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
