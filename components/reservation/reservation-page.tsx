"use client"

import { Header } from "@/components/navigation/header"
import { Footer, FooterMobile } from "@/components/navigation/footer"
import { MapPin, Clock, Phone, ArrowLeft, Calendar, CheckCircle2, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CenterInfo {
  name: string
  address: string
  phone: string
  schedule: {
    days: string
    hours: string
  }
  access: string
}

interface ReservationPageProps {
  center: CenterInfo
  iframeSrc?: string
}

export const ReservationPage = ({ center, iframeSrc }: ReservationPageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-full bg-linear-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Back button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Retour à l'accueil</span>
            </Link>

            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 mb-4">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-gray-700">Réservation en ligne</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Prendre rendez-vous à{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
                  {center.name}
                </span>
              </h1>

              <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                Réservez votre créneau en quelques clics. Contrôle technique rapide et professionnel.
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

              {/* Iframe / Placeholder - Takes 2 columns on desktop */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {iframeSrc ? (
                    <iframe
                      src={iframeSrc}
                      className="w-full h-150 md:h-175 lg:h-187.5 border-0"
                      title={`Réservation ${center.name}`}
                      allow="payment"
                    />
                  ) : (
                    <div className="w-full h-150 md:h-175 lg:h-187.5 flex flex-col items-center justify-center p-8 bg-linear-to-br from-gray-50 to-blue-50">
                      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                        <Calendar className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
                        Réservation bientôt disponible
                      </h3>
                      <p className="text-gray-600 text-center max-w-md mb-6">
                        Le système de réservation en ligne pour ce centre sera disponible très prochainement.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className="gap-2">
                          <Link href={`tel:${center.phone.replace(/\s/g, '')}`}>
                            <Phone className="h-4 w-4" />
                            Appeler le centre
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                          <Link href="/#tarifs">
                            Voir les tarifs
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar with center info */}
              <div className="lg:col-span-1 order-1 lg:order-2 space-y-4">
                {/* Center Info Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Informations du centre
                  </h2>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Adresse</p>
                        <p className="text-sm text-gray-600">{center.address}</p>
                        <p className="text-xs text-gray-500 mt-1 italic">{center.access}</p>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Horaires</p>
                        <p className="text-sm text-gray-600">{center.schedule.days}</p>
                        <p className="text-lg font-bold text-primary">{center.schedule.hours}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Téléphone</p>
                        <Link
                          href={`tel:${center.phone.replace(/\s/g, '')}`}
                          className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                          {center.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>

                  <div className="space-y-3">
                    {[
                      "Réseau AUTOSUR agréé",
                      "Résultats immédiats",
                      "Équipe professionnelle",
                      "Prix compétitifs"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-15 pointer-events-none" aria-hidden="true" />
        </section>
      </main>

      <Footer />
      <FooterMobile />
    </div>
  )
}
