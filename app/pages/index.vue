<script setup lang="ts">
import { Technology } from '~/types/technology';
import { technologies } from '~/data/technologies'
import { GUILT_ASCII_LOGO } from '~/data/guilt';
import { useTheme } from '~/composables/useTheme';
import { Palette } from '~/types/palette';
import { ThemeName } from '~/data/theme';
import type { StyleValue } from 'vue';
import type { TimelineItem } from '~/types/timelineItem';

const { theme, setTheme } = useTheme()

const multidisciplineArticles = [
  {
    title: 'Low Level',
    description: 'From my time at STFC, I have gained experience in low level programming. I have worked on optimising and parallelising scientific codes to run efficiently on distributed high performance computers.',
    technologies: [
      Technology.Rust,
      Technology.Cpp,
      Technology.Fortran,
      Technology.MPI
    ]
  },
  {
    title: 'Frontend',
    description: 'During my time as a full stack web developer I got the opportunity to support a variety of business systems using modern frontend toolilng.',
    technologies: [
      Technology.Vue,
      Technology.Nuxt,
      Technology.TailwindCSS,
      Technology.Typescript,
    ]
  },
  {
    title: 'Backend',
    description: 'I am experienced in a variety of backend technologies and am versed in the different methods to which they can be deployed, whether it be in the cloud, or in house.',
    technologies: [
      Technology.Docker,
      Technology.Kubernetes,
      Technology.Redis,
      Technology.MongoDB,
      Technology.SQL,
      Technology.Azure,
    ]
  },
  {
    title: 'Other',
    description: 'Throughout my time self teaching and attending university I have picked up several other languages.',
    technologies: [
      Technology.Git,
      Technology.Linux,
      Technology.CICD,
      Technology.Python,
      Technology.Java,
    ]
  }
]

const timelineItems: Array<TimelineItem> = [
  {
    date: "September 2024 - Present",
    title: "Software Engineer at STFC",
    description: "Working on optimising and parallelising scientific codes to run efficiently on distributed high performance computers.",
  },
  {
    date: "September 2023 - Present",
    title: "Digital and Technology Solutions Professional Degree Apprenticeship",
    description: "On track for a First-Class BSc (Hons) at Manchester Metropolitan University while maintaining full-time employment",
  },
  {
    date: "July 2023 - September 2024",
    title: "Full Stack Developer at 360 Systems Ltd",
    description: "Developed and maintained business systems using modern web technologies. Communicated with and presented to clients regularly.",
  },
  {
    date: "September 2021 - June 2023",
    title: "A Levels at Neston High School",
    description: "Completed A levels in Computer Science, Mathematics and Physics with grades A*, A*, A respectively.",
  }
]

const outlinedTextStyle = computed<StyleValue>(() => ({
  color: theme(Palette.Bg1),
  '-webkit-text-stroke-color': theme(Palette.DimmedText),
  '-webkit-text-stroke-width': '1px',
}))
</script>

<template>
  <button @click="setTheme(ThemeName.OneDarkDarker)">OneDark</button>
  <button @click="setTheme(ThemeName.HighContrast)">High Contrast</button>
  <section class="pb-12 pt-16">
    <name-carousel />
  </section>
  <hr class="mx-12" :style="{ borderColor: theme(Palette.Bg2) }" />
  <section class="container mx-auto px-2 py-6">
    <p>Hi, I am <span class="font-bold">George Roe</span>, a software engineer working at the <a href="https://www.ukri.org/councils/stfc/">Science and Technology Facilities Council</a>. <span class="font-bold">I enjoy improving others lives through technology and software.</span></p>
  </section>
  <section class="p-2">
    <h2 class="text-center font-extrabold text-4xl" :style="outlinedTextStyle">MULTIDISCIPLINE</h2>
    <div class="grid grid-cols-1 gap-2">
      <article
        v-for="article in multidisciplineArticles"
        class="border rounded-md py-1.5 px-2"
        :style="{ borderColor: theme(Palette.Bg2) }"
      >
        <h3 class="font-bold text-lg">{{ article.title }}</h3>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tech in article.technologies.map(t => technologies[t])"
            class="border rounded-sm px-1 text-sm"
            :style="{ borderColor: tech.color, color: tech.color }"
          >
            {{ tech.name }}
          </span>
        </div>
        <p>{{ article.description }}</p>
      </article>
    </div>
  </section>
  <section class="container mx-auto px-2 py-6">
    <h2 class="text-center font-extrabold text-4xl" :style="outlinedTextStyle">PROJECTS</h2>
    <div class="flex flex-col gap-2">
      <project-article title="Green Usage Impact Logging Tool" info="Command Line Interface to allow super computer users to track their carbon emissions.">
        <pre
          class="font-mono font-extrabold text-[2.8vw] my-2 mx-auto w-fit"
          :style="{ color: theme(Palette.Red) }"
        >{{ GUILT_ASCII_LOGO }}</pre>
      </project-article>
      <project-article title="Personal Website" info="The website you are currently on!">
        <p>Insert image here.</p>
      </project-article>
    </div>
    <a>See All Projects</a>
  </section>
  <section class="container mx-auto px-2">
    <h2 class="text-center font-extrabold text-4xl" :style="outlinedTextStyle">EXPERIENCE</h2>
    <timeline :items="timelineItems" />
  </section>
</template>