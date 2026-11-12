import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("camping-car")

export default function Page() {
  return <VehiclePageTemplate id="camping-car" />
}
