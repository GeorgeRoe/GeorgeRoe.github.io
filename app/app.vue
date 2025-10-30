<script setup lang="ts">
import { Palette } from './types/palette';

const { theme } = useTheme()

const bodyBg = computed(() => theme(Palette.Bg0))

useHead(() => ({
  bodyAttrs: {
    style: `background: ${bodyBg.value};`,
  }
}))
</script>

<template>
  <div
    class="w-full min-h-screen min-h-[100dvh] font-sf-mono overflow-x-hidden overflow-y-auto"
    :style="{ backgroundColor: theme(Palette.Bg0), color: theme(Palette.Text) }"
  >
    <nuxt-page />
  </div>
</template>