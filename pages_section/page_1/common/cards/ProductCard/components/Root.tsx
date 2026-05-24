import { createContext, useContext, type ReactNode } from "react";
import type { Product } from "../../../../../../shared/base/Product";
import { cn } from "../../../../../../shared/lib/utils";
import styles from "../ProductCard.module.css";

type ProductCardContextValue = {
  product: Product;
  isFavorite?: boolean;
  isCompared?: boolean;
  onFavoriteToggle?: (id: number) => void;
  onCompareToggle?: (id: number) => void;
};

const ProductCardContext = createContext<ProductCardContextValue | null>(null);

export const useProductCard = () => {
  const ctx = useContext(ProductCardContext);
  if (!ctx)
    throw new Error("useProductCard must be used within ProductCard.Root");
  return ctx;
};

type ProductCardRootProps = ProductCardContextValue & {
  children: ReactNode;
  className?: string;
};

export const ProductCardRoot = ({
  children,
  className,
  ...contextValues
}: ProductCardRootProps) => {
  return (
    <ProductCardContext.Provider value={contextValues}>
      <article className={cn(styles.card, className)}>{children}</article>
    </ProductCardContext.Provider>
  );
};
