
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FormSection from '../components/smartcapital/FormSection';
import HowItWorksSection from '../components/smartcapital/HowItWorksSection';
import FAQSection from '../components/smartcapital/FAQSection';
import ChatbotFAQ from '../components/smartcapital/ChatbotFAQ';
import PageHeader from '../components/smartcapital/PageHeader';
import { useLocation } from 'react-router-dom';

const SmartCapitalConnect = () => {
  const location = useLocation();
  
  // Only scroll to top on initial page load, not on subsequent location changes
  useEffect(() => {
    if (location.pathname === '/smart-capital-connect' && !location.hash) {
      window.scrollTo(0, 0);
    }
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
