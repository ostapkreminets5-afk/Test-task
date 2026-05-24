"use client";

import { useProductCatalog } from "../context/ProductCatalogContext";
import { ProductCard } from "../../common/cards/ProductCard/ProductCard";
import { EmptyState } from "../../../../shared/view/ui/EmptyState/EmptyState";
import { cn } from "../../../../shared/lib/utils";
import { PackageSearch } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Grid.module.css";

export const CatalogGrid = () => {
  const {
    displayedProducts,
    favorites,
    compareIds,
    toggleFavorite,
    toggleCompare,
  } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <section aria-label="Products grid">
      <EmptyState.Root
        className={cn(displayedProducts.length > 0 && styles.hidden)}
      >
        <EmptyState.Icon>
          <PackageSearch size={24} />
        </EmptyState.Icon>
        <EmptyState.Title>{t("states.empty")}</EmptyState.Title>
      </EmptyState.Root>
      <ul
        className={cn(
          styles.grid,
          displayedProducts.length === 0 && styles.hidden,
        )}
      >
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <ProductCard.Root
              product={product}
              isFavorite={favorites.includes(product.id)}
              isCompared={compareIds.includes(product.id)}
              onFavoriteToggle={toggleFavorite}
              onCompareToggle={toggleCompare}
            >
              <ProductCard.Image />
              <ProductCard.Body>
                <ProductCard.Meta />
                <ProductCard.Title />
                <ProductCard.Brand />
                <ProductCard.Footer />
                <ProductCard.Actions>
                  <ProductCard.FavoriteButton />
                  <ProductCard.CompareButton />
                </ProductCard.Actions>
              </ProductCard.Body>
            </ProductCard.Root>
          </li>
        ))}
      </ul>
    </section>
  );
};
