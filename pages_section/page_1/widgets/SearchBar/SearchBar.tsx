import { useTranslation } from "react-i18next";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const { t } = useTranslation();
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("search.placeholder")}
          className={styles.input}
          autoComplete="off"
        />
      </div>
    </div>
  );
};
