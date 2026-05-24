import { useProductCard } from "./Root";
import { cn } from "../../../../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import styles from "../ProductCard.module.css";

export const ProductCardImage = () => {
  const { product } = useProductCard();
  const { t } = useTranslation();
  return (
    <div className={styles.imageWrapper}>
      <img
        src={product.thumbnail}
        alt={`${product.title} product image`}
        className={styles.image}
        loading="lazy"
      />
      <span
        className={cn(
          styles.discount,
          !product.discountPercentage && styles.hidden,
        )}
      >
        -{Math.round(product.discountPercentage)}% {t("product.discount")}
      </span>
    </div>
  );
};
