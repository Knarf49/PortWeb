// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal website built with React, Tailwind, and Framer Motion.',
    image: '/images/portfolio.png',
    link: 'https://myportfolio.com',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'E-commerce Store',
    description: 'A simple store front with shopping cart functionality.',
    image: '/images/store.png',
    techStack: ['Next.js', 'Stripe', 'Tailwind CSS']
  }
];
