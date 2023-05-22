/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        myBlue: "#0872b9",
        myBlue_light: "#5bc5f3",
        myWhite: "#ffffff",
        myWhite_2: "#e7e7e7",
        myBlack: "#353535",
        myGray: "#555555",
        myPink: "#f1f1f1",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        bannerBg: "url('./img/banner.jpg')",
      },
    },
  },
  plugins: [],
};
