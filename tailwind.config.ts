import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1e1c",
        "dark-2": "#262b29",
        peach: "#f2c9a0",
        "peach-2": "#dfb280",
        mint: "#c5e5d8",
        "mint-2": "#a8d4c1",
        cream: "#f5f2ed",
        "warm-gray": "#e8e5df",
        ink: "#1a1a1a",
        "ink-muted": "#6b6b6b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.45s ease-out both",
        kenBurns: "kenBurns 6s ease-out both",
      },
      letterSpacing: {
        eyebrow: "0.2em",
        button: "0.05em",
      },
    },
  },
  plugins: [],
};
export default config;
