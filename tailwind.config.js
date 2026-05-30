export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ivory: "#fbfaf6",
        linen: "#eee4d5",
        walnut: "#8a5a3b",
        espresso: "#2f251f",
        charcoal: "#191715",
        brass: "#b68a4b",
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(35, 27, 20, 0.16)",
        soft: "0 14px 35px rgba(44, 35, 28, 0.10)",
      },
    },
  },
  plugins: [],
};
