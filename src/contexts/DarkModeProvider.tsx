"use client";

import { type DispatchWithoutAction, createContext, useEffect } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";

interface DarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: DispatchWithoutAction;
}

const DarkModeContext = createContext<DarkModeContext | null>(null);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : true,
    "isDarkMode",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((cur: boolean) => !cur);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
