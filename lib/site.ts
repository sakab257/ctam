/**
 * Source unique de vérité pour les informations du site et des centres
 * (nom, URL, NAP, horaires, coordonnées GPS, réseaux sociaux).
 *
 * Utilisé par : metadata (SEO), JSON-LD, footer, pages centres, accès & plan.
 * Toute modification d'adresse / téléphone / horaires se fait ICI uniquement.
 */

export const siteConfig = {
  name: "CTAM",
  /** Nom long utilisé dans Open Graph / JSON-LD WebSite */
  siteName: "CTAM - Contrôle Technique AUTOSUR",
  brand: "AUTOSUR",
  /** Domaine canonique (production redirige ctamcontrole.fr → www) */
  url: "https://www.ctamcontrole.fr",
  locale: "fr_FR",
  language: "fr-FR",
  description:
    "Centres de contrôle technique agréés AUTOSUR au Blanc-Mesnil (93) et à Ivry-sur-Seine (94). Auto, moto, utilitaire : réservation en ligne 24h/24 ou sans rendez-vous.",
  logo: "/logo.webp",
  gaMeasurementId: "G-6Q6XBC9NRF",
  googleSiteVerification: "I1jVgDC3x6teta_GkR7I4-dZ47YlIOw7nueaPxdSsGg",
  social: {
    instagram: "https://www.instagram.com/ctam.autosur/",
    facebook: "https://www.facebook.com/cctamleblancmesnil",
  },
} as const

export type CenterId = "lbm" | "ivry"

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"

export interface Center {
  id: CenterId
  /** Chemin de la page centre (prise de RDV) */
  path: string
  /** Nom court affiché sur le site */
  name: string
  /** Nom de la fiche Google Maps (cohérence NAP) */
  googleName: string
  /** Ville précédée de sa préposition : "au Blanc-Mesnil", "à Ivry-sur-Seine" */
  inCity: string
  address: {
    street: string
    postalCode: string
    city: string
    department: string
    departmentCode: string
    region: string
    country: "FR"
  }
  /** Adresse sur une ligne, telle qu'affichée sur le site */
  addressLine: string
  /** Téléphone affiché */
  phone: string
  /** Téléphone au format international (JSON-LD) */
  phoneE164: string
  geo: { latitude: number; longitude: number }
  schedule: {
    /** Libellés affichés sur le site */
    days: string
    hours: string
    /** Valeurs machine (JSON-LD) */
    dayOfWeek: DayOfWeek[]
    opens: string
    closes: string
  }
  access: string
  promoNote: string
  agrements: { auto: string; moto: string }
  maps: { embedUrl: string; placeUrl: string }
  googleReviewUrl: string
  /** Villes / zones desservies (JSON-LD areaServed) */
  areaServed: { cities: string[]; areas: string[] }
  sameAs: string[]
}

