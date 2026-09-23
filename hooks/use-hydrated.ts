import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export const useHydrated = (): boolean => {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
};
