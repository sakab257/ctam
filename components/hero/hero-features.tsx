interface Feature {
  text: string
  id: string
}

const features: Feature[] = [
  { id: '1', text: 'Rendez-vous en ligne 24h/24' },
  { id: '2', text: 'Résultats immédiats' },
  { id: '3', text: 'Équipe professionnelle' }
]

export const HeroFeatures = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 px-4">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full bg-green-500"
            aria-hidden="true"
          />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  )
}
