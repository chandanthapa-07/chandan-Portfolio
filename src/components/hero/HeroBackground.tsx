"use client";

import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/50" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-secondary/10 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="h-full w-px bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
