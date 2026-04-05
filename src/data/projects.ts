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
          content: 'The legacy analytics environment was built on Dundas BI across four separate instances. Deployments were slow, Row-Level Security was a manual and bug-prone process, and customer reporting relied on unencrypted Excel files sent via email—neither secure nor scalable for a growing enterprise.',
        },
        {
          title: 'The Solution',
          content: 'The entire dashboarding suite was migrated to Tableau, underpinned by a high-performance Databricks backend. This went beyond a visualization swap—it was a complete re-engineering of how data is secured and delivered.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Unified Architecture — Four disparate environments were consolidated into a single Tableau instance with a structured folder hierarchy, drastically accelerating deployment cycles and eliminating cross-instance maintenance overhead.',
            'Automated Data Delivery — Insecure email reporting was replaced with a scalable delivery pipeline. Databricks Jobs and Python scripting generate extracts as views, categorize them, and push them to S3/SFTP buckets at custom intervals.',
            'Embedded Analytics — Tableau dashboards were embedded directly into the web platform via iframes, delivering a seamless, product-native analytics experience.',
            'Dynamic Access Layer — A security bridge between the application tier and Tableau passes user attributes downstream to automate row-level filtering, ensuring stakeholders only see the data they are authorized to access.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Operational Velocity — Manual weekly report pushes were replaced with a fully automated delivery engine that scales with the customer base.',
            'Security Posture — All external reporting moved to secure SFTP/S3 endpoints and encrypted embedded views, eliminating unencrypted Excel attachments entirely.',
            'Developer Efficiency — Reduced the maintenance burden of managing multiple BI environments, freeing the team to build new analytical features instead of troubleshooting RLS bugs.',
            'Professional UX — Stakeholders now access a single source of truth within the product—clean, fresh, and interactive analytics without ever leaving the platform.',
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
      headline: 'The Counterfactual Engine: Quantifying Avoided Denials in AI Automation',
      sections: [
        {
          title: 'The Challenge',
          content: 'The AI automation was processing thousands of claims, but there was no definitive way to answer the customer\'s most important question: "How much money did this actually save me?" Because the AI prevents errors before they happen, the value was effectively invisible. Proving ROI required a framework that could quantify the value of the avoided mistake.',
        },
        {
          title: 'The Solution',
          content: 'A counterfactual impact model was designed around a Manual vs. Automated comparison. Rather than just tracking what happened, the logic calculates Total Avoided Denials—identifying cases that would have been denied under manual processing rules but were successfully cleared by automation.',
        },
        {
          title: 'The Analytical Deep Dive',
          content: '',
          bullets: [
            'Manual Baseline Definition — Specific denial triggers—coding errors, missing documentation—were codified in collaboration with subject matter experts to establish what consistently fails in manual workflows.',
            'Avoidance Logic — A calculation framework tags automated cases against manual risk profiles, generating a Potential Denial metric that pinpoints exactly where the AI prevented a financial hit.',
            'Multi-Dimensional Cuts — The dashboard slices savings by Denial Categories (coding-specific vs. administrative), Time-to-Post Velocity (automated instant posting vs. manual lag), and Granular Segments (Payer, Provider, and Hospital Location levels).',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Quantified the Invisible — Customers could see a documented $100K+ in quarterly savings that would have otherwise been lost to manual processing errors.',
            'Strategic Alignment — Findings were presented to executive stakeholders, shifting the conversation from technical automation rates to bottom-line capital protection.',
            'Customer Transparency — The dashboard surfaces exactly which denial reasons are being mitigated by the AI, giving customers full visibility into the health of their revenue cycle.',
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
          content: 'Even the most powerful dashboards have a usability ceiling. Stakeholders struggle to find exactly the right filter or data slice, leading to an endless cycle of ad-hoc requests to the data team. The goal was to move away from navigating a dashboard to simply asking a question.',
        },
        {
          title: 'The Solution',
          content: 'An NLP-powered semantic layer was built on top of the Databricks data models, mapping complex schemas to a conversational interface. Non-technical users can now interact with financial metrics using plain English.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Semantic Modeling — A structured metadata layer abstracts complex SQL joins and technical schema names into business-friendly terminology (e.g., mapping rev_adj_amt_v2 to "Revenue Adjustment").',
            'Chatbot Integration — The conversational interface interprets natural language, translates intent into structured queries, and returns accurate, visualized answers in real time.',
            'Context-Aware Architecture — The layer maintains context across multi-turn conversations, allowing users to drill down or pivot (e.g., "Show me automations for last month," followed by "Now by Payer") without restating parameters.',
            'LLM-Augmented Prompting — Large Language Models interpret user intent, handling ambiguous queries and surfacing the most relevant data cuts automatically.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Self-Service at Scale — Ad-hoc data requests dropped significantly, freeing the data team to focus on high-impact infrastructure rather than manual report generation.',
            'Democratized Insights — Non-technical leadership could extract their own insights, driving a sharp increase in monthly active users on the analytics platform.',
            'Reduced Time-to-Insight — Users went from searching for a dashboard to receiving an answer in seconds, accelerating decision-making for clinical and financial partners.',
          ],
        },
      ],
    },
  },
  {
    id: 'proj-4',
    title: 'The Collaborative Innovation Lab',
    description:
      'Co-architecting an AI-augmented Rapid Innovation Lab: Collaborating on a Python/React stack to compress development cycles and deliver weekly feature updates to internal stakeholders.',
    image: '/images/projects/ai-workflow.jpg',
    technologies: ['Python', 'React', 'D3.js', 'Cursor', 'Claude', 'Databricks'],
    visual: 'innovation-lab',
    detail: {
      headline: 'The Collaborative Innovation Lab',
      sections: [
        {
          title: 'The Challenge',
          content:
            'The standard BI infrastructure was built for stability, but it couldn\'t keep pace with rapid, exploratory questions from internal stakeholders. A small specialized squad set out to build a high-fidelity development environment where complex D3 visualizations and data features could be prototyped faster than traditional BI tools allow.',
        },
        {
          title: 'The Solution',
          content:
            'A code-first development workflow was architected around Cursor (AI-native IDE) with a Python/FastAPI backend and a React/D3 frontend. The result was a rapid prototyping engine powered by Claude and connected directly to the Databricks lakehouse.',
        },
        {
          title: 'The Strategy',
          content: '',
          bullets: [
            'SME-Led Validation — The accuracy layer was the anchor. While AI scaffolded React components and D3 UI elements, the specific SQL checks and numeric breakpoints were engineered to ensure every visualization matched production-grade enterprise data.',
            'AI-Augmented Development — Cursor served as the primary environment with Claude handling boilerplate, freeing the team to focus on high-level architecture and complex data logic rather than manual syntax.',
            'Live-Reload Workflow — Uvicorn and npm-dev ran directly within the IDE, establishing a real-time feedback loop where Databricks query results reflected in the frontend in seconds.',
            'Direct Lakehouse Integration — A seamless connection between the local dev environment and Databricks enabled validation against production-scale data throughout every sprint.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Weekly Delivery Cadence — The team moved from a sluggish request model to delivering substantial, feature-rich updates every week.',
            'Product-Ready Demos — Leadership received interactive proof-of-concepts with a level of detail previously out of reach for internal projects.',
            'SME-Verified Accuracy — AI-augmented speed never came at the cost of the clinical or financial accuracy required for healthcare data.',
          ],
        },
      ],
    },
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
          content: 'As enterprise data volume scaled, the ingestion process became a high-risk bottleneck. 8+ mission-critical files arrived daily, each requiring a four-step manual process: integrity checks, receipt acknowledgement, error reporting, and final deployment. This consumed roughly 3 hours every morning, delaying production updates and keeping the team in a constant catch-up cycle.',
        },
        {
          title: 'The Solution',
          content: 'A fully automated validation engine was built on Python and Jenkins, transforming the manual checklist into a production-grade pipeline that handles the entire file lifecycle—from the moment data hits the server to its final deployment.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'Field-Level Validation — A Python-based engine audits every column of inbound files against a strict set of predefined constraints.',
            'Error Codification — When a field deviates from the standard, the script categorizes the failure into a CAV (Conditional Attribute Validation) manifest with a specific error code for every type of anomaly.',
            'Automated Client Feedback — The pipeline generates Receipt Acknowledgements and Error Response files and pushes them directly to the client\'s SFTP bucket with no manual intervention.',
            'Pipeline Orchestration — A multi-stage Jenkins workflow sequences the entire process. The pipeline is designed for silent success—it runs through to deployment overnight, only raising a flag and halting on critical validation failures.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            'Reclaimed 3+ Hours Daily — The morning manual process was fully automated, letting the team start each day focused on high-level architecture instead of data cleaning.',
            'Zero-Latency Client Reporting — Enterprise partners went from waiting days for feedback to receiving automated error manifests in minutes, accelerating the data correction cycle significantly.',
            'Production-Grade Scalability — A consistent, rigorous validation standard protects the production environment from schema drift and data corruption as the client base grows.',
          ],
        },
      ],
    },
  },
  {
    id: 'proj-6',
    title: 'Predictive Dispatch Optimization',
    description:
      'Designed a ground-up ML framework to analyze call logs and web content, resulting in a predictive dispatch engine that identified $16.8M in potential savings.',
    image: '/images/projects/dispatch-optimization.jpg',
    technologies: ['R', 'SAS', 'Tableau', 'Excel/VBA', 'SQL', 'Python', 'Machine Learning'],
    visual: 'dispatch-optimization',
    detail: {
      headline: 'Predictive Dispatch Optimization',
      sections: [
        {
          title: 'The Challenge',
          content:
            'A Fortune 100 technology client had no mechanism to understand why in-warranty customers were calling for support instead of using digital self-service tools. With no process linking call intent to web content, the client faced high-liability warranty dispatch expenses and a surge in expensive technician site visits. The core question: how can call center interactions be optimized to minimize site visits and reduce warranty spend?',
        },
        {
          title: 'The Solution',
          content:
            'A new analytics engine was designed from scratch using Supervised Machine Learning and Topic Modeling. Millions of unstructured call logs were analyzed alongside customer-facing website content to identify digital gaps—areas where the website already had the answer, but customers still called.',
        },
        {
          title: 'The Engineering Strategy',
          content: '',
          bullets: [
            'ML-Driven Classification — A training dataset was built from statistically significant samples to develop a Topic Modeling algorithm in R, categorizing call intents at scale.',
            'Content Gap Analysis — Call categories were mapped against website FAQs and troubleshooting guides to pinpoint where digital self-service was failing or missing.',
            'Dispatch Optimization Logic — Calls that could be resolved digitally were flagged, preventing unnecessary truck rolls (site visits) and reducing dispatch spend.',
            'Performance Infrastructure — The framework was built on R, Tableau, and Excel/VBA, reducing analytics execution time from 18 hours to under 1 hour.',
          ],
        },
        {
          title: 'The Impact',
          content: '',
          bullets: [
            '$16.8M in Potential Savings — $6.3M in call cost reductions and $10.5M in dispatch expense optimizations identified.',
            '94% Faster Insights — Reporting lifecycle reduced from 18 hours to under 60 minutes, enabling daily tracking of operational impact.',
            'Liability Reduction — In-warranty dispatch spend dropped significantly, decreasing a major financial liability for the customer.',
          ],
        },
      ],
    },
  },
]
