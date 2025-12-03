<script setup lang="ts">
const show = defineModel<boolean>({ required: true })
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      v-if="show"
      @click.self="show = false"
    >
      <slot />
    </div>
  </Teleport>
</template>