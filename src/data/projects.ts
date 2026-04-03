import type { ProjectItem } from '@/types'

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'BI Platform Migration',
    description:
      'Led end-to-end migration from Dundas (C# backend) to Tableau with row-level security and full SOC compliance. Re-architected every client-facing dashboard while simultaneously migrating the data warehouse from PostgreSQL to Databricks, unlocking scalable query performance across a rapidly growing data lake.',
    image: '/images/projects/bi-migration.jpg',
    technologies: ['Tableau', 'Databricks', 'PostgreSQL', 'SQL', 'C#'],
  },
  {
    id: 'proj-2',
    title: 'Denial Analytics Engine',
    description:
      'Built denial analytics dashboards that recovered $100K+ per quarter in averted payer denials, giving Revenue Cycle leaders line-of-sight into denial root causes and directly fueling customer renewal conversations with measurable ROI.',
    image: '/images/projects/denial-analytics.jpg',
    technologies: ['Tableau', 'SQL', 'Databricks', 'Python'],
  },
  {
    id: 'proj-3',
    title: 'NLP Semantic Layer',
    description:
      'Built an NLP-powered semantic layer in Databricks with a customized chatbot interface, enabling non-technical users to generate complete reports using natural language Q&A and reducing dependency on the BI team for routine analytics.',
    image: '/images/projects/nlp-semantic.jpg',
    technologies: ['Databricks', 'Python', 'NLP', 'RAG'],
  },
  {
    id: 'proj-4',
    title: 'AI-Augmented Dev Workflow',
    description:
      'Pioneered an AI-augmented development workflow using Cursor and Claude to deliver full-stack Databricks Apps (Python/React/D3.js), compressing delivery timelines from weeks to days. Authored living architecture documentation grounding AI-assisted development with company context.',
    image: '/images/projects/ai-workflow.jpg',
    technologies: ['Python', 'React', 'D3.js', 'Databricks Apps', 'AI'],
  },
  {
    id: 'proj-5',
    title: 'Data Pipeline Automation',
    description:
      'Designed end-to-end inbound file management pipelines across 20+ custom feeds from 8 enterprise clients at Teladoc Health. Built bulk QC automation, automated response file generation, and replaced manual processes that consumed half the day into single automated Jenkins jobs.',
    image: '/images/projects/pipeline-automation.jpg',
    technologies: ['Python', 'Jenkins', 'AWS S3', 'SFTP', 'PostgreSQL'],
  },
]
