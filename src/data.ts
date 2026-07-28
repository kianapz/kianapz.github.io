// Central content store — sourced from Kiana Pezeshki's latest CV.
// Update this file when the CV changes and every page stays in sync.

export const coreStrengths = [
  "Full-Stack .NET & React/Vue",
  "Applied AI/ML Research",
  "Cloud & DevOps (Azure, Docker, K8s)",
  "Data Governance & Security",
  "Agile Delivery & Mentorship",
];

export const profile = {
  name: "Kiana Lesan Pezeshki",
  tagline: "Full-stack engineer and AI/ML researcher building production SaaS platforms",
  location: "Mississauga, Ontario, Canada",
  email: "kiana.pezeshki@gmail.com",
  linkedin: "https://linkedin.com/in/kiana-pezeshki",
  github: "https://github.com/kianapz",
};

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  current: boolean;
}

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "Balanced Plus",
    location: "Mississauga, Ontario",
    period: "Mar 2026 – Present",
    current: true,
    bullets: [
      "Engage directly with clients to gather requirements and produce technical documentation and project quotes.",
      "Manage concurrent user access to shared entities with row-level revision tracking, table locking, and a heartbeat API.",
      "Built a configurable round-robin resource allocation system with dynamic queue rebalancing.",
      "Automate recurring jobs with Hangfire and debug production issues through logging and root-cause analysis.",
    ],
  },
  {
    title: "AI Trainer",
    company: "Outlier",
    location: "Remote, Canada",
    period: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Evaluate and annotate LLM responses for accuracy, reasoning quality, and alignment.",
    ],
  },
  {
    title: "Research Assistant – Data Scientist",
    company: "University of Windsor",
    location: "Windsor, Ontario",
    period: "May 2024 – Jun 2026",
    current: false,
    bullets: [
      "Designed a Power BI dashboard for multi-modal public health surveillance using historical and real-time data.",
      "Integrated real-time data via APIs and web crawling to keep dashboards current.",
      "Applied machine learning methods across cross-domain datasets for pandemic pattern recognition.",
    ],
  },
  {
    title: "Graduate Assistant",
    company: "University of Windsor",
    location: "Windsor, Ontario",
    period: "May 2024 – Sep 2025",
    current: false,
    bullets: [
      "Provided technical instruction to undergraduate students in Python programming.",
      "Managed and evaluated student performance on real-world industrial projects.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "RIRA Company",
    location: "Tehran, Iran",
    period: "Apr 2021 – Apr 2024",
    current: false,
    bullets: [
      "Designed, developed, and maintained SaaS web applications including LMS, HRIS, and Ticketing platforms.",
      "Automated update processes using PowerShell, stored procedures, and Windows Services.",
      "Led projects and contributed to new-hire training programs for interns.",
    ],
  },
  {
    title: "Freelance Web Developer & SEO Specialist",
    company: "Contractor",
    location: "Remote, Canada / Iran",
    period: "Sep 2019 – Nov 2025",
    current: false,
    bullets: [
      "Maintained long-term partnerships with 6+ clients, delivering repeat contracts and referrals.",
      "Planned and executed SEO strategies achieving 150K+ impressions and 40% monthly growth.",
    ],
  },
];

export interface SkillCard {
  icon: string;
  title: string;
  group: "Development" | "Data & AI" | "Infrastructure" | "Human Skills";
  items: string[];
}

export const skillGroups = ["All", "Development", "Data & AI", "Infrastructure", "Human Skills"] as const;

