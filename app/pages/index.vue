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
        v-for="article in [
          {
            title: 'Low Level',
            description: 'From my time at STFC, I have gained experience in low level programming. I have worked on optimising and parallelising scientific codes to run efficiently on distributed high performance computers.',
            technologies: [
              {
                name: 'rust',
                color: '#FF6F00'
              },
              {
                name: 'C++',
                color: '#00599C'
              },
              {
                name: 'Fortran',
                color: '#4D4DFF'
              },
              {
                name: 'MPI',
                color: '#8A8A8A'
              }
            ]
          },
          {
            title: 'Frontend',
            description: 'During my time as a full stack web developer I got the opportunity to support a variety of business systems using modern frontend toolilng.',
            technologies: [
              {
                name: 'Vue',
                color: '#4FC08D'
              },
              {
                name: 'Nuxt',
                color: '#00C58E'
              },
              {
                name: 'TailwindCSS',
                color: '#38B2AC'
              },
              {
                name: 'Typescript',
                color: '#3178C6'  
              }
            ]
          },
          {
            title: 'Backend',
            description: 'I am experienced in a variety of backend technologies and am versed in the different methods to which they can be deployed, whether it be in the cloud, or in house.',
            technologies: [
              {
                name: 'Docker',
                color: '#2496ED'
              },
              {
                name: 'Kubernetes',
                color: '#326CE5'
              },
              {
                name: 'Redis',
                color: '#DC382D'
              },
              {
                name: 'MongoDB',
                color: '#47A248'
              },
              {
                name: 'SQL',
                color: '#F29111'
              },
              {
                name: 'Azure',
                color: '#0089D6'
              }
            ]
          },
          {
            title: 'Other',
            description: 'Throughout my time self teaching and attending university I have picked up several other languages.',
            technologies: [
              {
                name: 'Git',
                color: '#F05032'
              },
              {
                name: 'Linux',
                color: '#FCC624'
              },
              {
                name: 'CI/CD',
                color: '#0052CC'
              },
              {
                name: 'Python',
                color: '#3776AB'
              },
              {
                name: 'Java',
                color: '#007396'
              }
            ]
          }
        ]"
        class="border border-neutral-800 rounded-md py-1.5 px-2"
      >
        <h3 class="font-bold text-lg">{{ article.title }}</h3>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tech in article.technologies"
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