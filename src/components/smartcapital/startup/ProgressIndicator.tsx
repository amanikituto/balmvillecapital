
import React from 'react';

type ProgressIndicatorProps = {
  currentStep: number;
}

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  return (
    <div className="flex justify-between mb-8">
      <div 
        className={`h-2 flex-grow rounded-l-full mr-1 transition-all duration-300 ${currentStep >= 1 ? 'bg-balmville-gold' : 'bg-white/30'}`}
      ></div>
      <div 
        className={`h-2 flex-grow mx-1 transition-all duration-300 ${currentStep >= 2 ? 'bg-balmville-gold' : 'bg-white/30'}`}
      ></div>
      <div 
        className={`h-2 flex-grow rounded-r-full ml-1 transition-all duration-300 ${currentStep >= 3 ? 'bg-balmville-gold' : 'bg-white/30'}`}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
