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
  name: "Praveen Uppar.",
  title: "Full-Stack Developer & Cloud Engineer",
  email: "praveenuppar718@gmail.com",
  location: "India",
  about:
    "Passionate full-stack developer with expertise in modern web technologies and cloud solutions. Currently studying at VIT and pursuing opportunities in tech innovation.",
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
    institution: "VIT - Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    date: "2023 - 2027",
    description:
      "Specializing in Cloud Computing. Core coursework includes Data Structures, Algorithms, Database Management, Operating System, Artifical Intelligence, Machine Learning, System Design, Web Development, and Cloud Computing.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
  },
];

export const certifications: Certification[] = [
  {
    id: "azure",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "46371961",
    logo: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: "https://learn.microsoft.com/credentials/",
  },
  {
    id: "python-bootcamp",
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UC-PYTHON-123",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UC-WEBDEV-456",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
  },
  {
    id: "aiml-python",
    title: "AI/ML & Python Essentials",
    issuer: "VIT",
    date: "2022",
    credentialId: "VIT-AIML-789",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
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
];

export const skills: Skill[] = [
  // Frontend
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
    id: "exp1",
    title: "Hostel Committee Member",
    organization: "VIT",
    date: "Mar 2024 - Aug 2024",
    description:
      "Led initiatives to improve hostel facilities and organized community events. Implemented a digital system for maintenance requests that reduced response time by 50%.",
    image:
      "https://images.pexels.com/photos/260399/pexels-photo-260399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "exp2",
    title: "Open Source Contributor",
    organization: "Various Projects",
    date: "2022 - Present",
    description:
      "Active contributor to several open-source projects, focusing on web technologies and developer tools. Contributed to documentation, bug fixes, and feature implementations.",
    image:
      "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
