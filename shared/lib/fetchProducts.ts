import type { Product } from "../../shared/base/Product";
import type { ProductsApiResponse } from "../../shared/base/ProductsApiResponse";
import { PRODUCTS_API_URL } from "../../shared/const/PRODUCTS_API_URL";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCTS_API_URL, { next: { revalidate: 300 } });
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  const data: ProductsApiResponse = await response.json();
  return data.products;
};
