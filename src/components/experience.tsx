"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { experience } from '@/data/content';

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section section--soft">
      <div className="section-inner">
        <motion.div
          className="section-heading section-heading--center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">The journey so far</p>
          <h2 className="section-title">Curiosity in motion.</h2>
          <p className="section-lead">
            A continuing journey through technology, design, and making ideas real.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className="glass-panel timeline-card"
              key={`${item.year}-${item.title}`}
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
              whileHover={!reduceMotion ? { scale: 1.02, x: 8 } : undefined}
            >
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
