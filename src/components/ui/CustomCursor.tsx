"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const transformX = useTransform(springX, [-50, 50], [-10, 10]);
  const transformY = useTransform(springY, [-50, 50], [-10, 10]);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || 'maxTouchPoints' in navigator);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkTouchDevice);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]',
        'bg-accent-primary/30 backdrop-blur-sm',
        'mix-blend-difference',
        isHovering ? 'w-12 h-12 bg-accent-primary/10' : 'w-5 h-5',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      )}
      style={{
        x: transformX,
        y: transformY,
        marginLeft: -12,
        marginTop: -12,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    />
  );
}