"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink 
} from "lucide-react";
import { siteContent } from "@/data/site-content";
import { useLocale, navKeyMap, navDescKeyMap } from "@/contexts/LocaleContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { locale, setLocale, t } = useLocale();

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Helper: get translated label for a nav item by its slug
  const navLabel = (slug: string, fallback: string) => {
    const key = navKeyMap[slug];
    return key ? t(key) : fallback;
  };

  const navDesc = (slug: string, fallback?: string) => {
    const key = navDescKeyMap[slug];
    if (!key) return fallback;
    return t(key);
  };

  return (
    <header className="w-full bg-white border-b border-amber-100 shadow-sm sticky top-0 z-50">
      {/* Top Bar - Contact & Langues */}
      <div className="w-full bg-[#7a5200] text-amber-50 text-xs py-1.5 px-4 sm:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Info Contact */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{siteContent.contact.address} ({siteContent.contact.poBox})</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{siteContent.contact.phones[0]}</span>
            </span>
          </div>

          {/* Outils & Langue */}
          <div className="flex items-center gap-4">
            <a 
              href={siteContent.contact.webmailUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition-colors flex items-center gap-1 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden xs:inline">{t("header.webmail")}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>

            <div className="flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-700/50">
              <Globe className="w-3 h-3 text-amber-300" />
              <button 
                onClick={() => setLocale("fr")}
                className={`font-semibold px-1 rounded transition-colors ${locale === "fr" ? "text-amber-300 bg-amber-900/60" : "hover:text-white"}`}
              >
                FR
              </button>
              <span className="text-amber-600">|</span>
              <button 
                onClick={() => setLocale("en")}
                className={`font-semibold px-1 rounded transition-colors ${locale === "en" ? "text-amber-300 bg-amber-900/60" : "hover:text-white"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group py-1" aria-label="Accueil - Province Sainte Famille">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image 
              src={siteContent.branding.logos.headerLogo}
              alt="Logo Province Sainte Famille"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {siteContent.navigation.map((item) => (
            <div key={item.slug} className="relative group">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.slug)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#996600] hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    <span>{navLabel(item.slug, item.label)}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-72 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-amber-100/80 p-2 py-3 backdrop-blur-md">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 px-3 pb-2 border-b border-amber-50">
                        {navLabel(item.slug, item.label)}
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.slug}
                            href={subItem.path}
                            className="block px-3 py-2 rounded-lg hover:bg-amber-50 transition-colors group/item"
                          >
                            <div className="text-sm font-medium text-zinc-800 group-hover/item:text-[#996600]">
                              {navLabel(subItem.slug, subItem.label)}
                            </div>
                            {(navDesc(subItem.slug, subItem.description)) && (
                              <div className="text-xs text-zinc-500 line-clamp-1">
                                {navDesc(subItem.slug, subItem.description)}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className="px-3 py-2 text-sm font-semibold text-zinc-700 hover:text-[#996600] hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {navLabel(item.slug, item.label)}
                </Link>
              )}
            </div>
          ))}

          {/* Bouton Contact & Don */}
          <Link
            href="/contact"
            className="ml-3 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#996600] hover:bg-[#7a5200] text-white rounded-full shadow-sm hover:shadow transition-all"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Bouton Menu Mobile */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-700 hover:text-[#996600] hover:bg-amber-50 transition-colors"
            aria-label={t("header.open-menu")}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Tiroir */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-100 bg-white px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {siteContent.navigation.map((item) => (
            <div key={item.slug} className="border-b border-amber-50 pb-2">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.slug)}
                    className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-800 hover:text-[#996600]"
                  >
                    <span>{navLabel(item.slug, item.label)}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.slug ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === item.slug && (
                    <div className="pl-4 space-y-1.5 mt-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.slug}
                          href={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-zinc-600 hover:text-[#996600]"
                        >
                          {navLabel(subItem.slug, subItem.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-800 hover:text-[#996600]"
                >
                  {navLabel(item.slug, item.label)}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 text-sm font-bold uppercase tracking-wider bg-[#996600] text-white rounded-lg shadow"
            >
              {t("header.contact-province")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
