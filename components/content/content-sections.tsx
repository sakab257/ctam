import { CheckCircle2 } from "lucide-react"
import type { ContentSection } from "@/lib/content-types"
import { RichText } from "./rich-text"

/** Sections de texte (h2 + paragraphes + liste) dans des cartes blanches. */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <section
          key={section.heading}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {section.paragraphs?.map((paragraph, index) => (
              <p key={index}>
                <RichText text={paragraph} />
              </p>
            ))}
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {section.after?.map((paragraph, index) => (
              <p key={index}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
