const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "// Adjust this if your files are in different directories",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow : {
        'shadowed_btn' : '0px 13px 33px -14px #0496ff'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
