/**
 * Types communs aux contenus éditoriaux (articles, pages véhicules, FAQ).
 *
 * Dans les textes (paragraphes, listes, réponses de FAQ), deux syntaxes simples
 * sont reconnues :
 *   - lien  : [texte du lien](/contre-visite)   (lien interne ou https://...)
 *   - gras  : **texte en gras**
 */

export interface ContentSection {
  /** Titre de la section (rendu en <h2>) */
  heading: string
  /** Paragraphes affichés avant la liste */
  paragraphs?: string[]
  /** Liste à puces (optionnelle) */
  list?: string[]
  /** Paragraphes affichés après la liste (optionnels) */
  after?: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

/** Supprime la syntaxe lien/gras pour obtenir du texte brut (JSON-LD, meta). */
export function toPlainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
}
