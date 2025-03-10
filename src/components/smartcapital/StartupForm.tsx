
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useSubmissions } from '@/contexts/SubmissionsContext';
import CompanyInfoStep from './startup/CompanyInfoStep';
import BusinessDetailsStep from './startup/BusinessDetailsStep';
import ContactVerificationStep from './startup/ContactVerificationStep';
import ProgressIndicator from './startup/ProgressIndicator';
import FormNavigationButtons from './startup/FormNavigationButtons';
import { 
  validateStep1, 
  validateStep2, 
  validateStep3, 
  type StartupFormValues,
  type BusinessStage,
  type FundingRange,
  type FundUse,
  type Industry
} from './startup/formValidation';

const StartupForm = () => {
  const { toast } = useToast();
  const { addStartupSubmission } = useSubmissions();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<StartupFormValues>({
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
  
  const nextStep = () => {
    if (step === 1 && validateStep1(form, attachedFile, toast)) {
      setStep(2);
    } else if (step === 2 && validateStep2(form, toast)) {
      setStep(3);
    }
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep3(form, toast)) return;
    
    setIsSubmitting(true);
    
    // Save submission to context & localStorage
    addStartupSubmission({
      companyName: form.companyName,
      registrationNumber: form.registrationNumber,
      industry: form.industry,
      businessStage: form.businessStage,
      annualRevenue: form.annualRevenue,
      fundingRequired: form.fundingRequired,
      fundUse: form.fundUse,
      businessModel: form.businessModel,
      email: form.email,
      phoneNumber: form.phoneNumber
    });
    
    // Show success toast
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
  };
  
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-white mb-6">Startup Funding</h2>
      
      <ProgressIndicator currentStep={step} />
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <CompanyInfoStep 
            form={form} 
            handleInputChange={handleInputChange} 
            handleFileChange={handleFileChange}
            attachedFile={attachedFile}
          />
        )}
        
        {step === 2 && (
          <BusinessDetailsStep 
            form={form} 
            handleInputChange={handleInputChange} 
          />
        )}
        
        {step === 3 && (
          <ContactVerificationStep 
            form={form} 
            handleInputChange={handleInputChange} 
            handleCheckboxChange={handleCheckboxChange} 
          />
        )}
        
        <FormNavigationButtons 
          step={step} 
          isSubmitting={isSubmitting} 
          prevStep={prevStep} 
          nextStep={nextStep} 
        />
      </form>
    </div>
  );
};

export default StartupForm;
