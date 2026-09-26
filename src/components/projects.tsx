import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = ['ALL', 'WEB', 'FULL-STACK', 'UI/UX', 'DESIGN', 'EXPERIMENTS'];
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <section id="projects" className="py-32 md:py-40 bg-[#08090B] relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={animations.scrollReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6">
            SELECTED WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mx-auto" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'}
              `}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid - will be filtered based on activeFilter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project cards will go here */}
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              variants={animations.scaleReveal}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#101216] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-pink-500/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-medium">01</span>
                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-400">
                      WEB
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    Project Name
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    Short project description that showcases the work.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Next.js'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    VIEW PROJECT →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
