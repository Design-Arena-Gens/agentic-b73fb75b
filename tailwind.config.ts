import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020817",
        panel: "#0B1226",
        accent: {
          DEFAULT: "#00F7FF",
          secondary: "#8C61FF"
        },
        warning: "#FFB347",
        danger: "#FF4D4F",
        success: "#4ADE80"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 247, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
