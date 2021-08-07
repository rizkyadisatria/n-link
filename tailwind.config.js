module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "nlink-green": "#01BF53",
        "nlink-red": "#FA5959",
        "nlink-blue": "#4BA8D3",
        "nlink-grey": "#9194A2",
        "nlink-white": "#f7f7f7",
      },
    },
    fontFamily: {
      ProductSans: ["Product Sans, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
