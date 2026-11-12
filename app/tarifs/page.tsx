import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { ContentSections } from "@/components/content/content-sections"
import { FaqSection } from "@/components/content/faq-section"
import { BookingCta } from "@/components/content/booking-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { FaqItem } from "@/lib/content-types"
import { buildMetadata, faqJsonLd, jsonLdGraph } from "@/lib/seo"
import { centers, centerList } from "@/lib/site"
import { tarifsIvry, tarifsLBM, type Tarif } from "@/lib/tarifs-data"

export const metadata: Metadata = buildMetadata({
  title: "Prix du contrôle technique : nos tarifs (93 et 94)",
  description:
    "Tarifs du contrôle technique au Blanc-Mesnil et à Ivry-sur-Seine : voiture, utilitaire, 4x4, hybride, GPL, camping-car, contre-visite. Prix TTC, promo web.",
  path: "/tarifs",
})

/** Lien vers la page détaillée de chaque prestation */
const detailLinks: Record<string, string> = {
  utilitaire: "/controle-technique-utilitaire",
  "4x4": "/controle-technique-utilitaire",
  hybride: "/controle-technique-voiture-electrique-hybride",
  gaz: "/controle-technique-gpl",
  "contre-visite": "/contre-visite",
  "contre-visite-externe": "/contre-visite",
  "hors-gabarit": "/controle-technique-camping-car",
  pollution: "/controle-technique-utilitaire",
}

function Price({ tarif }: { tarif?: Tarif }) {
  if (!tarif) return <span className="text-gray-500">-</span>
  return (
    <span className="whitespace-nowrap">
      <span className="text-lg font-bold text-primary">{tarif.price} €</span>
      {tarif.originalPrice && (
        <span className="ml-2 text-sm text-gray-500 line-through">{tarif.originalPrice} €</span>
      )}
    </span>
  )
}

const priceOf = (tarifs: Tarif[], id: string) => tarifs.find((t) => t.id === id)?.price

