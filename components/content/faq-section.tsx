import { HelpCircle } from "lucide-react"
import type { FaqItem } from "@/lib/content-types"
import { RichText } from "./rich-text"

interface FaqSectionProps {
  items: FaqItem[]
  title?: string
}

/**
 * FAQ visible sur la page. Le JSON-LD FAQPage correspondant est généré
 * séparément avec faqJsonLd() (lib/seo.ts).
 */
export function FaqSection({ items, title = "Questions fréquentes" }: FaqSectionProps) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.question}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
          >
            <h3 className="flex items-start gap-3 text-lg font-bold text-gray-900 mb-3">
              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" aria-hidden="true" />
              {item.question}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <RichText text={item.answer} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
