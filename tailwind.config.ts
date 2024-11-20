import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
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
        darkeraquablue: '#0074A6',
        dimgray: '#696969',
        charcoal: '#343434',
        almostblack: '#181818',
        deepcharcoal: '#282828'
      },
      screens: {
        '1200': '1200px',
        '1400': '1400px'
      },
      maxWidth: {
        '1200': '1200px'
      },
      fontSize: {
        11: '0.6875rem',
        13: '0.8125rem',
        15: '0.9375rem'
      },
      backgroundImage: {
        'aqua-g': 'linear-gradient(to bottom, #16A085, #00A8B9)',
        'darkeraqua-g': 'linear-gradient(to bottom, #0096ae, #0275a7)'
      }
    }
  },
  plugins: []
}
export default config
