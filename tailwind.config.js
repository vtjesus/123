/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        bgCalendar:'#f0f0f7',
        sidebar: '#43425d',
        sidebarDark: '#35344a',
        sidebarNav: '#a3a0fb',
        navHeader:'#4d4f5c',
        navHeaderline:'#ebebf2',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

