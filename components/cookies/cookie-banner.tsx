"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X, Settings } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
        setTimeout(() => setIsAnimating(true), 50)
      }, 1000)
      return () => clearTimeout(timer)
    }

    // Listen for consent updates from cookies page
    const handleConsentUpdate = () => {
      setIsAnimating(false)
      setTimeout(() => setIsVisible(false), 300)
    }
    window.addEventListener("cookie-consent-updated", handleConsentUpdate)
    return () => window.removeEventListener("cookie-consent-updated", handleConsentUpdate)
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))
    localStorage.setItem("cookie-consent", "true")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    localStorage.setItem("cookie-preferences", JSON.stringify(onlyNecessary))
    localStorage.setItem("cookie-consent", "true")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleClose = () => {
    // Just close without saving - will show again next visit
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative px-12">
          {/* Close button */}
          <Button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-color"
            variant={'ghost'}
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Icon and Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="pr-8 md:pr-0">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Nous utilisons des cookies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic
                  et personnaliser le contenu. Vous pouvez accepter tous les cookies, les refuser ou personnaliser
                  vos préférences.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 px-4">
              <Button
                onClick={handleAcceptAll}
                className="font-semibold w-full sm:w-auto"
              >
                Tout accepter
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="font-semibold w-full sm:w-auto"
              >
                Refuser
              </Button>
              <Link href="/cookies">
                <Button
                  variant="ghost"
                  className="font-semibold w-full sm:w-auto text-gray-600"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Personnaliser
                </Button>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
