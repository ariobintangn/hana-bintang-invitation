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
        card2: "#6B717E",
        card3: "#FFC4D1",
        card4: "#FFE8E1",
        card5: "#D4DCCD",
      },
      textColor: {
        brokenWhite: "rgb(220,220,205)",
        gray: "rgb(100,100,100)",
      },
    },
  },
  plugins: [],
};
