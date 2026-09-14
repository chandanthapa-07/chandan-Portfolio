"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/data/skills';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    beginner: 'bg-blue-500/20 text-blue-400',
    intermediate: 'bg-green-500/20 text-green-400',
    advanced: 'bg-yellow-500/20 text-yellow-400',
    expert: 'bg-purple-500/20 text-purple-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-6 rounded-xl bg-surface border border-border hover:border-accent-primary/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span
          className={`px-2 py-1 text-xs rounded-full ${levelColors[skill.level]}`}
        >
          {skill.level}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-2 bg-surface-elevated rounded-full flex-1">
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: `${(index + 1) * 20}%` }}
            className="h-full bg-accent-primary rounded-full"
            style={{ width: `${(index + 1) * 20}%` }}
          />
        </div>
        <span className="text-sm text-muted">{(index + 1) * 20}%</span>
      </div>
    </motion.div>
  );
}
