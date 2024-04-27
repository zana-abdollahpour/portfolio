"use client";

import { useState, useEffect } from "react";

export function useLocalStorage(initialState: unknown, key: string) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
