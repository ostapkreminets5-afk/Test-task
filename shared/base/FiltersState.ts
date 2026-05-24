import type { SortOption } from "../const/SORT_OPTIONS";

export type FiltersState = {
  search: string;
  category: string;
  onlyInStock: boolean;
  onlyDiscounted: boolean;
  sort: SortOption;
};
