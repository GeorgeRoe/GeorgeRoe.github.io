import { Palette } from "~/types/palette"
import { ATOM_ONE_DARK_THEME } from "~/data/theme/atomOneDark"
import { HIGH_CONTRAST_THEME } from "~/data/theme/highContrast"
import { ATOM_ONE_LIGHT_THEME } from "~/data/theme/atomOneLight"
import { GRUVBOX_DARK_THEME } from "~/data/theme/gruvboxDark"

export enum ThemeName {
  AtomOneDark = 'Atom OneDark',
  AtomOneLight = 'Atom OneLight',
  GruvboxDark = 'Gruvbox Dark',
  HighContrast = 'High Contrast',
}

export const themes: Record<ThemeName, Record<Palette, string>> = {
  [ThemeName.AtomOneDark]: ATOM_ONE_DARK_THEME,
  [ThemeName.AtomOneLight]: ATOM_ONE_LIGHT_THEME,
  [ThemeName.GruvboxDark]: GRUVBOX_DARK_THEME,
  [ThemeName.HighContrast]: HIGH_CONTRAST_THEME,
}