"use client";

import { useState, useEffect } from "react";
import {
  safeLocalStorageGet,
  safeLocalStorageSet,
} from "../helpers/safeLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../const/LOCAL_STORAGE_KEYS";
import { MAX_COMPARE_ITEMS } from "../const/MAX_COMPARE_ITEMS";

export const useCompare = () => {
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [maxReached, setMaxReached] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompareIds(
      safeLocalStorageGet<number[]>(LOCAL_STORAGE_KEYS.compare, []),
    );
    setHydrated(true);
  }, []);

  const toggle = (id: number) => {
    setCompareIds((prev) => {
      const isSelected = prev.includes(id);
      if (!isSelected && prev.length >= MAX_COMPARE_ITEMS) {
        setMaxReached(true);
        return prev;
      }
      setMaxReached(false);
      const next = isSelected
        ? prev.filter((cid) => cid !== id)
        : [...prev, id];
      safeLocalStorageSet(LOCAL_STORAGE_KEYS.compare, next);
      return next;
    });
  };

  const clear = () => {
    setCompareIds([]);
    setMaxReached(false);
    safeLocalStorageSet(LOCAL_STORAGE_KEYS.compare, []);
  };

  const isCompared = (id: number): boolean => compareIds.includes(id);

  return { compareIds, toggle, clear, isCompared, maxReached, hydrated };
};
