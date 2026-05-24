"use client";

import { useState, useEffect } from "react";
import {
  safeLocalStorageGet,
  safeLocalStorageSet,
} from "../helpers/safeLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../const/LOCAL_STORAGE_KEYS";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(
      safeLocalStorageGet<number[]>(LOCAL_STORAGE_KEYS.favorites, []),
    );
    setHydrated(true);
  }, []);

  const toggle = (id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id];
      safeLocalStorageSet(LOCAL_STORAGE_KEYS.favorites, next);
      return next;
    });
  };

  const isFavorite = (id: number): boolean => favorites.includes(id);

  return { favorites, toggle, isFavorite, hydrated };
};
