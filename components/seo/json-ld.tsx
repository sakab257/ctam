import { breadcrumbJsonLd, jsonLdGraph, type BreadcrumbItem } from "@/lib/seo"

interface JsonLdProps {
  data: Record<string, unknown>
}

/** Injecte un bloc <script type="application/ld+json"> (rendu côté serveur). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Échappe "<" pour éviter toute injection de balise </script>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

/** Raccourci : fil d'Ariane JSON-LD (Accueil > ...). */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={jsonLdGraph(breadcrumbJsonLd(items))} />
}
