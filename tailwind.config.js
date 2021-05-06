module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*,{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spaceing: {
        0.5: "0.5px",
      },
      colors: {
        "botw-backdrop": "#000000",
        "botw-foreground": "#E2DED3",
        "botw-text": "#E9E1D1",
        "botw-bonus-text": "#6FD49C",
      },
      height: {
        26: "100px",
        38: "150px",
        bigBoi: "250px",
        218: "218px",
        250: "250px",
      },
      width: {
        bigGirl: "910px",
        910: "910px",
        448: "448px",
        550: "550px",
      },
      opacity: {
        15: ".15",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
