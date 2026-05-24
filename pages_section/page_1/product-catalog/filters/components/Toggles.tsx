"use client";

import { useProductCatalog } from "../../context/ProductCatalogContext";
import { useTranslation } from "react-i18next";
import styles from "../Filters.module.css";

export const FiltersInStock = () => {
  const { filters, setField } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        id="filter-in-stock"
        checked={filters.onlyInStock}
        onChange={(e) => setField("onlyInStock", e.target.checked)}
      />
      <span>{t("filters.inStock")}</span>
    </label>
  );
};

export const FiltersDiscounted = () => {
  const { filters, setField } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        id="filter-discounted"
        checked={filters.onlyDiscounted}
        onChange={(e) => setField("onlyDiscounted", e.target.checked)}
      />
      <span>{t("filters.discounted")}</span>
    </label>
  );
};
