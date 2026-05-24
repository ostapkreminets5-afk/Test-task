"use client";

import { useProductCatalog } from "../context/ProductCatalogContext";
import { ProductCard } from "../../common/cards/ProductCard/ProductCard";
import { EmptyState } from "../../../../shared/view/ui/EmptyState/EmptyState";
import { Heart } from "lucide-react";
import { cn } from "../../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import styles from "./Favorites.module.css";

export const CatalogFavorites = () => {
  const {
    products,
    favorites,
    compareIds,
    toggleFavorite,
    toggleCompare,
    hydrated,
  } = useProductCatalog();
  const { t } = useTranslation();

  if (!hydrated) return null; // Avoid hydration mismatch

  const favoriteItems = products.filter((p) => favorites.includes(p.id));

  return (
    <section className={styles.section} aria-label={t("favorites.title")}>
      <h2 className={styles.heading}>
        <Heart size={20} aria-hidden="true" />
        {t("favorites.title")}
        <span className={styles.count}>{favoriteItems.length}</span>
      </h2>
      <EmptyState.Root
        className={cn(favoriteItems.length > 0 && styles.hidden)}
      >
        <EmptyState.Icon>
          <Heart size={22} />
        </EmptyState.Icon>
        <EmptyState.Title>{t("favorites.empty")}</EmptyState.Title>
      </EmptyState.Root>
      <ul
        className={cn(styles.grid, favoriteItems.length === 0 && styles.hidden)}
      >
        {favoriteItems.map((product) => (
          <li key={product.id}>
            <ProductCard.Root
              product={product}
              isFavorite
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
