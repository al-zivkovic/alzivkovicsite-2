/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include the root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS and JSX/TSX files in `src`
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#000",
        tertiary: "#1E1E1E",
      }
    },
  },
  plugins: [],
}

