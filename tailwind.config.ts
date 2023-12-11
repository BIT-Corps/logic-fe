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
        "lg-black": "#222222",
        "lg-dark": "#1D1D1D",
        "lg-white": "#E3E3E3",
        "lg-gray": "#8C8C8C",
        "lg-gray-light": "#D4D4D4",
        "lg-red": "#C74747",
        "lg-red-light": "#D45E5E",
        "lg-red-dark": "#913B3B",
      },
      fontFamily: {
        bebas: "BebasNeue",
      },
    },
  },
  plugins: [],
};
export default config;
