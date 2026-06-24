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
        "main-light": "#FEFBFB",
        "text-dark": "#E8E7E2",
        "secondary-light": "#7A736F",
        "middle-colour": "#403B3B",
        "text-light": "#242424",
        black: "#000000",
        "secondary-dark": "#BFAF9C",
        "accent-light": "#DDA6A6",
        "accent-dark": "#CD7A7A",
      },
    },
  },
  plugins: [],
};

export default config;
