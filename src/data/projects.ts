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
      ],
    },
  },
  {
    id: 'proj-3',
    title: 'Conversational BI',
    description:
      'Engineering the conversational intelligence layer: Translating complex enterprise datasets into intuitive, natural-language insights via an NLP-powered semantic chatbot.',
    image: '/images/projects/nlp-semantic.jpg',
    technologies: ['Databricks', 'Python', 'NLP', 'LLM', 'Genie', 'SQL'],
    visual: 'conversational-bi',
    detail: {
      headline: 'Conversational BI',
      sections: [
        {
          title: 'The Challenge',
          content: 'Even the most powerful dashboards have a "usability ceiling." Stakeholders often struggle to find exactly the right filter or slice of data they need, leading to an endless cycle of ad-hoc requests sent to the data team. The challenge was to democratize access to our data—moving away from "navigating a dashboard" to simply "asking a question."',
        },
        {
          title: 'The Solution: The Intelligent Semantic Layer',
          content: 'I architected and deployed an NLP-powered semantic layer that serves as the "brain" for our analytics suite. By mapping our underlying data models in Databricks to a conversational interface, I created an environment where non-technical users can interact with complex financial metrics using plain English.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Semantic Modeling — I designed a structured metadata layer that abstracts complex SQL joins and technical schema names into business-friendly terminology (e.g., mapping rev_adj_amt_v2 to "Revenue Adjustment").',
            'The "Genie" Chatbot Integration — I implemented a conversational interface that interprets natural language, translates intent into structured queries, and returns accurate, visualized answers in real-time.',
            'Context-Aware Architecture — I engineered the layer to maintain context during multi-turn conversations, allowing users to drill down or pivot (e.g., "Show me automations for last month," followed by "Now by Payer") without restating the parameters.',
            'AI-Augmented Prompting — By utilizing Large Language Models to interpret user intent, I ensured that the system could handle ambiguous queries and provide the most relevant data cuts automatically.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Self-Service at Scale — Significantly reduced the volume of ad-hoc data requests, allowing the data team to focus on high-impact infrastructure projects rather than manual report generation.',
            'Democratized Insights — Empowered non-technical leadership to extract their own insights, leading to a dramatic increase in monthly active users on the analytics platform.',
            'Reduced Time-to-Insight — Users moved from "searching for a dashboard" to "receiving an answer" in seconds, drastically speeding up decision-making for our clinical and financial partners.',
          ],
        },
      ],
    },
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
    title: 'The Data Integrity Gateway',
    description:
      'Engineering a \'Zero-Touch\' Data Integrity Gateway: Automating end-to-end validation, error-coding, and client feedback loops to reclaim 30% of daily operational bandwidth.',
    image: '/images/projects/pipeline-automation.jpg',
    technologies: ['Python', 'Jenkins', 'AWS S3', 'SFTP', 'PostgreSQL'],
    visual: 'data-integrity',
    detail: {
      headline: 'The Data Integrity Gateway',
      sections: [
        {
          title: 'The Challenge',
          content: 'As our enterprise data volume scaled, our ingestion process became a high-risk bottleneck. We were receiving 8+ mission-critical files daily that required a rigorous four-step manual process: integrity checks, receipt acknowledgement, error reporting, and final deployment. This "human-in-the-loop" model consumed half of every workday, creating a constant "catch-up" cycle for the team and delaying critical production updates.',
        },
        {
          title: 'The Solution: A Code-First Validation Engine',
          content: 'I engineered a fully automated, programmatic "Gatekeeper" using Python and Jenkins. This system transformed our manual checklist into a resilient, production-grade pipeline that handles the entire file lifecycle—from the moment data hits our servers to its final deployment.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Programmatic Field-Level Validation — I developed a Python-based validation engine that audits every column of inbound files against a strict, predefined set of restrictions.',
            'Standardized Error Codification — To eliminate ambiguity, I designed a custom error-tracking framework. If a field deviates from the standard, the script automatically categorizes the failure into a CAV (Conditional Attribute Validation) manifest, attaching a specific error code for every type of anomaly.',
            'Automated Client Feedback Loops — I architected a "hands-off" response system. The pipeline automatically generates Receipt Acknowledgements and Error Response files and pushes them directly to the client\'s SFTP bucket.',
            'Intelligent Pipeline Orchestration — I built a multi-stage Jenkins workflow that sequences the entire process. The pipeline is designed for "Silent Success"—it runs fully through to deployment overnight, only raising a review flag and halting if a critical validation check fails.',
          ],
        },
        {
          title: 'The Operational Impact',
          content: '',
          bullets: [
            'Reclaimed 50% of Daily Bandwidth — By automating the 4-hour morning manual "grind," I enabled the team to walk into a "Clean Slate" every day, shifting our focus from data cleaning to high-level architecture.',
            'Zero-Latency Client Reporting — Our enterprise partners moved from waiting days for feedback to receiving automated error manifests in minutes, significantly accelerating the data correction cycle.',
            'Industrial-Grade Scalability — The system provided a consistent, rigorous standard for all inbound data, ensuring that our production environment remained protected from schema drift and data corruption as our client base grew.',
          ],
        },
      ],
    },
  },
]
