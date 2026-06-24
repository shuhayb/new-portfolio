import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "Roboto Mono", "monospace"],
      },
      fontSize: {
        xxs: "0.64rem",
        xs: "0.8rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.563rem",
        xl: "1.953rem",
        "2xl": "2.441rem",
        "3xl": "3.052rem",
        "4xl": "3.815rem",
        "5xl": "4.688rem",
        "6xl": "6.125rem",
        "7xl": "8.125rem",
      },
      colors: {
        transparent: "transparent",
        "main-light": "#F7F9FF",
        "text-dark": "#E9EFFF",
        "secondary-light": "#5A6B8C",
        "middle-colour": "#0A1430",
        "text-light": "#0C1B3A",
        black: "#000000",
        "secondary-dark": "#93A6CC",
        "accent-light": "#5AB2FF",
        "accent-dark": "#1E50D6",
      },
    },
  },
  plugins: [],
};

export default config;
