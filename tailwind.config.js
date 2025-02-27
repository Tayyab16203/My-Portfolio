/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lighting': '#0089b7',
      'dark': '#003d62',
      'darker': '#003251',
      'secondary': '#fff700',
      'white': '#ffffff',
    },
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
        
        'sm': '640px',
        // => @media (min-width: 320px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

