
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StartupSubmission, InvestorSubmission } from '@/types/admin';

interface SubmissionsContextType {
  startupSubmissions: StartupSubmission[];
  investorSubmissions: InvestorSubmission[];
  addStartupSubmission: (submission: Omit<StartupSubmission, 'id' | 'submittedAt' | 'status'>) => void;
  addInvestorSubmission: (submission: Omit<InvestorSubmission, 'id' | 'submittedAt' | 'status'>) => void;
}

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

export const SubmissionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get stored submissions from localStorage or initialize empty arrays
  const initialStartupSubmissions = JSON.parse(localStorage.getItem('balmville_startup_submissions') || '[]');
  const initialInvestorSubmissions = JSON.parse(localStorage.getItem('balmville_investor_submissions') || '[]');
  
  const [startupSubmissions, setStartupSubmissions] = useState<StartupSubmission[]>(initialStartupSubmissions);
  const [investorSubmissions, setInvestorSubmissions] = useState<InvestorSubmission[]>(initialInvestorSubmissions);

  const addStartupSubmission = (submission: Omit<StartupSubmission, 'id' | 'submittedAt' | 'status'>) => {
    const newSubmission: StartupSubmission = {
      ...submission,
      id: `startup-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    const updatedSubmissions = [...startupSubmissions, newSubmission];
    setStartupSubmissions(updatedSubmissions);
    localStorage.setItem('balmville_startup_submissions', JSON.stringify(updatedSubmissions));
  };

  const addInvestorSubmission = (submission: Omit<InvestorSubmission, 'id' | 'submittedAt' | 'status'>) => {
    const newSubmission: InvestorSubmission = {
      ...submission,
      id: `investor-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    const updatedSubmissions = [...investorSubmissions, newSubmission];
    setInvestorSubmissions(updatedSubmissions);
    localStorage.setItem('balmville_investor_submissions', JSON.stringify(updatedSubmissions));
  };

  return (
    <SubmissionsContext.Provider value={{ 
      startupSubmissions, 
      investorSubmissions, 
      addStartupSubmission, 
      addInvestorSubmission
    }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = () => {
  const context = useContext(SubmissionsContext);
  if (context === undefined) {
    throw new Error('useSubmissions must be used within a SubmissionsProvider');
  }
  return context;
};
