import { Technology, type TechnologyData } from '~/types/technology'

export const technologies: Record<Technology, TechnologyData> = {
  [Technology.Rust]: {
    name: 'Rust',
    color: '#FF6F00'
  },
  [Technology.Cpp]: {
    name: 'C++',
    color: '#00599C'
  },
  [Technology.Fortran]: {
    name: 'Fortran',
    color: '#4D4DFF'
  },
  [Technology.MPI]: {
    name: 'MPI',
    color: '#8A8A8A'
  },
  [Technology.Vue]: {
    name: 'Vue',
    color: '#4FC08D'
  },
  [Technology.Nuxt]: {
    name: 'Nuxt',
    color: '#00C58E'
  },
  [Technology.TailwindCSS]: {
    name: 'TailwindCSS',
    color: '#38B2AC'
  },
  [Technology.Typescript]: {
    name: 'Typescript',
    color: '#3178C6'  
  },
  [Technology.Docker]: {
    name: 'Docker',
    color: '#2496ED'
  },
  [Technology.Kubernetes]: {
    name: 'Kubernetes',
    color: '#326CE5'
  },
  [Technology.Redis]: {
    name: 'Redis',
    color: '#DC382D'
  },
  [Technology.MongoDB]: {
    name: 'MongoDB',
    color: '#47A248'
  },
  [Technology.SQL]: {
    name: 'SQL',
    color: '#F29111'
  },
  [Technology.Azure]: {
    name: 'Azure',
    color: '#0089D6'
  },
  [Technology.Git]: {
    name: 'Git',
    color: '#F05032'
  },
  [Technology.Linux]: {
    name: 'Linux',
    color: '#FCC624'
  },
  [Technology.CICD]: {
    name: 'CI/CD',
    color: '#0052CC'
  },
  [Technology.Python]: {
    name: 'Python',
    color: '#3776AB'
  },
  [Technology.Java]: {
    name: 'Java',
    color: '#007396'
  }
}