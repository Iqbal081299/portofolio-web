/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    'vs': '375px',
    'xs': '480px',   // Menambahkan breakpoint untuk ukuran layar ekstra kecil
    'sm': '640px',   // Breakpoint default untuk perangkat kecil
    'md': '768px',   // Breakpoint default untuk perangkat menengah
    'lg': '1024px',  // Breakpoint default untuk perangkat besar
    'xl': '1280px',  // Breakpoint default untuk perangkat ekstra besar
    '2xl': '1536px', // Breakpoint default untuk perangkat sangat besar},
  },
  extend: {
    width: {
      '557px': '557px',
    },
  },
  plugins: [],
}
}
