import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("voiture-sans-permis")

export default function Page() {
  return <VehiclePageTemplate id="voiture-sans-permis" />
}
