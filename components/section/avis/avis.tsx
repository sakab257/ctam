"use client"

import { avisLBM, avisIvry, statsLBM, statsIvry, type Avis, type StatsAvis } from '@/lib/avis-data'
import { AvisHeader } from './avis-header'
import { AvisCard } from './avis-card'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { MapPin } from 'lucide-react'

interface CenterAvisData {
  avis: Avis[]
  stats: StatsAvis
}

const centers: Record<string, CenterAvisData> = {
  lbm: {
    avis: avisLBM,
    stats: statsLBM
  },
  ivry: {
    avis: avisIvry,
    stats: statsIvry
  }
}

const Avis = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full bg-linear-to-br from-blue-50 via-white to-indigo-50 md:snap-start scroll-mt-20 py-12 md:py-16 overflow-hidden"
      id="avis"
      aria-labelledby="avis-title"
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Témoignages Clients
            </span>
          </div>

          <h2
            id="avis-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Ce Que Nos <span className="text-primary">Clients Disent</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            La satisfaction de nos clients est notre priorité. Découvrez leurs expériences.
          </p>
        </div>

        {/* Tabs pour les centres */}
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
              {/* Stats Header */}
              <AvisHeader stats={center.stats} showTitle={false} />

              {/* Avis Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
                {center.avis.map((avis) => (
                  <AvisCard key={avis.id} avis={avis} />
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Vous aussi, partagez votre expérience
                </p>
                <Link
                  href={center.stats.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  Laisser un Avis Google
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Avis
