/**
 * Every piece of copy on the site. Edit here, not in the components.
 * Facts below are taken from the résumé (Praveen v12) — keep them in sync.
 */

export const profile = {
  name: "Praveen Uppar",
  role: "Software Engineer",
  specialism: "Backend & Distributed Systems",
  location: "Dharwad, Karnataka, India",
  status: "Open to work — on-site, hybrid or remote",
  bio: "Final-year Computer Science student at VIT Bhopal with a strong interest in backend development and distributed systems. I enjoy understanding how large-scale applications work behind the scenes, and building solutions that are reliable, scalable and solve real problems.",
};

export const about = {
  paragraphs: [
    "I'm pursuing my B.Tech in Computer Science at VIT Bhopal, currently in my final year with a CGPA of 8.75. My interest is backend development and distributed systems — how large-scale applications actually work behind the scenes, and how to build things that stay reliable as they grow.",
    "I recently completed a Full Stack SDE internship at Advan Drive Technology, where I worked on workflow automation modules, developed REST APIs, and helped deploy containerized microservices on Oracle Cloud Infrastructure. That gave me exposure to the full software development lifecycle, from understanding requirements through to implementation and deployment.",
    "Outside the internship I built Zenith, a container-based deployment platform that automates application deployment using Docker, Redis and AWS. I'm looking for opportunities to contribute to challenging engineering problems while continuing to grow as a software engineer.",
  ],
  nowLabel: "Currently working on",
  now: [
    "Backend system design — concurrency control, queues and async job execution",
    "AWS services in depth: EC2, S3, Lambda, RDS and DynamoDB",
    "Container orchestration and deployment pipelines with Docker",
    "Data structures and algorithms — 1500+ rating on LeetCode",
  ],
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack SDE Intern",
    org: "Advan Drive Technologies",
    location: "New Delhi · Remote",
    period: "Feb — Apr 2026",
    points: [
      "Built and scaled 5+ workflow automation modules and 7+ backend REST APIs for a CA operations platform, streamlining automated financial reporting.",
      "Architected and managed distributed, containerized infrastructure on Oracle Cloud Infrastructure (OCI), orchestrating 4 microservices with asynchronous job execution and real-time progress tracking.",
      "Owned end-to-end delivery across the SDLC — system design, implementation, testing and deployment — for a live CA operations platform.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
      "Nginx",
      "Oracle Cloud",
    ],
  },
  {
    role: "Technical Team Lead",
    org: "VITBMUN",
    location: "Bhopal · On-site",
    period: "Nov 2024 — May 2025",
    points: [
      "Led the technical team of 5+ members, organizing 3+ MUN events that drew 280+ participants.",
      "Joined as a Technical Team Member in Mar 2024 before stepping up to lead the team.",
    ],
    tags: ["Leadership", "Events"],
  },
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    location: "Remote",
    period: "Oct — Nov 2024",
    points: [
      "Ranked among the top 2,000 open source contributors out of 30,000+ participants in GSSoC 2024.",
    ],
    tags: ["Open Source", "Collaboration"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  period: string;
  points: string[];
  tags: string[];
  /** TODO: replace with the specific repo URL for each project. */
  codeUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Co-Host",
    tagline: "Tech events ticketing platform",
    period: "Jan 2026",
    points: [
      "Built and integrated 5+ core backend workflows — payment verification, ticket generation, QR validation, coupon redemption and email notifications — enabling secure and reliable transaction processing.",
      "Designed a three-layer concurrency control architecture combining idempotency checks, database transactions and atomic operations, ensuring consistent inventory management under high-concurrency workloads.",
      "Implemented pull-based Stripe payment verification without webhooks, preventing URL spoofing by validating session status server-side before order fulfilment.",
    ],
    tags: ["Stripe", "Concurrency", "PostgreSQL", "Node.js"],
    codeUrl: "https://github.com/PraveenUppar",
  },
  {
    name: "Zenith",
    tagline: "Container-based deployment system",
    period: "Dec 2025",
    points: [
      "Architected a distributed deployment platform with 3 microservices in a monorepo, automating repository cloning and isolated Docker container builds from a single GitHub URL.",
      "Engineered an asynchronous build pipeline using a Redis-backed job queue for reliable, decoupled task processing across services.",
      "Implemented AWS S3 artifact storage and a custom request-routing layer supporting scalable static asset delivery, SPA fallback routing and per-project subdomain hosting.",
    ],
    tags: ["Docker", "Redis", "AWS S3", "Microservices"],
    codeUrl: "https://github.com/PraveenUppar",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
  { label: "Developer Tools", items: ["Git & GitHub", "Linux", "Docker"] },
  {
    label: "Cloud — AWS",
    items: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Lambda",
      "RDS",
      "DynamoDB",
      "CloudWatch",
    ],
  },
];

export type Achievement = {
  title: string;
  detail: string;
  year: string;
  /** Optional certificate scan in /public. */
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Runner-up, HackByte 3.0",
    detail:
      "Team CodeJS placed 2nd out of 110 teams on the Indic MediaWiki Developers track at IIITDM Jabalpur, an MLH 2025 season event.",
    year: "2025",
    image: "/hackathon_win.jpg",
  },
  {
    title: "Top 2,000 Open Source Contributor",
    detail:
      "Ranked in the top 2,000 out of 30,000+ participants in GirlScript Summer of Code 2024.",
    year: "2024",
    image: "/cert-gssoc-2024.png",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  score: string;
  date: string;
  /** Certificate scan in /public, shown as a thumbnail that opens full size. */
  image: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified: Cloud Practitioner",
    issuer: "Amazon Web Services",
    score: "865 / 1000",
    date: "Jun 2026 — Jun 2029",
    image: "/cert-aws-cloud-practitioner.jpg",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    score: "785 / 1000",
    date: "Oct 2024 — Oct 2028",
    // NOTE: this scan is the AZ-900 exam score report, not the certificate —
    // it carries the exam reference number and a per-section breakdown.
    // Swap for the Credly badge or certificate if you'd rather not publish it.
    image: "/cert-azure-fundamentals.png",
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    score: "87.59%",
    date: "Nov 2024",
    image: "/cert-applied-ml-python.png",
  },
  {
    title: "100 Days of Code: Python Bootcamp",
    issuer: "Udemy",
    score: "",
    date: "Sep 2024",
    image: "/cert-udemy-100-days-python.png",
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    score: "",
    date: "Feb 2024",
    image: "/cert-udemy-web-dev-bootcamp.png",
  },
];

export type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  result: string;
};

export const education: EducationItem[] = [
  {
    institution: "Vellore Institute of Technology, Bhopal",
    qualification: "B.Tech, Computer Science and Engineering — final year",
    period: "2023 — 2027",
    result: "CGPA 8.75 / 10",
  },
  {
    institution: "JSS R. S. Hukkerikar Pre-University College, Dharwad",
    qualification: "Class XII — Karnataka PUE",
    period: "2023",
    result: "89.3%",
  },
  {
    institution: "Classic International Public School, Dharwad",
    qualification: "Class X — ICSE",
    period: "2021",
    result: "80.5%",
  },
];

export const contact = {
  email: "praveenuppar718@gmail.com",
  blurb:
    "Always happy to talk about backend engineering, internships or collaboration. The fastest way to reach me is below.",
  links: [
    { label: "Email", href: "mailto:praveenuppar718@gmail.com" },
    { label: "GitHub", href: "https://github.com/PraveenUppar" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/praveen-uppar-5b0565277",
    },
    { label: "Twitter", href: "https://x.com/_PraveenUppar_" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
