import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Home, ArrowLeft, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            {/* 404 Number */}
            <div className="text-9xl font-bold text-primary/20 mb-4">404</div>

            {/* Icon */}
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Search className="h-12 w-12 text-primary" />
            </div>

            {/* Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Page introuvable
            </h1>
            <p className="text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Home className="h-5 w-5" />
                Retour à l'accueil
              </Link>
              <Link
                href="/plan-site"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
