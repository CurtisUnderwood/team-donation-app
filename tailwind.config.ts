import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        'forest-green': '#196F3D',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
   }
  },
  plugins: [],
};
export default config;
