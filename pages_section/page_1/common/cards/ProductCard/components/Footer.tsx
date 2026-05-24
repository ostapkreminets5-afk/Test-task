import { useProductCard } from "./Root";
import { formatPrice } from "../../../../../../shared/helpers/formatPrice";
import { Star } from "lucide-react";
import styles from "../ProductCard.module.css";

export const ProductCardFooter = () => {
  const { product } = useProductCard();
  return (
    <div className={styles.footer}>
      <span className={styles.price}>{formatPrice(product.price)}</span>
      <span className={styles.rating}>
        <Star size={13} aria-hidden="true" />
        {product.rating.toFixed(1)}
      </span>
    </div>
  );
};
