"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, strength = 0.2, radius = 50, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    const transformX = useTransform(springX, [-radius, radius], [-strength * 10, strength * 10]);
    const transformY = useTransform(springY, [-radius, radius], [-strength * 10, strength * 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const xPos = e.clientX - rect.left - rect.width / 2;
      const yPos = e.clientY - rect.top - rect.height / 2;

      x.set(xPos);
      y.set(yPos);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative px-6 py-3 bg-accent-primary text-background font-medium rounded-lg',
          'transition-all duration-300 ease-out',
          'hover:bg-accent-primary/90 hover:shadow-lg',
          'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2',
          className
        )}
        style={{
          x: transformX,
          y: transformY,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';