import type { Product } from "../../shared/base/Product";
import { EmptyState } from "../../shared/view/ui/EmptyState/EmptyState";
import { fetchProducts } from "../../shared/lib/fetchProducts";
import { CatalogRoot as Root } from "./product-catalog/root/Root";
import { CatalogHeader as Header } from "./product-catalog/header/Header";
import { CatalogSearch as Search } from "./product-catalog/search/Search";
import { CatalogFilters as Filters } from "./product-catalog/filters/Filters";
import { CatalogGrid as Grid } from "./product-catalog/grid/Grid";
import { CatalogFavorites as Favorites } from "./product-catalog/favorites/Favorites";
import { CatalogCompare as Compare } from "./product-catalog/compare/Compare";

const ProductCatalog = {
  Root,
  Header,
  Search,
  Filters,
  Grid,
  Favorites,
  Compare,
};
import { AlertCircle } from "lucide-react";
import { uk } from "../../shared/locales/uk";
import { cn } from "../../shared/lib/utils";
import styles from "./Page1.module.css";

export default async function Page1() {
  const result = await fetchProducts().then(
    (products) => ({ products, error: null as string | null }),
    (e: unknown) => ({
      products: [] as Product[],
      error: e instanceof Error ? e.message : uk.states.error,
    }),
  );

  return (
    <main className={styles.main}>
      <div
        className={cn(styles.errorWrapper, !result.error && styles.hidden)}
        role="alert"
      >
        <EmptyState.Root>
          <EmptyState.Icon>
            <AlertCircle size={24} />
          </EmptyState.Icon>
          <EmptyState.Title>{uk.states.error}</EmptyState.Title>
          <EmptyState.Description>
            {result.error ?? undefined}
          </EmptyState.Description>
        </EmptyState.Root>
      </div>
      <div className={cn(result.error && styles.hidden)}>
        <ProductCatalog.Root products={result.products}>
          <ProductCatalog.Header />
          <ProductCatalog.Search />
          <ProductCatalog.Filters.Root>
            <ProductCatalog.Filters.Row>
              <ProductCatalog.Filters.Category />
              <ProductCatalog.Filters.Sort />
            </ProductCatalog.Filters.Row>
            <ProductCatalog.Filters.CheckboxRow>
              <ProductCatalog.Filters.InStock />
              <ProductCatalog.Filters.Discounted />
            </ProductCatalog.Filters.CheckboxRow>
            <ProductCatalog.Filters.Reset />
          </ProductCatalog.Filters.Root>
          <ProductCatalog.Grid />
          <ProductCatalog.Favorites />
          <ProductCatalog.Compare />
        </ProductCatalog.Root>
      </div>
    </main>
  );
}
