// Tout le contenu de marque du site. Pour adapter la démo à une vraie agence :
// modifier ce fichier et remplacer les photos du dossier images/.
window.SITE = {
  brand: {
    name: 'Maison Sylve',
    wordmark: 'MAISON SYLVE',
    tagline: 'Agence immobilière de standing à Abidjan',
    city: 'Cocody Ambassades, Abidjan'
  },

  // Numéro fictif (format international sans +, puis affichage)
  whatsapp: {
    number: '2250700000000',
    display: '07 00 00 00 00',
    message: 'Bonjour Maison Sylve, je souhaite organiser une visite.'
  },

  demoBadge: 'Site de démonstration',

  nav: [
    { label: 'Acheter', href: '#biens' },
    { label: 'Louer', href: '#services' },
    { label: 'Quartiers', href: '#quartiers' },
    { label: 'À propos', href: '#apropos' }
  ],
  navCta: 'Demander une visite',

  // Écran d'entrée en deux panneaux (moment signature)
  intro: {
    panels: [
      { label: 'Acheter', img: 'images/entree-acheter.jpg', alt: 'Villa tropicale avec piscine au crépuscule', href: '#biens' },
      { label: 'Louer', img: 'images/entree-louer.jpg', alt: 'Salon lumineux entièrement meublé', href: '#services' }
    ]
  },

  hero: {
    img: 'images/hero-salon.jpg',
    alt: 'Grand salon ouvert sur un jardin tropical',
    title: ['Habiter,', 'l’exception'],
    scroll: 'Défiler',
    stats: [
      { value: '240+', text: 'biens d’exception vendus ou loués' },
      { value: '4,9/5', text: 'note moyenne sur plus de 300 avis' },
      { value: '72 h', text: 'pour organiser une visite privée' },
      { value: '100 %', text: 'des biens visités et vérifiés par l’équipe' }
    ]
  },

  manifesto: {
    caption: '(Maison Sylve)',
    statement: 'Maison Sylve accompagne un cercle choisi d’acheteurs, de locataires et de propriétaires exigeants, avec la discrétion d’une maison de famille.',
    photo: { src: 'images/manifeste-plante.jpg', alt: 'Plante verte posée sur une table en bois' },
    address: 'Allée des Flamboyants · Cocody Ambassades',
    paragraphs: [
      'Villas, appartements, duplex ou résidences meublées : nous ne présentons que des biens que notre équipe a visités, mesurés et vérifiés, titre foncier compris.',
      'Une seule personne vous suit du premier message à la remise des clés. Elle connaît le bien, le quartier et le propriétaire, et vous répond le jour même.'
    ]
  },

  servicesIntro: {
    caption: '(Nos services)',
    title: ['Votre patrimoine,', 'entre de bonnes mains']
  },

  services: [
    {
      title: ['Vente', 'de prestige'],
      theme: 'cream',
      img: 'images/service-vente.jpg',
      alt: 'Villa blanche contemporaine avec piscine',
      text: 'Villas, maisons de ville et terrains titrés dans les plus beaux quartiers d’Abidjan. Nous vérifions chaque dossier et vous accompagnons jusque chez le notaire.',
      cta: 'Découvrir'
    },
    {
      title: ['Location', 'haut de gamme'],
      theme: 'night',
      img: 'images/service-location.jpg',
      alt: 'Chambre ouverte sur la mer et les cocotiers',
      text: 'Pour les familles, les expatriés et les entreprises qui logent leurs cadres : des biens prêts à vivre, des baux clairs et un état des lieux détaillé.',
      cta: 'Découvrir'
    },
    {
      title: ['Gestion locative', '& meublés'],
      theme: 'lichen',
      img: 'images/service-gestion.jpg',
      alt: 'Chambre meublée avec tête de lit capitonnée',
      text: 'Vous êtes propriétaire, au pays ou à l’étranger ? Nous trouvons les locataires, encaissons les loyers, entretenons le bien et vous rendons compte chaque mois.',
      cta: 'Découvrir'
    }
  ],

  listings: {
    caption: '(Nos biens)',
    title: 'Sélection du moment',
    lead: 'Une partie de nos biens seulement : les autres sont présentés en toute discrétion, sur rendez-vous.',
    priceLabel: 'Prix sur demande',
    visitLabel: 'Demander une visite',
    exclusive: 'Exclusivité',
    filters: [
      { key: 'all', label: 'Tout' },
      { key: 'villa', label: 'Villas' },
      { key: 'appart', label: 'Appartements & duplex' },
      { key: 'meuble', label: 'Meublés' }
    ],
    items: [
      { ref: 'MS-101', cat: 'villa', deal: 'À vendre', name: 'Villa contemporaine', area: 'Cocody Riviera Golf', specs: ['5 ch.', '480 m²', 'Piscine'], img: 'images/bien-01-villa-riviera.jpg', alt: 'Villa moderne entourée de palmiers', ratio: '4 / 5', exclusive: true },
      { ref: 'MS-102', cat: 'appart', deal: 'À louer', name: 'Appartement de prestige', area: 'Cocody Ambassades', specs: ['3 ch.', '190 m²', 'Vue jardin'], img: 'images/bien-02-appart-ambassades.jpg', alt: 'Salon blanc et bois d’un appartement', ratio: '4 / 3' },
      { ref: 'MS-103', cat: 'villa', deal: 'À vendre', name: 'Villa les pieds dans l’eau', area: 'Assinie-Mafia', specs: ['4 ch.', '350 m²', 'Accès plage'], img: 'images/bien-03-villa-assinie.jpg', alt: 'Maison en bois blanc au bord d’une piscine', ratio: '1 / 1', exclusive: true },
      { ref: 'MS-104', cat: 'appart', deal: 'À vendre', name: 'Duplex avec terrasse', area: 'Zone 4, Biétry', specs: ['4 ch.', '260 m²', 'Cuisine en marbre'], img: 'images/bien-04-duplex-zone4.jpg', alt: 'Cuisine moderne avec comptoir en marbre', ratio: '3 / 4' },
      { ref: 'MS-105', cat: 'meuble', deal: 'Meublé', name: 'Suite meublée', area: 'Le Plateau', specs: ['1 ch.', '75 m²', 'Vue lagune'], img: 'images/bien-05-meuble-plateau.jpg', alt: 'Chambre élégante avec vue sur la ville', ratio: '4 / 3' },
      { ref: 'MS-106', cat: 'villa', deal: 'À louer', name: 'Villa familiale', area: 'Riviera 3', specs: ['6 ch.', '520 m²', 'Jardin'], img: 'images/bien-06-villa-riviera3.jpg', alt: 'Grande maison vitrée entourée de palmiers', ratio: '1 / 1' },
      { ref: 'MS-107', cat: 'appart', deal: 'À louer', name: 'Appartement lumineux', area: 'Cocody II Plateaux', specs: ['2 ch.', '120 m²', 'Balcon'], img: 'images/bien-07-appart-2plateaux.jpg', alt: 'Salon avec canapé crème et tables basses', ratio: '4 / 5' },
      { ref: 'MS-108', cat: 'villa', deal: 'À vendre', name: 'Villa avec piscine', area: 'Bingerville', specs: ['5 ch.', '600 m²', 'Grand jardin'], img: 'images/bien-08-villa-bingerville.jpg', alt: 'Villa blanche et sa piscine à la tombée de la nuit', ratio: '4 / 3', exclusive: true },
      { ref: 'MS-109', cat: 'meuble', deal: 'Meublé', name: 'Studio haut de gamme', area: 'Cocody Danga', specs: ['1 ch.', '55 m²', 'Salle de bain marbre'], img: 'images/bien-09-meuble-cocody.jpg', alt: 'Salle de bain avec baignoire et double vasque', ratio: '3 / 4' },
      { ref: 'MS-110', cat: 'villa', deal: 'À louer', name: 'Villa blanche', area: 'Grand-Bassam', specs: ['4 ch.', '380 m²', 'Piscine'], img: 'images/bien-10-villa-bassam.jpg', alt: 'Villa blanche et brune près d’une piscine', ratio: '4 / 3' },
      { ref: 'MS-111', cat: 'appart', deal: 'À vendre', name: 'Duplex contemporain', area: 'Marcory Résidentiel', specs: ['3 ch.', '210 m²', 'Double séjour'], img: 'images/bien-11-duplex-marcory.jpg', alt: 'Salle à manger lumineuse et moderne', ratio: '1 / 1' },
      { ref: 'MS-112', cat: 'villa', deal: 'À vendre', name: 'Maison de ville', area: 'Cocody Angré', specs: ['4 ch.', '300 m²', 'Jardin tropical'], img: 'images/bien-12-maison-angre.jpg', alt: 'Maison moderne entourée de verdure', ratio: '4 / 5' }
    ]
  },

  areas: {
    caption: '(Nos quartiers)',
    title: ['Abidjan,', 'côté jardin'],
    items: [
      { name: 'Cocody Ambassades', tag: 'Notre siège', text: 'Rues calmes, grands jardins et résidences diplomatiques : le cœur historique du standing abidjanais.', img: 'images/quartier-ambassades.jpg', alt: 'Maison tropicale avec piscine' },
      { name: 'Riviera Golf', tag: 'Familles', text: 'Des villas avec jardin autour du parcours de golf, à quelques minutes des écoles internationales.', img: 'images/quartier-riviera-golf.jpg', alt: 'Vue aérienne d’un parcours de golf' },
      { name: 'Zone 4', tag: 'Vie urbaine', text: 'Restaurants, boutiques et appartements récents : l’adresse de ceux qui aiment sortir à pied.', img: 'images/quartier-zone4.jpg', alt: 'Immeuble moderne avec balcons végétalisés' },
      { name: 'Le Plateau', tag: 'Affaires', text: 'Suites meublées et appartements de fonction face à la lagune, au plus près des bureaux.', img: 'images/quartier-plateau.jpg', alt: 'Tours d’une ville vues depuis l’eau' },
      { name: 'Assinie', tag: 'Week-end', text: 'Résidences secondaires entre lagune et océan, à une heure et demie d’Abidjan.', img: 'images/quartier-assinie.jpg', alt: 'Cocotier entre une piscine et la mer au coucher du soleil' }
    ]
  },

  visit: {
    caption: '(Comment ça marche)',
    title: ['Une visite,', 'trois étapes'],
    img: 'images/visite-cles.jpg',
    alt: 'Trousseau de clés posé sur une table en bois',
    steps: [
      { num: '01', title: 'Écrivez-nous sur WhatsApp', text: 'Dites-nous ce que vous cherchez : achat ou location, quartier, nombre de chambres, date d’arrivée.' },
      { num: '02', title: 'Visite privée sous 72 h', text: 'Nous sélectionnons trois biens au plus et vous les faisons visiter, seul ou en famille, à l’heure qui vous convient.' },
      { num: '03', title: 'Jusqu’à la remise des clés', text: 'Dossier, bail ou acte notarié, état des lieux : nous nous occupons de tout, puis restons joignables après l’emménagement.' }
    ],
    cta: 'Demander une visite'
  },

  reviews: {
    caption: '(Ils nous ont fait confiance)',
    title: 'Ce que disent nos clients',
    items: [
      { quote: 'Je vis à Paris et ma villa de Riviera est louée depuis trois ans sans un seul souci. Je reçois mon rapport chaque mois.', name: 'Mariam D.', role: 'Propriétaire · Riviera 3', initials: 'MD', img: 'images/avis-salle-de-bain.jpg', alt: 'Salle de bain en marbre et bois' },
      { quote: 'Mutés à Abidjan en deux semaines : Maison Sylve nous a trouvé un appartement meublé avant même notre arrivée.', name: 'Famille L.', role: 'Expatriés · Cocody Ambassades', initials: 'FL', img: 'images/avis-salle-a-manger.jpg', alt: 'Salle à manger avec table en bois' },
      { quote: 'Le dossier de la maison d’Assinie était impeccable, titre foncier vérifié. Nous avons signé l’esprit tranquille.', name: 'Koffi A.', role: 'Acheteur · Assinie', initials: 'KA', img: 'images/avis-balcon-mer.jpg', alt: 'Balcon avec vue sur l’océan' },
      { quote: 'Nous logeons nos cadres avec eux depuis 2022. Réactifs, discrets, et toujours des biens à la hauteur.', name: 'Direction RH', role: 'Entreprise · Le Plateau', initials: 'RH', img: 'images/avis-plantes.jpg', alt: 'Intérieur lumineux rempli de plantes' }
    ]
  },

  find: {
    caption: '(Propriétaires · Locataires)',
    title: 'Trouvez le bien qui vous ressemble, à Abidjan',
    imgs: [
      { src: 'images/trouver-entree.jpg', alt: 'Hall d’entrée avec escalier en bois' },
      { src: 'images/trouver-salle-a-manger.jpg', alt: 'Table en bois et chaises dans une salle à manger' }
    ],
    cards: [
      { label: 'Demander une visite', text: 'Achat ou location : trois biens choisis pour vous, visités sous 72 h.', wa: 'Bonjour Maison Sylve, je souhaite organiser une visite.' },
      { label: 'Faire estimer mon bien', text: 'Propriétaire ? Estimation gratuite et conseils pour vendre ou louer au bon prix.', wa: 'Bonjour Maison Sylve, je souhaite faire estimer mon bien.' }
    ]
  },

  faq: {
    caption: '(Questions)',
    title: 'Vos questions',
    items: [
      { q: 'Quels sont vos honoraires ?', a: 'Ils dépendent du bien et du service (vente, location, gestion). Nous vous les annonçons par écrit avant toute visite : aucun frais caché, tarifs sur demande.' },
      { q: 'En combien de temps puis-je visiter ?', a: 'Sous 72 h en général, souvent le lendemain. Les visites ont lieu du lundi au samedi, et le dimanche sur rendez-vous.' },
      { q: 'Accompagnez-vous les expatriés ?', a: 'Oui : visites en vidéo avant l’arrivée, biens meublés prêts à vivre, aide pour l’ouverture des compteurs et la recherche d’écoles.' },
      { q: 'Je vis à l’étranger, pouvez-vous gérer mon bien ?', a: 'C’est l’essentiel de notre activité de gestion : recherche de locataires, loyers, entretien, et un rapport détaillé chaque mois.' },
      { q: 'Quels documents faut-il pour louer ?', a: 'Une pièce d’identité, un justificatif de revenus et, pour une entreprise, ses statuts. Nous vous envoyons la liste complète sur WhatsApp.' }
    ]
  },

  contact: {
    caption: '(Demande de visite)',
    title: ['Visitons', 'ensemble.'],
    lead: 'Remplissez ces quelques lignes : votre demande s’ouvre directement dans WhatsApp, prête à être envoyée.',
    img: 'images/contact-porte.jpg',
    alt: 'Porte d’entrée blanche encadrée de verdure',
    form: {
      type: { label: 'Type de bien', options: ['Villa', 'Appartement', 'Duplex', 'Meublé', 'Terrain'] },
      area: { label: 'Quartier', options: ['Cocody Ambassades', 'Riviera Golf', 'Riviera 3', 'Zone 4', 'Le Plateau', 'Assinie', 'Peu importe'] },
      date: { label: 'Date souhaitée' },
      name: { label: 'Votre nom', placeholder: 'Ex. Aya Kouamé' },
      submit: 'Envoyer sur WhatsApp',
      note: 'Aucune donnée n’est enregistrée sur ce site.'
    },
    lines: [
      { label: 'WhatsApp', value: '07 00 00 00 00' },
      { label: 'Adresse', value: 'Allée des Flamboyants, Cocody Ambassades, Abidjan' },
      { label: 'Horaires', value: 'Lun-sam 8 h 30-18 h 30 · dimanche sur rendez-vous' }
    ]
  },

  footer: {
    columns: [
      { title: 'Acheter', links: [['Villas', '#biens'], ['Appartements & duplex', '#biens'], ['Assinie', '#quartiers']] },
      { title: 'Louer', links: [['Location haut de gamme', '#services'], ['Meublés', '#biens'], ['Expatriés', '#questions']] },
      { title: 'Maison Sylve', links: [['À propos', '#apropos'], ['Gestion locative', '#services'], ['Contact', '#contact']] }
    ],
    copyright: '© 2026 Maison Sylve',
    demo: 'Site de démonstration — entreprise fictive'
  }
};
