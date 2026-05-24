"use client";

import { useProductCatalog } from "../context/ProductCatalogContext";
import { formatPrice } from "../../../../shared/helpers/formatPrice";
import { stockText } from "../../../../shared/helpers/stockText";
import { discountText } from "../../../../shared/helpers/discountText";
import { Button } from "../../../../shared/view/ui/Button/Button";
import { EmptyState } from "../../../../shared/view/ui/EmptyState/EmptyState";
import { BarChart2, Trash2 } from "lucide-react";
import { cn } from "../../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import styles from "./Compare.module.css";

export const CatalogCompare = () => {
  const { products, compareIds, clearCompare, maxReached, hydrated } =
    useProductCatalog();
  const { t } = useTranslation();

  if (!hydrated) return null; // Avoid hydration mismatch

  const items = products.filter((p) => compareIds.includes(p.id));

  return (
    <section className={styles.section} aria-label={t("compare.title")}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <BarChart2 size={20} aria-hidden="true" />
          {t("compare.title")}
          <span className={styles.count}>{items.length}</span>
        </h2>
        <Button
          variant="danger"
          onClick={clearCompare}
          className={cn(items.length === 0 && styles.hidden)}
        >
          <Trash2 size={14} aria-hidden="true" />
          {t("compare.clear")}
        </Button>
      </header>
      <p
        className={cn(styles.maxWarning, !maxReached && styles.hidden)}
        role="alert"
        aria-live="assertive"
      >
        {t("compare.maxReached")}
      </p>
      <EmptyState.Root className={cn(items.length > 0 && styles.hidden)}>
        <EmptyState.Icon>
          <BarChart2 size={22} />
        </EmptyState.Icon>
        <EmptyState.Title>{t("compare.empty")}</EmptyState.Title>
      </EmptyState.Root>
      <div
        className={cn(styles.tableWrapper, items.length === 0 && styles.hidden)}
      >
        <table className={styles.table} aria-label={t("compare.title")}>
          <thead>
            <tr>
              <th scope="col">{t("compare.headers.title")}</th>
              <th scope="col">{t("compare.headers.price")}</th>
              <th scope="col">{t("compare.headers.rating")}</th>
              <th scope="col">{t("compare.headers.stock")}</th>
              <th scope="col">{t("compare.headers.category")}</th>
              <th scope="col">{t("compare.headers.discount")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id}>
                <td className={styles.titleCell}>
                  <img
                    src={p.thumbnail}
                    alt={`${p.title} thumbnail`}
                    className={styles.thumb}
                  />
                  {p.title}
                </td>
                <td>{formatPrice(p.price)}</td>
                <td>⭐ {p.rating.toFixed(1)}</td>
                <td>{stockText(p.stock, t)}</td>
                <td>{p.category}</td>
                <td className={cn(!p.discountPercentage && styles.noDiscount)}>
                  {discountText(p.discountPercentage)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
