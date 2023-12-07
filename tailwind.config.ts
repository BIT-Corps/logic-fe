import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lg-dark": "#1D1D1D",
        "lg-white": "#E3E3E3",
        "lg-red": "#D45E5E",
      },
      fontFamily: {
        bebas: ["BebasNeue"],
      },
    },
  },
  plugins: [],
};
export default config;
