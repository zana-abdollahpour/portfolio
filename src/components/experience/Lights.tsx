import { useRef } from "react";
import { type AmbientLight } from "three";

import { useDarkMode } from "@/hooks/useDarkMode";

export default function Lights() {
  const ambientLightRef = useRef<AmbientLight | null>(null);
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ambientLight
        ref={ambientLightRef}
        intensity={isDarkMode ? 1.6 : 1}
        color={isDarkMode ? "#ffb300" : "#fff4db"}
      />
    </>
  );
}
