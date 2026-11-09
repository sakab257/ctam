import type { Metadata } from "next"
import { AccesPlanClient } from "./acces-plan-client"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbJsonLd, buildMetadata, centerJsonLd, jsonLdGraph } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Accès et plan : nos centres du Blanc-Mesnil et d'Ivry",
  description:
    "Adresses, plans Google Maps, accès et parking gratuit de nos centres de contrôle technique au Blanc-Mesnil (près du RER B) et à Ivry-sur-Seine (Porte d'Ivry).",
  path: "/acces-plan",
})

export default function AccesPlanPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          centerJsonLd("lbm"),
          centerJsonLd("ivry"),
          breadcrumbJsonLd([{ name: "Accès & Plan", path: "/acces-plan" }])
        )}
      />
      <AccesPlanClient />
    </>
  )
}
