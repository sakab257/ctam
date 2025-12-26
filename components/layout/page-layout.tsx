import { Header } from "@/components/navigation/header"
import { Footer, FooterMobile } from "@/components/navigation/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  badge?: string
}

export function PageLayout({ children, title, subtitle, badge }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Header */}
        <section className="relative bg-linear-to-br from-primary via-blue-600 to-indigo-700 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            {badge && (
              <div className="inline-block mb-4 ml-4">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {badge}
                </span>
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </section>
      </main>
      <Footer />
      <FooterMobile />
    </div>
  )
}
