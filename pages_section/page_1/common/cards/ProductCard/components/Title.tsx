import { useProductCard } from "./Root";
import styles from "../ProductCard.module.css";

export const ProductCardTitle = () => {
  const { product } = useProductCard();
  return <h2 className={styles.title}>{product.title}</h2>;
};
