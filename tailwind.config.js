/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coolblack: "#090a0b",
        spacegrey: "#353535",
        snowwhite: "#ffffff",
        orangered: "#ff5100",
        greatgold: "#f2cb05",
        greenblue: "#389092",
      },
      maxWidth: {
        content: "920px",
      },
      borderRadius: {
        full: "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};
