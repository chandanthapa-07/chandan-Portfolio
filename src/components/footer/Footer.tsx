"use client";

import { motion } from 'framer-motion';
import { social } from '../../data/social';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <motion.a
        className="brand"
        href="#hero"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <span className="brand__mark">CT</span>
        <span>CHANDAN THAPA</span>
      </motion.a>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map(({ label, href }) => (
          <motion.a
            href={href}
            key={href}
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.a>
        ))}
      </nav>
      <div className="footer-links" aria-label="Social links">
        {social.map(({ name, url }) => (
          <motion.a
            href={url}
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.a>
        ))}
      </div>
      <span>© {new Date().getFullYear()} Chandan Thapa</span>
    </footer>
  );
}