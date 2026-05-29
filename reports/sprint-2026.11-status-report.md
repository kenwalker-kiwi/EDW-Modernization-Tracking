# EDW Modernization — Sprint 26.11 Status Report

**Sprint:** EAC-2026.11
**Dates:** May 13 – May 26, 2026
**Sprint Status:** Closed
**Overall Status:** 🟢 Green — On Track
**Report Date:** 2026-05-29

---

## Executive Summary

Overall EDW Modernization projects are **Green and on track**. Sprint 26.11 continued momentum across all five migration tracks, with significant progress in Finance reporting, Dotcom Analytics, and Sales Data Unification. Vendor evaluation meetings for EDW migration accelerators (Agentic AI) continued with Bayone, EPAM, Xebia, and Databricks. The Metric Views + Excel Add-in solution for SSAS cube replacement was validated as a viable interim path for Excel power users.

---

## Active Jira Items

| Key | Summary | Status | Assignee |
|-----|---------|--------|----------|
| EAC-4249 | Continue to work on the EDW modernization | In Progress | Maher Burhan |
| EAC-2623 | Cognos reporting platform tech-debt transition strategy | In Progress | Alok Gupta |
| EAC-2442 | Sales Data Unification | In Progress | Naresh Chander |
| ONE-1466 | EDW Enhancement to Modern Architecture (Gift Card, BI, Promo Reports) | In Progress | Robert Nolin |
| ONE-1543 | Finance Data and Reporting Enhancement | In Progress | Unassigned |
| ONE-739 | AIQ Reports Migration to ThoughtSpot Pilot | In Progress | Courtney Lunka |
| ERA-535 | EDW Enhancement to Modern Architecture — Discovery | In Progress | Unassigned |
| CLDENG-7185 | [ERA Pod] MigVisor VM setup for EDW→Databricks migration | Open | Mervin Joseph |

---

## Initiative Status Details

### 1. EDW Modernization Core (EAC-4249)
**Status:** 🟢 In Progress | **PdM Status:** 🔵 Build

- Semantic layer for Supply Chain — ongoing
- Sales/Tax cube enhancements — ongoing
- Vendor evaluation meetings for migration accelerators (Agentic AI): Bayone, EPAM, Xebia, Databricks
- Metric Views in Databricks replicate SSAS cube dimensions/measures
- Databricks Excel Add-in enables PivotTables on Metric Views for Excel power users
- **Note:** Excel Add-in does not fully match SSAS cube capabilities (no dynamic filtering or hierarchical multi-level filtering)

### 2. EDW Enhancement to Modern Architecture — Gift Card, BI, Promo Reports (ONE-1466)
**Status:** 🟢 On Track | **PdM Status:** 🔵 Planning

| Workstream | Status |
|------------|--------|
| Small Promos — Analysis & Mapping | ✅ Complete |
| Small Promos — DP Dev | ✅ Complete |
| Major Promos — Analysis & Mapping | 🔜 June start |
| Tax Cube POC — Analysis & Mapping | ✅ Complete |
| Tax Cube POC — DP Dev | ✅ Complete |
| Tax Cube POC — Business Demo | Pending |
| IO Grid Cube | Discovery in progress |
| Store Reports | Discovery in progress |

### 3. Finance Data and Reporting Enhancement (ONE-1543)
**Status:** 🟢 On Track | **PdM Status:** 🔵 Build

**Phase 1 — 17 Reports:**
| Step | Progress |
|------|----------|
| Analysis & Mapping | 17/17 ✅ |
| DP Build | 17/17 ✅ |
| Cognos Build | 17/17 ✅ |
| QA | 16/17 |

**Phase 2 — 11 Reports:**
| Step | Progress |
|------|----------|
| Analysis & Mapping | 11/11 ✅ |
| DP Build | 11/11 ✅ |
| Cognos Dev | 9/11 |
| Dev & QA | 9/11 |

### 4. Vendor Best Seller, Dotcom Analytics, Order Merge (Track 2)
**Status:** 🟢 On Track | **PdM Status:** 🔵 Build

**Dotcom Analytics — 9 Reports:**
| Step | Progress |
|------|----------|
| Analysis & Mapping | 9/9 ✅ |
| DP Build | 6/9 |
| Cognos Dev | 5/9 |
| Launch & Stabilization | 4 reports |

**Order Merge — 2 Reports:**
- Build Complete ✅
- 2 reports in Launch & Stabilization
- 10 legacy reports to be decommissioned — ✅ Completed

