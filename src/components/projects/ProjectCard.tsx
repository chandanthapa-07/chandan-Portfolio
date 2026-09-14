"use client";

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const categoryColors = {
    Web: 'bg-blue-500/20 text-blue-400',
    'Full Stack': 'bg-green-500/20 text-green-400',
    'UI/UX': 'bg-purple-500/20 text-purple-400',
    Design: 'bg-pink-500/20 text-pink-400',
    Experiments: 'bg-orange-500/20 text-orange-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative bg-surface-elevated rounded-xl overflow-hidden border border-border hover:border-accent-primary/50 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-surface text-muted text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-surface text-muted text-xs rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 text-xs rounded-full ${categoryColors[project.category as keyof typeof categoryColors] || 'bg-gray-500/20 text-gray-400'}`}
          >
            {project.category}
          </span>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="text-accent-primary text-sm font-medium"
          >
            View Project →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}