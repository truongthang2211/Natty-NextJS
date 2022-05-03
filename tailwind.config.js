module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        "main-red": "#F87171",
        "main-green": "#86EFAC",
      },
    },
  },
  plugins: [],
};
