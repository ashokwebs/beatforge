import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        studio: {
          neon: "#F43F5E",
          violet: "#8B5CF6",
          dark: "#0B0E17",
          panel: "#131826",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
