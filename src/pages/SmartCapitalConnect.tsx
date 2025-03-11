
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FormSection from '../components/smartcapital/FormSection';
import HowItWorksSection from '../components/smartcapital/HowItWorksSection';
import FAQSection from '../components/smartcapital/FAQSection';
import ChatbotFAQ from '../components/smartcapital/ChatbotFAQ';

const SmartCapitalConnect = () => {
  // Add useEffect to scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-24 w-full">
        <section className="section-padding w-full">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Smart Capital <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Connecting innovative startups with strategic investors for mutual growth.
                All connections are carefully curated by Balmville Capital Ltd to ensure quality matches.
              </p>
            </div>

            <FormSection />
            <HowItWorksSection />
            <FAQSection />
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotFAQ />
    </div>
  );
};

export default SmartCapitalConnect;
