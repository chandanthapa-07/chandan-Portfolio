"use client";

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1,
}: RevealProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getVariant = () => {
    if (isInView) {
      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      };
    }

    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getVariant()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : getVariant()}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}