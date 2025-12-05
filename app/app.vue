<script setup lang="ts">
import { Palette } from './types/palette';

const themeStyle = useThemeStyle()
</script>

<template>
  <Html :style="themeStyle">
    <Body :style="{ background: `var(${cssVarName(Palette.Bg0)})` }">
      <div class="w-full font-sf-mono overflow-x-hidden relative bg-background-0 text-text">
        <nuxt-layout>
          <nuxt-page />
        </nuxt-layout>
      </div>
    </Body>
  </Html>
</template>