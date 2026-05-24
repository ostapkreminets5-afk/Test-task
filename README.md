# Product Catalog

A responsive product catalog web app built with **Next.js 16 (App Router)** and **React 19**.

---

## How to install and run

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## What was implemented

| Feature | Details |
|---|---|
| **Product listing** | 30 products fetched from `dummyjson.com` via Next.js Server Component |
| **Product cards** | Image, title, brand, category, price, discount %, rating, stock status |
| **Search** | Real-time by title, brand, and category |
| **Filters** | Category dropdown, in-stock only, discounted only |
| **Sorting** | Price ↑↓, Rating ↓, Title A-Z |
| **Reset filters** | Single button resets all filters + sort to defaults |
| **Favorites** | Add/remove per product; persisted to `localStorage`; separate section |
| **Compare** | Select up to 3 products; table with title/price/rating/stock/category/discount; persisted to `localStorage`; warning on 4th attempt |
| **Loading state** | Next.js Suspense-based streaming on server |
| **Error state** | Error boundary via try/catch in Server Component |
| **Empty state** | Shown when no products match filters |
| **Animations** | Card fade-in, hover lift, spinner rotation, warning fade |
| **Responsive** | Grid → single-column on mobile |
| **Accessibility** | Semantic HTML, aria-labels, aria-pressed, aria-live, focus-visible ring, keyboard navigable |
| **i18n** | Translation system with `en` and `uk` locales; easily extensible |

---

## Architecture

```
shared/
  base/        — TypeScript types (Product, FiltersState, ProductsApiResponse)
  const/       — Application constants (sort options, localStorage keys, API URL)
  helpers/     — Pure functions (filterProducts, sortProducts, getCategories, formatPrice)
  hook/        — Custom React hooks (useFavorites, useCompare, useFilters)
  languages/   — i18n facade (getTranslations)
  locales/     — Translation files (en, uk)
  lib/         — HTTP utilities (fetchProducts, ky-instance, utils)
  view/ui/     — Shared UI components (Button, Badge, Spinner, EmptyState)

pages_section/page_1/
  common/cards/ProductCard/   — Product card component
  widgets/
    SearchBar/                — Search input
    Filters/                  — Category/sort/checkbox filters panel
    ProductGrid/              — Responsive grid of cards
    FavoritesSection/         — Favorites section
    CompareTable/             — Comparison table
    ProductCatalog/           — Root client component (orchestrates state)
  page.tsx                    — Server Component (data fetching + error handling)
  Page1.module.css
```

### State design decisions

- **Source products are never mutated** — `filterProducts` and `sortProducts` return new arrays
- **Derived state via `useMemo`** — `displayedProducts` = `sortProducts(filterProducts(...))`
- **No duplicated state** — favorites/compare stored as `number[]` IDs; product data derived from `allProducts`
- **localStorage is safe** — `safeLocalStorageGet`/`Set` guard against SSR (`typeof window`)
- **No external state managers** — only `useState`, `useMemo`, and custom hooks

---

## What was skipped

- Dark/light theme toggle (currently always dark — matches design)
- Pagination (API returns 30 products which fits one page)
- Product detail page

---

## Known issues

- None found at the time of submission

---

## What I would improve with more time

1. Add skeleton loading cards instead of a spinner
2. Add URL-based filter persistence (share filter state via URL params)
3. Add product detail modal/page
4. Debounce search input for large datasets
5. Add E2E tests with Playwright
6. Support more locales with a language switcher
