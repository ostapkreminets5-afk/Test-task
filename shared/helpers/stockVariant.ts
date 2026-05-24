export const stockVariant = (stock: number): "success" | "error" =>
  new Map([
    [true, "success" as const],
    [false, "error" as const],
  ]).get(stock > 0)!;
