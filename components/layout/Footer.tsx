"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { useLocale } from "@/contexts/LocaleContext";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[#1f1609] text-amber-100/90 border-t-4 border-[#996600]">
      {/* Section Principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 : Présentation & Armoiries */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={siteContent.branding.logos.emblemLogo}
                  alt="Armoiries SAC"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-base leading-tight">
                  {t("footer.sac-psf")}
                </h3>
                <p className="text-xs text-amber-300 font-medium tracking-wide">
                  {t("footer.societas")}
                </p>
              </div>
            </div>

            <p className="text-xs text-amber-100/70 leading-relaxed italic border-l-2 border-amber-600/50 pl-3">
              « {t("footer.tagline")} »
            </p>

            <p className="text-xs text-amber-100/80 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4 pb-1 border-b border-amber-800/60">
              {t("footer.rubriques")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/identite/fondateur" className="hover:text-white transition-colors">
                  {t("footer.fondateur")}
                </Link>
              </li>
              <li>
                <Link href="/identite/charisme" className="hover:text-white transition-colors">
                  {t("footer.charisme")}
                </Link>
              </li>
              <li>
                <Link href="/direction-provinciale/conseil-provincial" className="hover:text-white transition-colors">
                  {t("footer.gouvernement")}
                </Link>
              </li>
              <li>
                <Link href="/communautes-et-oeuvres/rwanda" className="hover:text-white transition-colors">
                  {t("footer.communautes-rw")}
                </Link>
              </li>
              <li>
                <Link href="/communautes-et-oeuvres/r-d-congo" className="hover:text-white transition-colors">
                  {t("footer.communautes-rdc")}
                </Link>
              </li>
              <li>
                <Link href="/communautes-et-oeuvres/belgique" className="hover:text-white transition-colors">
                  {t("footer.procure")}
                </Link>
              </li>
              <li>
                <Link href="/informations/bulletin-dinformation" className="hover:text-white transition-colors">
                  {t("footer.bulletins")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Grands Sanctuaires */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4 pb-1 border-b border-amber-800/60">
              {t("footer.sanctuaires")}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="group">
                <Link href="/communautes-et-oeuvres/kibeho" className="block">
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {t("footer.kibeho")}
                  </span>
                  <span className="block text-[11px] text-amber-200/70">
                    {t("footer.kibeho.desc")}
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/communautes-et-oeuvres/kabuga" className="block">
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {t("footer.kabuga")}
                  </span>
                  <span className="block text-[11px] text-amber-200/70">
                    {t("footer.kabuga.desc")}
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/communautes-et-oeuvres/ruhango" className="block">
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {t("footer.ruhango")}
                  </span>
                  <span className="block text-[11px] text-amber-200/70">
                    {t("footer.ruhango.desc")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées Officielles */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4 pb-1 border-b border-amber-800/60">
              {t("footer.siege")}
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                {t("footer.maison")}<br />
                {siteContent.contact.address}<br />
                {siteContent.contact.poBox}<br />
                {siteContent.contact.country}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span>{siteContent.contact.phones[0]}</span>
                <span>{siteContent.contact.phones[1]}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href={`mailto:${siteContent.contact.email}`} className="hover:text-white transition-colors underline">
                {siteContent.contact.email}
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={siteContent.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-amber-900/60 hover:bg-amber-700 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook SAC-PSF"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteContent.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-amber-900/60 hover:bg-amber-700 flex items-center justify-center text-white transition-colors"
                aria-label="Twitter SAC-PSF"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteContent.contact.webmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-[#996600] hover:bg-[#7a5200] text-[11px] font-bold text-white transition-colors"
              >
                {t("footer.webmail")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre Inférieure Copyright */}
      <div className="border-t border-amber-900/60 bg-[#140e05] py-4 px-4 sm:px-8 text-center text-[11px] text-amber-300/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>{t("footer.copyright")}</p>
          <p className="flex items-center gap-1">
            <span>{t("footer.motto")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
