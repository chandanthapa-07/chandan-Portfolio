import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';
import { skills } from '@/data/content';
import { useState } from 'react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
  };

  const closeSkillPanel = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="py-32 md:py-40 bg-[#101216] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-pink-500/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={animations.scrollReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6">
            CAPABILITIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mx-auto" />
        </motion.div>

        {/* Skills visualization - Constellation style */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central core */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'backOut(1.5)' }}
              className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative"
            >
              <div className="text-center">
                <div className="text-2xl font-space-grotesk font-bold text-white">CHANDAN</div>
                <div className="text-sm text-gray-400">THAPA</div>
                <div className="text-xs text-cyan-400 mt-2">CREATIVE TECH</div>
              </div>
              
              {/* Orbiting elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={inView ? {
                    scale: 1,
                    x: Math.cos(i * Math.PI / 4) * 120,
                    y: Math.sin(i * Math.PI / 4) * 120,
                  } : {}}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center"
                >
                  <div className="text-xs font-medium text-white">
                    {['React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'SQL', 'UI/UX', 'JS'][i]}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="relative z-10 h-96" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={animations.scaleReveal}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-space-grotesk font-semibold text-white capitalize border-b border-white/10 pb-2">
                {category}
              </h3>
              
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSkillClick(skill)}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill detail panel */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
          >
            <div className="w-80 bg-[#15171C] rounded-xl border border-white/10 p-6 backdrop-blur-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-space-grotesk font-bold text-white">
                  {selectedSkill.name}
                </h3>
                <button
                  onClick={closeSkillPanel}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-cyan-400 mb-1">CATEGORY</div>
                  <div className="text-gray-300 capitalize">{selectedSkill.category}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-cyan-400 mb-1">DESCRIPTION</div>
                  <div className="text-gray-300 text-sm">{selectedSkill.description}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-cyan-400 mb-1">RELATED TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills[selectedSkill.category as keyof typeof skills]
                      .filter((s: any) => s.name !== selectedSkill.name)
                      .slice(0, 3)
                      .map((related: any) => (
                        <span
                          key={related.name}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400"
                        >
                          {related.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
