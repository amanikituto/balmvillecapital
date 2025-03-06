
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StartupForm from '../components/smartcapital/StartupForm';
import InvestorForm from '../components/smartcapital/InvestorForm';
import { ChevronDown } from 'lucide-react';

const SmartCapitalConnect = () => {
  const [activeTab, setActiveTab] = useState<'startup' | 'investor'>('startup');

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding">
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

            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col md:flex-row justify-center mb-8 gap-4">
                <button
                  onClick={() => setActiveTab('startup')}
                  className={`py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
                    activeTab === 'startup'
                      ? 'bg-balmville-gold text-balmville-teal'
                      : 'bg-balmville-lightTeal text-white'
                  }`}
                >
                  For Startups
                </button>
                <button
                  onClick={() => setActiveTab('investor')}
                  className={`py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
                    activeTab === 'investor'
                      ? 'bg-balmville-gold text-balmville-teal'
                      : 'bg-balmville-lightTeal text-white'
                  }`}
                >
                  For Investors
                </button>
              </div>

              <div className="bg-balmville-lightTeal/50 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
                {activeTab === 'startup' ? <StartupForm /> : <InvestorForm />}
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-semibold text-white mb-6">
                How It <span className="gradient-text">Works</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">1</div>
                  <h3 className="text-xl font-medium text-white mb-2">Submit Your Application</h3>
                  <p className="text-white/70">Complete the relevant form with your company or investment details.</p>
                </div>
                <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">2</div>
                  <h3 className="text-xl font-medium text-white mb-2">Verification Process</h3>
                  <p className="text-white/70">Our team reviews and verifies all submissions for quality assurance.</p>
                </div>
                <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">3</div>
                  <h3 className="text-xl font-medium text-white mb-2">Curated Matching</h3>
                  <p className="text-white/70">We personally match compatible startups and investors based on criteria.</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-balmville-lightTeal/30 p-6 md:p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-balmville-gold/30 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left"
                      onClick={(e) => {
                        const target = e.currentTarget.nextElementSibling;
                        if (target) {
                          target.classList.toggle('hidden');
                        }
                      }}
                    >
                      <span className="text-lg font-medium text-white">How does the matching process work?</span>
                      <ChevronDown className="h-5 w-5 text-balmville-gold" />
                    </button>
                    <div className="mt-2 text-white/80 hidden">
                      Our team manually reviews all applications and matches startups with investors based on industry, investment size, business stage, and other relevant criteria. All matches are curated to ensure the highest probability of successful partnerships.
                    </div>
                  </div>
                  
                  <div className="border-b border-balmville-gold/30 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left"
                      onClick={(e) => {
                        const target = e.currentTarget.nextElementSibling;
                        if (target) {
                          target.classList.toggle('hidden');
                        }
                      }}
                    >
                      <span className="text-lg font-medium text-white">Is my information kept confidential?</span>
                      <ChevronDown className="h-5 w-5 text-balmville-gold" />
                    </button>
                    <div className="mt-2 text-white/80 hidden">
                      Yes, all information submitted is kept strictly confidential. Startups and investors cannot see each other's information directly. Balmville Capital acts as an intermediary to protect your privacy and secure your data.
                    </div>
                  </div>
                  
                  <div className="border-b border-balmville-gold/30 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left"
                      onClick={(e) => {
                        const target = e.currentTarget.nextElementSibling;
                        if (target) {
                          target.classList.toggle('hidden');
                        }
                      }}
                    >
                      <span className="text-lg font-medium text-white">What happens after I submit my application?</span>
                      <ChevronDown className="h-5 w-5 text-balmville-gold" />
                    </button>
                    <div className="mt-2 text-white/80 hidden">
                      After submission, you'll receive a confirmation email. Our team will review your application, and if it meets our criteria, we'll contact you with potential matches or for additional information. You can also check your application status by contacting us directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmartCapitalConnect;
