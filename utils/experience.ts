import { months } from "@/constants/dates";
import { monthForms, presentLabel, yearForms } from "@/constants/localization";
import type { Language } from "@/models/language";
import { pluralize } from "@/utils/pluralize";

const getMonths = (value: string): number => {
  let year: number;
  let month: number;
  if (value === "present") {
    const now = new Date();
    [month, year] = [now.getMonth() + 1, now.getFullYear()];
  } else {
    [month, year] = value.split(".").map(Number);
  }
  return year * 12 + month;
};

const formatDuration = (duration: number, lang: Language): string => {
  const years = Math.floor(duration / 12);
  const months = duration % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(pluralize[lang](years, yearForms[lang]));
  if (months > 0) parts.push(pluralize[lang](months, monthForms[lang]));

  return parts.join(" ") || "";
};

export const getExperienceDuration = (
  from: string,
  to: string,
  lang: Language = "en",
): string => {
  return formatDuration(getMonths(to) - getMonths(from) + 1, lang);
};

export const getTotalExperienceDuration = (
  items: { from: string }[],
  lang: Language = "en",
): string => {
  const earliest = items.reduce((min, item) => {
    return getMonths(item.from) < getMonths(min) ? item.from : min;
  }, items[0].from);
  return formatDuration(getMonths("present") - getMonths(earliest), lang);
};

export const formatExperienceDate = (
  value: string,
  lang: Language = "en",
): string => {
  if (value === "present") return presentLabel[lang];
  const [month, year] = value.split(".").map(Number);
  return `${months[lang][month]} ${year}`;
};

export const getExperienceDateRange = (
  from: string,
  to: string,
  lang: Language = "en",
): string => {
  return `${formatExperienceDate(from, lang)} - ${formatExperienceDate(to, lang)}`;
};
