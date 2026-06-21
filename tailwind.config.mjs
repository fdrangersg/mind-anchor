import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ink: {
          950: "#05070c",
          900: "#090d14",
          800: "#111827",
        },
        cyber: {
          cyan: "#22d3ee",
          green: "#7cffb2",
          amber: "#ffb74a",
          magenta: "#f472b6",
        },
      },
      boxShadow: {
        glow: "0 0 42px rgb(34 211 238 / 0.28)",
        "glow-amber": "0 0 36px rgb(255 183 74 / 0.22)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgb(34 211 238 / 0.18), transparent 32rem), radial-gradient(circle at bottom right, rgb(255 183 74 / 0.14), transparent 28rem)",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { opacity: "0.52" },
          "50%": { opacity: "0.92" },
        },
        "line-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
        "line-scan": "line-scan 8s linear infinite",
      },
    },
  },
  plugins: [typography],
};
