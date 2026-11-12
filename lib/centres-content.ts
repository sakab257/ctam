import type { CenterId } from "@/lib/site"
import { centers } from "@/lib/site"
import { tarifsIvry, tarifsLBM, type Tarif } from "@/lib/tarifs-data"
import type { FaqItem } from "@/lib/content-types"

/**
 * Textes SEO propres à chaque centre (pages /le-blanc-mesnil et /ivry-sur-seine).
 * Les infos pratiques (adresse, horaires, téléphone) viennent de lib/site.ts,
 * les prix de lib/tarifs-data.ts : ne pas les recopier ici en dur.
 */

export interface CenterContent {
  intro: string[]
  access: string[]
  areaIntro: string
  areaOutro: string
  otherCenterText: string
}

export const centerContent: Record<CenterId, CenterContent> = {
  lbm: {
    intro: [
      "Le centre **AUTOSUR CTAM du Blanc-Mesnil** vous accueille au 17 rue Corneille (93150), à 2 minutes à pied de la gare RER B, du lundi au samedi. Nos contrôleurs agréés réalisent le contrôle technique de votre voiture, de votre utilitaire, de votre deux-roues ou de votre voiture sans permis, et vous remettent le procès-verbal sur place.",
      "Réservez en ligne 24h/24 pour choisir votre créneau et profiter de la remise web, ou présentez-vous **sans rendez-vous** aux heures d'ouverture.",
    ],
    access: [
      "**En transports** : à 2 minutes à pied de la gare RER B du Blanc-Mesnil.",
      "**En voiture** : parking gratuit sur place pour patienter pendant le contrôle.",
    ],
    areaIntro:
      "Installé en Seine-Saint-Denis, notre centre accueille chaque jour les automobilistes du Blanc-Mesnil et des communes voisines du 93 :",
    areaOutro:
      "Il est aussi facilement accessible depuis le nord de Paris, en voiture comme en RER B.",
    otherCenterText:
      "Vous habitez plutôt dans le Val-de-Marne ou le sud-est parisien ? Notre second centre vous accueille à la Porte d'Ivry :",
  },
  ivry: {
    intro: [
      "Le centre **AUTOSUR d'Ivry-sur-Seine** vous accueille au 3-5 boulevard Hippolyte Marquès (94200), à la Porte d'Ivry, aux portes du 13e arrondissement de Paris, du lundi au samedi. Nos contrôleurs agréés réalisent le contrôle technique de votre voiture, de votre utilitaire, de votre deux-roues ou de votre voiture sans permis, et vous remettent le procès-verbal sur place.",
      "Réservez en ligne 24h/24 pour choisir votre créneau et profiter de la remise web, ou présentez-vous **sans rendez-vous** aux heures d'ouverture.",
    ],
    access: [
      "**En voiture** : à quelques pas du boulevard périphérique, sortie Porte d'Ivry.",
      "**Parking** : parking gratuit sur place pour patienter pendant le contrôle.",
    ],
    areaIntro:
      "Situé à la limite de Paris, notre centre accueille les automobilistes d'Ivry-sur-Seine, du Val-de-Marne et du sud-est parisien :",
    areaOutro:
      "Depuis Paris, il est accessible directement par le boulevard périphérique, sortie Porte d'Ivry.",
    otherCenterText:
      "Vous habitez plutôt en Seine-Saint-Denis ou au nord de Paris ? Notre centre principal vous accueille près de la gare RER B :",
  },
}

const tarifsByCenter: Record<CenterId, Tarif[]> = { lbm: tarifsLBM, ivry: tarifsIvry }

export function getCenterTarifs(centerId: CenterId): Tarif[] {
  return tarifsByCenter[centerId]
}

function price(centerId: CenterId, tarifId: string): number | undefined {
  return tarifsByCenter[centerId].find((t) => t.id === tarifId)?.price
}

/** FAQ locale, construite à partir des données du centre (horaires, prix). */
export function getCenterFaq(centerId: CenterId): FaqItem[] {
  const center = centers[centerId]
  const particulier = price(centerId, "particulier")
  const contreVisite = price(centerId, "contre-visite")

  return [
    {
      question: `Faut-il prendre rendez-vous pour un contrôle technique ${center.inCity} ?`,
      answer: `Non, ce n'est pas obligatoire : vous pouvez venir sans rendez-vous du ${center.schedule.days.toLowerCase()}, ${center.schedule.hours}. La réservation en ligne vous garantit toutefois un créneau sans attente et donne accès à la remise web sur les créneaux éligibles.`,
    },
    {
      question: `Quels sont les horaires du centre ${center.ofCity} ?`,
      answer: `Le centre est ouvert du ${center.schedule.days.toLowerCase()}, de ${center.schedule.hours.replace(" - ", " à ")}. Vous pouvez réserver en ligne 24h/24 ou nous appeler au ${center.phone}.`,
    },
    {
      question: `Combien coûte un contrôle technique ${center.inCity} ?`,
      answer: particulier
        ? `Le contrôle d'une voiture particulière essence ou diesel est à ${particulier} € TTC avec la promotion web. Les tarifs des autres véhicules (utilitaire, 4x4, hybride, GPL, camping-car) sont détaillés plus haut et sur notre page [tarifs](/tarifs).`
        : "Tous nos tarifs sont détaillés sur notre page [tarifs](/tarifs).",
    },
    {
      question: "Combien de temps dure le contrôle ?",
      answer:
        "Comptez en général moins de 45 minutes. Le procès-verbal vous est remis immédiatement et le contrôleur vous explique les éventuels défauts relevés.",
    },
    {
      question: "Quels documents faut-il apporter ?",
      answer:
        "La carte grise originale du véhicule et, si vous en avez un, le précédent procès-verbal de contrôle technique. Pour une contre-visite, apportez le procès-verbal du contrôle initial. Voir [les documents à présenter](/actualites/quels-documents-apporter-au-controle-technique).",
    },
    {
      question: "Combien coûte la contre-visite ?",
      answer: contreVisite
        ? `La contre-visite est à ${contreVisite} € lorsque le contrôle initial a été réalisé dans notre centre. Elle doit être passée dans les deux mois suivant le contrôle. Tous les détails sur notre page [contre-visite](/contre-visite).`
        : "Tous les détails sur notre page [contre-visite](/contre-visite).",
    },
    {
      question: "Comment payer ?",
      answer:
        "Le paiement se fait sur place, après le contrôle : carte bancaire, espèces, ou chèque sous réserve d'acceptation.",
    },
  ]
}
