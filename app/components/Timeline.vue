<script setup lang="ts">
import type { TimelineItem } from '~/types/timelineItem';

interface TimelineProps {
  items: Array<TimelineItem>
}

defineProps<TimelineProps>();
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex gap-2 p-1"
    >
      <div class="flex flex-col items-center gap-2">
        <div
          class="aspect-square w-4 rounded-full bg-blue"
        />
        <div
          v-if="index < items.length - 1"
          class="border-l flex-1 border-blue"
        />
      </div>
      <div>
        <div class="text-sm/4 text-text-dimmed">
          {{ item.date }}
        </div>
        <h3 class="text-lg font-bold">
          {{ item.title }}
        </h3>
        <p :class="index < items.length - 1 ? 'mb-4' : ''">
          {{ item.description }}
        </p>
      </div>
    </li>
  </ul>
</template>