# Instructions pour Claude

Ce fichier contient les instructions et le contexte pour aider Claude à comprendre ce projet.

## Contexte du Projet

Site vitrine pour **CTAM** (Centre de Contrôle Technique Automobile) avec deux centres :
- **Le Blanc-Mesnil** (LBM) - Centre principal
- **Ivry-sur-Seine** - Second centre (sous le nom TUV DCTA)

## Stack Technique

- **Next.js 16** avec App Router
- **React 19**
- **Tailwind CSS 4** (syntaxe v4 : `bg-linear-to-r` au lieu de `bg-gradient-to-r`)
- **shadcn/ui** (style new-york) - Utiliser `pnpm dlx shadcn@latest add [component]`
- **Lucide React** pour les icônes
- **pnpm** comme gestionnaire de packages

## Structure des Données

### Infos centres et site (`lib/site.ts`) — source unique
- `siteConfig` : nom, URL canonique (`https://www.ctamcontrole.fr`), réseaux sociaux, ID GA4
- `centers.lbm` / `centers.ivry` : NAP, horaires (affichage + format JSON-LD), GPS, agréments, cartes, zones desservies
- Toute modification d'adresse / téléphone / horaires se fait ICI (footer, metadata, JSON-LD, pages en dépendent)

### SEO (`lib/seo.ts`, `components/seo/json-ld.tsx`)
- `buildMetadata({ title, description, path })` : à utiliser dans chaque nouvelle page (canonical, OG, Twitter)
- JSON-LD : `organizationJsonLd`, `websiteJsonLd`, `centerJsonLd(id)`, `breadcrumbJsonLd`
- `PageLayout` accepte `path` pour générer le fil d'Ariane JSON-LD
- Toute nouvelle page indexable doit être ajoutée dans `app/sitemap.ts`

### Articles (`lib/articles-data.ts`)
- Chaque article de la liste a automatiquement sa page `/actualites/<slug>` (slug généré depuis le titre, ou champ `slug`), générée au build via `generateStaticParams`
- Ajouter un article = ajouter un objet À LA FIN de la liste, avec `sections` pour le contenu complet
- Sans `sections` : page créée mais `noindex` et absente du sitemap (contenu trop pauvre)
- Syntaxe dans les textes : `[lien](/url)` et `**gras**` (rendu par `components/content/rich-text.tsx`)
- Ne pas changer le titre d'un article publié sans fixer `slug` (l'URL changerait)

### Pages de contenu SEO
- Pages centres : contenu sous la réservation via `CenterSeoContent` (`components/centre/`) + textes dans `lib/centres-content.ts`
- `/tarifs`, `/contre-visite`, `/faq` : prix lus dans `lib/tarifs-data.ts` (jamais en dur)
- Pages véhicules `/controle-technique-*` : données dans `lib/vehicules-data.ts`, gabarit `components/content/vehicle-page.tsx`

### Tarifs (`lib/tarifs-data.ts`)
- `tarifsLBM` / `tarifsIvry` : Tableaux de tarifs par centre
- `lbmInfo` / `ivryInfo` : Infos du centre, dérivées de `lib/site.ts`
- Les tarifs sont différents entre les deux centres

### Avis (`lib/avis-data.ts`)
- `avisLBM` / `avisIvry` : Avis clients par centre
- `statsLBM` / `statsIvry` : Statistiques (note moyenne, total avis, répartition, URL Google)

### Services (`lib/services-data.ts`)
- Services communs aux deux centres

## Patterns Utilisés

### Tabs par Centre
Les sections Tarifs et Avis utilisent des tabs shadcn pour switcher entre les centres :
```tsx
<Tabs defaultValue="lbm">
  <TabsList>
    <TabsTrigger value="lbm">Le Blanc-Mesnil</TabsTrigger>
    <TabsTrigger value="ivry">Ivry-sur-Seine</TabsTrigger>
  </TabsList>
  <TabsContent value="lbm">...</TabsContent>
  <TabsContent value="ivry">...</TabsContent>
</Tabs>
```

### Style des Tabs
```tsx
className="h-12 px-4 sm:px-8 gap-2 rounded-xl font-semibold text-gray-600
  data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600
  data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25
  hover:bg-blue-50 hover:text-primary
  transition-all duration-300"
```

