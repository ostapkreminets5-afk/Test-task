import type { Product } from "../../../../shared/base/Product";
import { ProductCard } from "../../common/cards/ProductCard/ProductCard";
import { EmptyState } from "../../../../shared/view/ui/EmptyState/EmptyState";
import { Heart } from "lucide-react";
import { cn } from "../../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import styles from "./FavoritesSection.module.css";

type FavoritesSectionProps = {
  allProducts: Product[];
  favoriteIds: number[];
  compareIds: number[];
  onFavoriteToggle: (id: number) => void;
  onCompareToggle: (id: number) => void;
};

export const FavoritesSection = ({
  allProducts,
  favoriteIds,
  compareIds,
  onFavoriteToggle,
  onCompareToggle,
}: FavoritesSectionProps) => {
  const { t } = useTranslation();
  const favorites = allProducts.filter((p) => favoriteIds.includes(p.id));

  return (
    <section className={styles.section} aria-label={t("favorites.title")}>
      <h2 className={styles.heading}>
        <Heart size={20} aria-hidden="true" />
        {t("favorites.title")}
        <span className={styles.count}>{favorites.length}</span>
      </h2>
      <EmptyState
        icon={<Heart size={22} />}
        title={t("favorites.empty")}
        className={cn(favorites.length > 0 && styles.hidden)}
      />
      <ul className={cn(styles.grid, favorites.length === 0 && styles.hidden)}>
        {favorites.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              isFavorite
              isCompared={compareIds.includes(product.id)}
              onFavoriteToggle={onFavoriteToggle}
              onCompareToggle={onCompareToggle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
