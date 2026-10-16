"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { social } from '@/data/social';

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section">
      <motion.div
        className="section-inner glass-panel contact-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        whileHover={!reduceMotion ? { scale: 1.01, boxShadow: '0 32px 96px rgba(118, 228, 212, 0.15)' } : undefined}
      >
        <div>
          <p className="section-kicker">Have something in mind?</p>
          <h2>Let&apos;s make something meaningful.</h2>
          <p>Explore my work or connect with me on social.</p>
        </div>
        <div className="contact-actions">
          <motion.a
            className="button button--primary"
            href={social.find(({ name }) => name === 'GitHub')?.url ?? '#hero'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={!reduceMotion ? { scale: 1.05, background: '#a0f4e7' } : undefined}
            whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
            transition={{ duration: 0.2 }}
          >
            <Github size={15} aria-hidden="true" /> Find me on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </motion.a>
          <div className="contact-socials" aria-label="Social profiles">
            {social.map(({ name, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={!reduceMotion ? { scale: 1.05, color: 'var(--accent)' } : undefined}
                whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
                transition={{ duration: 0.2 }}
              >
                {name} <ArrowUpRight size={12} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
