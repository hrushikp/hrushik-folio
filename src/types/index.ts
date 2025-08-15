// Global type definitions for the application

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  gpa: string;
  highlights: string[];
  courses: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number;
  color: string;
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  link: string | null;
}

export interface SocialLink {
  icon: any;
  label: string;
  username?: string;
  link: string;
}