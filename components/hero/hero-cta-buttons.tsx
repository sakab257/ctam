"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, ArrowBigUp } from 'lucide-react'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { lbmInfo, ivryInfo } from '@/lib/tarifs-data'

interface Location {
  name: string
  slug: string
  description: string
  address: string
}

const locations: Location[] = [
  {
    name: 'Le Blanc-Mesnil',
    slug: '/le-blanc-mesnil',
    description: 'Prendre rendez-vous au centre de contrôle technique CTAM du Blanc-Mesnil',
    address: lbmInfo.address
  },
  {
    name: 'Ivry-Sur-Seine',
    slug: '/ivry-sur-seine',
    description: "Prendre rendez-vous au centre de contrôle technique CTAM d'Ivry-Sur-Seine",
    address: ivryInfo.address
  }
]

export const HeroCTAButtons = () => {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null)

  return (
    <>
      {/* Version Desktop - Sélection + Bouton principal */}
      <div className="hidden sm:flex flex-col gap-4 w-full max-w-2xl mx-auto px-4">
        {/* Sélecteurs de centre */}
        <div className="flex justify-center gap-3 w-100 mx-auto">
          <Button
            onClick={() => setSelectedCenter(0)}
            size="lg"
            variant="outline"
            className={`
              text-sm md:text-base font-semibold px-6 py-5 border-2 transition-all duration-300
              ${selectedCenter === 0
                ? 'bg-linear-to-r from-primary to-blue-600 text-white hover:text-white border-primary shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
              }
            `}
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" aria-hidden="true" />
            {locations[0].name}
          </Button>
          <Button
            onClick={() => setSelectedCenter(1)}
            size="lg"
            variant="outline"
            className={`
              text-sm md:text-base font-semibold px-6 py-5 border-2 transition-all duration-300
              ${selectedCenter === 1
                ? 'bg-linear-to-r from-primary to-blue-600 text-white hover:text-white border-primary shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
              }
            `}
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" aria-hidden="true" />
            {locations[1].name}
          </Button>
        </div>

        {/* Bouton principal RDV */}
        {selectedCenter !== null ? (
          <div className='w-100 mx-auto'>
          <Button
            asChild
            className="w-full text-base md:text-lg font-bold py-6 shadow-xl hover:scale-105 transition-all duration-300 bg-linear-to-r from-primary to-blue-600"
          >
            <Link
              href={locations[selectedCenter].slug}
              aria-label={locations[selectedCenter].description}
              title={locations[selectedCenter].description}
            >
              <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-2" aria-hidden="true" />
              Prendre RDV
            </Link>
          </Button>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-sm py-2 flex mx-auto items-center gap-4">
            <ArrowBigUp className='animate-bounce'/> Choisissez votre centre pour prendre rendez-vous <ArrowBigUp className='animate-bounce' />
          </div>
        )}
      </div>

      {/* Version Mobile - Dialog de sélection */}
      <div className="sm:hidden w-full px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full text-base font-bold px-8 py-6 shadow-xl bg-linear-to-r from-primary to-blue-600"
            >
              <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
              Prendre RDV
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                Choisissez votre centre
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href={locations[0].slug}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all group"
              >
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{locations[0].name}</p>
                  <p className="text-xs text-gray-500">{locations[0].address}</p>
                </div>
                <Calendar className="h-5 w-5 text-primary" />
              </Link>
              <Link
                href={locations[1].slug}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all group"
              >
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{locations[1].name}</p>
                  <p className="text-xs text-gray-500">{locations[1].address}</p>
                </div>
                <Calendar className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
