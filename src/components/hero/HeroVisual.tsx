"use client";

import { motion } from 'framer-motion';

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl animate-pulse" />
        <div className="absolute inset-4 bg-surface-elevated rounded-2xl border border-border" />

        <div className="absolute inset-8">
          <div className="w-full h-full bg-accent-primary/10 rounded-xl animate-float" />
        </div>

        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-secondary/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-primary/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '0.5s' }} />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-6xl font-bold text-accent-primary/30"
          >
            CD
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
