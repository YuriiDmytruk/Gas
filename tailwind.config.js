/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    borderRadius: {
      none: "0",
      mb: "24px",
      sm: "36px",
      md: "56px",
      lg: "86px",
      full: "50%",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "7xl": "4.5rem",
      emb: ["3.07px", "14px"],
      esm: ["6.35px", "15px"],
      emd: ["8.65px", "18px"],
      elg: ["12px", "20px"],
    },
    screens: {
      txt: "530",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1451px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        gilroy: ["Gilroy"],
      },
      colors: {
        main: "#333333",
      },
    },
  },
  plugins: [],
};
