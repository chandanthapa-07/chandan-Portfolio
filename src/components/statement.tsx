"use client";

import { motion, useReducedMotion } from 'framer-motion';

export default function Statement() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section" aria-label="Design philosophy">
      <motion.div
        className="section-inner glass-panel statement-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={!reduceMotion ? { scale: 1.01, boxShadow: '0 32px 96px rgba(118, 228, 212, 0.15)' } : undefined}
      >
        <p className="section-kicker">My approach</p>
        <h2 className="statement-title">
          I build digital experiences
          <br />
          where <span>design meets technology.</span>
        </h2>
        <p className="statement-copy">
          The best digital products feel effortless: clear in purpose, thoughtful in detail, and
          reliable in every interaction. That balance is what I bring to each project.
        </p>
      </motion.div>
    </section>
  );
}
