"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="#" className="text-2xl font-bold text-foreground">
              CHANDAN
            </Link>
            <p className="text-muted mt-2">Full-Stack Developer & Creative Technologist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0"
          >
            <a href="#about" className="text-muted hover:text-accent-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted hover:text-accent-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted hover:text-accent-primary transition-colors">
              Projects
            </a>
            <a href="#services" className="text-muted hover:text-accent-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted hover:text-accent-primary transition-colors">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-muted hover:text-accent-primary hover:bg-surface transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-muted hover:text-accent-primary hover:bg-surface transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-muted hover:text-accent-primary hover:bg-surface transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:chandan@example.com"
              className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-muted hover:text-accent-primary hover:bg-surface transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted">
            © {currentYear} Chandan Thapa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}