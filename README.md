# EDW Modernization Tracking

Tracking progress of the Enterprise Data Warehouse (EDW) Modernization initiative at Sephora.

## Overview

This repository tracks the planning, execution, and delivery of the EDW Modernization program — migrating from the legacy SQL Server EDW to the **Databricks Lakehouse Platform** using a phased approach: Query Federation → Native Delta Lake → ETL/ELT Code Migration.

## Current Sprint

**Sprint 26.11** (May 13–26, 2026) — **Closed** | Overall: **Green**

See [reports/sprint-2026.11-status-report.md](reports/sprint-2026.11-status-report.md) for full details.

## Structure

```
├── docs/           # Architecture decisions, design docs, strategy
├── reports/        # Sprint status reports, metrics
├── scripts/        # Automation and analysis scripts
├── config/         # Configuration and environment setup
└── migrations/     # Migration tracking and cutover plans
```

## Key Workstreams

| Workstream | Description | Status |
|------------|-------------|--------|
| Finance Data & Reporting | Phase 1 (17 reports) & Phase 2 (11 reports) migration | Build |
| EDW Enhancement (Gift Card, BI, Promo) | Gift Card, BI, Promo reports migration to DP | Planning/Build |
| Vendor Best Seller / Dotcom / Order Merge | Track 2 report migrations | Build |
| Sales Data Unification | DP → Cognos (interim) → ThoughtSpot (final) | In Progress |
| Cognos Platform Transition | Reporting platform tech-debt transition strategy | In Progress |
| AIQ Reports Migration | ThoughtSpot pilot for store reporting | In Progress |
| EDW Modernization Core | Semantic layers, cubes, migration accelerator evaluation | In Progress |

## Sprint Reports

| Sprint | Date Range | Report |
|--------|------------|--------|
| 26.11 | May 13–26, 2026 | [Status Report](reports/sprint-2026.11-status-report.md) |

## Key References

- [EDW Modernization Strategy](docs/edw-modernization-strategy.md)
- [Confluence — EDW Pod Status Report](https://confluence.sephora.com/wiki/pages/viewpage.action?pageId=385882930)
- [Confluence — ERA POD Elevate KPIs](https://confluence.sephora.com/wiki/pages/viewpage.action?pageId=606375532)
- [Jira Board — EAC](https://jira.sephora.com/secure/RapidBoard.jspa?rapidView=1405)
