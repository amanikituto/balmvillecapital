
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import Contact from '../components/home/Contact';
import ChatbotFAQ from '../components/smartcapital/ChatbotFAQ';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('bg-balmville-teal');
    
    // Handle hash links for smooth scrolling
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        // Add a small delay to ensure the page has loaded properly
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Scroll to top if no hash
        window.scrollTo(0, 0);
      }
    };

    // Initial scroll position
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      document.body.classList.remove('bg-balmville-teal');
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <ChatbotFAQ />
    </div>
  );
};

export default Index;
