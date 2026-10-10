import type { Variants } from 'framer-motion';

export const animations: Record<string, Variants> = {
  scrollReveal: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 220, damping: 18 },
    },
  },
  clipReveal: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 1 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  },
  magnetic: {
    normal: { scale: 1, x: 0, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    active: {
      scale: 1.05,
      x: 5,
      y: 5,
      transition: { type: 'spring', stiffness: 300, damping: 18 },
    },
  },
  hoverLift: {
    normal: { y: 0, transition: { duration: 0.3 } },
    hover: { y: -5, transition: { duration: 0.3, ease: 'easeOut' } },
  },
  cta: {
    normal: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: 'spring', stiffness: 320, damping: 18 },
    },
  },
  profile: {
    normal: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: { type: 'spring', stiffness: 180, damping: 20 },
    },
  },
  parallax: {
    normal: { y: 0 },
    active: (progress: number) => ({ y: -progress * 20 }),
  },
  float: {
    animate: {
      y: [-2, 2, -2],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  ambient: {
    animate: {
      rotate: [0, 360],
      transition: { duration: 120, repeat: Infinity, ease: 'linear' },
    },
  },
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  lineGrow: {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  },
  imageOverlay: {
    normal: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.4 } },
  },
  typewriter: {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 2, ease: 'easeInOut' },
    },
  },
  blurReveal: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {
      filter: "blur(0)",
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },
};
