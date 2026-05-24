import type { Product } from "../base/Product";
import type { SortOption } from "../const/SORT_OPTIONS";

type Comparator = (a: Product, b: Product) => number;

const sortComparators = new Map<SortOption, Comparator>([
  ["price-asc", (a, b) => a.price - b.price],
  ["price-desc", (a, b) => b.price - a.price],
  ["rating-desc", (a, b) => b.rating - a.rating],
  ["title-asc", (a, b) => a.title.localeCompare(b.title)],
]);

export const sortProducts = (
  products: Product[],
  sort: SortOption,
): Product[] => {
  const comparator = sortComparators.get(sort);
  return comparator ? [...products].sort(comparator) : [...products];
};
