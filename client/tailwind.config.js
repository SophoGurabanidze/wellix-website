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
    "md:grid-cols-3",
    "md:grid-cols-5",
    "grid-cols-1",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#005D8F',
        secondaryBlue: '#007FB9',
        backgroundBlue: '#E6F1F7',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        drop: {
          "0%": { transform: "translateY(-40px)" },
          "50%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-40px)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        drop: "drop 1s ease-in-out infinite",
        ripple: "ripple 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
