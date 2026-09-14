"use client";

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT</h2>
          <div className="w-20 h-1 bg-accent-primary mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl animate-pulse" />
              <div className="absolute inset-4 bg-surface-elevated rounded-2xl border border-border" />
              <div className="absolute inset-8">
                <div className="w-full h-full bg-accent-primary/10 rounded-xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Chandan Thapa</h3>
            <p className="text-muted mb-6">
              I'm a full-stack developer and creative technologist with a passion for building modern web applications.
              With expertise in React, Next.js, and various backend technologies, I create seamless digital experiences.
            </p>
            <p className="text-muted mb-6">
              My journey in tech started with HTML and CSS, and has evolved into a comprehensive skill set covering
              frontend development, backend systems, database design, and UI/UX principles.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-elevated text-muted rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
