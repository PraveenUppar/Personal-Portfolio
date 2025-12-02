import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  // yourlogo,
} from "../assets";

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [aws1, aws2, azure1];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "0",
    title: "Project 1: Resume Roaster",
    text: "Web application uses AI to provide helpful and humorous feedback on resumes to assist users in improving their CVs",
    date: "Nov 2025",
    githubUrl: "https://github.com/PraveenUppar/Resume-Roaster",
    colorful: true,
  },
  {
    id: "1",
    title: "Project 2: CNN Classifier",
    text: "Web applications powered by a Convolutional Neural Network (CNN) deep learning model to provide real-time classification of potato plant diseases",
    date: "Aug 2024",
    githubUrl:
      "https://github.com/PraveenUppar/Potato-plant-disease-classification-model-using-CNN",
    colorful: true,
  },
  {
    id: "2",
    title: "Project 3: DevOps Automation",
    text: "End-to-end DevOps workflow for a full-stack application, integrating automated CI/CD, security scanning, and container orchestration with Docker and Kubernetes.",
    date: "Nov 2025",
    githubUrl: "https://github.com/PraveenUppar/DevOps-E2E-Project",
    colorful: true,
  },
  {
    id: "3",
    title: "Project 4: Three Tier on AWS  ",
    text: "Implementation of a production-grade 3-tier architecture on Amazon Web Services (AWS)",
    date: "Sep 2024",
    githubUrl:
      "https://github.com/PraveenUppar/Production-Grade-3-Tier-Architecture-on-AWS",
    colorful: true,
  },
  {
    id: "4",
    title: "Project 5: Storage Analyzer ",
    text: "Tool designed to help users make informed decisions about their data center storage strategies.",
    date: "Mar 2024",
    githubUrl: "https://github.com/PraveenUppar/Cloud-Acces-Price-Tracker",
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// export const pricing = [
//   {
//     id: "0",
//     title: "AWS Certified Cloud Practitioner",
//     description: "",
//     price: "0",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
//   {
//     id: "1",
//     title: "AWS Certified Cloud Solutions Architect",
//     description: "",
//     price: "9.99",
//     features: [
//       "An advanced AI chatbot that can understand complex queries",
//       "An analytics dashboard to track your conversations",
//       "Priority support to solve issues quickly",
//     ],
//   },
//   {
//     id: "2",
//     title: "Microsoft Certified Azure Fundamentals",
//     description: "",
//     price: null,
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
// ];

import aws1 from "../assets/hero/aws1.png";
import aws2 from "../assets/hero/aws2.webp";
import azure1 from "../assets/hero/azure1.webp";

export const pricing = [
  {
    id: "0",
    title: "AWS Certified Cloud Practitioner",
    description: "",
    price: "0",
    iconUrl: aws1,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "AWS Certified Cloud Solutions Architect",
    description: "",
    price: "9.99",
    iconUrl: aws2,
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Microsoft Certified Azure Fundamentals",
    description: "",
    price: null,
    iconUrl: azure1,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const pricing2 = [
  {
    id: "0",
    title: "Web Development Bootcamp",
    description: "",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Fundamentals of AI and Machine Learning",
    description: "",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "1",
    title: "Applied Machine Learning in Python ",
    description: "",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
];

export const pricing3 = [
  {
    id: "0",
    title: "Frontend Development",
    description: "",
    price: "0",
    features: [
      "Next.js & React: Building performant, server-rendered applications.",
      "TypeScript: Ensuring type safety and scalable codebases.",
      "Tailwind CSS: Rapid UI development with responsive design.",
      "State Management: Handling complex UI states efficiently.",
    ],
  },
  {
    id: "1",
    title: "Backend Development",
    description: "",
    price: "9.99",
    features: [
      "Node.js & Express: Architecting scalable RESTful APIs.",
      "PostgreSQL & MongoDB: Managing relational and NoSQL data structures.",
      "Prisma ORM: Type-safe database access and schema management.",
      "Redis: Implementing caching for high-performance data retrieval.",
    ],
  },
  {
    id: "2",
    title: "Deployment and DevOps",
    description: "",
    price: null,
    features: [
      "AWS Services: Leveraging AWS for cloud infrastructure.",
      "Docker: Containerizing applications for consistent environments.",
      "Kubernetes: Orchestrating containers for scalability (Learning/Using).",
      "Jenkins / CI/CD: Automating build and deployment pipelines.",
    ],
  },
];

export const aboutme = [
  {
    id: "0",
    title: "Education ",
    text: "B.Tech in Computer Science, VIT University (2023-2027).",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    title: "Current Location",
    text: "Bengaluru, India. Open to on-site internships and remote opportunities worldwide",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
  },
  {
    id: "2",
    title: "Contact Info",
    text: "Email: praveenuppar718@gmail.com. Active on LinkedIn & GitHub",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: "3",
    title: "Hobbies",
    text: "Exploring Cloud-Native trends, Contributing to Open Source, Strategic Gaming and Tech Blogging.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  {
    id: "4",
    title: "Soft Skills",
    text: "Team Collaboration, Problem Solving, Communication and Adaptability to new tech stacks.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/praveen-uppar-5b0565277/",
    light: true,
  },
  {
    id: "1",
    title: "Github",
    url: "https://github.com/PraveenUppar",
    // backgroundUrl: "...",
    light: true,
  },

  {
    id: "3",
    title: "X",
    url: "https://x.com/_PraveenUppar_",
    light: true,
  },
  {
    id: "4",
    title: "Codefolio",
    url: "https://codolio.com/profile/pavicodes",
    light: true,
  },
];
