
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
    
    // Smooth scroll for hash links
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash
    
    return () => {
      document.body.classList.remove('bg-balmville-teal');
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal">
      <Navbar />
      <main className="flex-grow">
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
