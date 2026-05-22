# EDW Modernization Strategy

> Source: [Confluence — EDW Modernization Strategy](https://confluence.sephora.com/wiki/spaces/EDW/pages/572393603/EDW+Modernization+Strategy)

## Migration Trends Toward Databricks Lakehouse

Sephora is migrating from its legacy SQL Server EDW to the **Databricks Lakehouse Platform** — a unified architecture combining data warehouse reliability with data lake scalability, supporting structured, semi-structured, and unstructured data for analytics, ML, and AI workloads.

## Migration Approach

Three major migration components:

1. **Data Warehouse Migration** — Databases, schemas, tables, and metadata
2. **Code Migration** — Stored procedures, SQL scripts, ETL/ELT pipelines, transformation logic (Bronze/Silver/Gold medallion layers)
3. **Serving Layer Migration** — BI/reporting layer (Cognos, Tableau, ThoughtSpot), dashboards, reports, and data extracts

## Phased Strategy

### Phase 1: Query Federation (Bridge)

Leverage **Databricks Lakehouse Federation** to create foreign catalogs that connect to existing SQL Server sources:

- Query data directly from source systems without immediate data movement
- Deliver a unified semantic layer without duplicating data
- Maintain data freshness — queries retrieve current data from source systems
- Simplify governance via Databricks Unity Catalog
- Existing reports point to federated catalogs

**Conceptual Data Flow:**
1. **Source Systems** — Legacy SQL Server EDW remains operational
2. **Federated Connections** — Foreign catalogs in Unity Catalog via JDBC/ODBC
3. **Databricks Lakehouse** — Central query and compute layer
4. **Serving Layer** — BI tools connect to Databricks; data appears unified
5. **Transition** — Migrate foreign catalogs to local catalogs (Delta Lake)

### Phase 2: Transition to Native Lakehouse (Delta Lake)

Gradually migrate from federated access to native Delta Lake storage:

1. **Assessment & Prioritization** — Identify high-value datasets by access frequency, freshness, and dependencies
2. **Incremental Data Migration** — ETL/ELT via Databricks Workflows, Spark Declarative Pipelines (SDP)
3. **Optimization & Validation** — Z-Ordering, partitioning, caching, automated data quality checks
4. **Cutover & Decommissioning** — Redirect BI workloads to Delta Lake, decommission legacy EDW

**Benefits:** Unified governance, improved query performance, simplified architecture, enablement of AI/ML on the Lakehouse.

### Phase 3: Migrate ETL/ELT Code and Scripts

Rebuild and modernize all pipeline logic within Databricks:

**Scope:**
- Stored procedures (PL/SQL, T-SQL)
- Standalone SQL scripts (batch transformations)
- ETL/ELT pipelines (Informatica, DataStage, SSIS)
- Transformation logic across medallion layers

**Approach:**
1. **Inventory & Assessment** — Catalog all jobs, scripts, stored procedures; classify by complexity/criticality
2. **Code Translation** — Translate to Databricks SQL, PySpark, or Delta Live Tables; replace procedural logic with distributed transformations
3. **Pipeline Orchestration** — Rebuild via Databricks Workflows, Airflow, or Azure Data Factory
4. **Validation & Testing** — Data reconciliation, automated validation, parallel runs
5. **Deployment & Optimization** — CI/CD framework, cluster autoscaling, monitoring

## Migration Tools

### Claude Code
- Understands and generates target output (code, YAML, Databricks objects, Metric Views)
- Successfully generated code from stored procedure DDLs, schema objects from DDL, and Metric Views from Cube exports
- Does not require access to Databricks or legacy systems
- Token-based cost model

### Databricks Lakebridge
- Secure, scalable integration layer for federated connectivity
- Supports Teradata, Oracle, SQL Server, Snowflake, Synapse
- Integrates with Unity Catalog for governance, access control, lineage
- Enables hybrid data access during transition

### Tool Comparison

| Aspect | Traditional ETL | Lakebridge | Claude |
|--------|----------------|------------|--------|
| Data Access During Migration | Requires full replication | Real-time via federation | No system access needed |
| Migration Speed | Slower (full rebuilds) | Faster (incremental) | Faster (incremental) |
| Business Continuity | Risk of downtime | Minimal disruption | Minimal disruption |
| Complexity | High (multiple tools) | Lower (unified platform) | Can use connectors, not required |
| Governance | Fragmented | Centralized (Unity Catalog) | N/A |
| Cost | Higher (duplicate infra) | Lower (federated queries) | Token-based |

### Tool Selection Guidance

Side-by-side comparison between Lakebridge and Claude recommended. Lakebridge is non-trivial to set up; if Claude can accomplish the same work, prefer Claude. With Claude, Databricks AI tools remain available for ongoing use after initial migration work.
