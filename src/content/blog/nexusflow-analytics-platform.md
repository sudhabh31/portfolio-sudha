---
title: "NexusFlow Analytics: Building a Full-Stack SaaS Metrics Platform on Databricks"
date: "2026-04-06"
description: "How I built an end-to-end SaaS analytics platform with a medallion lakehouse, interactive D3.js dashboards, a What-If simulator, and an AI-powered chatbot — all running as a single Databricks App."
tags: ["databricks", "react", "d3", "ai", "data-engineering", "saas"]
---

# NexusFlow Analytics: Full-Stack SaaS Metrics Platform on Databricks

![NexusFlow Analytics Demo](/images/nexusflow/nexusflow-demo.gif)

Every SaaS company needs real-time visibility into MRR, churn, retention, and customer health. NexusFlow Analytics is my answer to that challenge -- a complete analytics platform built entirely within the Databricks ecosystem, from data pipeline to AI-powered chatbot.

## What I Built

A production-grade analytics application with seven interactive modules, 22 API endpoints, and a natural language query interface -- all deployed as a single Databricks App with no external infrastructure.

**Key metrics the platform tracks:**
- Monthly Recurring Revenue (MRR), ARR, and ARPU trends
- Customer churn and retention cohort analysis
- Marketing funnel performance and CAC by channel
- Customer health scoring with risk tier classification
- Geographic revenue distribution
- Data pipeline quality monitoring

## Architecture

The platform follows the **medallion lakehouse pattern** on Databricks Unity Catalog:

![NexusFlow Architecture](/images/nexusflow/architecture.svg)

- **Bronze** (8 tables) -- Raw ingestion of customer, subscription, usage, support, and marketing data spanning 24 months
- **Silver** (7 tables) -- Cleaned dimensions and facts with MRR movement classification, tenure calculation, and funnel stage mapping
- **Gold** (8 tables) -- Pre-computed KPIs optimized for sub-second dashboard queries: monthly summaries, MRR bridge, cohort retention, customer 360, and more

The frontend is a **React 18 + TypeScript** SPA with **D3.js** visualizations, served by a **FastAPI** backend that queries Gold-layer tables through the Databricks SQL Connector.

### Data Pipeline Flow

![Data Pipeline](/images/nexusflow/pipeline.svg)

## The Dashboard Experience

### Executive Insights
The landing page provides portfolio-level visibility. A health risk strip shows customer distribution across risk tiers with MRR at risk. KPI cards display MRR ($3.8M), ARR ($45.4M), active customers (1,625), churn rate (3.62%), and ARPU -- each with 6-month sparkline trends. An MRR bridge waterfall shows the monthly revenue movements, and a segment donut enables one-click cross-filtering.

### Analytics Deep Dive
A dense 6-column grid packs a cohort retention heatmap, a visual marketing funnel with inter-stage conversion rates, CAC comparison by acquisition channel, multi-line usage trends, and a sortable top customers table with CSV export.

### Customer Health
Focused on churn prevention -- a health distribution donut, support trend lines (ticket volume, resolution time, satisfaction), and a full-width at-risk customers table showing every account below the health threshold with usage trajectory data.

### What-If Simulator
Four interactive sliders control churn rate, new customer growth, expansion rate, and projection period. The MRR projection chart updates in real-time as parameters change, showing projected revenue with area fill, a current MRR reference line, and an animated endpoint. In the default scenario (5% churn, 10% growth, 2% expansion), MRR projects from $3.8M to $19.1M over 24 months -- a 407% increase.

### Data Quality Monitor
A full-viewport table monitoring pipeline health across all 23 tables in Bronze, Silver, and Gold layers. Each row shows row counts, null rates, duplicate rates, and a composite quality score.

### AI Assistant
A conversational interface powered by **Databricks AI/BI Genie**. Users ask questions in plain English -- "What is our current MRR?", "Which customers are at risk of churning?" -- and Genie generates SQL, executes it against the Gold-layer tables, and returns formatted results with suggested follow-up questions.

## Technical Highlights

**Viewport-fit layouts** -- Every module fills exactly the browser viewport using CSS Grid with explicit row/column templates, eliminating scroll and creating a dashboard-native feel.

**Shared component architecture** -- A `ChartTile` component with React.memo, lazy loading, and Suspense handles the common pattern of data fetching and chart rendering. A central tile registry configures all 21 tiles with metadata, endpoints, and formatting hints.

**D3.js chart system** -- A shared utility layer provides consistent chart setup, tooltip management, crosshair interactions, and animated transitions across line charts, bar charts, heatmaps, donut charts, and the funnel visualization.

**Global filter context** -- Date range, segment, and channel filters propagate through React Context to every data fetch, enabling cross-module filtering from any interactive element.

**AI/BI integration** -- The Genie chatbot required solving three problems: asynchronous API orchestration (start conversation, poll with exponential backoff, fetch results), service principal permissions for workspace access, and rich Unity Catalog metadata (table comments, column descriptions) so Genie generates accurate SQL.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Data Pipeline | Databricks Notebooks, PySpark, Unity Catalog |
| Backend | FastAPI, Databricks SQL Connector, Genie SDK |
| Frontend | React 18, TypeScript, Vite, D3.js |
| Styling | TailwindCSS, shadcn/ui |
| AI | Databricks AI/BI Genie (natural language to SQL) |
| Deployment | Databricks Apps (single free-tier slot) |

## Results

- **7 interactive modules** covering every SaaS metric vertical
- **22 REST endpoints** serving pre-computed Gold-layer data
- **23 monitored tables** across the full medallion architecture
- **Sub-second query times** thanks to pre-aggregated Gold tables
- **Natural language access** to all analytics via embedded AI chatbot
- **Zero external infrastructure** -- everything runs within a single Databricks workspace