export const skillCards: SkillCard[] = [
  {
    icon: "genai",
    title: "GenAI & Prompt Eng.",
    group: "Data & AI",
    items: [
      "GitHub Copilot",
      "Claude",
      "Prompt Engineering",
      "Context Engineering",
      "Agentic Workflows",
      "LLM Response Evaluation",
      "Alignment",
    ],
  },
  {
    icon: "code",
    title: "Programming & Dev",
    group: "Development",
    items: ["C#", "Python", "SQL", "JavaScript", "TypeScript", "Java", "R", ".NET / ASP.NET Core", "LINQ", "SOLID"],
  },
  {
    icon: "frontend",
    title: "Frontend & UI Frameworks",
    group: "Development",
    items: ["React", "Vue.js", "Nuxt.js", "Blazor", "jQuery", "WPF"],
  },
  {
    icon: "backend",
    title: "Backend & Reliability",
    group: "Development",
    items: [
      "Hangfire",
      "Serilog",
      "Entity Framework Core",
      "Dapper",
      "Node.js",
      "RESTful APIs",
      "Microservices",
      "Stimulsoft",
      "Error Tracking & RCA",
    ],
  },
  {
    icon: "devops",
    title: "CI/CD & DevOps",
    group: "Infrastructure",
    items: [
      "Azure DevOps Pipelines",
      "Git / GitHub",
      "Docker",
      "Kubernetes",
      "Azure AKS",
      "SonarQube",
      "IIS",
      "Windows Server",
      "Agile Delivery",
    ],
  },
  {
    icon: "database",
    title: "Database Design",
    group: "Infrastructure",
    items: ["SQL Server", "MongoDB", "MySQL Workbench", "phpMyAdmin", "Stored Procedures", "Schema Modelling", "JSON"],
  },
  {
    icon: "security",
    title: "Data Governance & Security",
    group: "Infrastructure",
    items: [
      "Data Governance",
      "RBAC",
      "Secure API Design",
      "Structured Logging",
      "HIPAA Awareness",
      "PII / PHI Handling",
      "Least-Privilege Access",
    ],
  },
  {
    icon: "ml",
    title: "Data Science & ML",
    group: "Data & AI",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "GNNs",
      "KANs",
      "SVM & Random Forest",
      "Anomaly Detection",
      "NLP",
      "Feature Engineering",
    ],
  },
  {
    icon: "dataviz",
    title: "Data Viz, Testing & Agile",
    group: "Data & AI",
    items: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Plotly", "JMeter", "Postman", "Jira", "Trello"],
  },
  {
    icon: "web",
    title: "Web & SEO",
    group: "Development",
    items: ["WordPress", "Google Search Console", "Google Analytics", "On-Page SEO", "Off-Page SEO", "Performance Optimization"],
  },
  {
    icon: "soft",
    title: "Leadership & Collaboration",
    group: "Human Skills",
    items: ["Leadership", "Mentorship", "Cross-Functional Collaboration", "Critical Thinking", "Problem-Solving", "Time Management"],
  },
];

export interface ProjectItem {
  slug: string;
  title: string;
  org: string;
  blurb: string;
  bullets: string[];
  skills: string[];
  featured?: boolean;
  externalLink?: { label: string; href: string };
}

export const projectOrgs = ["All", "Balanced Plus", "RIRA", "University of Windsor", "Personal Project"] as const;

