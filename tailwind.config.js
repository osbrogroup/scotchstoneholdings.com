/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', // Orange
        dark: '#222222',   // Black
        gray: '#888888',   // Gray
      },
      fontFamily: {
        sans: ['Geist Mono', 'Inter', 'Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
