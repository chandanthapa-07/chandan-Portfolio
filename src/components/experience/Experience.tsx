"use client";

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">EXPERIENCE</h2>
          <div className="w-20 h-1 bg-accent-primary mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent-primary rounded-full border-4 border-background -translate-x-1/2" />

              <div className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-muted font-medium">{exp.duration}</span>
                </div>

                <h4 className="text-lg text-accent-primary mb-4">{exp.company}</h4>

                <p className="text-muted mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-primary mr-2">▸</span>
                      <span className="text-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}