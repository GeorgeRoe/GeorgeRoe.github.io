export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.{vue,ts,js}'
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