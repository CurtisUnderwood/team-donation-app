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
        'light-purple': '#C480CF',
        'light-blue': '#8096CF',
        'light-green': '#B1CF80',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
   }
  },
  plugins: [],
};
export default config;
