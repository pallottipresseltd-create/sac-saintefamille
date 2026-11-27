import { siteContent, type SiteContentData } from "./site-content";

interface CommunityEnOverride {
  name: string;
  countryLabel: string;
  locality: string;
  diocese: string;
  description: string;
  keyWorks: string[];
  memberRoles: string[];
}

interface ArticleEnOverride {
  title: string;
  categoryLabel: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

const communitiesEn: Record<string, CommunityEnOverride> = {
  "rw-gikondo": {
    name: "Holy Family Community of Gikondo (Provincial House)",
    countryLabel: "Rwanda",
    locality: "Gikondo, Kigali",
    diocese: "Archdiocese of Kigali",
    description:
      "Central headquarters of the Holy Family Missionary Province (Rwanda, DRC, Belgium). It serves three major works: the general services of the provincial government and administration, Saint Vincent Pallotti Parish of Gikondo, and the Saint Vincent Pallotti Center Ltd. It also houses the Pallottine Caritas office and the Pallottine Foundation for the Family (FPF).",
    keyWorks: [
      "Provincial House & General Secretariat",
      "Saint Vincent Pallotti Parish of Gikondo",
      "Saint Vincent Pallotti Center Ltd (Hospitality & Conferences)",
      "Pallottine Caritas & Pallottine Foundation for the Family (FPF)",
      "\"Communion\" Magazine",
    ],
    memberRoles: [
      "Provincial Rector",
      "Community Rector, Director of St. Vincent Pallotti Center Ltd, Internal Audit Officer",
      "Vice-Rector, Parish Priest of Gikondo, Secretary for Missions, FPF Socio-Charitable Coordinator",
      "Provincial Administrator",
      "Provincial Secretary, Secretary to the Provincial Rector, Sunday Vicar",
      "Notary, Provincial Archivist and Director of F.P.F.",
      "Community Bursar, Sunday Vicar, Webmaster",
      "CFO at St. Vincent Pallotti Center Ltd, 2nd Assistant Provincial Administrator",
      "Editor of \"Communion\" Magazine in Rwanda, Sunday Vicar",
      "1st Assistant Provincial Administrator",
      "Resident",
      "Seminarian on annual pastoral internship",
    ],
  },
  "rw-kabuga": {
    name: "Immaculate Conception Community & Kabuga Sanctuary",
    countryLabel: "Rwanda",
    locality: "Kabuga, Kigali",
    diocese: "Archdiocese of Kigali",
    description:
      "A major center of spirituality and pilgrimage, the Kabuga community animates the Holy Family / Immaculate Conception Parish as well as the Sanctuary of Divine Mercy and the St. John Paul II Pastoral Center.",
    keyWorks: [
      "Sanctuary of Divine Mercy of Kabuga",
      "Kabuga Parish",
      "St. John Paul II Center",
      "FPF Family and Life Department",
    ],
    memberRoles: [
      "Community Rector and Parish Priest",
      "Community Vice-Rector and Rector of the Sanctuary of Divine Mercy",
      "Sanctuary Chaplain, Vice-Director of FPF, Family and Life Department Coordinator",
      "CFO of FPF, 2nd Vicar and Vocation Animation Officer",
      "Community Bursar and 1st Parish Vicar",
    ],
  },
  "rw-kibeho": {
    name: "Saint Michael the Archangel Community of Kibeho",
    countryLabel: "Rwanda",
    locality: "Kibeho, Nyaruguru",
    diocese: "Diocese of Gikongoro",
    description:
      "At the heart of the sacred site of the recognized Marian apparitions of Kibeho, the Pallottine community directly serves pilgrims from around the world at the Marian Sanctuary of Our Lady of Sorrows.",
    keyWorks: [
      "Marian Sanctuary \"Our Lady of Sorrows\" of Kibeho",
      "Welcome and pastoral accompaniment of pilgrims",
      "KPC Ltd (Kibeho Pallotti Company)",
      "Marian and vocation animation",
    ],
    memberRoles: [
      "Community Rector, Rector of the Marian Sanctuary of Our Lady of Sorrows of Kibeho",
      "Vice-Rector, Sanctuary Chaplain, Vocation Animation Officer",
      "Director of KPC Ltd, ACR Officer, Sanctuary Animator",
      "CFO of KPC Ltd, Community Bursar, Assistant Sanctuary Chaplain",
      "Seminarian on annual pastoral internship",
    ],
  },
  "rw-ruhango": {
    name: "Jesus the Merciful Community of Ruhango",
    countryLabel: "Rwanda",
    locality: "Ruhango",
    diocese: "Diocese of Kabgayi",
    description:
      "A major center of prayer, devotion, and perpetual Eucharistic adoration, gathering thousands of pilgrims every first Sunday for the great prayers of healing and Mercy.",
    keyWorks: [
      "Jesus the Merciful Sanctuary of Ruhango",
      "Ruhango Parish",
      "Perpetual Adoration Chapel",
      "Healing prayer and monthly pilgrimages",
    ],
    memberRoles: [
      "Community Vice-Rector and Chaplain at Jesus the Merciful Sanctuary",
      "Parish Priest of Ruhango and ACR Officer",
      "Community Bursar, Parish Vicar, Vocation Animation Officer",
    ],
  },
  "rw-butare": {
    name: "\"NAZARETH\" Formation House of Butare",
    countryLabel: "Rwanda",
    locality: "Huye (Butare)",
    diocese: "Diocese of Butare",
    description:
      "House of initiation and novitiate (Introductory Period) for future Pallottine priests and brothers, providing spiritual discernment and accompaniment for seminarians at the Kabgayi Philosophicum.",
    keyWorks: [
      "Novitiate & Introductory Period",
      "Spiritual accompaniment and formation of novices",
      "Follow-up of students at the Philosophicum Major Seminary",
    ],
    memberRoles: [
      "Community Rector, Director of the Introductory Period and Students at Kabgayi Philosophicum",
      "Spiritual Director, Bursar and National Vocations Officer",
      "Confessor of Novices (Residing in Kibilizi)",
      "Seminarian on annual pastoral internship",
    ],
  },
  "rw-kinoni": {
    name: "Saint Joseph Community of Kinoni",
    countryLabel: "Rwanda",
    locality: "Kinoni, Burera",
    diocese: "Diocese of Ruhengeri",
    description:
      "A dynamic rural parish celebrated for its role as a spiritual and socio-economic lever, an engine of development, and a beacon of evangelization in the north of the country.",
    keyWorks: [
      "Saint Joseph Parish of Kinoni",
      "Nkumba Outstation",
      "Education and grassroots pastoral care",
      "Promotion of local development",
    ],
    memberRoles: [
      "Community Rector and Parish Priest of Saint Joseph Parish of Kinoni",
      "Community Bursar, Vicar and Vocations Officer",
      "Parish Vicar",
      "Assistant for pilgrimage services and general maintenance",
    ],
  },
  "rw-pallotti-presse": {
    name: "Saint Maximilian Kolbe Community & Pallotti Press",
    countryLabel: "Rwanda",
    locality: "Gikondo, Kigali",
    diocese: "Archdiocese of Kigali",
    description:
      "Major media and publishing work of the province: modern printing press, distribution of the historic children's magazine Hobe, catechetical and apostolic publications.",
    keyWorks: [
      "Pallotti Press Ltd Printing & Publishing",
      "Children's Magazine \"Hobe\"",
      "Catholic publications and liturgical manuals",
      "Pastoral care of social communications",
    ],
    memberRoles: [
      "Community Rector, Director of Pallotti Press Ltd, Vice-Officer of ACR",
      "Community Vice-Rector, Parish Vicar and Editor of Hobe Magazine",
      "Vicar in Gikondo and Assistant Editor of Hobe",
      "Bursar, CFO, Production Manager at Pallotti Press and Sunday Vicar",
    ],
  },
  "rdc-keshero": {
    name: "Cenacle Community & Genezareth Pallotti Formation Center",
    countryLabel: "D.R. Congo",
    locality: "Keshero, Goma",
    diocese: "Diocese of Goma",
    description:
      "A reference center for the formation of leaders, laity, and clergy on the shores of Lake Kivu. CPF Genezareth is a renowned spiritual, intellectual, and pastoral crossroads in Goma.",
    keyWorks: [
      "Genezareth Pallotti Formation Center (CPF)",
      "Biblical sessions and spiritual retreats",
      "Teaching at Buhimba Major Seminary",
      "University apostolate",
    ],
    memberRoles: [
      "Community Rector, CFO at CPF, Lecturer at Buhimba Major Seminary",
      "Community Vice-Rector, Director of CPF Genezareth",
      "Spiritual Animator at CPF",
      "Animator at CPF and University Professor in Goma",
      "Community Steward",
    ],
  },
  "rdc-buturande": {
    name: "Blessed Isidore Bakanja Community of Buturande",
    countryLabel: "D.R. Congo",
    locality: "Rutshuru / Buturande, North Kivu",
    diocese: "Diocese of Goma",
    description:
      "Border parish of Saint Faustina Kowalska serving the afflicted populations of North Kivu, offering a vibrant witness of hope, peace, and Mercy.",
    keyWorks: [
      "Saint Faustina Kowalska Parish of Buturande",
      "Apostolate of reconciliation and charity",
      "Support for displaced persons and youth ministry",
      "Vocation animation",
    ],
    memberRoles: [
      "Community Rector and Parish Priest of Saint Faustina Kowalska Parish",
      "Community Vice-Rector and Parish Vicar",
      "Community Bursar and Vicar",
      "Parish Vicar and Vocation Animation Officer",
    ],
  },
  "rdc-karhale": {
    name: "Saint Boniface Community & St. Vincent Pallotti Parish of Karhale",
    countryLabel: "D.R. Congo",
    locality: "Karhale, Bukavu",
    diocese: "Archdiocese of Bukavu",
    description:
      "Canonically erected on March 20, 2017 on the heights of Bukavu, Saint Vincent Pallotti Parish of Karhale offers warm parish accompaniment, presence among students, and support for Adoption of the Heart.",
    keyWorks: [
      "Saint Vincent Pallotti Parish of Karhale",
      "Social work \"Adoption of the Heart\"",
      "Accompaniment of philosophy students at Ruzizi Philosophicum",
      "Youth and family ministry in Bukavu",
    ],
    memberRoles: [
      "Community Rector, Parish Vicar, Officer for Adoption of the Heart and Philosophy Students",
      "Vice-Rector and Parish Priest of Saint Vincent Pallotti Parish",
      "Community Bursar and Vicar for Financial Affairs",
      "Seminarian on annual pastoral internship",
    ],
  },
  "rdc-keshero-postulat": {
    name: "Saint Vincent Pallotti Formation House (Keshero Postulancy)",
    countryLabel: "D.R. Congo",
    locality: "Keshero, Goma",
    diocese: "Diocese of Goma",
    description:
      "House of welcome and initial formation (Postulancy) for Congolese candidates and those from neighboring countries wishing to embrace Pallottine consecration.",
    keyWorks: [
      "Pallottine Postulancy",
      "Human, Christian, and charismatic initiation",
      "Preparation for the stages of the novitiate",
    ],
    memberRoles: [
      "Rector, Director of Postulancy and Sunday Vicar in Karhale",
      "Community Steward",
    ],
  },
  "be-bruxelles": {
    name: "Missionary Procure & Communities of Brussels",
    countryLabel: "Belgium",
    locality: "Brussels",
    diocese: "Archdiocese of Mechelen-Brussels",
    description:
      "A historic bridge between the works of the Holy Family Province in Africa and European benefactors. The procure ensures missionary animation, European coordination, and serves the pastoral units of Meiser and Saint Teresa of Avila.",
    keyWorks: [
      "Pallottine Missionary Procure of Brussels (Avenue Rogier)",
      "Meiser Pastoral Unit",
      "Saint Teresa of Avila Community",
      "Provincial coordination in Europe",
    ],
    memberRoles: [
      "Community Rector, Director of the Missionary Procure and Co-director of Meiser Pastoral Unit",
      "Vice-Rector, Director of Meiser Pastoral Unit, Coordinator of HSF missionary activities in Europe",
      "Community Bursar, Student at UCLouvain and parish vicar",
    ],
  },
  "be-namur": {
    name: "Saint Vincent Pallotti Community of Namur (Sombreffe)",
    countryLabel: "Belgium",
    locality: "Sombreffe, Province of Namur",
    diocese: "Diocese of Namur",
    description:
      "Pallottine priests in direct pastoral service to the churches and parishes of the Sombreffe Pastoral Unit in the Diocese of Namur.",
    keyWorks: [
      "Pastoral administration of the Sombreffe Unit",
      "Liturgical celebrations, baptisms, marriages, and catechesis",
      "Pallottine apostolic presence in Wallonia",
    ],
    memberRoles: [
      "Community Rector and Administrator of the Sombreffe Pastoral Unit",
      "Vicar in the Sombreffe Pastoral Unit",
      "Vicar in the Sombreffe Pastoral Unit",
    ],
  },
  "eu-france": {
    name: "Missions in France (Osny, Montereau, Vaires)",
    countryLabel: "Mission in Europe and World",
    locality: "Osny (Pontoise), Montereau (Meaux), Vaires",
    diocese: "Dioceses of Pontoise, Meaux, and Créteil",
    description:
      "Active presence in three dioceses of the Paris region: Osny (Diocese of Pontoise), Pallotti House of Montereau (Collegiate Church of Notre-Dame-et-Saint-Loup), and Pastoral Mission of Vaires.",
    keyWorks: [
      "Saint Joseph Community of Osny (Osny Parish)",
      "Pallotti House of Montereau (Collegiate Church of Notre-Dame-et-Saint-Loup)",
      "Saint Anne Parish of Polangis (Joinville-le-Pont)",
      "Pastoral Mission of Vaires",
    ],
    memberRoles: [
      "Rector of the Osny community and Parish Priest of Osny",
      "Bursar of the Osny community and vicar",
      "Parish Priest of Saint Anne Parish of Polangis (Joinville-le-Pont, Créteil)",
      "Rector of the Montereau community and Referring Priest of the Collegiate Church",
      "Referring Priest and Bursar of Montereau",
      "Referring Priest in Montereau",
      "Head of Mission and Referring Priest in Vaires",
      "Student at the Catholic Institute of Paris and pastor in Vaires",
      "Referring Priest and Bursar of the Vaires Mission",
    ],
  },
  "eu-italie": {
    name: "Missions in Italy (Latina Stella Maris & Rome Generalate)",
    countryLabel: "Mission in Europe and World",
    locality: "Latina, Rome",
    diocese: "Diocese of Latina / Diocese of Rome",
    description:
      "Blessed Elisabetta Sanna Community in Latina (Stella Maris Parish) and confreres engaged in the service of the Generalate in Rome and pontifical university teaching.",
    keyWorks: [
      "Stella Maris Parish of Latina",
      "Pallottine Generalate House (Piazza San Vincenzo Pallotti, Rome)",
      "Teaching at the Pontifical Gregorian University",
      "Specialized higher studies (Lateran, Gregorian, Urbaniana)",
    ],
    memberRoles: [
      "Rector of Bl. Elisabetta Sanna community, Administrator of Stella Maris, PhD Candidate in Law (Lateran)",
      "Vice-Rector, Vicar and Student at the Gregorian University",
      "Bursar, Vicar and Missiology Student at the Urbaniana University",
      "Professor at the Pontifical Gregorian University and pastoral service in Velletri (Rome)",
    ],
  },
};

const articlesEn: Record<string, ArticleEnOverride> = {
  "art-1": {
    title: "THUS ENDED THE MONTH OF SEPTEMBER 2026",
    categoryLabel: "Newsletter",
    tags: ["Kinoni", "Diocese of Ruhengeri", "Evangelization", "History"],
    excerpt:
      "During his address, Bishop Vincent Harolimana of the Diocese of Ruhengeri described Kinoni parish as a light dispelling darkness and an engine of development, drawing on the Rwaza diaries written at the founding of Kinoni.",
    content: `During his memorable address, His Excellency Bishop Vincent Harolimana, Bishop of the Diocese of Ruhengeri, praised with emotion and gratitude the apostolic work of the Pallottine Fathers in Kinoni.

Describing Kinoni parish as "a light dispelling darkness and an engine of integral development," the Bishop drew upon the Rwaza diaries written during the early days of the mission. He highlighted the fruitful collaboration between missionaries and local priests, emphasizing the importance of preserving this pastoral dynamism for future generations.`,
  },
  "art-2": {
    title: "JUBILATE DEO, CANTATE DOMINO",
    categoryLabel: "Holy Family Province",
    tags: ["Jubilees", "Thanksgiving", "Consecration"],
    excerpt:
      "Over the past two months, the Holy Family Province celebrated with joy and thanksgiving several ordination and commitment jubilees of its dedicated members.",
    content: `The Holy Family Province experienced intense days of celebration and praise to the Lord through the celebration of silver and golden jubilees of confreres who have consecrated their entire lives to following Christ in the Society of the Catholic Apostolate. Relatives, faithful, and friends of the Pallottine family gathered in great numbers to give thanks.`,
  },
  "art-3": {
    title: "DOCTORAL DEFENSE PRESENTATION OF FR. FAUSTIN-JUVÉNAL NDAGIJIMANA",
    categoryLabel: "Publications by Members",
    tags: ["Thesis", "Research", "Theology"],
    excerpt:
      "Brilliant doctoral defense by Fr. Faustin-Juvénal Ndagijimana, SAC, crowning years of theological and pastoral research for the benefit of the Church and the Society.",
    content: `Fr. Faustin-Juvénal Ndagijimana, SAC, a member of the Holy Family Province currently in pastoral service in Belgium, brilliantly defended his doctoral dissertation before a jury of eminent theologians and professors. His confreres extend their warmest congratulations.`,
  },
  "art-4": {
    title: "PRIESTLY ORDINATION OF FATHERS ÉLIE HAKIZIMANA AND PASCAL MUGAMBIRA",
    categoryLabel: "Newsletter",
    tags: ["Ordination", "Priesthood", "Vocation"],
    excerpt:
      "Great joy for the entire Pallottine family: priestly ordination of deacons Élie Hakizimana and Pascal Mugambira, new laborers in the Lord's harvest.",
    content: `Through the laying on of hands and the prayer of consecration, deacons Élie Hakizimana and Pascal Mugambira were ordained priests forever. Surrounded by their families, the Provincial Rector, and dozens of confreres from Rwanda and the DRC, they expressed their joy at being sent forth as servants of the Gospel.`,
  },
  "art-5": {
    title: "Official Publication of Confreres' Appointments 2026-2027",
    categoryLabel: "Press Releases",
    tags: ["Appointments", "Governance", "Provincial Council"],
    excerpt:
      "The Provincial Rector, together with his Council, announces the official list of pastoral appointments and assignments of the confreres of the Holy Family Province for the year 2026-2027.",
    content: `The Provincial Council, meeting in ordinary session at the Provincial House in Gikondo, proceeded with the canonical appointments and assignments of priests, deacons, and trainees across the communities and works in Rwanda, the Democratic Republic of Congo, Belgium, and European missions.`,
  },
  "art-6": {
    title: "INTERNATIONAL MEETING OF PALLOTTINE FORMATORS (KIGALI, RWANDA)",
    categoryLabel: "Generalate",
    tags: ["Formation", "International", "Generalate", "Kigali"],
    excerpt:
      "Kigali hosted the international meeting gathering novitiate directors and Pallottine student masters from all five continents.",
    content: `During a week of fruitful reflection at the Saint Vincent Pallotti Center in Gikondo, Pallottine formators exchanged views on the challenges of initial formation in light of the Ratio Formationis and the contemporary realities of youth.`,
  },
  "art-7": {
    title: "The Apostolate of the Laity according to Saint Vincent Pallotti and the UAC",
    categoryLabel: "Union of Catholic Apostolate",
    tags: ["UAC", "Laity", "Spirituality", "Vincent Pallotti"],
    excerpt:
      "On the solemnity of our Holy Founder, members of the Union of Catholic Apostolate gathered to meditate on the universal call to holiness and mission.",
    content: `The Union of Catholic Apostolate (UAC) unites priests, brothers, sisters, and lay faithful in a single apostolic fervor. Saint Vincent Pallotti prophetically understood that the evangelization of the world requires the joint commitment of every baptized person. During celebrations in Kigali, Butare, and Goma, UAC members renewed their apostolic commitment.`,
  },
  "art-8": {
    title: "Canonical and Pastoral Visit to the Communities of North Kivu",
    categoryLabel: "Holy Family Province",
    tags: ["Canonical Visit", "Goma", "Keshero", "Buturande", "Pastoral"],
    excerpt:
      "The Provincial Rector and the consultors conducted a fraternal visit to the confreres and communities of Goma and Buturande.",
    content: `Despite difficult contexts in eastern Democratic Republic of Congo, the confreres of Keshero and Buturande remain steadfast witnesses of Christ's love and Marian consolation. The canonical visit served to encourage pastoral teams and evaluate hospitality and educational works.`,
  },
  "art-9": {
    title: "Spiritual Meditation: The Love of Christ Urges Us (Caritas Christi Urget Nos)",
    categoryLabel: "Reflections & Life",
    tags: ["Meditation", "Caritas Christi", "Prayer", "Christian Life"],
    excerpt:
      "Meditation on the Pauline motto dear to Saint Vincent Pallotti: how to let the Savior's love consume our daily lives and enliven our communities.",
    content: `"Caritas Christi urget nos" (2 Cor 5:14): these words are not a mere institutional motto, but the very breath of our vocation. To be a Pallottine today is to allow oneself to be transformed interiorly by infinite mercy so as to become bridges of hope and reconciliation.`,
  },
};

const popularArticlesEn: Record<string, string> = {
  "pop-1": "Session of Directors, CFOs and Accountants of HSF Pallottine Works in Gikondo",
  "pop-2": "Info-PSF No. 11 - Special Edition",
  "pop-3": "Apostles on Mission: The Living Legacy of Vincent Pallotti",
  "pop-4": "Official Launch of the Canonical Visit in Saint Joseph Community / Kinoni",
  "pop-5": "Priestly Ordination of Five Deacons in Goma (DRC)",
};

const governanceEn = {
  provincialCouncil: {
    "gov-1": {
      role: "Provincial Rector",
      department: "Provincial Government",
      bio: "Provincial Rector of the Holy Family Province, guarantor of provincial unity and of pastoral and missionary orientation.",
    },
    "gov-2": {
      role: "First Consultor",
      department: "Provincial Council",
      bio: "First Consultor, Parish Priest of Gikondo Parish, Provincial Secretary for Missions, and Socio-Charitable Coordinator of FPF.",
    },
    "gov-3": {
      role: "Consultor",
      department: "Provincial Council",
      bio: "Provincial Consultor, Community Rector and Parish Priest of Kabuga Parish.",
    },
    "gov-4": {
      role: "Consultor",
      department: "Provincial Council",
      bio: "Provincial Consultor, Rector of the Goma-Keshero community (DRC), CFO at CPF, and lecturer at Buhimba Major Seminary.",
    },
    "gov-5": {
      role: "Consultor",
      department: "Provincial Council",
      bio: "Provincial Consultor, Community Rector and Parish Priest of Saint Faustina Kowalska Parish in Buturande (Goma, DRC).",
    },
  } as Record<string, { role: string; department: string; bio?: string }>,
  administration: {
    "adm-1": {
      role: "Provincial Administrator",
      department: "Provincial Administration",
      bio: "Management of temporal affairs, movable and immovable property of the Holy Family Province.",
    },
    "adm-2": {
      role: "1st Assistant Provincial Administrator",
      department: "Provincial Administration",
    },
    "adm-3": {
      role: "2nd Assistant Provincial Administrator",
      department: "Provincial Administration",
      bio: "CFO at Saint Vincent Pallotti Center Ltd and 2nd Assistant Provincial Administrator.",
    },
  } as Record<string, { role: string; department: string; bio?: string }>,
  secretariat: {
    "sec-1": {
      role: "Provincial Secretary & Secretary to the Rector",
      department: "Provincial Secretariat",
      bio: "Provincial Secretary, Assistant Provincial Master of Ceremonies, and Sunday vicar.",
    },
    "sec-2": {
      role: "Notary and Archivist",
      department: "Provincial Secretariat",
      bio: "Notary, provincial archivist, and Director of the Pallottine Foundation for the Family (F.P.F.).",
    },
    "sec-3": {
      role: "Webmaster & Bursar",
      department: "Communication and Media",
      bio: "Webmaster of the official website, Bursar of the Gikondo community, and Sunday vicar.",
    },
  } as Record<string, { role: string; department: string; bio?: string }>,
};

const assembliesEn: Record<
  string,
  { title: string; date: string; location: string; theme: string; summary: string; keyPoints: string[] }
> = {
  "ass-5": {
    title: "5th Ordinary Provincial Assembly",
    date: "October 2024",
    location: "Saint Vincent Pallotti Center, Gikondo (Kigali)",
    theme: "\"Come, let us rebuild the walls of Jerusalem\" (Neh 2:17)",
    summary:
      "Statutory gathering of all delegates from communities in Rwanda, DRC, and Belgium to establish the major orientations for the six-year term.",
    keyPoints: [
      "Strengthening community life and fraternal communion",
      "Sustainability and financial autonomy of educational and healthcare works",
      "Promotion of vocations and deepened formation in the Pallottine charism",
      "Pastoral accompaniment of families and laity within the framework of the UAC",
    ],
  },
  "ass-4": {
    title: "4th Ordinary Provincial Assembly",
    date: "September 2018",
    location: "Gikondo Provincial House",
    theme: "\"Revive Faith and Rekindle Charity in the Great Lakes Region\"",
    summary:
      "Review of apostolic works, celebration of community jubilees, and restructuring of temporal management departments.",
    keyPoints: [
      "Consolidation of the mission at Kibeho and Kabuga Sanctuaries",
      "Development of Pallotti Press and expansion of Hobe magazine",
      "Creation of Saint Vincent Pallotti Parish of Karhale in Bukavu",
      "Strengthened coordination with the Brussels Procure for missions",
    ],
  },
  "ass-local": {
    title: "Local & Preparatory Assemblies",
    date: "Annual / Pre-Chapter",
    location: "All communities of the Province",
    theme: "\"Listening, discernment, and spiritual renewal\"",
    summary:
      "Grassroots consultation enabling each local community to evaluate its spiritual journey, internal governance, and missionary challenges.",
    keyPoints: [
      "Fraternal evaluation of community life and common prayer",
      "Financial reports and transparent management of temporal goods",
      "Involvement of lay Christians in parish pastoral councils",
    ],
  },
};

const secretariatsEn: Record<
  string,
  { name: string; leaderRole: string; description: string; missions: string[] }
> = {
  "sec-spa": {
    name: "Provincial Secretariat for the Apostolate (SPA)",
    leaderRole: "Provincial Secretary for the Apostolate & Consultor",
    description:
      "Body for consultation, animation, and follow-up of all pastoral, charitable, and missionary initiatives of the Province.",
    missions: [
      "Coordination of pastoral projects in parishes and sanctuaries",
      "Promotion of the lay apostolate and accompaniment of UAC prayer groups",
      "Supervision of charitable works and the Pallottine Foundation for the Family (FPF)",
      "Dialogue with diocesan pastoral commissions",
    ],
  },
  "sec-formation": {
    name: "Provincial Secretariat for Formation",
    leaderRole: "Director of Formation & Rector of Nazareth Novitiate",
    description:
      "Guarantor of adherence to the Pallottine Ratio Formationis for candidates, novices, seminarian students, and ongoing formation of confreres.",
    missions: [
      "Accompaniment of the Keshero postulancy (DRC) and Butare novitiate (Rwanda)",
      "Academic follow-up of students in philosophy (Kabgayi, Ruzizi) and theology",
      "Organization of annual retreats and theological renewal sessions",
      "Liaison with the General Secretariat for Formation in Rome",
    ],
  },
  "sec-missions": {
    name: "Provincial Secretariat for Missions & Procures",
    leaderRole: "Director of the Brussels Procure & Delegate for Missions",
    description:
      "Ensures the bridge of solidarity between communities in the Great Lakes region and partners in Europe and around the world.",
    missions: [
      "Management and coordination of the Brussels Missionary Procure",
      "Support for community development and educational projects",
      "Follow-up of confreres sent on mission to France, Italy, and Belgium",
      "Missionary animation and collection of Mass intentions for works",
    ],
  },
};

const commissionsEn: Record<
  string,
  { name: string; presidentRole: string; description: string; responsibilities: string[] }
> = {
  "com-eco": {
    name: "Economic and Financial Commission",
    presidentRole: "Provincial Administrator",
    description:
      "Oversees the sound management of material resources, accounting transparency, and financial sustainability of works.",
    responsibilities: [
      "Budget preparation and control for the Province and communities",
      "Periodic internal audit of hospitality centers and printing presses",
      "Management of land assets and future investments",
    ],
  },
  "com-jur": {
    name: "Legal and Canonical Commission",
    presidentRole: "PhD Candidate in Canon Law",
    description:
      "Legal counsel to the Provincial Rector and Council on matters of civil, canonical, and statutory law.",
    responsibilities: [
      "Canonical compliance of governance acts and contracts",
      "Monitoring legal entities in Rwanda, DRC, and Belgium",
      "Updating internal regulations and provincial statutes",
    ],
  },
  "com-hist": {
    name: "Historical and Documentation Commission",
    presidentRole: "Provincial Archivist & Notary",
    description:
      "Inventories, classifies, and highlights historical archives, missionary diaries, and memories of the pioneers of the Holy Family Province.",
    responsibilities: [
      "Digitization of historical diaries (Rwaza, Butare, Gikondo since 1973)",
      "Publication of memorial books on the history of the Province",
      "Preservation of liturgical heritage and relics of Saint Vincent Pallotti",
    ],
  },
  "com-voc": {
    name: "Commission for Vocational and Youth Ministry",
    presidentRole: "National Vocations Officer",
    description:
      "Awakens, welcomes, and accompanies young people wishing to consecrate their lives to God as priests or brothers in the Society of the Catholic Apostolate.",
    responsibilities: [
      "Organization of vocational discernment camps and weekends",
      "Personal accompaniment of candidates and correspondence",
      "Pastoral animation in schools and youth chaplaincies",
    ],
  },
};

const photoAlbumsEn: Record<
  string,
  { title: string; date: string; location: string; captions: string[] }
> = {
  "alb-1": {
    title: "Golden and Silver Jubilees in the Holy Family Province",
    date: "September 2026",
    location: "Gikondo Provincial House, Kigali",
    captions: [
      "Solemn Mass of thanksgiving in Gikondo",
      "Gathering of jubilarian confreres and guests",
      "Address by Provincial Rector Fr. Eugène Niyonzima",
    ],
  },
  "alb-2": {
    title: "Marian Sanctuary of Our Lady of Sorrows of Kibeho",
    date: "August 2026",
    location: "Kibeho, Diocese of Gikongoro",
    captions: [
      "Esplanade of the Marian Sanctuary of Kibeho during the Assumption",
      "Procession of pilgrims toward the outdoor altar",
    ],
  },
  "alb-3": {
    title: "Sanctuary of Divine Mercy of Kabuga",
    date: "July 2026",
    location: "Kabuga, Kigali",
    captions: [
      "Eucharistic celebration at the Sanctuary of Divine Mercy",
      "Pilgrims gathered before the icon of Merciful Jesus",
    ],
  },
  "alb-4": {
    title: "Pastoral Ministry and Celebrations at St. Joseph Parish of Kinoni",
    date: "June 2026",
    location: "Kinoni, Diocese of Ruhengeri",
    captions: [
      "Pastoral visit and community celebration in Kinoni",
      "Faithful and youth of Saint Joseph parish",
    ],
  },
};

const videoPlaylistsEn: Record<string, { title: string; description: string }> = {
  "vid-1": {
    title: "Pilgrimage and Prayers at the Kibeho Sanctuary",
    description:
      "Spiritual immersion at the heart of the sanctuary of the apparitions of the Virgin Mary, Mother of the Word, in Kibeho with the Pallottine fathers.",
  },
  "vid-2": {
    title: "Chaplet of Divine Mercy - Ruhango Sanctuary",
    description:
      "Hour of Mercy and Eucharistic adoration prayer with the community of Pallottine Fathers of Ruhango.",
  },
  "vid-3": {
    title: "In the Footsteps of Saint Vincent Pallotti: Historical Documentary",
    description:
      "Retrospective film tracing Vincent Pallotti's vision in Rome, the development of the UAC, and the arrival in Rwanda in 1973.",
  },
};

export function getLocalizedSiteContent(locale: "fr" | "en"): SiteContentData {
  if (locale === "fr") return siteContent;

  return {
    ...siteContent,
    meta: {
      ...siteContent.meta,
      title: "Society of the Catholic Apostolate - Holy Family Province",
      tagline: "Come, let us rebuild the walls of Jerusalem",
      motto: "Caritas Christi Urget Nos (The Love of Christ urges us)",
      description:
        "Official website of the Pallottine Holy Family Province uniting communities and apostolic works in Rwanda, the Democratic Republic of Congo, and Belgium.",
    },
    identity: {
      founder: {
        ...siteContent.identity.founder,
        birth: "April 21, 1795 in Rome",
        death: "January 22, 1850 in Rome",
        canonization: "January 20, 1963 by Pope John XXIII during Vatican II",
        feastDay: "January 22",
        summary:
          "Visionary Roman priest, Vincent Pallotti is the precursor of the lay apostolate. Born to a noble family of Rome and Norcia, he founded in 1835 the Union of Catholic Apostolate (UAC) to mobilize priests, religious, and laity to revive faith and rekindle charity throughout the world.",
        keyPrinciples: [
          "Everyone is called to be an apostle according to their state of life",
          "The infinite Love of God revealed in Jesus Christ as model",
          "Universal charity without distinction of condition",
          "Close collaboration between laity and consecrated members",
        ],
      },
      charism: {
        title: "Rekindle faith and foster charity",
        summary:
          "The Pallottine charism consists in awakening the conscience of every baptized person to their apostolic responsibility, forming a great universal communion of apostles.",
        pillars: [
          "Universal apostolate of all the baptized",
          "Ecclesial union and communion (UAC)",
          "Preferential service to the poor, families, and education",
          "Integral formation of the human person",
        ],
      },
      history: {
        summary:
          "The Pallottine presence in Rwanda and the Great Lakes is rooted in the missionary call. Erected to coordinate the apostolic mission in Rwanda, the Democratic Republic of Congo, and Belgium, the Holy Family Province bears witness to remarkable spiritual and social outreach.",
        milestones: [
          { year: "1835", title: "Foundation in Rome", description: "Saint Vincent Pallotti founds the Union of Catholic Apostolate." },
          { year: "1963", title: "Canonization", description: "Pope John XXIII canonizes Vincent Pallotti as precursor of conciliar renewal." },
          { year: "1973", title: "Arrival in Rwanda", description: "First establishment of the Pallottine mission in the land of a thousand hills." },
          { year: "1980+", title: "Expansion to Congo & Belgium", description: "Extension of works to Kivu (Goma, Bukavu) and affiliation of the Brussels procure." },
          { year: "Present", title: "Dynamic Holy Family Province", description: "Over 18 communities, major sanctuaries (Kibeho, Kabuga, Ruhango), Pallotti Press printing house, social and pastoral works." },
        ],
      },
      vocations: {
        ...siteContent.identity.vocations,
        title: "Become a Pallottine Priest or Brother",
        invitation:
          "Do you feel called to serve Christ in the spirit of Saint Vincent Pallotti? Join the community of Pallottine fathers and brothers to be an apostle at the heart of the modern world.",
        contactPerson: "Fr. Eugène HAKIZIMANA (National Vocations Officer)",
      },
    },
    governance: {
      provincialCouncil: siteContent.governance.provincialCouncil.map((m) => {
        const ov = governanceEn.provincialCouncil[m.id];
        return ov ? { ...m, role: ov.role, department: ov.department, bio: ov.bio ?? m.bio } : m;
      }),
      administration: siteContent.governance.administration.map((m) => {
        const ov = governanceEn.administration[m.id];
        return ov ? { ...m, role: ov.role, department: ov.department, bio: ov.bio ?? m.bio } : m;
      }),
      secretariat: siteContent.governance.secretariat.map((m) => {
        const ov = governanceEn.secretariat[m.id];
        return ov ? { ...m, role: ov.role, department: ov.department, bio: ov.bio ?? m.bio } : m;
      }),
    },
    communities: siteContent.communities.map((c) => {
      const ov = communitiesEn[c.id];
      if (!ov) return c;
      return {
        ...c,
        name: ov.name,
        locality: ov.locality,
        diocese: ov.diocese,
        description: ov.description,
        keyWorks: ov.keyWorks,
        members: c.members.map((m, idx) => ({
          ...m,
          role: ov.memberRoles[idx] ?? m.role,
        })),
      };
    }),
    articles: siteContent.articles.map((a) => {
      const ov = articlesEn[a.id];
      if (!ov) return a;
      return {
        ...a,
        title: ov.title,
        categoryLabel: ov.categoryLabel,
        excerpt: ov.excerpt,
        content: ov.content,
        tags: ov.tags ?? a.tags,
      };
    }),
    popularArticles: siteContent.popularArticles.map((p) => ({
      ...p,
      title: popularArticlesEn[p.id] ?? p.title,
    })),
    assemblies: siteContent.assemblies.map((a) => {
      const ov = assembliesEn[a.id];
      return ov ? { ...a, ...ov } : a;
    }),
    secretariatsList: siteContent.secretariatsList.map((s) => {
      const ov = secretariatsEn[s.id];
      return ov ? { ...s, ...ov } : s;
    }),
    commissionsList: siteContent.commissionsList.map((c) => {
      const ov = commissionsEn[c.id];
      return ov ? { ...c, ...ov } : c;
    }),
    photoAlbums: siteContent.photoAlbums.map((alb) => {
      const ov = photoAlbumsEn[alb.id];
      if (!ov) return alb;
      return {
        ...alb,
        title: ov.title,
        date: ov.date,
        location: ov.location,
        images: alb.images.map((img, idx) => ({
          ...img,
          caption: ov.captions[idx] ?? img.caption,
        })),
      };
    }),
    videoPlaylists: siteContent.videoPlaylists.map((v) => {
      const ov = videoPlaylistsEn[v.id];
      return ov ? { ...v, ...ov } : v;
    }),
  };
}
