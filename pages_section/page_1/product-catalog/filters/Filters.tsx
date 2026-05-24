import { FiltersRoot as Root } from "./components/Root";
import { FiltersCategory as Category } from "./components/Category";
import { FiltersSort as Sort } from "./components/Sort";
import {
  FiltersInStock as InStock,
  FiltersDiscounted as Discounted,
} from "./components/Toggles";
import { FiltersReset as Reset } from "./components/Reset";
import {
  FiltersRow as Row,
  FiltersCheckboxRow as CheckboxRow,
} from "./components/Layouts";

export const CatalogFilters = {
  Root,
  Category,
  Sort,
  InStock,
  Discounted,
  Reset,
  Row,
  CheckboxRow,
};
