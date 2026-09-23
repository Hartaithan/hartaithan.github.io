"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSearchParamState = (
  key: string,
): [string | null, (value: string) => void] => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const value = searchParams.get(key);

  const setValue = useCallback(
    (next: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, next);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [key, router, searchParams],
  );

  return [value, setValue];
};
