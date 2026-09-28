import { experience } from '@/data/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-32 md:py-40 bg-[#08090B] relative\">
      <div className="relative z-10 max-w-6xl mx-auto px-6\">
        <motion.div
          ref={ref}
          variants={animations.scrollReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20\"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6\">
            JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mx-auto\"
          />
        </motion.div>

        <div className="relative\">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-pink-500 to-cyan-500 h-full rounded-full\"
          />

          <div className="space-y-16\">
            {experience.map((item, index) => (
<motion.div
                key={item.year}
                variants={animations.scaleReveal}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-[#101216] rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300\">
                    <div className="text-2xl font-space-grotesk font-bold text-cyan-400 mb-2\">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-white mb-3\">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed\">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5, ease: 'backOut(1.5)' }}
                  className="w-6 h-6 rounded-full bg-cyan-500 border-4 border-[#08090B] z-10 relative\"
                />
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}\">
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
