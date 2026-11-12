import type { ContentSection, FaqItem } from "@/lib/content-types"

/**
 * ARTICLES DE LA PAGE ACTUALITÉS
 * ==============================
 *
 * Chaque article de cette liste a AUTOMATIQUEMENT sa propre page :
 *   /actualites/<slug>   (slug généré depuis le titre, ou champ `slug`)
 * Elle est générée au build (pnpm build), sans rien d'autre à faire.
 *
 * Pour ajouter un article : copier un bloc existant À LA FIN de la liste,
 * changer `id` (nombre unique), `date`, `category`, `title`, `excerpt`,
 * puis écrire le contenu dans `sections` :
 *
 *   {
 *     id: 41,
 *     date: "20 novembre 2026",          // format "12 mars 2026" ou "Mars 2026"
 *     category: "Conseil",
 *     title: "Mon nouvel article",
 *     excerpt: "Résumé affiché sur la liste et dans Google (~150 caractères).",
 *     featured: false,
 *     sections: [
 *       { heading: "Titre de partie", paragraphs: ["Texte...", "Texte..."] },
 *       { heading: "Autre partie", list: ["Point 1", "Point 2"] },
 *     ],
 *   },
 *
 * Dans les textes : [texte du lien](/contre-visite) pour un lien, **texte** pour du gras.
 *
 * Important : un article SANS `sections` a bien sa page, mais elle n'est pas
 * indexée par Google (noindex) et n'est pas dans le sitemap, car un simple
 * résumé serait considéré comme du contenu trop pauvre.
 *
 * Ne pas modifier le titre (ou fixer `slug`) d'un article déjà publié :
 * son adresse changerait.
 */

export interface Article {
  id: number
  /** Optionnel : adresse de la page. Par défaut, générée depuis le titre. */
  slug?: string
  /** Date affichée, ex. "10 avril 2026", "1er mai 2026" ou "Décembre 2025" */
  date: string
  category: string
  title: string
  excerpt: string
  featured?: boolean
  /** Contenu complet de l'article (rend la page indexable) */
  sections?: ContentSection[]
  /** Questions / réponses en fin d'article (optionnel) */
  faq?: FaqItem[]

  // --- Blocs spéciaux utilisés par la page /actualites (articles 1 à 4) ---
  content?: {
    intro: string
    vehicules: string[]
    calendrier: { periode: string; echeance: string }[]
    frequence: string
  }
  concours?: {
    gain: string
    valeur: number
    participation: string
    finDate: string
  }
  promo?: {
    prix: number
    prixOriginal: number
    conditions: string
  }
}

