"use client";

import { useMemo } from "react";
import type { Product } from "../../../../shared/base/Product";
import { useFavorites } from "../../../../shared/hook/useFavorites";
import { useCompare } from "../../../../shared/hook/useCompare";
import { useFilters } from "../../../../shared/hook/useFilters";
import { filterProducts } from "../../../../shared/helpers/filterProducts";
import { sortProducts } from "../../../../shared/helpers/sortProducts";
import { getCategories } from "../../../../shared/helpers/getCategories";
import { SearchBar } from "../../widgets/SearchBar/SearchBar";
import { Filters } from "../../widgets/Filters/Filters";
import { ProductGrid } from "../../widgets/ProductGrid/ProductGrid";
import { FavoritesSection } from "../../widgets/FavoritesSection/FavoritesSection";
import { CompareTable } from "../../widgets/CompareTable/CompareTable";
import styles from "./ProductCatalog.module.css";

type ProductCatalogProps = {
  products: Product[];
};

export const ProductCatalog = ({ products }: ProductCatalogProps) => {
  const { favorites, toggle: toggleFavorite } = useFavorites();
  const {
    compareIds,
    toggle: toggleCompare,
    clear: clearCompare,
    maxReached,
  } = useCompare();
  const { filters, setField, reset } = useFilters();

  const categories = useMemo(() => getCategories(products), [products]);

  const displayedProducts = useMemo(
    () => sortProducts(filterProducts(products, filters), filters.sort),
    [products, filters],
  );

  return (
    <div className={styles.layout}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Product Catalog</h1>
        <p className={styles.subtitle}>
          {displayedProducts.length} of {products.length} products
        </p>
      </header>
      <SearchBar
        value={filters.search}
        onChange={(v) => setField("search", v)}
      />
      <Filters
        filters={filters}
        categories={categories}
        onSetField={setField}
        onReset={reset}
      />
      <ProductGrid
        products={displayedProducts}
        favoriteIds={favorites}
        compareIds={compareIds}
        onFavoriteToggle={toggleFavorite}
        onCompareToggle={toggleCompare}
      />
      <FavoritesSection
        allProducts={products}
        favoriteIds={favorites}
        compareIds={compareIds}
        onFavoriteToggle={toggleFavorite}
        onCompareToggle={toggleCompare}
      />
      <CompareTable
        allProducts={products}
        compareIds={compareIds}
        onClear={clearCompare}
        maxReached={maxReached}
      />
    </div>
  );
};
