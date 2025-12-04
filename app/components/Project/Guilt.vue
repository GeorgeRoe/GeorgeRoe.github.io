<script setup lang="ts">
import { GUILT_ASCII_LOGO } from '~/data/guilt';
import { useTheme } from '~/composables/useTheme';
import { Palette } from '~/types/palette';

const { theme } = useTheme()
</script>

<template>
  <pre
    class="font-mono font-extrabold text-[2.8vw] my-2 mx-auto w-fit"
    :style="{ color: theme(Palette.Red) }"
  >{{ GUILT_ASCII_LOGO }}</pre>
</template>