"use client"

import { Button } from "../ui/button"
import { Phone, Calendar, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { lbmInfo, ivryInfo } from "@/lib/tarifs-data"

export const FooterMobile = () => {
    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg lg:hidden"
            role="contentinfo"
            aria-label="Actions rapides"
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex gap-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1 font-semibold border-2"
                                aria-label="Choisir un centre à appeler"
                            >
                                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                                Appeler
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle className="text-center text-xl">
                                    Choisissez un centre
                                </DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col gap-3 mt-4">
                                <Link
                                    href={`tel:${lbmInfo.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all group"
                                >
                                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">Le Blanc-Mesnil</p>
                                        <p className="text-[10px] text-gray-500">{lbmInfo.address}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">{lbmInfo.phone}</p>
                                    </div>
                                </Link>
                                <Link
                                    href={`tel:${ivryInfo.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all group"
                                >
                                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">Ivry-sur-Seine</p>
                                        <p className="text-[10px] text-gray-500">{ivryInfo.address}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">{ivryInfo.phone}</p>
                                    </div>
                                </Link>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button
                        asChild
                        size="lg"
                        className="flex-1 font-semibold shadow-md"
                    >
                        <Link
                            href="/#hero-section"
                            aria-label="Prendre rendez-vous en ligne pour un contrôle technique"
                        >
                            <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                            Prendre RDV
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
              CTAM
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Centre de contrôle technique automobile, moto et voiture sans permis à Le Blanc-Mesnil et Ivry-Sur-Seine.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/autosur.cctam/"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/cctamleblancmesnil"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Contact Le Blanc-Mesnil */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Le Blanc-Mesnil</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">{lbmInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${lbmInfo.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                  {lbmInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">Lun - Sam : 9h - 18h</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Ivry-sur-Seine */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Ivry-sur-Seine</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">{ivryInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${ivryInfo.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                  {ivryInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">Lun - Sam : 9h - 18h</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#services" className="text-sm hover:text-primary transition-colors">
                Nos Services
              </Link>
              <Link href="/#tarifs" className="text-sm hover:text-primary transition-colors">
                Tarifs & Horaires
              </Link>
              <Link href="/#avis" className="text-sm hover:text-primary transition-colors">
                Avis Clients
              </Link>
              <Link href="/#hero-section" className="text-sm hover:text-primary transition-colors">
                Prendre Rendez-vous
              </Link>
              <Link href="/quand-passer-controle" className="text-sm hover:text-primary transition-colors">
                Quand passer votre contrôle ?
              </Link>
              <Link href="/eviter-contre-visite" className="text-sm hover:text-primary transition-colors">
                Éviter la Contre-visite
              </Link>
              <Link href="/acces-plan" className="text-sm hover:text-primary transition-colors">
                Accès & Plan
              </Link>
            </nav>
          </div>

          {/* Column 4: Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Informations Légales</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/mentions-legales" className="text-sm hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-sm hover:text-primary transition-colors">
                Conditions Générales
              </Link>
              <Link href="/cookies" className="text-sm hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link href="/plan-site" className="text-sm hover:text-primary transition-colors">
                Plan du Site
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} CTAM. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Agréé par l'État</span>
              <span className="hidden md:inline">•</span>
              <span>Contrôle Technique Certifié</span>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer pour le FooterMobile fixe sur mobile */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </footer>
  )
}
