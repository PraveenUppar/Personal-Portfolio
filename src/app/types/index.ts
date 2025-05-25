export interface Education {
  id: string;
  institution: string;
  degree: string;
  date: string;
  description: string;
  logo: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "devops" | "monitoring";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  metrics?: string[];
}

export interface Experience {
  id: string;
  institution: string;
  degree: string;
  date: string;
  description: string;
  logo: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
