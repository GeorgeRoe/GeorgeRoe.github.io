<script setup lang="ts">
import { Palette } from '~/types/palette';
</script>

<template>
  <section class="container mx-auto p-2">
    <h1 class="text-center font-extrabold text-5xl mb-2 text-background-1" :style="textOutline(Palette.DimmedText, 1)">PROJECTS</h1>
    <projects-list />
  </section>
</template>