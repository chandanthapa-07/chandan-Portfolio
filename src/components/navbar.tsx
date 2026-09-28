import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations } from '@/lib/animations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled
          ? 'bg-[#08090B]/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between\">
        <motion.a
          href="#hero"
          onClick={() => scrollToSection('#hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-space-grotesk font-bold text-white hover:text-cyan-400 transition-colors\"
        >
          CHANDAN
        </motion.a>

        <div className="hidden md:flex items-center space-x-8\">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ y: -2 }}
              className={cn(
                'text-sm font-medium transition-colors relative',
                activeSection === item.href.replace('#', '')
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              )}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full\"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-md hover:bg-cyan-500/30 transition-all text-sm font-medium\"
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.nav>
  );
}
