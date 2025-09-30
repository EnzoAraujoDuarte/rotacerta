import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutCompany from '@/components/AboutCompany';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import InvestmentBenefits from '@/components/InvestmentBenefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutCompany />
        <Services />
        <Technology />
        <InvestmentBenefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
