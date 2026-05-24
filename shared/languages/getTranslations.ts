import { en } from "../locales/en";
import { uk } from "../locales/uk";

export type Translations = typeof en;

const locales = new Map<string, Translations>([
  ["en", en],
  ["uk", uk],
]);

export const getTranslations = (locale = "en"): Translations =>
  locales.get(locale) ?? en;
