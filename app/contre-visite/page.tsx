import type { Metadata } from "next"
import { AlertTriangle } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { ContentSections } from "@/components/content/content-sections"
import { FaqSection } from "@/components/content/faq-section"
import { BookingCta } from "@/components/content/booking-cta"
import { JsonLd } from "@/components/seo/json-ld"
import type { FaqItem } from "@/lib/content-types"
import { buildMetadata, faqJsonLd, jsonLdGraph } from "@/lib/seo"
import { centerList } from "@/lib/site"
import { getCenterTarifs } from "@/lib/centres-content"

export const metadata: Metadata = buildMetadata({
  title: "Contre-visite contrôle technique : délai, prix, démarche",
  description:
    "Contre-visite après un contrôle technique défavorable : délai de 2 mois, points vérifiés, documents, prix au Blanc-Mesnil et à Ivry-sur-Seine, avec ou sans RDV.",
  path: "/contre-visite",
})

export default function ContreVisitePage() {
  const prices = centerList.map((center) => {
    const tarifs = getCenterTarifs(center.id)
    return {
      center,
      interne: tarifs.find((t) => t.id === "contre-visite")?.price,
      externe: tarifs.find((t) => t.id === "contre-visite-externe")?.price,
    }
  })

  const faq: FaqItem[] = [
    {
      question: "Quel est le délai pour passer la contre-visite ?",
      answer:
        "Deux mois à compter de la date du contrôle technique. La date limite est indiquée sur votre procès-verbal. Au-delà, il faut repasser un contrôle complet.",
    },
    {
      question: "La contre-visite est-elle gratuite ?",
      answer: `Non, elle est payante dans nos centres : ${prices
        .map((p) => `${p.interne} € ${p.center.inCity}`)
        .join(" et ")} lorsque le contrôle initial y a été réalisé.`,
    },
    {
      question: "Peut-on faire la contre-visite dans un autre centre ?",
      answer:
        "Nos centres réalisent aussi les contre-visites de véhicules contrôlés ailleurs, au tarif « contre-visite externe » indiqué ci-dessus.",
    },
    {
      question: "Faut-il prendre rendez-vous pour une contre-visite ?",
      answer:
        "Non, vous pouvez venir avec ou sans rendez-vous du lundi au samedi. Pensez au procès-verbal du contrôle initial.",
    },
    {
      question: "Puis-je rouler en attendant la contre-visite ?",
      answer:
        "Avec une défaillance majeure, oui, pendant le délai de deux mois. Avec une défaillance critique, le véhicule ne peut circuler que jusqu'au soir du jour du contrôle.",
    },
    {
      question: "Quelle différence entre contrôle technique et contre-visite ?",
      answer:
        "Le contrôle technique vérifie l'ensemble du véhicule. La contre-visite ne porte que sur les défaillances relevées lors du contrôle initial, une fois les réparations faites.",
    },
  ]

  return (
    <PageLayout
      path="/contre-visite"
      title="Contre-visite du contrôle technique"
      subtitle="Votre contrôle technique est défavorable ? Délai, prix, documents : tout ce qu'il faut savoir pour repasser sereinement."
      badge="Contre-visite"
    >
      <JsonLd data={jsonLdGraph(faqJsonLd(faq))} />

      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-xl shrink-0">
            <AlertTriangle className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-2">L&apos;essentiel</h2>
            <p className="text-blue-800">
              Après un contrôle défavorable, vous avez <strong>2 mois</strong> pour réparer et passer la
              contre-visite, qui ne vérifie que les points relevés. Nos centres vous accueillent avec ou
              sans rendez-vous.
            </p>
          </div>
        </div>

        {/* Prix */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Prix de la contre-visite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prices.map(({ center, interne, externe }) => (
              <div key={center.id} className="rounded-xl border-2 border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Centre {center.ofCity}</h3>
                <ul className="space-y-2 text-gray-700">
                  {interne !== undefined && (
                    <li className="flex justify-between gap-4">
                      <span>Contrôle initial réalisé dans le centre</span>
                      <strong className="text-primary">{interne} €</strong>
                    </li>
                  )}
                  {externe !== undefined && (
                    <li className="flex justify-between gap-4">
                      <span>Contrôle initial réalisé dans un autre centre</span>
                      <strong className="text-primary">{externe} €</strong>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContentSections
          sections={[
            {
              heading: "Quand une contre-visite est-elle obligatoire ?",
              paragraphs: [
                "Chaque défaut relevé au contrôle technique est classé selon sa gravité. Une contre-visite est obligatoire dès qu'il y a au moins une défaillance **majeure** ou **critique** :",
              ],
              list: [
                "**Défaillance mineure** : notée sur le procès-verbal, pas de contre-visite.",
                "**Défaillance majeure** : contre-visite obligatoire dans les deux mois ; vous pouvez circuler pendant ce délai.",
                "**Défaillance critique** : contre-visite obligatoire ; le véhicule ne peut circuler que jusqu'au soir du jour du contrôle.",
              ],
              after: [
                "Pour comprendre votre procès-verbal ligne par ligne, lisez [défaillance mineure, majeure ou critique](/actualites/defaillance-mineure-majeure-ou-critique-comprendre-votre-proces-verbal).",
              ],
            },
            {
              heading: "Un délai de deux mois",
              paragraphs: [
                "Vous disposez de **deux mois** à compter de la date du contrôle pour faire réparer et présenter le véhicule. Passé ce délai, la contre-visite n'est plus possible : il faut repasser un contrôle technique complet, au tarif normal.",
              ],
            },
            {
              heading: "Comment se déroule la contre-visite ?",
              list: [
                "Faites réparer les défaillances relevées, chez le garagiste de votre choix.",
                "Présentez-vous au centre avec la **carte grise** et le **procès-verbal du contrôle initial**.",
                "Le contrôleur vérifie uniquement les points signalés.",
                "Si tout est corrigé, vous repartez avec un procès-verbal favorable et une nouvelle vignette.",
              ],
            },
            {
              heading: "Éviter la contre-visite",
              paragraphs: [
                "La plupart des défaillances (éclairage, essuie-glaces, pneus, voyants) se repèrent facilement avant le contrôle. Suivez notre guide [pour éviter la contre-visite](/eviter-contre-visite) et notre [checklist de la veille](/actualites/preparer-son-vehicule-la-veille-du-controle-technique-la-checklist).",
              ],
            },
          ]}
        />

        <FaqSection items={faq} title="Questions sur la contre-visite" />

        <BookingCta
          title="Passez votre contre-visite"
          text="Avec ou sans rendez-vous, du lundi au samedi, dans nos centres du Blanc-Mesnil et d'Ivry-sur-Seine."
        />
      </div>
    </PageLayout>
  )
}
