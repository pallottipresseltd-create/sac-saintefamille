import type { Locale } from "@/contexts/LocaleContext";

export const pageTranslations: Record<string, Record<Locale, string>> = {
  // ── Common / Shared ─────────────────────────────────────────
  "common.sac": { fr: "Société de l'Apostolat Catholique", en: "Society of the Catholic Apostolate" },
  "common.sac-pallottin": { fr: "SAC Pallottin", en: "SAC Pallottine" },
  "common.siege": { fr: "Siège Provincial", en: "Provincial Headquarters" },
  "common.full-sheet": { fr: "Fiche complète", en: "Full profile" },
  "common.confreres": { fr: "confrères", en: "members" },
  "common.confreres-assigned": { fr: "confrères assignés", en: "assigned members" },
  "common.confreres-sent": { fr: "confrères envoyés", en: "sent members" },
  "common.consult": { fr: "Consulter", en: "View" },
  "common.see-also": { fr: "Voir aussi", en: "See also" },
  "common.read": { fr: "Lire", en: "Read" },
  "common.discover-section": { fr: "Découvrir cette rubrique", en: "Explore this section" },

  // ── CategoryNewsList & Informations ─────────────────────────
  "newslist.back": { fr: "Toutes les publications & médias", en: "All publications & media" },
  "newslist.badge": { fr: "Rubrique Officielle", en: "Official Section" },
  "newslist.empty": { fr: "Aucun article dans cette rubrique pour le moment.", en: "No articles in this section at the moment." },
  "newslist.read-full": { fr: "Lire l'article complet", en: "Read full article" },

  "info.badge": { fr: "Publications & Médias", en: "Publications & Media" },
  "info.title": { fr: "Actualités & Bulletins d'Information", en: "News & Newsletters" },
  "info.desc": {
    fr: "Suivez la vie fraternelle et missionnaire de la Province : communiqués du Conseil, bulletins Info-PSF, réflexions théologiques et nominations.",
    en: "Follow the fraternal and missionary life of the Province: Council press releases, Info-PSF newsletters, theological reflections, and appointments.",
  },
  "info.popular.title": { fr: "Articles les Plus Consultés & Archives", en: "Most Viewed Articles & Archives" },
  "info.detail.back": { fr: "Retour aux actualités & publications", en: "Back to news & publications" },
  "info.detail.themes": { fr: "Thématiques :", en: "Topics:" },
  "info.detail.related": { fr: "Autres Publications Récentes", en: "Other Recent Publications" },

  "cat.province-sainte-famille.title": { fr: "Province Sainte Famille", en: "Holy Family Province" },
  "cat.province-sainte-famille.subtitle": {
    fr: "Suivez la vie communautaire, les visites pastorales et les grands rassemblements des Pères et Frères Pallottins.",
    en: "Follow the community life, pastoral visits, and major gatherings of the Pallottine Fathers and Brothers.",
  },
  "cat.bulletin-dinformation.title": { fr: "Bulletins d'Information (Info-PSF)", en: "Newsletters (Info-PSF)" },
  "cat.bulletin-dinformation.subtitle": {
    fr: "Publications trimestrielles et mensuelles informant sur la vie apostolique, pastorale et caritative de notre Province.",
    en: "Quarterly and monthly publications reporting on the apostolic, pastoral, and charitable life of our Province.",
  },
  "cat.generalat.title": { fr: "Généralat (Rome)", en: "Generalate (Rome)" },
  "cat.generalat.subtitle": {
    fr: "Les échos de la Curie Générale de la Société de l'Apostolat Catholique (Piazza San Vincenzo Pallotti, Rome) et de la famille pallottine mondiale.",
    en: "News from the General Curia of the Society of the Catholic Apostolate (Piazza San Vincenzo Pallotti, Rome) and the worldwide Pallottine family.",
  },
  "cat.union-de-lapostolat-catholique.title": { fr: "Union de l'Apostolat Catholique", en: "Union of Catholic Apostolate" },
  "cat.union-de-lapostolat-catholique.subtitle": {
    fr: "Mobiliser tous les fidèles laïcs, religieux et clercs dans l'esprit de saint Vincent Pallotti pour raviver la foi et rallumer la charité.",
    en: "Mobilizing all lay faithful, religious, and clergy in the spirit of Saint Vincent Pallotti to revive faith and rekindle charity.",
  },
  "cat.communiques.title": { fr: "Communiqués Officiels", en: "Official Press Releases" },
  "cat.communiques.subtitle": {
    fr: "Déclarations officielles, nominations annuelles des confrères et actes de gouvernement provincial.",
    en: "Official statements, annual appointments of confreres, and acts of provincial governance.",
  },
  "cat.ouvrages-des-confreres.title": { fr: "Ouvrages & Écrits des Confrères", en: "Publications & Writings by Members" },
  "cat.ouvrages-des-confreres.subtitle": {
    fr: "Valorisation de la recherche théologique, pastorale, philosophique et historique des membres de notre Province.",
    en: "Highlighting theological, pastoral, philosophical, and historical research by members of our Province.",
  },
  "cat.autres.title": { fr: "Réflexions & Vie Chrétienne", en: "Reflections & Christian Life" },
  "cat.autres.subtitle": {
    fr: "Textes spirituels, méditations bibliques et éclairages pallottins pour approfondir notre amour pour Dieu et pour le prochain.",
    en: "Spiritual texts, biblical meditations, and Pallottine insights to deepen our love for God and neighbor.",
  },

  // ── Contact Page ────────────────────────────────────────────
  "contact.badge": { fr: "Maison Provinciale", en: "Provincial House" },
  "contact.title": { fr: "Contactez la Province Sainte Famille", en: "Contact the Holy Family Province" },
  "contact.desc": {
    fr: "Le secrétariat provincial et l'administration sont à votre écoute pour toute demande d'information, intentions de messe, apostolat ou accueil au Centre Saint Vincent Pallotti.",
    en: "The provincial secretariat and administration are at your service for any information requests, Mass intentions, apostolate inquiries, or hospitality at the Saint Vincent Pallotti Center.",
  },
  "contact.hq.title": { fr: "Siège Central à Gikondo", en: "Central Headquarters in Gikondo" },
  "contact.address.label": { fr: "Adresse physique :", en: "Physical address:" },
  "contact.address.line1": { fr: "Maison Provinciale Sainte Famille", en: "Holy Family Provincial House" },
  "contact.address.line2": { fr: "Quartier Gikondo, Ville de Kigali", en: "Gikondo District, City of Kigali" },
  "contact.pobox.label": { fr: "Boîte Postale :", en: "P.O. Box:" },
  "contact.phones.label": { fr: "Téléphones du Secrétariat :", en: "Secretariat Phones:" },
  "contact.hours.label": { fr: "Permanence Pastorale :", en: "Pastoral Office Hours:" },
  "contact.hours.weekdays": { fr: "Lundi au Vendredi : 8h30 - 17h00", en: "Monday to Friday: 8:30 AM - 5:00 PM" },
  "contact.hours.saturday": { fr: "Samedi : 9h00 - 13h00", en: "Saturday: 9:00 AM - 1:00 PM" },
  "contact.services.title": { fr: "Services & Œuvres à Gikondo", en: "Services & Works in Gikondo" },
  "contact.services.1": { fr: "Paroisse Saint Vincent Pallotti de Gikondo", en: "Saint Vincent Pallotti Parish of Gikondo" },
  "contact.services.2": { fr: "Centre Saint Vincent Pallotti Ltd (Hôtellerie & Sessions)", en: "Saint Vincent Pallotti Center Ltd (Hospitality & Sessions)" },
  "contact.services.3": { fr: "Fondation Pallottine pour la Famille (FPF) & Caritas", en: "Pallottine Foundation for the Family (FPF) & Caritas" },
  "contact.services.4": { fr: "Pallotti Presse & Journal Hobe (B.P. 863)", en: "Pallotti Press & Hobe Magazine (P.O. Box 863)" },
  "contact.form.title": { fr: "Envoyer un Message au Secrétariat", en: "Send a Message to the Secretariat" },
  "contact.form.subtitle": {
    fr: "Remplissez ce formulaire pour adresser votre message ou demande de messe au secrétariat provincial.",
    en: "Fill out this form to send your message or Mass intention request to the provincial secretariat.",
  },
  "contact.form.name": { fr: "Nom complet *", en: "Full Name *" },
  "contact.form.name.ph": { fr: "Votre nom", en: "Your name" },
  "contact.form.email": { fr: "Adresse e-mail *", en: "Email Address *" },
  "contact.form.email.ph": { fr: "votre.email@exemple.com", en: "your.email@example.com" },
  "contact.form.phone": { fr: "Téléphone", en: "Phone" },
  "contact.form.subject": { fr: "Objet de la demande", en: "Subject" },
  "contact.form.opt1": { fr: "Demande d'information générale", en: "General information request" },
  "contact.form.opt2": { fr: "Intentions de messe", en: "Mass intentions" },
  "contact.form.opt3": { fr: "Pastorale vocationnelle (Devenir prêtre/frère)", en: "Vocational ministry (Become a priest/brother)" },
  "contact.form.opt4": { fr: "Accueil au Centre Saint Vincent Pallotti (Gikondo)", en: "Hospitality at St. Vincent Pallotti Center (Gikondo)" },
  "contact.form.opt5": { fr: "Sanctuaire de Kibeho, Kabuga ou Ruhango", en: "Sanctuary of Kibeho, Kabuga, or Ruhango" },
  "contact.form.opt6": { fr: "Pallotti Presse / Abonnement Hobe", en: "Pallotti Press / Hobe Subscription" },
  "contact.form.message": { fr: "Votre Message *", en: "Your Message *" },
  "contact.form.message.ph": { fr: "Écrivez votre message ici...", en: "Write your message here..." },
  "contact.form.submit": { fr: "Envoyer le Message", en: "Send Message" },

  // ── Identité Overview ───────────────────────────────────────
  "identite.badge": { fr: "Spiritualité & Racines", en: "Spirituality & Roots" },
  "identite.title": { fr: "Notre Identité Pallottine", en: "Our Pallottine Identity" },
  "identite.desc": {
    fr: "« L'Amour du Christ nous presse » (Caritas Christi Urget Nos). Plongez dans l'héritage vivant de Saint Vincent Pallotti et dans la mission de la Société de l'Apostolat Catholique.",
    en: "\"The Love of Christ urges us\" (Caritas Christi Urget Nos). Dive into the living legacy of Saint Vincent Pallotti and the mission of the Society of the Catholic Apostolate.",
  },
  "identite.sec1.title": { fr: "Saint Vincent Pallotti", en: "Saint Vincent Pallotti" },
  "identite.sec1.sub": { fr: "Notre Saint Fondateur", en: "Our Holy Founder" },
  "identite.sec1.desc": {
    fr: "Prêtre romain (1795-1850) prophète du rôle des laïcs dans l'Église et apôtre inlassable de la charité évangélique.",
    en: "Roman priest (1795-1850), prophet of the role of the laity in the Church and tireless apostle of evangelical charity.",
  },
  "identite.sec2.title": { fr: "Notre Charisme", en: "Our Charism" },
  "identite.sec2.sub": { fr: "Raviver la Foi et rallumer la Charité", en: "Revive Faith and Rekindle Charity" },
  "identite.sec2.desc": {
    fr: "L'union de tous les baptisés (prêtres, consacrés et laïcs) au sein de l'Union de l'Apostolat Catholique (UAC) pour enflammer le monde de l'amour de Dieu.",
    en: "The union of all the baptized (priests, consecrated, and laity) within the Union of Catholic Apostolate (UAC) to set the world ablaze with God's love.",
  },
  "identite.sec3.title": { fr: "Notre Histoire", en: "Our History" },
  "identite.sec3.sub": { fr: "De Rome aux collines du Rwanda et d'Afrique", en: "From Rome to the Hills of Rwanda and Africa" },
  "identite.sec3.desc": {
    fr: "Depuis la fondation à Rome en 1835 jusqu'à l'arrivée des premiers missionnaires pallottins au Rwanda en 1973 et le rayonnement en RDC et en Belgique.",
    en: "From the foundation in Rome in 1835 to the arrival of the first Pallottine missionaries in Rwanda in 1973 and outreach in DRC and Belgium.",
  },
  "identite.sec4.title": { fr: "Pastorale Vocationnelle", en: "Vocational Ministry" },
  "identite.sec4.sub": { fr: "Devenir Prêtre ou Frère Pallottin", en: "Become a Pallottine Priest or Brother" },
  "identite.sec4.desc": {
    fr: "Cheminement, étapes de formation (Postulat à Keshero, Noviciat Nazareth à Butare) et discernement pour les jeunes appelés à suivre le Christ.",
    en: "Journey, stages of formation (Postulancy in Keshero, Nazareth Novitiate in Butare), and discernment for young people called to follow Christ.",
  },
  "identite.quote.badge": { fr: "Devise & Vocation", en: "Motto & Vocation" },
  "identite.quote.text": {
    fr: "« Raviver la Foi, rallumer la Charité et les propager dans le monde entier afin qu'il n'y ait bientôt qu'un seul troupeau sous un seul Pasteur. »",
    en: "\"To revive Faith, rekindle Charity, and spread them throughout the world so that soon there may be one flock under one Shepherd.\"",
  },
  "identite.quote.author": { fr: "— Saint Vincent Pallotti (1795 - 1850)", en: "— Saint Vincent Pallotti (1795 - 1850)" },

  // ── Fondateur Page ──────────────────────────────────────────
  "fondateur.badge": { fr: "Notre Fondateur", en: "Our Founder" },
  "fondateur.desc": {
    fr: "Prêtre romain visionnaire, mystique de la charité infinie et prophète de l'apostolat de tous les baptisés.",
    en: "Visionary Roman priest, mystic of infinite charity, and prophet of the apostolate of all the baptized.",
  },
  "fondateur.feast": { fr: "Fête liturgique :", en: "Liturgical feast:" },
  "fondateur.birth": { fr: "Naissance :", en: "Birth:" },
  "fondateur.death": { fr: "Retour au Père :", en: "Return to the Father:" },
  "fondateur.canonization": { fr: "Canonisation :", en: "Canonization:" },
  "fondateur.motto.title": { fr: "La Devise Pallottine", en: "The Pallottine Motto" },
  "fondateur.motto.desc": {
    fr: "L'Amour du Christ nous presse (2 Corinthiens 5, 14). Ce passage paulinien a constitué le battement de cœur spirituel de Vincent Pallotti toute sa vie durant.",
    en: "The Love of Christ urges us (2 Corinthians 5:14). This Pauline passage was the spiritual heartbeat of Vincent Pallotti throughout his life.",
  },
  "fondateur.bio.title": { fr: "Une vie consacrée à rallumer la foi et la charité", en: "A life consecrated to rekindling faith and charity" },
  "fondateur.bio.p1": {
    fr: "Vincent Pallotti descend de la noble famille des Pallotti de Norcia et de la famille De Rossi de Rome. Dès son jeune âge à l'école de San Pantaleone puis au collège romain, il éprouve le désir ardent du sacerdoce. Ordonné prêtre le 16 mai 1818, il célèbre sa première messe à l'église du Gesù à Frascati, à l'autel de Notre-Dame Refuge des Pécheurs. Docteur en théologie en juillet de la même année, il se dévoue corps et âme au confessionnal, aux malades et à la jeunesse défavorisée.",
    en: "Vincent Pallotti descended from the noble Pallotti family of Norcia and the De Rossi family of Rome. From his youth at the San Pantaleone school and then at the Roman College, he felt an ardent desire for the priesthood. Ordained a priest on May 16, 1818, he celebrated his first Mass at the Gesù Church in Frascati, at the altar of Our Lady Refuge of Sinners. Doctor of Theology in July of the same year, he devoted himself body and soul to the confessional, the sick, and disadvantaged youth.",
  },
  "fondateur.bio.p2": {
    fr: "En 1835, sous l'inspiration de l'Esprit Saint, il fonde l'Union de l'Apostolat Catholique (UAC). Son intuition révolutionnaire devance de plus d'un siècle le concile Vatican II : tout baptisé — laïc, clerc ou religieux — est appelé à être apôtre dans son état de vie.",
    en: "In 1835, under the inspiration of the Holy Spirit, he founded the Union of Catholic Apostolate (UAC). His revolutionary intuition preceded the Second Vatican Council by more than a century: every baptized person—lay, cleric, or religious—is called to be an apostle in their state of life.",
  },
  "fondateur.pillars.title": { fr: "Piliers de sa Spiritualité Apostolique :", en: "Pillars of His Apostolic Spirituality:" },
  "fondateur.bio.p3": {
    fr: "Le Pape Jean XXIII, qui le canonisa en plein concile Vatican II en 1963, dira de lui : « Saint Vincent Pallotti est une des figures les plus éminentes de l'histoire de l'Église au XIXe siècle... C'est le précurseur de l'Action Catholique et de l'apostolat moderne des laïcs. »",
    en: "Pope John XXIII, who canonized him during the Second Vatican Council in 1963, said of him: \"Saint Vincent Pallotti is one of the most eminent figures in the history of the Church in the 19th century... He is the precursor of Catholic Action and of the modern apostolate of the laity.\"",
  },
  "fondateur.cta.title": { fr: "Rejoindre notre famille apostolique ?", en: "Join our apostolic family?" },
  "fondateur.cta.desc": { fr: "Découvrez les vocations sacerdotales et fraternelles.", en: "Discover priestly and brotherly vocations." },
  "fondateur.cta.btn": { fr: "Nous écrire", en: "Write to us" },

  // ── Charisme Page ───────────────────────────────────────────
  "charisme.badge": { fr: "Spiritualité Pallottine", en: "Pallottine Spirituality" },
  "charisme.title": { fr: "Le Charisme de l'Apostolat Catholique", en: "The Charism of the Catholic Apostolate" },
  "charisme.desc": {
    fr: "« Raviver la Foi, rallumer la Charité et les propager dans le monde entier » : telle est la mission prophétique confiée par l'Esprit Saint à notre famille religieuse.",
    en: "\"Revive Faith, rekindle Charity, and spread them throughout the world\": such is the prophetic mission entrusted by the Holy Spirit to our religious family.",
  },
  "charisme.img.sub": { fr: "Spiritualité vivante", en: "Living spirituality" },
  "charisme.img.title": { fr: "La Miséricorde et l'Apostolat", en: "Mercy and the Apostolate" },
  "charisme.k1.title": { fr: "Modèle Évangélique :", en: "Evangelical Model:" },
  "charisme.k1.desc": {
    fr: "Jésus-Christ, Apôtre du Père Éternel, dont la règle fondamentale est la charité sans frontière.",
    en: "Jesus Christ, Apostle of the Eternal Father, whose fundamental rule is charity without borders.",
  },
  "charisme.k2.title": { fr: "Patronne de l'Union :", en: "Patroness of the Union:" },
  "charisme.k2.desc": {
    fr: "Marie Reine des Apôtres, présente au Cénacle, modèle de foi humble et d'accueil de l'Esprit.",
    en: "Mary Queen of Apostles, present in the Cenacle, model of humble faith and openness to the Spirit.",
  },
  "charisme.k3.title": { fr: "Horizon Missionnaire :", en: "Missionary Horizon:" },
  "charisme.k3.desc": {
    fr: "Universel, embrassant tous les états de vie, toutes les cultures et toutes les détresses humaines.",
    en: "Universal, embracing all states of life, all cultures, and all human distress.",
  },
  "charisme.motto.badge": { fr: "L'Énergie Apostolique", en: "Apostolic Energy" },
  "charisme.motto.desc": {
    fr: "L'Amour du Christ est la force qui enflamme nos cœurs et pousse les confrères à donner leur vie pour le salut du prochain et le service des plus pauvres.",
    en: "The Love of Christ is the force that inflames our hearts and impels confreres to give their lives for the salvation of their neighbor and the service of the poorest.",
  },
  "charisme.foundations.title": { fr: "Les Fondements Théologiques et Spirituels", en: "Theological and Spiritual Foundations" },
  "charisme.foundations.p1": {
    fr: "Lorsque saint Vincent Pallotti fonda l'Union de l'Apostolat Catholique en 1835 à Rome, il perçut avec une acuité extraordinaire les défis de la sécularisation et de la tiédeur spirituelle. Sa réponse ne fut pas de créer un ordre replié sur lui-même, mais d'appeler tous les chrétiens à s'unir pour raviver la flamme de la foi.",
    en: "When Saint Vincent Pallotti founded the Union of Catholic Apostolate in 1835 in Rome, he perceived with extraordinary acuity the challenges of secularization and spiritual lukewarmness. His response was not to create a self-enclosed order, but to call all Christians to unite to rekindle the flame of faith.",
  },
  "charisme.p1.title": { fr: "L'Apostolat Universel de Tous les Baptisés", en: "The Universal Apostolate of All the Baptized" },
  "charisme.p1.desc": {
    fr: "Vincent Pallotti affirmait dès 1835 que chaque chrétien, par la grâce de son baptême, a le droit et le devoir sacré d'être apôtre là où il vit et travaille. L'apostolat n'est pas le privilège exclusif du clergé mais la vocation baptismale de tout le peuple de Dieu.",
    en: "As early as 1835, Vincent Pallotti affirmed that every Christian, by the grace of baptism, has the sacred right and duty to be an apostle wherever they live and work. The apostolate is not the exclusive privilege of the clergy but the baptismal vocation of the entire People of God.",
  },
  "charisme.p2.title": { fr: "L'Union de l'Apostolat Catholique (UAC)", en: "The Union of Catholic Apostolate (UAC)" },
  "charisme.p2.desc": {
    fr: "Une vaste communion ecclésiale réunissant les prêtres et frères pallottins (SAC), les sœurs pallottines et les fidèles laïcs engagés. L'UAC fédère toutes les forces apostoliques pour animer et sanctifier la société contemporaine.",
    en: "A vast ecclesial communion uniting Pallottine priests and brothers (SAC), Pallottine sisters, and committed lay faithful. The UAC brings together all apostolic forces to enliven and sanctify contemporary society.",
  },
  "charisme.p3.title": { fr: "La Miséricorde et la Charité Infinie de Dieu", en: "The Mercy and Infinite Charity of God" },
  "charisme.p3.desc": {
    fr: "Méditant inlassablement sur Dieu qui est Amour et Miséricorde infinie, saint Vincent Pallotti a fait de la devise « Caritas Christi Urget Nos » (L'Amour du Christ nous presse) l'énergie motrice de tout son apostolat.",
    en: "Meditating tirelessly on God who is infinite Love and Mercy, Saint Vincent Pallotti made the motto \"Caritas Christi Urget Nos\" (The Love of Christ urges us) the driving energy of his entire apostolate.",
  },
  "charisme.p4.title": { fr: "Marie, Reine des Apôtres", en: "Mary, Queen of Apostles" },
  "charisme.p4.desc": {
    fr: "Modèle parfait d'amour pour Dieu et de zèle pour le salut des âmes. Au Cénacle, la Vierge Marie a prié avec les Apôtres dans l'attente de l'Esprit Saint. Elle est pour les pallottins la Mère, l'Éducatrice et la Reine des Apôtres.",
    en: "Perfect model of love for God and zeal for the salvation of souls. In the Cenacle, the Virgin Mary prayed with the Apostles awaiting the Holy Spirit. For Pallottines, she is the Mother, Educator, and Queen of Apostles.",
  },
  "charisme.greatlakes.title": { fr: "L'actualité de notre charisme dans les Grands Lacs", en: "The Relevance of Our Charism in the Great Lakes" },
  "charisme.greatlakes.desc": {
    fr: "Au Rwanda, en République Démocratique du Congo et en Belgique, la Province Sainte Famille incarne ce charisme à travers ses sanctuaires de réconciliation et de prière (Kibeho, Kabuga, Ruhango), ses paroisses vivantes, ses écoles et centres de formation (Genezareth Keshero, Butare Nazareth) et son apostolat médiatique (Pallotti Presse).",
    en: "In Rwanda, the Democratic Republic of Congo, and Belgium, the Holy Family Province embodies this charism through its sanctuaries of reconciliation and prayer (Kibeho, Kabuga, Ruhango), its vibrant parishes, its schools and formation centers (Genezareth Keshero, Butare Nazareth), and its media apostolate (Pallotti Press).",
  },
  "charisme.link.founder": { fr: "Saint Vincent Pallotti", en: "Saint Vincent Pallotti" },
  "charisme.link.history": { fr: "Notre Histoire depuis 1973", en: "Our History since 1973" },

  // ── Histoire Page ───────────────────────────────────────────
  "histoire.badge": { fr: "Racines & Jalons", en: "Roots & Milestones" },
  "histoire.title": { fr: "Notre Histoire Missionnaire", en: "Our Missionary History" },
  "histoire.desc": {
    fr: "Plus de 50 ans de présence, d'évangélisation et de service fraternel au Rwanda, en République Démocratique du Congo et en Belgique au sein de la Province Sainte Famille.",
    en: "Over 50 years of presence, evangelization, and fraternal service in Rwanda, the Democratic Republic of Congo, and Belgium within the Holy Family Province.",
  },
  "histoire.synth.title": { fr: "L'Appel des Grands Lacs : Une graine féconde semée en 1973", en: "The Call of the Great Lakes: A Fruitful Seed Sown in 1973" },
  "histoire.synth.p1": {
    fr: "L'implantation de la Société de l'Apostolat Catholique dans la région des Grands Lacs est le fruit d'un appel providentiel. En 1973, à l'invitation de Mgr Jean-Baptiste Gahamanyi, dix religieux pallottins pionniers quittent la Pologne pour apporter la bonne nouvelle au Rwanda.",
    en: "The establishment of the Society of the Catholic Apostolate in the Great Lakes region is the fruit of a providential call. In 1973, at the invitation of Bishop Jean-Baptiste Gahamanyi, ten pioneering Pallottine religious left Poland to bring the Good News to Rwanda.",
  },
  "histoire.synth.p2": {
    fr: "Dès leur arrivée à Butare le 8 juin 1973, ils s'attachent à apprendre la langue et à comprendre en profondeur les aspirations du peuple rwandais, fidèles à la consigne de Vincent Pallotti dans la Copia Lambruschini : « Tous apprendront la langue du pays où ils vivent... pour les œuvres de la gloire de Dieu ».",
    en: "Upon their arrival in Butare on June 8, 1973, they dedicated themselves to learning the language and deeply understanding the aspirations of the Rwandan people, faithful to Vincent Pallotti's instruction in the Copia Lambruschini: \"All will learn the language of the country where they live... for the works of God's glory.\"",
  },
  "histoire.synth.p3": {
    fr: "Aujourd'hui, la Province Sainte Famille est devenue une province dynamique et autonome, enrichie de nombreux confrères autochtones clercs et laïcs consacrés, rayonnant sur deux continents.",
    en: "Today, the Holy Family Province has become a dynamic and autonomous province, enriched by many local clerical and consecrated lay confreres, shining across two continents.",
  },
  "histoire.img.sub": { fr: "Témoignage vivant", en: "Living witness" },
  "histoire.img.title": { fr: "Sanctuaire Jésus Miséricordieux de Ruhango", en: "Jesus the Merciful Sanctuary of Ruhango" },
  "histoire.timeline.title": { fr: "Chronologie des Événements Fondateurs", en: "Timeline of Founding Events" },
  "histoire.m1.year": { fr: "1835", en: "1835" },
  "histoire.m1.title": { fr: "Fondation à Rome par Saint Vincent Pallotti", en: "Foundation in Rome by Saint Vincent Pallotti" },
  "histoire.m1.desc": {
    fr: "Inspiré par le Saint-Esprit, le prêtre romain Vincent Pallotti fonde l'Union de l'Apostolat Catholique (UAC). Son intuition novatrice précède de plus d'un siècle l'enseignement du Concile Vatican II sur la coresponsabilité apostolique de tous les baptisés.",
    en: "Inspired by the Holy Spirit, the Roman priest Vincent Pallotti founds the Union of Catholic Apostolate (UAC). His innovative intuition precedes by more than a century the teaching of the Second Vatican Council on the apostolic co-responsibility of all the baptized.",
  },
  "histoire.m2.year": { fr: "1963", en: "1963" },
  "histoire.m2.title": { fr: "Canonisation par le Pape Jean XXIII", en: "Canonization by Pope John XXIII" },
  "histoire.m2.desc": {
    fr: "Le 20 janvier 1963, en plein Concile Vatican II, saint Jean XXIII proclame saint Vincent Pallotti comme précurseur de l'Action Catholique et prophète de l'apostolat moderne des laïcs dans l'Église universelle.",
    en: "On January 20, 1963, during the Second Vatican Council, Saint John XXIII proclaims Saint Vincent Pallotti as precursor of Catholic Action and prophet of the modern lay apostolate in the universal Church.",
  },
  "histoire.m3.year": { fr: "1973", en: "1973" },
  "histoire.m3.title": { fr: "Arrivée des premiers missionnaires pallottins au Rwanda (8 juin 1973)", en: "Arrival of the first Pallottine missionaries in Rwanda (June 8, 1973)" },
  "histoire.m3.desc": {
    fr: "À la demande de Mgr Jean-Baptiste Gahamanyi, premier évêque de Butare, dix missionnaires pallottins de la Province polonaise du Christ-Roi quittent la Pologne le 31 mai 1973 et posent leurs valises au Rwanda le 8 juin 1973. C'est le début officiel de la présence pallottine en Afrique centrale.",
    en: "At the request of Bishop Jean-Baptiste Gahamanyi, first Bishop of Butare, ten Pallottine missionaries from the Polish Province of Christ the King leave Poland on May 31, 1973, and arrive in Rwanda on June 8, 1973. This marks the official beginning of the Pallottine presence in Central Africa.",
  },
  "histoire.m4.year": { fr: "1974", en: "1974" },
  "histoire.m4.title": { fr: "Reconnaissance de la personnalité juridique (26 janvier 1974)", en: "Recognition of legal personality (January 26, 1974)" },
  "histoire.m4.desc": {
    fr: "L'association de la Société de l'Apostolat Catholique obtient officiellement la personnalité civile et juridique par arrêté ministériel au Rwanda le 26 janvier 1974, consacrant son rôle pour le développement social, pastoral et éducatif.",
    en: "The association of the Society of the Catholic Apostolate officially obtains civil and legal personality by ministerial decree in Rwanda on January 26, 1974, affirming its role in social, pastoral, and educational development.",
  },
  "histoire.m5.year": { fr: "1980 - 1990", en: "1980 - 1990" },
  "histoire.m5.title": { fr: "Expansion pastorale et œuvres structurantes", en: "Pastoral expansion and foundational works" },
  "histoire.m5.desc": {
    fr: "Développement des premières paroisses, fondation de l'imprimerie Pallotti Presse et reprise de la revue pour enfants « Hobe ». Naissance des communautés de formation pour les jeunes séminaristes autochtones au noviciat Nazareth à Butare.",
    en: "Development of the first parishes, founding of the Pallotti Press printing house, and takeover of the children's magazine \"Hobe.\" Birth of formation communities for young local seminarians at the Nazareth novitiate in Butare.",
  },
  "histoire.m6.year": { fr: "1995+", en: "1995+" },
  "histoire.m6.title": { fr: "Extension en République Démocratique du Congo & Belgique", en: "Expansion into the Democratic Republic of Congo & Belgium" },
  "histoire.m6.desc": {
    fr: "Implantation apostolique dans la région du Kivu : création du Centre Pallotti de Formation (CPF) Genezareth à Goma-Keshero, fondation de la Paroisse Sainte Faustine Kowalska à Buturande, et affiliation de la Procure Missionnaire de Bruxelles (Avenue Rogier).",
    en: "Apostolic establishment in the Kivu region: creation of the Genezareth Pallotti Formation Center (CPF) in Goma-Keshero, founding of Saint Faustina Kowalska Parish in Buturande, and affiliation of the Brussels Missionary Procure (Avenue Rogier).",
  },
  "histoire.m7.year": { fr: "2017", en: "2017" },
  "histoire.m7.title": { fr: "Érection canonique de Karhale à Bukavu", en: "Canonical erection of Karhale in Bukavu" },
  "histoire.m7.desc": {
    fr: "Le 20 mars 2017, la Paroisse Saint Vincent Pallotti de Karhale sur les hauteurs de Bukavu est canoniquement érigée, renforçant la présence auprès des étudiants et l'œuvre sociale de l'Adoption du Cœur.",
    en: "On March 20, 2017, Saint Vincent Pallotti Parish of Karhale on the heights of Bukavu is canonically erected, strengthening the presence among students and the social work of Adoption of the Heart.",
  },
  "histoire.m8.year": { fr: "Aujourd'hui", en: "Today" },
  "histoire.m8.title": { fr: "Une Province Sainte Famille rayonnante et missionnaire", en: "A radiant and missionary Holy Family Province" },
  "histoire.m8.desc": {
    fr: "La Province regroupe plus de 18 communautés actives, anime les sanctuaires majeurs de la Miséricorde et de Kibeho, prépare les générations futures de prêtres et de frères et soutient de multiples missions en Europe (France, Italie, Belgique).",
    en: "The Province brings together over 18 active communities, animates major sanctuaries of Mercy and Kibeho, prepares future generations of priests and brothers, and supports multiple missions in Europe (France, Italy, Belgium).",
  },
  "histoire.cta.title": { fr: "Explorez nos communautés aujourd'hui", en: "Explore our communities today" },
  "histoire.cta.desc": {
    fr: "Découvrez la carte et le répertoire des 18 communautés de la Province Sainte Famille.",
    en: "Discover the map and directory of the 18 communities of the Holy Family Province.",
  },
  "histoire.cta.btn": { fr: "Voir les Communautés", en: "View Communities" },

  // ── Pastorale Vocationnelle Page ────────────────────────────
  "voc.badge": { fr: "Vocations & Discernement", en: "Vocations & Discernment" },
  "voc.title": { fr: "Devenir Prêtre ou Frère Pallottin", en: "Become a Pallottine Priest or Brother" },
  "voc.desc": {
    fr: "« Venez et voyez » (Jn 1, 39). Tu ressens dans ton cœur le désir ardent d'être tout à Dieu et de te consacrer au salut du monde ? Découvre la famille pallottine.",
    en: "\"Come and see\" (Jn 1:39). Do you feel in your heart the ardent desire to belong wholly to God and dedicate yourself to the salvation of the world? Discover the Pallottine family.",
  },
  "voc.intro.title": { fr: "L'Appel à l'Apostolat dans les pas de Vincent Pallotti", en: "The Call to the Apostolate in the Footsteps of Vincent Pallotti" },
  "voc.intro.p1": {
    fr: "Dans la Société de l'Apostolat Catholique, les prêtres et les frères consacrés vivent en communauté fraternelle, animés par la règle de la charité. Ils ne forment pas une caste isolée, mais travaillent main dans la main avec les fidèles laïcs pour ranimer la foi partout où l'Église a besoin d'eux.",
    en: "In the Society of the Catholic Apostolate, consecrated priests and brothers live in fraternal community, animated by the rule of charity. They do not form an isolated caste, but work hand in hand with the lay faithful to revive faith wherever the Church needs them.",
  },
  "voc.criteria.title": { fr: "Critères d'admission pour les candidats :", en: "Admission criteria for candidates:" },
  "voc.criteria.1": {
    fr: "Être chrétien catholique baptisé et confirmé, menant une vie de foi authentique",
    en: "Be a baptized and confirmed Catholic Christian, leading an authentic life of faith",
  },
  "voc.criteria.2": {
    fr: "Avoir obtenu le Diplôme d'État / Baccalauréat (Humanités complètes)",
    en: "Have obtained the State Diploma / High School Diploma (completed secondary studies)",
  },
  "voc.criteria.3": {
    fr: "Jouir d'une bonne santé physique, d'un équilibre psychologique et d'aptitudes à la vie en communauté",
    en: "Enjoy good physical health, psychological balance, and aptitude for community life",
  },
  "voc.criteria.4": {
    fr: "Désir sincère d'aimer et de servir Dieu et le prochain dans l'esprit de saint Vincent Pallotti",
    en: "Sincere desire to love and serve God and neighbor in the spirit of Saint Vincent Pallotti",
  },
  "voc.contact.badge": { fr: "Contact Vocations", en: "Vocations Contact" },
  "voc.contact.title": { fr: "Commission Vocationnelle", en: "Vocational Commission" },
  "voc.contact.desc": {
    fr: "N'hésite pas à poser tes questions, à solliciter un entretien ou à demander des informations sur les prochaines sessions de discernement.",
    en: "Do not hesitate to ask your questions, request an interview, or ask for information about upcoming discernment sessions.",
  },
  "voc.contact.address": { fr: "Maison Provinciale Sainte Famille, Kigali-Gikondo", en: "Holy Family Provincial House, Kigali-Gikondo" },
  "voc.steps.title": { fr: "Les Étapes de la Formation Pallottine", en: "Stages of Pallottine Formation" },
  "voc.s1.title": { fr: "L'Aspiration & le Discernement", en: "Aspirancy & Discernment" },
  "voc.s1.place": { fr: "Dans votre paroisse d'origine", en: "In your home parish" },
  "voc.s1.desc": {
    fr: "Contact avec le chargé des vocations, participation aux camps vocationnels, correspondances et discernement personnel avec un directeur spirituel.",
    en: "Contact with the vocations officer, participation in vocation camps, correspondence, and personal discernment with a spiritual director.",
  },
  "voc.s2.title": { fr: "Le Postulat (Initiation première)", en: "Postulancy (Initial Initiation)" },
  "voc.s2.place": { fr: "Maison de Formation Saint Vincent Pallotti (Keshero, Goma)", en: "Saint Vincent Pallotti Formation House (Keshero, Goma)" },
  "voc.s2.desc": {
    fr: "Une année d'approfondissement de la vie chrétienne, de consolidation de la maturité humaine et d'initiation à la spiritualité de saint Vincent Pallotti.",
    en: "A year of deepening Christian life, consolidating human maturity, and initiation into the spirituality of Saint Vincent Pallotti.",
  },
  "voc.s3.title": { fr: "Le Noviciat / Période d'Introduction", en: "Novitiate / Introductory Period" },
  "voc.s3.place": { fr: "Maison Nazareth (Butare / Huye, Rwanda)", en: "Nazareth House (Butare / Huye, Rwanda)" },
  "voc.s3.desc": {
    fr: "Année de désert et de consécration spirituelle intense. Étude de la Règle, de l'histoire de la Société et apprentissage de la vie de prière et de fraternité.",
    en: "A year of desert and intense spiritual consecration. Study of the Rule, history of the Society, and learning a life of prayer and fraternity.",
  },
  "voc.s4.title": { fr: "Études Philosophiques & Théologiques", en: "Philosophical & Theological Studies" },
  "voc.s4.place": { fr: "Grands Séminaires de Kabgayi, Ruzizi, Rome", en: "Major Seminaries of Kabgayi, Ruzizi, Rome" },
  "voc.s4.desc": {
    fr: "Formation intellectuelle, pastorale et humaine solide en vue de la première consécration puis de l'ordination sacerdotale ou de l'engagement perpétuel comme frère.",
    en: "Solid intellectual, pastoral, and human formation toward first consecration and then priestly ordination or perpetual commitment as a brother.",
  },
  "voc.form.title": { fr: "Prendre Contact avec le Père Chargé des Vocations", en: "Contact the Vocations Director" },
  "voc.form.sub": {
    fr: "Laisse-nous tes coordonnées pour être contacté en toute discrétion et fraternité.",
    en: "Leave us your contact details to be reached with full discretion and fraternity.",
  },
  "voc.form.name": { fr: "Nom et Prénom *", en: "Full Name *" },
  "voc.form.name.ph": { fr: "Votre nom complet", en: "Your full name" },
  "voc.form.age": { fr: "Âge *", en: "Age *" },
  "voc.form.phone": { fr: "Téléphone / WhatsApp *", en: "Phone / WhatsApp *" },
  "voc.form.email": { fr: "Email", en: "Email" },
  "voc.form.parish": { fr: "Paroisse et Diocèse de résidence *", en: "Parish and Diocese of residence *" },
  "voc.form.parish.ph": { fr: "Ex: Paroisse Gikondo, Archidiocèse de Kigali", en: "E.g.: Gikondo Parish, Archdiocese of Kigali" },
  "voc.form.msg": { fr: "Votre message ou vos questions", en: "Your message or questions" },
  "voc.form.msg.ph": {
    fr: "Partagez-nous brièvement votre parcours et ce qui vous attire chez les Pallottins...",
    en: "Briefly share your background and what attracts you to the Pallottines...",
  },
  "voc.form.submit": { fr: "Envoyer ma demande de discernement", en: "Send my discernment request" },

  // ── Direction Provinciale ───────────────────────────────────
  "dir.badge": { fr: "Organisation & Gouvernance", en: "Organization & Governance" },
  "dir.title": { fr: "Direction Provinciale", en: "Provincial Leadership" },
  "dir.desc": {
    fr: "Découvrez les organes de direction, d'administration et de concertation qui animent la Province Sainte Famille au service de l'Évangile.",
    en: "Discover the leadership, administration, and consultation bodies that animate the Holy Family Province in service of the Gospel.",
  },
  "dir.s1.title": { fr: "Conseil Provincial", en: "Provincial Council" },
  "dir.s1.sub": { fr: "Gouvernement Provincial", en: "Provincial Government" },
  "dir.s1.desc": {
    fr: "Le Recteur Provincial et ses quatre consulteurs chargés de l'orientation pastorale, canonique et spirituelle de la Province.",
    en: "The Provincial Rector and his four consultors responsible for the pastoral, canonical, and spiritual direction of the Province.",
  },
  "dir.s2.title": { fr: "Administration Provinciale", en: "Provincial Administration" },
  "dir.s2.sub": { fr: "Gestion Temporelle & Biens", en: "Temporal & Asset Management" },
  "dir.s2.desc": {
    fr: "L'Administrateur Provincial et ses adjoints, gestionnaires du patrimoine mobilier, immobilier, des finances et des projets.",
    en: "The Provincial Administrator and his assistants, managers of movable and immovable assets, finances, and projects.",
  },
  "dir.s3.title": { fr: "Secrétariat Provincial", en: "Provincial Secretariat" },
  "dir.s3.sub": { fr: "Chancellerie & Communication", en: "Chancellery & Communication" },
  "dir.s3.desc": {
    fr: "Le Secrétaire du Recteur, l'Archiviste-Notaire et l'équipe chargée des archives canoniques et de la communication officielle.",
    en: "The Rector's Secretary, the Archivist-Notary, and the team responsible for canonical archives and official communication.",
  },
  "dir.s4.title": { fr: "Assemblées Provinciales", en: "Provincial Assemblies" },
  "dir.s4.sub": { fr: "Collégialité & Discernement", en: "Collegiality & Discernment" },
  "dir.s4.desc": {
    fr: "Les assemblées sexennales et locales où s'expriment la communion fraternelle, les bilans et les orientations d'avenir.",
    en: "Six-year and local assemblies expressing fraternal communion, reviews, and future orientations.",
  },
  "dir.s5.title": { fr: "Secrétariats Spécialisés", en: "Specialized Secretariats" },
  "dir.s5.sub": { fr: "SPA, Formation & Missions", en: "SPA, Formation & Missions" },
  "dir.s5.desc": {
    fr: "Organes spécialisés pour l'Apostolat (SPA), la Formation initiale et permanente (SPF) et les Missions & Procures (SPM).",
    en: "Specialized bodies for the Apostolate (SPA), initial and ongoing Formation (SPF), and Missions & Procures (SPM).",
  },
  "dir.s6.title": { fr: "Commissions de Travail", en: "Working Commissions" },
  "dir.s6.sub": { fr: "Finances, Droit, Histoire, Vocations", en: "Finances, Law, History, Vocations" },
  "dir.s6.desc": {
    fr: "Commissions thématiques apportant leur expertise technique et pastorale aux défis de notre temps.",
    en: "Thematic commissions bringing technical and pastoral expertise to the challenges of our time.",
  },

  // ── Conseil Provincial Page ─────────────────────────────────
  "conseil.badge": { fr: "Direction Provinciale", en: "Provincial Leadership" },
  "conseil.title": { fr: "Gouvernement Provincial de la Sainte Famille", en: "Provincial Government of the Holy Family" },
  "conseil.desc": {
    fr: "Le Conseil Provincial est l'organe supérieur de gouvernement et d'orientation pastorale, canonique et missionnaire sous la direction du Recteur Provincial.",
    en: "The Provincial Council is the supreme body of governance and pastoral, canonical, and missionary orientation under the direction of the Provincial Rector.",
  },
  "conseil.members.title": { fr: "Membres du Conseil Provincial", en: "Members of the Provincial Council" },
  "conseil.admin.title": { fr: "Administration Provinciale", en: "Provincial Administration" },
  "conseil.sec.title": { fr: "Secrétariat Provincial & Communication", en: "Provincial Secretariat & Communication" },

  // ── Administration Provinciale Page ─────────────────────────
  "admin.badge": { fr: "Gestion & Intendance", en: "Management & Stewardship" },
  "admin.title": { fr: "Administration Provinciale", en: "Provincial Administration" },
  "admin.desc": {
    fr: "Assurant la pérennité matérielle et la saine gestion des ressources au service de l'évangélisation et des œuvres caritatives de la Province Sainte Famille.",
    en: "Ensuring material sustainability and sound resource management in service of evangelization and the charitable works of the Holy Family Province.",
  },
  "admin.team.title": { fr: "L'Équipe de l'Administration Provinciale", en: "The Provincial Administration Team" },
  "admin.duties.title": { fr: "Missions & Responsabilités de l'Administration", en: "Missions & Responsibilities of the Administration" },
  "admin.d1.title": { fr: "Gestion Temporelle & Patrimoniale", en: "Temporal & Asset Management" },
  "admin.d1.desc": {
    fr: "Supervision rigoureuse de l'ensemble des biens mobiliers et immobiliers de la Province au Rwanda, en République Démocratique du Congo et en Belgique.",
    en: "Rigorous supervision of all movable and immovable property of the Province in Rwanda, the Democratic Republic of Congo, and Belgium.",
  },
  "admin.d2.title": { fr: "Budgets & Comptes Annuels", en: "Budgets & Annual Accounts" },
  "admin.d2.desc": {
    fr: "Préparation des prévisions budgétaires, vérification des bilans financiers des communautés et tenue des comptes consolidés de la Province.",
    en: "Preparation of budget forecasts, auditing community financial statements, and maintaining consolidated provincial accounts.",
  },
  "admin.d3.title": { fr: "Centres d'Accueil & Œuvres Économiques", en: "Hospitality Centers & Economic Works" },
  "admin.d3.desc": {
    fr: "Coordination et gestion stratégique du Centre Saint Vincent Pallotti Ltd de Kigali-Gikondo, de Pallotti Presse Ltd, de KPC Ltd et des structures hôtelières et d'accueil.",
    en: "Coordination and strategic management of Saint Vincent Pallotti Center Ltd in Kigali-Gikondo, Pallotti Press Ltd, KPC Ltd, and hospitality structures.",
  },
  "admin.d4.title": { fr: "Soutien aux Projets Sociaux & Caritatifs", en: "Support for Social & Charitable Projects" },
  "admin.d4.desc": {
    fr: "Appui administratif et logistique aux œuvres de la Fondation Pallottine pour la Famille (FPF) et aux programmes de scolarisation et d'aide d'urgence.",
    en: "Administrative and logistical support for the works of the Pallottine Foundation for the Family (FPF) and schooling and emergency aid programs.",
  },
  "admin.cta.title": { fr: "Découvrir également le Conseil Provincial", en: "Also discover the Provincial Council" },
  "admin.cta.desc": { fr: "Rencontrez le Recteur Provincial et les consulteurs.", en: "Meet the Provincial Rector and the consultors." },
  "admin.cta.btn": { fr: "Conseil Provincial", en: "Provincial Council" },

  // ── Secrétariat Provincial Page ─────────────────────────────
  "secprov.badge": { fr: "Chancellerie & Médias", en: "Chancellery & Media" },
  "secprov.title": { fr: "Secrétariat Provincial", en: "Provincial Secretariat" },
  "secprov.desc": {
    fr: "Au cœur de la vie administrative, juridique et communicationnelle de la Province Sainte Famille.",
    en: "At the heart of the administrative, legal, and communication life of the Holy Family Province.",
  },
  "secprov.team.title": { fr: "Membres du Secrétariat & de la Chancellerie", en: "Members of the Secretariat & Chancellery" },
  "secprov.s1.title": { fr: "Chancellerie & Correspondance Officielle", en: "Chancellery & Official Correspondence" },
  "secprov.s1.desc": {
    fr: "Tenue des registres d'actes canoniques, des décrets de nomination, des correspondances avec le Généralat de Rome et les évêchés.",
    en: "Maintaining canonical act registers, appointment decrees, and correspondence with the Generalate in Rome and dioceses.",
  },
  "secprov.s2.title": { fr: "Archives & Documentation Historique", en: "Archives & Historical Documentation" },
  "secprov.s2.desc": {
    fr: "Conservation mémorielle, inventaire des diaires historiques depuis 1973 et numérisation des documents officiels de la Province.",
    en: "Memorial preservation, inventory of historical diaries since 1973, and digitization of official provincial documents.",
  },
  "secprov.s3.title": { fr: "Communication & Site Web Officiel", en: "Communication & Official Website" },
  "secprov.s3.desc": {
    fr: "Diffusion de l'information apostolique, publication des bulletins Info-PSF, gestion du portail sac-psf.info et présence médiatique.",
    en: "Dissemination of apostolic news, publication of Info-PSF newsletters, management of the sac-psf.info portal, and media presence.",
  },
  "secprov.cta.title": {
    fr: "Besoin d'un certificat, d'un renseignement ou d'une intention de messe ?",
    en: "Need a certificate, information, or a Mass intention?",
  },
  "secprov.cta.desc": { fr: "Contactez directement le secrétariat provincial.", en: "Contact the provincial secretariat directly." },
  "secprov.cta.btn": { fr: "Écrire au Secrétariat", en: "Write to the Secretariat" },

  // ── Assemblées Page ─────────────────────────────────────────
  "assemblees.badge": { fr: "Vie Collégiale", en: "Collegial Life" },
  "assemblees.title": { fr: "Assemblées Provinciales", en: "Provincial Assemblies" },
  "assemblees.desc": {
    fr: "Moments privilégiés de discernement spirituel, d'évaluation communautaire et de planification sexennale dans l'esprit de coresponsabilité pallottine.",
    en: "Privileged moments of spiritual discernment, community evaluation, and six-year planning in the spirit of Pallottine co-responsibility.",
  },
  "assemblees.theme": { fr: "Thème Directeur :", en: "Guiding Theme:" },
  "assemblees.resolutions": { fr: "Principales Résolutions & Orientations :", en: "Key Resolutions & Orientations:" },

  // ── Secrétariats Spécialisés Page ────────────────────────────
  "secretariats.badge": { fr: "Coordination Pastorale", en: "Pastoral Coordination" },
  "secretariats.title": { fr: "Secrétariats Spécialisés", en: "Specialized Secretariats" },
  "secretariats.desc": {
    fr: "Organes délégués par le Gouvernement Provincial pour dynamiser les secteurs clés de l'apostolat, de la formation et de l'élan missionnaire.",
    en: "Bodies delegated by the Provincial Government to energize key sectors of the apostolate, formation, and missionary outreach.",
  },
  "secretariats.leader": { fr: "Responsable :", en: "Director:" },
  "secretariats.missions": { fr: "Missions Principales :", en: "Key Missions:" },

  // ── Commissions Page ────────────────────────────────────────
  "commissions.badge": { fr: "Expertise & Conseils", en: "Expertise & Advisory" },
  "commissions.title": { fr: "Commissions Provinciales", en: "Provincial Commissions" },
  "commissions.desc": {
    fr: "Commissions permanentes et collégiales apportant leur expertise technique, juridique, financière et pastorale au Conseil Provincial.",
    en: "Permanent and collegial commissions bringing technical, legal, financial, and pastoral expertise to the Provincial Council.",
  },
  "commissions.president": { fr: "Président :", en: "President:" },
  "commissions.members": { fr: "Membres de la Commission :", en: "Commission Members:" },
  "commissions.responsibilities": { fr: "Principales Responsabilités :", en: "Main Responsibilities:" },

  // ── Communautés & Œuvres Pages ──────────────────────────────
  "comm.main.badge": { fr: "Présence Apostolique", en: "Apostolic Presence" },
  "comm.main.title": { fr: "Nos Communautés & Nos Œuvres", en: "Our Communities & Works" },
  "comm.main.desc": {
    fr: "Retrouvez l'ensemble des communautés religieuses, des paroisses, des sanctuaires et des centres de formation animés par les Pères et Frères Pallottins.",
    en: "Discover all the religious communities, parishes, sanctuaries, and formation centers animated by the Pallottine Fathers and Brothers.",
  },
  "comm.rw.badge": { fr: "Présence Apostolique", en: "Apostolic Presence" },
  "comm.rw.title": { fr: "Communautés Pallottines au Rwanda", en: "Pallottine Communities in Rwanda" },
  "comm.rw.desc": {
    fr: "Implantés au pays des mille collines depuis le 8 juin 1973, les Pères et Frères Pallottins animent de grands sanctuaires nationaux, des paroisses et des œuvres d'édition et de formation.",
    en: "Established in the land of a thousand hills since June 8, 1973, the Pallottine Fathers and Brothers animate major national sanctuaries, parishes, and publishing and formation works.",
  },
  "comm.rw.works": { fr: "Œuvres Clés :", en: "Key Works:" },

  "comm.rdc.badge": { fr: "Mission dans les Grands Lacs", en: "Mission in the Great Lakes" },
  "comm.rdc.title": { fr: "Communautés en République Démocratique du Congo", en: "Communities in the Democratic Republic of Congo" },
  "comm.rdc.desc": {
    fr: "Présents au Nord-Kivu (Goma, Keshero, Rutshuru/Buturande) et au Sud-Kivu (Bukavu/Karhale), les Pallottins œuvrent pour la paix, la réconciliation, la formation spirituelle et intellectuelle et la charité.",
    en: "Present in North Kivu (Goma, Keshero, Rutshuru/Buturande) and South Kivu (Bukavu/Karhale), the Pallottines work for peace, reconciliation, spiritual and intellectual formation, and charity.",
  },
  "comm.rdc.works": { fr: "Œuvres & Présence :", en: "Works & Presence:" },

  "comm.be.badge": { fr: "Pont Missionnaire en Europe", en: "Missionary Bridge in Europe" },
  "comm.be.title": { fr: "Communautés Pallottines en Belgique", en: "Pallottine Communities in Belgium" },
  "comm.be.desc": {
    fr: "La Procure Missionnaire de Bruxelles et la présence pastorale dans l'Archidiocèse de Malines-Bruxelles et le Diocèse de Namur constituent un lien historique de fraternité et de solidarité universelle.",
    en: "The Brussels Missionary Procure and the pastoral presence in the Archdiocese of Mechelen-Brussels and the Diocese of Namur form a historic bond of fraternity and universal solidarity.",
  },
  "comm.be.works": { fr: "Œuvres & Pastorale :", en: "Works & Pastoral Care:" },

  "comm.eu.badge": { fr: "Rayonnement International", en: "International Outreach" },
  "comm.eu.title": { fr: "Missions en Dehors du Territoire Provincial", en: "Missions Outside the Provincial Territory" },
  "comm.eu.desc": {
    fr: "Répondant à l'appel missionnaire universel, des confrères de la Province Sainte Famille sont envoyés au service des diocèses de France, d'Italie et de la Curie Générale à Rome.",
    en: "Responding to the universal missionary call, confreres of the Holy Family Province are sent to serve dioceses in France, Italy, and the General Curia in Rome.",
  },
  "comm.eu.works": { fr: "Secteurs & Missions :", en: "Sectors & Missions:" },

  "comm.detail.back": { fr: "Retour à la liste des communautés", en: "Back to communities list" },
  "comm.detail.works": { fr: "Œuvres & Ministères Associés", en: "Associated Works & Ministries" },
  "comm.detail.members": { fr: "Confrères en Mission dans cette Communauté", en: "Confreres on Mission in this Community" },
  "comm.detail.gallery": { fr: "Galerie de la Communauté", en: "Community Gallery" },

  // ── Photos & Videos Pages ───────────────────────────────────
  "photos.badge": { fr: "Mémoire & Événements", en: "Memory & Events" },
  "photos.title": { fr: "Galerie Photos", en: "Photo Gallery" },
  "photos.desc": {
    fr: "Revivez en images les grands moments de la vie provinciale, les ordinations, les pèlerinages aux sanctuaires de Kibeho, Kabuga et Ruhango.",
    en: "Relive in pictures the great moments of provincial life, ordinations, and pilgrimages to the sanctuaries of Kibeho, Kabuga, and Ruhango.",
  },
  "photos.count": { fr: "photos", en: "photos" },

  "videos.badge": { fr: "Médias Audiovisuels", en: "Audiovisual Media" },
  "videos.title": { fr: "Vidéos & Célébrations", en: "Videos & Celebrations" },
  "videos.desc": {
    fr: "Découvrez les enregistrements liturgiques, les prières aux sanctuaires et les témoignages de foi de nos confrères et des pèlerins.",
    en: "Discover liturgical recordings, prayers at sanctuaries, and testimonies of faith from our confreres and pilgrims.",
  },
  "videos.watch": { fr: "Regarder la vidéo", en: "Watch video" },
};
