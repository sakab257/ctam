import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { FaqSection } from "@/components/content/faq-section"
import { BookingCta } from "@/components/content/booking-cta"
import { JsonLd } from "@/components/seo/json-ld"
import type { FaqItem } from "@/lib/content-types"
import { buildMetadata, faqJsonLd, jsonLdGraph } from "@/lib/seo"
import { centers } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "FAQ contrôle technique : vos questions, nos réponses",
  description:
    "Sans rendez-vous, documents, durée, prix, contre-visite, contrôle périmé, vente : les réponses de nos contrôleurs du Blanc-Mesnil et d'Ivry-sur-Seine.",
  path: "/faq",
})

const { lbm, ivry } = centers

const groups: { title: string; items: FaqItem[] }[] = [
  {
    title: "Rendez-vous et horaires",
    items: [
      {
        question: "Peut-on passer le contrôle technique sans rendez-vous ?",
        answer:
          "Oui, nos deux centres vous accueillent avec ou sans rendez-vous. Réserver en ligne vous garantit un créneau et donne accès à la remise web sur les créneaux éligibles. Voir [contrôle technique sans rendez-vous](/actualites/peut-on-passer-le-controle-technique-sans-rendez-vous).",
      },
      {
        question: "Quels sont vos horaires d'ouverture ?",
        answer: `Le Blanc-Mesnil : du ${lbm.schedule.days.toLowerCase()}, ${lbm.schedule.hours}. Ivry-sur-Seine : du ${ivry.schedule.days.toLowerCase()}, ${ivry.schedule.hours}. Les deux centres sont ouverts le samedi.`,
      },
      {
        question: "Comment prendre rendez-vous en ligne ?",
        answer: `Choisissez votre centre, [Le Blanc-Mesnil](${lbm.path}) ou [Ivry-sur-Seine](${ivry.path}), puis votre créneau dans le planning. La réservation est possible 24h/24.`,
      },
    ],
  },
  {
    title: "Le jour du contrôle",
    items: [
      {
        question: "Quels documents faut-il apporter ?",
        answer:
          "La carte grise originale et, le cas échéant, le précédent procès-verbal de contrôle technique. Voir [les documents à apporter](/actualites/quels-documents-apporter-au-controle-technique).",
      },
      {
        question: "Combien de temps dure un contrôle technique ?",
        answer:
          "En général moins de 45 minutes. Le procès-verbal vous est remis immédiatement.",
      },
      {
        question: "Que vérifie-t-on au contrôle technique ?",
        answer:
          "133 points de contrôle pour une voiture : identification, freinage, direction, visibilité, éclairage, liaisons au sol, structure, équipements et pollution. Détails dans [que vérifie-t-on au contrôle technique](/actualites/que-verifie-t-on-au-controle-technique).",
      },
      {
        question: "Comment préparer son véhicule ?",
        answer:
          "Vérifiez les feux, les pneus, les essuie-glaces et les voyants, videz le coffre et venez moteur chaud. Suivez notre guide [pour éviter la contre-visite](/eviter-contre-visite).",
      },
      {
        question: "Comment payer ?",
        answer:
          "Sur place, après le contrôle : carte bancaire, espèces, ou chèque sous réserve d'acceptation.",
      },
    ],
  },
  {
    title: "Résultat et contre-visite",
    items: [
      {
        question: "Que faire si le contrôle technique est refusé ?",
        answer:
          "Faites réparer les défaillances relevées puis passez la contre-visite dans les deux mois. Voir [contrôle technique refusé : que faire](/actualites/controle-technique-refuse-que-faire).",
      },
      {
        question: "Quel est le délai pour la contre-visite ?",
        answer:
          "Deux mois à compter de la date du contrôle. Au-delà, il faut repasser un contrôle complet. Tout est expliqué sur notre page [contre-visite](/contre-visite).",
      },
      {
        question: "La contre-visite est-elle gratuite ?",
        answer: "Non, elle est payante. Les prix de chaque centre sont sur notre page [tarifs](/tarifs).",
      },
    ],
  },
  {
    title: "Réglementation",
    items: [
      {
        question: "Quand faire son premier contrôle technique ?",
        answer:
          "Pour une voiture, dans les 6 mois précédant le 4e anniversaire de sa première mise en circulation, puis tous les 2 ans. Pour une moto, au 5e anniversaire puis tous les 3 ans. Voir [quand passer son contrôle technique](/quand-passer-controle).",
      },
      {
        question: "Peut-on rouler avec un contrôle technique périmé ?",
        answer:
          "Non. Vous risquez une amende de 135 € et l'immobilisation du véhicule. Voir [contrôle technique périmé](/actualites/controle-technique-perime-amende-immobilisation-et-assurance).",
      },
      {
        question: "Le contrôle technique est-il obligatoire pour vendre sa voiture ?",
        answer:
          "Oui pour une voiture de plus de 4 ans : le procès-verbal remis à l'acheteur doit dater de moins de 6 mois. Voir [vendre son véhicule d'occasion](/actualites/vendre-son-vehicule-d-occasion-le-controle-technique-est-obligatoire).",
      },
      {
        question: "Le contrôle technique délivre-t-il la vignette Crit'Air ?",
        answer:
          "Non. La vignette Crit'Air se commande uniquement sur le site officiel [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Le contrôle technique vérifie, lui, les émissions polluantes de votre véhicule.",
      },
    ],
  },
]

export default function FaqPage() {
  const allItems = groups.flatMap((group) => group.items)

  return (
    <PageLayout
      path="/faq"
      title="Questions fréquentes"
      subtitle="Les réponses de nos contrôleurs aux questions les plus posées sur le contrôle technique."
      badge="FAQ"
    >
      <JsonLd data={jsonLdGraph(faqJsonLd(allItems))} />
      <div className="max-w-6xl mx-auto space-y-12">
        {groups.map((group) => (
          <FaqSection key={group.title} items={group.items} title={group.title} />
        ))}
        <BookingCta />
      </div>
    </PageLayout>
  )
}
