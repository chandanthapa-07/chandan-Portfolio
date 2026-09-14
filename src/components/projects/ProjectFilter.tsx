"use client";

import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ categories, selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-accent-primary text-background'
                : 'bg-surface text-muted hover:bg-surface-elevated hover:text-foreground'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}