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
      >
        <div>
          <p className="section-kicker">Have something in mind?</p>
          <h2>Let&apos;s make something meaningful.</h2>
          <p>Explore my work or connect with me on social.</p>
        </div>
        <div className="contact-actions">
          <a
            className="button button--primary"
            href={social.find(({ name }) => name === 'GitHub')?.url ?? '#hero'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} aria-hidden="true" /> Find me on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <div className="contact-socials" aria-label="Social profiles">
            {social.map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                {name} <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
