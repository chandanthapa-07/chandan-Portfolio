// lib/animations.ts
import { Variants } from 'framer-motion';

export const animations: Record<string, Variants> = {
  scrollReveal: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut(1.2)" as const },
    },
  },
  clipReveal: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 1 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  },
  magnetic: {
    normal: { scale: 1, x: 0, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
    active: { scale: 1.05, x: 5, y: 5, transition: { duration: 0.3, ease: "backOut(1.5)" as const } },
  },
  hoverLift: {
    normal: { y: 0, transition: { duration: 0.3 } },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" as const } },
  },
  cta: {
    normal: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "backOut(1.2)" as const } },
  },
  profile: {
    normal: { scale: 1, rotateX: 0, rotateY: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  },
  parallax: {
    normal: { y: 0 },
    active: (progress: number) => ({ y: -progress * 20 }),
  },
  float: {
    animate: { y: [-2, 2, -2] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
  ambient: {
    animate: { rotate: [0, 360] },
    transition: { duration: 120, repeat: Infinity, ease: "linear" as const },
  },
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  },
  lineGrow: {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" as const },
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
      transition: { duration: 2, ease: "easeInOut" as const },
    },
  },
  blurReveal: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {
      filter: "blur(0)",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  },
};
