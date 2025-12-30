
import React from 'react';
import { Skill, Experience, Project } from './types';
import {
  Code2,
  Layers,
  Database,
  Cpu,
  Globe,
  Server,
  Terminal,
  Palette
} from 'lucide-react';

export const COLORS = {
  primary: '#ea580c', // Orange-600
  secondary: '#1f2937',
  background: '#030712',
  text: '#f9fafb',
};

/**
 * 1. CHANGE YOUR IMAGE HERE
 * Replace the URL below with your actual photo link.
 */
export const PROFILE_IMAGE_URL = "/images/profile.png";

/**
 * 2. CHANGE YOUR SOCIAL LINKS HERE
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile-slug", // Replace with your LinkedIn URL
  twitter: "https://twitter.com/your-handle"
};

export const SKILLS: Skill[] = [
  { name: 'JavaScript', years: 3, icon: 'Terminal', category: 'backend' },
  { name: 'React.js', years: 2, icon: 'Layers', category: 'frontend' },
  { name: 'Next.js', years: 2, icon: 'Globe', category: 'frontend' },
  { name: 'Node.js', years: 3, icon: 'Server', category: 'backend' },
  { name: 'MongoDB', years: 2, icon: 'Database', category: 'backend' },
  { name: 'BSc in CSE', years: 2023, icon: 'Cpu', category: 'other' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Mango_Street',
    role: 'Full Stack Developer',
    period: 'April 2024 - PRESENT',
    description: [
      'Developed web app for online booking.',
      'Led the implementation of the mango app.',
      'Focused more on back end than front end.'
    ],
    tech: ['JavaScript', 'React.js', 'Node.js', 'Next.js']
  },
  {
    company: 'Shawntech',
    role: 'Back End Developer',
    period: 'JUNE 2022 - MARCH 2024',
    description: [
      'Created a landing page for online sales.',
      'Design REST API using Node.js.',
      'Write test codes for QAs.'
    ],
    tech: ['JavaScript', 'Node.js', 'MongoDB']
  }
];

export const RESUME_SUMMARY = "I am a MERN Stack Developer with experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I focus on creating scalable, responsive, and user-friendly solutions, with a strong understanding of both frontend and backend development.";

export const ICON_MAP: Record<string, any> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
};