const MONDAY_TO_SATURDAY: DayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const centers: Record<CenterId, Center> = {
  lbm: {
    id: "lbm",
    path: "/le-blanc-mesnil",
    name: "Le Blanc-Mesnil",
    googleName: "AUTOSUR CTAM Contrôle Technique Le Blanc-Mesnil",
    inCity: "au Blanc-Mesnil",
    address: {
      street: "17 rue Corneille",
      postalCode: "93150",
      city: "Le Blanc-Mesnil",
      department: "Seine-Saint-Denis",
      departmentCode: "93",
      region: "Île-de-France",
      country: "FR",
    },
    addressLine: "17 rue Corneille, 93150 Le Blanc-Mesnil",
    phone: "01 48 67 66 66",
    phoneE164: "+33148676666",
    geo: { latitude: 48.937072, longitude: 2.476049 },
    schedule: {
      days: "Lundi au Samedi",
      hours: "9h - 18h",
      dayOfWeek: MONDAY_TO_SATURDAY,
      opens: "09:00",
      closes: "18:00",
    },
    access: "À 2 minutes de la gare RER",
    promoNote:
      "Remise de 4 € pour véhicule particulier - Valable uniquement sur créneaux spécifiques internet",
    agrements: { auto: "S093S290", moto: "L093S330" },
    maps: {
      embedUrl:
        "https://www.google.com/maps?q=AUTOSUR+CTAM+Contr%C3%B4le+Technique+Le+Blanc-Mesnil,+17+rue+Corneille,+93150+Le+Blanc-Mesnil&ll=48.937072,2.476049&z=17&hl=fr&output=embed",
      placeUrl:
        "https://www.google.com/maps/place/AUTOSUR+CTAM+Contr%C3%B4le+Technique+Le+Blanc-Mesnil/@48.937072,2.476049,17z/data=!4m6!3m5!1s0x47e614a63a18fad7:0xce99ded48c0162c2!8m2!3d48.937072!4d2.476049!16s%2Fg%2F1tj1rcm3?hl=fr",
    },
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ1_oYOqYU5kcRwmIBjNTemc4",
    areaServed: {
      cities: [
        "Le Blanc-Mesnil",
        "Drancy",
        "Aulnay-sous-Bois",
        "Le Bourget",
        "Dugny",
        "La Courneuve",
        "Bobigny",
        "Villepinte",
        "Tremblay-en-France",
        "Sevran",
        "Bondy",
        "Saint-Denis",
        "Aubervilliers",
        "Pantin",
      ],
      areas: ["Seine-Saint-Denis", "Île-de-France"],
    },
    sameAs: [
      "https://www.facebook.com/cctamleblancmesnil",
      "https://www.instagram.com/ctam.autosur/",
    ],
  },
  ivry: {
    id: "ivry",
    path: "/ivry-sur-seine",
    name: "Ivry-sur-Seine",
    googleName: "AUTOSUR CTAM Contrôle Technique Autosur Ivry-sur-Seine - Auto et Moto",
    inCity: "à Ivry-sur-Seine",
    address: {
      street: "3-5 bd Hippolyte Marquès",
      postalCode: "94200",
      city: "Ivry-sur-Seine",
      department: "Val-de-Marne",
      departmentCode: "94",
      region: "Île-de-France",
      country: "FR",
    },
    addressLine: "3-5 bd Hippolyte Marquès, 94200 Ivry-sur-Seine",
    phone: "01 46 71 11 22",
    phoneE164: "+33146711122",
    geo: { latitude: 48.8190911, longitude: 2.3730322 },
    schedule: {
      days: "Lundi au Samedi",
      hours: "8h - 18h",
      dayOfWeek: MONDAY_TO_SATURDAY,
      opens: "08:00",
      closes: "18:00",
    },
    access: "À la Porte d'Ivry.",
    promoNote:
      "Remise de 5 € pour véhicule particulier - Valable uniquement sur créneaux spécifiques internet",
    agrements: { auto: "S094S248", moto: "L094S218" },
    maps: {
      embedUrl:
        "https://www.google.com/maps?q=AUTOSUR+CTAM+Contr%C3%B4le+Technique+Autosur+Ivry-sur-Seine+-+Auto+et+Moto,+3-5+bd+Hippolyte+Marqu%C3%A8s,+94200+Ivry-sur-Seine&ll=48.8190911,2.3730322&z=17&hl=fr&output=embed",
      placeUrl:
        "https://www.google.com/maps/place/AUTOSUR+CTAM+Contr%C3%B4le+Technique+Autosur+Ivry-sur-Seine+-+Auto+et+Moto/@48.8190911,2.3730322,17z/data=!4m6!3m5!1s0x47e6722db8125bb7:0xf5e3fc161dc5c1f!8m2!3d48.8190911!4d2.3730322!16s%2Fg%2F1tfmh3r4?hl=fr",
    },
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJt1sSuC1y5kcRH1zcYcE_Xg8",
    areaServed: {
      cities: [
        "Ivry-sur-Seine",
        "Paris 13e Arrondissement",
        "Vitry-sur-Seine",
        "Villejuif",
        "Le Kremlin-Bicêtre",
        "Charenton-le-Pont",
        "Alfortville",
        "Gentilly",
        "Maisons-Alfort",
        "Choisy-le-Roi",
      ],
      areas: ["Val-de-Marne", "Paris", "Île-de-France"],
    },
    sameAs: ["https://www.instagram.com/ctam.autosur/"],
  },
}

export const centerList: Center[] = [centers.lbm, centers.ivry]

/** URL absolue à partir d'un chemin */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return siteConfig.url
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

/** Lien tel: à partir d'un numéro affiché */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`
}
