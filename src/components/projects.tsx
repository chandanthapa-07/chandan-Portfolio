"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const artworkClasses = ['work-art', 'work-art work-art--violet', 'work-art work-art--blue'];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section section--soft">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Ideas, shaped into experiences.</h2>
          <p className="section-lead">
            A snapshot of the kinds of products and interfaces I enjoy bringing to life.
          </p>
        </motion.div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <motion.article
              className="glass-panel work-card"
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!reduceMotion ? { scale: 1.03, y: -8 } : undefined}
            >
              <div className={artworkClasses[index % artworkClasses.length]} aria-hidden="true">
                <motion.div
                  className="work-art__window"
                  whileHover={!reduceMotion ? { rotate: 0, scale: 1.05 } : undefined}
                  transition={{ duration: 0.3 }}
                >
                  <div className="work-art__bar"><i /><i /><i /></div>
                  <div className="work-art__content"><i /><i /></div>
                </motion.div>
              </div>
              <div className="work-card__body">
                <div className="work-card__meta">
                  <span>{project.category}</span>
                  {project.featured && <span>Featured</span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-card__tags" aria-label="Technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <motion.span
                      className="tech-chip"
                      key={technology}
                      whileHover={!reduceMotion ? { background: 'rgba(118, 228, 212, 0.15)', borderColor: 'rgba(118, 228, 212, 0.3)' } : undefined}
                      transition={{ duration: 0.2 }}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  className="work-card__hint"
                  whileHover={!reduceMotion ? { color: 'var(--accent)' } : undefined}
                >
                  Product design &amp; development <ArrowUpRight size={14} aria-hidden="true" />
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
