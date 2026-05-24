export const discountText = (discount: number): string =>
  new Map([
    [true, `-${Math.round(discount)}%`],
    [false, "—"],
  ]).get(discount > 0) ?? "—";
