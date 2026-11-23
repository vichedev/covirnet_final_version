import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f4fb",
          100: "#dfe6f5",
          200: "#c2cfeb",
          300: "#94abd9",
          400: "#6482c4",
          500: "#4262ac",
          600: "#324d90",
          700: "#2a3e75",
          800: "#1f2f5a",
          900: "#15213f",
          950: "#0b1429",
        },
        brand: {
          yellow: "#FFC20A",
          amber: "#FFA800",
          orange: "#FF7A00",
          red: "#FF4B14",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.6)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        radar: {
          "0%": { transform: "scale(0.35)", opacity: "0.55" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(60px,-40px) scale(1.15)" },
          "66%": { transform: "translate(-40px,50px) scale(0.95)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(320%) skewX(-20deg)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        bars: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s ease-out infinite",
        radar: "radar 4.5s ease-out infinite",
        marquee: "marquee 32s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        shine: "shine 3.2s ease-in-out infinite",
        "spin-slow": "spinSlow 40s linear infinite",
        bars: "bars 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
