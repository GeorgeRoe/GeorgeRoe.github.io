import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-mono': ['"SF Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config