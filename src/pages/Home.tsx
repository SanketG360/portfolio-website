import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { SystemDesign } from '../sections/SystemDesign';
import { Experience } from '../sections/Experience';
import { GitHubSection } from '../sections/GitHub';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SystemDesign />
      <Experience />
      <GitHubSection />
      <Contact />
      <Footer />
    </div>
  );
};
