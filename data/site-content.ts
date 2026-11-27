/**
 * Base de données TypeScript et typage pour la refonte du site officiel de la
 * Société de l'Apostolat Catholique (SAC) - Province Sainte Famille (PSF)
 * Rwanda - R.D. Congo - Belgique
 * 
 * Données extraites et synchronisées depuis : https://www.sac-psf.info/
 */

export interface ContactInfo {
  address: string;
  quarter: string;
  poBox: string;
  city: string;
  country: string;
  phones: string[];
  email: string;
  webmailUrl: string;
  social: {
    facebook: string;
    twitter: string;
    youtube?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
    label: string;
  };
}

export interface BrandingTheme {
  name: string;
  colors: {
    primaryGold: string;       // #996600 - Brun doré emblématique
    primaryGoldLight: string;  // #fc6 (#ffcc66) - Jaune ambré
    darkOchre: string;         // #663300 - Marron foncé
    accentCrimson: string;     // #990000 - Rouge liturgique / motif
    bgDark: string;            // #1a1a1a
    bgLight: string;           // #fbfcfc
    textPrimary: string;       // #212529
    textMuted: string;         // #6c757d
  };
  logos: {
    headerLogo: string;        // Logo Province Sainte Famille
    emblemLogo: string;        // SAC Pallottins officiel
    defaultEmblem: string;     // Armoiries / Sceau pallottin
    favicon: string;
  };
  typography: {
    headings: string;
    body: string;
  };
}

export interface NavLink {
  label: string;
  slug: string;
  path: string;
  children?: {
    label: string;
    slug: string;
    path: string;
    description?: string;
  }[];
}

export interface CouncilMember {
  id: string;
  name: string;
  title: string;
  role: string;
  department?: string;
  photoUrl: string;
  bio?: string;
}

export interface CommunityWork {
  id: string;
  name: string;
  slug: string;
  country: 'Rwanda' | 'R.D. Congo' | 'Belgique' | 'Mission en Europe et Monde';
  locality: string;
  diocese: string;
  poBox?: string;
  address?: string;
  description: string;
  isProvincialMotherHouse?: boolean;
  imageUrl: string;
  gallery?: string[];
  keyWorks: string[];
  members: {
    name: string;
    role: string;
  }[];
}

export interface PublicationItem {
  id: string;
  title: string;
  slug: string;
  category: 
    | 'bulletin-dinformation'
    | 'communiques'
    | 'generalat'
    | 'province-sainte-famille'
    | 'union-de-lapostolat-catholique'
    | 'ouvrages-des-confreres'
    | 'reflexions-et-vie';
  categoryLabel: string;
  date: string; // ISO ou DD/MM/YYYY
  author?: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  featured?: boolean;
  tags?: string[];
}

export interface HeroCarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
}

export interface HistoricalMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AssemblyItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  theme: string;
  summary: string;
  keyPoints: string[];
  documents?: { title: string; url: string }[];
}

export interface SecretariatItem {
  id: string;
  name: string;
  code: string;
  leader: string;
  leaderRole: string;
  description: string;
  missions: string[];
}

export interface CommissionItem {
  id: string;
  name: string;
  president: string;
  presidentRole: string;
  description: string;
  members: string[];
  responsibilities: string[];
}

export interface PhotoAlbum {
  id: string;
  title: string;
  slug: string;
  date: string;
  location: string;
  coverImage: string;
  photoCount: number;
  images: { url: string; caption: string }[];
}

export interface VideoItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

export interface SiteContentData {
  meta: {
    title: string;
    shortTitle: string;
    tagline: string;
    motto: string;
    officialFoundedYear: number;
    description: string;
    localeDefault: 'fr' | 'en';
    supportedLocales: string[];
  };
  branding: BrandingTheme;
  contact: ContactInfo;
  navigation: NavLink[];
  rectorMessage: {
    author: string;
    title: string;
    subtitle: string;
    rectorRole: string;
    portraitUrl: string;
    fullMessage: string[];
    scriptureOrFounderQuote: string;
    quoteSource: string;
  };
  identity: {
    founder: {
      name: string;
      feastDay: string;
      birth: string;
      death: string;
      canonization: string;
      summary: string;
      imageUrl: string;
      keyPrinciples: string[];
    };
    charism: {
      title: string;
      summary: string;
      pillars: string[];
    };
    history: {
      summary: string;
      milestones: HistoricalMilestone[];
    };
    vocations: {
      title: string;
      invitation: string;
      contactPerson: string;
      contactEmail: string;
    };
  };
  governance: {
    provincialCouncil: CouncilMember[];
    administration: CouncilMember[];
    secretariat: CouncilMember[];
  };
  communities: CommunityWork[];
  articles: PublicationItem[];
  heroSlides: HeroCarouselSlide[];
  popularArticles: {
    id: string;
    title: string;
    date: string;
    slug: string;
    imageUrl: string;
  }[];
  assemblies: AssemblyItem[];
  secretariatsList: SecretariatItem[];
  commissionsList: CommissionItem[];
  photoAlbums: PhotoAlbum[];
  videoPlaylists: VideoItem[];
}

// ============================================================================
// DONNÉES RÉELLES EXTRAITES DU SITE OFFICIEL (SAC-PSF.INFO)
// ============================================================================

