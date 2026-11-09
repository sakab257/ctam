import { Car, Truck, Zap, Fuel, ClipboardCheck, Home } from "lucide-react"
import { centers, type Center } from "@/lib/site"

export interface Tarif {
  id: string
  title: string
  price: number
  originalPrice?: number
  description: string
  icon: any
  features: string[]
  popular?: boolean
  badge?: string
  color: "blue" | "red" | "purple" | "green" | "orange"
}

// Tarifs Le Blanc-Mesnil
export const tarifsLBM: Tarif[] = [
  {
    id: "particulier",
    title: "Véhicule Particulier",
    price: 75,
    originalPrice: 79,
    description: "Essence/Diesel",
    icon: Car,
    color: "blue",
    popular: true,
    badge: "Promo Web",
    features: [
      "Contrôle de 133 points",
      "Résultats immédiats",
      "Promotion réservation en ligne",
      "Valable sur créneaux web"
    ]
  },
  {
    id: "utilitaire",
    title: "Véhicule Utilitaire Léger",
    price: 86,
    originalPrice: 90,
    description: "Camionnette et VUL",
    icon: Truck,
    color: "blue",
    badge: "Promo Web",
    features: [
      "Contrôle adapté VUL",
      "Expertise professionnelle",
      "Prise en charge rapide",
      "Équipement spécialisé"
    ]
  },
  {
    id: "4x4",
    title: "4x4 et Grand Utilitaire",
    price: 91,
    originalPrice: 95,
    description: "Véhicules tout-terrain",
    icon: Truck,
    color: "orange",
    badge: "Promo Web",
    features: [
      "Contrôle renforcé",
      "Équipement adapté",
      "Contrôleurs expérimentés",
      "Résultats détaillés"
    ]
  },
  {
    id: "hybride",
    title: "Véhicule Hybride",
    price: 86,
    originalPrice: 90,
    description: "Véhicules électriques et hybrides",
    icon: Zap,
    color: "blue",
    badge: "Promo Web",
    features: [
      "Contrôle spécifique hybride",
      "Expertise électrique",
      "Sécurité batteries",
      "Personnel formé"
    ]
  },
  {
    id: "gaz",
    title: "Véhicule GAZ-GPL",
    price: 106,
    originalPrice: 110,
    description: "Contrôle spécifique GPL/GNV",
    icon: Fuel,
    color: "blue",
    badge: "Promo Web",
    features: [
      "Contrôle système GAZ",
      "Vérification étanchéité",
      "Expertise certifiée",
      "Sécurité renforcée"
    ]
  },
  {
    id: "contre-visite",
    title: "Contre-Visite",
    price: 30,
    description: "Vérification après réparations",
    icon: ClipboardCheck,
    color: "blue",
    features: [
      "Délai de 2 mois",
      "Vérification ciblée",
      "Tarif préférentiel",
      "Sans rendez-vous"
    ]
  },
  {
    id: "contre-visite-externe",
    title: "Contre-Visite Externe",
    price: 40,
    description: "Vérification après réparations",
    icon: ClipboardCheck,
    color: "blue",
    features: [
      "Délai de 2 mois",
      "Vérification ciblée",
      "Tarif préférentiel",
      "Sans rendez-vous"
    ]
  },
  {
    id: "hors-gabarit",
    title: "Véhicule hors gabarit",
    price: 106,
    originalPrice: 110,
    description: "Véhicules hors gabarit, Camping Car",
    icon: Home,
    color: "blue",
    badge: "Promo Web",
    features: [
      "Contrôle hors gabarit",
      "Équipement adapté",
      "Prise en charge spéciale",
      "Expertise camping-car"
    ]
  },
  {
    id: "pollution",
    title: "Complémentaire Pollution",
    price: 40,
    description: "Contrôle pollution additionnel",
    icon: Fuel,
    color: "blue",
    features: [
      "Mesure des émissions",
      "Analyse gaz échappement",
      "Conformité normes",
      "Rapport détaillé"
    ]
  }
]

