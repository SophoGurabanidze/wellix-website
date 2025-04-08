/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-900',
    'bg-sky-800',
    'bg-sky-600',
    'bg-cyan-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

