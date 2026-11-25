# Upwork proposal lanes (read only when drafting)

## Draft rules
- First 150-200 characters: THEIR problem, quoting one detail from the post. Never open with "Hi I'm", years, "I'd love to help" or the rate.
- Sentence 2: what they will have when done.
- A 2-3 step plan. ONE matching proof link. Answer every screening question.
- End with one easy question about their setup.
- Under ~150 words (big jobs under ~250). No em dashes, plain hyphens only.
- If the post bans AI-written answers, give 3-5 bullet points for him to write instead.

## Tone: senior professional, firm and confident
- Write like an engineer who has done this before and is sure of the plan. State things directly: "I will", "You get", "This takes 2 days". Give a firm price and timeline when the post allows it.
- Answer screening questions with a direct answer first, then one line of proof. No "I think", "I believe", "I can try", "hopefully", "might", "happy to", "would love to".
- Never use the words student, university, school, coursework, thesis, demo, trial, toy, practice, learning, side project, hobby, "I'm new", "first job", "building my profile". Present every project by what it does and what it is built with (e.g. "an LLM grading platform: Angular, Spring Boot, MySQL, model fallback").
- Never undersell: no "mostly X", "my main stack is Y so I'm weaker at Z", "not my strongest", apologies or disclaimers. Lead with the strongest matching proof.
- Small fixed budgets: if the client's price is far below the work in the post, the price covers a clearly named first milestone (e.g. "$20 covers the first workflow: X"), and the rest is a second milestone. Never promise the full scope for a tiny fixed price.
- Stay true: do not invent clients, production users, numbers or years. If the post requires something he has never done, skip the claim and pitch the closest real work confidently; do not draw attention to the gap.
- Repo names that contain "Student" or "demo": link them, but describe them only by function.

## Facts
4+ years (since May 2022), English C1, based in Europe (CET), B.Sc. Computer and Software Engineering (FINKI). Rate $30/h; bid near that or the client's budget.

## Lanes and proof
- Backend (NestJS, Node, Go, FastAPI, Java Spring Boot): coldlatch.com (NestJS API, about 1,200 automated tests, multi-tenant, SAP S/4HANA integration); banking platform endpoints about 35% faster with Redis caching and query rewrites; JWT + refresh-token rotation.
- Frontend (Angular first, React only for small tasks): dawnlearn.com (Angular SSR); split a monolithic Angular app into a reusable component library.
- Angular upgrades: ng-upgrade-planner (tool that plans Angular version upgrades, github.com/HowlinMan24) plus 4+ years on a large Angular banking app. Plan: dependency audit, step through versions with ng update, fix breaking changes, test.
- Full-stack: redproof.dev (Angular SSR + NestJS, live) or coldlatch.com.
- Supabase and AI-builder apps (Lovable, Base44, Bolt, Replit, v0, Cursor) - fixes and security: redproof.dev (security checker for AI-built apps: RLS, SECURITY DEFINER, Edge Function auth, leaked keys, webhooks).
- MCP servers: github.com/HowlinMan24/redproof-mcp (published MCP server, runs inside Lovable and Claude); contributed to Desktop Commander MCP; mcp-desk-learn (Node and Go).
- AI / LLM / RAG: github.com/HowlinMan24/rag-anything-eval; multi-format RAG with a tool-calling agent; cross-encoder reranker written from scratch; SAP connected to a local LLM (Ollama).
- LLM apps with model fallback, and Java Spring Boot proof: github.com/HowlinMan24/Student-Grading-App-with-LLMs, describe as "LLM grading platform: Angular, Spring Boot, MySQL, OpenRouter model fallback, Kubernetes". Fine-tuning: llm-finetuning-demo, describe as "fine-tuning pipeline" (do not claim fine-tuned models in production).
- Fintech APIs (KYC, auth, payments, audit): github.com/HowlinMan24/kyc-service (TypeScript, Express, Sequelize, JWT, Zod, risk scoring, audit trail, OpenAPI); 4+ years on a banking platform; 2FA.
- Document AI / PDF extraction: github.com/HowlinMan24/multiformat-rag-pipeline; document AI (Hypatos) integrated with SAP at work.
- Copilot Studio / Teams / Power Automate: built Copilot Studio agents with Power Automate flows on top of SAP at work (no public link; describe it).
- DevOps: github.com/HowlinMan24/terraform-cicd-pipeline (plan on every PR, OIDC, approval before prod); ColdLatch and Redproof on AWS with Terraform and Docker.
- AWS serverless: github.com/HowlinMan24/serverless-observability-stack (API Gateway, Lambda, DynamoDB, CloudWatch alarms, SNS, Terraform); aws-vpc-foundation.
- Data engineering: github.com/HowlinMan24/sap-llm-connector; Python extraction from SAP S/4HANA and BW.
- Big data Spark / Kafka / Flink (small jobs only; describe by function, do not claim production clusters): diabetes-ml-streaming (streaming ML pipeline), spark-als-movielens (Spark recommender), flink-streaming.
- ML: rag-anything-eval; scikit-learn and Pandas; not deep-learning research.

## Upwork portfolio highlights (suggest up to 3 per job, by title)
- Redproof: Supabase, Lovable/AI-builder apps, security, AI integration, NestJS + Angular.
- ColdLatch: NestJS backend, IoT/MQTT, SAP, Terraform/AWS, multi-tenant SaaS.
- Dawn: Angular front end, Go, PostgreSQL, Docker, AWS.
- RxRadar: Node/NestJS + Angular full stack, MySQL, Docker.
- Portfolio website: React/Next.js, Tailwind, Vercel (small front-end jobs only).
