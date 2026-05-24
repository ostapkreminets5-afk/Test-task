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
      <EmptyState.Root className={cn(products.length > 0 && styles.hidden)}>
        <EmptyState.Icon>
          <PackageSearch size={24} />
        </EmptyState.Icon>
        <EmptyState.Title>{t("states.empty")}</EmptyState.Title>
      </EmptyState.Root>
      <ul className={cn(styles.grid, products.length === 0 && styles.hidden)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard.Root
              product={product}
              isFavorite={favoriteIds.includes(product.id)}
              isCompared={compareIds.includes(product.id)}
              onFavoriteToggle={onFavoriteToggle}
              onCompareToggle={onCompareToggle}
            >
              <ProductCard.Image />
              <ProductCard.Body>
                <ProductCard.Meta />
                <ProductCard.Title />
                <ProductCard.Brand />
                <ProductCard.Footer />
              </ProductCard.Body>
              <ProductCard.Actions>
                <ProductCard.FavoriteButton />
                <ProductCard.CompareButton />
              </ProductCard.Actions>
            </ProductCard.Root>
          </li>
        ))}
      </ul>
    </section>
  );
};
