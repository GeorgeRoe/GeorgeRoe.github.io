import type { Palette } from '~/types/palette'

export function cssVarName(color: Palette): string {
  return `--t-${color}`
}