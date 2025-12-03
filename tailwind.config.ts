import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0B0D17", // now bg-surface works
        primary: "#6366F1",
        accent: "#00D4FF",
        dark: "#0A0A0A",
      },
    },
  },
  plugins: [],
};

export default config;
