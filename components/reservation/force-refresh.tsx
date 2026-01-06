"use client"

import { useEffect } from "react"

/**
 * Ce composant force un refresh complet de la page si elle est chargée
 * via navigation client-side (soft navigation).
 *
 * Nécessaire pour le widget Autoplanning qui ne supporte pas
 * la navigation client-side de Next.js.
 */
export const ForceRefresh = () => {
    useEffect(() => {
        // Vérifier si le script Autoplanning est déjà chargé (navigation client-side)
        const scriptAlreadyLoaded = document.querySelector('script[src*="agenda-element"][src*="main.js"]')

        if (scriptAlreadyLoaded) {
            // Le script est déjà chargé, c'est une navigation client-side
            // On force un refresh complet immédiatement
            window.location.reload()
        }
    }, [])

    return null
}
