
export interface StartupSubmission {
  id: string;
  companyName: string;
  registrationNumber: string;
  industry: string;
  businessStage: string;
  annualRevenue: string;
  fundingRequired: string;
  fundUse: string;
  businessModel: string;
  email: string;
  phoneNumber: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface InvestorSubmission {
  id: string;
  investorName: string;
  companyName: string;
  investmentRange: string;
  investmentFocus: string[];
  investmentType: string;
  preferredStage: string;
  email: string;
  phoneNumber: string;
  investmentCriteria: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}
