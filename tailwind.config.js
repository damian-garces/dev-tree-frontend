import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "URL('/bg.svg')"
      },
      backgroundSize: {
        "home-xl": "50%"
      }
    },
  },
  plugins: [
    forms,
  ],
}

