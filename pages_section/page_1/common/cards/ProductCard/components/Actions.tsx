import { useProductCard } from "./Root";
import { Button } from "../../../../../../shared/view/ui/Button/Button";
import { Heart, BarChart2 } from "lucide-react";
import { cn } from "../../../../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import styles from "../ProductCard.module.css";

export const ProductCardFavoriteButton = () => {
  const { product, isFavorite, onFavoriteToggle } = useProductCard();
  const { t } = useTranslation();

  if (!onFavoriteToggle) return null;

  return (
    <Button
      variant="ghost"
      onClick={() => onFavoriteToggle(product.id)}
      aria-label={
        isFavorite
          ? t("product.removeFromFavorites")
          : t("product.addToFavorites")
      }
      aria-pressed={isFavorite}
      className={cn(styles.actionBtn, isFavorite && styles.activeFav)}
    >
      <Heart size={15} aria-hidden="true" />
      <span className={cn(isFavorite && styles.hidden)}>
        {t("product.addToFavorites")}
      </span>
      <span className={cn(!isFavorite && styles.hidden)}>
        {t("product.removeFromFavorites")}
      </span>
    </Button>
  );
};

export const ProductCardCompareButton = () => {
  const { product, isCompared, onCompareToggle } = useProductCard();
  const { t } = useTranslation();

  if (!onCompareToggle) return null;

  return (
    <Button
      variant="ghost"
      onClick={() => onCompareToggle(product.id)}
      aria-label={
        isCompared ? t("product.removeFromCompare") : t("product.addToCompare")
      }
      aria-pressed={isCompared}
      className={cn(styles.actionBtn, isCompared && styles.activeCompare)}
    >
      <BarChart2 size={15} aria-hidden="true" />
      <span className={cn(isCompared && styles.hidden)}>
        {t("product.addToCompare")}
      </span>
      <span className={cn(!isCompared && styles.hidden)}>
        {t("product.removeFromCompare")}
      </span>
    </Button>
  );
};
