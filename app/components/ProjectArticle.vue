<script setup lang="ts">
interface ProjectArticleProps {
  title: string
  info: string
}

defineProps<ProjectArticleProps>()
</script>

<template>
  <article class="flex flex-col items-stretch border border-neutral-800 rounded-md">
    <div>
      <slot />
    </div>
    <h3 class="border-t border-b border-neutral-800 bg-neutral-900 text-center font-bold">{{ title }}</h3>
    <p>{{ info }}</p>
  </article>
</template>