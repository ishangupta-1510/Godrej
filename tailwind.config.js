/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        sm: "200px",
      },
      screens: {
        em: "200px",
        mm: "327px",
      },
      width: {
        sm: "100vw",
      },
      height: {
        sm: "100vw",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
