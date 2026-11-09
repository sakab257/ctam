import type { Metadata } from "next"
import { CookiesClient } from "./cookies-client"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Gestion des cookies",
  description:
    "Gérez vos préférences de cookies sur le site CTAM : cookies nécessaires, analytiques et marketing. Modifiez votre choix à tout moment.",
  path: "/cookies",
  noindex: true,
})

export default function CookiesPage() {
  return <CookiesClient />
}
