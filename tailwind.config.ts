import type { Config } from "tailwindcss";

/** Палитра от фирменного логотипа: синий #0058ba (руки + сердце) */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#f2f6fc",
          muted: "#e8f0fa",
        },
        /** заголовки и основной текст — глубокий синий той же гаммы */
        legal: {
          DEFAULT: "#082f4f",
          soft: "#2d5680",
          onSoft: "#9ec3ee",
          deep: "#041e35",
        },
        /** фирменный синий логотипа */
        brand: {
          DEFAULT: "#0058ba",
          hover: "#004799",
          light: "#e8f1fb",
          soft: "#4a8bc8",
          dim: "rgba(0, 88, 186, 0.12)",
          muted: "#3d6fa3",
        },
        ink: {
          DEFAULT: "#1a1c1c",
          muted: "#4a5568",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Noto Serif", "Georgia", "serif"],
        sans: ['"Source Sans 3"', "Source Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.4rem,5.2vw,4.2rem)",
          { lineHeight: "1.06", letterSpacing: "-0.03em" },
        ],
        "headline-lg": [
          "clamp(1.85rem,3.1vw,2.65rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em" },
        ],
      },
      boxShadow: {
        ambient: "0 20px 40px -15px rgba(0, 88, 186, 0.09)",
        ambientLg: "0 32px 64px -20px rgba(0, 88, 186, 0.12)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