// Tarifs Ivry-sur-Seine
export const tarifsIvry: Tarif[] = [
  {
    id: "particulier",
    title: "Véhicule Particulier",
    price: 80,
    originalPrice: 85,
    description: "Essence/Diesel",
    icon: Car,
    color: "blue",
    popular: true,
    badge: "Promo Web",
    features: [
      "Contrôle de 133 points",
      "Résultats immédiats",
      "Promotion réservation en ligne",
      "Valable sur créneaux web"
    ]
  },
  {
    id: "utilitaire",
    title: "Véhicule Utilitaire Léger",
    price: 95,
    description: "Camionnette et VUL",
    icon: Truck,
    color: "blue",
    features: [
      "Contrôle adapté VUL",
      "Expertise professionnelle",
      "Prise en charge rapide",
      "Équipement spécialisé"
    ]
  },
  {
    id: "4x4",
    title: "4x4 et Grand Utilitaire",
    price: 95,
    description: "Véhicules tout-terrain",
    icon: Truck,
    color: "blue",
    features: [
      "Contrôle renforcé",
      "Équipement adapté",
      "Contrôleurs expérimentés",
      "Résultats détaillés"
    ]
  },
  {
    id: "hybride",
    title: "Véhicule Hybride",
    price: 95,
    description: "Véhicules électriques et hybrides",
    icon: Zap,
    color: "blue",
    features: [
      "Contrôle spécifique hybride",
      "Expertise électrique",
      "Sécurité batteries",
      "Personnel formé"
    ]
  },
  {
    id: "gaz",
    title: "Véhicule GAZ-GPL",
    price: 95,
    description: "Contrôle spécifique GPL/GNV",
    icon: Fuel,
    color: "blue",
    features: [
      "Contrôle système GAZ",
      "Vérification étanchéité",
      "Expertise certifiée",
      "Sécurité renforcée"
    ]
  },
  {
    id: "contre-visite",
    title: "Contre-Visite",
    price: 30,
    description: "Vérification après réparations",
    icon: ClipboardCheck,
    color: "blue",
    features: [
      "Délai de 2 mois",
      "Vérification ciblée",
      "Tarif préférentiel",
      "Sans rendez-vous"
    ]
  },
  {
    id: "contre-visite-externe",
    title: "Contre-Visite Externe",
    price: 40,
    description: "Vérification après réparations",
    icon: ClipboardCheck,
    color: "blue",
    features: [
      "Délai de 2 mois",
      "Vérification ciblée",
      "Tarif préférentiel",
      "Sans rendez-vous"
    ]
  },
  {
    id: "hors-gabarit",
    title: "Véhicule hors gabarit",
    price: 95,
    description: "Véhicules hors gabarit, Camping Car",
    icon: Home,
    color: "blue",
    features: [
      "Contrôle hors gabarit",
      "Équipement adapté",
      "Prise en charge spéciale",
      "Expertise camping-car"
    ]
  },
  {
    id: "pollution",
    title: "Complémentaire Pollution",
    price: 40,
    description: "Contrôle pollution additionnel",
    icon: Fuel,
    color: "blue",
    features: [
      "Mesure des émissions",
      "Analyse gaz échappement",
      "Conformité normes",
      "Rapport détaillé"
    ]
  }
]

// Export par défaut pour compatibilité
export const tarifs = tarifsLBM

export interface Schedule {
  days: string
  hours: string
}

export const schedules: Schedule[] = [
  { days: centers.lbm.schedule.days, hours: centers.lbm.schedule.hours },
  { days: centers.ivry.schedule.days, hours: centers.ivry.schedule.hours },
]

const toCenterInfo = (center: Center) => ({
  name: center.name,
  address: center.addressLine,
  phone: center.phone,
  access: center.access,
  promoNote: center.promoNote,
  schedule: {
    days: center.schedule.days,
    hours: center.schedule.hours,
  } as Schedule,
})

// Infos centres : dérivées de lib/site.ts (source unique NAP)
export const lbmInfo = toCenterInfo(centers.lbm)

export const ivryInfo = toCenterInfo(centers.ivry)
