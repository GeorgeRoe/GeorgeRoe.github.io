import { Palette } from "~/types/palette"
import { ONEDARK_DARKER_THEME } from "~/data/theme/onedark"
import { HIGH_CONTRAST_THEME } from "~/data/theme/highContrast"

export enum ThemeName {
  OneDarkDarker = 'onedark-darker',
  HighContrast = 'high-contrast',
}

export const themes: Record<ThemeName, Record<Palette, string>> = {
  [ThemeName.OneDarkDarker]: ONEDARK_DARKER_THEME,
  [ThemeName.HighContrast]: HIGH_CONTRAST_THEME,
}