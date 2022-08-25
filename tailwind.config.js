// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens:{
sm:'648px',
md:'768px',
lg:'1024px',
xl:'1280px',
'2xl':'1536px'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      backGroundImage:{
        'hero-back':"url('/assets/undraw_Cloud_hosting_7xb1.png')"
      }
  },
  plugins: [],
};
