"use client";

import { motion } from 'framer-motion';

export function CurrentlyBuilding() {
  return (
    <section id="now" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CURRENTLY BUILDING</h2>
          <div className="w-20 h-1 bg-accent-primary mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-surface-elevated border border-border hover:border-accent-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-xl font-semibold">Portfolio Website Redesign</h3>
            </div>

            <p className="text-muted mb-6">
              A complete redesign of my portfolio website with modern animations and interactive elements.
              This project focuses on creating a premium developer portfolio experience.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface text-muted rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted">Progress:</span>
                <div className="flex-1 bg-surface-elevated rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-green-500 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-muted">85%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-surface-elevated border border-border hover:border-accent-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <h3 className="text-xl font-semibold">AI-Powered Code Assistant</h3>
            </div>

            <p className="text-muted mb-6">
              Building an intelligent code assistant that helps developers write better code
              through context-aware suggestions and automated refactoring.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'OpenAI API', 'TypeScript', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface text-muted rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted">Progress:</span>
                <div className="flex-1 bg-surface-elevated rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-muted">60%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}