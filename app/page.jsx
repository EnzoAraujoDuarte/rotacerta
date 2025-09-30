import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Organogram from '@/components/Organogram';
import Services from '@/components/Services';
import TechSolutions from '@/components/TechSolutions';
import Infrastructure from '@/components/Infrastructure';
import Investment from '@/components/Investment';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Organogram />
        <Services />
        <TechSolutions />
        <Infrastructure />
        <Investment />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
