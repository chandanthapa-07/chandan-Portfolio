"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX'];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={entrance}
          transition={{ duration: 0.65, ease: 'easeOut', staggerChildren: 0.1 }}
        >
          <motion.div className="eyebrow" variants={entrance} transition={{ duration: 0.5 }}>
            <span className="eyebrow__dot" />
            Available for creative &amp; development projects
          </motion.div>

          <motion.h1
            className="hero__title"
            variants={entrance}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Thoughtful
            <span className="text-gradient">digital craft.</span>
          </motion.h1>

          <motion.p className="hero__role" variants={entrance}>
            Chandan Thapa <span aria-hidden="true">·</span> Full-Stack Developer
          </motion.p>
          <motion.p className="hero__description" variants={entrance}>
            I design and build polished digital experiences, pairing considered interfaces with
            dependable engineering from the first sketch to the final interaction.
          </motion.p>

          <motion.div className="hero__actions" variants={entrance}>
            <a className="button button--primary" href="#projects">
              Explore my work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="button button--glass" href="#about">
              A little about me
            </a>
          </motion.div>

          <motion.div className="hero__meta" variants={entrance}>
            <span><Code2 size={14} aria-hidden="true" /> Full-stack development</span>
            <span><Sparkles size={14} aria-hidden="true" /> UI &amp; interaction design</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
        >
          {!reduceMotion && <div className="portrait-ring" aria-hidden="true" />}
          <div className="hero__glow" aria-hidden="true" />
          <motion.div
            className="portrait-frame"
            {...(reduceMotion ? {} : { whileHover: { scale: 1.015, y: -4 } })}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Chandan Thapa"
              fill
              priority
              sizes="(max-width: 700px) 74vw, (max-width: 1100px) 38vw, 440px"
              className="rounded-full object-cover"
            />
          </motion.div>

          <motion.div
            className="float-card float-card--top"
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Code2 className="float-card__icon" size={16} aria-hidden="true" />
            Building for the web
          </motion.div>
          <motion.div
            className="float-card float-card--bottom"
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="float-card__icon" size={16} aria-hidden="true" />
            {technologies.slice(0, 3).join(' · ')}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className="sr-only focus:not-sr-only"
        href="#about"
        whileHover={reduceMotion ? undefined : { opacity: 0.8 }}
      >
        <ArrowDown size={16} aria-hidden="true" /> Scroll to learn more
      </motion.a>
    </section>
  );
}