export const projects: ProjectItem[] = [
  {
    slug: "lpa",
    title: "Layered Process Audit (LPA)",
    org: "Balanced Plus",
    blurb: "End-to-end client delivery with automated audit scheduling.",
    featured: true,
    bullets: [
      "Owned the client relationship end to end — from gathering requirements to shipping and supporting the audit tool in production.",
      "Built automated audit scheduling with Hangfire, so recurring layered process audits fire on schedule without manual tracking.",
      "Managed concurrent user access to shared entities by implementing row-level revision tracking, table locking, and a heartbeat API to ensure data integrity and prevent conflicts.",
      "Added Serilog-based structured logging, cutting the time to debug and root-cause production issues.",
      "Utilized GitHub Copilot and Claude for development.",
      "Added PDF generation using the PDFSharp library.",
      "Delivered on a Vue.js front end backed by a .NET API.",
    ],
    skills: [".NET", "Vue.js", "Hangfire", "Serilog", "Windows Server", "MSSQL Server", "Copilot - Claude"],
  },
  {
    slug: "systemx",
    title: "Managed Service Provider | System X",
    org: "Balanced Plus",
    blurb: "Client-facing portal expanding systemx.net.",
    featured: true,
    bullets: [
      "SystemX is an all-in-one consulting management platform — project management, timesheets, invoicing, quoting, expense tracking, and document signing.",
      "Built a dedicated client portal that expands SystemX's suite with a self-serve experience for its consulting clients.",
      "Implemented handshake login across multiple applications.",
      "Read from multiple databases across different servers using a dynamic connection string.",
    ],
    skills: [".NET 10", "Vue.js", "Serilog", "Linux Server", "MySQL Workbench", "Copilot - Claude"],
  },
  {
    slug: "leadership-360",
    title: "Leadership 360 – Multilingual Assessment Platform",
    org: "RIRA",
    blurb: "Multilingual 360-degree performance assessment platform.",
    bullets: [
      "Involved in the business requirement gathering and design of the application, inspired by 360-degree assessment methodology.",
      "Worked directly with HR stakeholders to understand their needs and assessment processes.",
      "Built on a .NET Core backend with CQRS, Mediator, and Dapper, and a Vue.js/Nuxt.js front end.",
    ],
    skills: ["Agile Environment", "Figma", ".NET Core", "Vue.js", "Nuxt.js", "Dapper", "SQL", "CQRS", "Mediator"],
  },
  {
    slug: "lms-dashboard",
    title: "Data Dashboard for LMS Integration",
    org: "RIRA",
    blurb: "Centralized reporting platform unifying 80 university LMS servers.",
    bullets: [
      "Identified the need for a centralized reporting solution, initiated and led the project end to end.",
      "Assessed tooling and architectural options, and defined optimal data pipelines and workflows with the team.",
      "Unified data from 80 servers hosting LMS platforms across universities into one reporting platform.",
      "Built custom authorization middleware with JWT Bearer authentication.",
      "Used CQRS, Mediator, and Hangfire to offload long-running tasks and improve responsiveness and scalability.",
    ],
    skills: [".NET Core", "React.js", "Nuxt.js", "CQRS", "Mediator", "Hangfire", "JWT Bearer", "Middleware"],
  },
  {
    slug: "navid",
    title: "Navid — Multilingual LMS",
    org: "RIRA",
    blurb: "Multilingual learning management system deployed for 80+ universities.",
    bullets: [
      "Deployed, maintained, and added new features to a multilingual LMS.",
      "Embedded internal ticketing, integrated Adobe Connect and similar platforms, and implemented error handling.",
      "Developed secure APIs for external integrations and data export.",
      "Updated legacy documentation and wrote technical and procedural docs to guide deployments and maintenance.",
      "Communicated directly with 80+ university representatives and IT managers for server management and deployments.",
    ],
    skills: ["ASP.NET", "Vue.js", "REST APIs", "Adobe Connect Integration", "Technical Documentation"],
  },
  {
    slug: "arman",
    title: "Arman — MOOCs Platform",
    org: "RIRA",
    blurb: "Security hardening and new features for an online learning platform.",
    bullets: [
      "Enhanced security and developed new features for an online learning (MOOCs) platform.",
      "Achieved security compliance standards for sustained operational reliability.",
    ],
    skills: ["ASP.NET MVC", "Vue.js", "jQuery", "Security Compliance"],
  },
  {
    slug: "rira-ticketing",
    title: "Rira Ticketing System",
    org: "RIRA",
    blurb: "Internal support ticketing system embedded across multiple platforms.",
    bullets: [
      "Maintained and debugged an internal ticketing system.",
      "Integrated it into multiple platforms via REST APIs and iFrame embedding.",
      "Optimized SQL queries and stored procedures, and improved file/attachment handling for performance and stability.",
    ],
    skills: [".NET Core", "Back-End Web Development", "REST APIs", "SQL Optimization", "iFrame Embedding"],
  },
  {
    slug: "wastewater-dashboard",
    title: "Wastewater Data Dashboard",
    org: "University of Windsor",
    blurb: "Automated dashboard tracking pandemic trends via wastewater analysis.",
    bullets: [
      "Developed an automated dashboard for monitoring pandemic trends via wastewater analysis.",
      "Integrated real-time data using APIs and web crawling techniques.",
    ],
    skills: ["Microsoft Power BI", "Data Analysis", "Real-time APIs", "Web Crawling"],
  },
  {
    slug: "gaming-sentiment",
    title: "Sentiment and Emotion Analysis in Gaming Communities",
    org: "University of Windsor",
    blurb: "NLP pipeline mining emotion signals from gaming communities.",
    bullets: [
      "Scraped gaming websites and pulled data via the Reddit, YouTube, and Twitch APIs to build datasets.",
      "Applied natural language processing (NLP) to extract emotions from the text.",
    ],
    skills: ["NLP", "Applied Machine Learning", "Web Scraping", "Reddit / YouTube / Twitch APIs"],
  },
  {
    slug: "gamification-scores",
    title: "Impact of Gamification on Student Scores",
    org: "University of Windsor",
    blurb: "Statistical study on how gamification affects academic performance.",
    bullets: [
      "Used statistical methods to find correlations between gamification and student scores.",
      "Built a regression model to predict scores.",
    ],
    skills: ["Statistical Analysis", "Applied Machine Learning", "Regression"],
  },
  {
    slug: "playwright-automation",
    title: "Playwright Automation",
    org: "Personal Project",
    blurb: "End-to-end test automation with CI pipelines.",
    bullets: [
      "Personal Playwright automation project — used GitHub Copilot to generate initial test scripts, then edited them for quality.",
      "Set up GitHub Actions/Jenkins pipelines to automatically run tests on pushes and pull requests, with environment setup and artifact uploads.",
    ],
    skills: ["Playwright", "Git", "SDLC", "GitHub Actions", "Jenkins", "CI/CD"],
    externalLink: {
      label: "View on GitHub",
      href: "https://github.com/kianapz/Playwright_automation",
    },
  },
];

