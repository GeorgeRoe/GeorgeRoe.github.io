<script setup lang="ts">
import { Palette } from '~/types/palette';
import type { StyleValue } from 'vue';

const { theme } = useTheme()

const outlinedTextStyle = computed<StyleValue>(() => ({
  color: theme(Palette.Bg1),
  '-webkit-text-stroke-color': theme(Palette.DimmedText),
  '-webkit-text-stroke-width': '1px',
}))
</script>

<template>
  <section class="container mx-auto p-2">
    <h1 class="text-center font-extrabold text-5xl mb-2" :style="outlinedTextStyle">PROJECTS</h1>
    <projects-list />
  </section>
</template>