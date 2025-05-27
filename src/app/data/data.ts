import {
  Award,
  Certification,
  Education,
  Experience,
  Project,
  Skill,
  SocialLink,
} from "../types";
import profile from "../../../public/me.png";

export const personalInfo = {
  name: "Praveen Uppar",
  // title: "Full-Stack Developer",
  // email: "praveenuppar718@gmail.com",
  // location: "India",
  about:
    "A Passionate developer who is high on caffeine likes to build and break stuff and believes great ideas and a lot of code can change the world.",
  avatar: profile,
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/PraveenUppar",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/praveen-uppar-5b0565277/",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://x.com/PraveenUppar",
    icon: "Twitter",
  },
];

export const education: Education[] = [
  {
    id: "VIT",
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    date: "2023 - 2027",
    description:
      "Specializing in Cloud Computing. Core coursework includes Data Structures, Algorithms, Networking, Database Management, Operating System, Artifical Intelligence, Machine Learning, System Design, Web Development, and Cloud Computing.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
  },
];

export const certifications: Certification[] = [
  {
    id: "Microsoft Azure Fundamentals",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Oct 2024",
    credentialId: "46371961",
    logo: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: " https://www.linkedin.com/in/praveen-uppar-5b0565277/details/certifications/",
  },
  {
    id: "Complete Python Bootcamp",
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "Sep 2024",
    credentialId: "UC-bb7d95e8-de36-48ac-aa00-68275860a802",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
    link: " https://www.linkedin.com/in/praveen-uppar-5b0565277/details/certifications/",
  },
  {
    id: "Web Development Bootcamp",
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "Feb 2024",
    credentialId: "UC-954bb611-e956-4c82-8442-09ce9f8bc4f9",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
    link: " https://www.linkedin.com/in/praveen-uppar-5b0565277/details/certifications/",
  },
  {
    id: "AI/ML and Python Essentials",
    title: "AI/ML and Python Essentials",
    issuer: "VIT",
    date: "May 2024",
    credentialId: "100618484274170935",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
    link: " https://www.linkedin.com/in/praveen-uppar-5b0565277/details/certifications/",
  },
];

export const awards: Award[] = [
  {
    id: "hackbyte",
    title: "HackByte 3.0 Runner-Up (Wikimedia Track)",
    organization: "HackByte",
    date: "2023",
    description:
      "Developed an innovative solution for Wikimedia challenges as part of Team CodeJS, securing the runner-up position among 50+ teams.",
    image:
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "hostel-committee",
    title: "Hostel Committee Member",
    organization: "VIT",
    date: "Mar 2024 - Aug 2024",
    description:
      "Selected to serve on the hostel committee, responsible for addressing student concerns, organizing events, and improving hostel facilities.",
    image:
      "https://images.pexels.com/photos/260399/pexels-photo-260399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "hackbyte2",
    title: "HackByte 3.0 Runner-Up (Wikimedia Track)",
    organization: "HackByte",
    date: "2023",
    description:
      "Developed an innovative solution for Wikimedia challenges as part of Team CodeJS, securing the runner-up position among 50+ teams.",
    image:
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "hostel-committee2",
    title: "Hostel Committee Member",
    organization: "VIT",
    date: "Mar 2024 - Aug 2024",
    description:
      "Selected to serve on the hostel committee, responsible for addressing student concerns, organizing events, and improving hostel facilities.",
    image:
      "https://images.pexels.com/photos/260399/pexels-photo-260399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "WebSockets", level: 75, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Prisma", level: 80, category: "backend" },
  { name: "Redis", level: 70, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },

  // DevOps
  { name: "AWS", level: 75, category: "devops" },
  { name: "Kubernetes", level: 65, category: "devops" },
  { name: "Terraform", level: 60, category: "devops" },
  { name: "Docker", level: 80, category: "devops" },

  // Monitoring
  { name: "Grafana", level: 70, category: "monitoring" },
  { name: "Prometheus", level: 65, category: "monitoring" },
  { name: "Kafka", level: 60, category: "monitoring" },
];

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management.",
    challenge:
      "Building a scalable system that handles high traffic and maintains real-time inventory updates.",
    solution:
      "Implemented a microservices architecture with WebSockets for real-time updates and Redis for caching.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redis", "AWS"],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/username/project",
    metrics: [
      "Reduced page load time by 60%",
      "99.9% uptime",
      "Handles 10k+ concurrent users",
    ],
  },
  {
    id: "project2",
    title: "AI-Powered Task Manager",
    description:
      "Task management application with AI-driven prioritization and scheduling.",
    challenge:
      "Creating an intelligent system that learns user habits and optimizes task scheduling.",
    solution:
      "Utilized machine learning algorithms to analyze user patterns and suggest optimal task arrangements.",
    techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Docker"],
    image:
      "https://images.pexels.com/photos/7172706/pexels-photo-7172706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://demo2.example.com",
    githubLink: "https://github.com/username/project2",
    metrics: [
      "85% increase in user productivity",
      "30% reduction in missed deadlines",
    ],
  },
  {
    id: "project3",
    title: "DevOps Dashboard",
    description:
      "Comprehensive monitoring and deployment management tool for development teams.",
    challenge:
      "Integrating multiple monitoring services and CI/CD pipelines into a unified interface.",
    solution:
      "Developed a modular dashboard that connects to various APIs and presents data in an actionable format.",
    techStack: [
      "React",
      "GraphQL",
      "Node.js",
      "Kubernetes",
      "Grafana",
      "Prometheus",
    ],
    image:
      "https://images.pexels.com/photos/5474285/pexels-photo-5474285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "https://github.com/username/project3",
    metrics: [
      "Decreased incident response time by 70%",
      "Automated 95% of deployment processes",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "VITBMUN1",
    institution: "VITBMUN",
    degree: "Technical Team Lead",
    date: "2024 - 2025",
    description:
      "As the Technical Team Lead at VITB MUN, I am currently leading the redesign and rebuild of the entire website to make it more user-friendly, functional, and visually appealing for event participants. It's been an exciting challenge to collaborate with the team, implement new features, and ensure that the website meets the evolving needs of the event. My goal is to create a seamless and interactive online experience that enhances the overall MUN event for everyone involved",
    logo: "https://vitbmun.vercel.app/assets/vitbmun_logo-CUZneKO5.svg",
  },
  {
    id: "VITBMUN2",
    institution: "VITBMUN",
    degree: "Teachnical Team Member",
    date: "Mar 2024 - Nov 2024",
    description:
      "As a Technical Team Member at VITB MUN, I took charge of keeping the official website up-to-date and running smoothly for all event. Beyond that, I had the opportunity to lead the development of a Virtual Reality (VR) feature, which added a whole new level of interaction and engagement to the event.",
    logo: "https://vitbmun.vercel.app/assets/vitbmun_logo-CUZneKO5.svg",
  },
];
