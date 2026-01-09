export interface Avis {
  id: string
  name: string
  rating: number
  date: string
  comment: string
  vehicle?: string
  verified: boolean
}

export interface StatsAvis {
  totalAvis: number
  noteMoyenne: number
  repartition: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  googleUrl: string
}

// Avis Le Blanc-Mesnil
export const avisLBM: Avis[] = [
  {
    id: "1",
    name: "Dominique Le Pape",
    rating: 5,
    date: "Modifié il y a 2 jours.",
    comment: "Accueil, Professionnalisme,ponctualité.....prix.....Je recommande sans hésiter",
    verified: true
  },
  {
    id: "2",
    name: "Daniel Sedjro",
    rating: 5,
    date: "Il y a une semaine.",
    comment: "Excellent service. Je recommande !",
    verified: true
  },
  {
    id: "3",
    name: "Emma Gaby",
    rating: 5,
    date: "Il y a une semaine.",
    comment: "C’était top ! service très professionnel. Personnel aimable !",
    verified: true
  },
]

export const statsLBM: StatsAvis = {
  totalAvis: 351,
  noteMoyenne: 4.8,
  repartition: {
    5: 351,
    4: 53,
    3: 6,
    2: 4,
    1: 3
  },
  googleUrl: "https://search.google.com/local/writereview?placeid=ChIJ1_oYOqYU5kcRwmIBjNTemc4"
}

// Avis Ivry-sur-Seine
export const avisIvry: Avis[] = [
  {
    id: "1",
    name: "Nathalie Tea",
    rating: 5,
    date: "Il y a 3 mois",
    comment: "Accueil pro, monsieur au guichet très sympathique et très gentil, patient et a pu répondre à toutes mes questions et donner des conseils supplémentaires sur une partie de la voiture ! Dame très gentille également au top 👌",
    vehicle: "Volkswagen Golf",
    verified: true
  },
  {
    id: "2",
    name: "Alexandre Razee",
    rating: 5,
    date: "Il y a 4 mois",
    comment: "Contrôle technique effectué récemment dans ce centre. L’accueil a été agréable et on a pris le temps de m’expliquer les points relevés sans dramatiser, avec clarté et honnêteté. Tout s’est déroulé dans les temps, sans mauvaise surprise. Une bonne expérience, je reviendrai pour le prochain contrôle.",
    vehicle: "Toyota Yaris",
    verified: true
  },
  {
    id: "3",
    name: "Lap L",
    rating: 5,
    date: "Il y a 3 mois",
    comment: "Un centre avec un personnel très professionnel, la dame à l'accueil a été exceptionnelle, c'est très rare de nos jours. Tout est parfaitement clair et bien expliqué au niveau du bilan final.",
    vehicle: "Ford Fiesta",
    verified: true
  },
]

export const statsIvry: StatsAvis = {
  totalAvis: 620,
  noteMoyenne: 4.6,
  repartition: {
    5: 620,
    4: 85,
    3: 30,
    2: 15,
    1: 15
  },
  googleUrl: "https://search.google.com/local/writereview?placeid=ChIJt1sSuC1y5kcRH1zcYcE_Xg8"
}

// Export par défaut pour compatibilité
export const avisClients = avisLBM
export const statsAvis = statsLBM
