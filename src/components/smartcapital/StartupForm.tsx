
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

type BusinessStage = 'Early' | 'Growth' | 'Scaling';
type FundingRange = '$30,000 - $50,000' | '$50,000 - $100,000' | '$100,000 - $250,000' | '$250,000 - $500,000' | '$500,000+';
type FundUse = 'Expansion' | 'R&D' | 'Marketing' | 'Working Capital' | 'Debt Refinancing' | 'Other';
type Industry = 'Technology' | 'Fintech' | 'Healthcare' | 'Education' | 'Retail' | 'Agriculture' | 'Manufacturing' | 'Hospitality' | 'Other';

const StartupForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyName: '',
    registrationNumber: '',
    industry: '' as Industry,
    businessStage: '' as BusinessStage,
    annualRevenue: '',
    fundingRequired: '' as FundingRange,
    fundUse: '' as FundUse,
    businessModel: '',
    email: '',
    phoneNumber: '',
    agreeToPay: false,
    agreeToTerms: false,
  });
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFile(e.target.files[0]);
    }
  };
  
  const validateStep1 = () => {
    if (!form.companyName || !form.registrationNumber || !form.industry || !form.businessStage || !attachedFile) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields and attach your company registration document.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };
  
  const validateStep2 = () => {
    if (!form.annualRevenue || !form.fundingRequired || !form.fundUse || !form.businessModel) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields about your business and funding needs.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };
  
  const validateStep3 = () => {
    if (!form.email || !form.phoneNumber || !form.agreeToPay || !form.agreeToTerms) {
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
  
  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep3()) return;
    
    setIsSubmitting(true);
    
    // Simulating form submission - In a real application, this would be an API call
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your startup application has been received. We'll review it and contact you soon.",
      });
      
      // Reset form
      setForm({
        companyName: '',
        registrationNumber: '',
        industry: '' as Industry,
        businessStage: '' as BusinessStage,
        annualRevenue: '',
        fundingRequired: '' as FundingRange,
        fundUse: '' as FundUse,
        businessModel: '',
        email: '',
        phoneNumber: '',
        agreeToPay: false,
        agreeToTerms: false,
      });
      setAttachedFile(null);
      setStep(1);
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-white mb-6">Startup Funding Application</h2>
      
      <div className="flex justify-between mb-8">
        <div 
          className={`h-2 flex-grow rounded-l-full mr-1 transition-all duration-300 ${step >= 1 ? 'bg-balmville-gold' : 'bg-white/30'}`}
        ></div>
        <div 
          className={`h-2 flex-grow mx-1 transition-all duration-300 ${step >= 2 ? 'bg-balmville-gold' : 'bg-white/30'}`}
        ></div>
        <div 
          className={`h-2 flex-grow rounded-r-full ml-1 transition-all duration-300 ${step >= 3 ? 'bg-balmville-gold' : 'bg-white/30'}`}
        ></div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl text-white mb-4">Company Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-white mb-2">
                  Company Name <span className="text-balmville-gold">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
                  placeholder="Registered company name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="registrationNumber" className="block text-white mb-2">
                  Registration Number <span className="text-balmville-gold">*</span>
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={form.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
                  placeholder="Official registration number"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-white mb-2">
                  Industry/Sector <span className="text-balmville-gold">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
                  required
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Retail">Retail</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="businessStage" className="block text-white mb-2">
                  Business Stage <span className="text-balmville-gold">*</span>
                </label>
                <select
                  id="businessStage"
                  name="businessStage"
                  value={form.businessStage}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
                  required
                >
                  <option value="" disabled>Select your business stage</option>
                  <option value="Early">Early (1-3 years)</option>
                  <option value="Growth">Growth (3-5 years)</option>
                  <option value="Scaling">Scaling (5+ years)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="registrationDoc" className="block text-white mb-2">
                Company Registration Document <span className="text-balmville-gold">*</span>
              </label>
              <input
                type="file"
                id="registrationDoc"
                onChange={handleFileChange}
                className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
                accept=".pdf,.doc,.docx,.png,.jpg"
                required
              />
              <p className="text-white/60 text-sm mt-1">
                Upload your business registration certificate (PDF, DOCX, or image)
              </p>
            </div>
          </div>
        )}
        
        {step === 2 && (
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
        )}
        
        {step === 3 && (
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
        )}
        
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:bg-balmville-lightGold transition-all duration-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:bg-balmville-lightGold transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StartupForm;
