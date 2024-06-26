/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333",
        "deep-blue": "#1F3A93",
        "deep-green": "#006633",
      },
    },
  },
  plugins: [],
};
