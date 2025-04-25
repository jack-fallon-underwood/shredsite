// tailwind.config.js

export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',  // Adjust paths to match your project structure
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{html,js,jsx,ts,tsx}',
      
    ],
    theme: {
      extend: {
        keyframes: {
        'move-to-corner': {
          '0%': {
            transform: 'translate(0, 0)',
            top: '0%',
            left: '0%',
          },
          '100%': {
            transform: 'translate(calc(0vw + 0px), calc(70vh))', // Corrected translation
            top: '0px',
            left: '0%',
          },
        },
      },
      animation: {
        'move-to-corner': 'move-to-corner 1s forwards',
      },
    },
  },
  plugins: [],
};