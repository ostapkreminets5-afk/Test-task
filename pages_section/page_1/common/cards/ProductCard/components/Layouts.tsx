import type { ReactNode } from "react";
import styles from "../ProductCard.module.css";

export const ProductCardBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

export const ProductCardActionsGroup = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className={styles.actions}>{children}</div>;
};
