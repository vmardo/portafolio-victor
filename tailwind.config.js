/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        animation: {
          "text-gradient": "text-gradient 1.5s linear infinite"
        },
        keyframes: {
          "text-gradient": {
            to: {
              backgroundPosition: "200% center"
            }
          }
        }

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'negro': '#191919',
      'gris': '#363636',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}

