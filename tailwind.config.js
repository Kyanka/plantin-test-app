/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        greeny: {
          DEFAULT: "#04BF9429",
          text: "#04BF94",
        },
        graylish: {
          DEFAULT: "#ADB8C8",
          500: "#78787A",
        },
      },
    },
  },
  plugins: [],
};
