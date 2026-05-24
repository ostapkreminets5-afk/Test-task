import type { ReactNode } from "react";
import styles from "../Filters.module.css";

export const FiltersRow = ({ children }: { children: ReactNode }) => (
  <div className={styles.row}>{children}</div>
);

export const FiltersCheckboxRow = ({ children }: { children: ReactNode }) => (
  <div className={styles.checkboxRow}>{children}</div>
);
