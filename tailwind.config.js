// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#7c3aed",
          600: "#5b21b6",
        },
      },
      borderRadius: { xl: "14px" },
    },
  },
};
