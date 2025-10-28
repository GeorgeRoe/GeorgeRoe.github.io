<script setup lang="ts">
import { Technology } from '~/types/technology';
import { technologies } from '~/data/technologies'

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
</script>

<template>
  <section class="pb-12 pt-16">
    <name-carousel />
  </section>
  <hr class="border-neutral-800 mx-12" />
  <section class="container mx-auto px-2 py-6">
    <p>Hi, I am <span class="font-bold">George Roe</span>, a software engineer working at the <a href="https://www.ukri.org/councils/stfc/">Science and Technology Facilities Council</a>. <span class="font-bold">I enjoy improving others lives through technology and software.</span></p>
  </section>
  <section class="p-2">
    <h2 class="text-center font-extrabold text-4xl text-neutral-900 [-webkit-text-stroke:1px_#777]">MULTIDISCIPLINE</h2>
    <div class="grid grid-cols-1 gap-2">
      <article
        v-for="article in multidisciplineArticles"
        class="border border-neutral-800 rounded-md py-1.5 px-2"
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
</template>