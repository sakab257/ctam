import { Metadata } from "next"
import { ReservationPage } from "@/components/reservation/reservation-page"
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

  return (
    <ReservationPage
      center={centerInfo}
      // TODO: Ajouter l'URL de l'iframe Autosur pour Le Blanc-Mesnil
      // iframeSrc="https://..."
    />
  )
}
