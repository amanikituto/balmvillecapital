
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FormSection from '../components/smartcapital/FormSection';
import HowItWorksSection from '../components/smartcapital/HowItWorksSection';
import FAQSection from '../components/smartcapital/FAQSection';
import ChatbotFAQ from '../components/smartcapital/ChatbotFAQ';
import PageHeader from '../components/smartcapital/PageHeader';

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
            <PageHeader />
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
