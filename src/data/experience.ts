import type { ExperienceItem } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior BI & Data Visualization Specialist, Team Lead',
    company: 'CodaMetrix Inc.',
    period: 'May 2022 — Present',
    description:
      'Senior BI Developer and eventual Team Lead who architected 15+ analytics products and spearheaded the technical migration from Dundas to Tableau as the team scaled. Developed specialized, high-impact suites—including a rule-tracking framework that transformed static data to improve automation rates by 3%—and engineered the logic to prove a $100K+ quarterly impact for customers by identifying denials averted by the automation engine. Mentored a growing team of analysts and engineers, leading recurring office hours and learning initiatives to drive organization-wide data literacy.',
    technologies: ['Tableau', 'Databricks', 'Python', 'D3.js', 'React', 'SQL', 'NLP', 'AI/BI', 'Databricks AI', 'Claude', 'AI'],
  },
  {
    id: 'exp-2',
    role: 'Data Analyst I → Senior Data Analyst',
    company: 'Teladoc Health (Livongo)',
    period: 'Aug 2018 — Apr 2022',
    description:
      'Promoted three times in 4 years, led the inbound data architecture for the company\'s largest enterprise implementation, managing 7 million covered lives across 20+ custom feeds. Engineered an automated "Zero-Touch" integrity gateway using Python and Jenkins to replace manual file-review processes. Developed Python-based test data generators for mocked clinical and claims data with zero PHI/PII exposure. Overhauled the onboarding program with specialized learning initiatives, mock data, and Sandbox tickets to ensure 12+ new hires were fully prepared for production-grade contribution.',
    technologies: ['Python', 'PostgreSQL', 'SQL', 'Jenkins', 'AWS S3', 'Metabase', 'SFTP'],
  },
  {
    id: 'exp-3',
    role: 'Data Analyst',
    company: 'Facebook Advertising Solutions (Spectraforce)',
    period: 'Jun 2015 — Nov 2015',
    description:
      'Built automated KPI reporting pipelines in R and Excel/VBA to standardize performance benchmarking across high-spend enterprise accounts. Led a high-visibility, real-time sentiment analytics project for a major international diplomatic event, providing instant audience engagement insights during a high-stakes window. Delivered large-scale campaign optimizations that improved targeting precision and ROI for global brands.',
    technologies: ['R', 'Excel/VBA', 'SQL', 'Analytics'],
  },
  {
    id: 'exp-4',
    role: 'Data Analyst',
    company: 'MuSigma Business Solutions Inc.',
    period: 'Aug 2013 — Apr 2015',
    description:
      'As part of an analytics squad for a Fortune 100 tech client, engineered a Supervised Machine Learning process to automate fraud detection and dispatch by analyzing mountains of unstructured call logs. Built a training dataset from statistically significant samples to develop a Topic Modeling algorithm in R, which categorized millions of records to identify opportunities for diverting traffic to digital self-service tools. This optimization lowered call rates and reduced high-liability warranty dispatch spend, contributing to $16.8M in potential annual savings while cutting report execution time from 18 hours to under 60 minutes.',
    technologies: ['R', 'SAS', 'Tableau', 'Excel/VBA', 'SQL', 'Python', 'Machine Learning'],
  },
  {
    id: 'exp-5',
    role: 'Design Intern',
    company: 'Honeywell Automation Limited',
    period: 'Jul 2012 — Dec 2012',
    description:
      'Analyzed and synthesized output data from hundreds of thermal simulations for heating and cooling systems designed at the facility. Translated complex simulation results into actionable insights and presented findings to engineering teams, supporting design decisions for Honeywell\'s industrial automation product line.',
    technologies: ['AutoCAD', 'Excel', 'Engineering Design', 'Automation'],
  },
  {
    id: 'exp-6',
    role: 'Vocational Education Intern',
    company: 'GMR Varalakshmi Foundation',
    period: 'May 2010 — Aug 2010',
    description:
      'Contributed to a vocational education initiative, teaching English to electrical trade students and co-drafting technical course textbooks. Helped bridge language and literacy gaps to ensure students could engage with standardized training materials and pursue certification pathways.',
    technologies: ['Vocational Education', 'Technical Writing', 'Curriculum Development'],
  },
]
