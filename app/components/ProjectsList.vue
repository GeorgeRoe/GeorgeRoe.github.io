<script setup lang="ts">
import { projects } from '~/data/projects';
</script>

<template>
  <div class="flex flex-col gap-2">
    <ProjectArticle
      v-for="project in projects"
      :key="project.name"
      :title="project.name"
      :info="project.description"
      :link="project.link"
    >
      <component :is="project.component" />
    </ProjectArticle>
  </div>
</template>