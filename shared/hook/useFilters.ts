"use client";

import { useState } from "react";
import type { FiltersState } from "../base/FiltersState";

const DEFAULT_FILTERS: FiltersState = {
  search: "",
  category: "",
  onlyInStock: false,
  onlyDiscounted: false,
  sort: "price-asc",
};

export const useFilters = () => {
  const [filters, setFilters] = useState<FiltersState>(DEFAULT_FILTERS);

  const setField = <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => setFilters((prev) => ({ ...prev, [key]: value }));

  const reset = () => setFilters(DEFAULT_FILTERS);

  return { filters, setField, reset };
};
