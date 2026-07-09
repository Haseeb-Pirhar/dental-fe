/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#17303B",
          600: "#4C6A73",
        },
        mint: {
          50: "#EAF4EF",
          100: "#D7E9E1",
          200: "#C3DED3",
        },
        teal: {
          600: "#2F8F7E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
