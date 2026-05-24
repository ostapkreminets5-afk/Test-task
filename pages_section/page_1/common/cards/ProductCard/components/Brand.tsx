import { useProductCard } from "./Root";
import { cn } from "../../../../../../shared/lib/utils";
import styles from "../ProductCard.module.css";

export const ProductCardBrand = () => {
  const { product } = useProductCard();
  return (
    <p className={cn(styles.brand, !product.brand && styles.hidden)}>
      {product.brand}
    </p>
  );
};
