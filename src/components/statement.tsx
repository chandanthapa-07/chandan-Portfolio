import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';

export default function Statement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 md:py-40 bg-[#101216] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={animations.textReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white leading-tight">
            <motion.span
              variants={animations.textReveal}
              className="inline-block"
            >
              I BUILD DIGITAL EXPERIENCES
            </motion.span>
            <br />
            <motion.span
              variants={animations.textReveal}
              className="inline-block mt-4"
              style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #E879F9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              WHERE DESIGN MEETS TECHNOLOGY.
            </motion.span>
          </h2>

          <motion.p
            variants={animations.textReveal}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"\n          >
            Every project I undertake is an opportunity to bridge the gap between
            <span className="text-cyan-400 font-medium"> innovative design</span> and
            <span className="text-pink-400 font-medium"> robust technology.</span> I believe that
            the most impactful digital experiences emerge when aesthetics and functionality
            work in harmony.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
