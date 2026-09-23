import type { Language, PluralForms } from "@/models/language";

export type PluralizeHandler = (count: number, forms: PluralForms) => string;

const en: PluralizeHandler = (count, forms) => {
  return `${count} ${count === 1 ? forms[0] : forms[1]}`;
};

const ru: PluralizeHandler = (count, forms) => {
  const value = count % 100;
  if (value >= 11 && value <= 14) return `${count} ${forms[2]}`;
  switch (count % 10) {
    case 1:
      return `${count} ${forms[0]}`;
    case 2:
    case 3:
    case 4:
      return `${count} ${forms[1]}`;
    default:
      return `${count} ${forms[2]}`;
  }
};

export const pluralize: Record<Language, PluralizeHandler> = { en, ru };
