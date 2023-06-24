/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.5rem',
      },
      spacing: { 
        'left-17': '4.25rem', 
        'left-30': '7.50rem', 
        'left-37': '9.25rem', 
        'left-38': '9.50rem', 
        'left-46': '11.50rem', 
        'left-47': '11.75rem', 
        'left-57': '14.25rem', 
        'left-62': '15.50rem', 
        'left-81': '19.25rem', 
      },
      backgroundColor: {
        'audio-gray': '#f1f3f4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '1' },
          'to': { opacity: '0.5' },
        },
        'animatePiano': {
          '0%': { transform : 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 2s alternate infinite linear',
        'animate-piano-delay-1': 'animatePiano 1s infinite 0.01s',
        'animate-piano-delay-2': 'animatePiano 1s infinite 0.03s',
        'animate-piano-delay-3': 'animatePiano 1s infinite 0.05s',
        'animate-piano-delay-4': 'animatePiano 1s infinite 0.07s',
        'animate-piano-delay-5': 'animatePiano 1s infinite 0.09s',
        'animate-piano-delay-6': 'animatePiano 1s infinite 0.11s',
        'animate-piano-delay-7': 'animatePiano 1s infinite 0.13s',
        'animate-piano-delay-8': 'animatePiano 1s infinite 0.15s',
        'animate-piano-delay-9': 'animatePiano 1s infinite 0.17s',
        'animate-piano-delay-10': 'animatePiano 1s infinite 0.19s',
        'animate-piano-delay-11': 'animatePiano 1s infinite 0.21s',
        'animate-piano-delay-12': 'animatePiano 1s infinite 0.23s',
        'animate-piano-delay-13': 'animatePiano 1s infinite 0.25s',
        'animate-piano-delay-14': 'animatePiano 1s infinite 0.27s',
        'animate-piano-delay-15': 'animatePiano 1s infinite 0.29s',
      },
    },
  },
  plugins: [],
}
