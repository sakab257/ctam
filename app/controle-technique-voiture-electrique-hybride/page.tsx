import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("electrique-hybride")

export default function Page() {
  return <VehiclePageTemplate id="electrique-hybride" />
}
