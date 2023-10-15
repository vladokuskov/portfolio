import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ruda: ["var(--font-ruda)"],
        ramaraja: ["var(--font-ramaraja)"],
      },
      backgroundColor: {
        app: "#131313",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
