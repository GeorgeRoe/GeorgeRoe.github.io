<script setup lang="ts">
import { Palette } from '~/types/palette';

interface ProjectArticleProps {
  title: string
  info: string
  link: string
}

defineProps<ProjectArticleProps>()

const { theme } = useTheme()
</script>

<template>
  <article
    class="flex flex-col items-stretch border rounded-md overflow-hidden"
    :style="{ borderColor: theme(Palette.Bg2) }"
  >
    <div class="overflow-hidden">
      <slot />
    </div>
    <h3
      class="border-t border-b text-center font-bold"
      :style="{
        backgroundColor: theme(Palette.Bg1),
        borderColor: theme(Palette.Bg2),
      }"
    >
      {{ title }}
    </h3>
    <p class="px-2 py-1">{{ info }}</p>
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="underline px-2"
      :style="{ color: theme(Palette.DimmedText) }"
    >See more</a>
  </article>
</template>