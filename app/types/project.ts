import type { Component } from "vue"

export enum Project {
  Guilt,
  RustMmuGuestLecture
}

export interface ProjectData {
  name: string
  component: Component
  description: string
  link: string
}