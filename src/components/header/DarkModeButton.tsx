"use client";

import { HiSun, HiMoon } from "react-icons/hi2";

import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      className={`relative z-20 h-6 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100 p-1`}
      onClick={() => toggleDarkMode()}
    >
      <div
        className={`absolute top-1/2 flex h-full -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 px-1 transition-all duration-300 ${isDarkMode ? "translate-x-5" : "-translate-x-1 rotate-180"}`}
      >
        {isDarkMode ? <HiMoon /> : <HiSun />}
      </div>
    </button>
  );
}
