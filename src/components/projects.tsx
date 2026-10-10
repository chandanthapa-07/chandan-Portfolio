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
            >
              <div className={artworkClasses[index % artworkClasses.length]} aria-hidden="true">
                <div className="work-art__window">
                  <div className="work-art__bar"><i /><i /><i /></div>
                  <div className="work-art__content"><i /><i /></div>
                </div>
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
                    <span className="tech-chip" key={technology}>{technology}</span>
                  ))}
                </div>
                <span className="work-card__hint">
                  Product design &amp; development <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
