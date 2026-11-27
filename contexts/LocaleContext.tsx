"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { pageTranslations } from "@/data/page-translations";
import { getLocalizedSiteContent } from "@/data/site-content-en";
import type { SiteContentData } from "@/data/site-content";

export type Locale = "fr" | "en";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useSiteContent(): SiteContentData {
  const { locale } = useLocale();
  return getLocalizedSiteContent(locale);
}

// ---------------------------------------------------------------------------
// Translations dictionary – FR is the base language, EN the translation
// ---------------------------------------------------------------------------
const translations: Record<string, Record<Locale, string>> = {
  // ── Navigation ──────────────────────────────────────────────
  "nav.accueil": { fr: "Accueil", en: "Home" },
  "nav.identite": { fr: "Identité", en: "Identity" },
  "nav.fondateur": { fr: "Fondateur", en: "Founder" },
  "nav.fondateur.desc": { fr: "Saint Vincent Pallotti et sa vie d'apôtre", en: "Saint Vincent Pallotti and his apostolic life" },
  "nav.charisme": { fr: "Charisme", en: "Charism" },
  "nav.charisme.desc": { fr: "L'union de tous les baptisés pour ranimer la foi", en: "The union of all the baptized to revive the faith" },
  "nav.histoire": { fr: "Histoire", en: "History" },
  "nav.histoire.desc": { fr: "De Rome à l'Afrique centrale et à l'Europe", en: "From Rome to Central Africa and Europe" },
  "nav.pastorale-vocationnelle": { fr: "Pastorale Vocationnelle", en: "Vocational Ministry" },
  "nav.pastorale-vocationnelle.desc": { fr: "Rejoindre la Société du Père Pallotti", en: "Join the Society of Father Pallotti" },
  "nav.direction-provinciale": { fr: "Direction provinciale", en: "Provincial Leadership" },
  "nav.conseil-provincial": { fr: "Conseil provincial", en: "Provincial Council" },
  "nav.conseil-provincial.desc": { fr: "Gouvernement Provincial sous la conduite du Recteur", en: "Provincial Government under the Rector's leadership" },
  "nav.administration-provinciale": { fr: "Administration provinciale", en: "Provincial Administration" },
  "nav.administration-provinciale.desc": { fr: "Gestion temporelle et intendance de la province", en: "Temporal management and stewardship of the province" },
  "nav.secretariat-provincial": { fr: "Secrétariat provincial", en: "Provincial Secretariat" },
  "nav.secretariat-provincial.desc": { fr: "Archives, chancellerie et communication", en: "Archives, chancellery and communication" },
  "nav.assemblees": { fr: "Assemblées", en: "Assemblies" },
  "nav.assemblees.desc": { fr: "Assemblées provinciales et collégialité", en: "Provincial assemblies and collegiality" },
  "nav.secretariats": { fr: "Secrétariats", en: "Secretariats" },
  "nav.secretariats.desc": { fr: "Secrétariats spécialisés pour la mission", en: "Specialized secretariats for the mission" },
  "nav.commissions": { fr: "Commissions", en: "Commissions" },
  "nav.commissions.desc": { fr: "Commissions pastorales, économiques et juridiques", en: "Pastoral, economic and legal commissions" },
  "nav.communautes-et-oeuvres": { fr: "Communautés et Œuvres", en: "Communities & Works" },
  "nav.rwanda": { fr: "Rwanda", en: "Rwanda" },
  "nav.rwanda.desc": { fr: "Gikondo, Kabuga, Ruhango, Butare, Kibeho, Kinoni, Pallotti Presse", en: "Gikondo, Kabuga, Ruhango, Butare, Kibeho, Kinoni, Pallotti Press" },
  "nav.r-d-congo": { fr: "R. D. Congo", en: "D. R. Congo" },
  "nav.r-d-congo.desc": { fr: "Goma-Keshero, Goma-Buturande, Bukavu-Karhale, Maison de Formation", en: "Goma-Keshero, Goma-Buturande, Bukavu-Karhale, Formation House" },
  "nav.belgique": { fr: "Belgique", en: "Belgium" },
  "nav.belgique.desc": { fr: "Bruxelles (Procure Rogier, Sainte Thérèse d'Avila), Namur-Sombreffe", en: "Brussels (Rogier Procure, St Teresa of Avila), Namur-Sombreffe" },
  "nav.mission-europe-monde": { fr: "Mission en Europe & Monde", en: "Mission in Europe & World" },
  "nav.mission-europe-monde.desc": { fr: "France (Osny, Montereau, Vaires), Italie (Latina, Rome), Pologne, USA", en: "France (Osny, Montereau, Vaires), Italy (Latina, Rome), Poland, USA" },
  "nav.informations": { fr: "Informations & Médias", en: "News & Media" },
  "nav.province-sainte-famille": { fr: "Province Sainte Famille", en: "Holy Family Province" },
  "nav.bulletin-dinformation": { fr: "Bulletin d'Information", en: "Newsletter" },
  "nav.generalat": { fr: "Généralat", en: "Generalate" },
  "nav.union-de-lapostolat-catholique": { fr: "Union de l'Apostolat Catholique", en: "Union of Catholic Apostolate" },
  "nav.communiques": { fr: "Communiqués", en: "Press Releases" },
  "nav.ouvrages-des-confreres": { fr: "Ouvrages des Confrères", en: "Publications by Members" },
  "nav.autres": { fr: "Réflexions et Vie", en: "Reflections & Life" },
  "nav.galerie": { fr: "Galerie", en: "Gallery" },
  "nav.photos": { fr: "Photos", en: "Photos" },
  "nav.videos": { fr: "Vidéos", en: "Videos" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  // ── Header ──────────────────────────────────────────────────
  "header.webmail": { fr: "Webmail", en: "Webmail" },
  "header.contact-province": { fr: "Contacter la Province", en: "Contact the Province" },
  "header.open-menu": { fr: "Ouvrir le menu", en: "Open menu" },

  // ── Hero Slider ─────────────────────────────────────────────
  "hero.sac": { fr: "Société de l'Apostolat Catholique", en: "Society of the Catholic Apostolate" },
  "hero.discover": { fr: "Découvrir les Œuvres", en: "Discover Our Works" },
  "hero.charism": { fr: "Notre Charisme", en: "Our Charism" },
  "hero.prev": { fr: "Image précédente", en: "Previous image" },
  "hero.next": { fr: "Image suivante", en: "Next image" },
  "hero.goto": { fr: "Aller au slide", en: "Go to slide" },

  // ── Rector Message ──────────────────────────────────────────
  "rector.direction": { fr: "Direction Provinciale", en: "Provincial Leadership" },
  "rector.sac": { fr: "Societas Apostolatus Catholici", en: "Societas Apostolatus Catholici" },
  "rector.province": { fr: "Province Sainte Famille", en: "Holy Family Province" },
  "rector.government": { fr: "Gouvernement Provincial", en: "Provincial Government" },
  "rector.maison": { fr: "Maison Provinciale Sainte Famille • Kigali, Rwanda", en: "Holy Family Provincial House • Kigali, Rwanda" },

  // ── Sanctuaries ─────────────────────────────────────────────
  "sanctuaries.badge": { fr: "Hauts Lieux de Pèlerinage", en: "Major Pilgrimage Sites" },
  "sanctuaries.title": { fr: "Les Grands Sanctuaires de la Province", en: "The Great Sanctuaries of the Province" },
  "sanctuaries.desc": { fr: "Au cœur de la mission pallottine, nos sanctuaires sont des havres de prière, de réconciliation et de ferveur mariale et eucharistique ouverts à tous les fidèles.", en: "At the heart of the Pallottine mission, our sanctuaries are havens of prayer, reconciliation, and Marian and Eucharistic fervor open to all the faithful." },
  "sanctuaries.rector": { fr: "Recteur :", en: "Rector:" },
  "sanctuaries.learnmore": { fr: "En savoir plus sur le", en: "Learn more about" },
  // Individual sanctuaries
  "sanctuary.kibeho.title": { fr: "Sanctuaire Marial de Kibeho", en: "Marian Sanctuary of Kibeho" },
  "sanctuary.kibeho.subtitle": { fr: "Notre-Dame des Douleurs", en: "Our Lady of Sorrows" },
  "sanctuary.kibeho.location": { fr: "Kibeho, District de Nyaruguru, Rwanda", en: "Kibeho, Nyaruguru District, Rwanda" },
  "sanctuary.kibeho.desc": { fr: "Terre sainte des apparitions mariales reconnues par l'Église. Les Pallottins assurent l'accueil des pèlerins venus du monde entier, les confessions et l'animation spirituelle.", en: "Holy land of Marian apparitions recognized by the Church. The Pallottines welcome pilgrims from around the world, provide confessions and spiritual animation." },
  "sanctuary.kibeho.badge": { fr: "Apparitions Mariales", en: "Marian Apparitions" },
  "sanctuary.kabuga.title": { fr: "Sanctuaire de la Miséricorde Divine", en: "Sanctuary of Divine Mercy" },
  "sanctuary.kabuga.subtitle": { fr: "Centre Pastoral Saint Jean-Paul II", en: "St John Paul II Pastoral Center" },
  "sanctuary.kabuga.location": { fr: "Kabuga, Archidiocèse de Kigali, Rwanda", en: "Kabuga, Archdiocese of Kigali, Rwanda" },
  "sanctuary.kabuga.desc": { fr: "Centre majeur de dévotion à la Miséricorde Divine et d'apostolat des familles. Messe solennelle de la Miséricorde, confessions quotidiennes et retraites.", en: "Major center of devotion to Divine Mercy and family apostolate. Solemn Mass of Mercy, daily confessions and retreats." },
  "sanctuary.kabuga.badge": { fr: "Miséricorde Divine", en: "Divine Mercy" },
  "sanctuary.ruhango.title": { fr: "Sanctuaire Jésus Miséricordieux", en: "Jesus the Merciful Sanctuary" },
  "sanctuary.ruhango.subtitle": { fr: "Adoration Eucharistique Perpétuelle", en: "Perpetual Eucharistic Adoration" },
  "sanctuary.ruhango.location": { fr: "Ruhango, Diocèse de Kabgayi, Rwanda", en: "Ruhango, Diocese of Kabgayi, Rwanda" },
  "sanctuary.ruhango.desc": { fr: "Célèbre pour ses rassemblements mensuels de prière et d'adoration continue jour et nuit, attirant des foules de pèlerins pour la prière de guérison et d'action de grâce.", en: "Famous for its monthly prayer gatherings and continuous day-and-night adoration, attracting crowds of pilgrims for healing prayer and thanksgiving." },
  "sanctuary.ruhango.badge": { fr: "Adoration Perpétuelle", en: "Perpetual Adoration" },

  // ── Communities Explorer ────────────────────────────────────
  "communities.badge": { fr: "Rayonnement Apostolique", en: "Apostolic Outreach" },
  "communities.title": { fr: "Communautés et Œuvres de la Province", en: "Communities & Works of the Province" },
  "communities.desc": { fr: "De Kigali à Goma, de Bukavu à Bruxelles et à la région parisienne, explorez les maisons, paroisses et œuvres de la Sainte Famille.", en: "From Kigali to Goma, from Bukavu to Brussels and the Paris region, explore the houses, parishes and works of the Holy Family." },
  "communities.siege": { fr: "Siège Provincial", en: "Provincial Headquarters" },
  "communities.oeuvres": { fr: "Œuvres & Missions :", en: "Works & Missions:" },
  "communities.confreres": { fr: "confrères", en: "members" },
  "communities.voir": { fr: "Voir la communauté", en: "View community" },
  "communities.responsable": { fr: "Responsable", en: "Superior" },
  "communities.country.rwanda": { fr: "Rwanda", en: "Rwanda" },
  "communities.country.rdc": { fr: "R.D. Congo", en: "D.R. Congo" },
  "communities.country.belgique": { fr: "Belgique", en: "Belgium" },
  "communities.country.mission": { fr: "Mission en Europe et Monde", en: "Mission in Europe and World" },

  // ── Latest News ─────────────────────────────────────────────
  "news.badge": { fr: "Publications & Événements", en: "Publications & Events" },
  "news.title": { fr: "Actualités & Bulletins d'Information", en: "News & Newsletters" },
  "news.all": { fr: "Toutes les publications", en: "All publications" },
  "news.featured": { fr: "À la une", en: "Featured" },
  "news.read": { fr: "Lire l'article", en: "Read article" },
  "news.nominations.badge": { fr: "Conseil Provincial", en: "Provincial Council" },
  "news.nominations.title": { fr: "Publication Officielle des Nominations 2026-2027", en: "Official Publication of Nominations 2026-2027" },
  "news.nominations.desc": { fr: "Affectations des prêtres, diacres et stagiaires.", en: "Assignments of priests, deacons and trainees." },
  "news.nominations.cta": { fr: "Consulter", en: "View" },

  // ── Footer ──────────────────────────────────────────────────
  "footer.sac-psf": { fr: "SAC - Province Sainte Famille", en: "SAC - Holy Family Province" },
  "footer.societas": { fr: "Societas Apostolatus Catholici", en: "Societas Apostolatus Catholici" },
  "footer.desc": { fr: "Présente au Rwanda, en République Démocratique du Congo et en Belgique, la Province Sainte Famille œuvre pour l'évangélisation, l'apostolat universel des laïcs et la charité chrétienne.", en: "Present in Rwanda, the Democratic Republic of Congo and Belgium, the Holy Family Province works for evangelization, the universal apostolate of the laity and Christian charity." },
  "footer.rubriques": { fr: "Rubriques Principales", en: "Main Sections" },
  "footer.fondateur": { fr: "Saint Vincent Pallotti (Fondateur)", en: "Saint Vincent Pallotti (Founder)" },
  "footer.charisme": { fr: "Notre Charisme & Spiritualité", en: "Our Charism & Spirituality" },
  "footer.gouvernement": { fr: "Gouvernement & Conseil Provincial", en: "Government & Provincial Council" },
  "footer.communautes-rw": { fr: "Communautés au Rwanda", en: "Communities in Rwanda" },
  "footer.communautes-rdc": { fr: "Communautés en R.D. Congo", en: "Communities in D.R. Congo" },
  "footer.procure": { fr: "Procure Missionnaire (Belgique)", en: "Missionary Procure (Belgium)" },
  "footer.bulletins": { fr: "Bulletins d'Information (Info-PSF)", en: "Newsletters (Info-PSF)" },
  "footer.sanctuaires": { fr: "Grands Sanctuaires", en: "Great Sanctuaries" },
  "footer.kibeho": { fr: "Sanctuaire de Kibeho", en: "Kibeho Sanctuary" },
  "footer.kibeho.desc": { fr: "Notre-Dame des Douleurs (Apparitions reconnues)", en: "Our Lady of Sorrows (Recognized Apparitions)" },
  "footer.kabuga": { fr: "Sanctuaire de Kabuga", en: "Kabuga Sanctuary" },
  "footer.kabuga.desc": { fr: "Miséricorde Divine & Centre St Jean-Paul II", en: "Divine Mercy & St John Paul II Center" },
  "footer.ruhango": { fr: "Sanctuaire de Ruhango", en: "Ruhango Sanctuary" },
  "footer.ruhango.desc": { fr: "Jésus Miséricordieux & Adoration Perpétuelle", en: "Jesus the Merciful & Perpetual Adoration" },
  "footer.siege": { fr: "Siège Provincial", en: "Provincial Headquarters" },
  "footer.maison": { fr: "Maison Provinciale Sainte Famille", en: "Holy Family Provincial House" },
  "footer.webmail": { fr: "Accès Webmail", en: "Webmail Access" },
  "footer.copyright": { fr: "© 2026 Société de l'Apostolat Catholique - Province Sainte Famille. Tous droits réservés.", en: "© 2026 Society of the Catholic Apostolate - Holy Family Province. All rights reserved." },
  "footer.tagline": { fr: "Venez et rebâtissons les murailles de Jérusalem", en: "Come, let us rebuild the walls of Jerusalem" },
  "footer.motto": { fr: "Caritas Christi Urget Nos (L'Amour du Christ nous presse)", en: "Caritas Christi Urget Nos (The Love of Christ urges us)" },

  // ── Hero Slides ─────────────────────────────────────────────
  "hero.slide1.title": { fr: "Pallottins de la PSF", en: "Pallottines of the HSF" },
  "hero.slide1.subtitle": { fr: "Venez et rebâtissons les murailles de Jérusalem.", en: "Come, let us rebuild the walls of Jerusalem." },
  "hero.slide2.title": { fr: "P. Eugène Niyonzima, Recteur Provincial", en: "Fr. Eugène Niyonzima, Provincial Rector" },
  "hero.slide2.subtitle": { fr: "Bienvenue sur le site officiel de la Province Pallottine de la Sainte Famille.", en: "Welcome to the official website of the Pallottine Holy Family Province." },
  "hero.slide3.title": { fr: "Keshero - R. D. Congo", en: "Keshero - D. R. Congo" },
  "hero.slide3.subtitle": { fr: "Centre Pallottin de formation Genezareth.", en: "Pallottine Training Center Genezareth." },
  "hero.slide4.title": { fr: "Kabuga - Rwanda", en: "Kabuga - Rwanda" },
  "hero.slide4.subtitle": { fr: "Sanctuaire de la Miséricorde Divine.", en: "Sanctuary of Divine Mercy." },
  "hero.slide5.title": { fr: "La Nouvelle Communauté de Kibeho", en: "The New Kibeho Community" },
  "hero.slide5.subtitle": { fr: "Au pied de Notre-Dame des Douleurs de Kibeho.", en: "At the foot of Our Lady of Sorrows of Kibeho." },
  "hero.slide6.title": { fr: "Montereau - France", en: "Montereau - France" },
  "hero.slide6.subtitle": { fr: "La Nouvelle Communauté Pallottine de Montereau.", en: "The New Pallottine Community of Montereau." },

  // ── Rector Message ──────────────────────────────────────────
  "rector.title": { fr: "Bienvenus au Site officiel de la Province Sainte Famille", en: "Welcome to the Official Website of the Holy Family Province" },
  "rector.subtitle": { fr: "« Venez et rebâtissons les murailles de Jérusalem »", en: "\"Come, let us rebuild the walls of Jerusalem\"" },
  "rector.role": { fr: "Recteur Provincial", en: "Provincial Rector" },
  "rector.msg.0": { fr: "Chers Confrères, amis et connaissances,", en: "Dear Brothers, friends and acquaintances," },
  "rector.msg.1": { fr: "Si pour certains « l'Internet semble être un foyer de divertissement vulgaire et du contenu superficiel, qui prospèrent sur le côté sombre de notre nature humaine », pour nous, si nous le voulons bien, il peut être un instrument d'évangélisation et de communion fraternelle sans précédent.", en: "While for some \"the Internet seems to be a haven for vulgar entertainment and superficial content that thrives on the dark side of our human nature,\" for us, if we choose, it can be an unprecedented instrument of evangelization and fraternal communion." },
  "rector.msg.2": { fr: "Même si Vincent Pallotti n'a pas vécu au temps de l'internet, il était, sans aucun ombre de doute, « un habile communicateur et un homme aux relations multiples » comme sa collection épistolaire le témoigne. Il profitait des documents imprimés pour diffuser ses initiatives pastorales et apostoliques. On oserait dire que si notre cher Fondateur était de notre époque, il aurait appris à parler avec le langage d'aujourd'hui et utiliser les moyens de communications de notre temps.", en: "Although Vincent Pallotti did not live in the age of the internet, he was, without a shadow of a doubt, \"a skilled communicator and a man of many relationships\" as his epistolary collection testifies. He used printed documents to spread his pastoral and apostolic initiatives. One might say that if our dear Founder lived in our time, he would have learned to speak with today's language and use the means of communication of our era." },
  "rector.msg.3": { fr: "On se rappellera que dans la « Règle » appelée « Copia Lambruschini », il suggéra : « tous apprendront la langue du pays où ils vivent, sans négliger la culture, la langue propre, qui sera très utile sur place, ou pour les œuvres de la gloire de Dieu, et les avantages spirituels du prochain » (OOCC VII, p.162). Une telle suggestion n'est pas seulement un soin de « l'enseignement des langues étrangères » mais plutôt un souci bien clair de comprendre la mentalité et le langage des hommes et femmes de notre temps.", en: "We recall that in the \"Rule\" known as the \"Copia Lambruschini,\" he suggested: \"all will learn the language of the country where they live, without neglecting the culture, the native language, which will be very useful on site, or for the works of God's glory, and the spiritual advantages of one's neighbor\" (OOCC VII, p.162). Such a suggestion is not merely a concern for \"teaching foreign languages\" but rather a clear desire to understand the mentality and language of the men and women of our time." },
  "rector.msg.4": { fr: "Voilà pourquoi je souhaite que ce site soit pour nous un moyen d'apprendre la langue du pays, du monde où nous vivons, sans négliger la culture moderne ou même postmoderne, mais sans se laisser être enchainé non plus par ses zones d'ombres. Un sage aurait dit, à cet effet, que « la solitude commence lorsque la communication virtuelle (réseaux sociaux) surpasse la communication familiale ».", en: "That is why I wish this website to be for us a means of learning the language of the country, of the world where we live, without neglecting modern or even postmodern culture, but without letting ourselves be chained by its shadows either. A wise person once said that \"loneliness begins when virtual communication (social media) surpasses family communication.\"" },
  "rector.quote": { fr: "« Tous apprendront la langue du pays où ils vivent, sans négliger la culture, la langue propre, qui sera très utile sur place, ou pour les œuvres de la gloire de Dieu, et les avantages spirituels du prochain. »", en: "\"All will learn the language of the country where they live, without neglecting the culture, the native language, which will be very useful on site, or for the works of God's glory, and the spiritual advantages of one's neighbor.\"" },
  "rector.quote.source": { fr: "Règle dite Copia Lambruschini (OOCC VII, p.162)", en: "Rule known as Copia Lambruschini (OOCC VII, p.162)" },
};

// Navigation key mapping: maps nav slugs to translation keys
export const navKeyMap: Record<string, string> = {
  "accueil": "nav.accueil",
  "identite": "nav.identite",
  "fondateur": "nav.fondateur",
  "charisme": "nav.charisme",
  "histoire": "nav.histoire",
  "pastorale-vocationnelle": "nav.pastorale-vocationnelle",
  "direction-provinciale": "nav.direction-provinciale",
  "conseil-provincial": "nav.conseil-provincial",
  "administration-provinciale": "nav.administration-provinciale",
  "secretariat-provincial": "nav.secretariat-provincial",
  "assemblees": "nav.assemblees",
  "secretariats": "nav.secretariats",
  "commissions": "nav.commissions",
  "communautes-et-oeuvres": "nav.communautes-et-oeuvres",
  "rwanda": "nav.rwanda",
  "r-d-congo": "nav.r-d-congo",
  "belgique": "nav.belgique",
  "mission-europe-monde": "nav.mission-europe-monde",
  "informations": "nav.informations",
  "province-sainte-famille": "nav.province-sainte-famille",
  "bulletin-dinformation": "nav.bulletin-dinformation",
  "generalat": "nav.generalat",
  "union-de-lapostolat-catholique": "nav.union-de-lapostolat-catholique",
  "communiques": "nav.communiques",
  "ouvrages-des-confreres": "nav.ouvrages-des-confreres",
  "autres": "nav.autres",
  "gallerie": "nav.galerie",
  "photo": "nav.photos",
  "video": "nav.videos",
};

export const navDescKeyMap: Record<string, string> = {
  "fondateur": "nav.fondateur.desc",
  "charisme": "nav.charisme.desc",
  "histoire": "nav.histoire.desc",
  "pastorale-vocationnelle": "nav.pastorale-vocationnelle.desc",
  "conseil-provincial": "nav.conseil-provincial.desc",
  "administration-provinciale": "nav.administration-provinciale.desc",
  "secretariat-provincial": "nav.secretariat-provincial.desc",
  "assemblees": "nav.assemblees.desc",
  "secretariats": "nav.secretariats.desc",
  "commissions": "nav.commissions.desc",
  "rwanda": "nav.rwanda.desc",
  "r-d-congo": "nav.r-d-congo.desc",
  "belgique": "nav.belgique.desc",
  "mission-europe-monde": "nav.mission-europe-monde.desc",
};

// Hero slide translation key map (slide id → { title, subtitle })
export const heroSlideKeyMap: Record<string, { title: string; subtitle: string }> = {
  "slide-1": { title: "hero.slide1.title", subtitle: "hero.slide1.subtitle" },
  "slide-2": { title: "hero.slide2.title", subtitle: "hero.slide2.subtitle" },
  "slide-3": { title: "hero.slide3.title", subtitle: "hero.slide3.subtitle" },
  "slide-4": { title: "hero.slide4.title", subtitle: "hero.slide4.subtitle" },
  "slide-5": { title: "hero.slide5.title", subtitle: "hero.slide5.subtitle" },
  "slide-6": { title: "hero.slide6.title", subtitle: "hero.slide6.subtitle" },
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("sac-psf-locale");
      if (saved === "fr" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem("sac-psf-locale", next);
    } catch {
      // ignore storage errors
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key] ?? pageTranslations[key];
      if (!entry) return key;
      return entry[locale] ?? entry["fr"] ?? key;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
