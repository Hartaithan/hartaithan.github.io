"use client";

import { useSearchParamState } from "@/hooks/use-search-param-state";
import type { Language } from "@/models/language";
import { detectLanguage, isLanguage } from "@/utils/language";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_LANGUAGE_PARAM = "lang";
const DEFAULT_LANGUAGE: Language = "en";

export const useLanguage = (
  paramName: string = DEFAULT_LANGUAGE_PARAM,
): [Language, (next: Language) => void] => {
  const [param, setParam] = useSearchParamState(paramName);
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  const changeLanguage = useCallback(
    (next: Language) => {
      setLanguage(next);
      setParam(next);
    },
    [setParam],
  );

  useEffect(() => {
    setLanguage(isLanguage(param) ? param : detectLanguage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [language, changeLanguage];
};
