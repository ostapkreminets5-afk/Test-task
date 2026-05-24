"use client";

import { useProductCatalog } from "../context/ProductCatalogContext";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

export const CatalogHeader = () => {
  const { displayedProducts, products } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t("catalog.title")}</h1>
      <p className={styles.subtitle}>
        {displayedProducts.length} {t("catalog.of")} {products.length}{" "}
        {t("catalog.products")}
      </p>
    </header>
  );
};
