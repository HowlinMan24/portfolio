import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";

const highlightProjects = [
  {
    name: "KYC Verification Microservice",
    repo: "github.com/HowlinMan24/kyc-service",
    tech: "TypeScript · NestJS · JWT · Sequelize · Zod · Docker · OpenAPI",
    bullets: [
      "Production-grade KYC microservice (Hexagonal/Clean Architecture) with Zod request validation, Sequelize ORM, JWT auth, and full OpenAPI documentation — mirrors the identity verification flows built at Vista Point.",
    ],
  },
  {
    name: "Diabetes ML Streaming Pipeline",
    repo: "github.com/HowlinMan24/diabetes-ml-streaming",
    tech: "Python · PySpark · Kafka · Docker · scikit-learn",
    bullets: [
      "End-to-end Lambda architecture ML pipeline: offline Spark model training + real-time inference via Kafka streaming producer/consumer — demonstrates full production ML lifecycle from training to deployment.",
    ],
  },
  {
    name: "CP-ABE Secure File Sharing",
    repo: "github.com/HowlinMan24/cpabe-secure-share",
    tech: "Python · CP-ABE (BSW07) · AES-256-GCM · Docker",
    bullets: [
      "Attribute-based encryption system combining CP-ABE policy enforcement with AES-256-GCM hybrid encryption for secure, access-policy-controlled file sharing.",
    ],
  },
  {
    name: "Calendar SaaS App",
    repo: "github.com/HowlinMan24/CalendarWebApp",
    tech: "Angular · NestJS · MySQL · Docker · Nginx",
    bullets: [
      "Full-stack multi-calendar SaaS web app (Multi-Layered MVC, REST API) with reusable Angular month/week/day views, NestJS REST API, MySQL persistence, and Dockerized deployment with Nginx for dev/prod.",
    ],
  },
];

