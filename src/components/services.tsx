"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/content';

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">What I do</p>
          <h2 className="section-title">From first thought to final detail.</h2>
          <p className="section-lead">
            Flexible support across the product journey, with craft and usability at every step.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="glass-panel service-card"
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={!reduceMotion ? { scale: 1.05, y: -6, borderColor: 'rgba(118, 228, 212, 0.35)', background: 'rgba(118, 228, 212, 0.05)' } : undefined}
              whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
            >
              <span className="service-card__number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <motion.div
                whileHover={!reduceMotion ? { scale: 1.2, x: 3 } : undefined}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="service-card__arrow" size={16} aria-hidden="true" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
