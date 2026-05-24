export const safeLocalStorageGet = <T>(key: string, fallback: T): T => {
  const isBrowser = typeof window !== "undefined";
  const raw = isBrowser ? localStorage.getItem(key) : null;
  const parsed = raw ? (JSON.parse(raw) as T) : null;
  return parsed ?? fallback;
};

export const safeLocalStorageSet = <T>(key: string, value: T): void => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
