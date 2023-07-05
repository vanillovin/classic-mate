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
      colors: {
        'warm-vintage': {
          'off-white': '#fef9f0',
          'burnt-orange': '#b48b5e',
          'dusty-mint': '#b8c5bd',
          'winter-green': '#667061',
          'granite': '#b5b0a3',
        },
        'autumn': {
          'wine': '#6e0e29',
          'darkred': '#8c0200',
          'darkblue': '#041831',
          'emerald': '#0b4839',
          'gold': '#ddae66',
        },
        'palette-no16': {
          'red': '#782924',
          'blue': '#782924',
          'yellow': '#DC9E2F',
          'gray': '#8A8A8A',
          'green': '#0C463F',
          'black': '#101010',
        },
        'bluegold-palette': {
          'blue1': '#B9D1EA',
          'blue2': '618ABB',
          'blue3': '00235E',
          'yellow': 'FDBA21',
        },
        'simple-palette': {
          'gold': '#e0c389',
          'blue1': '#d1e6f7',
          'blue2': '#01395e',
        },
        'old-palette': {
          'blue': '#04385d',
          'cream': '#fbf6e0',
          'gold': '#e0c367',
          'gray': '#ccc6b8',
          'wine': '#8b123b',
        },
        'vintage-holiday': {
          'cyan': '#232d34',
          'red': '#8a0e0a',
          'gray': '#627272',
          'green': '#25340f',
          'yellow': '#ecba66',
          'brown': '#6e4b4d',
        },
        'pantone': {
          'berkeley-blue': '#003262',
          'california-gold': '#FDB515',
          'metallic-gold': '#BC9B64',
          'dark-navy': '#2e2f36',
          'brandy-sniffer': '#7e3f3a',
          'pale-gold': '#bd9865',
          'white-pepper': '#b6a893',
          'babys-breath': '#e9e2d1',
          'sun-kiss': '#ebd1bb',
        }
      },
      width: {
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '91': '23rem',
        '100': '25rem',
        '104': '26rem',
      },
      height: {
        '76': '19rem',
        '84': '22rem',
        '88': '23rem',
        '92': '24rem',
        '100': '25rem',
      },
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
        'tada': {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'rotate(-2deg)' },
          '30%, 50%, 70%, 90%': { transform: 'rotate(2deg)' },
          '40%, 60%, 80%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        'animatePiano': {
          '0%': { transform : 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 2s alternate infinite linear',
        'tada': 'tada 1s alternate linear',
        'on-scroll': 'slide-up 0.5s ease-in-out',
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
  plugins: [require("daisyui")],
}
