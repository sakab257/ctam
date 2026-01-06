import { Metadata } from "next"
import { ReservationPage } from "@/components/reservation/reservation-page"
import { IframeDialogWidget } from "@/components/reservation/iframe-dialog-widget"
import { ivryInfo } from "@/lib/tarifs-data"

export const metadata: Metadata = {
  title: "Rendez-vous Ivry-sur-Seine | CTAM - Contrôle Technique",
  description: "Prenez rendez-vous en ligne pour votre contrôle technique automobile au centre AUTOSUR TUV DCTA d'Ivry-sur-Seine. Réservation 24h/24.",
}

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
    <ReservationPage
      center={centerInfo}
      iframeSrc={IFRAME_SRC}
      dialogWidget={<IframeDialogWidget src={IFRAME_SRC} title="Réservation Ivry-sur-Seine" />}
    />
  )
}
