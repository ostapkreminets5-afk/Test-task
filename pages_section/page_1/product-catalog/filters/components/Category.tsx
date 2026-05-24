"use client";

import { useProductCatalog } from "../../context/ProductCatalogContext";
import { useTranslation } from "react-i18next";
import styles from "../Filters.module.css";

export const FiltersCategory = () => {
  const { filters, categories, setField } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <div className={styles.field}>
      <label htmlFor="filter-category" className={styles.label}>
        {t("filters.category")}
      </label>
      <select
        id="filter-category"
        value={filters.category}
        onChange={(e) => setField("category", e.target.value)}
        className={styles.select}
      >
        <option value="">{t("filters.allCategories")}</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
