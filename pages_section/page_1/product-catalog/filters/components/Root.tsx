"use client";

import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styles from "../Filters.module.css";
import { cn } from "../../../../../shared/lib/utils";

export const FiltersRoot = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <aside
      className={cn(styles.panel, className)}
      aria-label={t("filters.title")}
    >
      {children}
    </aside>
  );
};
