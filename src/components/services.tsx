import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';
import { services } from '@/data/content';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 md:py-40 bg-[#101216] relative overflow-hidden\">
      <div className="relative z-10 max-w-6xl mx-auto px-6\">
        <motion.div
          ref={ref}
          variants={animations.scrollReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20\"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6\">
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mx-auto\"
          />
        </motion.div>

        <div className="space-y-8\">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={animations.scaleReveal}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.1 }}
              className="group relative\"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-[#08090B] rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300\">
                <div className="flex-shrink-0\">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center text-xl font-space-grotesk font-bold text-white\">
                    {service.number}
                  </div>
                </div>
                
                <div className="flex-grow\">
                  <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors\">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed\">
                    {service.description}
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300\"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center\">
                    <span className="text-xl\">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
