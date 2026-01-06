import { Metadata } from "next"
import { ReservationPage } from "@/components/reservation/reservation-page"
import { AutoPlanningWidget } from "@/components/reservation/autoplanning-widget"
import { ForceRefresh } from "@/components/reservation/force-refresh"
import { lbmInfo } from "@/lib/tarifs-data"

export const metadata: Metadata = {
  title: "Rendez-vous Le Blanc-Mesnil | CTAM - Contrôle Technique",
  description: "Prenez rendez-vous en ligne pour votre contrôle technique automobile au centre AUTOSUR CTAM du Blanc-Mesnil. Réservation 24h/24.",
}

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
      <ReservationPage
        center={centerInfo}
        useAutoplanning={true}
      >
        <AutoPlanningWidget centerId={AUTOPLANNING_ID} />
      </ReservationPage>
    </>
  )
}