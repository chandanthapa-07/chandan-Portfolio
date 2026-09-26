import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';
import { skills } from '@/data/content';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-32 md:py-40 bg-[#101216] relative overflow-hidden\">
      <div className="relative z-10 max-w-7xl mx-auto px-6\">
        <motion.div
          ref={ref}
          variants={animations.scrollReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20\"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6\">
            CAPABILITIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mx-auto\"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={animations.scaleReveal}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="space-y-4\"
            >
              <h3 className="text-xl font-space-grotesk font-semibold text-white capitalize border-b border-white/10 pb-2\">
                {category}
              </h3>
              
              <div className="space-y-3\">
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group\"
                  >
                    <div className="flex items-center justify-between mb-2\">
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors\">
                        {skill.name}
                      </div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full\"
                      />
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors\">
                      {skill.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
