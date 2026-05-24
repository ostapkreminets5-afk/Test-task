import { useProductCard } from "./Root";
import { Badge } from "../../../../../../shared/view/ui/Badge/Badge";
import { stockVariant } from "../../../../../../shared/helpers/stockVariant";
import { stockLabel } from "../../../../../../shared/helpers/stockLabel";
import { useTranslation } from "react-i18next";
import styles from "../ProductCard.module.css";

export const ProductCardMeta = () => {
  const { product } = useProductCard();
  const { t } = useTranslation();
  return (
    <div className={styles.meta}>
      <span className={styles.category}>{product.category}</span>
      <Badge variant={stockVariant(product.stock)}>
        {stockLabel(product.stock, t)}
      </Badge>
    </div>
  );
};
