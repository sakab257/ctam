import { Badge } from '@/components/ui/badge'
import { BadgeCheck } from 'lucide-react'

export const CenterBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 text-sm font-medium bg-white"
      aria-label="Centre de contrôle technique agréé par l'État"
    >
      <BadgeCheck className="h-4 w-4 text-green-600 mr-2" aria-hidden="true" />
      <span>Centres Agréés</span>
    </Badge>
  )
}
