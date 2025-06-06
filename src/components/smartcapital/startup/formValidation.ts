
import { useToast } from "@/hooks/use-toast";

export type BusinessStage = 'Early' | 'Growth' | 'Scaling';
export type FundingRange = '$30,000 - $50,000' | '$50,000 - $100,000' | '$100,000 - $250,000' | '$250,000 - $500,000' | '$500,000+';
export type FundUse = 'Expansion' | 'R&D' | 'Marketing' | 'Working Capital' | 'Debt Refinancing' | 'Other';
export type Industry = 'Technology' | 'Fintech' | 'Healthcare' | 'Education' | 'Retail' | 'Agriculture' | 'Manufacturing' | 'Hospitality' | 'Other';

export type StartupFormValues = {
  companyName: string;
  registrationNumber: string;
  industry: Industry;
  businessStage: BusinessStage;
  annualRevenue: string;
  fundingRequired: FundingRange;
  fundUse: FundUse;
  businessModel: string;
  email: string;
  phoneNumber: string;
  agreeToPay: boolean;
  agreeToTerms: boolean;
}

export const validateStep1 = (
  form: StartupFormValues, 
  attachedFile: File | null, 
  toast: ReturnType<typeof useToast>['toast']
) => {
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

export const validateStep2 = (
  form: StartupFormValues, 
  toast: ReturnType<typeof useToast>['toast']
) => {
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

export const validateStep3 = (
  form: StartupFormValues, 
  toast: ReturnType<typeof useToast>['toast']
) => {
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
