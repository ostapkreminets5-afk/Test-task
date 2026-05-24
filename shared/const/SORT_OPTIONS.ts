export const SORT_OPTIONS = [
  { value: "price-asc", label: "Ціна: від низької до високої" },
  { value: "price-desc", label: "Ціна: від високої до низької" },
  { value: "rating-desc", label: "Рейтинг: від високого до низького" },
  { value: "title-asc", label: "Назва: А-Я" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];
