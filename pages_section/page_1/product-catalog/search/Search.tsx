"use client";

import { useProductCatalog } from "../context/ProductCatalogContext";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo } from "react";
import { debounce } from "../../../../shared/lib/debounce";
import styles from "./Search.module.css";

export const CatalogSearch = () => {
  const { filters, setField } = useProductCatalog();
  const { t } = useTranslation();

  const [localSearch, setLocalSearch] = useState(filters.search);

  const debouncedSetSearch = useMemo(() => {
    return debounce((value: string) => {
      setField("search", value);
    }, 300);
  }, [setField]);

  useEffect(() => {
    setLocalSearch(filters.search);
  }, [filters.search]);

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    debouncedSetSearch(value);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="product-search" className={styles.label}>
        {t("search.label")}
      </label>
      <div className={styles.inputWrapper}>
        <Search size={16} className={styles.icon} aria-hidden="true" />
        <input
          id="product-search"
          type="search"
          value={localSearch}
          onChange={handleChange}
          placeholder={t("search.placeholder")}
          className={styles.input}
          autoComplete="off"
        />
      </div>
    </div>
  );
};
