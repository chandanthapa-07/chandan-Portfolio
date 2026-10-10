"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Layers, Palette } from 'lucide-react';

export default function About() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <section id="about" className="section section--soft">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">A bit about me</p>
          <h2 className="section-title">Good work lives at the intersection.</h2>
          <p className="section-lead">
            I bring product thinking, visual craft, and hands-on engineering together to make
            technology feel more human.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="glass-panel about-copy"
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p>
              I&apos;m <strong>Chandan Thapa</strong>, a developer and designer focused on creating
              modern digital experiences where technology serves people.
            </p>
            <p>
              My work spans the full journey: shaping an idea, designing a clear interface, and
              building a robust application with modern web tools.
            </p>
            <p>
              I care about the details that make a product feel considered: accessible patterns,
              responsive layouts, meaningful motion, and maintainable code.
            </p>
            <a className="button button--glass" href="#services">
              How I can help <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="glass-panel about-card"
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <div>
              <span className="about-card__label">The sweet spot</span>
              <h3 className="about-card__name">Thoughtful by design.</h3>
              <p className="about-card__role">Creative technologist · Full-stack developer</p>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <strong><Layers size={16} aria-hidden="true" /> End to end</strong>
                <span>From idea to interface</span>
              </div>
              <div className="about-stat">
                <strong><Palette size={16} aria-hidden="true" /> Detail led</strong>
                <span>Clarity in every interaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
