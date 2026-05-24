"use client";

import { useProductCatalog } from "../../context/ProductCatalogContext";
import { Button } from "../../../../../shared/view/ui/Button/Button";
import { RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "../Filters.module.css";

export const FiltersReset = () => {
  const { reset } = useProductCatalog();
  const { t } = useTranslation();

  return (
    <Button variant="outline" onClick={reset} className={styles.resetBtn}>
      <RotateCcw size={14} aria-hidden="true" />
      {t("filters.reset")}
    </Button>
  );
};