**Vendor Best Seller — 7 Reports:**
- Sprint 26.10: Cognos Logic Extraction completed for all 7 reports ✅
- Sprint 26.11: EDW Upstream Logic Extraction — in progress

### 5. Sales Data Unification (EAC-2442)
**Status:** 🟢 On Track

**Target Architecture:** DP → Cognos (interim) → DP → ThoughtSpot (final)

| Workstream | Sprint 26.11 Status |
|------------|---------------------|
| BI Points — Aggregation Table (1 table) | In progress, release in .11 |
| AIQ (3 tables) | Release in .11 |

### 6. Cognos Reporting Platform Transition Strategy (EAC-2623)
**Status:** 🟢 In Progress

- Domain roadmap and architecture vision in development

### 7. AIQ Reports Migration to ThoughtSpot (ONE-739)
**Status:** 🟢 In Progress

- Pilot testing with selected stores ongoing
- Objective: Confirm ThoughtSpot can match or improve AIQ (Tableau) user experience while reducing licensing costs

---

## Enterprise Projects (Cross-Cutting)

| Project | Sprint 26.11 Status |
|---------|---------------------|
| **Midwest DC/ODC** | UAT in progress. Go-live: June 2026 |
| **SONE! Migration** | UAT completed. Historical Load completed. Parallel run in progress. Anaplan store_number changes targeted for .12 release |
| **Brand Portal — SMN Onsite** | Validations completed. Code in production ✅ |
| **Brand Portal — Canada Localization** | Analysis in progress. Deployment TBD |
| **Brand Portal — Brand Indexes** | Data validation complete. UAT. 2 Summary Tables created (DP, ThoughtSpot) |
| **Brand Portal — Athena Decommission** | Phase 1 Tables — not started |
| **Kendo Data Feed** | New development work beginning in .11 |
| **Tax Exemption** | DP Dev ✅, ThoughtSpot Dev ✅, QA ✅, Release in progress (.10) |

---

## Migration Tooling Update

| Tool | Status |
|------|--------|
| **Claude Code** | Active use for code generation from stored procedure DDLs, schema objects, and Metric Views from Cube exports. Token-based cost model. |
| **MigVisor (EPAM)** | VM provisioning requested (CLDENG-7185). Docker-based tool for EDW → Databricks migration assessment. Pending security review of Docker image. |
| **Databricks Lakebridge** | Under evaluation. Side-by-side comparison with Claude recommended. |

---

## Risks & Dependencies

| Initiative | Risk | Impact | Mitigation | ETA |
|-----------|------|--------|------------|-----|
| C3 Analytics | Store Credit Report not migrated to DP | CSC team depends on these reports | Budget approval needed | Pending confirmation |
| C3 Analytics | Daily 140 Status Order Report — order status mapping ATG→C3 needed | CSC team depends on these reports | Budget approval needed | Pending confirmation |
| C3 Analytics | NCR/IR Fraud Report not migrated to DP | CSC team depends on these reports | Budget approval needed | Pending confirmation |
| MigVisor Setup | VM provisioning and Docker security review pending | Delays EDW migration assessment | Track CLDENG-7185 | TBD |
| Excel/SSAS Parity | Metric Views + Excel Add-in doesn't match full SSAS functionality | Excel power user resistance to transition | Document gaps, explore workarounds for dynamic/hierarchical filtering | Ongoing |

---

## Sprint 26.12 Outlook (May 27 – Jun 9, 2026)

- Major Promos analysis & mapping kickoff (June)
- Vendor Best Seller EDW Upstream Logic Extraction completion
- Finance Phase 2 remaining Cognos Dev (2 reports)
- Dotcom Analytics continued DP and Cognos build
- SONE! Migration — Anaplan store_number changes deployment
- Midwest DC/ODC go-live preparation
- MigVisor VM provisioning follow-up
- Continue vendor evaluations for migration accelerators

---

## Key Links

- [Jira Board — Ent Arch Scrum](https://jira.sephora.com/secure/RapidBoard.jspa?rapidView=1405)
- [Confluence — EDW Pod Status Report](https://confluence.sephora.com/wiki/pages/viewpage.action?pageId=385882930)
- [Confluence — ERA POD Elevate KPIs (2026)](https://confluence.sephora.com/wiki/pages/viewpage.action?pageId=606375532)
- [Confluence — EDW Modernization Discovery Kickoff](https://confluence.sephora.com/wiki/pages/viewpage.action?pageId=596609151)
- [Confluence — EDW Modernization Strategy](https://confluence.sephora.com/wiki/spaces/EDW/pages/572393603/EDW+Modernization+Strategy)
