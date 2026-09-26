import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';
import { profileImage } from '@/data/content';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-32 md:py-40 bg-[#08090B] relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            variants={animations.scrollReveal}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                variants={animations.textReveal}
                className="text-4xl md:text-5xl font-space-grotesk font-bold text-white"
              >
                ABOUT
              </motion.h2>
              
              <motion.div
                variants={animations.lineGrow}
                className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
              />
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <motion.p variants={animations.textReveal}>
                I'm <span className="text-cyan-400 font-semibold">Chandan Thapa</span>, a developer and designer 
                focused on building modern digital experiences where technology serves human potential.
              </motion.p>

              <motion.p variants={animations.textReveal}>
                <span className="text-pink-400 font-semibold">Development interests:</span> I specialize in creating 
                performant web applications using React, Next.js, and modern JavaScript. I'm passionate about 
                building scalable architectures and writing clean, maintainable code.
              </motion.p>

              <motion.p variants={animations.textReveal}>
                <span className="text-cyan-400 font-semibold">Design interests:</span> My design journey spans 
                from UI/UX design to graphic design, always focusing on creating intuitive interfaces that 
                balance aesthetics with usability. I believe great design should be invisible yet impactful.
              </motion.p>

              <motion.p variants={animations.textReveal}>
                My <span className="text-pink-400 font-semibold">problem-solving philosophy</span> centers around 
                understanding the core challenge, breaking it down into manageable pieces, and iteratively 
                building solutions that exceed expectations. I embrace continuous learning and adapt 
                to new technologies while maintaining focus on delivering real value.
              </motion.p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-[#101216] p-8 flex flex-col justify-center items-center space-y-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/30">
                  <img
                    src={profileImage}
                    alt="Chandan Thapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-xl font-space-grotesk font-bold text-white">CHANDAN THAPA</div>
                  <div className="text-sm text-gray-400">Full-Stack Developer</div>
                  <div className="text-xs text-cyan-400">Creative Technologist</div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Next.js', 'Node.js', 'Laravel', 'UI/UX'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24 border border-cyan-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border border-pink-500/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