export const siteContent: SiteContentData = {
  meta: {
    title: "Société de l'Apostolat Catholique - Province Sainte Famille",
    shortTitle: "SAC PSF",
    tagline: "Venez et rebâtissons les murailles de Jérusalem",
    motto: "Caritas Christi Urget Nos (L'Amour du Christ nous presse)",
    officialFoundedYear: 1835,
    description: "Site officiel de la Province Pallottine Sainte Famille regroupant les communautés et œuvres apostoliques du Rwanda, de la République Démocratique du Congo et de la Belgique.",
    localeDefault: 'fr',
    supportedLocales: ['fr', 'en']
  },

  branding: {
    name: "SAC-PSF Visual Identity",
    colors: {
      primaryGold: "#996600",
      primaryGoldLight: "#ffcc66",
      darkOchre: "#663300",
      accentCrimson: "#990000",
      bgDark: "#1a1a1a",
      bgLight: "#fbfcfc",
      textPrimary: "#212529",
      textMuted: "#6c757d"
    },
    logos: {
      headerLogo: "/images/logos/logo-psf.png",
      emblemLogo: "/images/logos/sac-pallottins.png",
      defaultEmblem: "/images/logos/emblem.png",
      favicon: "/images/logos/emblem.png"
    },
    typography: {
      headings: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    }
  },

  contact: {
    address: "Kigali - Gikondo",
    quarter: "Gikondo",
    poBox: "B.P. 1083 Kigali",
    city: "Kigali",
    country: "RWANDA",
    phones: ["+250 788 307 271", "+250 788 381 737"],
    email: "contact@sac-psf.info",
    webmailUrl: "https://webmail.sac-psf.info",
    social: {
      facebook: "https://www.facebook.com/sac-psf",
      twitter: "https://twitter.com/NiyonzimaEugne1"
    },
    geo: {
      latitude: -1.970579,
      longitude: 30.076891,
      label: "Maison Provinciale Sainte Famille, Gikondo, Kigali, Rwanda"
    }
  },

  navigation: [
    {
      label: "Accueil",
      slug: "accueil",
      path: "/"
    },
    {
      label: "Identité",
      slug: "identite",
      path: "/identite",
      children: [
        { label: "Fondateur", slug: "fondateur", path: "/identite/fondateur", description: "Saint Vincent Pallotti et sa vie d'apôtre" },
        { label: "Charisme", slug: "charisme", path: "/identite/charisme", description: "L'union de tous les baptisés pour ranimer la foi" },
        { label: "Histoire", slug: "histoire", path: "/identite/histoire", description: "De Rome à l'Afrique centrale et à l'Europe" },
        { label: "Pastorale Vocationnelle", slug: "pastorale-vocationnelle", path: "/identite/pastorale-vocationnelle", description: "Rejoindre la Société du Père Pallotti" }
      ]
    },
    {
      label: "Direction provinciale",
      slug: "direction-provinciale",
      path: "/direction-provinciale",
      children: [
        { label: "Conseil provincial", slug: "conseil-provincial", path: "/direction-provinciale/conseil-provincial", description: "Gouvernement Provincial sous la conduite du Recteur" },
        { label: "Administration provinciale", slug: "administration-provinciale", path: "/direction-provinciale/administration-provinciale", description: "Gestion temporelle et intendance de la province" },
        { label: "Secrétariat provincial", slug: "secretariat-provincial", path: "/direction-provinciale/secretariat-provincial", description: "Archives, chancellerie et communication" },
        { label: "Assemblées", slug: "assemblees", path: "/direction-provinciale/assemblees", description: "Assemblées provinciales et collégialité" },
        { label: "Secrétariats", slug: "secretariats", path: "/direction-provinciale/secretariats", description: "Secrétariats spécialisés pour la mission" },
        { label: "Commissions", slug: "commissions", path: "/direction-provinciale/commissions", description: "Commissions pastorales, économiques et juridiques" }
      ]
    },
    {
      label: "Communautés et Œuvres",
      slug: "communautes-et-oeuvres",
      path: "/communautes-et-oeuvres",
      children: [
        { label: "Rwanda", slug: "rwanda", path: "/communautes-et-oeuvres/rwanda", description: "Gikondo, Kabuga, Ruhango, Butare, Kibeho, Kinoni, Pallotti Presse" },
        { label: "R. D. Congo", slug: "r-d-congo", path: "/communautes-et-oeuvres/r-d-congo", description: "Goma-Keshero, Goma-Buturande, Bukavu-Karhale, Maison de Formation" },
        { label: "Belgique", slug: "belgique", path: "/communautes-et-oeuvres/belgique", description: "Bruxelles (Procure Rogier, Sainte Thérèse d'Avila), Namur-Sombreffe" },
        { label: "Mission en Europe & Monde", slug: "mission-europe-monde", path: "/communautes-et-oeuvres/mission-en-dehors-du-territoire-provincial", description: "France (Osny, Montereau, Vaires), Italie (Latina, Rome), Pologne, USA" }
      ]
    },
    {
      label: "Informations & Médias",
      slug: "informations",
      path: "/informations",
      children: [
        { label: "Province Sainte Famille", slug: "province-sainte-famille", path: "/informations/province-sainte-famille" },
        { label: "Bulletin d'Information", slug: "bulletin-dinformation", path: "/informations/bulletin-dinformation" },
        { label: "Généralat", slug: "generalat", path: "/informations/generalat" },
        { label: "Union de l'Apostolat Catholique", slug: "union-de-lapostolat-catholique", path: "/informations/union-de-lapostolat-catholique" },
        { label: "Communiqués", slug: "communiques", path: "/informations/communiques" },
        { label: "Ouvrages des Confrères", slug: "ouvrages-des-confreres", path: "/informations/ouvrages-des-confreres" },
        { label: "Réflexions et Vie", slug: "autres", path: "/informations/autres" }
      ]
    },
    {
      label: "Galerie",
      slug: "gallerie",
      path: "/photos/album",
      children: [
        { label: "Photos", slug: "photo", path: "/photos/album" },
        { label: "Vidéos", slug: "video", path: "/videos/playlist" }
      ]
    }
  ],

  rectorMessage: {
    author: "P. Eugène NIYONZIMA, SAC",
    rectorRole: "Recteur Provincial",
    title: "Bienvenus au Site officiel de la Province Sainte Famille",
    subtitle: "« Venez et rebâtissons les murailles de Jérusalem »",
    portraitUrl: "/images/people/rector-eugene.jpg",
    scriptureOrFounderQuote: "« Tous apprendront la langue du pays où ils vivent, sans négliger la culture, la langue propre, qui sera très utile sur place, ou pour les œuvres de la gloire de Dieu, et les avantages spirituels du prochain. »",
    quoteSource: "Règle dite Copia Lambruschini (OOCC VII, p.162)",
    fullMessage: [
      "Chers Confrères, amis et connaissances,",
      "Si pour certains « l'Internet semble être un foyer de divertissement vulgaire et du contenu superficiel, qui prospèrent sur le côté sombre de notre nature humaine », pour nous, si nous le voulons bien, il peut être un instrument d’évangélisation et de communion fraternelle sans précédent.",
      "Même si Vincent Pallotti n’a pas vécu au temps de l’internet, il était, sans aucun ombre de doute, « un habile communicateur et un homme aux relations multiples » comme sa collection épistolaire le témoigne. Il profitait des documents imprimés pour diffuser ses initiatives pastorales et apostoliques. On oserait dire que si notre cher Fondateur était de notre époque, il aurait appris à parler avec le langage d’aujourd’hui et utiliser les moyens de communications de notre temps.",
      "On se rappellera que dans la « Règle » appelée « Copia Lambruschini », il suggéra : « tous apprendront la langue du pays où ils vivent, sans négliger la culture, la langue propre, qui sera très utile sur place, ou pour les œuvres de la gloire de Dieu, et les avantages spirituels du prochain » (OOCC VII, p.162). Une telle suggestion n'est pas seulement un soin de « l'enseignement des langues étrangères » mais plutôt un souci bien clair de comprendre la mentalité et le langage des hommes et femmes de notre temps.",
      "Voilà pourquoi je souhaite que ce site soit pour nous un moyen d’apprendre la langue du pays, du monde où nous vivons, sans négliger la culture moderne ou même postmoderne, mais sans se laisser être enchainé non plus par ses zones d’ombres. Un sage aurait dit, à cet effet, que « la solitude commence lorsque la communication virtuelle (réseaux sociaux) surpasse la communication familiale »."
    ]
  },

  identity: {
    founder: {
      name: "Saint Vincent Pallotti",
      birth: "21 avril 1795 à Rome",
      death: "22 janvier 1850 à Rome",
      canonization: "20 janvier 1963 par le Pape Jean XXIII lors du Concile Vatican II",
      feastDay: "22 janvier",
      imageUrl: "/images/people/vincent-pallotti.jpg",
      summary: "Prêtre romain visionnaire, Vincent Pallotti est le précurseur de l'apostolat des laïcs. Issu d'une famille noble de Rome et de Norcia, il fonda en 1835 l'Union de l'Apostolat Catholique (UAC) pour mobiliser prêtres, religieux et laïcs en vue de raviver la foi et rallumer la charité dans le monde entier.",
      keyPrinciples: [
        "Chacun est appelé à être apôtre selon son état de vie",
        "L'Amour infini de Dieu révélé en Jésus-Christ comme modèle",
        "La charité universelle sans distinction de condition",
        "Collaboration étroite entre laïcs et membres consacrés"
      ]
    },
    charism: {
      title: "Rallumer la foi et susciter la charité",
      summary: "Le charisme pallottin consiste à éveiller la conscience de chaque baptisé à sa responsabilité apostolique, en formant une grande communion universelle d'apôtres.",
      pillars: [
        "Apostolat universel de tous les baptisés",
        "Union et communion ecclésiale (UAC)",
        "Service préférentiel des pauvres, des familles et de l'éducation",
        "Formation intégrale de la personne humaine"
      ]
    },
    history: {
      summary: "L'implantation pallottine au Rwanda et dans les Grands Lacs plonge ses racines dans l'appel missionnaire. Érigée pour coordonner le souffle apostolique au Rwanda, en République Démocratique du Congo et en Belgique, la Province Sainte Famille témoigne d'un rayonnement spirituel et social remarquable.",
      milestones: [
        { year: "1835", title: "Fondation à Rome", description: "Saint Vincent Pallotti fonde l'Union de l'Apostolat Catholique." },
        { year: "1963", title: "Canonisation", description: "Le Pape Jean XXIII canonise Vincent Pallotti comme précurseur du renouveau conciliaire." },
        { year: "1973", title: "Arrivée au Rwanda", description: "Première implantation de la mission pallottine au pays des mille collines." },
        { year: "1980+", title: "Expansion au Congo & Belgique", description: "Extension des œuvres au Kivu (Goma, Bukavu) et affiliation de la procure de Bruxelles." },
        { year: "Présent", title: "Province Sainte Famille dynamique", description: "Plus de 18 communautés, sanctuaires majeurs (Kibeho, Kabuga, Ruhango), imprimerie Pallotti Presse, œuvres sociales et pastorales." }
      ]
    },
    vocations: {
      title: "Devenir Prêtre ou Frère Pallottin",
      invitation: "Tu ressens l'appel à servir le Christ dans l'esprit de saint Vincent Pallotti ? Rejoins la communauté des pères et frères pallottins pour être apôtre au cœur du monde contemporain.",
      contactPerson: "Père Eugène HAKIZIMANA (Chargé national des vocations)",
      contactEmail: "vocations@sac-psf.info"
    }
  },

  governance: {
    provincialCouncil: [
      {
        id: "gov-1",
        name: "Père Eugène NIYONZIMA",
        title: "Père",
        role: "Recteur Provincial",
        department: "Gouvernement Provincial",
        photoUrl: "https://sac-psf.info/storage/app/media/uploaded-files/PROV%202.jpg",
        bio: "Recteur Provincial de la Province Sainte Famille, garant de l'unité provinciale et de l'orientation pastorale et missionnaire."
      },
      {
        id: "gov-2",
        name: "Père Jean Pierre NSABIMANA",
        title: "Père",
        role: "Premier Consulteur",
        department: "Conseil Provincial",
        photoUrl: "https://sac-psf.info/storage/app/media/uploaded-files/7.jpg",
        bio: "Premier Consulteur, Curé de la Paroisse de Gikondo, Secrétaire Provincial pour les Missions et Coordinateur Socio-Caritatif de la FPF."
      },
      {
        id: "gov-3",
        name: "Père Ildéphonse BIZIMUNGU",
        title: "Père",
        role: "Consulteur",
        department: "Conseil Provincial",
        photoUrl: "https://sac-psf.info/storage/app/media/uploaded-files/fil.jpg",
        bio: "Consulteur Provincial, Recteur de la Communauté et Curé de la Paroisse de Kabuga."
      },
      {
        id: "gov-4",
        name: "Père Jean de Dieu KAMBALE MATHE",
        title: "Père",
        role: "Consulteur",
        department: "Conseil Provincial",
        photoUrl: "https://sac-psf.info/storage/app/media/uploaded-files/kambare.jpeg",
        bio: "Consulteur Provincial, Recteur de la communauté de Goma-Keshero (RDC), DAF au CPF et enseignant au Grand Séminaire de Buhimba."
      },
      {
        id: "gov-5",
        name: "Père Simon SAFARI BURHUNGANE",
        title: "Père",
        role: "Consulteur",
        department: "Conseil Provincial",
        photoUrl: "https://sac-psf.info/storage/app/media/uploaded-files/simon%202%20copy.jpg",
        bio: "Consulteur Provincial, Recteur de la communauté et Curé de la paroisse Sainte Faustine Kowalska de Buturande (Goma, RDC)."
      }
    ],

    administration: [
      {
        id: "adm-1",
        name: "Père Jackson NIYONSENGA BANZUBAZE",
        title: "Père",
        role: "Administrateur Provincial",
        department: "Administration Provinciale",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
        bio: "Gestion des affaires temporelles, des biens mobiliers et immobiliers de la Province Sainte Famille."
      },
      {
        id: "adm-2",
        name: "Père Patient POLEPOLE",
        title: "Père",
        role: "1er Administrateur Provincial Adjoint",
        department: "Administration Provinciale",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png"
      },
      {
        id: "adm-3",
        name: "Père Gaspard AYABAGABO",
        title: "Père",
        role: "2ème Administrateur Provincial Adjoint",
        department: "Administration Provinciale",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
        bio: "DAF au Centre Saint Vincent Pallotti Ltd et 2ème Administrateur Provincial Adjoint."
      }
    ],

    secretariat: [
      {
        id: "sec-1",
        name: "Père Patrick NSANZAMAHORO",
        title: "Père",
        role: "Secrétaire Provincial & Secrétaire du Recteur",
        department: "Secrétariat Provincial",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
        bio: "Secrétaire Provincial, Cérémoniaire Provincial adjoint et vicaire dominical."
      },
      {
        id: "sec-2",
        name: "Frère Jean-Marie Vianney NGENDAHIMANA",
        title: "Frère",
        role: "Notaire et Archiviste",
        department: "Secrétariat Provincial",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
        bio: "Notaire, archiviste provincial et Directeur de la Fondation Pallottine pour la Famille (F.P.F.)."
      },
      {
        id: "sec-3",
        name: "Père Patient KATEMBO KIOMA",
        title: "Père",
        role: "Webmaster & Économe",
        department: "Communication et Médias",
        photoUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
        bio: "Webmaster du site officiel, Économe de la communauté de Gikondo et vicaire dominical."
      }
    ]
  },

  heroSlides: [
    {
      id: "slide-1",
      title: "Pallottins de la PSF",
      subtitle: "Venez et rebâtissons les murailles de Jérusalem.",
      imageUrl: "/images/sanctuaries/ruhango.jpg"
    },
    {
      id: "slide-2",
      title: "P. Eugène Niyonzima, Recteur Provincial",
      subtitle: "Bienvenue sur le site officiel de la Province Pallottine de la Sainte Famille.",
      imageUrl: "/images/people/rector-eugene.jpg"
    },
    {
      id: "slide-3",
      title: "Keshero - R. D. Congo",
      subtitle: "Centre Pallottin de formation Genezareth.",
      imageUrl: "/images/slides/keshero.jpg"
    },
    {
      id: "slide-4",
      title: "Kabuga - Rwanda",
      subtitle: "Sanctuaire de la Miséricorde Divine.",
      imageUrl: "/images/sanctuaries/kabuga.jpg"
    },
    {
      id: "slide-5",
      title: "La Nouvelle Communauté de Kibeho",
      subtitle: "Au pied de Notre-Dame des Douleurs de Kibeho.",
      imageUrl: "/images/sanctuaries/kibeho.jpg"
    },
    {
      id: "slide-6",
      title: "Montereau - France",
      subtitle: "La Nouvelle Communauté Pallottine de Montereau.",
      imageUrl: "/images/slides/montereau.jpg"
    }
  ],

  communities: [
    // --- RWANDA ---
    {
      id: "rw-gikondo",
      name: "Communauté Sainte Famille de Gikondo (Maison Provinciale)",
      slug: "kigali-gikondo",
      country: "Rwanda",
      locality: "Gikondo, Kigali",
      diocese: "Archidiocèse de Kigali",
      poBox: "B.P. 1083 Kigali",
      isProvincialMotherHouse: true,
      description: "Siège central de la Province Missionnaire Sainte Famille (Rwanda, RDC, Belgique). Elle dessert trois grandes œuvres : les services généraux du gouvernement et de l'administration provinciale, la Paroisse Saint Vincent Pallotti de Gikondo et le Centre d'accueil Saint Vincent Pallotti Ltd. Elle abrite le bureau de la Caritas Pallottine et de la Fondation Pallottine pour la Famille (FPF).",
      imageUrl: "https://sac-psf.info/storage/app/media/uploaded-files/CENTRE%206.jpg",
      gallery: [
        "https://sac-psf.info/storage/app/media/uploaded-files/REF%20ET%20CUISINE.jpg",
        "https://sac-psf.info/storage/app/media/uploaded-files/CENTRE%202.jpg"
      ],
      keyWorks: [
        "Maison Provinciale & Secrétariat Général",
        "Paroisse Saint Vincent Pallotti de Gikondo",
        "Centre Saint Vincent Pallotti Ltd (Hôtellerie & Conférences)",
        "Caritas Pallottine & Fondation Pallottine pour la Famille (FPF)",
        "Revue « Communion »"
      ],
      members: [
        { name: "Père Eugène NIYONZIMA", role: "Recteur Provincial" },
        { name: "Père Jean de Dieu KASEREKA KANEFU", role: "Recteur de la Communauté, Directeur du Centre St Vincent Pallotti Ltd, Chargé d’audit interne" },
        { name: "Père Jean Pierre NSABIMANA", role: "Vice-Recteur, Curé de la Paroisse de Gikondo, Secrétaire aux Missions, Coordinateur Socio-Caritatif FPF" },
        { name: "Père Jackson NIYONSENGA BANZUBAZE", role: "Administrateur Provincial" },
        { name: "Père Patrick NSANZAMAHORO", role: "Secrétaire Provincial, Secrétaire du Recteur Provincial, Vicaire dominical" },
        { name: "Frère Jean-Marie Vianney NGENDAHIMANA", role: "Notaire, Archiviste provincial et Directeur de la F.P.F." },
        { name: "Père Patient KATEMBO KIOMA", role: "Économe de la Communauté, Vicaire dominical, Webmaster" },
        { name: "Père Gaspard AYABAGABO", role: "DAF Centre Saint Vincent Pallotti Ltd, 2ème Administrateur Provincial Adjoint" },
        { name: "Père Andrzej JAKACKI", role: "Responsable de la Revue « Communion » au Rwanda, Vicaire dominical" },
        { name: "Père Patient POLEPOLE", role: "1er Administrateur Provincial Adjoint" },
        { name: "Père Pascal HABINEZA", role: "Résident" },
        { name: "Fratri Emmanuel NIYIZURUGERO", role: "Séminariste en stage annuel" }
      ]
    },
    {
      id: "rw-kabuga",
      name: "Communauté Immaculée Conception & Sanctuaire de Kabuga",
      slug: "kabuga",
      country: "Rwanda",
      locality: "Kabuga, Kigali",
      diocese: "Archidiocèse de Kigali",
      poBox: "B.P. 1083 Kigali",
      description: "Haut lieu de spiritualité et de pèlerinage, la communauté de Kabuga anime la Paroisse Sainte Famille / Immaculée Conception ainsi que le Sanctuaire de la Miséricorde Divine et le Centre pastoral Saint Jean-Paul II.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0b3/116/5d80b3116276e768109464.jpg",
      keyWorks: [
        "Sanctuaire de la Miséricorde Divine de Kabuga",
        "Paroisse de Kabuga",
        "Centre Saint Jean-Paul II",
        "Département Famille et Vie de la FPF"
      ],
      members: [
        { name: "Père Ildéphonse BIZIMUNGU", role: "Recteur de la communauté et Curé de la paroisse" },
        { name: "Père Alphonse NDAGIJIMANA", role: "Vice-Recteur de la communauté et Recteur du Sanctuaire de la Miséricorde Divine" },
        { name: "Père Gilbert KAZINGUFU SEMASAKA", role: "Chapelain au Sanctuaire, Vice-Directeur FPF, Coordinateur Département Famille et Vie" },
        { name: "Père Germain BOSENIKO KAMARA", role: "DAF de la FPF, 2ème vicaire et Chargé de l'animation vocationnelle" },
        { name: "Père Jean-Delphin NYONGERA", role: "Économe de la communauté et 1er vicaire à la paroisse" }
      ]
    },
    {
      id: "rw-kibeho",
      name: "Communauté Saint Michel Archange de Kibeho",
      slug: "kibeho",
      country: "Rwanda",
      locality: "Kibeho, Nyaruguru",
      diocese: "Diocèse de Gikongoro",
      description: "Au cœur du lieu sacré des apparitions mariales reconnues de Kibeho, la communauté pallottine est au service direct des pèlerins du monde entier au Sanctuaire Marial Notre-Dame des Douleurs.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5f5/ca9/e74/5f5ca9e746e27416438769.jpg",
      keyWorks: [
        "Sanctuaire Marial « Notre-Dame des Douleurs » de Kibeho",
        "Accueil et accompagnement pastoral des pèlerins",
        "KPC Ltd (Kibeho Pallotti Company)",
        "Animation mariale et vocationnelle"
      ],
      members: [
        { name: "Père François HARELIMANA", role: "Recteur de la Communauté, Recteur du Sanctuaire Marial Notre-Dame des Douleurs de Kibeho" },
        { name: "Père Jean Pierre GATETE", role: "Vice-Recteur, Chapelain au Sanctuaire, Chargé de l'animation vocationnelle" },
        { name: "Père Sylvestre MBARUSHIMANA", role: "Directeur de KPC Ltd, Responsable de l'ACR, animateur au Sanctuaire" },
        { name: "Père Jean Bosco NIZEYIMANA NSEKAMBIZI", role: "DAF de KPC Ltd, Économe de la communauté, Chapelain adjoint au Sanctuaire" },
        { name: "Fratri Olivier NSHIMIYIMANA", role: "Séminariste en stage annuel" }
      ]
    },
    {
      id: "rw-ruhango",
      name: "Communauté Jésus Miséricordieux de Ruhango",
      slug: "ruhango",
      country: "Rwanda",
      locality: "Ruhango",
      diocese: "Diocèse de Kabgayi",
      description: "Centre majeur de prière, de dévotion et d'adoration eucharistique perpétuelle, rassemblant des milliers de pèlerins chaque premier dimanche pour les grandes prières de guérison et de Miséricorde.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0ad/dcb/5d80addcb5c2c108300875.jpg",
      keyWorks: [
        "Sanctuaire Jésus Miséricordieux de Ruhango",
        "Paroisse de Ruhango",
        "Chapelle d'Adoration Perpétuelle",
        "Prière de guérison et pèlerinages mensuels"
      ],
      members: [
        { name: "Père Janvier GASORE", role: "Vice-Recteur de la Communauté et Chapelain au Sanctuaire Jésus Miséricordieux" },
        { name: "Père Dominique NGENDAHAYO TUMAINI", role: "Curé de la Paroisse de Ruhango et Responsable de l'ACR" },
        { name: "Père Vincent NDUWAYO BIMENYIMANA", role: "Économe de la Communauté, Vicaire paroissial, Chargé de l'animation vocationnelle" }
      ]
    },
    {
      id: "rw-butare",
      name: "Maison de Formation « NAZARETH » de Butare",
      slug: "butare",
      country: "Rwanda",
      locality: "Huye (Butare)",
      diocese: "Diocèse de Butare",
      poBox: "B.P. 650 Butare",
      description: "Maison d'initiation et de noviciat (Période d'Introduction) des futurs prêtres et frères pallottins, assurant le discernement spirituel et le suivi des séminaristes au Philosophicum de Kabgayi.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Noviciat & Période d'Introduction",
        "Accompagnement spirituel et formation des novices",
        "Suivi des étudiants au Grand Séminaire Philosophicum"
      ],
      members: [
        { name: "Père Télesphore NIYITEGEKA", role: "Recteur de la communauté, Directeur de la Période d’Introduction et des Étudiants au Philosophicum de Kabgayi" },
        { name: "Père Eugène HAKIZIMANA", role: "Père Spirituel, Économe et Chargé des vocations au niveau national" },
        { name: "Père Jean Pierre MUNYANEZA", role: "Confesseur des Novices (Résidant à Kibilizi)" },
        { name: "Fratri Olivier SIBOMANA", role: "Séminariste en stage annuel" }
      ]
    },
    {
      id: "rw-kinoni",
      name: "Communauté Saint Joseph de Kinoni",
      slug: "kinoni",
      country: "Rwanda",
      locality: "Kinoni, Burera",
      diocese: "Diocèse de Ruhengeri",
      description: "Paroisse rurale dynamique célébrée pour son rôle de levier spirituel et socio-économique, moteur de développement et phare d'évangélisation dans le nord du pays.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6ab/b96/135/6abb96135eb99204780998.jpg",
      keyWorks: [
        "Paroisse Saint Joseph de Kinoni",
        "Centrale de Nkumba",
        "Éducation et pastorale de proximité",
        "Promotion du développement local"
      ],
      members: [
        { name: "Père Wenceslas TEGERA", role: "Recteur de la communauté et Curé de la Paroisse Saint Joseph de Kinoni" },
        { name: "Père Isaac IZATEGEKA", role: "Économe de la communauté, Vicaire et Chargé des vocations" },
        { name: "Père Jean Pierre KAMARA NGABO", role: "Vicaire à la paroisse" },
        { name: "Frère Zdzisław OLEJKO", role: "Aide au service des pèlerinages et maintenance générale" }
      ]
    },
    {
      id: "rw-pallotti-presse",
      name: "Communauté Saint Maximilien Kolbe & Pallotti Presse",
      slug: "pallotti-presse",
      country: "Rwanda",
      locality: "Gikondo, Kigali",
      diocese: "Archidiocèse de Kigali",
      poBox: "B.P. 863 Kigali",
      description: "Grande œuvre médiatique et éditoriale de la province : imprimerie moderne, diffusion de la revue historique pour enfants Hobe, publications catéchétiques et apostoliques.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Imprimerie & Édition Pallotti Presse Ltd",
        "Revue pour enfants « Hobe »",
        "Publications catholiques et manuels liturgiques",
        "Pastorale des communications sociales"
      ],
      members: [
        { name: "Père Jean-Paul NYABYENDA", role: "Recteur de la communauté, Directeur de Pallotti Presse Ltd, Vice-responsable ACR" },
        { name: "Père Faustin IRAGENA CAMARADE", role: "Vice-Recteur de la communauté, Vicaire paroissial et Responsable du journal Hobe" },
        { name: "Père Emmanuel TWAGIRIMANA", role: "Vicaire à Gikondo et Responsable adjoint de Hobe" },
        { name: "Diacre Casimir TUYISENGE", role: "Économe, DAF, Chef de Production à Pallotti Presse et vicaire dominical" }
      ]
    },

    // --- R. D. CONGO ---
    {
      id: "rdc-keshero",
      name: "Communauté du Cénacle & Centre Pallotti de Formation Genezareth",
      slug: "goma-keshero",
      country: "R.D. Congo",
      locality: "Keshero, Goma",
      diocese: "Diocèse de Goma",
      description: "Centre de référence pour la formation des leaders, des laïcs et des clercs au bord du lac Kivu. Le CPF Genezareth est un carrefour spirituel, intellectuel et pastoral réputé à Goma.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0b2/733/5d80b2733ddb4198715600.jpg",
      keyWorks: [
        "Centre Pallotti de Formation (CPF) Genezareth",
        "Sessions bibliques et retraites spirituelles",
        "Enseignement au Grand Séminaire de Buhimba",
        "Apostolat universitaire"
      ],
      members: [
        { name: "Père Jean de Dieu KAMBALE MATHE", role: "Recteur de la communauté, DAF au CPF, Enseignant au Grand Séminaire de Buhimba" },
        { name: "Père Désiré BAKANGANA KIYOMBO", role: "Vice-Recteur de la communauté, Directeur du CPF Genezareth" },
        { name: "Père Jerzy Eugeniusz KOŻUCH", role: "Animateur spirituel au CPF" },
        { name: "Père Jean-Népomucène NGIRABAKUNZI", role: "Animateur au CPF et Professeur d'université à Goma" },
        { name: "Fratri Jean de Dieu IMANIZABAYO", role: "Intendant de la communauté" }
      ]
    },
    {
      id: "rdc-buturande",
      name: "Communauté Bienheureux Isidore Bakanja de Buturande",
      slug: "goma-buturande",
      country: "R.D. Congo",
      locality: "Rutshuru / Buturande, Nord-Kivu",
      diocese: "Diocèse de Goma",
      description: "Paroisse frontalière Sainte Faustine Kowalska au service des populations éprouvées du Nord-Kivu, avec un vibrant témoignage d'espérance, de paix et de Miséricorde.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Paroisse Sainte Faustine Kowalska de Buturande",
        "Apostolat de réconciliation et de charité",
        "Soutien aux déplacés et pastorale des jeunes",
        "Animation vocationnelle"
      ],
      members: [
        { name: "Père Simon SAFARI BURHUNGANE", role: "Recteur de la communauté et Curé de la Paroisse Sainte Faustine Kowalska" },
        { name: "Père Jerzy KOTWA", role: "Vice-Recteur de la communauté et Vicaire paroissial" },
        { name: "Père Jean Pierre SHAMAVU", role: "Économe de la communauté et Vicaire" },
        { name: "Père Ascension NKURIKIYIMANA", role: "Vicaire paroissial et Chargé de l'animation vocationnelle" }
      ]
    },
    {
      id: "rdc-karhale",
      name: "Communauté Saint Boniface & Paroisse Saint Vincent Pallotti de Karhale",
      slug: "bukavu-karhale",
      country: "R.D. Congo",
      locality: "Karhale, Bukavu",
      diocese: "Archidiocèse de Bukavu",
      description: "Érigée canoniquement le 20 mars 2017 sur les hauteurs de Bukavu, la paroisse Saint Vincent Pallotti de Karhale offre un accompagnement paroissial chaleureux, une présence auprès des étudiants et le soutien de l'Adoption du Cœur.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Paroisse Saint Vincent Pallotti de Karhale",
        "Œuvre sociale « Adoption du Cœur »",
        "Accompagnement des étudiants en Philosophie au Philosophat Ruzizi",
        "Pastorale des jeunes et des familles de Bukavu"
      ],
      members: [
        { name: "Père Benjamin BAHASHI", role: "Recteur de la communauté, Vicaire paroissial, Responsable d'Adoption du Cœur et des étudiants en Philosophie" },
        { name: "Père Désiré Ruvamwabo NZABONIMPA", role: "Vice-Recteur et Curé de la Paroisse Saint Vincent Pallotti" },
        { name: "Père Hyacinthe NIYONZIMA NDYANABO", role: "Économe de la communauté et Vicaire aux affaires financières" },
        { name: "Fratri Emmanuel VUGANEZA", role: "Séminariste en stage annuel" }
      ]
    },
    {
      id: "rdc-keshero-postulat",
      name: "Maison de Formation Saint Vincent Pallotti (Postulat de Keshero)",
      slug: "maison-de-formation-st-vincent-pallotti",
      country: "R.D. Congo",
      locality: "Keshero, Goma",
      diocese: "Diocèse de Goma",
      poBox: "B.P. 50 Goma / B.P. 12 Gisenyi",
      description: "Maison d'accueil et d'initiation première (Postulat) pour les candidats congolais et des pays voisins désireux d'embrasser la consécration pallottine.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Postulat Pallottin",
        "Initiation humaine, chrétienne et charismatique",
        "Préparation aux étapes du noviciat"
      ],
      members: [
        { name: "Père Antoine MUNYANEZA", role: "Recteur, Responsable du Postulat et Vicaire dominical à Karhale" },
        { name: "Fratri Héritier BABONAMPOZE", role: "Intendant de la communauté" }
      ]
    },

    // --- BELGIQUE ---
    {
      id: "be-bruxelles",
      name: "Procure Missionnaire & Communautés de Bruxelles",
      slug: "bruxelles",
      country: "Belgique",
      locality: "Bruxelles",
      diocese: "Archidiocèse de Malines-Bruxelles",
      address: "408, Avenue Rogier, 1030 Bruxelles",
      description: "Pont historique entre les œuvres de la Province Sainte Famille en Afrique et les bienfaiteurs européens. La procure assure l'animation missionnaire, la coordination européenne et dessert les unités pastorales de Meiser et Sainte Thérèse d'Avila.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Procure Missionnaire Pallottine de Bruxelles (Avenue Rogier)",
        "Unité Pastorale de Meiser",
        "Communauté Sainte Thérèse d’Avila",
        "Coordination provinciale en Europe"
      ],
      members: [
        { name: "Père Abraham NYANGE", role: "Recteur de la communauté, Responsable de la Procure Missionnaire et Co-responsable Unité Pastorale de Meiser" },
        { name: "Père Théodore BAHISHA", role: "Vice-Recteur, Responsable Unité Pastorale de Meiser, Coordinateur des activités missionnaires PSF en Europe" },
        { name: "Père Eric NIYIKIZA", role: "Économe de la communauté, Étudiant à l'UCLouvain et vicaire paroissial" }
      ]
    },
    {
      id: "be-namur",
      name: "Communauté Saint Vincent Pallotti de Namur (Sombreffe)",
      slug: "namur",
      country: "Belgique",
      locality: "Sombreffe, Province de Namur",
      diocese: "Diocèse de Namur",
      description: "Prêtres pallottins au service pastoral direct des clochers et des paroisses de l'Unité Pastorale de Sombreffe dans le diocèse de Namur.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Administration pastorale de l'Unité de Sombreffe",
        "Célébrations liturgiques, baptêmes, mariages et catéchèse",
        "Présence apostolique pallottine en Wallonie"
      ],
      members: [
        { name: "Père Jean-Bosco HABYARIMANA", role: "Recteur de la communauté et Administrateur de l'Unité Pastorale de Sombreffe" },
        { name: "Père Stanislas MOSTEK", role: "Vicaire dans l'Unité Pastorale de Sombreffe" },
        { name: "Père Juvénal-Faustin NDAGIJIMANA", role: "Vicaire dans l'Unité Pastorale de Sombreffe" }
      ]
    },

    // --- MISSION EN EUROPE & MONDE ---
    {
      id: "eu-france",
      name: "Missions en France (Osny, Montereau, Vaires)",
      slug: "france",
      country: "Mission en Europe et Monde",
      locality: "Osny (Pontoise), Montereau (Meaux), Vaires",
      diocese: "Diocèses de Pontoise, Meaux et Créteil",
      description: "Présence active dans trois diocèses de la région parisienne : Osny (Diocèse de Pontoise), Maison Pallotti de Montereau (Collégiale Notre-Dame-et-Saint-Loup) et Mission pastorale de Vaires.",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5f5/cab/796/5f5cab796db6e246520328.jpeg",
      keyWorks: [
        "Communauté Saint Joseph d'Osny (Paroisse d'Osny)",
        "Maison Pallotti de Montereau (Collégiale Notre-Dame-et-Saint-Loup)",
        "Paroisse Sainte Anne de Polangis (Joinville-le-Pont)",
        "Mission pastorale de Vaires"
      ],
      members: [
        { name: "Père Jean-Népomuscène NIMWIZERE", role: "Recteur de la communauté d'Osny et Curé d'Osny" },
        { name: "Père Philippe NIYIBIZI KAJO", role: "Économe de la communauté d'Osny et vicaire" },
        { name: "Père Adam PACUŁA", role: "Curé de la Paroisse Sainte Anne de Polangis (Joinville-le-Pont, Créteil)" },
        { name: "Père Jules-Eusèbe MUTABARUKA", role: "Recteur de la communauté de Montereau et Prêtre référent de la Collégiale" },
        { name: "Père Ferdinand SAFARI MBITSE", role: "Prêtre référent et économe de Montereau" },
        { name: "Père Désiré BIGIRIMANA MWEMEZI", role: "Prêtre référent à Montereau" },
        { name: "Père Chrysante RWASA", role: "Responsable de la Mission et Prêtre référent à Vaires" },
        { name: "Père Aimable IRAKARAMA", role: "Étudiant à l'Institut Catholique de Paris et pasteur à Vaires" },
        { name: "Père Christian NYAKASANE MUHANANO", role: "Prêtre référent et économe de la Mission de Vaires" }
      ]
    },
    {
      id: "eu-italie",
      name: "Missions en Italie (Latina Stella Maris & Rome Généralat)",
      slug: "italie",
      country: "Mission en Europe et Monde",
      locality: "Latina, Rome",
      diocese: "Diocèse de Latina / Diocèse de Rome",
      description: "Communauté Bienheureuse Elisabetta Sanna à Latina (Paroisse Stella Maris) et confrères engagés au service du Généralat à Rome et de l'enseignement universitaire pontifical.",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png",
      keyWorks: [
        "Paroisse Stella Maris de Latina",
        "Maison Généralice Pallottine (Piazza San Vincenzo Pallotti, Rome)",
        "Enseignement à l'Université Pontificale Grégorienne",
        "Études supérieures spécialisées (Latran, Grégorienne, Urbanienne)"
      ],
      members: [
        { name: "Père Jérôme NIYONGABO", role: "Recteur communauté Bse Elisabetta Sanna, Administrateur Stella Maris, Doctorant en Droit (Latran)" },
        { name: "Père Honoré BAHIRE NTIBENDA", role: "Vice-Recteur, Vicaire et Étudiant à la Grégorienne" },
        { name: "Père Norbert SEBUTITIRA NSENGIYUMVA", role: "Économe, Vicaire et Étudiant en Missiologie à l'Urbanienne" },
        { name: "Père Romuald UZABUMWANA", role: "Professeur à l'Université Pontificale Grégorienne et service pastoral à Velletri (Rome)" }
      ]
    }
  ],

  articles: [
    {
      id: "art-1",
      title: "AINSI FINISSAIT LE MOIS DE SEPTEMBRE 2026",
      slug: "ainsi-finissait-le-mois-de-septembre-2026",
      category: "bulletin-dinformation",
      categoryLabel: "Bulletin d'information",
      date: "29/09/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6ab/b96/135/6abb96135eb99204780998.jpg",
      featured: true,
      tags: ["Kinoni", "Diocèse de Ruhengeri", "Évangélisation", "Histoire"],
      excerpt: "Lors de son allocution, Mgr Vincent Harolimana, Évêque du Diocèse de Ruhengeri a décrit la paroisse Kinoni comme une lumière qui dissipe les ténèbres et comme un moteur de développement, en s’appuyant sur les diaires de Rwaza rédigées lors de la fondation de Kinoni.",
      content: `Lors de son allocution mémorable, Son Excellence Monseigneur Vincent Harolimana, Évêque du Diocèse de Ruhengeri, a salué avec émotion et reconnaissance le travail apostolique des Pères Pallottins à Kinoni.

Décrivant la paroisse Kinoni comme « une lumière qui dissipe les ténèbres et un moteur de développement intégral », l'évêque s'est appuyé sur les diaires de Rwaza rédigées lors des débuts de l'implantation. Il a mis en exergue la collaboration féconde entre les missionnaires et les prêtres autochtones, soulignant l'importance de préserver ce dynamisme pastoral pour les générations futures.`
    },
    {
      id: "art-2",
      title: "JUBILATE DEO, CANTATE DOMINO",
      slug: "jubilate-deo-cantate-domino",
      category: "province-sainte-famille",
      categoryLabel: "Province Sainte Famille",
      date: "07/09/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6a9/f24/c8a/6a9f24c8aba00494474078.jpeg",
      featured: true,
      tags: ["Jubilés", "Action de Grâce", "Consécration"],
      excerpt: "Au cours de ces deux derniers mois, la Province Sainte-Famille a célébré dans l'allégresse et l'action de grâce plusieurs jubilés d'ordination et d'engagement de ses membres dévoués.",
      content: `La Province Sainte-Famille a vécu des journées intenses de fête et de louange au Seigneur à travers la célébration des jubilés d'argent et d'or de confrères ayant consacré leur vie entière à la suite du Christ dans la Société de l'Apostolat Catholique. Parents, fidèles et amis de la famille pallottine se sont réunis nombreux pour rendre grâce.`
    },
    {
      id: "art-3",
      title: "EXPOSÉ DE SOUTENANCE DU PÈRE FAUSTIN-JUVÉNAL NDAGIJIMANA",
      slug: "expose-de-soutenance-du-pere-faustin-juvenal-ndagijimana",
      category: "ouvrages-des-confreres",
      categoryLabel: "Ouvrages des Confrères",
      date: "04/08/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6a9/081/74e/6a908174e98ce166930430.png",
      featured: false,
      tags: ["Thèse", "Recherche", "Théologie"],
      excerpt: "Brillante soutenance de doctorat du Père Faustin-Juvénal Ndagijimana, SAC, couronnant des années de recherche théologique et pastorale au bénéfice de l'Église et de la Société.",
      content: `Le Père Faustin-Juvénal Ndagijimana, SAC, membre de la Province Sainte-Famille actuellement en service pastoral en Belgique, a soutenu brillamment sa dissertation doctorale devant un jury d'éminents théologiens et professeurs. Les confrères lui adressent leurs chaleureuses félicitations.`
    },
    {
      id: "art-4",
      title: "ORDINATION SACERDOTALE DES PÈRES ÉLIE HAKIZIMANA ET PASCAL MUGAMBIRA",
      slug: "ordination-sacerdotale-des-peres-elie-hakizimana-et-pascal-mugambira",
      category: "bulletin-dinformation",
      categoryLabel: "Bulletin d'information",
      date: "18/07/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6a5/bd0/f41/6a5bd0f4194ec604680899.jpg",
      featured: false,
      tags: ["Ordination", "Sacerdoce", "Vocation"],
      excerpt: "Grande joie pour toute la famille pallottine : ordination sacerdotale des diacres Élie Hakizimana et Pascal Mugambira, nouveaux ouvriers dans la moisson du Seigneur.",
      content: `Par l'imposition des mains et la prière consécratoire, les diacres Élie Hakizimana et Pascal Mugambira ont été ordonnés prêtres pour l'éternité. Entourés de leurs familles, du Recteur Provincial et de dizaines de confrères venus du Rwanda et de la RDC, ils ont manifesté leur joie d'être envoyés comme serviteurs de l'Évangile.`
    },
    {
      id: "art-5",
      title: "Publication Officielle des Nominations des Confrères 2026-2027",
      slug: "publication-officielle-des-nominations-des-confreres-2026-2027",
      category: "communiques",
      categoryLabel: "Communiqués",
      date: "29/06/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6a4/2ec/c9e/6a42ecc9ee505764440096.png",
      featured: false,
      tags: ["Nominations", "Gouvernance", "Conseil Provincial"],
      excerpt: "Le Recteur Provincial, de concert avec son Conseil, communique la liste officielle des nominations et affectations pastorales des confrères de la Province Sainte-Famille pour l'année 2026-2027.",
      content: `Le Conseil Provincial, réuni en session ordinaire à la Maison Provinciale de Gikondo, a procédé aux nominations canoniques et aux affectations des prêtres, diacres et stagiaires dans les communautés et œuvres du Rwanda, de la République Démocratique du Congo, de la Belgique et des missions européennes.`
    },
    {
      id: "art-6",
      title: "RENCONTRE INTERNATIONALE DES FORMATEURS PALLOTTINS (KIGALI, RWANDA)",
      slug: "rencontre-internationale-des-formateurs-pallottins-kigali-rwanda-du-16-au-23-mai-2026",
      category: "generalat",
      categoryLabel: "Généralat",
      date: "17/05/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/6a0/a2d/476/6a0a2d476d251663841336.jpeg",
      featured: false,
      tags: ["Formation", "International", "Généralat", "Kigali"],
      excerpt: "Kigali a abrité la rencontre internationale rassemblant les directeurs de noviciat et maîtres des étudiants pallottins venus des cinq continents.",
      content: `Pendant une semaine de réflexion féconde au Centre Saint Vincent Pallotti de Gikondo, les formateurs pallottins ont échangé sur les défis de la formation initiale à la lumière du Ratio Formationis et des réalités contemporaines de la jeunesse.`
    },
    {
      id: "art-7",
      title: "L'Apostolat des Laïcs selon Saint Vincent Pallotti et l'UAC",
      slug: "lapostolat-des-laics-selon-saint-vincent-pallotti-et-luac",
      category: "union-de-lapostolat-catholique",
      categoryLabel: "Union de l'Apostolat Catholique",
      date: "22/01/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0ad/dcb/5d80addcb5c2c108300875.jpg",
      featured: false,
      tags: ["UAC", "Laïcs", "Spiritualité", "Vincent Pallotti"],
      excerpt: "À l'occasion de la solennité de notre saint Fondateur, les membres de l'Union de l'Apostolat Catholique se sont réunis pour méditer sur l'appel universel à la sainteté et à la mission.",
      content: `L'Union de l'Apostolat Catholique (UAC) rassemble prêtres, frères, religieuses et fidèles laïcs dans une même ferveur apostolique. Saint Vincent Pallotti a prophétiquement compris que l'évangélisation du monde requiert l'engagement conjoint de chaque baptisé. Lors des célébrations à Kigali, Butare et Goma, les membres de l'UAC ont renouvelé leur engagement apostolique.`
    },
    {
      id: "art-8",
      title: "Visite Canonique et Pastorale dans les Communautés du Nord-Kivu",
      slug: "visite-canonique-et-pastorale-dans-les-communautes-du-nord-kivu",
      category: "province-sainte-famille",
      categoryLabel: "Province Sainte Famille",
      date: "14/04/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0b2/733/5d80b2733ddb4198715600.jpg",
      featured: false,
      tags: ["Visite Canonique", "Goma", "Keshero", "Buturande", "Pastorale"],
      excerpt: "Le Recteur Provincial et les consulteurs ont effectué une visite fraternelle auprès des confrères et des communautés de Goma et Buturande.",
      content: `Malgré les contextes difficiles dans l'est de la République Démocratique du Congo, les confrères de Keshero et de Buturande demeurent des témoins inébranlables de l'amour du Christ et de la consolation mariale. La visite canonique a permis d'encourager les équipes pastorales et d'évaluer les œuvres d'accueil et d'éducation.`
    },
    {
      id: "art-9",
      title: "Méditation spirituelle : L'Amour du Christ nous presse (Caritas Christi Urget Nos)",
      slug: "meditation-spirituelle-lamour-du-christ-nous-presse",
      category: "reflexions-et-vie",
      categoryLabel: "Réflexions et Vie",
      date: "10/03/2026",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5e5/3c2/239/5e53c22393edd481881896.jpg",
      featured: false,
      tags: ["Méditation", "Caritas Christi", "Prière", "Vie Chrétienne"],
      excerpt: "Méditation sur la devise paulinienne chère à Saint Vincent Pallotti : comment laisser l'amour du Sauveur consumer notre quotidien et vivifier nos communautés.",
      content: `« Caritas Christi urget nos » (2 Cor 5,14) : ces paroles ne sont pas une simple devise institutionnelle, mais le souffle même de notre vocation. Être pallottin aujourd'hui, c'est se laisser transformer intérieurement par la miséricorde infinie pour devenir des ponts d'espérance et de réconciliation.`
    }
  ],

  popularArticles: [
    {
      id: "pop-1",
      title: "Session des Directeurs, des DAFs et des Comptables des œuvres Pallottines de la PSF à Gikondo",
      date: "01/03/2020",
      slug: "session-des-directeurs-et-des-dafs-et-des-comptables-des-oeuvres-pallottines-de-la-psf-gikondo",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5e5/c2d/5f7/5e5c2d5f7739d511912139.jpg"
    },
    {
      id: "pop-2",
      title: "Info-PSF n°11 - Édition Spéciale",
      date: "22/03/2020",
      slug: "info-psf-n11-mars-2020",
      imageUrl: "https://www.sac-psf.info/themes/rusty-rustybootstrap4blank/assets/images/default.png"
    },
    {
      id: "pop-3",
      title: "Apôtres en mission : L'héritage vivant de Vincent Pallotti",
      date: "24/02/2020",
      slug: "apotres-en-mission",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/5e5/3c2/239/5e53c22393edd481881896.jpg"
    },
    {
      id: "pop-4",
      title: "Lancement officiel de la visite canonique dans la Communauté Saint Joseph / Kinoni",
      date: "17/05/2021",
      slug: "lancement-officiel-de-la-visite-canonique-dans-la-communaute-saint-josephkinoni",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/60a/2b6/a89/60a2b6a89b4b5313639917.jpeg"
    },
    {
      id: "pop-5",
      title: "Ordination sacerdotale de cinq Diacres à Goma (RDC)",
      date: "29/06/2021",
      slug: "ordination-sacerdotale-de-cinq-diacres-goma",
      imageUrl: "https://www.sac-psf.info/storage/app/uploads/public/60d/b6e/003/60db6e003bd47777492936.jpeg"
    }
  ],

  assemblies: [
    {
      id: "ass-5",
      title: "Ve Assemblée Provinciale Ordinaire",
      slug: "ve-assemblee-provinciale",
      date: "Octobre 2024",
      location: "Centre Saint Vincent Pallotti, Gikondo (Kigali)",
      theme: "« Venez et rebâtissons les murailles de Jérusalem » (Ne 2, 17)",
      summary: "Rassemblement statutaire de tous les délégués des communautés du Rwanda, de RDC et de Belgique pour fixer les orientations majeures du sexennat.",
      keyPoints: [
        "Renforcement de la vie communautaire et de la communion fraternelle",
        "Pérennisation et autonomie financière des œuvres éducatives et de santé",
        "Promotion des vocations et formation approfondie au charisme pallottin",
        "Accompagnement pastoral des familles et des laïcs dans le cadre de l'UAC"
      ]
    },
    {
      id: "ass-4",
      title: "IVe Assemblée Provinciale Ordinaire",
      slug: "ive-assemblee-provinciale",
      date: "Septembre 2018",
      location: "Maison Provinciale de Gikondo",
      theme: "« Raviver la Foi et rallumer la Charité dans la région des Grands Lacs »",
      summary: "Bilan des œuvres apostoliques, célébration du jubilé des communautés et restructuration des départements de gestion temporelle.",
      keyPoints: [
        "Consolidation de la mission au Sanctuaire de Kibeho et Kabuga",
        "Développement de Pallotti Presse et extension de la revue Hobe",
        "Création de la Paroisse Saint Vincent Pallotti de Karhale à Bukavu",
        "Coordination renforcée avec la Procure de Bruxelles pour les missions"
      ]
    },
    {
      id: "ass-local",
      title: "Assemblées Locales & Préparatoires",
      slug: "assemblees-locales",
      date: "Annuelle / Pré-Capitulaire",
      location: "Toutes les communautés de la Province",
      theme: "« Écoute, discernement et renouveau spirituel »",
      summary: "Consultation à la base permettant à chaque communauté locale d'évaluer sa marche spirituelle, sa gouvernance interne et ses défis missionnaires.",
      keyPoints: [
        "Évaluation fraternelle de la vie en communauté et de la prière commune",
        "Rapports financiers et gestion transparente des biens temporels",
        "Implication des chrétiens laïcs dans les conseils pastoraux paroissiaux"
      ]
    }
  ],

  secretariatsList: [
    {
      id: "sec-spa",
      name: "Secrétariat Provincial pour l'Apostolat (SPA)",
      code: "SPA",
      leader: "Père Jean Pierre NSABIMANA",
      leaderRole: "Secrétaire Provincial pour l'Apostolat & Consulteur",
      description: "Organe de concertation, d'animation et de suivi de l'ensemble des initiatives pastorales, caritatives et missionnaires de la Province.",
      missions: [
        "Coordination des projets pastoraux dans les paroisses et sanctuaires",
        "Promotion de l'apostolat des laïcs et accompagnement des groupes de prière UAC",
        "Supervision des œuvres caritatives et de la Fondation Pallottine pour la Famille (FPF)",
        "Dialogue avec les commissions diocésaines de pastorale"
      ]
    },
    {
      id: "sec-formation",
      name: "Secrétariat Provincial pour la Formation",
      code: "SPF",
      leader: "Père Télesphore NIYITEGEKA",
      leaderRole: "Directeur de la Formation & Recteur du Noviciat Nazareth",
      description: "Garant du respect du Ratio Formationis pallottin pour les candidats, novices, séminaristes étudiants et pour la formation permanente des confrères.",
      missions: [
        "Accompagnement du postulat de Keshero (RDC) et du noviciat de Butare (Rwanda)",
        "Suivi académique des étudiants en philosophie (Kabgayi, Ruzizi) et théologie",
        "Organisation des retraites annuelles et sessions de ressourcement théologique",
        "Lien avec le Secrétariat Général pour la Formation à Rome"
      ]
    },
    {
      id: "sec-missions",
      name: "Secrétariat Provincial pour les Missions & Procures",
      code: "SPM",
      leader: "Père Abraham NYANGE",
      leaderRole: "Responsable de la Procure de Bruxelles & Délégué aux Missions",
      description: "Assure le pont de solidarité entre les communautés de la région des Grands Lacs et les partenaires d'Europe et du monde.",
      missions: [
        "Gestion et coordination de la Procure Missionnaire de Bruxelles",
        "Soutien aux projets de développement communautaire et éducatifs",
        "Suivi des confrères envoyés en mission en France, Italie et Belgique",
        "Animation missionnaire et collecte d'intentions de messe pour les œuvres"
      ]
    }
  ],

  commissionsList: [
    {
      id: "com-eco",
      name: "Commission Économique et Financière",
      president: "Père Jackson NIYONSENGA BANZUBAZE",
      presidentRole: "Administrateur Provincial",
      description: "Veille à la bonne gestion des ressources matérielles, à la transparence comptable et à la soutenabilité financière des œuvres.",
      members: [
        "Père Jackson NIYONSENGA BANZUBAZE",
        "Père Gaspard AYABAGABO",
        "Père Patient POLEPOLE",
        "Frère Jean-Marie Vianney NGENDAHIMANA"
      ],
      responsibilities: [
        "Élaboration et contrôle budgétaire de la Province et des communautés",
        "Audit interne périodique des centres d'accueil et des imprimeries",
        "Gestion du patrimoine foncier et des investissements d'avenir"
      ]
    },
    {
      id: "com-jur",
      name: "Commission Juridique et Canonique",
      president: "Père Jérôme NIYONGABO",
      presidentRole: "Doctorant en Droit Canonique",
      description: "Conseil juridique auprès du Recteur Provincial et du Conseil pour les questions de droit civil, canonique et statutaire.",
      members: [
        "Père Jérôme NIYONGABO",
        "Père Patrick NSANZAMAHORO",
        "Frère Jean-Marie Vianney NGENDAHIMANA (Notaire)"
      ],
      responsibilities: [
        "Conformité canonique des actes de gouvernement et des contrats",
        "Veille sur les personnalités juridiques au Rwanda, en RDC et en Belgique",
        "Actualisation des règlements intérieurs et statuts provinciaux"
      ]
    },
    {
      id: "com-hist",
      name: "Commission Historique et de Documentation",
      president: "Frère Jean-Marie Vianney NGENDAHIMANA",
      presidentRole: "Archiviste Provincial & Notaire",
      description: "Recense, classe et met en valeur les archives historiques, diaires missionnaires et souvenirs des pionniers de la Province Sainte Famille.",
      members: [
        "Frère Jean-Marie Vianney NGENDAHIMANA",
        "Père Andrzej JAKACKI",
        "Père Romuald UZABUMWANA"
      ],
      responsibilities: [
        "Numérisation des diaires historiques (Rwaza, Butare, Gikondo depuis 1973)",
        "Publication d'ouvrages mémoriels sur l'histoire de la Province",
        "Conservation du patrimoine liturgique et des reliques de Saint Vincent Pallotti"
      ]
    },
    {
      id: "com-voc",
      name: "Commission de la Pastorale Vocationnelle et des Jeunes",
      president: "Père Eugène HAKIZIMANA",
      presidentRole: "Chargé National des Vocations",
      description: "Éveille, accueille et accompagne les jeunes désireux de consacrer leur vie à Dieu comme prêtres ou frères dans la Société de l'Apostolat Catholique.",
      members: [
        "Père Eugène HAKIZIMANA",
        "Père Germain BOSENIKO KAMARA",
        "Père Ascension NKURIKIYIMANA (RDC)",
        "Père Isaac IZATEGEKA"
      ],
      responsibilities: [
        "Organisation des camps et week-ends de discernement vocationnel",
        "Accompagnement personnel des candidats et correspondances",
        "Animation pastorale dans les écoles et aumôneries de jeunes"
      ]
    }
  ],

  photoAlbums: [
    {
      id: "alb-1",
      title: "Jubilés d'Or et d'Argent dans la Province Sainte Famille",
      slug: "jubiles-d-or-et-d-argent",
      date: "Septembre 2026",
      location: "Maison Provinciale de Gikondo, Kigali",
      coverImage: "https://www.sac-psf.info/storage/app/uploads/public/6a9/f24/c8a/6a9f24c8aba00494474078.jpeg",
      photoCount: 18,
      images: [
        { url: "https://www.sac-psf.info/storage/app/uploads/public/6a9/f24/c8a/6a9f24c8aba00494474078.jpeg", caption: "Messe solennelle d'action de grâce à Gikondo" },
        { url: "https://sac-psf.info/storage/app/media/uploaded-files/CENTRE%206.jpg", caption: "Rassemblement des confrères jubilaires et des invités" },
        { url: "https://sac-psf.info/storage/app/media/uploaded-files/PROV%202.jpg", caption: "Allocution du Recteur Provincial Père Eugène Niyonzima" }
      ]
    },
    {
      id: "alb-2",
      title: "Sanctuaire Marial Notre-Dame des Douleurs de Kibeho",
      slug: "sanctuaire-marial-kibeho",
      date: "Août 2026",
      location: "Kibeho, Diocèse de Gikongoro",
      coverImage: "https://www.sac-psf.info/storage/app/uploads/public/5f5/ca9/e74/5f5ca9e746e27416438769.jpg",
      photoCount: 24,
      images: [
        { url: "https://www.sac-psf.info/storage/app/uploads/public/5f5/ca9/e74/5f5ca9e746e27416438769.jpg", caption: "Esplanade du Sanctuaire Marial de Kibeho lors de l'Assomption" },
        { url: "/images/sanctuaries/kibeho.jpg", caption: "Procession des pèlerins vers l'autel extérieur" }
      ]
    },
    {
      id: "alb-3",
      title: "Sanctuaire de la Miséricorde Divine de Kabuga",
      slug: "sanctuaire-misericorde-kabuga",
      date: "Juillet 2026",
      location: "Kabuga, Kigali",
      coverImage: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0b3/116/5d80b3116276e768109464.jpg",
      photoCount: 15,
      images: [
        { url: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0b3/116/5d80b3116276e768109464.jpg", caption: "Célébration eucharistique au Sanctuaire de la Miséricorde Divine" },
        { url: "/images/sanctuaries/kabuga.jpg", caption: "Pèlerins rassemblés devant l'icône de Jésus Miséricordieux" }
      ]
    },
    {
      id: "alb-4",
      title: "Pastorale et Célébrations à la Paroisse Saint Joseph de Kinoni",
      slug: "paroisse-saint-joseph-kinoni",
      date: "Juin 2026",
      location: "Kinoni, Diocèse de Ruhengeri",
      coverImage: "https://www.sac-psf.info/storage/app/uploads/public/6ab/b96/135/6abb96135eb99204780998.jpg",
      photoCount: 20,
      images: [
        { url: "https://www.sac-psf.info/storage/app/uploads/public/6ab/b96/135/6abb96135eb99204780998.jpg", caption: "Visite pastorale et célébration communautaire à Kinoni" },
        { url: "/images/slides/kinoni.jpg", caption: "Fidèles et jeunes de la paroisse Saint Joseph" }
      ]
    }
  ],

  videoPlaylists: [
    {
      id: "vid-1",
      title: "Pèlerinage et Prières au Sanctuaire de Kibeho",
      slug: "pelerinage-kibeho",
      date: "2026",
      duration: "14:20",
      thumbnailUrl: "https://www.sac-psf.info/storage/app/uploads/public/5f5/ca9/e74/5f5ca9e746e27416438769.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Immersion spirituelle au cœur du sanctuaire des apparitions de la Vierge Marie, Mère du Verbe, à Kibeho avec les pères pallottins."
    },
    {
      id: "vid-2",
      title: "Chapelet de la Miséricorde Divine - Sanctuaire de Ruhango",
      slug: "chapelet-misericorde-ruhango",
      date: "2026",
      duration: "25:40",
      thumbnailUrl: "https://www.sac-psf.info/storage/app/uploads/public/5d8/0ad/dcb/5d80addcb5c2c108300875.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Heure de la Miséricorde et prière d'adoration eucharistique avec la communauté des Pères Pallottins de Ruhango."
    },
    {
      id: "vid-3",
      title: "Sur les pas de Saint Vincent Pallotti : Documentaire historique",
      slug: "documentaire-vincent-pallotti",
      date: "2025",
      duration: "32:15",
      thumbnailUrl: "/images/people/vincent-pallotti.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Film rétrospectif retraçant la vision de Vincent Pallotti à Rome, le développement de l'UAC et l'arrivée au Rwanda en 1973."
    }
  ]
};

export default siteContent;
