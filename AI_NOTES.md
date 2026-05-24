# AI Notes

## Was AI used?

Yes — **Antigravity (Google DeepMind)** AI assistant was used to scaffold and generate the majority of the codebase.

---

## Which parts AI helped with

- Full file and folder architecture design (black-box folder structure, single-responsibility principle)
- All TypeScript types (`Product`, `FiltersState`, `ProductsApiResponse`)
- All pure helper functions (`filterProducts`, `sortProducts`, `getCategories`, `formatPrice`)
- All custom hooks (`useFavorites`, `useCompare`, `useFilters`)
- All UI components (`Button`, `Badge`, `Spinner`, `EmptyState`, `ProductCard`, `SearchBar`, `Filters`, `ProductGrid`, `FavoritesSection`, `CompareTable`, `ProductCatalog`)
- All CSS module files with the design system
- i18n locale files (`en.ts`, `uk.ts`) and the `getTranslations` facade
- `README.md` content

---

## Which parts I manually reviewed or would change

- Verified that `filterProducts` and `sortProducts` never mutate source arrays (checked `[...products].sort(...)`)
- Confirmed `safeLocalStorage` correctly guards against SSR (`typeof window !== "undefined"`)
- Reviewed `useCompare` hook to ensure `maxReached` resets properly when removing items
- Checked accessibility: `aria-pressed`, `aria-label`, `role="alert"`, `aria-live` on compare warning
- Reviewed that `useMemo` dependencies in `ProductCatalog` are correct (both `products` and `filters`)

---

## One example of an AI suggestion I rejected or corrected

**AI suggested** using a plain inline `function cn()` inside `ProductGrid.tsx` to avoid an import.

**I rejected it** because it violates the DRY (Don't Repeat Yourself) principle — `cn` is already defined and exported from `shared/lib/utils.ts`. Duplicating utility functions leads to inconsistency and maintenance burden. The correct approach is always to import the shared utility.
