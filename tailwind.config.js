/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "@/**/*.{js,ts,jsx,tsx}",
    "@assets/**/*.{js,ts,jsx,tsx}",
    "@components/**/*.{js,ts,jsx,tsx}",
    "@layouts/**/*.{js,ts,jsx,tsx}",
    "@pages/**/*.{js,ts,jsx,tsx}",
    "@store/**/*.{js,ts,jsx,tsx}",
    "@routes/**/*.{js,ts,jsx,tsx}",
    "@services/**/*.{js,ts,jsx,tsx}",
    "@hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
