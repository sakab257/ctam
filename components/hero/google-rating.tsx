import { Star } from 'lucide-react'

export const GoogleRating = () => {
  const rating = 4.8
  const maxRating = 5

  return (
      <div className="flex flex-col items-center gap-1 px-3 py-2">
        <div className="flex items-center gap-1" role="img" aria-label={`Note de ${rating} sur ${maxRating} étoiles`}>
          {[1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
          ))}
          <div className="relative">
            <Star className="h-5 w-5 text-gray-300" aria-hidden="true" />
            <Star
              className="h-5 w-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0"
              style={{ clipPath: 'inset(0 25% 0 0)' }}
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{rating}/{maxRating}</span> sur{' '}
          <span className="font-medium">Google Avis</span>
        </p>
      </div>
  )
}
