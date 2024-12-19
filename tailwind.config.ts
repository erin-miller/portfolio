import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cpurple: "#2E0014",
        cbrown: "#4c2523",
        moss: "#809848",
        darkmoss: "#4b4f28",
        lightolive: "#b7cf92",
      },
    },
  },
  plugins: [],
} satisfies Config;
