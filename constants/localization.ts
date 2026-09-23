import type { Language, PluralForms } from "@/models/language";

export const yearForms: Record<Language, PluralForms> = {
  en: ["year", "years", "years"],
  ru: ["год", "года", "лет"],
};

export const monthForms: Record<Language, PluralForms> = {
  en: ["month", "months", "months"],
  ru: ["месяц", "месяца", "месяцев"],
};

export const presentLabel: Record<Language, string> = {
  en: "present",
  ru: "настоящее время",
};
