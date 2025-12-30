/// <reference types="vite/client" />

export interface Skill {
  name: string;
  years: number;
  icon: string;
  category: 'frontend' | 'backend' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
