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
        forestGreen: '#2d5a3d',
        darkGreen: '#1a4d2e',
        mediumGreen: '#3d7a4e',
        golden: '#c9a961',
        lightGray: '#f8f9fa',
        darkText: '#333333',
      },
    },
  },
  plugins: [],
}

export default config

