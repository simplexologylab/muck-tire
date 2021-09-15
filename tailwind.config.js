module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "topography-pattern": "url('/topography.svg')",
      },
      fontFamily: {
        primary: ["Black Ops One", "ui-monospace"],
        secondary: ["Share Tech Mono", "ui-monospace"],
      },
      colors: {
        brand: "#FFE600",
        secondary: "#FF680A",
        tertiary: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
