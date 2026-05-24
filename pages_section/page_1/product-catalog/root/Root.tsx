"use client";

import type { ReactNode } from "react";
import type { Product } from "../../../../shared/base/Product";
import { ProductCatalogProvider } from "../context/ProductCatalogContext";
import styles from "./Root.module.css";

type RootProps = {
  products: Product[];
  children: ReactNode;
};

export const CatalogRoot = ({ products, children }: RootProps) => {
  return (
    <ProductCatalogProvider products={products}>
      <div className={styles.layout}>{children}</div>
    </ProductCatalogProvider>
  );
};
