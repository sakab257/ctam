import { Metadata } from "next"
import { ReservationPage } from "@/components/reservation/reservation-page"
import { IframeDialogWidget } from "@/components/reservation/iframe-dialog-widget"
import { ivryInfo } from "@/lib/tarifs-data"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildMetadata, centerJsonLd, jsonLdGraph } from "@/lib/seo"
import { centers } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "Contrôle technique Ivry-sur-Seine 94200 : RDV en ligne",
  description:
    "Centre de contrôle technique AUTOSUR à Ivry-sur-Seine (94), 3-5 bd Hippolyte Marquès, Porte d'Ivry près de Paris 13. Lundi-samedi 8h-18h. RDV en ligne.",
  path: centers.ivry.path,
})

const IFRAME_SRC = "https://ivry.automsa.fr/reservation/iframe/fAwX9xZmBp"

export default function IvrySurSeinePage() {
  const centerInfo = {
    name: "Ivry-sur-Seine",
    address: ivryInfo.address,
    phone: ivryInfo.phone,
    schedule: ivryInfo.schedule,
    access: ivryInfo.access,
  }

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          centerJsonLd("ivry"),
          breadcrumbJsonLd([{ name: "Contrôle technique Ivry-sur-Seine", path: centers.ivry.path }])
        )}
      />
      <ReservationPage
        center={centerInfo}
        iframeSrc={IFRAME_SRC}
        dialogWidget={<IframeDialogWidget src={IFRAME_SRC} title="Réservation Ivry-sur-Seine" />}
      />
    </>
  )
}
