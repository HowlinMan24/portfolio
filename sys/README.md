# System Design Notes

A reference collection of software and cloud architecture patterns, documented from first principles. Each entry explains **what the pattern is**, **how it works**, **when to use it (and when not to)**, and the **trade-offs** involved, with diagrams that render directly on GitHub.

No application code here on purpose; the goal is to capture architectural reasoning and decision-making rather than implementation detail. Examples lean toward financial and data-intensive systems, since that is the domain I work in.

## Application Architectures

| # | Pattern | Complexity | One-liner |
|---|---------|------------|-----------|
| 01 | [Monolith & Layered](./app-architectures/01-monolith-and-layered.md) | Simple | One deployable unit, organised in layers. |
| 02 | [Client–Server REST API](./app-architectures/02-client-server-rest.md) | Simple | SPA front end talking to a stateless API. |
| 03 | [Clean / Hexagonal Architecture](./app-architectures/03-clean-hexagonal-architecture.md) | Intermediate | Business logic isolated from frameworks and I/O. |
| 04 | [Microservices](./app-architectures/04-microservices.md) | Advanced | Independently deployable services per capability. |
| 05 | [Event-Driven & CQRS](./app-architectures/05-event-driven-cqrs.md) | Advanced | Services react to events; reads and writes split. |

## AWS / Cloud Architectures

| # | Pattern | Complexity | One-liner |
|---|---------|------------|-----------|
| 06 | [Static Site + CDN](./aws-architectures/06-static-site-and-cdn.md) | Simple | S3 + CloudFront for fast, cheap static hosting. |
| 07 | [Three-Tier Scalable Web App](./aws-architectures/07-three-tier-scalable-web.md) | Intermediate | Load-balanced compute with a managed database. |
| 08 | [Serverless & Event-Driven](./aws-architectures/08-serverless-event-driven.md) | Advanced | API Gateway, Lambda, and queues with no servers to manage. |
| 09 | [Data Pipeline / ETL](./aws-architectures/09-data-pipeline-etl.md) | Advanced | Ingest, transform, and serve analytics at scale. |

## How to read these

Start at the top of each section and work down. The early patterns are the foundation; the later ones combine and extend them to solve scale, reliability, and team-autonomy problems. The recurring theme across all of them is **trade-offs**: there is rarely one correct answer, only the right choice for a given set of constraints (cost, latency, scale, team size, and how much complexity you can afford to operate).
