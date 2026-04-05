export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  description: string
  logo?: string
}

export interface ProjectDetailSection {
  title: string
  content: string
  bullets?: string[]
}

export interface ProjectDetail {
  headline: string
  sections: ProjectDetailSection[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  detail?: ProjectDetail
  visual?: string
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  bullets?: { label: string; text: string }[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  readingTime: number
}
