
import { useState } from 'react';
import StartupForm from './StartupForm';
import InvestorForm from './InvestorForm';

const FormSection = () => {
  const [activeTab, setActiveTab] = useState<'startup' | 'investor'>('startup');

  return (
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
  );
};

export default FormSection;
