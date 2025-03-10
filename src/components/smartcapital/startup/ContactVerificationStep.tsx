
import React from 'react';

type ContactVerificationStepProps = {
  form: {
    email: string;
    phoneNumber: string;
    agreeToPay: boolean;
    agreeToTerms: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactVerificationStep = ({ form, handleInputChange, handleCheckboxChange }: ContactVerificationStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl text-white mb-4">Contact & Verification</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email Address <span className="text-balmville-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            placeholder="company@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-white mb-2">
            Phone Number <span className="text-balmville-gold">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            placeholder="+254 7XX XXX XXX"
            required
          />
        </div>
      </div>
      
      <div className="p-4 bg-balmville-gold/10 rounded-md border border-balmville-gold/30">
        <h4 className="text-lg font-medium text-white mb-2">Verification Fee</h4>
        <p className="text-white/80 mb-4">
          A $10 verification fee is required to process your application. This helps us ensure
          only serious applications are reviewed and supports our administrative costs.
        </p>
        
        <div className="flex items-start mb-2">
          <input
            type="checkbox"
            id="agreeToPay"
            name="agreeToPay"
            checked={form.agreeToPay}
            onChange={handleCheckboxChange}
            className="mt-1 mr-3"
            required
          />
          <label htmlFor="agreeToPay" className="text-white">
            I agree to pay the $10 verification fee upon submission
          </label>
        </div>
      </div>
      
      <div className="flex items-start">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={form.agreeToTerms}
          onChange={handleCheckboxChange}
          className="mt-1 mr-3"
          required
        />
        <label htmlFor="agreeToTerms" className="text-white">
          I confirm that all information provided is accurate and complete. I understand that Balmville Capital
          will review my application and may contact me for additional information.
        </label>
      </div>
    </div>
  );
};

export default ContactVerificationStep;
