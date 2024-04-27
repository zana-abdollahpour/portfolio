import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      animation: {
        zoom: "zoom 0.3s ease-in",
        roll: "roll 0.3s ease-out",
      },
      keyframes: {
        zoom: {
          "0%": { scale: "0.4" },
          "70%": { scale: "1.4" },
          "100%": { scale: "1" },
        },
        roll: {
          "0%": { transform: "translateY(2px)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
