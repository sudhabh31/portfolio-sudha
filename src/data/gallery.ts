import type { GalleryItem } from '@/types'

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'BI & Dashboard Design',
    description: 'Architecting 15+ customer-facing analytics products across Tableau, D3.js, Power BI, and QuickSight that drive executive decision-making.',
    image: '/images/gallery/bi-design.jpg',
    category: 'Visualization',
    bullets: [
      { label: 'Legacy-to-Modern Migration', text: 'Modernizing fragmented BI environments into unified, secure analytics ecosystems with automated access controls and embedded, self-service reporting.' },
      { label: 'Executive-Grade Visualization', text: 'High-fidelity, board-level dashboards across Tableau, Power BI, Metabase, Dundas, and custom D3.js/React builds that translate complex datasets into clear ROI narratives for C-suite decision-making.' },
    ],
  },
  {
    id: 'gal-2',
    title: 'Data Pipeline Engineering',
    description: 'End-to-end ETL pipeline delivery across AWS S3, Databricks, Redshift, and SFTP automation — processing millions of records reliably.',
    image: '/images/gallery/data-pipelines.jpg',
    category: 'Data',
    bullets: [
      { label: '"Zero-Touch" Automation', text: 'End-to-end Databricks and Jenkins pipeline automation that handles ingestion, field-level validation, error codification, and deployment with no manual intervention.' },
      { label: 'Scalable Infrastructure', text: 'High-throughput data flow across PostgreSQL, Redshift, S3, and Databricks, engineered to maintain query performance as volume scales.' },
    ],
  },
  {
    id: 'gal-3',
    title: 'AI & Automation',
    description: 'NLP semantic layers, RAG-powered chatbots, and AI-augmented development workflows that compress delivery from weeks to days.',
    image: '/images/gallery/ai-automation.jpg',
    category: 'AI',
    bullets: [
      { label: 'NLP Semantic Layers', text: 'Conversational BI interfaces on Databricks that let non-technical stakeholders query complex data models in plain English.' },
      { label: 'Predictive Operational Logic', text: 'Supervised ML and Topic Modeling applied to unstructured data for automated classification, pattern recognition, and operational optimization.' },
    ],
  },
  {
    id: 'gal-4',
    title: 'Healthcare & Complex Analytics',
    description: 'Revenue cycle management, denial analytics, medical coding automation — analytics solutions for healthcare AI that recover real revenue.',
    image: '/images/gallery/healthcare.jpg',
    category: 'Domain',
    bullets: [
      { label: 'Revenue Cycle Optimization', text: 'Analytical frameworks that surface revenue leakage, quantify automation impact, and translate operational data into measurable financial outcomes.' },
      { label: 'High-Compliance Architecture', text: 'Enterprise data environments built to SOC-2 and HIPAA standards, engineered to scale across millions of records without sacrificing analytical depth or security.' },
    ],
  },
  {
    id: 'gal-5',
    title: 'Strategic Data Architecture',
    description: 'Establishing foundational systems and cross-functional analytics engines that scale with the organization.',
    image: '/images/gallery/architecture.jpg',
    category: 'Architecture',
    bullets: [
      { label: 'Foundational System Design', text: '"Living Architecture" frameworks for growing organizations: version control, CI/CD pipelines, coding standards, and technical style guides from day one.' },
      { label: 'Cross-Functional Analytics Engines', text: 'Automated solutions spanning Finance, Sales, and Marketing — invoicing pipelines, pre-sales analytics, and customer segmentation at scale.' },
    ],
  },
  {
    id: 'gal-6',
    title: 'Team Leadership & Mentoring',
    description: 'Mentored 20+ analysts and engineers from orientation to full contribution. Led office hours, learning initiatives, and onboarding programs.',
    image: '/images/gallery/leadership.jpg',
    category: 'Leadership',
    bullets: [
      { label: 'Technical Onboarding Frameworks', text: 'Sandbox environments, mock datasets, and structured learning paths that compress ramp-up time for new analysts and engineers.' },
      { label: 'Player-Coach Leadership', text: 'Hands-on mentoring from orientation to full-stack contribution, with recurring Office Hours that drive organization-wide data literacy.' },
    ],
  },
]
