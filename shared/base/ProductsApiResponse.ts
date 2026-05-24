import type { Product } from "./Product";

export type ProductsApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
