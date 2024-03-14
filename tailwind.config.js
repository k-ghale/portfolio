/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "home": "url('/background1.jpg')",
          "about": "url('/background2.jpg')",
          "skills": "url('/background3.jpg')",
          "projects": "url('/background4.jpg')",
      },
      colors:{
        "homeColor" : "rgb(1,31,55)",
        "skillsColor" : "rgb(38,0,59)",
        "orange" : "rgb(247,16,96)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik","sans-serif"],
      },
    },
  },
  plugins: [],
};
