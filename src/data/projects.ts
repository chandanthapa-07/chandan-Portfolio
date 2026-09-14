export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    category: 'Web',
    description: 'A modern portfolio website built with Next.js, React, and TypeScript.',
    image: '/images/projects/portfolio.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://chandan-portfolio.com',
    githubUrl: 'https://github.com/chandan/portfolio',
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A full-stack e-commerce platform with React frontend and Node.js backend.',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: 'https://ecommerce.example.com',
    githubUrl: 'https://github.com/chandan/ecommerce',
    featured: false,
  },
  {
    id: '3',
    title: 'Task Management App',
    category: 'UI/UX',
    description: 'A clean and intuitive task management application with drag-and-drop functionality.',
    image: '/images/projects/task-manager.png',
    technologies: ['React', 'TypeScript', 'Redux', 'Material-UI'],
    liveUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/chandan/task-manager',
    featured: false,
  },
];
