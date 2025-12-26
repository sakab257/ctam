"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/navigation/header"
import { Footer, FooterMobile } from "@/components/navigation/footer"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Cookie, Shield, BarChart3, Megaphone, ArrowLeft, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"
import { CookieBanner } from "@/components/cookies/cookie-banner"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const cookieCategories = [
  {
    id: "necessary",
    icon: Shield,
    title: "Cookies nécessaires",
    description: "Ces cookies sont essentiels au fonctionnement du site. Ils permettent d'utiliser les fonctionnalités de base comme la navigation et l'accès aux zones sécurisées.",
    examples: ["Session utilisateur", "Préférences de cookies", "Sécurité"],
    required: true,
    color: "blue"
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Cookies analytiques",
    description: "Ces cookies nous permettent de comprendre comment vous utilisez notre site afin d'améliorer votre expérience. Toutes les données sont anonymisées.",
    examples: ["Google Analytics", "Statistiques de visite", "Pages consultées"],
    required: false,
    color: "purple"
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Cookies marketing",
    description: "Ces cookies sont utilisés pour vous proposer des publicités pertinentes. Ils peuvent être utilisés par nos partenaires publicitaires pour créer un profil de vos intérêts.",
    examples: ["Publicités ciblées", "Réseaux sociaux", "Remarketing"],
    required: false,
    color: "orange"
  }
]

export default function CookiesPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Load preferences from localStorage
    const stored = localStorage.getItem("cookie-preferences")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setPreferences({
          necessary: true, // Always true
          analytics: parsed.analytics ?? false,
          marketing: parsed.marketing ?? false
        })
      } catch {
        // Invalid JSON, use defaults
      }
    }
  }, [])

  const handleToggle = (id: string) => {
    if (id === "necessary") return // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [id]: !prev[id as keyof CookiePreferences]
    }))
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent", "true")
    setSaved(true)

    // Dispatch event for cookie banner to listen to
    window.dispatchEvent(new Event("cookie-consent-updated"))

    setTimeout(() => setSaved(false), 3000)
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))
    localStorage.setItem("cookie-consent", "true")
    window.dispatchEvent(new Event("cookie-consent-updated"))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-preferences", JSON.stringify(onlyNecessary))
    localStorage.setItem("cookie-consent", "true")
    window.dispatchEvent(new Event("cookie-consent-updated"))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Header */}
        <section className="relative bg-linear-to-br from-primary via-blue-600 to-indigo-700 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            <div className="inline-block mb-4 ml-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Vie privée
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Gestion des Cookies
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Personnalisez vos préférences de cookies pour contrôler votre expérience sur notre site.
            </p>
          </div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl shrink-0">
                    <Cookie className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Qu'est-ce qu'un cookie ?
                    </h2>
                    <p className="text-blue-800">
                      Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web.
                      Il permet au site de mémoriser des informations sur votre visite, comme vos préférences de langue
                      ou vos informations de connexion, ce qui facilite votre prochaine visite.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 h-12 font-semibold"
                >
                  Tout accepter
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 h-12 font-semibold"
                >
                  Tout refuser (sauf nécessaires)
                </Button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-6 mb-8">
                {cookieCategories.map((category) => {
                  const isEnabled = preferences[category.id as keyof CookiePreferences]
                  return (
                    <div
                      key={category.id}
                      className={`bg-white rounded-2xl shadow-lg border p-6 transition-all ${
                        isEnabled ? "border-primary/30" : "border-gray-100"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-xl shrink-0 ${
                            category.color === "blue" ? "bg-blue-100" :
                            category.color === "purple" ? "bg-purple-100" :
                            "bg-orange-100"
                          }`}>
                            <category.icon className={`h-6 w-6 ${
                              category.color === "blue" ? "text-blue-600" :
                              category.color === "purple" ? "text-purple-600" :
                              "text-orange-600"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-gray-900">
                                {category.title}
                              </h3>
                              {category.required && (
                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                                  Obligatoire
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              {category.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {category.examples.map((example, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                >
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <Switch
                            checked={isEnabled}
                            onCheckedChange={() => handleToggle(category.id)}
                            disabled={category.required}
                            className="data-[state=checked]:bg-primary"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Save Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">Vos préférences seront enregistrées sur cet appareil.</span>
                </div>
                <Button
                  onClick={handleSave}
                  className="font-semibold px-8"
                >
                  {saved ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Enregistré !
                    </>
                  ) : (
                    "Enregistrer mes préférences"
                  )}
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Pour en savoir plus</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/politique-confidentialite"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Politique de confidentialité
                  </Link>
                  <Link
                    href="/mentions-legales"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Mentions légales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FooterMobile />
    </div>
  )
}
