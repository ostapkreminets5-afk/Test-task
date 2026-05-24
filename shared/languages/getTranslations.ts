import { en } from "../locales/en";
import { uk } from "../locales/uk";
import type { Translations } from "../locales/en";

const locales = new Map<string, Translations>([
  ["en", en],
  ["uk", uk],
]);

export const getTranslations = (locale = "en"): Translations =>
  locales.get(locale) ?? en;
