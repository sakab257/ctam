import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { ContentSections } from "@/components/content/content-sections"
import { FaqSection } from "@/components/content/faq-section"
import { BookingCta } from "@/components/content/booking-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata, faqJsonLd, jsonLdGraph } from "@/lib/seo"
import { getVehiclePage, vehiclePages, type VehicleId } from "@/lib/vehicules-data"
import { centerList, telHref } from "@/lib/site"
import { getCenterTarifs } from "@/lib/centres-content"

export function vehicleMetadata(id: VehicleId): Metadata {
  const page = getVehiclePage(id)
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
  })
}

/** Gabarit commun des pages "contrôle technique <type de véhicule>". */
export function VehiclePageTemplate({ id }: { id: VehicleId }) {
  const page = getVehiclePage(id)
  const others = vehiclePages.filter((p) => p.id !== id)

  return (
    <PageLayout title={page.title} subtitle={page.subtitle} badge={page.badge} path={page.path}>
      <JsonLd data={jsonLdGraph(faqJsonLd(page.faq))} />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Tarifs par centre */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Nos tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centerList.map((center) => {
              const tarifs = getCenterTarifs(center.id).filter((t) => page.tarifIds.includes(t.id))
              return (
                <div key={center.id} className="rounded-xl border-2 border-gray-100 p-5">
                  <h3 className="font-bold text-gray-900 mb-3">
                    <Link href={center.path} className="hover:text-primary transition-colors">
                      Centre {center.ofCity}
                    </Link>
                  </h3>
                  {tarifs.length > 0 ? (
                    <ul className="space-y-2">
                      {tarifs.map((tarif) => (
                        <li key={tarif.id} className="flex items-baseline justify-between gap-4">
                          <span className="text-gray-700">{tarif.title}</span>
                          <span className="whitespace-nowrap">
                            <span className="text-lg font-bold text-primary">{tarif.price} €</span>
                            {tarif.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                {tarif.originalPrice} €
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">
                      Tarif communiqué par téléphone :{" "}
                      <a
                        href={telHref(center.phone)}
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {center.phone}
                      </a>
                    </p>
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Prix TTC. Tous nos tarifs sont sur la page{" "}
            <Link href="/tarifs" className="text-primary font-medium hover:underline">
              tarifs du contrôle technique
            </Link>
            .
          </p>
        </section>

        <ContentSections sections={page.sections} />

        <FaqSection items={page.faq} />

        <BookingCta />

        {/* Maillage vers les autres types de véhicules */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Les autres véhicules contrôlés</h2>
          <ul className="flex flex-wrap gap-3">
            {others.map((other) => (
              <li key={other.id}>
                <Link
                  href={other.path}
                  className="inline-block bg-white text-primary font-medium px-4 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {other.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contre-visite"
                className="inline-block bg-white text-primary font-medium px-4 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                Contre-visite
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}
