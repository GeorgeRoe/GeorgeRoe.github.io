<script setup lang="ts">
import { Palette } from './types/palette';

const { theme } = useTheme()

useHead(() => ({
  bodyAttrs: {
    style: `background: ${theme.value[Palette.Bg0]};`,
  }
}))
</script>

<template>
  <div
    class="w-full font-sf-mono overflow-x-hidden relative"
    :style="{ backgroundColor: theme[Palette.Bg0], color: theme[Palette.Text] }"
  >
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>