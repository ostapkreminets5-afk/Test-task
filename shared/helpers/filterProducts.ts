import type { Product } from "../base/Product";
import type { FiltersState } from "../base/FiltersState";

const matchesSearch = (product: Product, search: string): boolean => {
  const q = search.toLowerCase();
  return (
    product.title.toLowerCase().includes(q) ||
    (product.brand?.toLowerCase().includes(q) ?? false) ||
    product.category.toLowerCase().includes(q)
  );
};

const matchesCategory = (product: Product, category: string): boolean =>
  category === "" || product.category === category;

const matchesStock = (product: Product, onlyInStock: boolean): boolean =>
  !onlyInStock || product.stock > 0;

const matchesDiscount = (product: Product, onlyDiscounted: boolean): boolean =>
  !onlyDiscounted || product.discountPercentage > 0;

export const filterProducts = (
  products: Product[],
  filters: FiltersState,
): Product[] =>
  products.filter(
    (p) =>
      matchesSearch(p, filters.search) &&
      matchesCategory(p, filters.category) &&
      matchesStock(p, filters.onlyInStock) &&
      matchesDiscount(p, filters.onlyDiscounted),
  );
