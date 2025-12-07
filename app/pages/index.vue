<script setup lang="ts">
import { Technology } from '~/types/technology';
import { technologies } from '~/data/technologies'
import { Palette } from '~/types/palette';
import type { TimelineItem } from '~/types/timelineItem';

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
</script>

<template>
  <section class="pb-6 pt-16 max-w-screen-md mx-auto overflow-hidden">
    <name-carousel />
    <p
      class="text-center text-xl font-extrabold my-3"
    >
      Software Engineer
    </p>
  </section>
  <section class="container max-w-screen-md mx-auto px-12 grid items-center justify-items-stretch">
    <hr class="col-start-1 row-start-1 bg-background-2" />
    <div class="col-start-1 row-start-1 z-10 text-center flex items-center justify-around h-16">
      <a href="https://github.com/GeorgeRoe/" target="_blank" rel="noopener noreferrer" class="bg-background-0 p-2">
        <icon-github class="h-6 hover:h-12 transition-all aspect-square fill-text hover:fill-blue" />
      </a>
      <a href="https://www.linkedin.com/in/georgesroe" target="_blank" rel="noopener noreferrer" class="bg-background-0 p-0.5">
        <icon-linkedin class="h-8 hover:h-16 transition-all aspect-square fill-text hover:fill-blue" />
      </a>
    </div>
  </section>
  <section class="container max-w-screen-lg mx-auto px-4 pb-6 pt-2 text-center">
    <p>Hi, I am <span class="font-bold">George Roe</span>, a software engineer working at the <a href="https://www.ukri.org/councils/stfc/">Science and Technology Facilities Council</a>. <span class="font-bold">I enjoy improving others lives through technology and software.</span></p>
  </section>
  <section class="p-2">
    <h2 class="text-center font-extrabold text-4xl text-background-1" :style="textOutline(Palette.DimmedText, 1)">MULTIDISCIPLINE</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 container mx-auto">
      <article
        v-for="article in multidisciplineArticles"
        class="border border-background-2 rounded-md py-1.5 px-2"
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
  <section class="container mx-auto px-2 py-6 flex flex-col items-center">
    <h2 class="font-extrabold text-4xl text-background-1" :style="textOutline(Palette.DimmedText, 1)">PROJECTS</h2>
    <projects-list />
    <a href="/projects" class="underline px-2 mt-4">See All Projects</a>
  </section>
  <section class="container mx-auto px-2 max-w-screen-lg">
    <h2 class="text-center font-extrabold text-4xl text-background-1" :style="textOutline(Palette.DimmedText, 1)">EXPERIENCE</h2>
    <timeline :items="timelineItems" />
  </section>
</template>