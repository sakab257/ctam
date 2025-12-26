"use client"

import { tarifsLBM, tarifsIvry, lbmInfo, ivryInfo, type Tarif } from '@/lib/tarifs-data'
import { PricingCard } from './pricing-card'
import { TarifsHeader, PromoAlert } from './tarifs-header'
import { TarifsTable } from './tarifs-table'
import { InfoCards } from './info-cards'
import { CallToAction } from './call-to-action'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { MapPin } from 'lucide-react'

interface CenterData {
  tarifs: Tarif[]
  info: typeof lbmInfo
  featuredIds: string[]
}

const centers: Record<string, CenterData> = {
  lbm: {
    tarifs: tarifsLBM,
    info: lbmInfo,
    featuredIds: ['contre-visite', 'particulier', 'pollution']
  },
  ivry: {
    tarifs: tarifsIvry,
    info: ivryInfo,
    featuredIds: ['contre-visite', 'particulier', 'pollution']
  }
}

const Tarifs = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full bg-linear-to-br from-blue-50 via-white to-indigo-50 md:snap-start scroll-mt-20 py-12 md:py-16 overflow-hidden"
      id="tarifs"
      aria-labelledby="tarifs-title"
    >
      <div className="container mx-auto px-4">
        {/* Header with title and promo alert */}
        <TarifsHeader />

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

          {Object.entries(centers).map(([key, center]) => {
            const featuredTarifs = center.featuredIds
              .map(id => center.tarifs.find(t => t.id === id)!)
              .filter(Boolean)

            return (
              <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                {/* Promotion Alert */}
                <PromoAlert promoNote={center.info.promoNote} />

                {/* Featured Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
                  {featuredTarifs.map((tarif) => (
                    <PricingCard key={tarif.id} tarif={tarif} />
                  ))}
                </div>

                {/* Complete pricing table */}
                <TarifsTable tarifs={center.tarifs} />

                {/* Info cards (schedule, address, contact) */}
                <InfoCards centerInfo={center.info} />
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Call to action button */}
        <CallToAction />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Tarifs
