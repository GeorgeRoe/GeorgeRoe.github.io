<script setup lang="ts">
import { Technology } from '~/types/technology';
import { technologies } from '~/data/technologies'
import { GUILT_ASCII_LOGO } from '~/data/guilt';
import { useTheme } from '~/composables/useTheme';
import { Palette } from '~/types/palette';
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

const rustExampleSlides = [ 1, 3, 9, 21 ]
const rustSlideIterator = ref(0)
onMounted(() => {
  setInterval(() => {
    rustSlideIterator.value = rustSlideIterator.value % rustExampleSlides.length + 1
  }, 4000)
})
</script>

<template>
  <section class="pb-6 pt-16">
    <name-carousel />
  </section>
  <section class="container mx-auto px-12 grid items-center justify-items-stretch">
    <hr class="col-start-1 row-start-1" :style="{ borderColor: theme(Palette.Bg2) }" />
    <div class="col-start-1 row-start-1 z-10 text-center flex items-center justify-around">
      <a href="https://github.com/GeorgeRoe/" target="_blank" rel="noopener noreferrer" :style="{ backgroundColor: theme(Palette.Bg0) }" class="p-2">
        <icon-github class="h-6 aspect-square" :style="{ fill: theme(Palette.Text) }" />
      </a>
      <a href="https://www.linkedin.com/in/georgesroe" target="_blank" rel="noopener noreferrer" :style="{ backgroundColor: theme(Palette.Bg0) }" class="p-2">
        <icon-linkedin class="h-8 aspect-square" :style="{ fill: theme(Palette.Text) }" />
      </a>
    </div>
  </section>
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
      <project-article title="MMU Rust Guest Lecture" info="A guest lecture I delivered to 3rd year undergraduate students at Manchester Metropolitan University about the benefits of Rust over traditional languages.">
        <!-- <div class="grid grid-cols-1">
          <iframe
            v-for="(slide, index) in rustExampleSlides"
            :key="slide"
            :src="`https://georgeroe.github.io/rust-mmu-guest-lecture/${slide}`"
            class="w-full aspect-video transition-opacity duration-1000 col-start-1 row-start-1"
            :style="{
              opacity: index === rustSlideIterator ? 1 : 0
            }"
          ></iframe>
        </div> -->
        <div class="pt-2">
          <icon-man-met-uni class="w-full px-4 mx-auto fill-white" />
          <div class="flex justify-center items-center h-20">
            <icon-ferris-the-crab class="h-32 mx-auto" />
          </div>
        </div>
      </project-article>
    </div>
    <a>See All Projects</a>
  </section>
  <section class="container mx-auto px-2">
    <h2 class="text-center font-extrabold text-4xl" :style="outlinedTextStyle">EXPERIENCE</h2>
    <timeline :items="timelineItems" />
  </section>
</template>