import { Button } from "../ui/button"
import { Phone, Calendar, MapPin, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { NavLogo } from "./logo"

export const FooterMobile = () => {
    const phoneNumber = "0148672001"

    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg lg:hidden"
            role="contentinfo"
            aria-label="Actions rapides"
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex gap-3">
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 font-semibold border-2"
                    >
                        <Link
                            href={`tel:${phoneNumber}`}
                            aria-label="Appeler le centre CCTAM"
                        >
                            <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                            Appeler
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        className="flex-1 font-semibold shadow-md"
                    >
                        <Link
                            href="/rendez-vous"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <div className="p-3 rounded-lg inline-block">
              <NavLogo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Centre de contrôle technique automobile, moto et voiture sans permis à Le Blanc-Mesnil et Ivry-Sur-Seine.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Le Blanc-Mesnil</p>
                  <p className="text-gray-400">17 rue Corneille, 93150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:0148676666" className="text-sm hover:text-primary transition-colors">
                  01 48 67 66 66
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contact@cctam.fr" className="text-sm hover:text-primary transition-colors">
                  contact@cctam.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">Lun - Sam : 9h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#services" className="text-sm hover:text-primary transition-colors">
                Nos Services
              </Link>
              <Link href="#tarifs" className="text-sm hover:text-primary transition-colors">
                Tarifs & Horaires
              </Link>
              <Link href="#avis" className="text-sm hover:text-primary transition-colors">
                Avis Clients
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Prendre Rendez-vous
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Éviter la Contre-visite
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Accès & Plan
              </Link>
            </nav>
          </div>

          {/* Column 4: Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Informations Légales</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Conditions Générales
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
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
              © {currentYear} CCTAM. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Agréé par l'État</span>
              <span className="hidden md:inline">•</span>
              <span>Contrôle Technique Certifié</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
