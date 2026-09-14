"use client";

import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Services } from '@/components/services/Services';
import { Experience } from '@/components/experience/Experience';
import { Community } from '@/components/community/Community';
import { CurrentlyBuilding } from '@/components/now/CurrentlyBuilding';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Community />
        <CurrentlyBuilding />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
