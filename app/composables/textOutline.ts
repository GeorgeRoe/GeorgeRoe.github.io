import type { StyleValue } from "vue";
import type { Palette } from "~/types/palette";
import { cssVarName } from "./cssVarName";

export function textOutline(color: Palette, width: number): StyleValue {
  return {
    '-webkit-text-stroke-color': `var(${cssVarName(color)})`,
    '-webkit-text-stroke-width': `${width}px`,
  }
}