export default function TarifsPage() {
  // Lignes : toutes les prestations, dans l'ordre de la grille du Blanc-Mesnil
  const ids = [...new Set([...tarifsLBM, ...tarifsIvry].map((t) => t.id))]
  const rows = ids.map((id) => ({
    id,
    lbm: tarifsLBM.find((t) => t.id === id),
    ivry: tarifsIvry.find((t) => t.id === id),
  }))

  const cvLbm = priceOf(tarifsLBM, "contre-visite")
  const cvIvry = priceOf(tarifsIvry, "contre-visite")
  const cvExtLbm = priceOf(tarifsLBM, "contre-visite-externe")
  const vpLbm = priceOf(tarifsLBM, "particulier")
  const vpIvry = priceOf(tarifsIvry, "particulier")

  const faq: FaqItem[] = [
    {
      question: "Combien coûte un contrôle technique pour une voiture ?",
      answer: `Pour une voiture particulière essence ou diesel, comptez ${vpLbm} € au Blanc-Mesnil et ${vpIvry} € à Ivry-sur-Seine avec la promotion web, sur les créneaux éligibles réservés en ligne.`,
    },
    {
      question: "Pourquoi les prix sont-ils différents entre vos deux centres ?",
      answer:
        "Les prix du contrôle technique sont libres en France : chaque centre fixe ses tarifs. Nos deux centres ont donc chacun leur grille, affichée ci-dessus.",
    },
    {
      question: "La contre-visite est-elle gratuite ?",
      answer: `Non, la contre-visite est payante : ${cvLbm} € dans nos centres lorsque le contrôle initial y a été réalisé${cvExtLbm ? `, ${cvExtLbm} € s'il a été fait dans un autre centre` : ""}. Voir notre page [contre-visite](/contre-visite).`,
    },
    {
      question: "Le prix est-il le même avec ou sans rendez-vous ?",
      answer:
        "La remise web est réservée aux créneaux éligibles réservés en ligne. Sans rendez-vous, c'est le tarif normal (prix barré dans le tableau) qui s'applique.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer:
        "Le paiement se fait sur place, après le contrôle : carte bancaire, espèces, ou chèque sous réserve d'acceptation.",
    },
    {
      question: "Quel est le tarif pour une moto ou une voiture sans permis ?",
      answer:
        "Pour les deux-roues et les voitures sans permis, appelez directement le centre : [Le Blanc-Mesnil](/le-blanc-mesnil) ou [Ivry-sur-Seine](/ivry-sur-seine).",
    },
  ]

  return (
    <PageLayout
      path="/tarifs"
      title="Tarifs du contrôle technique"
      subtitle="Des prix clairs, affichés TTC, pour nos deux centres du Blanc-Mesnil et d'Ivry-sur-Seine. Réservez en ligne et profitez de la remise web."
      badge="Tarifs"
    >
      <JsonLd data={jsonLdGraph(faqJsonLd(faq))} />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Promotions web */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {centerList.map((center) => (
            <div
              key={center.id}
              className="bg-linear-to-r from-primary to-blue-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-start gap-3"
            >
              <Info className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed">
                <strong>Promotion web {center.name} :</strong> {center.promoNote}
              </p>
            </div>
          ))}
        </div>

        {/* Comparatif */}
        <section className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-linear-to-r from-primary to-blue-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Comparatif des tarifs par centre</h2>
            <p className="text-sm text-blue-100 mt-1">Prix TTC - prix barré : tarif hors promotion web</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-gray-900">Prestation</TableHead>
                <TableHead className="text-right font-semibold text-gray-900">
                  <Link href={centers.lbm.path} className="hover:text-primary">Le Blanc-Mesnil</Link>
                </TableHead>
                <TableHead className="text-right font-semibold text-gray-900">
                  <Link href={centers.ivry.path} className="hover:text-primary">Ivry-sur-Seine</Link>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => {
                const tarif = row.lbm ?? row.ivry
                const href = detailLinks[row.id]
                return (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium whitespace-normal">
                      {href ? (
                        <Link href={href} className="text-gray-900 hover:text-primary hover:underline">
                          {tarif?.title}
                        </Link>
                      ) : (
                        <span className="text-gray-900">{tarif?.title}</span>
                      )}
                      <span className="block text-xs text-gray-500">{tarif?.description}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Price tarif={row.lbm} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Price tarif={row.ivry} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </section>

        <ContentSections
          sections={[
            {
              heading: "Ce qui est compris dans le prix",
              list: [
                "Le contrôle complet de votre véhicule selon la réglementation (133 points pour une voiture).",
                "La mesure des émissions polluantes pour les véhicules thermiques et hybrides.",
                "La remise immédiate du procès-verbal et de la vignette à coller sur le pare-brise.",
                "Les explications du contrôleur sur les éventuels défauts relevés.",
              ],
            },
            {
              heading: "Ce qui fait varier le tarif",
              paragraphs: [
                "Les prix du contrôle technique ne sont pas réglementés : chaque centre fixe les siens. Le tarif dépend surtout du **type de véhicule** (voiture, utilitaire, 4x4, camping-car), de la **motorisation** (un véhicule GPL demande des vérifications supplémentaires) et du **mode de réservation** : la remise web s'applique aux créneaux éligibles réservés en ligne.",
                "Pour en savoir plus, lisez notre article [combien coûte un contrôle technique en Île-de-France](/actualites/combien-coute-un-controle-technique-automobile-en-ile-de-france).",
              ],
            },
            {
              heading: "La contre-visite",
              paragraphs: [
                `Si le contrôle révèle une défaillance majeure ou critique, une contre-visite est obligatoire dans les deux mois. Elle est à **${cvLbm} €** au Blanc-Mesnil et **${cvIvry} €** à Ivry-sur-Seine lorsque le contrôle initial a été réalisé dans le centre. Tous les détails sur notre page [contre-visite](/contre-visite).`,
              ],
            },
          ]}
        />

        <FaqSection items={faq} title="Questions sur nos tarifs" />

        <BookingCta title="Réservez au meilleur prix" />
      </div>
    </PageLayout>
  )
}
