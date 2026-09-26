import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { animations } from '@/lib/animations';
import { profileImage } from '@/data/content';

const technologyLabels = [
  { label: 'React', x: 15, y: -20, delay: 0.1 },
  { label: 'Next.js', x: 40, y: 25, delay: 0.2 },
  { label: 'JavaScript', x: -30, y: 15, delay: 0.3 },
  { label: 'Node.js', x: 25, y: -30, delay: 0.4 },
  { label: 'PHP', x: -40, y: 5, delay: 0.5 },
  { label: 'Laravel', x: 35, y: 35, delay: 0.6 },
  { label: 'PostgreSQL', x: -15, y: -25, delay: 0.7 },
  { label: 'UI/UX', x: 45, y: 40, delay: 0.8 },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden\"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10\"
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px\]">

      <div className="absolute inset-0 flex items-center justify-center\">
        <motion.div
          style={{ x: mousePosition.x, y: mousePosition.y }}
          variants={animations.profile}
          whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-1\"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative\">
            <Image
              src={profileImage}
              alt="Chandan Thapa"
              fill
              className="object-cover\"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\"
          </div>
        </motion.div>

        {technologyLabels.map((tech, index) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: tech.delay, duration: 0.5, ease: 'easeOut' }}
            style={{ x: tech.x, y: tech.y }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="absolute px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-medium text-white/80\"
          >
            {tech.label}
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent animate-pulse\"
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center\">
        <motion.div
          variants={animations.textReveal}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-8\"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-cyan-400 font-medium tracking-wider uppercase text-sm md:text-base\"
          >
            AVAILABLE FOR CREATIVE & DEVELOPMENT PROJECTS
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-space-grotesk font-bold text-white leading-tight\">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
              className="inline-block\"
            >
              CHANDAN
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
              className="inline-block\"
            >
              THAPA
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          variants={animations.textReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="space-y-6 mb-12\"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-inter text-gray-300 font-light\">
            Full-Stack Developer
            & Creative Technologist
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed\">
            I build digital products, web experiences,
            and interfaces that combine technology,
            design, and meaningful interaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16\"
        >
          <motion.button
            variants={animations.cta}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-medium transition-colors shadow-lg shadow-cyan-500/25\"
          >
            View Projects
          </motion.button>

          <motion.button
            variants={animations.cta}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-md font-medium transition-colors backdrop-blur-sm\"
          >
            Let's Talk
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2\"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-2 text-gray-400\"
          >
            <span className="text-xs uppercase tracking-wider\">Scroll</span>
            <ChevronDown className="w-4 h-4\" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
