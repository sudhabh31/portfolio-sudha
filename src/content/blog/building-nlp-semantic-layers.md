---
title: "Building an NLP Semantic Layer for Self-Service Analytics"
date: "2026-01-25"
description: "How I built a natural language interface on top of Databricks that lets non-technical users generate their own reports."
tags: ["nlp", "databricks", "analytics"]
---

# Building an NLP Semantic Layer for Self-Service Analytics

The most impactful analytics tool I've built isn't a dashboard — it's a chatbot. A natural language interface that lets non-technical users ask questions in plain English and get complete reports back.

## The Problem

Every BI team knows this cycle:

1. Business user needs a report
2. They submit a ticket to the BI team
3. BI analyst builds the query and visualization
4. Review cycle: "Can you add this filter? Can you break it down by..."
5. Repeat steps 3-4 until everyone's satisfied

This loop takes days. Multiply by 15+ requests per month, and your BI team is drowning in ad-hoc work.

## The Solution: NLP + Semantic Layer

The architecture has three layers:

### 1. Semantic Layer
A curated metadata layer that maps business concepts to database objects:

```python
semantic_map = {
    "denial rate": {
        "table": "claims_analytics",
        "measure": "COUNT(CASE WHEN denied THEN 1 END) / COUNT(*)",
        "dimensions": ["payer", "denial_reason", "provider"],
        "description": "Percentage of claims denied by payer"
    }
}
```

### 2. NLP Intent Parser
Takes natural language input and maps it to semantic concepts:
- *"Show me denial rates by payer for Q1"* → measure: denial_rate, dimension: payer, filter: date_quarter = Q1
- *"Which providers have the highest coding lag?"* → measure: avg_lag_days, dimension: provider, sort: desc

### 3. Query Generator & Renderer
Converts the parsed intent into SQL, executes against Databricks, and renders the results in a conversational format.

## What Worked

- **Start with a narrow domain** — we began with just denial analytics, not the entire data warehouse
- **Build a feedback loop** — when the chatbot couldn't answer, it logged the question for the BI team to review and add to the semantic layer
- **Keep the escape hatch** — users could always fall back to traditional dashboards for complex analysis

## The Impact

Non-technical users went from waiting days for reports to generating them in seconds. The BI team's ad-hoc request volume dropped significantly, freeing us to focus on strategic analytics products instead of one-off queries.

The lesson: sometimes the best dashboard is no dashboard at all.
