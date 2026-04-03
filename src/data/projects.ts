import type { ProjectItem } from '@/types'

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Tech Stack Modernization',
    description:
      'Transforming legacy reporting into a high-performance, self-service intelligence engine.',
    image: '/images/projects/bi-migration.jpg',
    technologies: ['Tableau', 'Databricks', 'PostgreSQL', 'SQL', 'C#', 'Dundas'],
    visual: 'tech-stack',
    detail: {
      headline: 'Scaling Certainty: A Full-Stack BI Infrastructure Modernization',
      sections: [
        {
          title: 'The Challenge',
          content: 'Our legacy analytics environment was a "maintenance-heavy" ecosystem built on Dundas BI. With four separate instances to manage, deployments were slow, and Row-Level Security (RLS) was a manual, bug-prone process. Furthermore, customer reporting relied on unencrypted Excel files sent via email — a method that was neither secure nor scalable for a growing enterprise.',
        },
        {
          title: 'The Solution: A Unified, Embedded Intelligence Engine',
          content: 'I led the migration of our entire dashboarding suite to Tableau, underpinned by a high-performance Databricks backend. This wasn\'t just a visualization change; it was a complete re-engineering of how we secure and deliver data.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Unified Instance Architecture — Consolidated four disparate environments into a single, unified Tableau instance. By implementing a structured folder hierarchy, we achieved significantly faster deployment cycles and eliminated the overhead of cross-instance maintenance.',
            'Automated Data Delivery Service — Replaced insecure email reporting with a scalable "Data-as-a-Service" pipeline. Used Databricks Jobs and Python scripting to generate extracts as views, systematically categorize them, and deliver them to S3/SFTP buckets at custom intervals.',
            'Secure Embedded Analytics — Implemented a seamless "Productized" feel by using iframes to embed Tableau dashboards directly into our web platform.',
            'Dynamic Access Layer — Engineered a sophisticated security bridge between our UI and Tableau. By passing user attributes from the application layer down to Tableau, we automated row-level filtering, ensuring stakeholders only see the data they are authorized to access.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Operational Velocity — Transitioned from manual, weekly report "pushes" to a fully automated, systematic delivery engine that scales with our customer base.',
            'Enhanced Security Posture — Eliminated the risk of unencrypted Excel attachments by moving all external reporting to secure SFTP/S3 endpoints and encrypted embedded views.',
            'Developer Efficiency — Reduced the "maintenance tax" of managing multiple BI environments, allowing the team to focus on building new, interactive analytical features rather than troubleshooting RLS bugs.',
            'Professional UX — Provided a "Single Source of Truth" within our own website, giving stakeholders clean, fresh, and interactive analytics without ever leaving the product.',
          ],
        },
        {
          title: 'The Bottom Line',
          content: 'By moving away from brittle, manual processes and embracing a modern, scriptable data stack, we transformed a legacy reporting burden into a secure, automated, and embedded product feature.',
        },
      ],
    },
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
