import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Statement from '@/components/statement';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Statement />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      {/* Additional sections would go here */}
    </main>
  );
}
