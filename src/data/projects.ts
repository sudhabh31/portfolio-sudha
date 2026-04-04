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
      'Architected the \'Avoided Loss\' framework to quantify a $100K+ quarterly ROI for AI-automated claims.',
    image: '/images/projects/denial-analytics.jpg',
    technologies: ['Tableau', 'SQL', 'Databricks', 'Python'],
    visual: 'denial-analytics',
    detail: {
      headline: 'The "What If" Engine: Quantifying Avoided Denials in AI Automation',
      sections: [
        {
          title: 'The Challenge',
          content: 'Our AI automation was processing thousands of claims, but we lacked a definitive way to answer the customer\'s most important question: "How much money did this actually save me?" Because the AI prevents errors before they happen, the value was effectively invisible. To prove the ROI, I had to engineer a framework that could quantify "The Value of the Avoided Mistake."',
        },
        {
          title: 'The Solution: A Counterfactual Value Framework',
          content: 'I led the analytical design of a "Manual vs. Automated" impact model. Instead of just tracking what happened, I built the logic to calculate Total Avoided Denials—identifying the specific cases that would have been denied under manual processing rules but were successfully cleared by our automation.',
        },
        {
          title: 'The Analytical Deep Dive',
          content: '',
          bullets: [
            'Defining the "Manual Baseline" — I collaborated with subject matter experts to codify the specific denial triggers—such as coding errors or missing documentation—that consistently occur in manual workflows.',
            'The Avoidance Logic — I developed the calculation framework to tag automated cases against these manual risk profiles. This allowed us to generate a "Potential Denial" metric, showing exactly where the AI stepped in to prevent a financial hit.',
            'Multi-Dimensional Data Cuts — To make the data actionable for hospital leadership, I architected the dashboard to slice these savings by Denial Categories (coding-specific vs. administrative captures), Time-to-Post Velocity (automated instant posting vs. manual lag), and Granular Segments (Payer, Provider, and Hospital Location levels).',
          ],
        },
        {
          title: 'The Impact: Proving a $100K+ Quarterly ROI',
          content: '',
          bullets: [
            'Quantified the "Invisible" — For the first time, customers could see a documented $100K+ in quarterly savings that would have otherwise been lost to manual processing errors.',
            'Strategic Alignment — I presented these findings to executive stakeholders, shifting the focus from technical "automation rates" to bottom-line "capital protection."',
            'Customer Empowerment — The dashboard allowed customers to see exactly which "Denial Reasons" were being mitigated by the AI, giving them total transparency into the health of their revenue cycle.',
          ],
        },
        {
          title: 'The Bottom Line',
          content: 'The complexity of this project wasn\'t in the code, but in the logic. By engineering a framework to quantify the "What If," I turned raw claim data into a powerful narrative of financial protection and AI-driven ROI.',
        },
      ],
    },
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
