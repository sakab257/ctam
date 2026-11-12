import type { ContentSection, FaqItem } from "@/lib/content-types"

/**
 * Pages "contrôle technique par type de véhicule".
 * Chaque entrée correspond à une page dans app/controle-technique-<...>/page.tsx.
 * Les prix sont lus dans lib/tarifs-data.ts via `tarifIds` (jamais en dur ici).
 */

export type VehicleId =
  | "utilitaire"
  | "electrique-hybride"
  | "gpl"
  | "camping-car"
  | "moto"
  | "voiture-sans-permis"

export interface VehiclePage {
  id: VehicleId
  path: string
  /** Libellé court (liens, menus) */
  shortTitle: string
  /** H1 de la page */
  title: string
  metaTitle: string
  metaDescription: string
  badge: string
  subtitle: string
  /** Identifiants de tarifs (lib/tarifs-data.ts). Vide = tarif communiqué par téléphone. */
  tarifIds: string[]
  sections: ContentSection[]
  faq: FaqItem[]
}

export const vehiclePages: VehiclePage[] = [
  {
    id: "utilitaire",
    path: "/controle-technique-utilitaire",
    shortTitle: "Utilitaire et 4x4",
    title: "Contrôle technique utilitaire et 4x4",
    metaTitle: "Contrôle technique utilitaire et 4x4 (93, 94)",
    metaDescription:
      "Contrôle technique des utilitaires légers, fourgons et 4x4 au Blanc-Mesnil et à Ivry-sur-Seine. Contrôle complémentaire pollution, tarifs, avec ou sans RDV.",
    badge: "Utilitaires",
    subtitle:
      "Camionnettes, fourgons, 4x4 et grands utilitaires jusqu'à 3,5 tonnes : contrôle périodique et contrôle complémentaire pollution dans nos deux centres.",
    tarifIds: ["utilitaire", "4x4", "pollution"],
    sections: [
      {
        heading: "Quels véhicules sont concernés ?",
        paragraphs: [
          "Nos centres contrôlent les **véhicules utilitaires légers** (camionnettes, fourgons, pick-up) ainsi que les **4x4 et grands utilitaires**, dans la limite de 3,5 tonnes de poids total autorisé en charge (PTAC). Au-delà, le contrôle relève des centres spécialisés poids lourds.",
        ],
      },
      {
        heading: "Quand passer le contrôle ?",
        paragraphs: [
          "Comme pour une voiture particulière, le premier contrôle a lieu dans les 6 mois précédant le **4e anniversaire** de la mise en circulation, puis **tous les 2 ans**.",
          "Les utilitaires légers doivent en plus passer un **contrôle complémentaire pollution** entre le 10e et le 12e mois qui suivent chaque contrôle périodique. Ce contrôle ne porte que sur les émissions polluantes.",
        ],
      },
      {
        heading: "Ce que vérifie le contrôleur",
        paragraphs: [
          "Le contrôle porte sur les mêmes fonctions que pour une voiture : identification, freinage, direction, visibilité, éclairage, liaisons au sol, structure, équipements et pollution. Sur un utilitaire souvent chargé, freins, pneus et suspensions s'usent plus vite : vérifiez-les avant de venir, avec notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
        ],
      },
    ],
    faq: [
      {
        question: "Le contrôle complémentaire pollution est-il obligatoire ?",
        answer:
          "Oui pour les véhicules utilitaires légers (camionnettes, carte grise de genre CTTE) : il doit être passé entre 10 et 12 mois après chaque contrôle technique périodique. Une voiture particulière, même 4x4, n'est pas concernée.",
      },
      {
        question: "Mon utilitaire dépasse 3,5 tonnes, pouvez-vous le contrôler ?",
        answer:
          "Non : les véhicules de plus de 3,5 tonnes de PTAC relèvent des centres de contrôle poids lourds. Nos centres contrôlent les véhicules jusqu'à 3,5 tonnes.",
      },
      {
        question: "Peut-on venir sans rendez-vous avec un utilitaire ?",
        answer:
          "Oui, nos deux centres vous accueillent avec ou sans rendez-vous du lundi au samedi. Réserver en ligne vous garantit un créneau sans attente.",
      },
    ],
  },
  {
    id: "electrique-hybride",
    path: "/controle-technique-voiture-electrique-hybride",
    shortTitle: "Électrique et hybride",
    title: "Contrôle technique voiture électrique et hybride",
    metaTitle: "Contrôle technique voiture électrique et hybride",
    metaDescription:
      "Contrôle technique des voitures hybrides et 100 % électriques au Blanc-Mesnil et à Ivry-sur-Seine : périodicité, points vérifiés, tarifs, avec ou sans RDV.",
    badge: "Électrique & hybride",
    subtitle:
      "Hybrides, hybrides rechargeables et voitures 100 % électriques : elles passent le contrôle technique comme les autres, avec quelques particularités.",
    tarifIds: ["hybride"],
    sections: [
      {
        heading: "Une voiture électrique doit-elle passer le contrôle technique ?",
        paragraphs: [
          "Oui. Les voitures **hybrides** et **100 % électriques** sont soumises au contrôle technique comme les voitures thermiques : premier contrôle dans les 6 mois précédant le **4e anniversaire** de la mise en circulation, puis **tous les 2 ans**.",
        ],
      },
      {
        heading: "Les particularités du contrôle",
        list: [
          "**Voiture 100 % électrique** : pas de mesure des émissions polluantes à l'échappement, puisqu'il n'y en a pas.",
          "**Voiture hybride** : le moteur thermique est contrôlé, émissions comprises, comme sur une voiture essence ou diesel.",
          "Les autres fonctions sont vérifiées de la même manière : freinage, direction, visibilité, éclairage, pneus, suspensions, structure et équipements.",
        ],
      },
      {
        heading: "Bien préparer votre véhicule",
        paragraphs: [
          "Les véhicules électrifiés sont souvent plus lourds : surveillez l'usure des pneus. Le freinage régénératif sollicite moins les freins classiques, mais disques et plaquettes peuvent s'oxyder s'ils servent peu. Pensez aussi à vérifier qu'aucun voyant de défaut ne reste allumé au tableau de bord. Plus de conseils dans notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
        ],
      },
    ],
    faq: [
      {
        question: "Le tarif est-il différent pour une voiture électrique ?",
        answer:
          "Nos centres appliquent un tarif « véhicule hybride / électrique » : il est indiqué ci-dessus pour chaque centre et sur notre page [tarifs](/tarifs).",
      },
      {
        question: "Faut-il recharger la batterie avant le contrôle ?",
        answer:
          "Venez avec une charge suffisante pour les déplacements sur la ligne de contrôle et, pour un hybride, de quoi faire fonctionner le moteur thermique pendant la mesure des émissions.",
      },
      {
        question: "Une voiture électrique peut-elle avoir une contre-visite ?",
        answer:
          "Oui, comme toute voiture, en cas de défaillance majeure ou critique (freinage, pneus, éclairage…). Voir notre page [contre-visite](/contre-visite).",
      },
    ],
  },
  {
    id: "gpl",
    path: "/controle-technique-gpl",
    shortTitle: "GPL et GNV",
    title: "Contrôle technique véhicule GPL et GNV",
    metaTitle: "Contrôle technique GPL et GNV au Blanc-Mesnil et Ivry",
    metaDescription:
      "Contrôle technique des véhicules GPL et GNV au Blanc-Mesnil et à Ivry-sur-Seine : contrôle de l'installation gaz, périodicité, tarifs, avec ou sans RDV.",
    badge: "GPL / GNV",
    subtitle:
      "Un véhicule fonctionnant au gaz demande des vérifications supplémentaires sur son installation : nos contrôleurs sont équipés pour les réaliser.",
    tarifIds: ["gaz"],
    sections: [
      {
        heading: "Une périodicité classique",
        paragraphs: [
          "Un véhicule GPL ou GNV suit la même périodicité qu'une voiture essence ou diesel : premier contrôle dans les 6 mois précédant le **4e anniversaire** de la mise en circulation, puis **tous les 2 ans**.",
        ],
      },
      {
        heading: "Le contrôle de l'installation gaz",
        paragraphs: [
          "En plus des points de contrôle habituels, le contrôleur vérifie l'installation spécifique au gaz :",
        ],
        list: [
          "l'état et la fixation du réservoir ;",
          "l'état des canalisations et des raccords ;",
          "l'étanchéité de l'installation ;",
          "la cohérence entre l'installation et les mentions de la carte grise.",
        ],
        after: [
          "Ces vérifications supplémentaires expliquent un tarif différent de celui d'une voiture essence ou diesel.",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi le contrôle d'un véhicule GPL coûte-t-il plus cher ?",
        answer:
          "Parce qu'il comprend des vérifications supplémentaires sur l'installation gaz (réservoir, canalisations, étanchéité). Nos prix sont indiqués ci-dessus et sur notre page [tarifs](/tarifs).",
      },
      {
        question: "Peut-on venir sans rendez-vous avec un véhicule GPL ?",
        answer:
          "Oui, nos deux centres vous accueillent avec ou sans rendez-vous du lundi au samedi.",
      },
    ],
  },
  {
    id: "camping-car",
    path: "/controle-technique-camping-car",
    shortTitle: "Camping-car et hors gabarit",
    title: "Contrôle technique camping-car et véhicule hors gabarit",
    metaTitle: "Contrôle technique camping-car et hors gabarit (93, 94)",
    metaDescription:
      "Contrôle technique des camping-cars et véhicules hors gabarit jusqu'à 3,5 t au Blanc-Mesnil et à Ivry-sur-Seine : périodicité, tarifs, conseils.",
    badge: "Camping-car",
    subtitle:
      "Camping-cars, vans aménagés et véhicules hors gabarit jusqu'à 3,5 tonnes : nos centres disposent d'équipements adaptés.",
    tarifIds: ["hors-gabarit"],
    sections: [
      {
        heading: "Quels véhicules ?",
        paragraphs: [
          "Nos centres contrôlent les **camping-cars**, vans aménagés et véhicules **hors gabarit** dont le poids total autorisé en charge ne dépasse pas **3,5 tonnes**. Au-delà, le contrôle se fait dans un centre spécialisé poids lourds.",
          "Votre véhicule est particulièrement haut ou long ? Appelez le centre avant de venir pour vérifier qu'il peut passer sur la ligne de contrôle.",
        ],
      },
      {
        heading: "Quand passer le contrôle ?",
        paragraphs: [
          "Un camping-car de 3,5 tonnes ou moins suit la même périodicité qu'une voiture : premier contrôle dans les 6 mois précédant le **4e anniversaire** de la mise en circulation, puis **tous les 2 ans**.",
        ],
      },
      {
        heading: "Préparer votre camping-car",
        list: [
          "Videz et rangez la cellule pour donner accès aux éléments à contrôler.",
          "Vérifiez les pneus : un camping-car qui stationne longtemps peut avoir des pneus déformés ou craquelés, même peu usés.",
          "Contrôlez tous les feux, y compris les feux de gabarit et les feux arrière du porte-vélos s'il en a.",
          "Faites tourner le moteur avant de venir après une longue immobilisation.",
        ],
      },
    ],
    faq: [
      {
        question: "Mon camping-car pèse plus de 3,5 tonnes, pouvez-vous le contrôler ?",
        answer:
          "Non : au-delà de 3,5 tonnes de PTAC, le contrôle technique se fait dans un centre spécialisé poids lourds.",
      },
      {
        question: "Faut-il prendre rendez-vous pour un camping-car ?",
        answer:
          "Nous vous conseillons de réserver ou d'appeler le centre avant de venir, pour vérifier que les dimensions de votre véhicule sont compatibles avec la ligne de contrôle.",
      },
    ],
  },
  {
    id: "moto",
    path: "/controle-technique-moto",
    shortTitle: "Moto et scooter",
    title: "Contrôle technique moto et scooter",
    metaTitle: "Contrôle technique moto et scooter au Blanc-Mesnil et Ivry",
    metaDescription:
      "Contrôle technique moto, scooter, trois-roues et quad au Blanc-Mesnil et à Ivry-sur-Seine : calendrier, périodicité, points vérifiés. Centres agréés.",
    badge: "Deux-roues",
    subtitle:
      "Obligatoire depuis le 15 avril 2024 : nos deux centres sont agréés pour le contrôle technique des deux-roues, trois-roues et quadricycles à moteur.",
    tarifIds: [],
    sections: [
      {
        heading: "Un contrôle obligatoire depuis 2024",
        paragraphs: [
          "Le contrôle technique des **motos, scooters, trois-roues et quads** est obligatoire depuis le **15 avril 2024**. Pour les véhicules déjà en circulation, un calendrier progressif s'applique selon la date de première immatriculation :",
        ],
        list: [
          "avant le 1er janvier 2017 : contrôle au plus tard le 31 décembre 2024 ;",
          "du 1er janvier 2017 au 31 décembre 2019 : contrôle en 2025 ;",
          "du 1er janvier 2020 au 31 décembre 2021 : contrôle en 2026.",
        ],
      },
      {
        heading: "Quelle périodicité ?",
        paragraphs: [
          "Pour les véhicules plus récents, le premier contrôle a lieu dans les 6 mois précédant le **5e anniversaire** de la mise en circulation, puis **tous les 3 ans**. En cas de vente, le procès-verbal doit dater de moins de 6 mois.",
        ],
      },
      {
        heading: "Ce qui est vérifié",
        paragraphs: [
          "Le contrôle porte notamment sur l'identification du véhicule, le freinage, la direction, l'éclairage et la signalisation, les pneumatiques, la structure, ainsi que les nuisances (émissions polluantes et bruit). En cas de défaillance majeure ou critique, une [contre-visite](/contre-visite) est à passer dans les deux mois.",
          "Nos deux centres disposent d'un agrément spécifique pour les deux-roues : retrouvez les numéros sur la page de chaque centre.",
        ],
      },
    ],
    faq: [
      {
        question: "Quel est le prix du contrôle technique moto ?",
        answer:
          "Pour connaître le tarif du contrôle de votre deux-roues, appelez directement le centre du [Blanc-Mesnil](/le-blanc-mesnil) ou d'[Ivry-sur-Seine](/ivry-sur-seine).",
      },
      {
        question: "Ma moto a été immatriculée en 2021, quand dois-je la faire contrôler ?",
        answer:
          "Les deux-roues immatriculés entre le 1er janvier 2020 et le 31 décembre 2021 doivent passer leur premier contrôle technique en 2026.",
      },
      {
        question: "Que se passe-t-il si je vends ma moto ?",
        answer:
          "Comme pour une voiture, vous devez remettre à l'acheteur un procès-verbal de contrôle technique de moins de 6 mois.",
      },
    ],
  },
  {
    id: "voiture-sans-permis",
    path: "/controle-technique-voiture-sans-permis",
    shortTitle: "Voiture sans permis",
    title: "Contrôle technique voiture sans permis et quadricycle",
    metaTitle: "Contrôle technique voiture sans permis (93, 94)",
    metaDescription:
      "Contrôle technique des voitures sans permis et quadricycles au Blanc-Mesnil et à Ivry-sur-Seine : calendrier, périodicité, points vérifiés. Centres agréés.",
    badge: "Voiture sans permis",
    subtitle:
      "Voiturettes et quadricycles à moteur sont soumis au contrôle technique depuis 2024, avec la même périodicité que les deux-roues.",
    tarifIds: [],
    sections: [
      {
        heading: "Les voitures sans permis sont concernées",
        paragraphs: [
          "Depuis le **15 avril 2024**, les voitures sans permis et les quadricycles à moteur doivent passer le contrôle technique, au même titre que les deux-roues motorisés. Les véhicules déjà en circulation suivent le même calendrier progressif : 2024, 2025, puis **2026 pour ceux immatriculés en 2020 et 2021**.",
        ],
      },
      {
        heading: "Quelle périodicité ?",
        paragraphs: [
          "Le premier contrôle a lieu dans les 6 mois précédant le **5e anniversaire** de la mise en circulation, puis **tous les 3 ans**.",
        ],
      },
      {
        heading: "Ce qui est vérifié",
        paragraphs: [
          "Le contrôle reprend les grandes fonctions d'une voiture, adaptées à ces véhicules : freinage, direction, visibilité, éclairage, pneus, structure, équipements et nuisances. En cas de défaillance majeure ou critique, une [contre-visite](/contre-visite) est à passer dans les deux mois.",
          "À lire aussi : [voitures sans permis et quadricycles, le contrôle technique obligatoire](/actualites/voitures-sans-permis-et-quadricycles-le-controle-technique-obligatoire).",
        ],
      },
    ],
    faq: [
      {
        question: "Quel est le prix du contrôle technique d'une voiture sans permis ?",
        answer:
          "Pour connaître le tarif, appelez directement le centre du [Blanc-Mesnil](/le-blanc-mesnil) ou d'[Ivry-sur-Seine](/ivry-sur-seine).",
      },
      {
        question: "Ma voiture sans permis a moins de 5 ans, dois-je la faire contrôler ?",
        answer:
          "Pas encore : le premier contrôle a lieu dans les 6 mois précédant son 5e anniversaire de mise en circulation.",
      },
    ],
  },
]

export function getVehiclePage(id: VehicleId): VehiclePage {
  const page = vehiclePages.find((p) => p.id === id)
  if (!page) throw new Error(`Page véhicule inconnue : ${id}`)
  return page
}
