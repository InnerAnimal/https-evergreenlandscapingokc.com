import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deepForest: '#1B4332',
        vibrantGreen: '#52B788',
        earthBrown: '#6C584C',
        skyBlue: '#4A90A4',
        sunsetOrange: '#F77F00',
      },
    },
  },
  plugins: [],
}

export default config

