"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { skills } from '@/data/content';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          className="section-heading section-heading--center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Tools of the trade</p>
          <h2 className="section-title">A versatile toolkit.</h2>
          <p className="section-lead">
            The right tool for the problem, with a focus on resilient, accessible experiences.
          </p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.article
              key={category}
              className="glass-panel skill-group"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <h3>{category}</h3>
              <div className="skill-list">
                {items.map((skill) => (
                  <span className="skill-chip" key={skill.name} title={skill.description}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
