import type { Config } from 'tailwindcss'
import { Palette, ALL_PALETTE_KEYS } from './app/types/palette'
import { cssVarName } from './app/composables/cssVarName'

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
      colors: ALL_PALETTE_KEYS.reduce((acc, key) => {
        acc[key] = `var(${cssVarName(key)})`
        return acc
      }, {} as Record<Palette, string>),
    },
  },
  plugins: [],
}

export default config