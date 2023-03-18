/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    //PUT YOUR PATH HERE
    // "./src/views/journey.js",
  ],
  theme: {
    extend: {
      colors: {
        card1: "rgba(255,0,0,1)",
        cgrey: "#6B717E",
        cgrey2: "#a4a19e",
        cgrey3: "#e2eae6",
        cpink1: "#FFC4D1",
        cpink2: "#EFAAC4",
        cpeach: "#FFE8E1",
        cpeach2: "#f7f5f3",
        cgreen: "#D4DCCD",
      },
      textColor: {
        brokenWhite: "#f5f3f1",
        gray: "#403f3e",
      },
    },
  },
  plugins: [],
};
