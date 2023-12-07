import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        'picmove':'move 3s ease infinite alternate',
        "btnmoveto":"btnmoveto 1s ease",
        "btnmoveback":"btnmoveback 1s ease"
      },
      keyframes:{
        move:{
          'from': {
            transform: 'translateY(-15px)'
          },
          'to' :{
            transform: 'translateY(0px) scale(1.03)'
          }
        },
        btnmoveto:{
          'from': {
            transform: 'translateX(0px)'
          },
          'to' :{
            transform: 'translateX(23px)'
          }
        },
        btnmoveback:{
          'from': {
            transform: 'translateX(0px)'
          },
          'to' :{
            transform: 'translateX(-23px)'
          }
        }

      }
    },
  },
  plugins: [],
}
export default config
