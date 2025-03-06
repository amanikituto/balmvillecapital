
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

type InvestmentFocus = 'Technology' | 'Fintech' | 'Healthcare' | 'Education' | 'Retail' | 'Agriculture' | 'Manufacturing' | 'Hospitality' | 'Any' | 'Other';
type InvestmentType = 'Equity' | 'Debt' | 'Hybrid' | 'Convertible Note' | 'Revenue Sharing';
type BusinessStage = 'Early' | 'Growth' | 'Scaling' | 'Any';
type InvestmentRange = '$30,000 - $50,000' | '$50,000 - $100,000' | '$100,000 - $250,000' | '$250,000 - $500,000' | '$500,000+' | 'Custom';

const InvestorForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    investorName: '',
    companyName: '',
    investmentRange: '' as InvestmentRange,
    customRange: '',
    investmentFocus: [] as InvestmentFocus[],
    otherFocus: '',
    investmentType: '' as InvestmentType,
    preferredStage: '' as BusinessStage,
    email: '',
    phoneNumber: '',
    investmentCriteria: '',
    agreeToPay: false,
    agreeToTerms: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm(prev => {
      if (checked) {
        return { ...prev, investmentFocus: [...prev.investmentFocus, value as InvestmentFocus] };
      } else {
        return { ...prev, investmentFocus: prev.investmentFocus.filter(item => item !== value) };
      }
    });
  };
  
  const validateForm = () => {
    if (
      !form.investorName ||
      !form.investmentRange ||
      (form.investmentRange === 'Custom' && !form.customRange) ||
      form.investmentFocus.length === 0 ||
      !form.investmentType ||
      !form.preferredStage ||
      !form.email ||
      !form.phoneNumber ||
      !form.agreeToPay ||
      !form.agreeToTerms
    ) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields and accept both the payment and terms conditions.",
        variant: "destructive",
      });
      return false;
    }
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulating form submission - In a real application, this would be an API call
    setTimeout(() => {
      toast({
        title: "Investor Profile Submitted",
        description: "Your investor profile has been received. We'll review it and contact you with potential opportunities.",
      });
      
      // Reset form
      setForm({
        investorName: '',
        companyName: '',
        investmentRange: '' as InvestmentRange,
        customRange: '',
        investmentFocus: [] as InvestmentFocus[],
        otherFocus: '',
        investmentType: '' as InvestmentType,
        preferredStage: '' as BusinessStage,
        email: '',
        phoneNumber: '',
        investmentCriteria: '',
        agreeToPay: false,
        agreeToTerms: false,
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-white mb-6">Investor Interest Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="investorName" className="block text-white mb-2">
              Investor Name <span className="text-balmville-gold">*</span>
            </label>
            <input
              type="text"
              id="investorName"
              name="investorName"
              value={form.investorName}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="companyName" className="block text-white mb-2">
              Company Name (if applicable)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              placeholder="Your company or fund name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="investmentRange" className="block text-white mb-2">
            Investment Range <span className="text-balmville-gold">*</span>
          </label>
          <select
            id="investmentRange"
            name="investmentRange"
            value={form.investmentRange}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            required
          >
            <option value="" disabled>Select investment range</option>
            <option value="$30,000 - $50,000">$30,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="$250,000 - $500,000">$250,000 - $500,000</option>
            <option value="$500,000+">$500,000+</option>
            <option value="Custom">Custom Range</option>
          </select>
          
          {form.investmentRange === 'Custom' && (
            <input
              type="text"
              name="customRange"
              value={form.customRange}
              onChange={handleInputChange}
              className="w-full mt-2 bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              placeholder="Specify your investment range"
              required
            />
          )}
        </div>
        
        <div>
          <label className="block text-white mb-3">
            Investment Focus <span className="text-balmville-gold">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
            {[
              'Technology',
              'Fintech',
              'Healthcare',
              'Education',
              'Retail',
              'Agriculture',
              'Manufacturing',
              'Hospitality',
              'Any',
              'Other'
            ].map((focus) => (
              <div key={focus} className="flex items-center">
                <input
                  type="checkbox"
                  id={`focus-${focus}`}
                  name="investmentFocus"
                  value={focus}
                  checked={form.investmentFocus.includes(focus as InvestmentFocus)}
                  onChange={handleFocusChange}
                  className="mr-2"
                />
                <label htmlFor={`focus-${focus}`} className="text-white cursor-pointer">
                  {focus}
                </label>
              </div>
            ))}
          </div>
          
          {form.investmentFocus.includes('Other') && (
            <input
              type="text"
              name="otherFocus"
              value={form.otherFocus}
              onChange={handleInputChange}
              className="w-full mt-2 bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              placeholder="Specify other investment focus"
              required
            />
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="investmentType" className="block text-white mb-2">
              Type of Investment <span className="text-balmville-gold">*</span>
            </label>
            <select
              id="investmentType"
              name="investmentType"
              value={form.investmentType}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              required
            >
              <option value="" disabled>Select investment type</option>
              <option value="Equity">Equity</option>
              <option value="Debt">Debt</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Convertible Note">Convertible Note</option>
              <option value="Revenue Sharing">Revenue Sharing</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="preferredStage" className="block text-white mb-2">
              Preferred Business Stage <span className="text-balmville-gold">*</span>
            </label>
            <select
              id="preferredStage"
              name="preferredStage"
              value={form.preferredStage}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
              required
            >
              <option value="" disabled>Select preferred stage</option>
              <option value="Early">Early (1-3 years)</option>
              <option value="Growth">Growth (3-5 years)</option>
              <option value="Scaling">Scaling (5+ years)</option>
              <option value="Any">Any Stage</option>
            </select>
          </div>
        </div>
        
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
              placeholder="your@email.com"
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
        
        <div>
          <label htmlFor="investmentCriteria" className="block text-white mb-2">
            Additional Investment Criteria
          </label>
          <textarea
            id="investmentCriteria"
            name="investmentCriteria"
            value={form.investmentCriteria}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            placeholder="Share any specific criteria, requirements, or preferences for your investments"
          ></textarea>
        </div>
        
        <div className="p-4 bg-balmville-gold/10 rounded-md border border-balmville-gold/30">
          <h4 className="text-lg font-medium text-white mb-2">Verification Fee</h4>
          <p className="text-white/80 mb-4">
            A $10 verification fee is required to process your investor profile. This helps us ensure
            only serious investors are included in our network and supports our matching services.
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
            will review my profile and may contact me regarding potential investment opportunities.
          </label>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:bg-balmville-lightGold transition-all duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestorForm;
