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
            top: '50%',
            left: '50%',
          },
          '100%': {
            transform: 'translate(calc(0vw + 40px), calc(70vh))', // Corrected translation
            top: '0px',
            left: '0px',
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