export const articles: Article[] = [
  // Article featured (index 0) - CT 2 roues
  {
    id: 1,
    date: "15 avril 2024",
    category: "Réglementation",
    title: "Contrôle technique 2 roues : c'est parti !",
    excerpt: "Le contrôle technique pour motos et deux-roues motorisés est désormais obligatoire depuis le 15 avril 2024.",
    featured: true,
    content: {
      intro: "Le décret et l'arrêté sont parus au Journal Officiel le 23 Octobre 2023, avec une mise en application le 15 avril 2024.",
      vehicules: [
        "Motos et scooters (125 cm³ et plus)",
        "Trois-roues motorisés",
        "Quadricycles et quads",
        "Voitures sans permis"
      ],
      calendrier: [
        { periode: "Véhicules immatriculés avant le 01/01/2017", echeance: "Contrôle au plus tard le 31/12/2024" },
        { periode: "Véhicules immatriculés du 01/01/2017 au 31/12/2019", echeance: "Contrôle en 2025" },
        { periode: "Véhicules immatriculés du 01/01/2020 au 31/12/2021", echeance: "Contrôle en 2026" }
      ],
      frequence: "Premier contrôle à 5 ans après mise en circulation, puis tous les 3 ans."
    }
  },
  // Jeu concours (index 1)
  {
    id: 2,
    date: "1er décembre 2025",
    category: "Événement",
    title: "Jeu concours national AUTOSUR 2025",
    excerpt: "Gagnez un week-end de rêve pour 2 personnes d'une valeur de 249€ ! Chaque semaine, un client peut remporter ce lot jusqu'à fin décembre.",
    featured: false,
    concours: {
      gain: "Un week-end de rêve pour 2 personnes (hôtel 4 ou 5*, spa, petit-déjeuner, dîner gourmand) parmi 271 destinations en France et en Europe.",
      valeur: 249,
      participation: "Réservez un contrôle technique sur autosur.fr ou scannez le QR code sur les affiches en centre.",
      finDate: "Fin décembre 2025"
    }
  },
  // Promo Ivry (index 2)
  {
    id: 3,
    date: "Décembre 2025",
    category: "Promotion",
    title: "Offre spéciale web : -5€ sur votre contrôle technique à Ivry-Sur-Seine",
    excerpt: "Profitez de notre remise exclusive pour toute réservation en ligne sur les créneaux disponibles.",
    featured: false,
    promo: {
      prix: 80,
      prixOriginal: 85,
      conditions: "Valable pour véhicules particuliers hors 4x4 et GPL, sur créneaux spécifiques pris en ligne."
    }
  },
  // Promo Blanc-Mesnil (index 3)
  {
    id: 4,
    date: "Décembre 2025",
    category: "Promotion",
    title: "Offre spéciale web : -4€ sur votre contrôle technique au Blanc-Mesnil",
    excerpt: "Profitez de notre remise exclusive pour toute réservation en ligne sur les créneaux disponibles.",
    featured: false,
    promo: {
      prix: 75,
      prixOriginal: 79,
      conditions: "Valable pour véhicules particuliers hors 4x4 et GPL, sur créneaux spécifiques pris en ligne."
    }
  },
  // === Autres actualités (index 4+) - de la plus ancienne à la plus récente ===
  // (la page Actualités les affiche dans l'ordre inverse : la plus récente en premier)
  {
    id: 5,
    date: "1er janvier 2026",
    category: "Fêtes",
    title: "Bonne année 2026 !",
    excerpt: "L'équipe CTAM AUTOSUR vous présente ses meilleurs voeux pour cette nouvelle année 2026 ! Que cette année vous apporte santé, bonheur et réussite. Nous restons à votre service pour tous vos contrôles techniques.",
    featured: false
  },
  {
    id: 6,
    date: "28 décembre 2025",
    category: "Conseil",
    title: "Nouvelle année, pensez à votre contrôle technique !",
    excerpt: "Commencez l'année du bon pied en vérifiant la date d'échéance de votre contrôle technique. Anticipez et réservez dès maintenant pour bénéficier des meilleurs créneaux et éviter les contre-visites.",
    featured: false,
    sections: [
      {
        heading: "Où trouver la date limite de votre contrôle technique ?",
        paragraphs: [
          "La date avant laquelle vous devez repasser le contrôle technique figure sur le **procès-verbal** remis lors de votre dernier contrôle, ainsi que sur la **vignette** collée sur le pare-brise.",
          "Pour une voiture neuve, le premier contrôle doit avoir lieu dans les 6 mois qui précèdent le 4e anniversaire de sa première mise en circulation (date inscrite sur la carte grise). Ensuite, le contrôle se renouvelle tous les 2 ans. Tous les détails sont sur notre page [quand passer son contrôle technique](/quand-passer-controle).",
        ],
      },
      {
        heading: "Pourquoi s'y prendre à l'avance ?",
        paragraphs: [
          "Vous pouvez passer votre contrôle dans les **6 mois qui précèdent l'échéance** : inutile d'attendre le dernier moment, au risque de ne plus trouver de créneau.",
          "Anticiper vous laisse aussi le temps de faire les réparations sereinement si une contre-visite est nécessaire : vous disposez alors de deux mois pour la passer.",
        ],
      },
      {
        heading: "Réserver en quelques clics",
        paragraphs: [
          "Nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine) vous accueillent du lundi au samedi, avec ou sans rendez-vous. En réservant en ligne, vous choisissez votre créneau et profitez de la remise web sur les créneaux éligibles (voir nos [tarifs](/tarifs)).",
        ],
      },
    ],
  },
  {
    id: 7,
    date: "25 décembre 2025",
    category: "Fêtes",
    title: "Joyeux Noël à tous !",
    excerpt: "Toute l'équipe CTAM AUTOSUR vous souhaite un très joyeux Noël ! Profitez de ces moments précieux en famille et entre amis. Nos centres seront fermés le 25 décembre et rouvriront dès le 26 décembre pour vous accueillir.",
    featured: false
  },
  {
    id: 8,
    date: "23 décembre 2025",
    category: "Information",
    title: "Très belles fêtes de fin d'année",
    excerpt: "Cher(e)s clients, toute l'équipe CTAM AUTOSUR vous souhaite de merveilleuses fêtes de fin d'année et vous adresse ses meilleurs voeux pour 2026, à vous et à vos proches. Que cette nouvelle année soit remplie de joie, de succès, et de précieux moments partagés avec ceux qui vous sont chers.",
    featured: false
  },
  {
    id: 9,
    date: "15 décembre 2025",
    category: "Information",
    title: "Nouveau centre à Ivry-sur-Seine",
    excerpt: "CTAM s'agrandit avec l'ouverture d'un second centre de contrôle technique sous l'enseigne AUTOSUR à Ivry-sur-Seine.",
    featured: false
  },
  {
    id: 10,
    date: "10 avril 2026",
    category: "Réglementation",
    title: "Ce qui change au contrôle technique en 2026",
    excerpt: "Nouvelles normes de pollution, points de contrôle supplémentaires, tarifs actualisés... Le contrôle technique automobile évolue en 2026. Tout ce qu'il faut savoir si vous êtes conducteur en Île-de-France, à Paris, au Blanc-Mesnil ou à Ivry-sur-Seine.",
    featured: false
  },
  {
    id: 11,
    date: "24 avril 2026",
    category: "Conseil",
    title: "Les 5 défauts les plus fréquents au contrôle technique automobile",
    excerpt: "Éclairage défectueux, freins usés, pneumatiques lisses... Des milliers de conducteurs en Île-de-France échouent leur contrôle technique pour des raisons évitables. Nos centres CTAM AUTOSUR au Blanc-Mesnil et à Ivry-sur-Seine vous révèlent les 5 points de défaillance les plus courants.",
    featured: false,
    sections: [
      {
        heading: "1. L'éclairage et la signalisation",
        paragraphs: [
          "Ampoule de stop grillée, feu de plaque éteint, phare mal réglé ou optique opacifiée : l'éclairage fait partie des défauts que nos contrôleurs relèvent le plus souvent. C'est aussi le plus simple à éviter. Allumez chaque feu un par un, avec l'aide d'un proche pour les feux arrière. Notre article sur [l'éclairage au contrôle technique](/actualites/eclairage-le-premier-motif-de-contre-visite-en-france) détaille la méthode.",
        ],
      },
      {
        heading: "2. Le freinage",
        paragraphs: [
          "Plaquettes ou disques usés, déséquilibre entre la roue gauche et la roue droite, frein de stationnement trop faible, fuite de liquide : le banc de freinage mesure précisément l'efficacité de chaque roue. Un bruit métallique ou une voiture qui tire d'un côté au freinage doivent vous alerter.",
        ],
      },
      {
        heading: "3. Les pneumatiques",
        paragraphs: [
          "Une bande de roulement sous **1,6 mm**, une hernie sur le flanc ou deux pneus de types différents sur le même essieu entraînent une défaillance. Vérifiez les témoins d'usure moulés dans les rainures du pneu.",
        ],
      },
      {
        heading: "4. La visibilité",
        paragraphs: [
          "Un impact ou une fissure dans le champ de vision du conducteur, des balais d'essuie-glace qui laissent des traces, un rétroviseur cassé : tout ce qui gêne la vue est contrôlé.",
        ],
      },
      {
        heading: "5. Les liaisons au sol et la pollution",
        paragraphs: [
          "Rotules et silentblocs usés, amortisseurs fatigués, mais aussi émissions trop élevées à l'échappement complètent le classement. Pour la pollution, venez moteur chaud après un trajet sur voie rapide.",
        ],
        after: [
          "Pour vous préparer point par point, consultez notre guide [pour éviter la contre-visite](/eviter-contre-visite). Et si un défaut est relevé, tout est expliqué sur notre page [contre-visite](/contre-visite).",
        ],
      },
    ],
  },
  {
    id: 12,
    date: "27 avril 2026",
    category: "Conseil",
    title: "Comment éviter la contre-visite : nos conseils avant votre contrôle technique",
    excerpt: "La contre-visite concerne près de 20% des véhicules. Vérifiez ces points clés avant de passer le contrôle technique automobile au Blanc-Mesnil ou à Ivry-sur-Seine et mettez toutes les chances de votre côté.",
    featured: false,
    sections: [
      {
        heading: "Quand une contre-visite est-elle imposée ?",
        paragraphs: [
          "Une contre-visite est obligatoire dès que le contrôleur relève au moins une **défaillance majeure ou critique**. Les défaillances mineures, elles, sont simplement notées sur le procès-verbal. Vous disposez ensuite de deux mois pour réparer et repasser : tout est détaillé sur notre page [contre-visite](/contre-visite).",
        ],
      },
      {
        heading: "Les vérifications à faire vous-même",
        list: [
          "Tous les feux : croisement, route, position, clignotants, stop, recul, antibrouillard arrière et plaque.",
          "Le klaxon et les essuie-glaces, avec un réservoir de lave-glace rempli.",
          "Les pneus : usure, hernies, même type sur un même essieu.",
          "Le pare-brise : aucun impact ni fissure dans le champ de vision.",
          "Les ceintures de sécurité : elles doivent toutes se boucler et s'enrouler.",
          "Les voyants : aucun voyant de défaut ne doit rester allumé au tableau de bord.",
          "Les plaques d'immatriculation : propres, lisibles et bien fixées.",
        ],
      },
      {
        heading: "Le jour du contrôle",
        paragraphs: [
          "Présentez un véhicule propre, coffre vidé et siège enfant retiré. Venez moteur chaud pour la mesure de pollution, avec suffisamment de carburant, et n'oubliez pas la carte grise originale.",
          "Vous trouverez la liste complète, fonction par fonction, dans notre guide [pour éviter la contre-visite](/eviter-contre-visite) et notre [checklist de la veille](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 13,
    date: "1er mai 2026",
    category: "Information",
    title: "Que risquez-vous si vous roulez sans contrôle technique valide ?",
    excerpt: "Amende de 135€, immobilisation du véhicule, refus d'assurance en cas d'accident... Rouler sans contrôle technique automobile expose à de lourdes sanctions. Prenez rendez-vous dans nos centres au Blanc-Mesnil ou à Ivry-sur-Seine avant qu'il ne soit trop tard.",
    featured: false,
    sections: [
      {
        heading: "Une amende de 135 euros",
        paragraphs: [
          "Circuler avec un contrôle technique périmé est une contravention de 4e classe : l'amende forfaitaire est de **135 €**. Elle peut être minorée en cas de paiement rapide, ou majorée en cas de retard de paiement.",
        ],
      },
      {
        heading: "Immobilisation et carte grise retenue",
        paragraphs: [
          "Lors d'un contrôle routier, les forces de l'ordre peuvent aussi retenir votre certificat d'immatriculation et vous remettre une autorisation de circulation provisoire, le temps de régulariser la situation. Le véhicule peut également être immobilisé.",
        ],
      },
      {
        heading: "Et l'assurance ?",
        paragraphs: [
          "Votre assurance reste tenue d'indemniser les victimes d'un accident. En revanche, si l'accident est lié à un défaut que le contrôle technique aurait dû révéler, votre assureur peut contester sa prise en charge pour vos propres dommages. Le risque financier dépasse alors largement le prix d'un contrôle.",
        ],
      },
      {
        heading: "Comment régulariser rapidement ?",
        paragraphs: [
          "Il suffit de passer votre contrôle au plus vite. Nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine) vous reçoivent du lundi au samedi, avec ou sans rendez-vous. Pour connaître vos échéances, consultez notre page [quand passer son contrôle technique](/quand-passer-controle).",
        ],
      },
    ],
  },
  {
    id: 14,
    date: "8 mai 2026",
    category: "Conseil",
    title: "Vendre son véhicule d'occasion : le contrôle technique est obligatoire",
    excerpt: "Pour vendre une voiture de plus de 4 ans à un particulier, le procès-verbal de contrôle technique automobile doit dater de moins de 6 mois. Nos centres CTAM AUTOSUR au Blanc-Mesnil et à Ivry-sur-Seine vous délivrent votre PV sur place, en Île-de-France.",
    featured: false,
    sections: [
      {
        heading: "Un procès-verbal de moins de 6 mois",
        paragraphs: [
          "Pour vendre une voiture de plus de 4 ans, le vendeur doit remettre à l'acheteur le **procès-verbal du contrôle technique datant de moins de 6 mois**. Sans ce document, la carte grise ne peut pas être établie au nom du nouveau propriétaire.",
          "Ce PV doit être remis avant la vente : il fait partie des documents à fournir avec le certificat de cession et le certificat de situation administrative.",
        ],
      },
      {
        heading: "Et si le contrôle révèle des défaillances ?",
        paragraphs: [
          "Un résultat défavorable n'interdit pas la vente, mais l'acheteur doit en être informé : le procès-verbal liste toutes les défaillances. Le plus simple reste de réparer avant de vendre et de passer la [contre-visite](/contre-visite) : un PV favorable rassure l'acheteur et facilite la négociation.",
        ],
      },
      {
        heading: "Obtenir votre PV rapidement",
        paragraphs: [
          "Dans nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine), le procès-verbal vous est remis sur place, à la fin du contrôle. Pour éviter les mauvaises surprises, suivez notre [checklist avant le contrôle](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 15,
    date: "15 mai 2026",
    category: "Réglementation",
    title: "Défaillance mineure, majeure ou critique : comprendre votre procès-verbal",
    excerpt: "Favorable, défavorable, code S ou code R : que signifient réellement les mentions de votre contrôle technique ? Nos contrôleurs agréés du Blanc-Mesnil et d'Ivry-sur-Seine décryptent chaque ligne de votre rapport et vous expliquent vos droits de circulation.",
    featured: false,
    sections: [
      {
        heading: "Trois niveaux de défaillance",
        paragraphs: [
          "Depuis la réforme de 2018, chaque défaut relevé au contrôle technique est classé selon sa gravité :",
        ],
        list: [
          "**Défaillance mineure** : défaut sans incidence importante sur la sécurité. Il est noté sur le PV, sans contre-visite. À réparer à l'occasion.",
          "**Défaillance majeure** : défaut susceptible de compromettre la sécurité ou l'environnement. Une contre-visite est obligatoire dans les deux mois ; vous pouvez circuler en attendant.",
          "**Défaillance critique** : danger direct et immédiat. Une contre-visite est obligatoire et le véhicule ne peut circuler que jusqu'au soir du jour du contrôle.",
        ],
      },
      {
        heading: "Les codes de la vignette : A, S ou R",
        paragraphs: [
          "La vignette collée sur votre pare-brise reprend le résultat : **A** pour un contrôle favorable, **S** pour un contrôle défavorable avec défaillance(s) majeure(s), **R** pour un contrôle défavorable avec défaillance(s) critique(s).",
        ],
      },
      {
        heading: "Que faire après un résultat défavorable ?",
        paragraphs: [
          "Faites réparer les points relevés puis présentez-vous à la contre-visite, qui ne porte que sur ces points. Délais, tarifs et démarche sont détaillés sur notre page [contre-visite](/contre-visite). Nos contrôleurs prennent toujours le temps de vous expliquer le procès-verbal à la fin du contrôle.",
        ],
      },
    ],
  },
  {
    id: 16,
    date: "22 mai 2026",
    category: "Information",
    title: "Combien coûte un contrôle technique automobile en Île-de-France ?",
    excerpt: "Les prix du contrôle technique sont libres et non réglementés. Motorisation, type de véhicule, contre-visite : découvrez ce qui fait varier le tarif et nos prix pratiqués dans nos centres AUTOSUR du Blanc-Mesnil (93) et d'Ivry-sur-Seine (94).",
    featured: false,
    sections: [
      {
        heading: "Des prix libres, fixés par chaque centre",
        paragraphs: [
          "En France, le prix du contrôle technique n'est pas réglementé : chaque centre fixe ses tarifs et doit les afficher. C'est pourquoi les prix varient d'un centre à l'autre, y compris au sein d'une même ville ou d'un même réseau.",
        ],
      },
      {
        heading: "Ce qui fait varier le tarif",
        list: [
          "**Le type de véhicule** : voiture particulière, utilitaire léger, 4x4, camping-car.",
          "**La motorisation** : un véhicule GPL ou GNV demande des contrôles supplémentaires sur l'installation gaz.",
          "**La prestation** : contrôle périodique, contre-visite, contrôle complémentaire pollution.",
          "**Le mode de réservation** : certains centres, dont les nôtres, proposent une remise sur les créneaux réservés en ligne.",
        ],
      },
      {
        heading: "Nos tarifs au Blanc-Mesnil et à Ivry-sur-Seine",
        paragraphs: [
          "Tous nos prix sont affichés TTC, sans frais cachés, et comparés centre par centre sur notre page [tarifs du contrôle technique](/tarifs). Les remises web s'appliquent aux véhicules particuliers sur les créneaux éligibles.",
          "La contre-visite est payante, avec un tarif réduit lorsque le contrôle initial a été fait chez nous : les détails sont sur notre page [contre-visite](/contre-visite).",
        ],
      },
    ],
  },
  {
    id: 17,
    date: "29 mai 2026",
    category: "Conseil",
    title: "Préparer son véhicule la veille du contrôle technique : la checklist",
    excerpt: "Feux, essuie-glaces, pneumatiques, niveaux, klaxon, coffre vidé : 10 vérifications simples à faire chez vous avant votre rendez-vous. Les conducteurs de Drancy, Le Bourget, Vitry-sur-Seine ou Charenton-le-Pont gagnent un temps précieux avec ce réflexe.",
    featured: false,
    sections: [
      {
        heading: "10 vérifications en 15 minutes",
        list: [
          "Allumez tous les feux un par un, y compris le feu de plaque et l'antibrouillard arrière.",
          "Testez les clignotants et les feux de détresse.",
          "Faites contrôler les feux stop par un proche.",
          "Actionnez le klaxon.",
          "Testez les essuie-glaces et remplissez le lave-glace.",
          "Regardez l'usure et l'état des pneus, roue de secours comprise si elle est présente.",
          "Vérifiez le niveau d'huile et de liquide de frein.",
          "Bouclez et déroulez chaque ceinture de sécurité.",
          "Démarrez et vérifiez qu'aucun voyant de défaut ne reste allumé.",
          "Nettoyez les plaques d'immatriculation et les optiques.",
        ],
      },
      {
        heading: "Le matin du contrôle",
        paragraphs: [
          "Videz le coffre, retirez le siège enfant et prévoyez assez de carburant. Faites un trajet d'une vingtaine de minutes pour arriver moteur chaud : la mesure de pollution n'en sera que plus fiable.",
          "N'oubliez pas la **carte grise originale**. Tout ce qu'il faut apporter est listé dans notre article sur [les documents à présenter](/actualites/quels-documents-apporter-au-controle-technique).",
        ],
      },
      {
        heading: "Un doute sur un point ?",
        paragraphs: [
          "Notre guide [pour éviter la contre-visite](/eviter-contre-visite) détaille chaque fonction contrôlée. Et si un défaut est relevé, pas de panique : vous aurez deux mois pour la [contre-visite](/contre-visite).",
        ],
      },
    ],
  },
  {
    id: 18,
    date: "5 juin 2026",
    category: "Réglementation",
    title: "Contrôle technique moto : les véhicules immatriculés en 2020 et 2021 concernés",
    excerpt: "L'échéance 2026 concerne les deux-roues motorisés mis en circulation entre le 1er janvier 2020 et le 31 décembre 2021. Motos, scooters, trois-roues et voitures sans permis : faites le point avec nos centres CTAM AUTOSUR en Seine-Saint-Denis et Val-de-Marne.",
    featured: false,
    sections: [
      {
        heading: "Qui est concerné en 2026 ?",
        paragraphs: [
          "Le contrôle technique des deux-roues motorisés, trois-roues, quadricycles et voitures sans permis est obligatoire depuis le **15 avril 2024**. Pour les véhicules déjà en circulation, un calendrier progressif a été fixé selon la date de première immatriculation :",
        ],
        list: [
          "Immatriculés avant le 1er janvier 2017 : contrôle au plus tard le 31 décembre 2024.",
          "Immatriculés du 1er janvier 2017 au 31 décembre 2019 : contrôle en 2025.",
          "Immatriculés du 1er janvier 2020 au 31 décembre 2021 : **contrôle en 2026**.",
        ],
      },
      {
        heading: "Et ensuite ?",
        paragraphs: [
          "Pour les véhicules plus récents, le premier contrôle a lieu dans les 6 mois précédant le **5e anniversaire** de la mise en circulation, puis **tous les 3 ans**.",
          "En cas de vente, le procès-verbal doit dater de moins de 6 mois, comme pour une voiture.",
        ],
      },
      {
        heading: "Passer le contrôle de votre deux-roues",
        paragraphs: [
          "Nos deux centres sont agréés pour le contrôle technique des deux-roues et quadricycles. Toutes les infos sont sur notre page [contrôle technique moto](/controle-technique-moto) ; pour une voiturette, consultez la page [voiture sans permis](/controle-technique-voiture-sans-permis).",
        ],
      },
    ],
  },
  {
    id: 19,
    date: "12 juin 2026",
    category: "Réglementation",
    title: "Voiture électrique et hybride : comment se passe le contrôle technique ?",
    excerpt: "Depuis 2026, le contrôle technique des véhicules 100% électriques inclut la vérification de l'état de santé de la batterie de traction via le diagnostic embarqué. Nos centres du Blanc-Mesnil et d'Ivry-sur-Seine sont équipés pour votre véhicule électrifié.",
    featured: false
  },
  {
    id: 20,
    date: "19 juin 2026",
    category: "Information",
    title: "ZFE du Grand Paris : quel lien avec votre contrôle technique ?",
    excerpt: "Vignette Crit'Air, restrictions de circulation dans la métropole parisienne, normes antipollution : ce que les automobilistes d'Île-de-France doivent savoir. Un contrôle technique automobile à jour reste la base pour circuler sereinement à Paris et en petite couronne.",
    featured: false
  },
  {
    id: 21,
    date: "26 juin 2026",
    category: "Conseil",
    title: "Départ en vacances : anticipez votre contrôle technique automobile",
    excerpt: "Partir sur l'autoroute avec un contrôle technique qui expire en plein mois d'août, c'est le mauvais plan. Vérifiez votre date d'échéance et réservez votre créneau dès maintenant dans nos centres du Blanc-Mesnil et d'Ivry-sur-Seine avant l'affluence de juillet.",
    featured: false,
    sections: [
      {
        heading: "Vérifiez votre échéance avant de partir",
        paragraphs: [
          "Regardez la date inscrite sur la vignette de votre pare-brise ou sur votre dernier procès-verbal. Si elle tombe pendant vos congés, passez le contrôle avant le départ : il peut être réalisé dans les **6 mois qui précèdent l'échéance**.",
          "Rouler avec un contrôle périmé expose à une amende de 135 €, y compris sur la route des vacances. Voir [ce que vous risquez](/actualites/que-risquez-vous-si-vous-roulez-sans-controle-technique-valide).",
        ],
      },
      {
        heading: "Gardez une marge pour une éventuelle contre-visite",
        paragraphs: [
          "Si le contrôleur relève une défaillance majeure, il faut réparer puis repasser en [contre-visite](/contre-visite). En venant deux ou trois semaines avant le départ, vous gardez le temps de le faire avant de prendre la route.",
        ],
      },
      {
        heading: "Les points à contrôler pour un long trajet",
        list: [
          "Pression et usure des pneus, en tenant compte de la charge du véhicule.",
          "Niveaux d'huile, de liquide de refroidissement et de lave-glace.",
          "Éclairage complet, surtout si vous tractez une remorque ou une caravane.",
          "Plaquettes de frein, à faire vérifier en cas de bruit ou de vibration.",
        ],
        after: [
          "Réservez votre créneau au [Blanc-Mesnil](/le-blanc-mesnil) ou à [Ivry-sur-Seine](/ivry-sur-seine) avant l'affluence de juillet.",
        ],
      },
    ],
  },
  {
    id: 22,
    date: "3 juillet 2026",
    category: "Information",
    title: "Horaires d'été : nos centres CTAM AUTOSUR restent ouverts",
    excerpt: "Nos deux centres de contrôle technique automobile du Blanc-Mesnil et d'Ivry-sur-Seine vous accueillent tout l'été. Retrouvez nos horaires d'ouverture de juillet et août et réservez votre rendez-vous en ligne en quelques clics.",
    featured: false
  },
  {
    id: 23,
    date: "10 juillet 2026",
    category: "Conseil",
    title: "Pneus, freins, amortisseurs : les 3 organes qui font échouer le contrôle",
    excerpt: "Profondeur de sculpture, déséquilibre de freinage, amortisseurs fatigués : comment tester vous-même ces trois points avant votre contrôle technique. Entre les nids-de-poule et les ralentisseurs d'Île-de-France, les trains roulants souffrent vite.",
    featured: false,
    sections: [
      {
        heading: "Les pneus",
        paragraphs: [
          "La profondeur minimale légale de la bande de roulement est de **1,6 mm**. Les témoins d'usure, de petits bossages au fond des rainures, vous indiquent quand cette limite est atteinte. Vérifiez aussi l'absence de hernie, de coupure ou de déformation sur les flancs, souvent causées par un trottoir ou un nid-de-poule.",
          "Sur un même essieu, les deux pneus doivent être de même dimension, de même structure et de même type.",
        ],
      },
      {
        heading: "Les freins",
        paragraphs: [
          "Au banc de freinage, le contrôleur mesure l'efficacité de chaque roue et le **déséquilibre entre gauche et droite**. Un véhicule qui tire d'un côté au freinage, une pédale molle ou un bruit de frottement métallique sont des signaux d'alerte. Le frein de stationnement est également testé.",
        ],
      },
      {
        heading: "Les amortisseurs et les trains roulants",
        paragraphs: [
          "Ralentisseurs et chaussées dégradées fatiguent amortisseurs, rotules et silentblocs. Appuyez fortement sur chaque coin de la voiture : elle doit revenir en place sans rebondir. Une fuite d'huile visible sur un amortisseur ou des jeux dans la direction seront relevés.",
        ],
        after: [
          "Pour tous les autres points, suivez notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
        ],
      },
    ],
  },
  {
    id: 24,
    date: "17 juillet 2026",
    category: "Réglementation",
    title: "Rappels constructeurs et airbags Takata : ce que vérifie le contrôleur",
    excerpt: "Depuis le 1er janvier 2026, votre véhicule est signalé s'il fait l'objet d'un rappel grave. Un airbag Takata classé stop drive entraîne une contre-visite automatique et l'interdiction de circuler. Vérifiez votre immatriculation avant votre rendez-vous.",
    featured: false
  },
  {
    id: 25,
    date: "24 juillet 2026",
    category: "Conseil",
    title: "Test antipollution : comment mettre toutes les chances de votre côté",
    excerpt: "Diesel ou essence, la mesure des émissions fait échouer de nombreux véhicules qui ne roulent qu'en ville. Faites une trentaine de kilomètres sur voie rapide et venez moteur chaud dans nos centres du Blanc-Mesnil et d'Ivry-sur-Seine : le résultat change du tout au tout.",
    featured: false,
    sections: [
      {
        heading: "Ce qui est mesuré",
        paragraphs: [
          "Sur un moteur **diesel**, le contrôleur mesure l'opacité des fumées lors d'accélérations à vide. Sur un moteur **essence**, il analyse les gaz d'échappement (monoxyde de carbone, hydrocarbures et réglage du mélange). Une voiture 100 % électrique n'est pas concernée par cette mesure.",
        ],
      },
      {
        heading: "Arrivez moteur chaud",
        paragraphs: [
          "Un moteur froid pollue davantage. Faites une vingtaine de minutes de route, idéalement sur voie rapide, juste avant votre rendez-vous. Sur un diesel, cela aide aussi le filtre à particules à se régénérer.",
        ],
      },
      {
        heading: "Entretenez avant de venir",
        list: [
          "Vidange et filtre à air à jour.",
          "Aucun voyant moteur allumé : faites établir un diagnostic s'il l'est.",
          "Pas de fuite sur la ligne d'échappement.",
          "Un véhicule qui ne fait que de petits trajets mérite un long parcours dans la semaine précédant le contrôle.",
        ],
        after: [
          "Lire aussi : [encrassement des véhicules qui roulent peu](/actualites/votre-vehicule-ne-roule-presque-plus-attention-a-l-encrassement).",
        ],
      },
    ],
  },
  {
    id: 26,
    date: "31 juillet 2026",
    category: "Information",
    title: "Contre-visite : vous avez 2 mois, pas un jour de plus",
    excerpt: "Le délai pour repasser après un résultat défavorable est de deux mois à compter de la date du contrôle technique périodique. Au-delà, il faut repayer un contrôle complet. Nos centres CTAM AUTOSUR vous reçoivent rapidement pour votre contre-visite.",
    featured: false,
    sections: [
      {
        heading: "Un délai de deux mois",
        paragraphs: [
          "Après un contrôle défavorable (défaillance majeure ou critique), vous disposez de **deux mois** à compter de la date du contrôle pour faire réparer votre véhicule et le présenter en contre-visite. La date limite est indiquée sur votre procès-verbal.",
        ],
      },
      {
        heading: "Passé ce délai : contrôle complet",
        paragraphs: [
          "Si vous dépassez le délai, la contre-visite n'est plus possible : il faut repasser un **contrôle technique complet**, au tarif normal. Et entre-temps, votre véhicule n'est plus en règle.",
        ],
      },
      {
        heading: "Comment se passe la contre-visite ?",
        paragraphs: [
          "Le contrôleur ne vérifie que les points signalés lors du premier contrôle. Apportez votre carte grise et le procès-verbal du contrôle initial. Dans nos centres, la contre-visite est possible avec ou sans rendez-vous : tarifs et détails sur notre page [contre-visite](/contre-visite).",
        ],
      },
    ],
  },
  {
    id: 27,
    date: "7 août 2026",
    category: "Conseil",
    title: "Fortes chaleurs : les points à surveiller sur votre véhicule",
    excerpt: "Pression des pneumatiques, liquide de refroidissement, batterie, climatisation : la canicule met les véhicules à rude épreuve en Île-de-France. Quelques vérifications simples pour éviter la panne et arriver serein à votre contrôle technique automobile.",
    featured: false,
    sections: [
      {
        heading: "Les pneus",
        paragraphs: [
          "La chaleur fait grimper la pression et fatigue la gomme. Contrôlez la pression à froid, le matin, selon les valeurs indiquées par le constructeur (souvent sur le montant de portière ou la trappe à carburant). Un pneu sous-gonflé chauffe davantage et s'use plus vite.",
        ],
      },
      {
        heading: "Le refroidissement et la batterie",
        paragraphs: [
          "Vérifiez le niveau de liquide de refroidissement **moteur froid** et surveillez la jauge de température dans les embouteillages. La chaleur use aussi les batteries : un démarrage laborieux est un signe à ne pas négliger.",
        ],
      },
      {
        heading: "La visibilité",
        paragraphs: [
          "Insectes et poussière encrassent le pare-brise : gardez le lave-glace rempli et des balais d'essuie-glace en bon état. Un impact peut s'agrandir avec les écarts de température entre l'extérieur et la climatisation : faites-le réparer avant qu'il ne se transforme en fissure, qui serait relevée au [contrôle technique](/eviter-contre-visite).",
        ],
      },
    ],
  },
  {
    id: 28,
    date: "21 août 2026",
    category: "Conseil",
    title: "Rentrée : c'est le bon moment pour votre contrôle technique",
    excerpt: "Septembre est l'un des mois les plus chargés dans les centres de contrôle technique. Prenez de l'avance et réservez dès la fin août votre créneau au Blanc-Mesnil ou à Ivry-sur-Seine pour choisir votre horaire plutôt que de le subir.",
    featured: false,
    sections: [
      {
        heading: "Anticiper sans perdre de validité",
        paragraphs: [
          "Si votre contrôle arrive à échéance cet automne, vous pouvez le passer dès maintenant : il peut être réalisé dans les **6 mois qui précèdent la date limite**.",
        ],
      },
      {
        heading: "Choisir son créneau",
        paragraphs: [
          "En réservant en ligne, vous choisissez le jour et l'heure qui vous conviennent, y compris le samedi. Nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine) sont ouverts du lundi au samedi, et vous pouvez aussi venir sans rendez-vous.",
        ],
      },
      {
        heading: "Un bilan après les vacances",
        paragraphs: [
          "Les longs trajets d'été sollicitent pneus, freins et suspensions. C'est le bon moment pour faire le point avec notre [checklist avant le contrôle](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 29,
    date: "28 août 2026",
    category: "Conseil",
    title: "Acheter une voiture d'occasion : savoir lire le procès-verbal",
    excerpt: "Date du contrôle, défaillances mineures, kilométrage relevé : le PV de contrôle technique automobile en dit long sur l'état réel du véhicule. Nos conseils pour acheter sans mauvaise surprise, et le contrôle volontaire avant achat proposé dans nos centres.",
    featured: false,
    sections: [
      {
        heading: "Vérifiez la date et le résultat",
        paragraphs: [
          "Pour un véhicule de plus de 4 ans, le vendeur doit vous remettre un procès-verbal de **moins de 6 mois**. Regardez le résultat : favorable, ou défavorable avec une contre-visite à effectuer. Dans ce dernier cas, demandez si les réparations ont été faites et si la [contre-visite](/contre-visite) a été passée.",
        ],
      },
      {
        heading: "Lisez les défaillances, même mineures",
        paragraphs: [
          "Les défaillances mineures n'imposent pas de contre-visite, mais elles annoncent souvent des dépenses à venir : pneus en fin de vie, amortisseurs fatigués, corrosion naissante. Elles sont un bon argument de négociation. Pour comprendre chaque niveau, lisez notre article sur [les défaillances mineures, majeures et critiques](/actualites/defaillance-mineure-majeure-ou-critique-comprendre-votre-proces-verbal).",
        ],
      },
      {
        heading: "Contrôlez le kilométrage",
        paragraphs: [
          "Le kilométrage relevé figure sur le procès-verbal. Comparez-le avec celui du compteur et avec les anciens PV si le vendeur les a conservés : un écart incohérent doit vous alerter.",
        ],
      },
    ],
  },
  {
    id: 30,
    date: "4 septembre 2026",
    category: "Conseil",
    title: "Voyants au tableau de bord : lesquels bloquent le contrôle technique ?",
    excerpt: "Voyant moteur, ABS, airbag, ESP : un témoin allumé est relevé lors du contrôle technique automobile. Et masquer un voyant est considéré comme une fraude. Faites diagnostiquer avant de venir dans nos centres du Blanc-Mesnil ou d'Ivry-sur-Seine.",
    featured: false,
    sections: [
      {
        heading: "Les voyants contrôlés",
        paragraphs: [
          "Depuis la réforme de 2018, le contrôleur vérifie les témoins de défaut des principaux systèmes de sécurité et de dépollution. Un voyant qui reste allumé après le démarrage est relevé comme une défaillance, dont la gravité dépend du système concerné. Les plus courants :",
        ],
        list: [
          "Le voyant **moteur** (dépollution), souvent lié à une sonde ou au système d'injection.",
          "Le voyant **ABS** ou **ESP**, qui signale un défaut du système de freinage assisté ou de stabilité.",
          "Le voyant **airbag**, qui indique que les coussins gonflables ou les prétensionneurs pourraient ne pas fonctionner.",
        ],
      },
      {
        heading: "Ne masquez jamais un voyant",
        paragraphs: [
          "Débrancher une ampoule ou effacer les codes défauts juste avant le contrôle ne règle pas le problème et constitue une manœuvre frauduleuse. Le bon réflexe : faire lire les codes défauts par un garage et réparer.",
        ],
      },
      {
        heading: "Avant votre rendez-vous",
        paragraphs: [
          "Démarrez le moteur et vérifiez que tous les témoins s'éteignent après quelques secondes. Pour le reste, suivez notre [checklist de la veille du contrôle](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 31,
    date: "11 septembre 2026",
    category: "Conseil",
    title: "Éclairage : le premier motif de contre-visite en France",
    excerpt: "Une ampoule de stop grillée, un phare mal réglé, un feu de plaque hors service suffisent à faire basculer votre contrôle technique en défavorable. Avec les journées qui raccourcissent, c'est le moment de tout vérifier feu par feu.",
    featured: false,
    sections: [
      {
        heading: "Un défaut fréquent… et facile à éviter",
        paragraphs: [
          "L'éclairage et la signalisation font partie des défauts les plus souvent relevés au contrôle technique. Bonne nouvelle : la plupart se vérifient en cinq minutes et se réparent pour quelques euros.",
        ],
      },
      {
        heading: "Feu par feu",
        list: [
          "Feux de position, de croisement et de route.",
          "Clignotants avant, arrière et latéraux, et feux de détresse.",
          "Feux stop, y compris le troisième feu stop.",
          "Feu de recul et antibrouillard arrière.",
          "Éclairage de la plaque d'immatriculation arrière.",
        ],
        after: [
          "Pour les feux arrière, faites-vous aider ou reculez face à une vitrine pour voir le reflet.",
        ],
      },
      {
        heading: "Réglage et état des optiques",
        paragraphs: [
          "Un phare mal réglé éblouit les autres usagers et sera relevé. Une optique jaunie ou fissurée réduit l'éclairage : un polissage ou un remplacement peut suffire. Retrouvez tous les autres points dans notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
        ],
      },
    ],
  },
  {
    id: 32,
    date: "18 septembre 2026",
    category: "Réglementation",
    title: "Voitures sans permis et quadricycles : le contrôle technique obligatoire",
    excerpt: "Les voiturettes et quadricycles à moteur sont soumis au contrôle technique au même titre que les deux-roues motorisés. Périodicité, points vérifiés, tarifs : le guide complet pour les conducteurs d'Île-de-France, à Paris et en petite couronne.",
    featured: false,
    sections: [
      {
        heading: "Depuis quand ?",
        paragraphs: [
          "Les voitures sans permis et les quadricycles à moteur sont concernés par la réforme entrée en vigueur le **15 avril 2024**, en même temps que les motos et scooters. Les véhicules déjà en circulation suivent un calendrier progressif selon leur date de première immatriculation (2024, 2025, puis 2026 pour ceux immatriculés en 2020 et 2021).",
        ],
      },
      {
        heading: "Quelle périodicité ?",
        paragraphs: [
          "Le premier contrôle a lieu dans les 6 mois précédant le **5e anniversaire** de la mise en circulation, puis **tous les 3 ans**. En cas de défaillance majeure ou critique, une [contre-visite](/contre-visite) est à passer dans les deux mois.",
        ],
      },
      {
        heading: "Ce qui est vérifié",
        paragraphs: [
          "Le contrôle porte sur les mêmes grandes fonctions que pour une voiture, adaptées à ces véhicules : freinage, direction, éclairage, pneus, structure, nuisances. Toutes les infos pratiques sont sur notre page [contrôle technique voiture sans permis](/controle-technique-voiture-sans-permis).",
        ],
      },
    ],
  },
  {
    id: 33,
    date: "25 septembre 2026",
    category: "Information",
    title: "Contrôle technique périmé : amende, immobilisation et assurance",
    excerpt: "135 euros d'amende forfaitaire, immobilisation possible du véhicule, rétention de la carte grise et risque de refus de prise en charge par votre assureur en cas d'accident. Ne prenez pas ce risque : réservez votre contrôle technique automobile dès aujourd'hui.",
    featured: false,
    sections: [
      {
        heading: "Les sanctions",
        list: [
          "**Amende forfaitaire de 135 €** (contravention de 4e classe).",
          "**Rétention de la carte grise** possible, avec une autorisation de circulation provisoire le temps de passer le contrôle.",
          "**Immobilisation** possible du véhicule.",
        ],
      },
      {
        heading: "Si votre contrôle est déjà périmé",
        paragraphs: [
          "Vous n'avez pas de démarche particulière à faire : il suffit de passer le contrôle au plus vite. Tant qu'il n'est pas fait, votre véhicule n'est pas en règle et vous restez exposé aux sanctions.",
        ],
      },
      {
        heading: "Régulariser dès aujourd'hui",
        paragraphs: [
          "Nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine) vous accueillent avec ou sans rendez-vous, du lundi au samedi. Les détails sur les sanctions sont aussi dans notre article [que risquez-vous sans contrôle technique valide](/actualites/que-risquez-vous-si-vous-roulez-sans-controle-technique-valide).",
        ],
      },
    ],
  },
  {
    id: 34,
    date: "2 octobre 2026",
    category: "Conseil",
    title: "Votre véhicule ne roule presque plus ? Attention à l'encrassement",
    excerpt: "Trajets domicile-travail de quelques kilomètres entre Aulnay-sous-Bois et Le Bourget, ou entre Vitry-sur-Seine et Paris : le moteur n'atteint jamais sa température optimale et l'échappement s'encrasse. Un vrai piège au moment du contrôle antipollution.",
    featured: false,
    sections: [
      {
        heading: "Pourquoi les petits trajets encrassent le moteur",
        paragraphs: [
          "Sur quelques kilomètres, le moteur n'atteint pas sa température de fonctionnement. La combustion est moins complète, des dépôts se forment dans la vanne EGR, l'admission et l'échappement. Sur un diesel, le filtre à particules n'a pas l'occasion de se régénérer.",
        ],
      },
      {
        heading: "Les conséquences au contrôle technique",
        paragraphs: [
          "Un moteur encrassé dépasse plus facilement les seuils d'émissions lors de la mesure de pollution, ce qui peut entraîner une [contre-visite](/contre-visite). Un voyant moteur allumé est aussi relevé.",
        ],
      },
      {
        heading: "Les bons réflexes",
        list: [
          "Faites régulièrement un trajet d'au moins 20 à 30 minutes sur voie rapide.",
          "Respectez les intervalles de vidange, même si vous roulez peu.",
          "Venez au contrôle moteur chaud.",
        ],
        after: [
          "Plus de conseils dans notre article sur [le test antipollution](/actualites/test-antipollution-comment-mettre-toutes-les-chances-de-votre-cote).",
        ],
      },
    ],
  },
  {
    id: 35,
    date: "9 octobre 2026",
    category: "Conseil",
    title: "Pneus hiver : ce que dit la réglementation et ce que vérifie le contrôleur",
    excerpt: "Obligations dans les zones montagneuses, monte homogène par essieu, profondeur minimale de 1,6 mm : nos contrôleurs agréés font le point avant l'hiver. Nos centres CTAM AUTOSUR au Blanc-Mesnil et à Ivry-sur-Seine vous conseillent.",
    featured: false,
    sections: [
      {
        heading: "La loi Montagne",
        paragraphs: [
          "Du **1er novembre au 31 mars**, dans les communes de montagne désignées par les préfets, les véhicules doivent être équipés de pneus hiver ou détenir des chaînes ou chaussettes à neige. Si vous partez au ski, vérifiez la réglementation de votre destination. En Île-de-France, aucune obligation ne s'applique.",
        ],
      },
      {
        heading: "Ce que vérifie le contrôleur",
        list: [
          "Une profondeur de sculpture d'au moins **1,6 mm**.",
          "L'absence de hernie, de coupure ou de déformation.",
          "Des pneus de même dimension, même structure et même type sur un même essieu : on ne mélange pas un pneu hiver et un pneu été sur un essieu.",
        ],
      },
      {
        heading: "Avant de passer votre contrôle",
        paragraphs: [
          "Si vous montez vos pneus hiver avant le contrôle, vérifiez leur usure après une saison de stockage. Pour les autres points, consultez notre article sur [les pneus, freins et amortisseurs](/actualites/pneus-freins-amortisseurs-les-3-organes-qui-font-echouer-le-controle).",
        ],
      },
    ],
  },
  {
    id: 36,
    date: "23 octobre 2026",
    category: "Conseil",
    title: "Passage à l'heure d'hiver : visibilité et sécurité de votre véhicule",
    excerpt: "Avec la nuit qui tombe plus tôt, l'état de vos feux, de votre pare-brise et de vos essuie-glaces devient critique. Trois vérifications rapides à faire ce week-end, avant votre prochain contrôle technique automobile en Île-de-France.",
    featured: false,
    sections: [
      {
        heading: "1. Les feux",
        paragraphs: [
          "Faites le tour du véhicule feux allumés : croisement, position, clignotants, stop, plaque. Vérifiez aussi que vos phares ne sont pas déréglés (faisceau trop haut ou trop bas sur un mur). Notre article sur [l'éclairage](/actualites/eclairage-le-premier-motif-de-contre-visite-en-france) détaille chaque feu.",
        ],
      },
      {
        heading: "2. Le pare-brise",
        paragraphs: [
          "De nuit et sous la pluie, un pare-brise sale ou rayé crée des halos. Nettoyez l'intérieur comme l'extérieur, et faites réparer tout impact : une fissure dans le champ de vision est relevée au contrôle technique.",
        ],
      },
      {
        heading: "3. Les essuie-glaces",
        paragraphs: [
          "Des balais qui laissent des traces ou broutent doivent être remplacés. Remplissez le lave-glace avec un produit adapté au froid.",
        ],
        after: [
          "Votre contrôle approche ? Réservez au [Blanc-Mesnil](/le-blanc-mesnil) ou à [Ivry-sur-Seine](/ivry-sur-seine).",
        ],
      },
    ],
  },
  {
    id: 37,
    date: "11 novembre 2026",
    category: "Information",
    title: "Peut-on passer le contrôle technique sans rendez-vous ?",
    excerpt: "Oui : dans nos centres du Blanc-Mesnil et d'Ivry-sur-Seine, vous pouvez venir sans rendez-vous du lundi au samedi. Mais réserver en ligne garde de vrais avantages : créneau garanti et remise web.",
    featured: false,
    sections: [
      {
        heading: "Oui, nos centres vous accueillent sans rendez-vous",
        paragraphs: [
          "Au [Blanc-Mesnil](/le-blanc-mesnil) comme à [Ivry-sur-Seine](/ivry-sur-seine), vous pouvez vous présenter sans rendez-vous aux heures d'ouverture, du lundi au samedi, pour un contrôle technique ou une [contre-visite](/contre-visite). Vous êtes alors pris en charge selon les disponibilités de la ligne de contrôle.",
        ],
      },
      {
        heading: "Pourquoi réserver quand même ?",
        list: [
          "**Un créneau garanti**, sans attente, au jour et à l'heure de votre choix.",
          "**Une remise web** sur les créneaux éligibles pour les véhicules particuliers (voir nos [tarifs](/tarifs)).",
          "**Une réservation 24h/24**, même le soir ou le week-end.",
        ],
      },
      {
        heading: "Le conseil de nos contrôleurs",
        paragraphs: [
          "Si vous venez sans rendez-vous, évitez les périodes les plus chargées et pensez à apporter votre carte grise originale. Le reste de la préparation est expliqué dans notre [checklist avant le contrôle](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 38,
    date: "11 novembre 2026",
    category: "Conseil",
    title: "Quels documents apporter au contrôle technique ?",
    excerpt: "Carte grise originale, dernier procès-verbal : la liste des documents à présenter pour votre contrôle technique ou votre contre-visite, et ce qu'il faut prévoir pour le paiement.",
    featured: false,
    sections: [
      {
        heading: "Pour un contrôle technique",
        list: [
          "La **carte grise** (certificat d'immatriculation) du véhicule, en original.",
          "Le **précédent procès-verbal** de contrôle technique, si le véhicule en a déjà passé un.",
        ],
        after: [
          "Le contrôleur vérifie que le numéro d'identification du véhicule et la plaque correspondent à la carte grise : c'est la première étape du contrôle.",
        ],
      },
      {
        heading: "Pour une contre-visite",
        paragraphs: [
          "Apportez la carte grise et le **procès-verbal du contrôle initial**, qui liste les défaillances à vérifier. N'oubliez pas que la contre-visite doit être passée dans les deux mois : voir notre page [contre-visite](/contre-visite).",
        ],
      },
      {
        heading: "Pour le paiement",
        paragraphs: [
          "Le paiement s'effectue sur place, après le contrôle. Nos centres acceptent la carte bancaire et les espèces ; le chèque est accepté sous réserve. Une facture vous est remise avec le procès-verbal.",
        ],
      },
      {
        heading: "Et le véhicule ?",
        paragraphs: [
          "Présentez-le propre (plaques et optiques), coffre vidé, siège enfant retiré, avec suffisamment de carburant. Toutes nos astuces sont dans notre [checklist de la veille](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
        ],
      },
    ],
  },
  {
    id: 39,
    date: "11 novembre 2026",
    category: "Information",
    title: "Que vérifie-t-on au contrôle technique ?",
    excerpt: "Identification, freinage, direction, visibilité, éclairage, pneus, carrosserie, équipements, pollution : les grandes fonctions passées en revue lors des 133 points du contrôle technique automobile.",
    featured: false,
    sections: [
      {
        heading: "133 points de contrôle",
        paragraphs: [
          "Depuis la réforme de 2018, le contrôle technique d'une voiture porte sur **133 points de contrôle**. Chaque défaut constaté est classé en défaillance mineure, majeure ou critique (voir [comprendre votre procès-verbal](/actualites/defaillance-mineure-majeure-ou-critique-comprendre-votre-proces-verbal)).",
        ],
      },
      {
        heading: "Les grandes fonctions contrôlées",
        list: [
          "**Identification** : plaques, numéro d'identification, concordance avec la carte grise.",
          "**Freinage** : efficacité de chaque roue, équilibre, frein de stationnement, état des disques, plaquettes et canalisations.",
          "**Direction** : jeux, état des rotules et de la crémaillère.",
          "**Visibilité** : pare-brise, vitres, rétroviseurs, essuie-glaces.",
          "**Éclairage et signalisation** : tous les feux, leur réglage et leur fonctionnement.",
          "**Liaisons au sol** : pneus, roues, suspensions, amortisseurs, trains roulants.",
          "**Structure et carrosserie** : corrosion, déformations, portes, capot.",
          "**Équipements** : ceintures, sièges, avertisseur sonore, compteur, voyants.",
          "**Nuisances** : émissions polluantes, bruit, fuites.",
        ],
      },
      {
        heading: "Combien de temps dure le contrôle ?",
        paragraphs: [
          "Dans nos centres, un contrôle technique dure en général **moins de 45 minutes**. Le procès-verbal vous est remis immédiatement et le contrôleur vous explique les éventuels défauts relevés. Pour vous préparer, suivez notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
        ],
      },
    ],
  },
  {
    id: 40,
    date: "11 novembre 2026",
    category: "Conseil",
    title: "Contrôle technique refusé : que faire ?",
    excerpt: "Résultat défavorable, défaillance majeure ou critique : les étapes pour réparer, passer la contre-visite dans les délais et remettre votre véhicule en règle sans stress.",
    featured: false,
    sections: [
      {
        heading: "1. Lisez votre procès-verbal",
        paragraphs: [
          "Un contrôle « refusé » est en réalité un contrôle **défavorable** : le contrôleur a relevé au moins une défaillance majeure ou critique. Le procès-verbal liste précisément les défauts et indique la date limite de contre-visite. Nos contrôleurs vous l'expliquent à la fin du contrôle.",
        ],
      },
      {
        heading: "2. Vérifiez si vous pouvez rouler",
        list: [
          "**Défaillance majeure** : vous pouvez circuler pendant deux mois, le temps de réparer.",
          "**Défaillance critique** : le véhicule ne peut circuler que jusqu'au soir du jour du contrôle. Prévoyez la réparation rapidement, ou un dépannage.",
        ],
      },
      {
        heading: "3. Faites réparer",
        paragraphs: [
          "Confiez le véhicule au garage de votre choix avec le procès-verbal : il indique exactement ce qui doit être corrigé. Conservez la facture des réparations.",
        ],
      },
      {
        heading: "4. Passez la contre-visite dans les deux mois",
        paragraphs: [
          "La contre-visite ne porte que sur les points relevés. Passé le délai de deux mois, il faut repasser un contrôle complet. Tarifs et démarche : notre page [contre-visite](/contre-visite). Nos centres du [Blanc-Mesnil](/le-blanc-mesnil) et d'[Ivry-sur-Seine](/ivry-sur-seine) vous reçoivent avec ou sans rendez-vous.",
        ],
      },
    ],
  },
]
