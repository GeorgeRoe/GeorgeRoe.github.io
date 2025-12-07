import { isThemeName, ThemeName, themes } from '~/data/theme'
import { ALL_PALETTE_KEYS } from '~/types/palette'

function useThemeName() {
  return useCookie<ThemeName>('theme-name', {
    default: () => ThemeName.AtomOneDark,
    decode: (val) => {
      if (isThemeName(val)) {
        return val
      }
      return ThemeName.AtomOneDark
    }
  })
}

export function useThemeControl() {
  const themeName = useThemeName()

  const setTheme = (newThemeName: ThemeName) => {
    themeName.value = newThemeName
  }

  return { setTheme }
}

export function useThemeStyle() {
  const themeName = useThemeName()

  return computed(() => {
    const theme = themes[themeName.value]

    return ALL_PALETTE_KEYS.reduce((style, key) => {
      style[cssVarName(key)] = theme[key]
      return style
    }, {} as Record<string, string>)
  })
}