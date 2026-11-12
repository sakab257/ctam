import type { Metadata } from "next"
import { VehiclePageTemplate, vehicleMetadata } from "@/components/content/vehicle-page"

export const metadata: Metadata = vehicleMetadata("moto")

export default function Page() {
  return <VehiclePageTemplate id="moto" />
}
