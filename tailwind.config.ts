import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--inter)", "sans-serif"],
        dancing_script: ["var(--dancing_script)", "sans-serif"],
        exo_2: ["var(--exo_2)", "sans-serif"],
        playwrite: ["var(--playwrite)", "sans-serif"],
      },

      animation: {
        wind: "wind 3s ease-in-out infinite", // Animation name, duration, and timing
        naturalWind: "nwind 5s ease-in-out infinite alternate",
        windFlow: "windFlow 10s linear infinite",
      },
      keyframes: {
        wind: {
          "0%, 100%": { transform: "rotate(0deg) translateX(0px)" }, // Start and end
          "50%": { transform: "rotate(3deg) translateX(5px)" }, // Slight tilt
        },
        nwind: {
          "0%": { transform: "rotate(0deg) translateX(0px) scale(1)" },
          "25%": { transform: "rotate(2deg) translateX(3px) scale(1.02)" },
          "50%": { transform: "rotate(-3deg) translateX(-5px) scale(0.98)" },
          "75%": { transform: "rotate(1deg) translateX(2px) scale(1.01)" },
          "100%": { transform: "rotate(0deg) translateX(0px) scale(1)" },
        },
        windFlow: {
          "0%": {
            transform: "translateX(-10px) translateY(0px)",
            opacity: "1",
          },
          "50%": {
            transform: "translateX(50vw) translateY(-10px)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateX(100vw) translateY(-20px)",
            opacity: "0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
