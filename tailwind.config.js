/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cto: "url('/assets/cta-bg.jpg')",
      },
      fontFamily: {
        sans: ["'Proxima Soft'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
