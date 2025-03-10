
import React from 'react';
import { type FundingRange, type FundUse, type StartupFormValues } from './formValidation';

type BusinessDetailsStepProps = {
  form: StartupFormValues;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const BusinessDetailsStep = ({ form, handleInputChange }: BusinessDetailsStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl text-white mb-4">Business & Funding Details</h3>
      
      <div>
        <label htmlFor="annualRevenue" className="block text-white mb-2">
          Annual Revenue (Last 12 months) <span className="text-balmville-gold">*</span>
        </label>
        <input
          type="text"
          id="annualRevenue"
          name="annualRevenue"
          value={form.annualRevenue}
          onChange={handleInputChange}
          className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
          placeholder="e.g., $100,000"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fundingRequired" className="block text-white mb-2">
            Funding Required <span className="text-balmville-gold">*</span>
          </label>
          <select
            id="fundingRequired"
            name="fundingRequired"
            value={form.fundingRequired}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            required
          >
            <option value="" disabled>Select funding range</option>
            <option value="$30,000 - $50,000">$30,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="$250,000 - $500,000">$250,000 - $500,000</option>
            <option value="$500,000+">$500,000+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="fundUse" className="block text-white mb-2">
            Use of Funds <span className="text-balmville-gold">*</span>
          </label>
          <select
            id="fundUse"
            name="fundUse"
            value={form.fundUse}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            required
          >
            <option value="" disabled>Select primary use</option>
            <option value="Expansion">Expansion</option>
            <option value="R&D">Research & Development</option>
            <option value="Marketing">Marketing & Sales</option>
            <option value="Working Capital">Working Capital</option>
            <option value="Debt Refinancing">Debt Refinancing</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="businessModel" className="block text-white mb-2">
          Business Model Overview <span className="text-balmville-gold">*</span>
        </label>
        <textarea
          id="businessModel"
          name="businessModel"
          value={form.businessModel}
          onChange={handleInputChange}
          rows={4}
          className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
          placeholder="Briefly describe your business model, value proposition, and target market"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default BusinessDetailsStep;
