import type { FiltersState } from "../../../../shared/base/FiltersState";
import { SORT_OPTIONS } from "../../../../shared/const/SORT_OPTIONS";
import { Button } from "../../../../shared/view/ui/Button/Button";
import { RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Filters.module.css";

type FiltersProps = {
  filters: FiltersState;
  categories: string[];
  onSetField: <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => void;
  onReset: () => void;
};

export const Filters = ({
  filters,
  categories,
  onSetField,
  onReset,
}: FiltersProps) => {
  const { t } = useTranslation();
  return (
    <aside className={styles.panel} aria-label={t("filters.title")}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="filter-category" className={styles.label}>
            {t("filters.category")}
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(e) => onSetField("category", e.target.value)}
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
        <div className={styles.field}>
          <label htmlFor="filter-sort" className={styles.label}>
            {t("filters.sort")}
          </label>
          <select
            id="filter-sort"
            value={filters.sort}
            onChange={(e) =>
              onSetField("sort", e.target.value as FiltersState["sort"])
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
      </div>
      <div className={styles.checkboxRow}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.onlyInStock}
            onChange={(e) => onSetField("onlyInStock", e.target.checked)}
            id="filter-in-stock"
          />
          <span>{t("filters.inStock")}</span>
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.onlyDiscounted}
            onChange={(e) => onSetField("onlyDiscounted", e.target.checked)}
            id="filter-discounted"
          />
          <span>{t("filters.discounted")}</span>
        </label>
      </div>
      <Button variant="outline" onClick={onReset} className={styles.resetBtn}>
        <RotateCcw size={14} aria-hidden="true" />
        {t("filters.reset")}
      </Button>
    </aside>
  );
};
