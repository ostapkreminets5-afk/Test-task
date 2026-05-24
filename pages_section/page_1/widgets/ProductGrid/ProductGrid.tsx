import type { Product } from "../../../../shared/base/Product";
import { ProductCard } from "../../common/cards/ProductCard/ProductCard";
import { EmptyState } from "../../../../shared/view/ui/EmptyState/EmptyState";
import { cn } from "../../../../shared/lib/utils";
import { PackageSearch } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./ProductGrid.module.css";

type ProductGridProps = {
  products: Product[];
  favoriteIds: number[];
  compareIds: number[];
  onFavoriteToggle: (id: number) => void;
  onCompareToggle: (id: number) => void;
};

export const ProductGrid = ({
  products,
  favoriteIds,
  compareIds,
  onFavoriteToggle,
  onCompareToggle,
}: ProductGridProps) => {
  const { t } = useTranslation();
  return (
    <section aria-label="Products grid">
      <EmptyState
        icon={<PackageSearch size={24} />}
        title={t("states.empty")}
        className={cn(products.length > 0 && styles.hidden)}
      />
      <ul className={cn(styles.grid, products.length === 0 && styles.hidden)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              isFavorite={favoriteIds.includes(product.id)}
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
