import { Palette } from '~/types/palette'
import { ThemeName, themes } from '~/data/theme'
import { ONEDARK_DARKER_THEME } from '~/data/theme/onedark'

const DEFAULT_THEME: Record<Palette, string> = ONEDARK_DARKER_THEME

export const useTheme = () => {
  const themeName = useCookie<ThemeName>('theme-name', {
    default: () => ThemeName.OneDarkDarker
  })

  const currentTheme = computed(() => themes[themeName.value] || DEFAULT_THEME)

  function theme(color: Palette): string {
    return currentTheme.value[color]
  }

  const setTheme = (newThemeName: ThemeName) => {
    themeName.value = newThemeName
  }

  return { theme, setTheme }
}