import { Metadata } from "next"
import { ReservationPage } from "@/components/reservation/reservation-page"
import { AutoPlanningWidget } from "@/components/reservation/autoplanning-widget"
import { ForceRefresh } from "@/components/reservation/force-refresh"
import { lbmInfo } from "@/lib/tarifs-data"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildMetadata, centerJsonLd, faqJsonLd, jsonLdGraph } from "@/lib/seo"
import { centers } from "@/lib/site"
import { CenterSeoContent } from "@/components/centre/center-seo-content"
import { getCenterFaq } from "@/lib/centres-content"

export const metadata: Metadata = buildMetadata({
  title: "Contrôle technique Le Blanc-Mesnil 93150 : RDV en ligne",
  description:
    "Centre de contrôle technique AUTOSUR CTAM au 17 rue Corneille, Le Blanc-Mesnil (93), à 2 min du RER B. Du lundi au samedi 9h-18h. Réservez en ligne.",
  path: centers.lbm.path,
})

export default function LeBlancMesnilPage() {
  const centerInfo = {
    name: "Le Blanc-Mesnil",
    address: lbmInfo.address,
    phone: lbmInfo.phone,
    schedule: lbmInfo.schedule,
    access: lbmInfo.access,
  }

  // ID Autoplanning récupéré lors de l'analyse précédente pour Le Blanc-Mesnil
  const AUTOPLANNING_ID = "4523"

  return (
    <>
      {/* Force refresh si navigation client-side (Autoplanning ne supporte pas) */}
      <ForceRefresh />
      <JsonLd
        data={jsonLdGraph(
          centerJsonLd("lbm"),
          breadcrumbJsonLd([{ name: "Contrôle technique Le Blanc-Mesnil", path: centers.lbm.path }]),
          faqJsonLd(getCenterFaq("lbm"))
        )}
      />
      <ReservationPage
        center={centerInfo}
        useAutoplanning={true}
        seoContent={<CenterSeoContent centerId="lbm" />}
      >
        <AutoPlanningWidget centerId={AUTOPLANNING_ID} />
      </ReservationPage>
    </>
  )
}