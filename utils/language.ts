import type { Language } from "@/models/language";

export const isLanguage = (value: string | null): value is Language =>
  value === "en" || value === "ru";

export const detectLanguage = (): Language =>
  typeof navigator !== "undefined" &&
  navigator.language.toLowerCase().startsWith("ru")
    ? "ru"
    : "en";
