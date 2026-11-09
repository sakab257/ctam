"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { centers, siteConfig } from "@/lib/site"

const GA_ID = siteConfig.gaMeasurementId

interface CookiePreferences {
  analytics?: boolean
  marketing?: boolean
}

function readPreferences(): CookiePreferences {
  try {
    const raw = localStorage.getItem("cookie-preferences")
    return raw ? (JSON.parse(raw) as CookiePreferences) : {}
  } catch {
    return {}
  }
}

const centerByPath: Record<string, string> = Object.fromEntries(
  Object.values(centers).map((c) => [c.path, c.id])
)
const centerByPhone: Record<string, string> = Object.fromEntries(
  Object.values(centers).map((c) => [c.phone.replace(/\s/g, ""), c.id])
)

function trackEvent(name: string, params: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params)
  }
}

/**
 * Suivi des conversions (sans modifier le markup existant) :
 * - clic_appel : clic sur un lien tel:
 * - clic_rdv   : clic vers une page de réservation ou bouton de réservation
 */
function handleClick(event: MouseEvent) {
  const target = event.target as Element | null
  const el = target?.closest?.("a, button")
  if (!el) return

  const href = el.getAttribute("href") ?? ""
  const page = window.location.pathname

  if (href.startsWith("tel:")) {
    trackEvent("clic_appel", {
      centre: centerByPhone[href.slice(4)] ?? "inconnu",
      page,
    })
    return
  }

  const path = href.replace(/\/$/, "")
  if (centerByPath[path]) {
    trackEvent("clic_rdv", { centre: centerByPath[path], source: "lien_centre", page })
    return
  }

  const isCenterPage = Boolean(centerByPath[page])
  if (
    el.hasAttribute("data-apfr-params-trigger") ||
    (isCenterPage && el.textContent?.includes("Prendre RDV"))
  ) {
    trackEvent("clic_rdv", {
      centre: centerByPath[page] ?? "inconnu",
      source: "bouton_reservation",
      page,
    })
  }
}

/**
 * Google Analytics 4 conforme RGPD / CNIL : le script gtag.js n'est chargé
 * que si l'utilisateur a accepté les cookies analytiques (bannière ou page
 * /cookies). En cas de retrait, le consentement est mis à jour à "denied".
 */
export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const sync = () => {
      const prefs = readPreferences()
      const granted = prefs.analytics === true
      setEnabled(granted)
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: granted ? "granted" : "denied",
          ad_storage: prefs.marketing ? "granted" : "denied",
          ad_user_data: prefs.marketing ? "granted" : "denied",
          ad_personalization: prefs.marketing ? "granted" : "denied",
        })
      }
    }

    sync()
    window.addEventListener("cookie-consent-updated", sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener("cookie-consent-updated", sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.addEventListener("click", handleClick, { capture: true })
    return () => document.removeEventListener("click", handleClick, { capture: true })
  }, [enabled])

  if (!enabled) return null

  const marketing = readPreferences().marketing === true ? "granted" : "denied"

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: '${marketing}',
            ad_user_data: '${marketing}',
            ad_personalization: '${marketing}'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}
