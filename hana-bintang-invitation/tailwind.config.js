/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    //PUT YOUR PATH HERE
    // "./src/views/journey.js",
  ],
  theme: {
    extend: {
      container: {
        // padding: "2rem",
        // center: true
      },
      colors: {
        card1: "rgba(255,0,0,1)",
        cgrey: "#6B717E",
        cgrey1: "#2f2e2d",
        cgrey2: "#a4a19e",
        cgrey3: "#e2eae6",
        cpink1: "#FFC4D1",
        cpink2: "#EFAAC4",
        cpeach: "#FFE8E1",
        cpeach2: "#f7f5f3",
        ccream: "#f0eeeb",
        ccream2: "#e0d4c4",
        cgreen: "#D4DCCD",    
      },
      textColor: {
        brokenWhite: "#f5f3f1",
        gray: "#403f3e",
        chocolate: "#959290",
      },
      fontFamily: {
        adamina: "'Adamina', serif",
        quattro: "'Quattrocento Sans', sans-serif"       
      }
    },
  },
  plugins: [],
};
