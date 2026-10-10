"use client";

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#experience' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = ['hero', ...navItems.map(({ href }) => href.slice(1)), 'contact'];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const { top, bottom } = element.getBoundingClientRect();
        return top <= 140 && bottom > 140;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`}
      >
        <a className="brand" href="#hero" onClick={closeMenu} aria-label="Chandan Thapa, home">
          <span className="brand__mark">CT</span>
          <span>CHANDAN THAPA</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(({ label, href }) => {
            const section = href.slice(1);
            return (
              <a
                key={href}
                className={`nav-link${activeSection === section ? ' nav-link--active' : ''}`}
                href={href}
                aria-current={activeSection === section ? 'location' : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <a className="button button--glass site-nav__cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map(({ label, href }) => {
              const section = href.slice(1);
              return (
                <a
                  key={href}
                  className={`nav-link${activeSection === section ? ' nav-link--active' : ''}`}
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              );
            })}
            <a className="button button--primary" href="#contact" onClick={closeMenu}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
