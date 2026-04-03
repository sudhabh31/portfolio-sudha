import type { ExperienceItem } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior BI & Data Visualization Specialist, Team Lead',
    company: 'CodaMetrix Inc.',
    period: 'May 2022 — Present',
    description:
      'Led end-to-end BI platform migration from Dundas to Tableau with row-level security and SOC compliance. Architected 15+ customer-facing analytics products that recovered $100K+ per quarter in averted payer denials. Pioneered AI-augmented development workflows and built an NLP-powered semantic layer in Databricks.',
    technologies: ['Tableau', 'Databricks', 'Python', 'D3.js', 'React', 'SQL', 'NLP'],
  },
  {
    id: 'exp-2',
    role: 'Senior Data Operations Analyst',
    company: 'Teladoc Health (Livongo)',
    period: 'Aug 2018 — Apr 2022',
    description:
      'Led the largest client implementation covering 7 million lives across 7 pilot programs. Designed end-to-end data pipelines across 20+ custom feeds from 8 enterprise clients. Built bulk QC automation and fraud detection dashboards, eliminating hours of manual review per file.',
    technologies: ['Python', 'PostgreSQL', 'Jenkins', 'AWS S3', 'Metabase', 'SFTP'],
  },
  {
    id: 'exp-3',
    role: 'Data Analyst',
    company: 'Facebook Advertising Solutions (Spectraforce)',
    period: 'Jun 2015 — Nov 2015',
    description:
      'Performed large-scale advertising analytics for enterprise clients, analyzing campaign performance, audience engagement, and target market composition. Built automated KPI reporting pipelines in R and Excel/VBA.',
    technologies: ['R', 'Excel/VBA', 'SQL', 'Analytics'],
  },
  {
    id: 'exp-4',
    role: 'Data Analyst',
    company: 'MuSigma Business Solutions Inc.',
    period: 'Aug 2013 — Apr 2015',
    description:
      'Built a real-time Fraud Detection Engine for a Fortune 100 technology client. Automated dispatch optimization frameworks delivering potential savings of $6.3M in call costs and $10.5M in dispatch expenses. Reduced analytics execution time from 18 hours to under 1 hour.',
    technologies: ['R', 'Tableau', 'Excel/VBA', 'SQL', 'Python'],
  },
  {
    id: 'exp-5',
    role: 'Design Intern',
    company: 'Honeywell Automation Limited',
    period: 'Jul 2012 — Dec 2012',
    description:
      'Engineering design internship supporting automation systems and industrial solutions.',
    technologies: ['Engineering Design', 'Automation'],
  },
]
