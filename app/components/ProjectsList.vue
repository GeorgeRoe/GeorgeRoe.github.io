<script setup lang="ts">
import { projects } from '~/data/projects';
import type { ProjectData } from '~/types/project';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const activeBreakpoint = breakpoints.active()
const show = computed(() => activeBreakpoint.value !== '')
const smAndLarger = breakpoints.greaterOrEqual('sm') // sm and larger

const arrangement = computed<ProjectData[][]>(() => {
  const cols: ProjectData[][] = []

  const numCols = smAndLarger.value ? 2 : 1
  for (let i = 0; i < numCols; i++) {
    cols.push([])
  }

  Object.values(projects).forEach((project, index) => {
    (cols[index % numCols] as ProjectData[]).push(project)
  })

  return cols
})
</script>

<template>
  <div v-if="show" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div
      v-for="projects in arrangement"
      class="flex flex-col gap-2"
    >
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
  </div>
</template>