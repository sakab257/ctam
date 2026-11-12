import Link from "next/link"
import { Fragment } from "react"

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/
const BOLD = /^\*\*([^*]+)\*\*$/

/**
 * Affiche un texte en interprétant [lien](/url) et **gras**.
 * Les liens internes utilisent next/link (crawlables, navigation rapide).
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, index) => {
        const link = part.match(LINK)
        if (link) {
          const [, label, href] = link
          if (href.startsWith("/")) {
            return (
              <Link key={index} href={href} className="text-primary font-medium hover:underline">
                {label}
              </Link>
            )
          }
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              {label}
            </a>
          )
        }
        const bold = part.match(BOLD)
        if (bold) {
          return (
            <strong key={index} className="font-semibold text-gray-900">
              {bold[1]}
            </strong>
          )
        }
        return <Fragment key={index}>{part}</Fragment>
      })}
    </>
  )
}
