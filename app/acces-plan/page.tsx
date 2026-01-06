"use client"

import { useState } from "react"
import { Header } from "@/components/navigation/header"
import { Footer, FooterMobile } from "@/components/navigation/footer"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { MapPin, Phone, Clock, Train, Car, ArrowLeft, Loader2, SquareParking } from "lucide-react"
import Link from "next/link"
import { lbmInfo, ivryInfo } from "@/lib/tarifs-data"
import { cn } from "@/lib/utils"

// --- Données des centres ---
const centers = {
  lbm: {
    name: "Le Blanc-Mesnil",
    info: lbmInfo,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.857647266929!2d2.4552!3d48.9365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e614b7a18768e9%3A0x6968748607684074!2sAutosur%20Contr%C3%B4le%20Technique%20Le%20Blanc-Mesnil!5e0!3m2!1sfr!2sfr!4v1709908354924!5m2!1sfr!2sfr", // J'ai mis une URL d'exemple valide pour que ça marche visuellement
    directions: [
      {
        icon: Train,
        title: "En transports",
        description: "À 2 minutes à pied de la gare RER B Le Blanc-Mesnil"
      },
      {
        icon: Car,
        title: "En voiture",
        description: "Parking gratuit disponible sur place"
      }
    ],
    agrements: {
      auto: "S093S290",
      moto: "L093S330"
    }
  },
  ivry: {
    name: "Ivry-sur-Seine",
    info: ivryInfo,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.653494796347!2d2.3876!3d48.8145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673a74360e20f%3A0x5e52331575822369!2sAutosur%20Contr%C3%B4le%20Technique%20Ivry-sur-Seine!5e0!3m2!1sfr!2sfr!4v1709908402123!5m2!1sfr!2sfr", // URL d'exemple valide
    directions: [
      {
        icon: Car,
        title: "En voiture",
        description: "À quelques pas du périphérique, sortie Porte d'Ivry"
      },
      {
        icon: SquareParking,
        title: "Parking",
        description: "Parking gratuit disponible sur place"
      }
    ],
    agrements: {
      auto: "S094S248",
      moto: "L094S218"
    }
  }
}

// --- Composant dédié pour la Carte avec Loader ---
// Cela permet de gérer l'état "isLoading" indépendamment pour chaque carte
const MapFrame = ({ url, title }: { url: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 relative">
      <div className="aspect-video md:aspect-21/9 w-full relative">
        
        {/* LE LOADER DEMANDÉ */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 transition-opacity duration-500">
            <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
            <p className="text-gray-600 font-medium animate-pulse">Chargement du plan...</p>
          </div>
        )}

        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Plan d'accès - ${title}`}
          className={cn("w-full h-full transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}

// --- Page Principale ---
export default function AccesPlan() {
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
                Nos Centres
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Accès & Plan
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Retrouvez nos deux centres de contrôle technique en Île-de-France.
            </p>
          </div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Content with Tabs */}
        <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="lbm" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="h-auto p-1.5 bg-white shadow-xl border border-gray-100 rounded-2xl gap-2">
                  <TabsTrigger
                    value="lbm"
                    className="h-12 px-4 sm:px-8 gap-2 rounded-xl font-semibold text-gray-600
                      data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600
                      data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25
                      hover:bg-blue-50 hover:text-primary
                      transition-all duration-300"
                  >
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="text-sm sm:text-base">Le Blanc-Mesnil</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="ivry"
                    className="h-12 px-4 sm:px-8 gap-2 rounded-xl font-semibold text-gray-600
                      data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600
                      data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25
                      hover:bg-blue-50 hover:text-primary
                      transition-all duration-300"
                  >
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="text-sm sm:text-base">Ivry-sur-Seine</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(centers).map(([key, center]) => (
                <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="max-w-6xl mx-auto">
                    
                    {/* UTILISATION DU NOUVEAU COMPOSANT MAP AVEC LOADER */}
                    <MapFrame url={center.mapUrl} title={center.name} />

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {/* Address */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-bold text-gray-900">Adresse</h3>
                        </div>
                        <p className="text-gray-600">{center.info.address}</p>
                      </div>

                      {/* Phone */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <Phone className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">Téléphone</h3>
                        </div>
                        <Link
                          href={`tel:${center.info.phone.replace(/\s/g, '')}`}
                          className="text-primary font-semibold hover:underline"
                        >
                          {center.info.phone}
                        </Link>
                      </div>

                      {/* Hours */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <Clock className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">Horaires</h3>
                        </div>
                        <p className="text-gray-600">
                          {center.info.schedule.days}<br />
                          <span className="font-semibold text-gray-900">{center.info.schedule.hours}</span>
                        </p>
                      </div>

                      {/* Agrements */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <Car className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">Agréments</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Auto : <span className="font-mono font-semibold">{center.agrements.auto}</span><br />
                          Moto : <span className="font-mono font-semibold">{center.agrements.moto}</span>
                        </p>
                      </div>
                    </div>

                    {/* Directions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {center.directions.map((direction, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-start gap-4"
                        >
                          <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                            <direction.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{direction.title}</h3>
                            <p className="text-gray-600">{direction.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
                      <h2 className="text-2xl font-bold mb-4">
                        Prêt à nous rendre visite ?
                      </h2>
                      <p className="text-white/90 mb-6">
                        Prenez rendez-vous en ligne pour éviter l'attente.
                      </p>
                      <Link
                        href="/#hero-section"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Prendre Rendez-Vous
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <FooterMobile />
    </div>
  )
}