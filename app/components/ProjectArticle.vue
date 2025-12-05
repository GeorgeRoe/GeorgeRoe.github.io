<script setup lang="ts">
interface ProjectArticleProps {
  title: string
  info: string
  link: string
}

defineProps<ProjectArticleProps>()
</script>

<template>
  <article
    class="flex flex-col items-stretch border rounded-md overflow-hidden border-background-2"
  >
    <div class="overflow-hidden">
      <slot />
    </div>
    <h3
      class="border-t border-b text-center font-bold bg-background-1 border-background-2"
    >
      {{ title }}
    </h3>
    <p class="px-2 py-1">{{ info }}</p>
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="underline px-2 text-text-dimmed"
    >See more</a>
  </article>
</template>