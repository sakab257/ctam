import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("gpl")

export default function Page() {
  return <VehiclePageTemplate id="gpl" />
}
