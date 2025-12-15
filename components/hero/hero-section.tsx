import React from 'react'
import Image from 'next/image'
import { CenterBadge } from './center-badge'
import { GoogleRating } from './google-rating'
import { HeroTitle } from './hero-title'
import { HeroCTAButtons } from './hero-cta-buttons'
import { HeroFeatures } from './hero-features'

const HeroSection = () => {
    return (
        <section
        className="relative w-full min-h-full bg-linear-to-br from-blue-50 via-white to-blue-50 py-8 md:py-16 flex items-center"
        aria-labelledby="hero-title"
        >
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            {/* Badge et Avis Google sur la même ligne */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <CenterBadge />
                <GoogleRating />
            </div>

            {/* Titre Principal */}
            <div id="hero-title">
                <HeroTitle />
            </div>

            {/* Description pour le SEO */}
            <p className="text-base md:text-lg text-gray-600 max-w-2xl px-4 text-shadow-2xs">
                Prenez rendez-vous en ligne 24h/24 pour votre contrôle technique automobile, moto ou voiture sans permis
                dans nos centres CCTAM du Blanc-Mesnil et d'Ivry-Sur-Seine.
            </p>

            {/* Boutons CTA */}
            <div className="w-full">
                <HeroCTAButtons />
            </div>

            {/* Informations supplémentaires */}
            <HeroFeatures />
            </div>
        </div>

        {/* Image ours en fond à gauche */}
        <div className="hidden lg:block absolute opacity-10 lg:opacity-100 left-0 lg:left-8 top-1/2 -translate-y-1/2 w-xs md:w-md lg:w-lg z-0 transition-all" aria-hidden="true">
            <Image
                src="/ours.png"
                alt=""
                width={800}
                height={800}
                className="object-contain w-full transition-all"
                priority
            />
        </div>

        {/* Banderoles décoratives en haut à droite */}
        <div className="absolute top-0 -right-15" aria-hidden="true">
            {/* Banderole bleue */}
            <div className="bg-blue-600 text-white h-10 w-70 rotate-45 shadow-lg transform origin-center mb-3">
                <span className="text-sm font-semibold whitespace-nowrap"></span>
            </div>
            {/* Banderole rouge */}
            <div className="bg-red-600 text-white h-10 w-70 rotate-45 shadow-lg transform origin-center">
                <span className="text-sm font-semibold whitespace-nowrap"></span>
            </div>
        </div>

        {/* Décoration de fond */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30" aria-hidden="true">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        </div>
        </section>
    )
}

export default HeroSection