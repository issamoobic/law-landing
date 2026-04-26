import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FAFAF8",
          100: "#F2F0EA",
          200: "#E6E2D6",
        },
        law: {
          950: "#0A1628",
          900: "#0F1E35",
          800: "#152642",
          700: "#1E3356",
        },
        gold: {
          DEFAULT: "#C9A44E",
          300: "#DCC9A0",
          400: "#D4B56A",
          600: "#A8832D",
        },
        accent: {
          DEFAULT: "#1E3A5F",
          light: "#2D4A73",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 64px -24px rgba(10, 22, 40, 0.45)",
        card: "0 12px 40px -12px rgba(10, 22, 40, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
