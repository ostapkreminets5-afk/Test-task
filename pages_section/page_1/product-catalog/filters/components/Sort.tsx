"use client";

import { useProductCatalog } from "../../context/ProductCatalogContext";
import { useTranslation } from "react-i18next";
import { SORT_OPTIONS } from "../../../../../shared/const/SORT_OPTIONS";
import type { FiltersState } from "../../../../../shared/base/FiltersState";
import styles from "../Filters.module.css";

export const FiltersSort = () => {
  const { filters, setField } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <div className={styles.field}>
      <label htmlFor="filter-sort" className={styles.label}>
        {t("filters.sort")}
      </label>
      <select
        id="filter-sort"
        value={filters.sort}
        onChange={(e) =>
          setField("sort", e.target.value as FiltersState["sort"])
        }
        className={styles.select}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
