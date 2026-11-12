import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("utilitaire")

export default function Page() {
  return <VehiclePageTemplate id="utilitaire" />
}