export default function CVPage() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Hristijan Mijalkov — CV</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'EB Garamond', Garamond, 'Times New Roman', serif;
            font-size: 10.5pt;
            color: #111;
            background: #fff;
            padding: 28px 40px;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.48;
          }

          /* ── Header ── */
          .cv-name {
            font-size: 26pt;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #1B3A6B;
            margin-bottom: 5px;
            font-style: normal;
          }
          .cv-contact {
            text-align: center;
            font-size: 9.5pt;
            color: #444;
            margin-bottom: 3px;
          }
          .cv-contact a { color: #444; text-decoration: none; }
          .sep { color: #aaa; margin: 0 5px; }
          .header-rule {
            border: none;
            border-top: 2px solid #1B3A6B;
            margin: 8px 0 14px;
          }

          /* ── Section titles ── */
          .section { margin-bottom: 12px; }
          .section-title {
            display: flex;
            align-items: center;
            gap: 7px;
            font-size: 9.5pt;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            color: #1B3A6B;
            margin-bottom: 3px;
          }
          .section-title::before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 13px;
            background: #1B3A6B;
            border-radius: 1px;
            flex-shrink: 0;
          }
          .section-rule {
            border: none;
            border-top: 1px solid #b0bfd4;
            margin: 3px 0 7px;
          }

          /* ── Job entries ── */
          .entry { margin-bottom: 9px; page-break-inside: avoid; break-inside: avoid; }
          .job-header { display: flex; justify-content: space-between; align-items: baseline; }
          .job-company { font-weight: 700; font-size: 10.5pt; }
          .job-location { font-size: 9.5pt; color: #444; font-style: italic; }
          .job-role { font-style: italic; font-size: 10pt; }
          .job-period { font-style: italic; font-size: 9.5pt; color: #444; }

          ul { padding-left: 17px; margin-top: 4px; list-style-type: disc; }
          ul li { display: list-item; list-style-type: disc; list-style-position: outside; }
          li { margin-bottom: 3px; font-size: 10pt; line-height: 1.45; }
          b.num { color: #2a4f8f; }

          /* ── Skills ── */
          .skill-row { margin-bottom: 3px; font-size: 10pt; }
          .skill-label { font-weight: 600; color: #1B3A6B; }

          /* ── Projects ── */
          .proj-header { display: flex; justify-content: space-between; align-items: baseline; }
          .proj-name { font-weight: 700; font-size: 10pt; }
          .proj-repo { font-size: 9pt; color: #444; font-style: italic; }
          .proj-tech { font-size: 9pt; color: #444; margin-top: 1px; margin-bottom: 2px; }

          /* ── Education ── */
          .edu-row { display: flex; justify-content: space-between; align-items: baseline; }
          .edu-inst { font-weight: 700; }
          .edu-loc { font-size: 9.5pt; color: #444; font-style: italic; }

          /* ── Summary ── */
          .summary { font-size: 10pt; line-height: 1.5; }

          @media print {
            body { padding: 0; }
            @page { margin: 16mm 14mm; size: A4; }
          }
        `}</style>
      </head>
      <body>

        {/* ── Name & Contact ── */}
        <div className="cv-name">Hristijan Mijalkov</div>
        <div className="cv-contact">
          hristijanmijalkov5@gmail.com
          <span className="sep">|</span>
          <a href="https://linkedin.com/in/hristijan-mijalkov">linkedin.com/in/hristijan-mijalkov</a>
          <span className="sep">|</span>
          <a href="https://github.com/HowlinMan24">github.com/HowlinMan24</a>
          <span className="sep">|</span>
          <a href="https://hristijan-mijalkov.vercel.app">hristijan-mijalkov.vercel.app</a>
        </div>
        <hr className="header-rule" />

        {/* ── Professional Summary ── */}
        <div className="section">
          <div className="section-title">Professional Summary</div>
          <hr className="section-rule" />
          <p className="summary">
            Full-stack engineer and data scientist with <b>4+ years</b> shipping production systems in <b>fintech, e-commerce, and ML</b>.
            Engineered a multi-tenant banking and e-commerce SaaS platform with microservices architecture handling KYC onboarding,
            FX wire transfers, and payment flows at Vista Point. Built predictive ML models and distributed PySpark pipelines (Lambda architecture)
            at Xient GmbH (Germany). Experienced designing <b>Microservices, Multi-Tenant SaaS, Event-Driven, and Lambda architectures</b>.
            Proven across Angular, React, Node.js, Spring Boot, FastAPI, Flask, Python, PySpark, AWS, Java, SQL, NoSQL, JavaScript, CSS, and HTML.
          </p>
        </div>

        {/* ── Work Experience ── */}
        <div className="section">
          <div className="section-title">Work Experience</div>
          <hr className="section-rule" />
          {experience.map((job) => (
            <div key={job.company + job.role} className="entry">
              <div className="job-header">
                <span className="job-company">{job.company}</span>
                <span className="job-location">{job.location}</span>
              </div>
              <div className="job-header">
                <span className="job-role">{job.role}</span>
                <span className="job-period">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{
                    __html: b
                      .replace(/~(\d+%)/g, '<b class="num">~$1</b>')
                      .replace(/(\d+)\s+(production|hours|minutes|enterprise)/g, '<b class="num">$1</b> $2')
                  }} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Technical Skills ── */}
        <div className="section">
          <div className="section-title">Technical Skills</div>
          <hr className="section-rule" />
          {skillGroups.map((g) => (
            <div key={g.label} className="skill-row">
              <span className="skill-label">{g.label}:</span>{" "}
              {g.items.join(", ")}
            </div>
          ))}
        </div>

        {/* ── Selected Projects ── */}
        <div className="section">
          <div className="section-title">Selected Projects</div>
          <hr className="section-rule" />
          {highlightProjects.map((p) => (
            <div key={p.name} className="entry">
              <div className="proj-header">
                <span className="proj-name">{p.name}</span>
                <span className="proj-repo">{p.repo}</span>
              </div>
              <div className="proj-tech">{p.tech}</div>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Education & Certifications ── */}
        <div className="section">
          <div className="section-title">Education &amp; Certifications</div>
          <hr className="section-rule" />
          <div className="entry">
            <div className="edu-row">
              <span className="edu-inst">Faculty of Computer Science and Engineering (FINKI), UKIM</span>
              <span className="edu-loc">Skopje, North Macedonia</span>
            </div>
            <div style={{ fontStyle: "italic", fontSize: "9pt" }}>B.Sc. Software Engineering &amp; Information Systems</div>
          </div>
          <div className="entry" style={{ marginBottom: "4px" }}>
            <div className="edu-row">
              <span style={{ fontWeight: "bold" }}>AWS Certified AI Practitioner</span>
              <span className="edu-loc">Amazon Web Services</span>
            </div>
          </div>
          <div style={{ fontSize: "9pt", marginTop: "2px" }}>
            <span style={{ fontWeight: "bold", color: "#1B3A6B" }}>Languages:</span>{" "}
            Macedonian (Native) · English (C2 Fluent) · German (A2)
          </div>
        </div>

      </body>
    </html>
  );
}
