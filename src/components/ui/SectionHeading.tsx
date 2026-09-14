"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignmentClasses[alignment]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-20 h-1 bg-accent-primary mx-auto mt-4" style={alignment === 'left' ? { marginLeft: 0 } : alignment === 'right' ? { marginRight: 0 } : {}} />
    </motion.div>
  );
}