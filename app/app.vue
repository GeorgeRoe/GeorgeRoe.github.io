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
    class="w-full font-sf-mono overflow-x-hidden relative"
    :style="{ backgroundColor: theme(Palette.Bg0), color: theme(Palette.Text) }"
  >
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>