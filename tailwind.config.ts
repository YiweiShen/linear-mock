import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        'SF Pro Display',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: ['2.2rem', '1.2'],
      '3xl': '4.8rem',
      '4xl': ['6.4rem', '1'],
      '5xl': ['8rem', '1']
    },
    colors: {
      transparent: 'transparent',
      background: '#000212',
      white: '#fff',
      'off-white': '#f7f8f8',
      'white-a08': 'rgba(255, 255, 255, 0.08)',
      gray: '#858699',
      'gray-dark': '#1f1f1f',
      primary: '#5e6ad2',
      'primary-light': '#7b8af7',
      'primary-text': '#b4bcd0',
      'transparent-white': 'rgba(255, 255, 255, 0.08)'
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      8: '3.2rem',
      10: '4.0rem',
      12: '4.8rem',
      16: '6.4rem',
      36: '14.4rem',
      72: '28.8rem',
      'navigation-height': 'var(--navigation-height)'
    },
    backgroundImage: {
      primary: '#5e6ad2',
      'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)',
      'hero-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
      'hero-glow':
        'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)'
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px'
    },
    keyframes: {
      'fade-in': {
        from: { opacity: '0', transform: 'translateY(-20px)' },
        to: { opacity: '1', transform: 'none' }
      }
    },
    animation: {
      'fade-in': 'fade-in 1600ms var(--animation-delay, 15ms) ease forwards'
    }
  }
}

export default config
