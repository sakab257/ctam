import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

interface Location {
  name: string
  slug: string
  description: string
}

const locations: Location[] = [
  {
    name: 'Le Blanc-Mesnil',
    slug: '/le-blanc-mesnil',
    description: 'Prendre rendez-vous au centre de contrôle technique CCTAM du Blanc-Mesnil'
  },
  {
    name: 'Ivry-Sur-Seine',
    slug: '/ivry-sur-seine',
    description: 'Prendre rendez-vous au centre de contrôle technique CCTAM d\'Ivry-Sur-Seine'
  }
]

export const HeroCTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center gap-3 w-full sm:w-auto px-4 max-w-2xl mx-auto">
      <Button
        asChild
        size="lg"
        className="text-sm md:text-base font-semibold px-6 py-5 shadow-lg hover:shadow-xl transition-shadow"
      >
        <Link
          href={locations[0].slug}
          aria-label={locations[0].description}
          title={locations[0].description}
        >
          <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" aria-hidden="true" />
          {locations[0].name}
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="text-sm md:text-base font-semibold px-6 py-5 border-2 hover:bg-gray-50"
      >
        <Link
          href={locations[1].slug}
          aria-label={locations[1].description}
          title={locations[1].description}
        >
          <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" aria-hidden="true" />
          {locations[1].name}
        </Link>
      </Button>
    </div>
  )
}
