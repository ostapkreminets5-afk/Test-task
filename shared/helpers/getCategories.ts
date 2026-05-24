import type { Product } from "../base/Product";

export const getCategories = (products: Product[]): string[] =>
  Array.from(new Set(products.map((p) => p.category))).sort();
