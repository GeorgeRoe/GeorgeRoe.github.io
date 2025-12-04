import { Project, type ProjectData } from '~/types/project'
import GuiltProject from '~/components/Project/Guilt.vue'
import RustMmuGuestLecture from '~/components/Project/RustMmuGuestLecture.vue'

export const projects: Record<Project, ProjectData> = {
  [Project.Guilt]: {
    name: "GUILT",
    component: GuiltProject,
    description: "Command Line Interface to allow super computer users to track their carbon emissions.",
    link: "https://github.com/GeorgeRoe/guilt",
  },
  [Project.RustMmuGuestLecture]: {
    name: "Rust MMU Guest Lecture",
    component: RustMmuGuestLecture,
    description: "A guest lecture I delivered to 3rd year undergraduate students at Manchester Metropolitan University about the benefits of Rust over traditional languages.",
    link: "https://GeorgeRoe.github.io/rust-mmu-guest-lecture"
  }
}
