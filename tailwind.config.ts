import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#232323",
        "primary-white": "#F8FAFC",
        "primary-orange": "#FF7D29",
        lightRed: "#520E0D",
        secondary: "#EB2926",
        info: "#F8FAFC",
        success: "#34D399",
        warning: "#F16365",
        primaryRed: "#EB2926",
        "primary-green": "#00B047",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
