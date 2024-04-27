import { useContext } from "react";

import { DarkModeContext } from "@/contexts/DarkModeProvider";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined || context === null)
    throw new Error(
      "DarkModeContext was used outside of DarkModeProvider or is null",
    );
  return context;
}