export const education = [
  {
    degree: "Master of Science, Computer Science — AI Specialization",
    school: "University of Windsor",
    period: "May 2024 – Oct 2025",
    detail: "Thesis: \u201cA Goal-Driven Evolutionary Framework for the Team Formation Problem in Social Networks.\u201d",
  },
  {
    degree: "Bachelor of Science, Computer Science — Software Engineering",
    school: "",
    period: "Sep 2016 – Sep 2021",
    detail: "",
  },
];

export const continuingEducation = [
  "Google IT Automation with Python — Coursera",
  "IBM Data Science Specialization — Coursera",
  "Data Privacy, Security & Governance — University of Guelph, May 2025",
  "Azure DevOps CI/CD Pipelines — Udemy (in progress)",
  "Kubernetes for Developers — Udemy (in progress)",
];

export const publications = [
  {
    venue: "SNAMS 2024 · Gran Canaria, Spain",
    title: "A Novel Approach to Person-Job Fit Using Outlier Detection",
    blurb:
      "Ensemble outlier-detection methods that surface unconventional, strong candidate-role fits beyond traditional matching — integrating skills, experience, and role-specific attributes into personalized recommendations.",
  },
  {
    venue: "Springer, 2025 · Int'l Conf. on Innovations for Community Services",
    title: "A Multi-modal Data-Driven Dashboard for Enhanced Public Health Surveillance",
    blurb:
      "The research behind the wastewater data dashboard, extended into a multi-modal surveillance framework for public health monitoring. Presented in Munich, Germany.",
  },
];
