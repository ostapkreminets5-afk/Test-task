import type { TFunction } from "i18next";

export const stockLabel = (stock: number, t: TFunction): string =>
  new Map([
    [true, t("product.inStock")],
    [false, t("product.outOfStock")],
  ]).get(stock > 0)!;
