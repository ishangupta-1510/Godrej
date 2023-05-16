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
      boxShadow: {
        "3xl":
          "10px 4px 25px rgba(0, 0, 0, 0), 0px 4px 25px rgba(0, 0, 0, 0.25)",
      },
      backgroundSize: {
        sm: "200px",
      },
      screens: {
        em: "200px",
        mm: "327px",
        tm: "359px",
        am: "520px",
        bm: "320px",
        cm: "800px",
        dm: "1044px",
        em: "400px",
        fm: "1700px",
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
