import type { Metadata } from "next"
import { absoluteUrl, centers, siteConfig, type Center, type CenterId } from "@/lib/site"
import { tarifsIvry, tarifsLBM, type Tarif } from "@/lib/tarifs-data"

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

/** Image générée par app/opengraph-image.tsx */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "CTAM - Centres de contrôle technique AUTOSUR au Blanc-Mesnil et à Ivry-sur-Seine",
}

interface PageMetadataOptions {
  /** Titre de la page (le template "%s | CTAM" est ajouté automatiquement) */
  title: string
  /** ~150-160 caractères */
  description: string
  /** Chemin canonique, ex: "/acces-plan" */
  path: string
  /** Si true, le titre est utilisé tel quel (sans " | CTAM") */
  absoluteTitle?: boolean
  noindex?: boolean
}

/**
 * Construit les metadata d'une page : title, description, canonical,
 * Open Graph et Twitter Card. L'image OG provient de app/opengraph-image.tsx.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.siteName,
      url: path,
      title: fullTitle,
      description,
      // Un openGraph défini par la page n'hérite pas de app/opengraph-image : on le référence
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

// ---------------------------------------------------------------------------
// JSON-LD (schema.org)
// ---------------------------------------------------------------------------

type JsonLdNode = Record<string, unknown>

const ORGANIZATION_ID = `${siteConfig.url}/#organization`
const WEBSITE_ID = `${siteConfig.url}/#website`

const centerNodeId = (center: Center) => `${absoluteUrl(center.path)}#centre`

const tarifsByCenter: Record<CenterId, Tarif[]> = {
  lbm: tarifsLBM,
  ivry: tarifsIvry,
}

function priceRange(tarifs: Tarif[]): string {
  const prices = tarifs.map((t) => t.price)
  return `${Math.min(...prices)} € - ${Math.max(...prices)} €`
}

export function organizationJsonLd(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    alternateName: "CTAM AUTOSUR",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    contactPoint: Object.values(centers).map((center) => ({
      "@type": "ContactPoint",
      telephone: center.phoneE164,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
      name: `${siteConfig.name} ${center.name}`,
    })),
    subOrganization: Object.values(centers).map((center) => ({
      "@id": centerNodeId(center),
    })),
  }
}

export function websiteJsonLd(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.siteName,
    inLanguage: siteConfig.language,
    publisher: { "@id": ORGANIZATION_ID },
  }
}

/**
 * Fiche établissement (LocalBusiness → AutomotiveBusiness) d'un centre.
 * Pas d'AggregateRating : Google n'affiche pas les étoiles pour les avis
 * auto-publiés par un établissement sur son propre site.
 */
export function centerJsonLd(centerId: CenterId): JsonLdNode {
  const center = centers[centerId]
  const tarifs = tarifsByCenter[centerId]
  const pageUrl = absoluteUrl(center.path)

  return {
    "@type": "AutomotiveBusiness",
    "@id": centerNodeId(center),
    name: center.googleName,
    alternateName: `${siteConfig.name} ${center.name}`,
    description: `Centre de contrôle technique agréé ${siteConfig.brand} ${center.inCity} (${center.address.departmentCode}) : voitures, motos, utilitaires, hybrides, GPL, camping-cars. Avec ou sans rendez-vous.`,
    url: pageUrl,
    telephone: center.phoneE164,
    image: absoluteUrl(siteConfig.logo),
    logo: absoluteUrl(siteConfig.logo),
    brand: { "@type": "Brand", name: siteConfig.brand },
    parentOrganization: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: center.address.street,
      postalCode: center.address.postalCode,
      addressLocality: center.address.city,
      addressRegion: center.address.region,
      addressCountry: center.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: center.geo.latitude,
      longitude: center.geo.longitude,
    },
    hasMap: center.maps.placeUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: center.schedule.dayOfWeek,
        opens: center.schedule.opens,
        closes: center.schedule.closes,
      },
    ],
    priceRange: priceRange(tarifs),
    currenciesAccepted: "EUR",
    areaServed: [
      ...center.areaServed.cities.map((name) => ({ "@type": "City", name })),
      ...center.areaServed.areas.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
    ],
    sameAs: center.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Tarifs contrôle technique ${center.name}`,
      itemListElement: tarifs.map((tarif) => ({
        "@type": "Offer",
        price: tarif.price,
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "Service",
          name: `Contrôle technique - ${tarif.title}`,
          description: tarif.description,
          serviceType: "Contrôle technique automobile",
          provider: { "@id": centerNodeId(center) },
          areaServed: center.address.region,
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: pageUrl,
        inLanguage: siteConfig.language,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Rendez-vous contrôle technique" },
    },
  }
}

export interface BreadcrumbItem {
  name: string
  path: string
}

/** Fil d'Ariane : "Accueil" est ajouté automatiquement en premier. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdNode {
  const all: BreadcrumbItem[] = [{ name: "Accueil", path: "/" }, ...items]
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Regroupe plusieurs nœuds dans un seul document JSON-LD @graph. */
export function jsonLdGraph(...nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes }
}