### Composants avec Props Dynamiques
Les composants acceptent les données en props pour afficher les infos du centre sélectionné :
- `TarifsTable` : `tarifs: Tarif[]`
- `InfoCards` : `centerInfo: CenterInfo`
- `AvisHeader` : `stats: StatsAvis`
- `PromoAlert` : `promoNote: string`

## Conventions de Style

- **Couleurs primaires** : Dégradé `from-primary to-blue-600`
- **Shadows** : `shadow-xl`, `shadow-blue-500/25` pour les éléments actifs
- **Transitions** : `transition-all duration-300`
- **Coins arrondis** : `rounded-xl` ou `rounded-2xl`
- **Hover effects** : `hover:bg-blue-50`, `hover:-translate-y-1`

## Fichiers Clés

| Fichier | Description |
|---------|-------------|
| `components/section/tarifs/tarifs.tsx` | Section tarifs avec tabs |
| `components/section/avis/avis.tsx` | Section avis avec tabs |
| `components/navigation/footer.tsx` | Footer avec dialog pour appeler |
| `lib/tarifs-data.ts` | Toutes les données tarifs/infos centres |
| `lib/avis-data.ts` | Toutes les données avis/stats |

## Notes Importantes

1. **Tailwind CSS 4** : Utiliser `bg-linear-to-r` au lieu de `bg-gradient-to-r`
2. **pnpm** : Toujours utiliser pnpm pour les commandes npm
3. **Deux centres** : Toujours penser à mettre à jour les données pour les deux centres
4. **shadcn modifié** : Le composant `tabs.tsx` a été modifié pour permettre les couleurs custom
5. **Langue** : Le site est en français

## Commandes Utiles

```bash
# Développement
pnpm dev

# Build
pnpm build

# Ajouter un composant shadcn
pnpm dlx shadcn@latest add [component-name]
```

## Système de Réservation

### Le Blanc-Mesnil - Autoplanning (Widget natif)
- **Composant** : `components/reservation/autoplanning-widget.tsx`
- **ID Institution** : 4523
- **Fonctionnement** : Widget JavaScript Autoplanning intégré directement
- **Mobile** : Bouton CTA qui ouvre l'agenda en modal
- **Desktop** : Agenda affiché directement dans la page

### Ivry-sur-Seine - iFrame
- **Page** : `app/ivry-sur-seine/page.tsx`
- **Fonctionnement** : iFrame vers le système de réservation externe

### Problème Autoplanning résolu
Le widget Autoplanning avait des erreurs CORS car leur script `load-agenda-script.js` redirigeait vers HTTP au lieu de HTTPS. Solution :
1. Charger directement `main.js` en HTTPS (`https://www.apfr.fr/uploads/customer/agenda-element/v4/main.js`)
2. Configurer manuellement `window.AgendaElement` avec les paramètres de l'institution (customerID, institutionID, login, rdvTypesGroups, etc.)
3. Ajouter un stub pour `gtag` (Google Analytics) car le script l'attend

## État d'Avancement

### Fait
- [x] Pages principales (Accueil, Tarifs, Services, Avis, Contact, etc.)
- [x] Design responsive mobile/desktop
- [x] SEO de base (métadonnées, sitemap, robots.txt, Open Graph)
- [x] Système de réservation Le Blanc-Mesnil (Autoplanning)
- [x] Système de réservation Ivry-sur-Seine (iFrame)
- [x] Tabs pour switcher entre les centres (Tarifs, Avis)

### À faire (post-déploiement)
- [x] **Google Analytics 4** - Chargé après consentement (`components/analytics/google-analytics.tsx`), événements `clic_rdv` / `clic_appel`
- [ ] **Google Tag Manager** - Gestion des tags
- [ ] **Tracking de conversion AdWords** - Mesurer les réservations
- [x] **Schema.org JSON-LD** - Organization, WebSite, AutomotiveBusiness par centre, BreadcrumbList (pas d'AggregateRating : non affiché par Google pour des avis auto-publiés)
- [x] **Images Open Graph** - Générée par `app/opengraph-image.tsx` (à remplacer par une photo réelle si disponible)
- [ ] **Optimiser ours.webp** - Réduire de 316K à <100K
- [ ] **Headers de sécurité** - Configurer dans next.config.ts
