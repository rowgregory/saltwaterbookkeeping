import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        graphite: '#232323',
        saltwater: '#3A9D99',
        vibrantteal: '#1ABC9C',
        deepteal: '#16A085',
        aquablue: '#00A8B9',
        tealbreeze: '#00b8cb',
        darkeraquablue: '#0074A6',
        dimgray: '#696969',
        charcoal: '#343434',
        almostblack: '#181818',
        deepcharcoal: '#282828',
        duskypalm: '#12111c',
        midnightorchid: '#181621',
        violetember: '#693a99',
        smokysage: '#878490',
        twilightplum: '#281939',
        softlavender: '#d3a3f7',
        mistylavender: '#6f6c79',
        ashenViolet: '#5d5a68',
        onyxshadow: '#1c1928',
        lavenderdream: '#af8ed0',
        velveteclipse: '#211e2d',
        obsidianfog: '#504e58',
        deepseashadow: '#34323c',
        duskycoral: '#565360',
        abyssaldepth: '#191622',
        oceanicnocturne: '#853bce',
        moonlightdepths: '#a1a0ab',
        deepindigo: '#1c1426',
        darkgrape: '#362a59',
        charcoalblack: '#1d1d1f',
        mediumgray: '#6e6e73',
        shadowamathyst: '#424245',
        midnightshadow: '#111',
        midnightabyss: '#050c18',
        shadowplum: '#14121d'
      },
      screens: {
        '1200': '1200px',
        '1400': '1400px',
        '2000': '2000px'
      },
      maxWidth: {
        '1160': '1160px',
        '1200': '1200px'
      },
      maxHeight: {
        560: '560px'
      },
      fontSize: {
        11: '0.6875rem',
        13: '0.8125rem',
        15: '0.9375rem'
      },
      backgroundImage: {
        'aqua-g': 'linear-gradient(to bottom, #16A085, #00A8B9)',
        'darkeraqua-g': 'linear-gradient(to bottom, #0096ae, #0275a7)',
        testimonialcard: 'linear-gradient(rgba(31, 19, 42, 0.5), rgba(19, 17, 28))',
        testimonialcardlight:
          'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(247, 247, 247))',
        highlightcardsbg: "url('/images/subherobg.png')",
        spherelight: "url('/images/sphere-light.png')",
        spheredark: "url('/images/sphere-dark.png')",
        t1: "url('/images/t-1.png')",
        t2: "url('/images/t-2.png')",
        whoweare: "url('/images/who-we-are.png')"
      },
      borderWidth: {
        1: '1px',
        3: '3px'
      },
      keyframes: {
        rotateToTwoOClock: {
          '0%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        'horizontal-move': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        rotateToTwoOClock: 'rotateToTwoOClock 375ms ease-in-out forwards',
        fadeIn: 'fadeIn 300ms ease-in-out',
        'horizontal-move': 'horizontal-move 2s ease-in-out infinite'
      },
      boxShadow: {
        testimonialcard: '0 5px 30px rgba(113, 65, 225, 0.17)',
        testimonialcardlight: '0 10px 10px rgba(76, 76, 109, 0.0705882353)',
        servicecardlight: '0 10px 60px rgba(0, 0, 0, 0.1)',
        servicecarddark: '0 10px 60px rgba(0, 0, 0, 0.1)',
        lightauth: 'rgba(120, 120, 128, 0.16) 0px 11px 34px 0px',
        darkauth: 'rgba(0, 0, 0, 0.25) 0px 11px 34px 0px'
      }
    }
  },
  plugins: []
}
export default config
