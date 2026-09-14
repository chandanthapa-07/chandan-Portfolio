"use client";

import { motion } from 'framer-motion';
import { social } from '@/data/social';

export function Community() {
  return (
    <section id="community" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">COMMUNITY</h2>
          <div className="w-20 h-1 bg-accent-primary mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {social.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent-primary/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                <span className="text-accent-primary">
                  {social.icon === 'github' && 'GitHub'}
                  {social.icon === 'linkedin' && 'LinkedIn'}
                  {social.icon === 'twitter' && 'Twitter'}
                </span>
              </div>

              <div>
                <h3 className="font-semibold mb-1">{social.name}</h3>
                <p className="text-muted text-sm">Connect with me</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted max-w-2xl mx-auto">
            I'm always open to connecting with fellow developers and tech enthusiasts.
            Whether it's discussing technology, sharing insights, or exploring collaboration opportunities,
            feel free to reach out through any of my social channels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}