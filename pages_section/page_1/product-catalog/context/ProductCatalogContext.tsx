"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Product } from "../../../../shared/base/Product";
import type { FiltersState } from "../../../../shared/base/FiltersState";
import { useFavorites } from "../../../../shared/hook/useFavorites";
import { useCompare } from "../../../../shared/hook/useCompare";
import { useFilters } from "../../../../shared/hook/useFilters";
import { filterProducts } from "../../../../shared/helpers/filterProducts";
import { sortProducts } from "../../../../shared/helpers/sortProducts";
import { getCategories } from "../../../../shared/helpers/getCategories";

type ProductCatalogContextValue = {
  products: Product[];
  displayedProducts: Product[];
  categories: string[];
  favorites: number[];
  compareIds: number[];
  maxReached: boolean;
  hydrated: boolean;
  filters: FiltersState;
  setField: <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => void;
  reset: () => void;
  toggleFavorite: (id: number) => void;
  toggleCompare: (id: number) => void;
  clearCompare: () => void;
};

const ProductCatalogContext = createContext<ProductCatalogContextValue | null>(
  null,
);

type ProviderProps = {
  products: Product[];
  children: ReactNode;
};

export const ProductCatalogProvider = ({
  products,
  children,
}: ProviderProps) => {
  const {
    favorites,
    toggle: toggleFavorite,
    hydrated: favHydrated,
  } = useFavorites();
  const {
    compareIds,
    toggle: toggleCompare,
    clear: clearCompare,
    maxReached,
    hydrated: cmpHydrated,
  } = useCompare();
  const { filters, setField, reset } = useFilters();

  const hydrated = favHydrated && cmpHydrated;
  const categories = useMemo(() => getCategories(products), [products]);
  const displayedProducts = useMemo(
    () => sortProducts(filterProducts(products, filters), filters.sort),
    [products, filters],
  );

  return (
    <ProductCatalogContext.Provider
      value={{
        products,
        displayedProducts,
        categories,
        favorites,
        compareIds,
        maxReached,
        hydrated,
        filters,
        setField,
        reset,
        toggleFavorite,
        toggleCompare,
        clearCompare,
      }}
    >
      {children}
    </ProductCatalogContext.Provider>
  );
};

export const useProductCatalog = (): ProductCatalogContextValue => {
  const ctx = useContext(ProductCatalogContext);
  if (!ctx)
    throw new Error(
      "useProductCatalog must be used inside ProductCatalogProvider",
    );
  return ctx;
};
